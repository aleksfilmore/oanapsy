import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../mockData';
import { existingBlogPosts } from '../seo/blogMigration';
import { useSmartLivingSync } from '../hooks/useSmartLivingSync';
import SEO from '../components/SEO';
import WorkingHours from '../components/WorkingHours';

const BlogListPage = () => {
    const { 
        getAllArticles, 
        checkForNewArticles, 
        isChecking, 
        lastCheck, 
        newArticlesCount,
        clearNewArticlesCount,
        startAutoSync 
    } = useSmartLivingSync();

    // Combine all articles (original + migrated + synced)
    const [allPosts, setAllPosts] = useState([]);
    
    useEffect(() => {
        const loadAllArticles = () => {
            // Get articles from all sources
            const combinedArticles = [
                ...blogPosts, 
                ...existingBlogPosts, 
                ...getAllArticles()
            ].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
            
            setAllPosts(combinedArticles);
        };

        loadAllArticles();
        
        // Start auto-sync on component mount (check every 24 hours)
        startAutoSync(24);

        // Listen for article updates
        const handleArticleUpdate = () => {
            loadAllArticles();
            clearNewArticlesCount();
        };

        window.addEventListener('smartliving-articles-updated', handleArticleUpdate);
        
        return () => {
            window.removeEventListener('smartliving-articles-updated', handleArticleUpdate);
        };
    }, [getAllArticles, startAutoSync, clearNewArticlesCount]);

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
                        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange mx-auto rounded-full mb-8"></div>
                        
                        {/* SmartLiving Partnership Notice */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="bg-blue-500 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                                            Colaborare SmartLiving.ro
                                        </h3>
                                        <p className="text-blue-700 text-sm">
                                            Articolele mele publicate pe SmartLiving.ro sunt marcate cu 
                                            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium ml-2">SmartLiving</span>
                                            și te redirecționează către publicația originală.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Sync Status */}
                                <div className="text-right">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Link
                                            to="/admin/smartliving"
                                            className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs hover:bg-gray-600 flex items-center gap-1"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Administrare
                                        </Link>
                                        <button
                                            onClick={checkForNewArticles}
                                            disabled={isChecking}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-600 disabled:opacity-50 flex items-center gap-1"
                                        >
                                            {isChecking ? (
                                                <>
                                                    <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                    </svg>
                                                    Verifică...
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                    </svg>
                                                    Verifică articole noi
                                                </>
                                            )}
                                        </button>
                                        {newArticlesCount > 0 && (
                                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                                                {newArticlesCount} noi
                                            </span>
                                        )}
                                    </div>
                                    {lastCheck && (
                                        <p className="text-xs text-blue-600">
                                            Ultima verificare: {lastCheck.toLocaleDateString('ro-RO')}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {filteredPosts.map((post) => {
                            const isExternalArticle = post.source === 'SmartLiving.ro';
                            const LinkComponent = isExternalArticle ? 'a' : Link;
                            const linkProps = isExternalArticle 
                                ? { href: post.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
                                : { to: `/blog/${post.slug || post.newSlug}` };

                            return (
                                <article key={post.id} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-sage-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-r from-terracotta to-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                            {isExternalArticle && (
                                                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    SmartLiving
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center text-sm text-sage-500">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{post.readingTime} min</span>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-lg font-bold text-sage-800 mb-3 group-hover:text-terracotta transition-colors duration-300 leading-tight line-clamp-2">
                                        {post.title}
                                    </h2>
                                    
                                    <p className="text-sage-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                                        {post.excerpt || post.metaDescription}
                                    </p>

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 2).map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className="text-xs bg-terracotta/10 text-terracotta px-2 py-1 rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-sage-500">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                                            </svg>
                                            <time dateTime={post.publishDate}>
                                                {formatDate(post.publishDate)}
                                            </time>
                                        </div>
                                        
                                        <LinkComponent 
                                            {...linkProps}
                                            className="text-terracotta hover:text-warm-orange font-semibold text-sm transition-colors duration-300 flex items-center group"
                                        >
                                            <span>{isExternalArticle ? 'Citește pe SmartLiving' : 'Citește'}</span>
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </LinkComponent>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Working Hours Section */}
                    <WorkingHours />

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
