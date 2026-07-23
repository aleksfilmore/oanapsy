import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MentalHealthResources = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('emergency');

    const resources = t('resources_list.items', { returnObjects: true });
    const categories = t('resources_list.categories', { returnObjects: true });

    const renderResourceItem = (item) => {
        switch (item.type) {
            case 'phone':
                return (
                    <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-sage-800 text-lg">{item.name}</h3>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                {item.available}
                            </span>
                        </div>
                        <p className="text-sage-600 mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                            <a
                                href={`tel:${item.contact}`}
                                className="bg-terracotta text-white px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-colors flex items-center"
                            >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                                {item.contact}
                            </a>
                        </div>
                    </div>
                );

            case 'website':
                return (
                    <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all">
                        <h3 className="font-semibold text-sage-800 text-lg mb-3">{item.name}</h3>
                        <p className="text-sage-600 mb-4">{item.description}</p>
                        <a
                            href={item.contact}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-sage text-white px-4 py-2 rounded-lg hover:bg-sage/90 transition-colors inline-flex items-center"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                            </svg>
                            {t('resources_list.ui.visit_site')}
                        </a>
                    </div>
                );

            case 'book':
                return (
                    <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="font-semibold text-sage-800 text-lg">{item.name}</h3>
                                <p className="text-sage-500">{t('resources_list.ui.by')} {item.author}</p>
                            </div>
                            <span className="bg-sage-100 text-sage-800 px-2 py-1 rounded-full text-xs">
                                {item.category}
                            </span>
                        </div>
                        <p className="text-sage-600">{item.description}</p>
                    </div>
                );

            case 'app':
                return (
                    <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-sage-800 text-lg">{item.name}</h3>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                {item.platform}
                            </span>
                        </div>
                        <p className="text-sage-600 mb-4">{item.description}</p>
                        <div className="space-y-1">
                            {item.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm text-sage-500">
                                    <svg className="w-3 h-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'exercise':
                return (
                    <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-sage-800 text-lg">{item.name}</h3>
                            <span className="bg-terracotta/20 text-terracotta px-2 py-1 rounded-full text-xs">
                                {item.duration}
                            </span>
                        </div>
                        <p className="text-sage-600 mb-4">{item.description}</p>
                        <div className="space-y-2">
                            <h4 className="font-medium text-sage-800">{t('resources_list.ui.steps')}</h4>
                            <ol className="space-y-1">
                                {item.steps.map((step, index) => (
                                    <li key={index} className="flex items-start text-sm text-sage-600">
                                        <span className="bg-terracotta text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-warm-beige to-light-sand">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
                        {t('resources_page.title1')}
                        <span className="text-terracotta"> {t('resources_page.title2')}</span>
                    </h2>
                    <p className="text-xl text-sage-600 max-w-2xl mx-auto">
                        {t('resources_page.subtitle')}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    activeCategory === category.id
                                        ? resources[category.id].color + ' text-white shadow-md'
                                        : 'bg-white text-sage-600 hover:bg-sage-50 border border-sage-200'
                                }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Resource Content */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-sage-800 mb-6 text-center">
                            {resources[activeCategory].icon} {resources[activeCategory].title}
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {resources[activeCategory].items.map((item, index) => (
                                <div key={index}>
                                    {renderResourceItem(item)}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                        <div className="text-yellow-600 text-lg mb-2">{t('resources_list.ui.important_title')}</div>
                        <p className="text-yellow-800">
                            {t('resources_list.ui.important_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResources;
