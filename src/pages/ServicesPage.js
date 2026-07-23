import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const AccordionItem = ({ title, children, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-xl shadow-warm mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-6 hover:bg-sage-50 transition-colors duration-200"
            >
                <div className="flex items-center">
                    <div className="text-2xl mr-4">{icon}</div>
                    <span className="text-lg font-semibold text-sage-800">{title}</span>
                </div>
                <svg 
                    className={`w-6 h-6 text-terracotta transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sage-700 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    const { t } = useTranslation();
    const serviceAreas = [
        { 
            title: t('services.areas_data.panic.title'), 
            icon: "",
            content: t('services.areas_data.panic.content'),
            techniques: [t('services.areas_data.panic.t1'), t('services.areas_data.panic.t2'), t('services.areas_data.panic.t3')],
            highlight: t('services.areas_data.panic.highlight')
        },
        { 
            title: t('services.areas_data.anxiety.title'), 
            icon: "‍️",
            content: t('services.areas_data.anxiety.content'),
            techniques: [t('services.areas_data.anxiety.t1'), t('services.areas_data.anxiety.t2'), t('services.areas_data.anxiety.t3')],
            highlight: t('services.areas_data.anxiety.highlight')
        },
        { 
            title: t('services.areas_data.depression.title'), 
            icon: "",
            content: t('services.areas_data.depression.content'),
            techniques: [t('services.areas_data.depression.t1'), t('services.areas_data.depression.t2'), t('services.areas_data.depression.t3')],
            highlight: t('services.areas_data.depression.highlight')
        },
        { 
            title: t('services.areas_data.couple.title'), 
            icon: "",
            content: t('services.areas_data.couple.content'),
            techniques: [t('services.areas_data.couple.t1'), t('services.areas_data.couple.t2'), t('services.areas_data.couple.t3')],
            highlight: t('services.areas_data.couple.highlight')
        },
        { 
            title: t('services.areas_data.trauma.title'), 
            icon: "️",
            content: t('services.areas_data.trauma.content'),
            techniques: [t('services.areas_data.trauma.t1'), t('services.areas_data.trauma.t2'), t('services.areas_data.trauma.t3')],
            highlight: t('services.areas_data.trauma.highlight')
        },
        { 
            title: t('services.areas_data.growth.title'), 
            icon: "",
            content: t('services.areas_data.growth.content'),
            techniques: [t('services.areas_data.growth.t1'), t('services.areas_data.growth.t2'), t('services.areas_data.growth.t3')],
            highlight: t('services.areas_data.growth.highlight')
        },
    ];
    
    const faqs = [
        { 
            q: t('services.faqs_data.q1.q'), 
            icon: "",
            a: t('services.faqs_data.q1.a')
        },
        { 
            q: t('services.faqs_data.q2.q'), 
            icon: "⏰",
            a: t('services.faqs_data.q2.a') 
        },
        { 
            q: t('services.faqs_data.q3.q'), 
            icon: "",
            a: t('services.faqs_data.q3.a') 
        },
        { 
            q: t('services.faqs_data.q4.q'), 
            icon: "",
            a: t('services.faqs_data.q4.a') 
        },
        { 
            q: t('services.faqs_data.q5.q'), 
            icon: "",
            a: t('services.faqs_data.q5.a')
        }
    ];

    return (
        <>
            <SEO 
                title="Cum te pot ajuta - Oana Tenea Psihoterapeut"
                description="Îți ofer sprijin specializat pentru anxietate, depresie, atacuri de panică, terapie de cuplu. Ședințe în cabinet în București și online. Programează o consultație."
            />
            <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                            {t('services.title')}
                        </h1>
                        <p className="text-lg text-sage-600 max-w-3xl mx-auto">
                            {t('services.subtitle')}
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Service Types */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
                        {/* In-Person Sessions */}
                        <div className="bg-white rounded-2xl p-8 shadow-warm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-terracotta/10 to-warm-orange/10 rounded-full -translate-y-8 translate-x-8"></div>
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-terracotta to-warm-orange rounded-xl flex items-center justify-center text-white text-xl mr-4">
                                        
                                    </div>
                                    <h2 className="text-2xl font-bold text-sage-800">{t('services.in_person')}</h2>
                                </div>
                                <p className="text-sage-600 mb-6 leading-relaxed">
                                    {t('services.in_person_desc')}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {t('services.individual')}
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {t('services.couple')}
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {t('services.initial')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Online Sessions */}
                        <div className="bg-white rounded-2xl p-8 shadow-warm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sage-300/10 to-golden-honey/10 rounded-full -translate-y-8 translate-x-8"></div>
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-sage-500 to-sage-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                                        
                                    </div>
                                    <h2 className="text-2xl font-bold text-sage-800">{t('services.online')}</h2>
                                </div>
                                <p className="text-sage-600 mb-6 leading-relaxed">
                                    {t('services.online_desc')}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-sage-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {t('services.home_access')}
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-sage-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {t('services.flex_schedule')}
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-sage-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {t('services.quality')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* Therapeutic Approach Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="bg-gradient-to-br from-sage-50 to-cream rounded-2xl p-8 shadow-warm">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-sage-800 mb-4">{t('services.approach')}</h2>
                                <p className="text-sage-600 text-lg">{t('services.approach_sub')}</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3"></div>
                                        {t('services.app1_title')}
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        {t('services.app1_desc')}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3"></div>
                                        {t('services.app2_title')}
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        {t('services.app2_desc')}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3"></div>
                                        {t('services.app3_title')}
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        {t('services.app3_desc')}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3"></div>
                                        {t('services.app4_title')}
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        {t('services.app4_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* Service Areas */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-sage-800 mb-4">{t('services.areas')}</h2>
                            <p className="text-sage-600 text-lg">{t('services.areas_sub')}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {serviceAreas.map((area, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-warm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="text-3xl mb-4">{area.icon}</div>
                                    <h3 className="font-bold text-sage-800 mb-3 text-lg">{area.title}</h3>
                                    <p className="text-sage-600 text-sm mb-4 leading-relaxed">{area.content}</p>
                                    
                                    {area.highlight && (
                                        <div className="bg-terracotta/10 border border-terracotta/20 rounded-lg p-3 mb-4">
                                            <p className="text-terracotta text-xs font-semibold">{area.highlight}</p>
                                        </div>
                                    )}
                                    
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold text-terracotta uppercase tracking-wider">{t('services.methods')}</p>
                                        {area.techniques.map((technique, idx) => (
                                            <div key={idx} className="flex items-center text-xs text-sage-700">
                                                <div className="w-1.5 h-1.5 bg-terracotta rounded-full mr-2 flex-shrink-0"></div>
                                                {technique}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-sage-800 mb-4">{t('services.faq')}</h2>
                            <p className="text-sage-600 text-lg">{t('services.faq_sub')}</p>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} title={faq.q} icon={faq.icon}>
                                    <p>{faq.a}</p>
                                </AccordionItem>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="max-w-4xl mx-auto mt-20 text-center">
                        <div className="bg-gradient-to-r from-terracotta to-warm-orange rounded-2xl p-8 shadow-warm text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('services.cta_title')}</h3>
                            <p className="mb-6 text-white/90">
                                {t('services.cta_desc')}
                            </p>
                            <a 
                                href="/contact" 
                                className="inline-flex items-center px-8 py-4 bg-white text-terracotta font-semibold rounded-xl hover:bg-warm-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {t('services.cta_btn')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
