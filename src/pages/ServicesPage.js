import React, { useState } from 'react';
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
    const serviceAreas = [
        { 
            title: "Atacuri de panică", 
            icon: "🌊",
            content: "Te ajut să înțelegi și să gestionezi atacurile de panică prin tehnici dovedite științific. Împreună vom identifica trigger-urile și vom construi strategii personalizate pentru a-ți recâștiga controlul.",
            techniques: ["Tehnici de respirație controlată", "Restructurare cognitivă", "Expunere graduală și sigură"],
            highlight: "Rezultate vizibile în 6-8 ședințe"
        },
        { 
            title: "Anxietate", 
            icon: "🧘‍♀️",
            content: "Anxietatea nu trebuie să-ți controleze viața. Îți ofer instrumente practice pentru a transforma grija în claritate și liniștea în putere interioară.",
            techniques: ["Mindfulness și meditație", "Managementul gândurilor anxioase", "Tehnici de relaxare progresivă"],
            highlight: "Abordare holistică și personalizată"
        },
        { 
            title: "Depresie", 
            icon: "�",
            content: "Înțeleg că depresia poate face totul să pară imposibil. Sunt aici să te acompaniez pas cu pas către redescoperirea bucuriei și a sensului în viața ta.",
            techniques: ["Activarea comportamentală", "Reevaluarea gândurilor negative", "Dezvoltarea strategiilor de coping"],
            highlight: "Sprijin empatic și profesional"
        },
        { 
            title: "Terapie de cuplu și familie", 
            icon: "💕",
            content: "Relațiile au nevoie de îngrijire. Te ajut să construiești punți de comunicare autentică și să întărești legăturile care contează cu adevărat pentru tine.",
            techniques: ["Comunicare nonviolentă", "Rezolvarea constructivă a conflictelor", "Întărirea intimității emoționale"],
            highlight: "Focus pe conexiune și înțelegere"
        },
        { 
            title: "Traumă și doliu", 
            icon: "�️",
            content: "Durerea pierderii este una dintre cele mai profunde experiențe umane. Îți ofer un spațiu sigur pentru a procesa trauma și a găsi drumul către vindecare.",
            techniques: ["Procesarea traumei prin EMDR", "Tehnici de doliu adaptate", "Reconstruirea sensului și speranței"],
            highlight: "Abordare delicată și specializată"
        },
        { 
            title: "Dezvoltare personală", 
            icon: "🌱",
            content: "Te susțin în călătoria spre cea mai bună versiune a ta. Împreună explorăm potențialul tău și construim strategii pentru o viață mai împlinită și autentică.",
            techniques: ["Autocunoaștere profundă", "Stabilirea și atingerea obiectivelor", "Îmbunătățirea relațiilor interpersonale"],
            highlight: "Creștere sustenabilă și autentică"
        },
    ];
    
    const faqs = [
        { 
            q: "Cum știu dacă am nevoie de terapie?", 
            icon: "�",
            a: "Dacă simți că provocările din viața ta te depășesc, dacă emoțiile negative persistă mai mult de două săptămâni, sau pur și simplu dorești să te cunoști mai bine și să creezi schimbări pozitive, terapia poate fi un sprijin valoros. Nu trebuie să aștepți până când lucrurile devin foarte dificile." 
        },
        { 
            q: "Cât durează o ședință și cum se desfășoară?", 
            icon: "⏰",
            a: "Ședințele individuale durează 50 de minute, iar cele de cuplu 75 de minute. În prima ședință ne cunoaștem și explorăm împreună situația ta. Stabilim obiective clare și discutăm despre așteptările tale. Fiecare ședință ulterioară este adaptată nevoilor tale specifice." 
        },
        { 
            q: "Este confidențialitatea garantată?", 
            icon: "🔒",
            a: "Absolut da. Tot ce îmi spui rămâne între noi, conform codului deontologic profesional. Confidențialitatea este fundamentul încrederii terapeutice și o respect cu strictețe. Singurul caz când aș putea divulga informații este dacă există un risc iminent pentru siguranța ta sau a altora." 
        },
        { 
            q: "Cât durează procesul terapeutic?", 
            icon: "📅",
            a: "Durata variază în funcție de obiectivele tale și de natura provocărilor cu care te confrunți. Unele situații se îmbunătățesc în câteva ședințe, altele necesită mai mult timp. De obicei, primele schimbări pozitive le observi după 6-8 ședințe. Voi fi transparentă cu tine în privința progresului și vom evalua periodic cum evoluzăm." 
        },
        { 
            q: "Diferă terapia online de cea față în față?", 
            icon: "💻",
            a: "Eficacitatea este aceeași, iar confidențialitatea la fel de strictă. Mulți dintre clienții mei preferă terapia online pentru flexibilitatea oferită. Important este să ai un spațiu privat și o conexiune stabilă la internet. Îți voi explica cum să îți pregătești mediul pentru a beneficia la maximum de ședințe." 
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
                            Cum te pot ajuta
                        </h1>
                        <p className="text-lg text-sage-600 max-w-3xl mx-auto">
                            Îți ofer un spațiu sigur și confidențial pentru a explora provocările cu care te confrunți și pentru a descoperi resurse noi pentru o viață mai împlinită.
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
                                        🏢
                                    </div>
                                    <h2 className="text-2xl font-bold text-sage-800">Ședințe în Cabinet</h2>
                                </div>
                                <p className="text-sage-600 mb-6 leading-relaxed">
                                    Te întampin în cabinetul meu din București, într-un mediu calm și primitor, special amenajat pentru a facilita un dialog deschis și autentic. Aici poți vorbi liber despre orice te preocupă.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Ședință individuală (50 minute)
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Ședință de cuplu (75 minute)
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Consultație inițială
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
                                        💻
                                    </div>
                                    <h2 className="text-2xl font-bold text-sage-800">Ședințe Online</h2>
                                </div>
                                <p className="text-sage-600 mb-6 leading-relaxed">
                                    Înțeleg că nu întotdeauna este posibil să ajungi fizic la cabinet. De aceea ofer și ședințe online, care au aceeași eficacitate și confidențialitate, dar îți permit să participi din confortul casei tale.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-sage-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Acces din confortul casei
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-sage-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Program flexibil
                                    </div>
                                    <div className="flex items-center text-sage-700">
                                        <svg className="w-5 h-5 text-sage-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Aceeași calitate și confidențialitate
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* Therapeutic Approach Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="bg-gradient-to-br from-sage-50 to-cream rounded-2xl p-8 shadow-warm">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-sage-800 mb-4">Abordarea mea terapeutică</h2>
                                <p className="text-sage-600 text-lg">Fiecare persoană este unică, la fel și călătoria ei către vindecare</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3">🎯</div>
                                        Personalizat și adaptat
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        Nu există soluții universale. Îmi adaptez metodele în funcție de personalitatea ta, stilul de învățare și obiectivele specifice. Combin elemente din terapia cognitiv-comportamentală, mindfulness și alte abordări dovedite științific.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3">💝</div>
                                        Empatic și fără judecăți
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        Îți ofer un spațiu complet sigur, unde poți fi autentic fără teamă de judecată. Cred că vindecarea se întâmplă în relații de încredere, unde te simți văzut, înțeles și acceptat exact așa cum ești.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3">🌱</div>
                                        Orientat spre soluții
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        Deși explorăm trecutul pentru înțelegere, focusul nostru principal este pe prezent și viitor. Împreună identificăm resurse și construim strategii practice care te ajută să te simți mai puternic și mai echilibrat.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white text-sm mr-3">🤝</div>
                                        Colaborativ și transparent
                                    </h3>
                                    <p className="text-sage-600 leading-relaxed">
                                        Tu ești expertul propriei vieți, iar eu aduc expertiza terapeutică. Lucrăm împreună ca parteneri, iar tu ești mereu informat despre progresul nostru și direcția în care mergem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* Service Areas */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-sage-800 mb-4">Domeniile mele de expertiză</h2>
                            <p className="text-sage-600 text-lg">Îmi dedic experiența și cunoștințele pentru a te sprijini în aceste arii:</p>
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
                                        <p className="text-xs font-semibold text-terracotta uppercase tracking-wider">Metode folosite:</p>
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
                            <h2 className="text-3xl font-bold text-sage-800 mb-4">Întrebări Frecvente</h2>
                            <p className="text-sage-600 text-lg">Răspunsuri la cele mai comune întrebări despre psihoterapie</p>
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
                            <h3 className="text-2xl font-bold mb-4">Ești gata să faci primul pas?</h3>
                            <p className="mb-6 text-white/90">
                                Știu că poate fi intimidant să cauți ajutor, dar curajul tău de a fi aici este deja un pas important. Sunt aici să te însoțesc în această călătorie către o viață mai împlinită.
                            </p>
                            <a 
                                href="/contact" 
                                className="inline-flex items-center px-8 py-4 bg-white text-terracotta font-semibold rounded-xl hover:bg-warm-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Să vorbim - îți răspund în 24h
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
