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
                <section className="bg-cream dark:bg-deep-earth">
                    <div className="container mx-auto px-6 py-20">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="lg:w-1/2 mb-10 lg:mb-0">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-text dark:text-cream-text leading-tight mb-6">
                                    Găsește-ți echilibrul interior cu
                                    <span className="text-terracotta block">Oana Tenea</span>
                                </h1>
                                <p className="text-xl text-charcoal-text/80 dark:text-cream-text/80 mb-8 leading-relaxed">
                                    Psihoterapeut specializat în anxietate, depresie și relații. Oferă un spațiu sigur pentru vindecarea ta emoțională prin terapie individuală și de cuplu.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        to="/contact"
                                        className="px-8 py-4 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors text-center"
                                    >
                                        Programează o consultație
                                    </Link>
                                    <Link 
                                        to="/despre"
                                        className="px-8 py-4 border border-terracotta text-terracotta font-semibold rounded-lg hover:bg-terracotta/10 dark:hover:bg-terracotta/20 transition-colors text-center"
                                    >
                                        Află mai multe despre mine
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/2 lg:pl-12">
                                <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 shadow-lg">
                                    <h3 className="text-2xl font-bold text-charcoal-text dark:text-cream-text mb-4">
                                        Exercițiu de respirație ghidat
                                    </h3>
                                    <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-6">
                                        Ia o pauză și relaxează-te cu acest exercițiu simplu de respirație.
                                    </p>
                                    <BreathingExercise />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Blog Posts */}
                <section className="py-20 bg-ivory dark:bg-charcoal-text">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-text dark:text-cream-text mb-4">
                                Articole recente
                            </h2>
                            <p className="text-xl text-charcoal-text/80 dark:text-cream-text/80">
                                Descoperă sfaturi practice pentru sănătatea ta mentală
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {blogPosts.slice(0, 3).map(post => (
                                <article key={post.id} className="bg-cream dark:bg-deep-earth rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="flex items-center space-x-4 mb-4">
                                        {post.tags.slice(0, 2).map(tag => 
                                            <span key={tag} className="bg-sage/20 text-sage-dark dark:bg-sage/30 dark:text-sage-light px-3 py-1 rounded-full font-medium text-sm">
                                                {tag}
                                            </span>
                                        )}
                                        <span className="text-charcoal-text/60 dark:text-cream-text/60 text-sm">
                                            {post.readingTime} min
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-charcoal-text dark:text-cream-text mb-3 group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <Link 
                                        to={`/blog/${post.slug}`}
                                        className="text-terracotta hover:underline font-semibold inline-flex items-center"
                                    >
                                        Citește mai mult
                                        <span className="ml-2">→</span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link 
                                to="/blog"
                                className="px-6 py-3 border border-terracotta text-terracotta font-semibold rounded-lg hover:bg-terracotta/10 dark:hover:bg-terracotta/20 transition-colors"
                            >
                                Vezi toate articolele
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-cream dark:bg-deep-earth">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-text dark:text-cream-text mb-6">
                            Ești gata să faci primul pas?
                        </h2>
                        <p className="text-xl text-charcoal-text/80 dark:text-cream-text/80 mb-8 max-w-3xl mx-auto">
                            Contactează-mă pentru o consultație inițială gratuită. Împreună putem lucra pentru a-ți îmbunătăți calitatea vieții și pentru a-ți găsi echilibrul interior.
                        </p>
                        <Link 
                            to="/contact"
                            className="px-8 py-4 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                        >
                            Programează o întâlnire
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
