import React, { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons';

const Header = ({ currentPage, setPage, theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Acasă', page: 'home' },
        { name: 'Despre Mine', page: 'about' },
        { name: 'Servicii & Prețuri', page: 'services' },
        { name: 'Blog', page: 'blog' },
        { name: 'Programare', page: 'contact' },
    ];

    const handleNavClick = (page) => {
        setPage(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-cream/80 dark:bg-deep-earth/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-charcoal-text dark:text-cream-text cursor-pointer" onClick={() => handleNavClick('home')}>
                    Oana Tenea
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <button 
                            key={link.page}
                            onClick={() => handleNavClick(link.page)}
                            className={`text-charcoal-text dark:text-cream-text/80 hover:text-terracotta dark:hover:text-terracotta transition-colors ${currentPage === link.page ? 'text-terracotta dark:text-terracotta font-semibold' : ''}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button onClick={toggleTheme} className="p-2 rounded-full text-charcoal-text dark:text-cream-text/80 hover:bg-ivory dark:hover:bg-charcoal-text/50 transition-colors">
                        {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                    </button>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-charcoal-text dark:text-cream-text/80">
                            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-cream dark:bg-deep-earth">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <button 
                                key={link.page}
                                onClick={() => handleNavClick(link.page)}
                                className={`w-full text-center py-2 text-charcoal-text dark:text-cream-text hover:bg-ivory dark:hover:bg-charcoal-text/50 transition-colors ${currentPage === link.page ? 'text-terracotta dark:text-terracotta font-semibold' : ''}`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
