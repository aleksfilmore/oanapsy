import React from 'react';

const Footer = ({ setPage }) => {
    return (
        <footer className="bg-ivory dark:bg-charcoal-text text-charcoal-text/80 dark:text-cream-text/70">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-charcoal-text dark:text-cream-text">Oana Tenea - Psihoterapeut</h3>
                        <p className="text-sm">București, România</p>
                        <p className="text-sm">Disponibil pentru ședințe online și în cabinet.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
                        <button onClick={() => setPage('about')} className="hover:text-terracotta dark:hover:text-terracotta">Despre Mine</button>
                        <button onClick={() => setPage('services')} className="hover:text-terracotta dark:hover:text-terracotta">Servicii</button>
                        <button onClick={() => setPage('blog')} className="hover:text-terracotta dark:hover:text-terracotta">Blog</button>
                        <button onClick={() => setPage('contact')} className="hover:text-terracotta dark:hover:text-terracotta">Contact</button>
                    </div>
                    <div>
                        <button onClick={() => setPage('legal')} className="text-sm hover:text-terracotta dark:hover:text-terracotta">Politică de Confidențialitate & GDPR</button>
                    </div>
                </div>
                <div className="mt-8 border-t border-charcoal-text/20 dark:border-cream-text/20 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Oana Tenea. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
