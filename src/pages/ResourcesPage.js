import React from 'react';
import SEO from '../components/SEO';
import SelfAssessmentQuiz from '../components/SelfAssessmentQuiz';
import TherapyProgressTracker from '../components/TherapyProgressTracker';
import MentalHealthResources from '../components/MentalHealthResources';
import InteractiveFAQ from '../components/InteractiveFAQ';

const ResourcesPage = () => {
    return (
        <>
            <SEO 
                title="Resurse pentru Sănătatea Mintală - Oana Tenea Psihoterapeut"
                description="Instrumente interactive, teste de auto-evaluare, resurse de urgență și ghiduri practice pentru sănătatea ta mentală. Dezvoltate de psihoterapeutul Oana Tenea."
            />
            
            <div className="min-h-screen bg-gradient-to-br from-sage-50 to-golden-honey/20">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-r from-terracotta via-warm-orange to-soft-coral relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                                <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#pattern)" />
                        </svg>
                    </div>
                    
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Resurse pentru
                                <span className="block">Sănătatea Mintală</span>
                            </h1>
                            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Instrumente interactive, ghiduri practice și resurse pentru a te sprijini 
                                în călătoria ta către echilibrul interior și bunăstarea emoțională.
                            </p>
                            
                            <div className="grid md:grid-cols-4 gap-6 mb-10">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3">🧠</div>
                                    <h3 className="font-semibold text-white mb-2">Auto-evaluare</h3>
                                    <p className="text-white/80 text-sm">Teste pentru a-ți înțelege starea emoțională</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3">📊</div>
                                    <h3 className="font-semibold text-white mb-2">Progres tracker</h3>
                                    <p className="text-white/80 text-sm">Urmărește-ți evoluția în timp</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3">📚</div>
                                    <h3 className="font-semibold text-white mb-2">Resurse utile</h3>
                                    <p className="text-white/80 text-sm">Cărți, aplicații și exerciții</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3">❓</div>
                                    <h3 className="font-semibold text-white mb-2">FAQ interactiv</h3>
                                    <p className="text-white/80 text-sm">Răspunsuri la întrebările frecvente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navigation Menu */}
                <section className="py-12 bg-white shadow-sm sticky top-0 z-40">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="#self-assessment" 
                                className="bg-sage text-white px-6 py-3 rounded-full hover:bg-sage/90 transition-colors"
                            >
                                🧠 Auto-evaluare
                            </a>
                            <a 
                                href="#progress-tracker" 
                                className="bg-terracotta text-white px-6 py-3 rounded-full hover:bg-terracotta/90 transition-colors"
                            >
                                📊 Progres Tracker
                            </a>
                            <a 
                                href="#resources" 
                                className="bg-golden-honey text-white px-6 py-3 rounded-full hover:bg-golden-honey/90 transition-colors"
                            >
                                📚 Resurse
                            </a>
                            <a 
                                href="#faq" 
                                className="bg-soft-coral text-white px-6 py-3 rounded-full hover:bg-soft-coral/90 transition-colors"
                            >
                                ❓ FAQ
                            </a>
                        </div>
                    </div>
                </section>

                {/* Self Assessment Section */}
                <div id="self-assessment">
                    <SelfAssessmentQuiz />
                </div>

                {/* Progress Tracker Section */}
                <div id="progress-tracker">
                    <TherapyProgressTracker />
                </div>

                {/* Mental Health Resources Section */}
                <div id="resources">
                    <MentalHealthResources />
                </div>

                {/* FAQ Section */}
                <div id="faq">
                    <InteractiveFAQ />
                </div>

                {/* Call to Action Section */}
                <section className="py-20 bg-gradient-to-r from-sage via-sage-deep to-terracotta">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ești gata pentru următorul pas?
                            </h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Aceste resurse sunt un început. Pentru un sprijin personalizat și profesional, 
                                să discutăm despre nevoile tale specifice.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-sage px-8 py-4 rounded-xl font-semibold hover:bg-warm-white transition-colors"
                                >
                                    📞 Programează o consultație
                                </a>
                                <a
                                    href="/despre"
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sage transition-colors"
                                >
                                    👩‍⚕️ Despre mine
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ResourcesPage;
