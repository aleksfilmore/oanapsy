import React from 'react';

const BlogListPage = ({ posts, setPage, setSelectedPost }) => {
    return (
        <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text">Blog</h1>
                    <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80 max-w-3xl mx-auto">
                        Gânduri, perspective și resurse pentru o viață mai echilibrată. Articole despre sănătate mentală, tehnici de gestionare a stresului și dezvoltare personală.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <div key={post.id} className="bg-ivory dark:bg-charcoal-text rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center justify-between text-sm mb-3">
                                    <div className="flex space-x-2">
                                        {post.tags.slice(0,2).map(tag => 
                                            <span key={tag} className="bg-sage/20 text-sage-dark dark:bg-sage/30 dark:text-sage-light px-2 py-1 rounded-full font-medium">
                                                {tag}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-charcoal-text/60 dark:text-cream-text/60">{post.readingTime} min citire</span>
                                </div>
                                <h3 className="text-xl font-semibold text-charcoal-text dark:text-cream-text mb-3">{post.title}</h3>
                                <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-4">{post.excerpt}</p>
                                <button 
                                    onClick={() => {
                                        setSelectedPost(post);
                                        setPage('blogPost');
                                    }}
                                    className="text-terracotta font-semibold hover:underline flex items-center"
                                >
                                    Citește articolul complet
                                    <span className="ml-1">&rarr;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-charcoal-text/60 dark:text-cream-text/60 text-lg">
                            În curând vor fi publicate articole noi. Revino pentru conținut fresh!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogListPage;
