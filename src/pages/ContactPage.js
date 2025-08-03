import React, { useState } from 'react';
import SimpleCaptcha from '../components/SimpleCaptcha';
import SEO from '../components/SEO';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        sessionType: 'individual'
    });

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [resetCaptcha, setResetCaptcha] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isCaptchaVerified) {
            alert('Te rog să completezi verificarea anti-spam.');
            return;
        }
        
        // Aici ar fi logica pentru trimiterea formularului
        alert('Mesajul a fost trimis! Vă voi răspunde în cel mai scurt timp.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            sessionType: 'individual'
        });
        setIsCaptchaVerified(false);
        setResetCaptcha(prev => !prev); // Trigger captcha reset
    };

    const handleCaptchaVerify = (isVerified) => {
        setIsCaptchaVerified(isVerified);
    };

    return (
        <>
            <SEO 
                title="Contact și Programări - Oana Tenea Psihoterapeut"
                description="Programează o ședință de psihoterapie cu Oana Tenea. Cabinet în București, Calea Dorobanti 116-122. Email: psihoterapeut@oanatenea.ro"
            />
            <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                            Programare & Contact
                        </h1>
                        <p className="text-lg text-sage-600 max-w-3xl mx-auto">
                            Primul pas către schimbare este să cerți ajutorul. Sunt aici să te ascult și să te sprijin în călătoria ta către o stare de bine.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-warm">
                            <h2 className="text-2xl font-bold text-sage-800 mb-6">
                                Programează o ședință
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                                        Nume complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                                        placeholder="Introduceti numele complet"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                                        placeholder="exemplu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                                        placeholder="+40 xxx xxx xxx"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="sessionType" className="block text-sm font-medium text-sage-700 mb-2">
                                        Tip ședință
                                    </label>
                                    <select
                                        id="sessionType"
                                        name="sessionType"
                                        value={formData.sessionType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                                    >
                                        <option value="individual">Ședință individuală</option>
                                        <option value="couple">Terapie de cuplu</option>
                                        <option value="consultation">Consultație inițială</option>
                                        <option value="online">Ședință online</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                                        Mesaj *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Descrieti pe scurt motivul pentru care doriti o sedinta de psihoterapie..."
                                    />
                                </div>

                                {/* Anti-spam verification */}
                                <SimpleCaptcha 
                                    onVerify={handleCaptchaVerify}
                                    resetTrigger={resetCaptcha}
                                />

                                <button
                                    type="submit"
                                    className={`w-full px-6 py-4 font-semibold rounded-xl transition-all duration-300 transform ${
                                        isCaptchaVerified 
                                            ? 'bg-gradient-to-r from-terracotta to-warm-orange text-white hover:from-terracotta/90 hover:to-warm-orange/90 hover:scale-[1.02] shadow-warm' 
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                    disabled={!isCaptchaVerified}
                                >
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Trimite mesajul
                                    </span>
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Details */}
                            <div className="bg-white rounded-2xl p-8 shadow-warm">
                                <h3 className="text-xl font-bold text-sage-800 mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Informații de contact
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sage-800">Email</h4>
                                            <a href="mailto:psihoterapeut@oanatenea.ro" className="text-sage-600 hover:text-sage-800 transition-colors">
                                                psihoterapeut@oanatenea.ro
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sage-800">Cabinet</h4>
                                            <p className="text-sage-600">CALEA DOROBANTI 116-122</p>
                                            <p className="text-sm text-sage-500">SECTOR 1 - BUCURESTI</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sage-800">Instagram</h4>
                                            <a 
                                                href="https://instagram.com/psihoterapeut.oanatenea" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-sage-600 hover:text-sage-800 transition-colors"
                                            >
                                                @psihoterapeut.oanatenea
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Schedule */}
                            <div className="bg-white rounded-2xl p-8 shadow-warm">
                                <h3 className="text-xl font-bold text-sage-800 mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Program
                                </h3>
                                <div className="space-y-3 text-sage-600">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Luni - Vineri:</span>
                                        <span>09:00 - 19:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Sâmbătă:</span>
                                        <span>10:00 - 16:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Duminică:</span>
                                        <span className="text-sage-400">Închis</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-golden-honey/20 rounded-lg">
                                    <p className="text-sm text-sage-700">
                                        💡 <strong>Sfat:</strong> Programările se fac cu minim 24h înainte. Pentru urgențe, scrieți prin email.
                                    </p>
                                </div>
                            </div>

                            {/* Privacy Notice */}
                            <div className="bg-gradient-to-r from-sage-50 to-golden-honey/10 rounded-2xl p-8 border border-sage-200">
                                <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Confidențialitate
                                </h3>
                                <p className="text-sage-600 text-sm leading-relaxed">
                                    Toate informațiile partajate sunt <strong>strict confidențiale</strong> și protejate conform normelor GDPR. 
                                    Relația terapeutică se bazează pe încredere și respect mutual. Datele personale nu vor fi niciodată 
                                    partajate cu terțe părți fără consimțământul explicit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
