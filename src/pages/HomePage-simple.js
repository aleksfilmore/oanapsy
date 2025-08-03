import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const HomePage = () => {
    return (
        <>
            <SEO 
                title="Psihoterapeut Oana Tenea - Consiliere și Suport Psihologic"
                description="Bine ai venit pe site-ul psihoterapeutului Oana Tenea. Oferă consiliere psihologică, terapie de cuplu și suport pentru anxietate și depresie în Vaslui și online."
            />
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-deep-earth mb-6">
                            Bine ai venit!
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Psihoterapeut Oana Tenea - Consiliere și Suport Psihologic
                        </p>
                        <Link 
                            to="/contact"
                            className="inline-block px-8 py-4 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                        >
                            Programează o consultație
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
