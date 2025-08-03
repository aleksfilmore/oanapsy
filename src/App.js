import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ResourcesPage from './pages/ResourcesPage';
import SEO from './components/SEO';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`${isDarkMode ? 'dark' : ''} min-h-screen transition-colors duration-300`}>
        <SEO 
          title="Psihoterapeut Oana Tenea - Consiliere și Suport Psihologic"
          description="Oana Tenea, psihoterapeut cu experiență în Vaslui și online. Oferă consiliere psihologică, terapie de cuplu și suport pentru anxietate, depresie și alte provocări emoționale."
        />
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/despre" element={<AboutPage />} />
            <Route path="/servicii" element={<ServicesPage />} />
            <Route path="/resurse" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/termeni-si-conditii" element={<LegalPage />} />
            <Route path="/politica-confidentialitate" element={<PrivacyPolicyPage />} />
            {/* Redirects pentru URL-uri vechi */}
            <Route path="/cum-le-vorbim-copiilor-despre-mos-craciun-sau-mos-nicolae/" 
              element={<Navigate to="/blog/cum-le-vorbim-copiilor-despre-mos-craciun-sau-mos-nicolae" replace />} />
            <Route path="/cum-poate-un-tata-narcisist-sa-si-raneasca-fiul-sau-fiica/" 
              element={<Navigate to="/blog/cum-poate-un-tata-narcisist-sa-si-raneasca-fiul-sau-fiica" replace />} />
            <Route path="/binge-eating-o-tulburare-de-alimentatie-ca-si-raspuns-la-trauma/" 
              element={<Navigate to="/blog/binge-eating-tulburare-alimentatie-raspuns-trauma" replace />} />
            <Route path="/copilul-reactioneaza-la-modul-in-care-te-comporti-ca-parinte/" 
              element={<Navigate to="/blog/copilul-reactioneaza-la-modul-in-care-te-comporti-ca-parinte" replace />} />
            <Route path="/bullying-fenomenul-problema/" 
              element={<Navigate to="/blog/bullying-fenomen-problema" replace />} />
            <Route path="/invatatorul-mentorul-elevului/" 
              element={<Navigate to="/blog/invatatorul-mentorul-elevului" replace />} />
            <Route path="/psihoterapia-necesita-timp-si-efort/" 
              element={<Navigate to="/blog/psihoterapia-necesita-timp-si-efort" replace />} />
            <Route path="/de-ce-femeile-cuminti-sunt-atrase-de-baietii-rai/" 
              element={<Navigate to="/blog/de-ce-femeile-cuminti-sunt-atrase-de-baietii-rai" replace />} />
            {/* 404 redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
