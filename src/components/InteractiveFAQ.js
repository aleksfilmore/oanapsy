import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const InteractiveFAQ = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [openItems, setOpenItems] = useState(new Set());

    const faqData = useMemo(() => t('faq.items', { returnObjects: true }), [t]);
    const categories = t('faq.categories', { returnObjects: true });

    const filteredFAQs = useMemo(() => {
        return faqData.filter(item => {
            const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.answer.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, faqData]);

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const expandAll = () => {
        setOpenItems(new Set(filteredFAQs.map(item => item.id)));
    };

    const collapseAll = () => {
        setOpenItems(new Set());
    };

    return (
        <section className="py-20 bg-gradient-to-br from-sage-50 to-soft-yellow/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
                        {t('faq.ui.title')}
                    </h2>
                    <p className="text-xl text-sage-600 max-w-2xl mx-auto">
                        {t('faq.ui.subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Search and filters */}
                    <div className="mb-8 space-y-4">
                        {/* Search bar */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder={t('faq.ui.search_placeholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-sage-200 rounded-xl leading-5 bg-white placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                            />
                        </div>

                        {/* Category filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedCategory === category.id
                                            ? 'bg-terracotta text-white shadow-md'
                                            : 'bg-white text-sage-600 hover:bg-sage-50 border border-sage-200'
                                    }`}
                                >
                                    <span className="mr-1">{category.icon}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Expand/Collapse controls */}
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-sage-600">
                                {filteredFAQs.length} {filteredFAQs.length === 1 ? t('faq.ui.found_single') : t('faq.ui.found_plural')}
                            </span>
                            <div className="space-x-2">
                                <button
                                    onClick={expandAll}
                                    className="text-terracotta hover:text-terracotta/80 font-medium"
                                >
                                    {t('faq.ui.expand_all')}
                                </button>
                                <span className="text-sage-300">•</span>
                                <button
                                    onClick={collapseAll}
                                    className="text-terracotta hover:text-terracotta/80 font-medium"
                                >
                                    {t('faq.ui.collapse_all')}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {filteredFAQs.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-sage-400 text-lg mb-2"></div>
                                <p className="text-sage-500">{t('faq.ui.not_found_msg')}</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('all');
                                    }}
                                    className="mt-4 text-terracotta hover:text-terracotta/80 font-medium"
                                >
                                    {t('faq.ui.reset_filters')}
                                </button>
                            </div>
                        ) : (
                            filteredFAQs.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-sm border border-sage-100 overflow-hidden transition-all hover:shadow-md"
                                >
                                    <button
                                        onClick={() => toggleItem(item.id)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-sage-50 transition-colors"
                                    >
                                        <h3 className="font-semibold text-sage-800 text-lg pr-4">
                                            {item.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            <svg
                                                className={`w-5 h-5 text-sage-400 transition-transform ${
                                                    openItems.has(item.id) ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    {openItems.has(item.id) && (
                                        <div className="px-6 pb-4">
                                            <div className="pt-2 border-t border-sage-100">
                                                <p className="text-sage-600 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-warm">
                        <h3 className="text-xl font-semibold text-sage-800 mb-3">
                            {t('faq.ui.cta_title')}
                        </h3>
                        <p className="text-sage-600 mb-6">
                            {t('faq.ui.cta_desc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:psihoterapeut@oanatenea.ro"
                                className="bg-terracotta text-white px-6 py-3 rounded-xl font-medium hover:bg-terracotta/90 transition-colors"
                            >
                                {t('faq.ui.cta_btn1')}
                            </a>
                            <a
                                href="/contact"
                                className="bg-sage-100 text-sage-700 px-6 py-3 rounded-xl font-medium hover:bg-sage-200 transition-colors"
                            >
                                {t('faq.ui.cta_btn2')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveFAQ;
