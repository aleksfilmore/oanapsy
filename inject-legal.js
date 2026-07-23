const fs = require('fs');

const roData = {
  legal: {
    title: 'Politică de Confidențialitate & GDPR',
    subtitle: 'Protecția datelor dumneavoastră personale este o prioritate pentru mine.',
    sections: [
      {
        title: '1. Responsabilul cu protecția datelor',
        content: 'Oana Tenea, psihoterapeut autorizat, cu sediul în București, România, este responsabilul pentru prelucrarea datelor dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).'
      },
      {
        title: '2. Datele colectate',
        content: 'În cadrul serviciilor de psihoterapie, pot fi colectate următoarele categorii de date:',
        list: [
          'Date de identificare (nume, prenume, vârstă)',
          'Date de contact (telefon, email, adresă)',
          'Informații medicale și psihologice relevante pentru terapie',
          'Notițe din ședințele terapeutice',
          'Date de facturare și plată'
        ]
      },
      {
        title: '3. Scopul prelucrării',
        content: 'Datele dumneavoastră sunt prelucrate pentru:',
        list: [
          'Furnizarea serviciilor de psihoterapie',
          'Programarea și gestionarea ședințelor',
          'Comunicarea cu dumneavoastră',
          'Îndeplinirea obligațiilor legale și profesionale',
          'Facturarea serviciilor'
        ]
      },
      {
        title: '4. Temei legal',
        content: 'Prelucrarea datelor se bazează pe consimțământul dumneavoastră explicit și pe necesitatea îndeplinirii contractului de servicii terapeutice. De asemenea, prelucrarea poate fi necesară pentru respectarea obligațiilor legale ale profesiei de psihoterapeut.'
      },
      {
        title: '5. Confidențialitatea',
        content: 'Toate informațiile partajate în cadrul relației terapeutice sunt strict confidențiale. Datele nu vor fi dezvăluite terților, cu excepția situațiilor în care legea impune acest lucru sau când există un risc iminent pentru siguranța dumneavoastră sau a altora.'
      },
      {
        title: '6. Drepturile dumneavoastră',
        content: 'Conform GDPR, aveți următoarele drepturi:',
        list: [
          'Dreptul de acces la datele personale',
          'Dreptul la rectificarea datelor inexacte',
          'Dreptul la ștergerea datelor în anumite condiții',
          'Dreptul la restricționarea prelucrării',
          'Dreptul la portabilitatea datelor',
          'Dreptul la opoziție',
          'Dreptul de a vă plânge la autoritatea de supraveghere'
        ]
      },
      {
        title: '7. Păstrarea datelor',
        content: 'Datele vor fi păstrate pentru perioada necesară îndeplinirii scopurilor pentru care au fost colectate și în conformitate cu obligațiile legale din domeniul psihologiei clinice. În general, dosarele terapeutice se păstrează timp de 5 ani de la încheierea terapiei.'
      },
      {
        title: '8. Securitatea datelor',
        content: 'Sunt implementate măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, modificării, dezvăluirii sau distrugerii.'
      },
      {
        title: '9. Contact',
        content: 'Pentru orice întrebări referitoare la prelucrarea datelor dumneavoastră personale sau pentru exercitarea drepturilor GDPR, mă puteți contacta la: contact@oanatenea.ro sau +40 123 456 789.'
      },
      {
        title: '10. Modificări',
        content: 'Această politică de confidențialitate poate fi actualizată periodic pentru a reflecta modificările în practici sau în cerințele legale. Data ultimei actualizări: {{date}}.'
      }
    ]
  },
  privacy: {
    seo_title: 'Politică de Confidențialitate și GDPR - Oana Tenea Psihoterapeut',
    seo_desc: 'Politica de confidențialitate și protecția datelor personale în conformitate cu GDPR pentru serviciile de psihoterapie oferite de Oana Tenea.',
    header: {
      title: 'Politică de Confidențialitate & GDPR',
      subtitle: 'Protecția datelor personale și confidențialitatea sunt priorități în practica mea de psihoterapie'
    },
    intro: {
      title: '1. Introducere',
      p1: 'Această Politică de Confidențialitate explică modul în care <strong>Oana Tenea</strong>, psihoterapeut autorizat, colectează, utilizează, stochează și protejează informațiile dumneavoastră personale în cadrul serviciilor de psihoterapie oferite.',
      p2: 'Respectul pentru confidențialitatea și protecția datelor personale reprezintă fundația practicii mele profesionale, în conformitate cu <strong>GDPR</strong> (Regulamentul General privind Protecția Datelor) și legislația română în vigoare.',
      date: '📅 Data ultimei actualizări: Ianuarie 2025',
      applies: 'Această politică se aplică tuturor serviciilor oferite prin intermediul site-ului web și consultațiilor de psihoterapie.'
    },
    data_collected: {
      title: '2. Ce Date Personale Colectez',
      id_title: 'Date de Identificare',
      id_list: [
        'Nume și prenume',
        'Vârsta și data nașterii',
        'Adresa de email',
        'Numărul de telefon',
        'Adresa de domiciliu (dacă relevant)'
      ],
      clinical_title: 'Date Clinice',
      clinical_list: [
        'Informații despre starea psihică',
        'Istoricul medical relevant',
        'Notițe din sesiunile de terapie',
        'Obiective terapeutice',
        'Progresul în terapie'
      ]
    },
    purpose: {
      title: '3. Scopul Procesării Datelor',
      items: [
        { title: '🎯 Furnizarea Serviciilor de Psihoterapie', desc: 'Datele sunt utilizate pentru planificarea, desfășurarea și monitorizarea progresului în procesul terapeutic.' },
        { title: '📞 Comunicarea cu Clienții', desc: 'Pentru programarea sesiunilor, confirmări, reschedulări și comunicări importante legate de terapie.' },
        { title: '⚖️ Respectarea Obligațiilor Legale', desc: 'Conformarea cu reglementările profesionale și legale aplicabile profesiei de psihoterapeut.' }
      ]
    },
    legal_basis: {
      title: '4. Baza Legală pentru Procesare',
      items: [
        { title: 'Consimțământul Explicat', desc: 'Dumneavoastră acordați consimțământul explicit pentru procesarea datelor în scopuri terapeutice.' },
        { title: 'Executarea Contractului', desc: 'Procesarea este necesară pentru îndeplinirea contractului de servicii de psihoterapie.' },
        { title: 'Obligații Legale', desc: 'Respectarea reglementărilor profesionale și a obligațiilor legale specifice profesiei.' }
      ]
    },
    security: {
      title: '5. Securitatea și Protecția Datelor',
      items: [
        { title: 'Criptare SSL', desc: 'Toate comunicările sunt protejate prin criptare SSL de nivel enterprise.' },
        { title: 'Stocare Securizată', desc: 'Datele sunt stocate în servere securizate cu acces restrictionat și backup regulat.' },
        { title: 'Acces Controlat', desc: 'Doar personalul autorizat are acces la datele dumneavoastră, pe baza principiului "need-to-know".' }
      ]
    },
    rights: {
      title: '6. Drepturile Dumneavoastră GDPR',
      items: [
        { title: 'Dreptul de Acces', desc: 'Puteți solicita o copie a tuturor datelor personale pe care le dețin despre dumneavoastră.', icon: '👁️' },
        { title: 'Dreptul de Rectificare', desc: 'Puteți cere corectarea datelor inexacte sau completarea datelor incomplete.', icon: '✏️' },
        { title: 'Dreptul la Ștergere', desc: 'În anumite condiții, puteți solicita ștergerea datelor personale (cu respectarea obligațiilor legale de păstrare).', icon: '🗑️' },
        { title: 'Dreptul la Portabilitate', desc: 'Puteți solicita transferul datelor către un alt furnizor de servicii în format structurat.', icon: '📤' },
        { title: 'Dreptul de Opoziție', desc: 'Puteți vă opune procesării datelor în anumite circumstanțe specifice.', icon: '🛑' },
        { title: 'Dreptul de Restricționare', desc: 'Puteți solicita limitarea procesării datelor în anumite situații.', icon: '⏸️' }
      ]
    },
    retention: {
      title: '7. Perioada de Păstrare a Datelor',
      active: 'Dosare active:',
      active_desc: 'Pe durata relației terapeutice',
      archived: 'Dosare arhivate:',
      archived_desc: '5 ani după încheierea terapiei (conform legii)',
      contact: 'Date de contact:',
      contact_desc: 'Până la retragerea consimțământului'
    },
    contact: {
      title: '8. Contact și Exercitarea Drepturilor',
      gdpr_title: '📧 Contact pentru GDPR',
      email: 'psihoterapeut@oanatenea.ro',
      address: 'Calea Dorobanti 116-122, Sector 1, București',
      response_time: 'Maxim 30 de zile calendaristice',
      auth_title: '⚖️ Autoritatea de Supraveghere',
      auth_name: 'ANSPDCP',
      auth_desc: '(Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal)',
      auth_website: 'Website: dataprotection.ro',
      auth_complaint: 'Puteți depune o plângere dacă considerați că drepturile dumneavoastră nu sunt respectate.'
    },
    footer: {
      priority: 'Confidențialitatea și siguranța dumneavoastră sunt prioritatea mea.',
      updates: 'Această politică poate fi actualizată periodic. Vă voi informa despre orice modificări importante prin email sau prin publicarea unei notificări pe site.'
    }
  }
};

const enData = {
  legal: {
    title: 'Privacy Policy & GDPR',
    subtitle: 'The protection of your personal data is a priority for me.',
    sections: [
      {
        title: '1. Data protection officer',
        content: 'Oana Tenea, authorized psychotherapist, based in Bucharest, Romania, is responsible for processing your personal data in accordance with the General Data Protection Regulation (GDPR).'
      },
      {
        title: '2. Data collected',
        content: 'As part of psychotherapy services, the following categories of data may be collected:',
        list: [
          'Identification data (name, surname, age)',
          'Contact data (phone, email, address)',
          'Medical and psychological information relevant to therapy',
          'Therapy session notes',
          'Billing and payment data'
        ]
      },
      {
        title: '3. Purpose of processing',
        content: 'Your data is processed for:',
        list: [
          'Providing psychotherapy services',
          'Scheduling and managing sessions',
          'Communicating with you',
          'Fulfilling legal and professional obligations',
          'Billing for services'
        ]
      },
      {
        title: '4. Legal basis',
        content: 'Data processing is based on your explicit consent and the necessity to fulfill the therapeutic services contract. Also, processing may be necessary to comply with the legal obligations of the psychotherapy profession.'
      },
      {
        title: '5. Confidentiality',
        content: 'All information shared within the therapeutic relationship is strictly confidential. Data will not be disclosed to third parties, except when required by law or when there is an imminent risk to your safety or the safety of others.'
      },
      {
        title: '6. Your rights',
        content: 'Under GDPR, you have the following rights:',
        list: [
          'Right to access personal data',
          'Right to rectification of inaccurate data',
          'Right to erasure of data under certain conditions',
          'Right to restrict processing',
          'Right to data portability',
          'Right to object',
          'Right to complain to the supervisory authority'
        ]
      },
      {
        title: '7. Data retention',
        content: 'Data will be kept for the period necessary to fulfill the purposes for which it was collected and in accordance with legal obligations in clinical psychology. Generally, therapeutic records are kept for 5 years after the end of therapy.'
      },
      {
        title: '8. Data security',
        content: 'Appropriate technical and organizational measures are implemented to protect your data against unauthorized access, modification, disclosure or destruction.'
      },
      {
        title: '9. Contact',
        content: 'For any questions regarding the processing of your personal data or to exercise your GDPR rights, you can contact me at: contact@oanatenea.ro or +40 123 456 789.'
      },
      {
        title: '10. Modifications',
        content: 'This privacy policy may be updated periodically to reflect changes in practices or legal requirements. Date of last update: {{date}}.'
      }
    ]
  },
  privacy: {
    seo_title: 'Privacy Policy and GDPR - Oana Tenea Psychotherapist',
    seo_desc: 'Privacy policy and personal data protection in accordance with GDPR for the psychotherapy services offered by Oana Tenea.',
    header: {
      title: 'Privacy Policy & GDPR',
      subtitle: 'Personal data protection and confidentiality are priorities in my psychotherapy practice'
    },
    intro: {
      title: '1. Introduction',
      p1: 'This Privacy Policy explains how <strong>Oana Tenea</strong>, authorized psychotherapist, collects, uses, stores and protects your personal information as part of the psychotherapy services offered.',
      p2: 'Respect for confidentiality and personal data protection represents the foundation of my professional practice, in accordance with <strong>GDPR</strong> (General Data Protection Regulation) and current Romanian legislation.',
      date: '📅 Date of last update: January 2025',
      applies: 'This policy applies to all services offered through the website and psychotherapy consultations.'
    },
    data_collected: {
      title: '2. What Personal Data I Collect',
      id_title: 'Identification Data',
      id_list: [
        'First and last name',
        'Age and date of birth',
        'Email address',
        'Phone number',
        'Home address (if relevant)'
      ],
      clinical_title: 'Clinical Data',
      clinical_list: [
        'Information about mental state',
        'Relevant medical history',
        'Therapy session notes',
        'Therapeutic goals',
        'Progress in therapy'
      ]
    },
    purpose: {
      title: '3. Purpose of Data Processing',
      items: [
        { title: '🎯 Providing Psychotherapy Services', desc: 'Data is used for planning, conducting and monitoring progress in the therapeutic process.' },
        { title: '📞 Communication with Clients', desc: 'For scheduling sessions, confirmations, rescheduling and important therapy-related communications.' },
        { title: '⚖️ Compliance with Legal Obligations', desc: 'Compliance with professional and legal regulations applicable to the psychotherapy profession.' }
      ]
    },
    legal_basis: {
      title: '4. Legal Basis for Processing',
      items: [
        { title: 'Explicit Consent', desc: 'You grant explicit consent for processing data for therapeutic purposes.' },
        { title: 'Execution of Contract', desc: 'Processing is necessary for fulfilling the psychotherapy services contract.' },
        { title: 'Legal Obligations', desc: 'Compliance with professional regulations and legal obligations specific to the profession.' }
      ]
    },
    security: {
      title: '5. Data Security and Protection',
      items: [
        { title: 'SSL Encryption', desc: 'All communications are protected by enterprise-level SSL encryption.' },
        { title: 'Secure Storage', desc: 'Data is stored on secure servers with restricted access and regular backups.' },
        { title: 'Controlled Access', desc: 'Only authorized personnel have access to your data, on a "need-to-know" basis.' }
      ]
    },
    rights: {
      title: '6. Your GDPR Rights',
      items: [
        { title: 'Right of Access', desc: 'You can request a copy of all personal data I hold about you.', icon: '👁️' },
        { title: 'Right to Rectification', desc: 'You can request the correction of inaccurate data or completion of incomplete data.', icon: '✏️' },
        { title: 'Right to Erasure', desc: 'Under certain conditions, you can request the deletion of personal data (subject to legal retention obligations).', icon: '🗑️' },
        { title: 'Right to Portability', desc: 'You can request the transfer of data to another service provider in a structured format.', icon: '📤' },
        { title: 'Right to Object', desc: 'You can object to data processing in certain specific circumstances.', icon: '🛑' },
        { title: 'Right to Restriction', desc: 'You can request the limitation of data processing in certain situations.', icon: '⏸️' }
      ]
    },
    retention: {
      title: '7. Data Retention Period',
      active: 'Active files:',
      active_desc: 'During the therapeutic relationship',
      archived: 'Archived files:',
      archived_desc: '5 years after ending therapy (according to law)',
      contact: 'Contact data:',
      contact_desc: 'Until consent is withdrawn'
    },
    contact: {
      title: '8. Contact and Exercising Rights',
      gdpr_title: '📧 Contact for GDPR',
      email: 'psihoterapeut@oanatenea.ro',
      address: 'Calea Dorobanti 116-122, Sector 1, Bucharest',
      response_time: 'Maximum 30 calendar days',
      auth_title: '⚖️ Supervisory Authority',
      auth_name: 'ANSPDCP',
      auth_desc: '(National Supervisory Authority for Personal Data Processing)',
      auth_website: 'Website: dataprotection.ro',
      auth_complaint: 'You can file a complaint if you believe your rights are not respected.'
    },
    footer: {
      priority: 'Your privacy and safety are my priority.',
      updates: 'This policy may be updated periodically. I will inform you of any important changes by email or by publishing a notice on the site.'
    }
  }
};

const roPath = 'c:/Dev/oanapsy/src/locales/ro/translation.json';
const enPath = 'c:/Dev/oanapsy/src/locales/en/translation.json';

const roTrans = JSON.parse(fs.readFileSync(roPath, 'utf8'));
roTrans.legal = roData.legal;
roTrans.privacy = roData.privacy;
fs.writeFileSync(roPath, JSON.stringify(roTrans, null, 2));

const enTrans = JSON.parse(fs.readFileSync(enPath, 'utf8'));
enTrans.legal = enData.legal;
enTrans.privacy = enData.privacy;
fs.writeFileSync(enPath, JSON.stringify(enTrans, null, 2));

console.log('Legal and privacy translations injected!');
