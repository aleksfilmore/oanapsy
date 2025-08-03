import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../mockData';
import { existingBlogPosts } from '../seo/blogMigration';
import { handleLegacyRedirects } from '../utils/redirects';
import SEO from '../components/SEO';

const BlogPostPage = ({ setPage }) => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Caută articolul în datele existente
    const allPosts = [...blogPosts, ...existingBlogPosts];
    const post = allPosts.find(p => p.slug === slug || p.newSlug === slug);

    useEffect(() => {
        // Verifică redirects pentru URL-uri vechi
        const redirectUrl = handleLegacyRedirects();
        if (redirectUrl) {
            navigate(redirectUrl, { replace: true });
        }
    }, [navigate]);
    if (!post) {
        return (
            <>
                <SEO 
                    title="Articol negăsit"
                    description="Articolul pe care îl cauți nu există sau a fost șters."
                />
                <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl font-bold text-charcoal-text dark:text-cream-text">Articol negăsit</h1>
                        <p className="mt-4 text-charcoal-text/80 dark:text-cream-text/80">
                            Articolul pe care îl cauți nu există sau a fost șters.
                        </p>
                        <button 
                            onClick={() => setPage('blog')}
                            className="mt-6 px-6 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                        >
                            Înapoi la Blog
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO 
                title={post.title}
                description={post.metaDescription || post.excerpt}
                slug={post.slug || post.newSlug}
                publishDate={post.publishDate}
                type="article"
                category={post.category}
                tags={post.tags}
                image={post.imageUrl}
            />
            <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Navigation */}
                    <div className="mb-8">
                        <button 
                            onClick={() => setPage('blog')}
                            className="text-terracotta hover:underline flex items-center"
                        >
                            <span className="mr-2">&larr;</span>
                            Înapoi la Blog
                        </button>
                    </div>

                    {/* Article Header */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            {post.tags.map(tag => 
                                <span key={tag} className="bg-sage/20 text-sage-dark dark:bg-sage/30 dark:text-sage-light px-3 py-1 rounded-full font-medium text-sm">
                                    {tag}
                                </span>
                            )}
                            <span className="text-charcoal-text/60 dark:text-cream-text/60 text-sm">
                                {post.readingTime} minute de citit
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text leading-tight">
                            {post.title}
                        </h1>
                        <p className="mt-4 text-xl text-charcoal-text/80 dark:text-cream-text/80 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-8">
                        <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 md:p-12 shadow-lg">
                        <div 
                            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-charcoal-text dark:prose-headings:text-cream-text prose-p:text-charcoal-text/90 dark:prose-p:text-cream-text/90 prose-strong:text-charcoal-text dark:prose-strong:text-cream-text prose-ul:text-charcoal-text/90 dark:prose-ul:text-cream-text/90 prose-li:text-charcoal-text/90 dark:prose-li:text-cream-text/90"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center bg-ivory dark:bg-charcoal-text rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-charcoal-text dark:text-cream-text mb-4">
                            Ai nevoie de suport personalizat?
                        </h3>
                        <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-6">
                            Dacă acest articol a rezonat cu tine și simți că ai nevoie de ajutor profesional, sunt aici să te sprijin.
                        </p>
                        <button 
                            onClick={() => setPage('contact')}
                            className="px-8 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                        >
                            Programează o consultație
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostPage;
