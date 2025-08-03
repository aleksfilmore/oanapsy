import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon, MenuIcon, CloseIcon } from './Icons';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    const navLinks = [
        { name: 'Acasă', path: '/' },
        { name: 'Despre Mine', path: '/despre' },
        { name: 'Servicii & Prețuri', path: '/servicii' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActivePage = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="bg-ivory dark:bg-charcoal-text shadow-lg relative z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="text-2xl font-bold text-charcoal-text dark:text-cream-text hover:text-terracotta dark:hover:text-terracotta transition-colors"
                    >
                        Oana Tenea
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-terracotta ${
                                    isActivePage(link.path)
                                        ? 'text-terracotta dark:text-terracotta' 
                                        : 'text-charcoal-text dark:text-cream-text'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={onToggleDarkMode}
                            className="p-2 rounded-lg bg-cream dark:bg-deep-earth text-charcoal-text dark:text-cream-text hover:bg-sage/20 dark:hover:bg-sage/20 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={onToggleDarkMode}
                            className="p-2 rounded-lg bg-cream dark:bg-deep-earth text-charcoal-text dark:text-cream-text hover:bg-sage/20 dark:hover:bg-sage/20 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-cream dark:bg-deep-earth text-charcoal-text dark:text-cream-text hover:bg-sage/20 dark:hover:bg-sage/20 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-sage/20 pt-4">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium transition-colors hover:text-terracotta ${
                                        isActivePage(link.path)
                                            ? 'text-terracotta dark:text-terracotta' 
                                            : 'text-charcoal-text dark:text-cream-text'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
