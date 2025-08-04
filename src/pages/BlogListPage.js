import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../mockData';
import { existingBlogPosts } from '../seo/blogMigration';
import { useSmartLivingSync } from '../hooks/useSmartLivingSync';
import SEO from '../components/SEO';

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
            <div className="animate-fade-in bg-gradient-to-br from-soft-yellow via-golden-honey/30 to-sage-50 py-20">
                <div className="container mx-auto px-6">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-terracotta/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-warm-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-golden-honey/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
                    </div>
                    {/* Header */}
                    <div className="text-center mb-16 relative z-10">
                        <div className="inline-block mb-6">
                            <div className="w-20 h-20 bg-gradient-to-r from-terracotta to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-sage-800 mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-terracotta to-warm-orange bg-clip-text text-transparent">
                                Blog & 
                            </span>
                            <span className="text-sage-800">Articole</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-sage-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Articole despre sănătate mentală, relații și dezvoltare personală care te pot ajuta în călătoria ta spre bunăstare.
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-terracotta via-warm-orange to-golden-honey mx-auto rounded-full mb-8 shadow-md"></div>
                        
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
                                
                                {/* Admin-only Sync Status - Hidden for visitors */}
                                {process.env.NODE_ENV === 'development' && (
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 mb-2">
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
                                )}
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {filteredPosts.map((post, index) => {
                            const isExternalArticle = post.source === 'SmartLiving.ro';
                            const LinkComponent = isExternalArticle ? 'a' : Link;
                            const linkProps = isExternalArticle 
                                ? { href: post.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
                                : { to: `/blog/${post.slug || post.newSlug}` };

                            return (
                                <article 
                                    key={post.id} 
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-sage-100 relative overflow-hidden animate-fade-in-up"
                                    style={{
                                        animationDelay: `${index * 150}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    {/* Decorative gradient background */}
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-terracotta via-warm-orange to-golden-honey"></div>
                                    
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-gradient-to-r from-terracotta to-warm-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                                                {post.category}
                                            </span>
                                            {isExternalArticle && (
                                                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
                                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    SmartLiving
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center text-sm text-sage-500 bg-sage-50 px-3 py-1 rounded-full">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-medium">{post.readingTime} min</span>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-xl font-bold text-sage-800 mb-4 group-hover:text-terracotta transition-colors duration-300 leading-tight min-h-[3.5rem]">
                                        {post.title}
                                    </h2>
                                    
                                    <p className="text-sage-600 mb-6 line-clamp-3 leading-relaxed text-base min-h-[4.5rem]">
                                        {post.excerpt || post.metaDescription}
                                    </p>

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {post.tags.slice(0, 3).map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className="text-xs bg-gradient-to-r from-terracotta/10 to-warm-orange/10 text-terracotta px-3 py-1 rounded-full font-medium border border-terracotta/20"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-sage-100">
                                        <div className="flex items-center text-sm text-sage-500">
                                            <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <time dateTime={post.publishDate} className="font-medium">
                                                {formatDate(post.publishDate)}
                                            </time>
                                        </div>
                                        
                                        <LinkComponent 
                                            {...linkProps}
                                            className="bg-gradient-to-r from-terracotta to-warm-orange text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center group hover:shadow-lg hover:scale-105"
                                        >
                                            <span>{isExternalArticle ? 'Citește pe SmartLiving' : 'Citește articolul'}</span>
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </LinkComponent>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-24 bg-gradient-to-br from-white via-soft-yellow/50 to-golden-honey/30 rounded-3xl p-8 md:p-12 shadow-2xl border border-sage-100 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-terracotta/20 to-warm-orange/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-golden-honey/30 to-sage-100/50 rounded-full blur-xl"></div>
                        
                        <div className="text-center relative z-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mb-6 shadow-warm">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-sage-800 mb-6 leading-tight">
                                Vrei să primești articole noi?
                            </h2>
                            <p className="text-xl md:text-2xl text-sage-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Haide să discutăm despre cum te pot ajuta în călătoria ta spre o viață mai echilibrată și împlinită.
                            </p>
                            <Link 
                                to="/contact"
                                className="inline-flex items-center bg-gradient-to-r from-terracotta to-warm-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-warm"
                            >
                                <span>Ia legătura cu mine</span>
                                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
