import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-sage-800 to-sage-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Oana Tenea</h3>
                        <p className="text-lg text-sage-200 mb-4">Psihoterapeut Autorizat</p>
                        <p className="text-sage-300 mb-4 leading-relaxed">
                            Oferind suport psihologic specializat pentru adulți, cupluri și familii. 
                            Sesiuni disponibile în cabinet în București și online.
                        </p>
                        <div className="flex items-center text-sage-200">
                            <svg className="w-5 h-5 mr-2 text-warm-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Calea Dorobanti 116-122, Sector 1, București</span>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-warm-orange">Navigare Rapidă</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-sage-200 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-warm-orange rounded-full mr-3"></span>
                                    Acasă
                                </Link>
                            </li>
                            <li>
                                <Link to="/despre" className="text-sage-200 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-warm-orange rounded-full mr-3"></span>
                                    Despre Mine
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicii" className="text-sage-200 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-warm-orange rounded-full mr-3"></span>
                                    Servicii
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-sage-200 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-warm-orange rounded-full mr-3"></span>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sage-200 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-warm-orange rounded-full mr-3"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-warm-orange">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center text-sage-200">
                                <svg className="w-5 h-5 mr-3 text-warm-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:psihoterapeut@oanatenea.ro" className="hover:text-white transition-colors">
                                    psihoterapeut@oanatenea.ro
                                </a>
                            </div>
                            <div className="flex items-center text-sage-200">
                                <svg className="w-5 h-5 mr-3 text-warm-orange" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <a href="https://instagram.com/psihoterapeut.oanatenea" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    @psihoterapeut.oanatenea
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                {/* Bottom Section */}
                <div className="border-t border-sage-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sage-300 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Oana Tenea. Toate drepturile rezervate.
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                            <Link to="/termeni-si-conditii" className="text-sage-200 hover:text-white transition-colors duration-300">
                                Termeni și Condiții
                            </Link>
                            <Link to="/politica-confidentialitate" className="text-sage-200 hover:text-white transition-colors duration-300">
                                Politică de Confidențialitate & GDPR
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
