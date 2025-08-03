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
            icon: "😰",
            content: "Tulburarea de panică este una din formele anxietății clinice, care debutează de regulă după vârsta de 20 de ani. Prin tehnici specifice CBT, învățăm să recunoaștem și să gestionăm simptomele.",
            techniques: ["Tehnici de respirație", "Restructurare cognitivă", "Expunere graduală"]
        },
        { 
            title: "Anxietate", 
            icon: "😟",
            content: "Înțelegem prin anxietate o stare accentuată de neliniște, în care așteptăm să se întâmple ceva rău sau simțim că nu ne mai aflăm în siguranță.",
            techniques: ["Mindfulness", "Managementul gândurilor", "Tehnici de relaxare"]
        },
        { 
            title: "Depresie", 
            icon: "🌧️",
            content: "Depresia este o problemă de sănătate mintală frecventă și serioasă, care afectează negativ modul în care simți, gândești și acționezi.",
            techniques: ["Activarea comportamentală", "Reevaluarea cognițiilor", "Dezvoltarea copingului"]
        },
        { 
            title: "Terapie de familie și cuplu", 
            icon: "❤️",
            content: "În orice familie sau cuplu intervin din când în când anumite probleme de relaționare. Terapia vă poate ajuta să navigați aceste provocări.",
            techniques: ["Comunicare eficientă", "Rezolvarea conflictelor", "Întărirea legăturii"]
        },
        { 
            title: "Traumă și doliu", 
            icon: "💔",
            content: "Tristețea, amestecată cu alte emoții ca teama, furia și vinovăția sunt reacții normale în fața unei pierderi. Terapia oferă un spațiu pentru a procesa aceste emoții.",
            techniques: ["Procesarea traumei", "Tehnici de doliu", "Reconstruirea sensului"]
        },
        { 
            title: "Dezvoltare personală", 
            icon: "🌱",
            content: "Se adresează tuturor celor care doresc să-și îmbunătățească relațiile și doresc să fie mai conștienți despre emoțiile și trăirile lor.",
            techniques: ["Autocunoaștere", "Stabilirea obiectivelor", "Îmbunătățirea relațiilor"]
        },
    ];
    
    const faqs = [
        { 
            q: "Ce este un psihoterapeut?", 
            icon: "🧠",
            a: "Psihoterapeutul este un specialist cu o formare postuniversitară în psihoterapie. Instrumentul terapeutic principal utilizat diferă în funcţie de școala terapeutică căreia îi aparține și de nevoile pacientului: conversația terapeutică, terapie cognitiv-comportamentală, intervenția prin mindfulness, și multe altele." 
        },
        { 
            q: "Cât durează o ședință de psihoterapie?", 
            icon: "⏰",
            a: "Durata ședințelor este de 50 de minute pentru ședințele individuale și 75 de minute pentru terapia de cuplu. Programarea ședințelor se face astfel încât orele să fie convenabile ambelor părți. Dacă sunteți în situația în care trebuie să anulați o ședință, puteți anula programarea cu minimum 48h înainte." 
        },
        { 
            q: "Ce se întâmplă la prima ședință?", 
            icon: "🤝",
            a: "În prima ședință ne cunoaștem și discutăm despre problemele care vă preocupă și despre rezultatul pe care îl așteptați. Stabilim împreună un obiectiv și un program de consiliere. Este important să fiți deschis și să aveți dorința de a lămuri, înțelege sau de a schimba ceva în viața dumneavoastră." 
        },
        { 
            q: "Cât durează procesul terapeutic?", 
            icon: "📅",
            a: "Durata terapiei variază în funcție de natura problemelor și de obiectivele stabilite. De obicei, primele îmbunătățiri se observă după 6-8 ședințe, iar un proces terapeutic complet poate dura între 3-12 luni, în funcție de complexitatea situației." 
        }
    ];

    return (
        <>
            <SEO 
                title="Servicii de Psihoterapie - Oana Tenea"
                description="Servicii profesionale de psihoterapie: anxietate, depresie, atacuri de panică, terapie de cuplu. Cabinet în București și ședințe online."
            />
            <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                            Servicii de Psihoterapie
                        </h1>
                        <p className="text-lg text-sage-600 max-w-3xl mx-auto">
                            O investiție în starea ta de bine. Toate serviciile sunt oferite cu maximă confidențialitate și profesionalism.
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
                                    Pentru cei care preferă interacțiunea directă, cabinetul meu din București oferă un mediu calm și primitor, special conceput pentru a facilita un dialog deschis și constructiv.
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
                                    Psihoterapia online se bazează pe același concept ca cea individuală, doar că folosește comunicarea la distanță prin intermediul tehnologiei, oferind flexibilitate și confort.
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
                
                    {/* Service Areas */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-sage-800 mb-4">Arii de Expertiză</h2>
                            <p className="text-sage-600 text-lg">Domenii în care oferă servicii specializate de psihoterapie</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {serviceAreas.map((area, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-warm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="text-3xl mb-4">{area.icon}</div>
                                    <h3 className="font-bold text-sage-800 mb-3">{area.title}</h3>
                                    <p className="text-sage-600 text-sm mb-4 leading-relaxed">{area.content}</p>
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold text-terracotta uppercase tracking-wider">Tehnici folosite:</p>
                                        {area.techniques.map((technique, idx) => (
                                            <div key={idx} className="flex items-center text-xs text-sage-700">
                                                <div className="w-1.5 h-1.5 bg-terracotta rounded-full mr-2"></div>
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
                            <h3 className="text-2xl font-bold mb-4">Gata să începi călătoria către o stare mai bună?</h3>
                            <p className="mb-6 text-white/90">
                                Primul pas este întotdeauna cel mai greu. Sunt aici să te sprijin în această călătorie.
                            </p>
                            <a 
                                href="/contact" 
                                className="inline-flex items-center px-8 py-4 bg-white text-terracotta font-semibold rounded-xl hover:bg-warm-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Programează o consultație
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
