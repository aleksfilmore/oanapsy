import React from 'react';
import { Link } from 'react-router-dom';
import { useSmartLivingSync } from '../hooks/useSmartLivingSync';
import SEO from '../components/SEO';
import BreathingExercise from '../components/BreathingExercise';
import InstagramFeed from '../components/InstagramFeedNew';
import SelfAssessmentQuiz from '../components/SelfAssessmentQuiz';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const HomePage = () => {
    const { getAllArticles } = useSmartLivingSync();
    
    // Get latest articles from all sources
    const allArticles = getAllArticles().slice(0, 3);

    return (
        <>
            <SEO 
                title="Psihoterapeut Oana Tenea - Consiliere și Suport Psihologic"
                description="Bine ai venit pe site-ul psihoterapeutului Oana Tenea. Oferă consiliere psihologică, terapie de cuplu și suport pentru anxietate și depresie în Vaslui și online."
            />
            
            {/* CSS for responsive background positioning to ensure Oana's head is visible */}
            <style jsx>{`
                .hero-background {
                    background-position: center 25% !important;
                }
                @media (max-width: 1024px) {
                    .hero-background {
                        background-position: 60% 20% !important;
                    }
                }
                @media (max-width: 768px) {
                    .hero-background {
                        background-position: 65% 15% !important;
                        background-size: 120% !important;
                    }
                }
                @media (max-width: 640px) {
                    .hero-background {
                        background-position: 70% 10% !important;
                        background-size: 130% !important;
                    }
                }
                @media (max-width: 480px) {
                    .hero-background {
                        background-position: 75% 8% !important;
                        background-size: 140% !important;
                    }
                }
            `}</style>
            
            <div className="overflow-hidden">
                {/* Hero Section with Oana's photo as background */}
                <section className="relative py-16 lg:py-24 min-h-screen flex items-center overflow-hidden">
                    {/* Background Image - Oana's photo */}
                    <div 
                        className="absolute inset-0 bg-cover bg-no-repeat hero-background"
                        style={{
                            backgroundImage: `url('/3DX_2399web.jpg')`,
                            backgroundPosition: 'center 25%',
                            backgroundSize: 'cover'
                        }}
                    >
                        {/* Subtle overlay for better text readability while preserving the beautiful yellow background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
                            {/* Left side - Text content with premium design */}
                            <div className="lg:col-span-6 xl:col-span-5 animate-slide-up">
                                <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 lg:p-10 shadow-2xl border border-white/30">
                                    <div className="mb-6">
                                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full font-medium text-sm border border-amber-200">
                                            💛 Consiliere psihologică & Psihoterapie
                                        </span>
                                    </div>
                                    
                                    <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                        Un pas către
                                        <span className="block text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">
                                            vindecarea ta
                                        </span>
                                    </h1>
                                    
                                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                        Sunt <strong className="text-gray-900">Oana Tenea</strong>, psihoterapeut cu experiență în consiliere psihologică, 
                                        terapie de cuplu și suport pentru anxietate, depresie și alte provocări emoționale.
                                    </p>
                                    
                                    {/* Credentials with modern design */}
                                    <div className="mb-8 space-y-3">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">Psihoterapeut autorizat</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">Consultații în București și online</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">Abordare empată și profesională</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link 
                                            to="/contact"
                                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                                        >
                                            Programează o consultație
                                        </Link>
                                        <Link 
                                            to="/despre"
                                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 bg-white/80 hover:bg-white font-semibold rounded-2xl transition-all duration-300 hover:border-orange-300"
                                        >
                                            Despre mine
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Professional badge floating over the photo */}
                            <div className="lg:col-span-6 xl:col-span-7 relative animate-slide-up lg:block hidden" style={{ animationDelay: '0.1s' }}>
                                <div className="flex justify-end pr-8">
                                    {/* Premium floating credential badge */}
                                    <div className="bg-white/95 backdrop-blur-md rounded-[1.5rem] shadow-2xl p-6 border border-white/30 max-w-sm">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-xl mb-2">Oana Tenea</h3>
                                            <p className="text-orange-600 font-semibold mb-4">Psihoterapeut Certificat</p>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center justify-center gap-2">
                                                    <span>📍</span>
                                                    <span>București & Online</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <span>🎓</span>
                                                    <span>Licențiat în Psihologie</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <span>💙</span>
                                                    <span>Specializare Anxietate & Depresie</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile floating badge - elegant and compact */}
                        <div className="lg:hidden mt-8 flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 border border-white/30">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Oana Tenea</h3>
                                        <p className="text-orange-600 font-medium">Psihoterapeut • București</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breathing Exercise Section */}
                <section className="py-20 bg-gradient-to-br from-sage-50 to-terracotta/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12 animate-slide-up">
                                <span className="inline-block px-4 py-2 bg-terracotta/10 text-terracotta rounded-full font-medium text-sm mb-4">
                                    🌸 Tehnici de relaxare
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-earth mb-6">
                                    Exercițiu de respirație pentru anxietate
                                </h2>
                                <p className="text-xl text-warm-gray leading-relaxed mb-8">
                                    Începe acum cu această tehnică simplă de respirație pentru a-ți calma mintea și a reduce stresul.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-full max-w-2xl">
                                    <h3 className="sr-only">
                                        Exercițiu ghidat de respirație
                                    </h3>
                                    <BreathingExercise />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Blog Posts */}
                <section className="py-20 bg-gradient-to-br from-deep-earth to-charcoal-text">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 animate-slide-up">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                                Articole recente din
                                <span className="text-terracotta"> blog</span>
                            </h2>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                    Descoperă sfaturi practice și perspective profesionale pentru sănătatea ta mentală
                                </p>
                                <div className="bg-gradient-to-r from-blue-50/10 to-indigo-50/10 border border-blue-200/20 rounded-2xl p-4 backdrop-blur-sm">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm font-medium text-blue-200">
                                            În colaborare cu SmartLiving.ro
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-xs leading-relaxed">
                                        Articole selectate despre psihologie, relații și dezvoltare personală pentru o audiență largă.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {allArticles.map((post, index) => {
                                const isExternalArticle = post.source === 'SmartLiving.ro';
                                const LinkComponent = isExternalArticle ? 'a' : Link;
                                const linkProps = isExternalArticle 
                                    ? { href: post.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
                                    : { to: `/blog/${post.slug || post.newSlug}` };

                                return (
                                    <article 
                                        key={post.id} 
                                        className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-2">
                                                <span className="bg-gradient-to-r from-terracotta to-warm-orange text-white px-3 py-1 rounded-full font-medium text-xs shadow-md">
                                                    {post.category}
                                                </span>
                                                {isExternalArticle && (
                                                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                        SmartLiving
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-gray-500 text-sm flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                {post.readingTime} min
                                            </span>
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-deep-earth mb-4 group-hover:text-terracotta transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                            {post.excerpt || post.metaDescription}
                                        </p>
                                        <LinkComponent 
                                            {...linkProps}
                                            className="inline-flex items-center text-terracotta hover:text-warm-orange font-semibold group-hover:translate-x-2 transition-all duration-300"
                                        >
                                            {isExternalArticle ? 'Citește pe SmartLiving' : 'Citește mai mult'}
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </LinkComponent>
                                    </article>
                                );
                            })}
                        </div>
                        <div className="text-center">
                            <Link 
                                to="/blog"
                                className="inline-flex items-center px-8 py-4 bg-white text-deep-earth font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Contactează-mă pentru o primă întâlnire gratuită și să discutăm cum te pot ajuta să-ți atingi obiectivele de sănătate mentală.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/contact"
                                    className="px-8 py-4 bg-white text-terracotta font-bold rounded-2xl hover:bg-cream transition-all duration-300 shadow-warm transform hover:scale-105"
                                >
                                    Programează o consultație
                                </Link>
                                <Link 
                                    to="/servicii"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors duration-300"
                                >
                                    Despre servicii
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Self Assessment Quiz Section */}
                <section className="py-20 bg-gradient-to-br from-sage-50 to-terracotta/10">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 animate-slide-up">
                            <span className="inline-block px-4 py-2 bg-terracotta/10 text-terracotta rounded-full font-medium text-sm mb-4">
                                🧠 Evaluare personală
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-earth mb-6">
                                Test de autoevaluare pentru anxietate
                            </h2>
                            <p className="text-xl text-warm-gray leading-relaxed max-w-3xl mx-auto">
                                Completează acest scurt test pentru a înțelege mai bine nivelul tău de anxietate și pentru a afla cum te pot ajuta.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <SelfAssessmentQuiz />
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <TestimonialsCarousel />

                {/* Instagram Feed Section */}
                <InstagramFeed />
            </div>
        </>
    );
};

export default HomePage;
