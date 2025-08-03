import React, { useState } from 'react';
import { ChevronDownIcon } from '../components/Icons';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-charcoal-text/10 dark:border-cream-text/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <span className="text-lg font-medium text-charcoal-text dark:text-cream-text">{title}</span>
                <ChevronDownIcon className={`w-6 h-6 text-terracotta transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="pb-4 text-charcoal-text/80 dark:text-cream-text/80">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};


const ServicesPage = () => {
    const serviceAreas = [
        { title: "Atacuri de panică", content: "Tulburarea de panică este una din formele anxietății clinice, care debutează de regulă după vârsta de 20 de ani." },
        { title: "Anxietate", content: "Înțelegem prin anxietate o stare accentuată de neliniște, în care așteptăm să se întâmple ceva rău sau simțim că nu ne mai aflăm în siguranță." },
        { title: "Depresie", content: "Depresia este o problemă de sănătate mintală frecventă și serioasă, care afectează negativ modul în care simți, gândești și acționezi." },
        { title: "Terapie de familie și cuplu", content: "În orice familie sau cuplu intervin din când în când anumite probleme de relaționare. Terapia vă poate ajuta să navigați aceste provocări." },
        { title: "Pierdere sau doliu", content: "Tristețea, amestecată cu alte emoții ca teama, furia și vinovăția sunt reacții normale, necesare în fața unei pierderi. Terapia oferă un spațiu pentru a procesa aceste emoții." },
        { title: "Terapie individuală", content: "Se adresează tuturor celor care doresc să-și îmbunătățească relațiile și doresc să fie mai conștienți despre emoțiile și trăirile lor." },
    ];
    
    const faqs = [
        { q: "Ce este un psihoterapeut?", a: "Psihoterapeutul este un specialist cu o formare postuniversitară în psihoterapie. Instrumentul terapeutic principal utilizat diferă în funcţie de școala terapeutică căreia îi aparține și de nevoile pacientului: conversația terapeutică, psihodrama, hipnoza, intervenția prin artă, terapie existențială, și multe altele." },
        { q: "Cât durează o ședință de psihoterapie?", a: "Durata ședințelor este de 50 de minute (de la oră fixă la fără 10 minute), iar programarea ședințelor se face astfel încât orele să fie convenabile ambelor părți. Dacă sunteți în situația în care trebuie să anulați o ședință, puteți anula programarea cu minimum 24h înainte." },
        { q: "Ce se întâmplă la prima ședință?", a: "În prima ședință ne cunoaștem și discutăm despre problemele care vă macină, și despre rezultatul pe care îl așteptați. Stabilim împreună un obiectiv și un program de consiliere. Este important să fiți deschis și să aveți dorința de a lămuri, înțelege sau de a schimba ceva în viața dumneavoastră." },
    ];

    return (
        <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text">Servicii & Prețuri</h1>
                    <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80 max-w-3xl mx-auto">O investiție în starea ta de bine. Toate serviciile sunt oferite cu maximă confidențialitate și profesionalism.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <div className="bg-ivory dark:bg-charcoal-text p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-terracotta mb-4">Ședințe în Cabinet</h2>
                        <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-6">Pentru cei care preferă interacțiunea directă, cabinetul meu din București oferă un mediu calm și primitor, special conceput pentru a facilita un dialog deschis și constructiv.</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-charcoal-text/10 dark:border-cream-text/10 py-3">
                                <span className="text-charcoal-text dark:text-cream-text">Ședință individuală (50 min)</span>
                                <span className="font-semibold text-charcoal-text dark:text-cream-text">200 RON</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-charcoal-text/10 dark:border-cream-text/10 py-3">
                                <span className="text-charcoal-text dark:text-cream-text">Ședință de cuplu (75 min)</span>
                                <span className="font-semibold text-charcoal-text dark:text-cream-text">300 RON</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-ivory dark:bg-charcoal-text p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-terracotta mb-4">Ședințe Online</h2>
                        <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-6">Psihoterapia online se bazează pe același concept ca cea individuală, doar că folosește comunicarea la distanță prin intermediul tehnologiei, oferind flexibilitate și confort.</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-charcoal-text/10 dark:border-cream-text/10 py-3">
                                <span className="text-charcoal-text dark:text-cream-text">Ședință individuală (50 min)</span>
                                <span className="font-semibold text-charcoal-text dark:text-cream-text">180 RON</span>
                            </div>
                             <div className="flex justify-between items-center border-b border-charcoal-text/10 dark:border-cream-text/10 py-3">
                                <span className="text-charcoal-text dark:text-cream-text">Ședință de cuplu (75 min)</span>
                                <span className="font-semibold text-charcoal-text dark:text-cream-text">280 RON</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center text-charcoal-text dark:text-cream-text mb-8">Arii de expertiză</h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {serviceAreas.map(area => (
                            <div key={area.title} className="bg-ivory dark:bg-charcoal-text p-6 rounded-lg">
                                <h3 className="font-semibold text-terracotta mb-2">{area.title}</h3>
                                <p className="text-sm text-charcoal-text/80 dark:text-cream-text/80">{area.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-charcoal-text dark:text-cream-text mb-8">Întrebări frecvente</h2>
                    <div className="bg-ivory dark:bg-charcoal-text p-8 rounded-xl shadow-lg">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} title={faq.q}>
                                <p>{faq.a}</p>
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
