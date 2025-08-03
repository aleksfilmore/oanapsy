import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../mockData';
import { existingBlogPosts } from '../seo/blogMigration';
import SEO from '../components/SEO';

const BlogListPage = () => {
    // Combină blogurile noi cu cele migrate
    const allPosts = [...blogPosts, ...existingBlogPosts].sort((a, b) => 
        new Date(b.publishDate) - new Date(a.publishDate)
    );

    const [selectedCategory, setSelectedCategory] = useState('All');
    
    // Extract unique categories
    const categories = ['All', ...new Set(allPosts.map(post => post.category))];
    
    // Filter posts based on selected category
    const filteredPosts = selectedCategory === 'All' 
        ? allPosts 
        : allPosts.filter(post => post.category === selectedCategory);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ro-RO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <SEO 
                title="Blog - Articole despre Sănătate Mentală și Psihoterapie"
                description="Descoperă articole utile despre sănătate mentală, anxietate, relații și dezvoltare personală scrise de psihoterapeutul Oana Tenea."
            />
            <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                            Blog & Articole
                        </h1>
                        <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Articole despre sănătate mentală, relații și dezvoltare personală care te pot ajuta în călătoria ta spre bunăstare.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange mx-auto rounded-full"></div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-terracotta to-warm-orange text-white shadow-warm transform scale-105'
                                        : 'bg-white text-sage-700 hover:bg-sage-50 hover:text-sage-800 shadow-md hover:shadow-lg'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map(post => (
                            <article 
                                key={post.id} 
                                className="bg-ivory dark:bg-charcoal-text rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                {/* Featured Image */}
                                {post.imageUrl && (
                                    <div className="h-48 overflow-hidden">
                                        <img 
                                            src={post.imageUrl} 
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                
                                {/* Content */}
                                <div className="p-6">
                                    {/* Meta Information */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-sage/20 text-sage-dark dark:bg-sage/30 dark:text-sage-light px-3 py-1 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-charcoal-text/60 dark:text-cream-text/60 text-sm">
                                            {post.readingTime} min
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-charcoal-text dark:text-cream-text mb-3 line-clamp-2 group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt || post.metaDescription}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 3).map(tag => (
                                            <span 
                                                key={tag} 
                                                className="text-xs bg-terracotta/10 text-terracotta dark:bg-terracotta/20 dark:text-terracotta px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <Link 
                                        to={`/blog/${post.slug || post.newSlug}`}
                                        className="inline-flex items-center text-terracotta hover:underline font-semibold transition-colors"
                                    >
                                        Citește articolul
                                        <span className="ml-2">→</span>
                                    </Link>

                                    {/* Publish Date */}
                                    <div className="mt-4 pt-4 border-t border-sage/20">
                                        <span className="text-charcoal-text/60 dark:text-cream-text/60 text-sm">
                                            {new Date(post.publishDate).toLocaleDateString('ro-RO', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center bg-ivory dark:bg-charcoal-text rounded-xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal-text dark:text-cream-text mb-4">
                            Vrei să primești articole noi direct în inbox?
                        </h2>
                        <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-6 max-w-2xl mx-auto">
                            Abonează-te la newsletter-ul meu pentru a primi săptămânal articole utile despre sănătate mentală și dezvoltare personală.
                        </p>
                        <Link 
                            to="/contact"
                            className="inline-block px-8 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                        >
                            Ia legătura cu mine
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogListPage;
