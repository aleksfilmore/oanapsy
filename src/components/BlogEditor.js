import React, { useState } from 'react';

const BlogEditor = ({ onSave, onCancel, existingPost = null }) => {
    const [post, setPost] = useState({
        title: existingPost?.title || '',
        content: existingPost?.content || '',
        excerpt: existingPost?.excerpt || '',
        tags: existingPost?.tags?.join(', ') || '',
        publishedAt: existingPost?.publishedAt || new Date().toISOString().split('T')[0],
        readingTime: existingPost?.readingTime || 5
    });

    const [isPreview, setIsPreview] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        const formattedPost = {
            ...post,
            id: existingPost?.id || Date.now(),
            tags: post.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            slug: post.title.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .trim(),
            publishedAt: new Date(post.publishedAt).toISOString()
        };
        
        onSave(formattedPost);
    };

    const generateExcerpt = () => {
        if (post.content) {
            const excerpt = post.content.substring(0, 150) + '...';
            setPost(prev => ({ ...prev, excerpt }));
        }
    };

    const estimateReadingTime = () => {
        if (post.content) {
            const words = post.content.split(' ').length;
            const readingTime = Math.ceil(words / 200); // Average reading speed
            setPost(prev => ({ ...prev, readingTime }));
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-900">
                        {existingPost ? 'Editează articol' : 'Articol nou'}
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setIsPreview(!isPreview)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            {isPreview ? '📝 Editare' : '👁️ Previzualizare'}
                        </button>
                        <button
                            onClick={onCancel}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                            ✕ Închide
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    {!isPreview ? (
                        // Edit Mode
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Titlu articol
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={post.title}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Introduceți titlul articolului..."
                                />
                            </div>

                            {/* Meta Information */}
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Data publicării
                                    </label>
                                    <input
                                        type="date"
                                        name="publishedAt"
                                        value={post.publishedAt}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Timp de citit (minute)
                                    </label>
                                    <input
                                        type="number"
                                        name="readingTime"
                                        value={post.readingTime}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        min="1"
                                        max="60"
                                    />
                                    <button
                                        type="button"
                                        onClick={estimateReadingTime}
                                        className="text-sm text-blue-600 hover:text-blue-800 mt-1"
                                    >
                                        📊 Estimează automat
                                    </button>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Etichete (separate prin virgulă)
                                    </label>
                                    <input
                                        type="text"
                                        name="tags"
                                        value={post.tags}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="anxietate, depresie, terapie..."
                                    />
                                </div>
                            </div>

                            {/* Excerpt */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Descriere scurtă (excerpt)
                                    </label>
                                    <button
                                        type="button"
                                        onClick={generateExcerpt}
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        ✨ Generează automat
                                    </button>
                                </div>
                                <textarea
                                    name="excerpt"
                                    value={post.excerpt}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="O descriere scurtă a articolului pentru previzualizare..."
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Conținut articol
                                </label>
                                <textarea
                                    name="content"
                                    value={post.content}
                                    onChange={handleInputChange}
                                    rows="15"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                                    placeholder="Scrieți conținutul articolului aici..."
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    💡 Puteți folosi Markdown pentru formatare (** pentru bold, * pentru italic, etc.)
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button
                                    onClick={onCancel}
                                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Anulează
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    💾 Salvează articol
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Preview Mode
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                    <span>📅 {new Date(post.publishedAt).toLocaleDateString('ro-RO')}</span>
                                    <span>⏱️ {post.readingTime} min de citit</span>
                                    <div className="flex gap-2">
                                        {post.tags.split(',').map((tag, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-lg text-gray-600 italic mb-6">{post.excerpt}</p>
                                <div className="prose max-w-none">
                                    <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                                        {post.content}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button
                                    onClick={onCancel}
                                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Anulează
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    ✅ Publică articol
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogEditor;
