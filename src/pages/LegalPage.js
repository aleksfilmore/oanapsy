import React from 'react';
import { useTranslation } from 'react-i18next';

const LegalPage = () => {
    const { t } = useTranslation();
    const sections = t('legal.sections', { returnObjects: true });

    return (
        <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text">{t('legal.title')}</h1>
                        <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80">
                            {t('legal.subtitle')}
                        </p>
                    </div>

                    <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 md:p-12 shadow-lg space-y-8">
                        {sections.map((section, index) => (
                            <section key={index}>
                                <h2 className="text-2xl font-bold text-terracotta mb-4">{section.title}</h2>
                                <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed mb-4">
                                    {section.title.includes('10.') ? 
                                        section.content.replace('{{date}}', new Date().toLocaleDateString(t('locale') || 'ro-RO')) : 
                                        section.content
                                    }
                                </p>
                                {section.list && (
                                    <ul className="list-disc list-inside text-charcoal-text/90 dark:text-cream-text/90 space-y-2">
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
