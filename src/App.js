import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

// Datele pentru blog ar veni dintr-un CMS
import { mockBlogPosts } from './mockData';

function App() {
    const [currentPage, setPage] = useState('home');
    const [theme, setTheme] = useState('light');
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setPage={setPage} setSelectedPost={setSelectedPost} />;
            case 'about':
                return <AboutPage />;
            case 'services':
                return <ServicesPage />;
            case 'blog':
                return <BlogListPage posts={mockBlogPosts} setPage={setPage} setSelectedPost={setSelectedPost} />;
            case 'blogPost':
                return <BlogPostPage post={selectedPost} setPage={setPage} />;
            case 'contact':
                return <ContactPage />;
            case 'legal':
                return <LegalPage />;
            default:
                return <HomePage setPage={setPage} setSelectedPost={setSelectedPost} />;
        }
    };

    return (
        <div className={`font-sans bg-cream dark:bg-deep-earth transition-colors duration-300`}>
            <Header currentPage={currentPage} setPage={setPage} theme={theme} toggleTheme={toggleTheme} />
            <main>
                {renderPage()}
            </main>
            <Footer setPage={setPage} />
        </div>
    );
}

export default App;
