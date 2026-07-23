import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MoonIcon, SunIcon, MenuIcon, CloseIcon } from './Icons';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    const navLinks = [
        { name: t('header.home'), path: '/' },
        { name: t('header.about'), path: '/despre' },
        { name: t('header.services'), path: '/servicii' },
        { name: t('header.resources'), path: '/resurse' },
        { name: t('header.blog'), path: '/blog' },
        { name: t('header.contact'), path: '/contact' }
    ];

    const isActivePage = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="bg-white/98 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-amber-200/50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="font-display text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                        Oana Tenea
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-all duration-300 hover:text-orange-600 relative group ${
                                    isActivePage(link.path)
                                        ? 'text-orange-600' 
                                        : 'text-gray-800'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${
                                    isActivePage(link.path) ? 'w-full' : ''
                                }`}></span>
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mr-4 border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => changeLanguage('ro')}
                                className={`flex items-center px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${(!i18n.language || i18n.language.startsWith('ro')) ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                aria-label="Română"
                            >
                                <span className="mr-2">🇷🇴</span> RO
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`flex items-center px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${(i18n.language && i18n.language.startsWith('en')) ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                aria-label="English"
                            >
                                <span className="mr-2">🇬🇧</span> EN
                            </button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={onToggleDarkMode}
                            className="p-3 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 text-gray-800 hover:from-orange-200 hover:to-amber-200 transition-all duration-300 transform hover:scale-105 shadow-md"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button & Controls */}
                    <div className="md:hidden flex items-center space-x-3">
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => changeLanguage('ro')}
                                className={`flex items-center px-2 py-1.5 text-xs font-semibold rounded transition-all duration-200 ${(!i18n.language || i18n.language.startsWith('ro')) ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500'}`}
                            >
                                <span className="mr-1">🇷🇴</span> RO
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`flex items-center px-2 py-1.5 text-xs font-semibold rounded transition-all duration-200 ${(i18n.language && i18n.language.startsWith('en')) ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500'}`}
                            >
                                <span className="mr-1">🇬🇧</span> EN
                            </button>
                        </div>
                        <button
                            onClick={onToggleDarkMode}
                            className="p-2 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 text-gray-800 hover:from-orange-200 hover:to-amber-200 transition-all duration-300 shadow-md"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-orange-200 pt-4 bg-white/95 rounded-lg shadow-lg mx-2">
                        <div className="flex flex-col space-y-3 px-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium transition-colors hover:text-orange-600 py-3 px-4 rounded-lg hover:bg-orange-50 ${
                                        isActivePage(link.path)
                                            ? 'text-orange-600 bg-orange-50' 
                                            : 'text-gray-800'
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
