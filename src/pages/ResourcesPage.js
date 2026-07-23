import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import SelfAssessmentQuiz from '../components/SelfAssessmentQuiz';
import MentalHealthResources from '../components/MentalHealthResources';
import InteractiveFAQ from '../components/InteractiveFAQ';

const ResourcesPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <SEO 
                title={t('resources_page.seo_title')}
                description={t('resources_page.seo_desc')}
            />
            
            <div className="min-h-screen bg-gradient-to-br from-sage-50 to-golden-honey/20">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-r from-terracotta via-warm-orange to-soft-coral relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                                <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#pattern)" />
                        </svg>
                    </div>
                    
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {t('resources_page.title1')}
                                <span className="block">{t('resources_page.title2')}</span>
                            </h1>
                            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                                {t('resources_page.subtitle')}
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3"></div>
                                    <h3 className="font-semibold text-white mb-2">{t('resources_page.feat1_title')}</h3>
                                    <p className="text-white/80 text-sm">{t('resources_page.feat1_desc')}</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3"></div>
                                    <h3 className="font-semibold text-white mb-2">{t('resources_page.feat2_title')}</h3>
                                    <p className="text-white/80 text-sm">{t('resources_page.feat2_desc')}</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-3xl mb-3"></div>
                                    <h3 className="font-semibold text-white mb-2">{t('resources_page.feat3_title')}</h3>
                                    <p className="text-white/80 text-sm">{t('resources_page.feat3_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navigation Menu */}
                <section className="py-12 bg-white shadow-sm sticky top-0 z-40">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="#self-assessment" 
                                className="bg-sage text-white px-6 py-3 rounded-full hover:bg-sage/90 transition-colors"
                            >
                                {t('resources_page.nav1')}
                            </a>
                            <a 
                                href="#resources" 
                                className="bg-golden-honey text-white px-6 py-3 rounded-full hover:bg-golden-honey/90 transition-colors"
                            >
                                {t('resources_page.nav2')}
                            </a>
                            <a 
                                href="#faq" 
                                className="bg-soft-coral text-white px-6 py-3 rounded-full hover:bg-soft-coral/90 transition-colors"
                            >
                                {t('resources_page.nav3')}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Self Assessment Section */}
                <div id="self-assessment">
                    <SelfAssessmentQuiz />
                </div>

                {/* Mental Health Resources Section */}
                <div id="resources">
                    <MentalHealthResources />
                </div>

                {/* FAQ Section */}
                <div id="faq">
                    <InteractiveFAQ />
                </div>

                {/* Call to Action Section */}
                <section className="py-20 bg-gradient-to-r from-sage via-sage-deep to-terracotta">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {t('resources_page.cta_title')}
                            </h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                {t('resources_page.cta_desc')}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="bg-white text-sage px-8 py-4 rounded-xl font-semibold hover:bg-warm-white transition-colors"
                                >
                                    {t('resources_page.cta_btn1')}
                                </a>
                                <a
                                    href="/despre"
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sage transition-colors"
                                >
                                    {t('resources_page.cta_btn2')}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ResourcesPage;
