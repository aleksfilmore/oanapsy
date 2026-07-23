import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-50 p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base flex-1">
                    {t('cookie.text')}
                    <Link to="/politica-confidentialitate" className="text-terracotta hover:text-warm-orange font-semibold underline transition-colors duration-300">
                        {t('cookie.policyLink')}
                    </Link>.
                </div>
                <div className="flex shrink-0">
                    <button
                        onClick={handleAccept}
                        className="bg-terracotta hover:bg-warm-orange text-white px-8 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        {t('cookie.acceptBtn')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
