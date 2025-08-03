import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../mockData';
import SEO from '../components/SEO';
import BreathingExercise from '../components/BreathingExercise';

const HomePage = () => {
    return (
        <>
            <SEO 
                title="Psihoterapeut Oana Tenea - Consiliere și Suport Psihologic"
                description="Bine ai venit pe site-ul psihoterapeutului Oana Tenea. Oferă consiliere psihologică, terapie de cuplu și suport pentru anxietate și depresie în Vaslui și online."
            />
            <div className="animate-fade-in">
                {/* Hero Section */}
                <section className="relative min-h-screen bg-gradient-to-br from-soft-yellow via-golden-honey to-warm-orange overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img 
                            src="/3DX_2399web.jpg" 
                            alt="Oana Tenea - Psihoterapeut" 
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-soft-yellow/70 via-golden-honey/50 to-warm-orange/60"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
                        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                            <div className="animate-slide-up">
                                <div className="bg-warm-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-warm">
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-earth leading-tight mb-6">
                                        Găsește-ți 
                                        <span className="text-terracotta block">echilibrul interior</span>
                                        <span className="text-sage-deep block text-3xl md:text-4xl lg:text-5xl mt-2">cu Oana Tenea</span>
                                    </h1>
                                    <p className="text-xl text-warm-gray mb-8 leading-relaxed">
                                        Psihoterapeut specializat în anxietate, depresie și relații. Oferă un spațiu sigur pentru vindecarea ta emoțională prin terapie individuală și de cuplu.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link 
                                            to="/contact"
                                            className="group px-8 py-4 bg-gradient-to-r from-terracotta to-warm-orange text-white font-semibold rounded-2xl hover:shadow-warm transition-all duration-300 text-center transform hover:scale-105"
                                        >
                                            <span className="group-hover:tracking-wide transition-all duration-300">
                                                Programează o consultație
                                            </span>
                                        </Link>
                                        <Link 
                                            to="/despre"
                                            className="px-8 py-4 border-2 border-sage text-sage-deep font-semibold rounded-2xl hover:bg-sage hover:text-white transition-all duration-300 text-center backdrop-blur-sm bg-warm-white/70"
                                        >
                                            Despre mine
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:flex justify-center items-center hidden">
                                <div className="animate-float">
                                    <img 
                                        src="/OanaTenea.png" 
                                        alt="Oana Tenea" 
                                        className="max-w-md w-full h-auto rounded-3xl shadow-medium"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-deep-earth rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-deep-earth rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </section>

                {/* Breathing Exercise Section */}
                <section className="py-20 bg-gradient-to-r from-warm-beige to-light-sand">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="animate-slide-up">
                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-earth mb-6">
                                        Începe cu o 
                                        <span className="text-terracotta"> respirație profundă</span>
                                    </h2>
                                    <p className="text-lg text-warm-gray mb-8 leading-relaxed">
                                        Ia o pauză din ziua ta aglomerată și relaxează-te cu acest exercițiu simplu de respirație. 
                                        Este primul pas către o stare de calm și echilibru interior.
                                    </p>
                                    <div className="flex space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-sage rounded-full"></div>
                                            <span className="text-warm-gray">Reduce stresul</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-terracotta rounded-full"></div>
                                            <span className="text-warm-gray">Calmează mintea</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-warm-white rounded-3xl p-8 shadow-soft">
                                    <h3 className="font-display text-2xl font-bold text-deep-earth mb-4">
                                        Exercițiu de respirație ghidat
                                    </h3>
                                    <BreathingExercise />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Blog Posts */}
                <section className="py-20 bg-gradient-to-br from-ivory via-warm-white to-soft-yellow/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 animate-slide-up">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-earth mb-4">
                                Articole recente din
                                <span className="text-terracotta"> blog</span>
                            </h2>
                            <p className="text-xl text-warm-gray max-w-2xl mx-auto">
                                Descoperă sfaturi practice și perspective profesionale pentru sănătatea ta mentală
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {blogPosts.slice(0, 3).map((post, index) => (
                                <article 
                                    key={post.id} 
                                    className="group bg-warm-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center space-x-3 mb-6">
                                        {post.tags.slice(0, 2).map(tag => 
                                            <span key={tag} className="bg-sage/20 text-sage-deep px-4 py-2 rounded-full font-medium text-sm">
                                                {tag}
                                            </span>
                                        )}
                                        <span className="text-warm-gray text-sm flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            {post.readingTime} min
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-deep-earth mb-4 group-hover:text-terracotta transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-warm-gray mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <Link 
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-terracotta hover:text-warm-orange font-semibold group-hover:translate-x-2 transition-all duration-300"
                                    >
                                        Citește mai mult
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </article>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link 
                                to="/blog"
                                className="inline-flex items-center px-8 py-4 border-2 border-sage text-sage-deep font-semibold rounded-2xl hover:bg-sage hover:text-white transition-all duration-300"
                            >
                                Vezi toate articolele
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-terracotta via-warm-orange to-soft-coral relative overflow-hidden">
                    {/* Background pattern */}
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
                        <div className="max-w-4xl mx-auto animate-slide-up">
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                                Ești gata să faci
                                <span className="block">primul pas?</span>
                            </h2>
                            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Contactează-mă pentru o consultație inițială gratuită. Împreună putem lucra pentru a-ți îmbunătăți calitatea vieții și pentru a-ți găsi echilibrul interior.
                            </p>
                            
                            {/* Benefits grid */}
                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">Spațiu sigur</h3>
                                    <p className="text-white/80 text-sm">Un mediu confidențial și empatic</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">Rezultate rapide</h3>
                                    <p className="text-white/80 text-sm">Tehnici dovedite și eficiente</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">Flexibilitate</h3>
                                    <p className="text-white/80 text-sm">Online sau în cabinet</p>
                                </div>
                            </div>
                            
                            <Link 
                                to="/contact"
                                className="group inline-flex items-center px-10 py-5 bg-white text-terracotta font-bold rounded-2xl hover:bg-warm-white transition-all duration-300 transform hover:scale-105 shadow-warm"
                            >
                                <span className="group-hover:tracking-wide transition-all duration-300">
                                    Programează o întâlnire
                                </span>
                                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
