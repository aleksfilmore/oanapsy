import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon, MenuIcon, CloseIcon } from './Icons';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    const navLinks = [
        { name: 'Acasă', path: '/' },
        { name: 'Despre Mine', path: '/despre' },
        { name: 'Servicii Psihoterapie', path: '/servicii' },
        { name: 'Resurse', path: '/resurse' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
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

                        {/* Theme Toggle */}
                        <button
                            onClick={onToggleDarkMode}
                            className="p-3 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 text-gray-800 hover:from-orange-200 hover:to-amber-200 transition-all duration-300 transform hover:scale-105 shadow-md"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={onToggleDarkMode}
                            className="p-2.5 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 text-gray-800 hover:from-orange-200 hover:to-amber-200 transition-all duration-300 shadow-md"
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
