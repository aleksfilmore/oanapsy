import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        sessionType: 'individual'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aici ar fi logica pentru trimiterea formularului
        alert('Mesajul a fost trimis! Vă voi răspunde în cel mai scurt timp.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            sessionType: 'individual'
        });
    };

    return (
        <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text">Programare & Contact</h1>
                    <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80 max-w-3xl mx-auto">
                        Primul pas către schimbare este să cerți ajutorul. Sunt aici să te ascult și să te sprijin în călătoria ta către o stare de bine.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-charcoal-text dark:text-cream-text mb-6">Programează o ședință</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-charcoal-text dark:text-cream-text mb-2">
                                    Nume complet *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent dark:bg-deep-earth dark:border-gray-600 dark:text-cream-text"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-charcoal-text dark:text-cream-text mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent dark:bg-deep-earth dark:border-gray-600 dark:text-cream-text"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-charcoal-text dark:text-cream-text mb-2">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent dark:bg-deep-earth dark:border-gray-600 dark:text-cream-text"
                                />
                            </div>

                            <div>
                                <label htmlFor="sessionType" className="block text-sm font-medium text-charcoal-text dark:text-cream-text mb-2">
                                    Tipul ședinței
                                </label>
                                <select
                                    id="sessionType"
                                    name="sessionType"
                                    value={formData.sessionType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent dark:bg-deep-earth dark:border-gray-600 dark:text-cream-text"
                                >
                                    <option value="individual">Ședință individuală</option>
                                    <option value="couple">Ședință de cuplu</option>
                                    <option value="online">Ședință online</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-charcoal-text dark:text-cream-text mb-2">
                                    Mesaj *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Spune-mi pe scurt cu ce te pot ajuta..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent dark:bg-deep-earth dark:border-gray-600 dark:text-cream-text"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                            >
                                Trimite mesajul
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-charcoal-text dark:text-cream-text mb-4">Informații de contact</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-terracotta">Email</h4>
                                    <p className="text-charcoal-text/80 dark:text-cream-text/80">contact@oanatenea.ro</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-terracotta">Telefon</h4>
                                    <p className="text-charcoal-text/80 dark:text-cream-text/80">+40 123 456 789</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-terracotta">Locație</h4>
                                    <p className="text-charcoal-text/80 dark:text-cream-text/80">București, România</p>
                                    <p className="text-sm text-charcoal-text/60 dark:text-cream-text/60">Adresa exactă va fi comunicată la programare</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-charcoal-text dark:text-cream-text mb-4">Program</h3>
                            <div className="space-y-2 text-charcoal-text/80 dark:text-cream-text/80">
                                <p><span className="font-medium">Luni - Vineri:</span> 09:00 - 19:00</p>
                                <p><span className="font-medium">Sâmbătă:</span> 10:00 - 16:00</p>
                                <p><span className="font-medium">Duminică:</span> Închis</p>
                            </div>
                            <p className="mt-4 text-sm text-charcoal-text/60 dark:text-cream-text/60">
                                Programările se fac cu minim 24h înainte. În situații de urgență, vă rog să mă contactați telefonic.
                            </p>
                        </div>

                        <div className="bg-sage/20 dark:bg-sage/30 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-charcoal-text dark:text-cream-text mb-4">Confidențialitate</h3>
                            <p className="text-charcoal-text/80 dark:text-cream-text/80 text-sm">
                                Toate informațiile partajate sunt strict confidențiale și protejate conform normelor GDPR. 
                                Relația terapeutică se bazează pe încredere și respect mutual.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
