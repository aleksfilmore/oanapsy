// Fisier: src/services/contactService.js
// Service pentru gestionarea cererilor de contact și programări

import { sanitizeInput, sanitizeEmail, sanitizePhone } from '../utils/security';

// Mock email service - în producție ar trebui folosit un serviciu real
class ContactService {
  constructor() {
    this.therapyRequests = this.loadTherapyRequests();
  }

  // Încărcarea cererilor din localStorage
  loadTherapyRequests() {
    try {
      const saved = localStorage.getItem('therapyRequests');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading therapy requests:', error);
      return [];
    }
  }

  // Salvarea cererilor în localStorage
  saveTherapyRequests() {
    try {
      localStorage.setItem('therapyRequests', JSON.stringify(this.therapyRequests));
    } catch (error) {
      console.error('Error saving therapy requests:', error);
    }
  }

  // Generarea unui ID unic
  generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }

  // Validarea și sanitizarea datelor formularului
  validateAndSanitizeFormData(formData) {
    const errors = [];
    
    // Sanitizarea datelor
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeEmail(formData.email),
      phone: sanitizePhone(formData.phone),
      message: sanitizeInput(formData.message),
      sessionType: sanitizeInput(formData.sessionType)
    };

    // Validări
    if (!sanitizedData.name || sanitizedData.name.length < 2) {
      errors.push('Numele trebuie să conțină cel puțin 2 caractere');
    }

    if (!sanitizedData.email) {
      errors.push('Email-ul este obligatoriu și trebuie să fie valid');
    }

    if (!sanitizedData.message || sanitizedData.message.length < 10) {
      errors.push('Mesajul trebuie să conțină cel puțin 10 caractere');
    }

    if (!['individual', 'couple', 'consultation', 'online'].includes(sanitizedData.sessionType)) {
      errors.push('Tipul de ședință nu este valid');
    }

    return { sanitizedData, errors };
  }

  // Mock email sending - înlocuiește cu serviciu real în producție
  async sendEmail(formData) {
    // Simulăm delay-ul unui request real
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // În producție, aici ai trimite email-ul prin servicii ca:
    // - EmailJS
    // - SendGrid
    // - Nodemailer (dacă ai backend)
    // - Netlify Forms
    
    const emailContent = {
      to: 'psihoterapeut@oanatenea.ro',
      subject: `Cerere de programare - ${formData.sessionType}`,
      body: `
Nume: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || 'Nu a fost furnizat'}
Tip ședință: ${this.getSessionTypeLabel(formData.sessionType)}

Mesaj:
${formData.message}

---
Această cerere a fost trimisă prin formularul de contact de pe site.
Data: ${new Date().toLocaleString('ro-RO')}
      `.trim()
    };

    // Pentru moment, logăm în consolă
    console.log('Mock email sent:', emailContent);
    
    // Returnăm succes
    return { success: true, emailContent };
  }

  // Etichete pentru tipurile de ședințe
  getSessionTypeLabel(sessionType) {
    const labels = {
      individual: 'Ședință individuală',
      couple: 'Terapie de cuplu',
      consultation: 'Consultație inițială',
      online: 'Ședință online'
    };
    return labels[sessionType] || sessionType;
  }

  // Crearea unei cereri de terapie
  createTherapyRequest(formData) {
    const request = {
      id: this.generateId(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      sessionType: formData.sessionType,
      message: formData.message,
      status: 'pending',
      priority: this.determinePriority(formData.message),
      submittedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      notes: '',
      scheduledDate: null
    };

    this.therapyRequests.unshift(request); // Adaugă la început
    this.saveTherapyRequests();
    
    return request;
  }

  // Determinarea priorității în funcție de mesaj
  determinePriority(message) {
    const urgentKeywords = ['urgent', 'criză', 'depresie severă', 'gânduri sinucigașe', 'panică'];
    const lowerMessage = message.toLowerCase();
    
    for (const keyword of urgentKeywords) {
      if (lowerMessage.includes(keyword)) {
        return 'high';
      }
    }
    
    return 'medium';
  }

  // Procesarea completă a formularului
  async submitContactForm(formData) {
    try {
      // Validare și sanitizare
      const { sanitizedData, errors } = this.validateAndSanitizeFormData(formData);
      
      if (errors.length > 0) {
        return {
          success: false,
          errors: errors,
          message: 'Vă rugăm să corectați erorile din formular.'
        };
      }

      // Trimiterea email-ului
      const emailResult = await this.sendEmail(sanitizedData);
      
      if (!emailResult.success) {
        return {
          success: false,
          message: 'A apărut o eroare la trimiterea email-ului. Vă rugăm să încercați din nou.'
        };
      }

      // Crearea cererii în admin panel
      const therapyRequest = this.createTherapyRequest(sanitizedData);

      return {
        success: true,
        message: 'Mesajul a fost trimis cu succes! Vă voi răspunde în cel mai scurt timp.',
        therapyRequest: therapyRequest
      };

    } catch (error) {
      console.error('Error submitting contact form:', error);
      return {
        success: false,
        message: 'A apărut o eroare neașteptată. Vă rugăm să încercați din nou sau să mă contactați direct la psihoterapeut@oanatenea.ro'
      };
    }
  }

  // Metode pentru admin panel
  getAllTherapyRequests() {
    return this.therapyRequests;
  }

  updateTherapyRequest(id, updates) {
    const index = this.therapyRequests.findIndex(req => req.id === id);
    if (index !== -1) {
      this.therapyRequests[index] = {
        ...this.therapyRequests[index],
        ...updates,
        lastUpdated: new Date().toISOString()
      };
      this.saveTherapyRequests();
      return this.therapyRequests[index];
    }
    return null;
  }

  deleteTherapyRequest(id) {
    const index = this.therapyRequests.findIndex(req => req.id === id);
    if (index !== -1) {
      const deleted = this.therapyRequests.splice(index, 1)[0];
      this.saveTherapyRequests();
      return deleted;
    }
    return null;
  }

  // Statistici pentru dashboard
  getStatistics() {
    const total = this.therapyRequests.length;
    const pending = this.therapyRequests.filter(req => req.status === 'pending').length;
    const confirmed = this.therapyRequests.filter(req => req.status === 'confirmed').length;
    const completed = this.therapyRequests.filter(req => req.status === 'completed').length;
    const highPriority = this.therapyRequests.filter(req => req.priority === 'high').length;

    return { total, pending, confirmed, completed, highPriority };
  }
}

// Instanța singleton
export const contactService = new ContactService();
export default contactService;
