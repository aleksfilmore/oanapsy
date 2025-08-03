import React from 'react';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <>
            <SEO 
                title="Despre Oana Tenea - Psihoterapeut Cognitiv-Comportamental"
                description="Oana Tenea, psihoterapeut de formare cognitiv-comportamentală și terapia centrată pe scheme. Cabinet în București, Calea Dorobanti 116-122."
            />
            <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                            Eu sunt Oana
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
                        {/* Photo & Quick Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-warm-orange/20 rounded-2xl transform rotate-3"></div>
                                <img 
                                    src="/3DX_2399web.jpg" 
                                    alt="Oana Tenea, psihoterapeut" 
                                    className="relative rounded-2xl shadow-warm w-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src='/OanaTenea.png'; }}
                                />
                            </div>

                            {/* Credentials Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-warm">
                                <h3 className="text-xl font-bold text-sage-800 mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Calificări Profesionale
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sage-700 text-sm">Psihoterapeut cognitiv-comportamental</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sage-700 text-sm">Specialist în terapia centrată pe scheme cognitive</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sage-700 text-sm">Psihoterapeut de cuplu și familie</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sage-700 text-sm">Membru Colegiul Psihologilor din România</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Quick */}
                            <div className="bg-gradient-to-r from-sage-50 to-golden-honey/10 rounded-2xl p-6 border border-sage-200">
                                <h4 className="font-semibold text-sage-800 mb-3">Hai să vorbim!</h4>
                                <p className="text-sage-600 text-sm mb-4">
                                    Sunt aici să te ascult și să te sprijin în călătoria ta către vindecarea emoțională.
                                </p>
                                <a 
                                    href="/contact" 
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-terracotta to-warm-orange text-white text-sm font-semibold rounded-lg hover:from-terracotta/90 hover:to-warm-orange/90 transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Programează
                                </a>
                            </div>
                        </div>

                        {/* Story & Approach */}
                        <div className="lg:col-span-3 space-y-8">
                            {/* Personal Story */}
                            <div className="bg-white rounded-2xl p-8 shadow-warm">
                                <h2 className="text-3xl font-bold text-sage-800 mb-6">
                                    Bine ai venit! 👋
                                </h2>
                                
                                <div className="space-y-6 text-sage-700 leading-relaxed">
                                    <div className="bg-terracotta/10 rounded-xl p-6 border-l-4 border-terracotta">
                                        <p className="font-medium text-terracotta text-lg">
                                            Sunt psihoterapeut de formare cognitiv–comportamentală, psihoterapeut de formare în terapia centrată pe scheme cognitive, psihoterapeut de cuplu (familie) și membru al Colegiului Psihologilor din România.
                                        </p>
                                    </div>
                                    
                                    <p>
                                        Dar nu în ultimul rând, sunt <strong>soție, mamă și prietenă</strong>. Dorința de a relaționa cu o gamă largă de oameni, din diferite medii multiculturale, m-a îndreptat către alegerea acestei profesii. Curiozitatea, prin natura mea, mă sprijină ca un tovarăș în calea cunoașterii de sine și a celor din jurul meu.
                                    </p>
                                    
                                    <p>
                                        Pornind de la misterele cunoașterii psihicului uman și a emoțiilor ce țin de fiecare trăire a noastră, am descoperit, printr-un lung proces, o cale care mi-a îmbogățit viața și relațiile în același timp.
                                    </p>
                                </div>
                            </div>

                            {/* Therapeutic Approach */}
                            <div className="bg-white rounded-2xl p-8 shadow-warm">
                                <h3 className="text-2xl font-bold text-sage-800 mb-6 flex items-center">
                                    <svg className="w-7 h-7 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Abordarea Mea Terapeutică
                                </h3>
                                
                                <div className="space-y-6">
                                    <p className="text-sage-700 leading-relaxed">
                                        Folosesc o <strong>abordare integrativă</strong>, cu o bază solidă în terapia cognitiv-comportamentală (CBT), completată de tehnici din terapia centrată pe compasiune și mindfulness. Aceasta înseamnă că vom lucra împreună, în mod colaborativ, pentru a identifica tiparele de gândire și comportament care îți provoacă suferință și le vom înlocui cu altele noi, mai sănătoase și mai adaptative.
                                    </p>
                                    
                                    <div className="bg-golden-honey/20 rounded-xl p-6">
                                        <p className="text-sage-700 italic">
                                            "Pun un accent deosebit pe <strong>relația terapeutică</strong>, considerând-o fundamentul oricărui proces de schimbare reușit."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Specializations */}
                            <div className="bg-white rounded-2xl p-8 shadow-warm">
                                <h3 className="text-2xl font-bold text-sage-800 mb-6 flex items-center">
                                    <svg className="w-7 h-7 mr-3 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Specializări
                                </h3>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { icon: "💭", title: "Anxietate și Atacuri de Panică", desc: "Tehnici CBT pentru managementul anxietății" },
                                        { icon: "🌧️", title: "Depresie și Mood", desc: "Sprijin în depășirea episoadelor depresive" },
                                        { icon: "❤️", title: "Terapie de Cuplu", desc: "Îmbunătățirea comunicării și intimității" },
                                        { icon: "🧠", title: "Traumă și PTSD", desc: "Procesarea experiențelor traumatice" },
                                        { icon: "🍽️", title: "Tulburări Alimentare", desc: "Suport pentru binge eating și alte tulburări" },
                                        { icon: "👨‍👩‍👧‍👦", title: "Relații Familiale", desc: "Dinamici familiale și comunicare" }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-sage-50 rounded-xl p-4 hover:bg-sage-100 transition-colors duration-200">
                                            <div className="text-2xl mb-2">{item.icon}</div>
                                            <h4 className="font-semibold text-sage-800 text-sm mb-1">{item.title}</h4>
                                            <p className="text-sage-600 text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
