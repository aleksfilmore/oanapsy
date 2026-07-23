import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TestimonialsCarousel = () => {
    const { t } = useTranslation();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: t('testimonials.t1_name'),
            location: t('testimonials.t1_location'),
            text: t('testimonials.t1_text'),
            rating: 5,
            sessionType: t('testimonials.t1_type'),
            timeframe: t('testimonials.t1_time')
        },
        {
            id: 2,
            name: t('testimonials.t2_name'),
            location: t('testimonials.t2_location'),
            text: t('testimonials.t2_text'),
            rating: 5,
            sessionType: t('testimonials.t2_type'),
            timeframe: t('testimonials.t2_time')
        },
        {
            id: 3,
            name: t('testimonials.t3_name'),
            location: t('testimonials.t3_location'),
            text: t('testimonials.t3_text'),
            rating: 5,
            sessionType: t('testimonials.t3_type'),
            timeframe: t('testimonials.t3_time')
        },
        {
            id: 4,
            name: t('testimonials.t4_name'),
            location: t('testimonials.t4_location'),
            text: t('testimonials.t4_text'),
            rating: 5,
            sessionType: t('testimonials.t4_type'),
            timeframe: t('testimonials.t4_time')
        },
        {
            id: 5,
            name: t('testimonials.t5_name'),
            location: t('testimonials.t5_location'),
            text: t('testimonials.t5_text'),
            rating: 5,
            sessionType: t('testimonials.t5_type'),
            timeframe: t('testimonials.t5_time')
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => 
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => 
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="py-20 bg-gradient-to-br from-soft-yellow to-golden-honey/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-sage-600 max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main testimonial */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-warm min-h-[400px] flex flex-col justify-center">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-terracotta to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                    </svg>
                                </div>
                                <div className="flex justify-center mb-4">
                                    {renderStars(testimonials[currentTestimonial].rating)}
                                </div>
                            </div>

                            <blockquote className="text-lg md:text-xl text-sage-700 leading-relaxed text-center mb-8 italic">
                                "{testimonials[currentTestimonial].text}"
                            </blockquote>

                            <div className="text-center">
                                <div className="font-semibold text-sage-800 text-lg mb-1">
                                    {testimonials[currentTestimonial].name}
                                </div>
                                <div className="text-sage-600 text-sm mb-2">
                                    {testimonials[currentTestimonial].location}
                                </div>
                                <div className="flex justify-center space-x-4 text-xs text-sage-500">
                                    <span className="bg-terracotta/10 text-terracotta px-3 py-1 rounded-full">
                                        {testimonials[currentTestimonial].sessionType}
                                    </span>
                                    <span className="bg-sage-100 text-sage-600 px-3 py-1 rounded-full">
                                        {testimonials[currentTestimonial].timeframe}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-warm rounded-full flex items-center justify-center hover:bg-sage-50 transition-colors"
                            aria-label="Testimonial anterior"
                        >
                            <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-warm rounded-full flex items-center justify-center hover:bg-sage-50 transition-colors"
                            aria-label="Testimonial următor"
                        >
                            <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentTestimonial 
                                        ? 'bg-terracotta w-8' 
                                        : 'bg-sage-300 hover:bg-sage-400'
                                }`}
                                aria-label={`Mergi la testimonialul ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 text-center">
                        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-terracotta mb-1">200+</div>
                                <div className="text-sm text-sage-600">{t('testimonials.stats.peopleHelped')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-terracotta mb-1">5 {t('testimonials.stats.years')}</div>
                                <div className="text-sm text-sage-600">{t('testimonials.stats.yearsExperience')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-terracotta mb-1">95%</div>
                                <div className="text-sm text-sage-600">{t('testimonials.stats.positiveResults')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
