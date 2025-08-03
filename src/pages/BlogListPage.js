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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-sage-100">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={post.featuredImage || post.imageUrl} 
                                        alt={post.title}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-gradient-to-r from-terracotta to-warm-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                                            <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-sage-600 mb-4">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-warm-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                                            </svg>
                                            <time dateTime={post.publishDate}>
                                                {formatDate(post.publishDate)}
                                            </time>
                                        </div>
                                        <span className="mx-3 text-sage-300">•</span>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-warm-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{post.readingTime} min</span>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-xl font-bold text-sage-800 mb-3 group-hover:text-terracotta transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h2>
                                    
                                    <p className="text-sage-600 mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt || post.metaDescription}
                                    </p>

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {post.tags.slice(0, 3).map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className="text-xs bg-terracotta/10 text-terracotta px-3 py-1 rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    
                                    <Link 
                                        to={`/blog/${post.slug || post.newSlug}`}
                                        className="inline-flex items-center bg-gradient-to-r from-terracotta to-warm-orange text-white px-6 py-3 rounded-full font-semibold hover:shadow-warm hover:scale-105 transition-all duration-300 w-full justify-center group"
                                    >
                                        <span>Citește articolul</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 bg-gradient-to-br from-white to-soft-yellow rounded-3xl p-8 md:p-12 shadow-warm border border-sage-100">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
                                Vrei să primești articole noi?
                            </h2>
                            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Să discutăm despre cum te pot ajuta în călătoria ta spre o viață mai echilibrată și împlinită.
                            </p>
                            <Link 
                                to="/contact"
                                className="inline-flex items-center bg-gradient-to-r from-terracotta to-warm-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-warm hover:scale-105 transition-all duration-300"
                            >
                                <span>Ia legătura cu mine</span>
                                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogListPage;
