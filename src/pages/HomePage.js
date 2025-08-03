import React from 'react';
import BreathingExercise from '../components/BreathingExercise';
import { mockBlogPosts } from '../mockData';

const HomePage = ({ setPage, setSelectedPost }) => {
    const scrollToContact = () => {
        setPage('contact');
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-cream dark:bg-deep-earth">
                <div className="container mx-auto px-6 py-24 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-charcoal-text dark:text-cream-text leading-tight">
                        Psihoterapie autentică pentru minți obosite
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-charcoal-text/80 dark:text-cream-text/80 max-w-3xl mx-auto">
                        Un spațiu sigur și confidențial unde poți explora, înțelege și vindeca. Fie că te confrunți cu anxietate, burnout sau pur și simplu cauți claritate, sunt aici să te ghidez.
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="mt-8 px-8 py-4 bg-terracotta text-white font-semibold rounded-lg shadow-md hover:bg-terracotta/90 transition-all transform hover:scale-105"
                    >
                        Programează o ședință
                    </button>
                </div>
            </section>
            
            {/* Welcome Section */}
            <section className="py-20 bg-ivory dark:bg-charcoal-text">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                     <h2 className="text-3xl md:text-4xl font-bold text-charcoal-text dark:text-cream-text">Bine ai venit!</h2>
                     <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80 leading-relaxed">
                         Mă bucur că ți-am trezit curiozitatea și crezi ca-ți pot fi de folos! Am creat acest website pentru a veni în ajutorul tău. Aici găsești suport și informații care să te ajute să-ți îmbunătățești relațiile cu tine și cu cei din jurul tău, stările care te frământă, cât și să înveți să fii bine cu tine.
                     </p>
                     <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80 leading-relaxed">
                         Suntem atât de dominați de diferite strategii comportamentale și de temeri, încât am pierdut perspectiva de ansamblu asupra personalității noastre. Eu vin în ajutorul tău ca un <span className="text-terracotta font-semibold">ghid turistic</span>. Îți arăt care sunt obiectivele 'turistice', îți relatez istoricul lor și, împreună, găsim modalități de a face cât mai frumoase și persistente amintirile acestor obiective.
                     </p>
                </div>
            </section>

            {/* Breathing Exercise Embed */}
            <section className="py-20 bg-cream dark:bg-deep-earth">
                 <div className="container mx-auto px-6 flex justify-center">
                    <BreathingExercise />
                 </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="py-20 bg-ivory dark:bg-charcoal-text">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-text dark:text-cream-text">Din Jurnalul Terapeutului</h2>
                        <p className="mt-4 text-charcoal-text/80 dark:text-cream-text/80">Gânduri, perspective și resurse pentru o viață mai echilibrată.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mockBlogPosts.slice(0, 3).map(post => (
                            <div key={post.id} className="bg-cream dark:bg-deep-earth rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <div className="flex items-center space-x-2 text-sm">
                                        {post.tags.slice(0,2).map(tag => <span key={tag} className="bg-sage/20 text-sage-dark dark:bg-sage/30 dark:text-sage-light px-2 py-1 rounded-full font-medium">{tag}</span>)}
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold text-charcoal-text dark:text-cream-text">{post.title}</h3>
                                    <p className="mt-2 text-charcoal-text/80 dark:text-cream-text/80">{post.excerpt}</p>
                                    <button 
                                        onClick={() => {
                                            setSelectedPost(post);
                                            setPage('blogPost');
                                        }}
                                        className="mt-4 text-terracotta font-semibold hover:underline"
                                    >
                                        Citește mai mult &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => setPage('blog')} className="px-6 py-3 border border-terracotta text-terracotta font-semibold rounded-lg hover:bg-terracotta/10 dark:hover:bg-terracotta/20 transition-colors">
                            Vezi toate articolele
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
