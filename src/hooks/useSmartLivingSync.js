import { useState, useEffect, useCallback } from 'react';
import { smartLivingSync, syncUtils } from '../services/smartLivingSync';

// Custom hook for managing SmartLiving article synchronization
export const useSmartLivingSync = () => {
  const [syncedArticles, setSyncedArticles] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [lastCheck, setLastCheck] = useState(null);
  const [newArticlesCount, setNewArticlesCount] = useState(0);

  // Check if current user is admin
  const isAdminUser = () => {
    // Check if user is on admin page or has admin session
    return window.location.pathname.includes('/admin') || 
           sessionStorage.getItem('adminAuthenticated') === 'true';
  };

  // Load synced articles from localStorage on mount
  useEffect(() => {
    const loadSyncedArticles = () => {
      const articles = smartLivingSync.getSyncedArticles();
      setSyncedArticles(articles);
      
      const lastCheckTime = localStorage.getItem('smartliving-last-check');
      if (lastCheckTime) {
        setLastCheck(new Date(lastCheckTime));
      }
    };

    loadSyncedArticles();
  }, []);

  // Listen for new articles events
  useEffect(() => {
    const handleNewArticles = (event) => {
      const { newArticles, allArticles } = event.detail;
      setSyncedArticles(allArticles);
      setNewArticlesCount(prev => prev + newArticles.length);
      
      // Show toast notification only for admin
      if (isAdminUser()) {
        showToast(`${newArticles.length} articole noi găsite pe SmartLiving!`);
      }
    };

    const handleManualCheckNeeded = (event) => {
      // Show warning only for admin
      if (isAdminUser()) {
        showToast('Verifică manual articolele noi pe SmartLiving', 'warning');
      }
    };

    window.addEventListener('smartliving-articles-updated', handleNewArticles);
    window.addEventListener('smartliving-manual-check-needed', handleManualCheckNeeded);

    return () => {
      window.removeEventListener('smartliving-articles-updated', handleNewArticles);
      window.removeEventListener('smartliving-manual-check-needed', handleManualCheckNeeded);
    };
  }, []);

  // Check for new articles manually
  const checkForNewArticles = useCallback(async () => {
    setIsChecking(true);
    try {
      const newArticles = await smartLivingSync.checkForNewArticles();
      setLastCheck(new Date());
      
      // Show notifications only for admin
      if (isAdminUser()) {
        if (newArticles.length === 0) {
          showToast('Nu au fost găsite articole noi', 'info');
        }
      }
      
      return newArticles;
    } catch (error) {
      console.error('Error checking for new articles:', error);
      // Show error only for admin
      if (isAdminUser()) {
        showToast('Eroare la verificarea articolelor noi', 'error');
      }
      return [];
    } finally {
      setIsChecking(false);
    }
  }, []);

  // Start automatic sync
  const startAutoSync = useCallback((intervalHours = 24) => {
    smartLivingSync.startPeriodicCheck(intervalHours);
    if (isAdminUser()) {
      showToast(`Sincronizare automată activată (la ${intervalHours}h)`);
    }
  }, []);

  // Stop automatic sync
  const stopAutoSync = useCallback(() => {
    smartLivingSync.stopPeriodicCheck();
    if (isAdminUser()) {
      showToast('Sincronizare automată oprită');
    }
  }, []);

  // Add article manually from URL
  const addArticleFromUrl = useCallback(async (url, articleData) => {
    try {
      setIsChecking(true);
      const article = await smartLivingSync.addArticleManually({
        externalUrl: url,
        ...articleData
      });
      
      // Refresh synced articles
      const updatedArticles = smartLivingSync.getSyncedArticles();
      setSyncedArticles(updatedArticles);
      
      // Show success notification only for admin
      if (isAdminUser()) {
        showToast('Articol adăugat cu succes!');
      }
      return article;
    } catch (error) {
      console.error('Error adding article:', error);
      // Show error only for admin
      if (isAdminUser()) {
        showToast('Eroare la adăugarea articolului', 'error');
      }
      return null;
    } finally {
      setIsChecking(false);
    }
  }, []);

  // Get all articles (original + synced)
  const getAllArticles = useCallback(() => {
    return syncUtils.getAllArticles();
  }, []);

  // Clear new articles count
  const clearNewArticlesCount = useCallback(() => {
    setNewArticlesCount(0);
  }, []);

  // Simple toast notification function
  const showToast = (message, type = 'success') => {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
      type === 'error' ? 'bg-red-500 text-white' :
      type === 'warning' ? 'bg-yellow-500 text-black' :
      type === 'info' ? 'bg-blue-500 text-white' :
      'bg-green-500 text-white'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  };

  return {
    syncedArticles,
    isChecking,
    lastCheck,
    newArticlesCount,
    checkForNewArticles,
    startAutoSync,
    stopAutoSync,
    addArticleFromUrl,
    getAllArticles,
    clearNewArticlesCount
  };
};

// Component for manual article addition
export const AddSmartLivingArticle = ({ onArticleAdded }) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('Sănătate Emoțională');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { addArticleFromUrl } = useSmartLivingSync();

  const categories = [
    'Sănătate Emoțională',
    'Relații',
    'Dezvoltare Personală',
    'Psihologie Socială',
    'Parentaj',
    'Vindecare',
    'Sănătate Mentală'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url || !title || !excerpt) {
      alert('Toate câmpurile sunt obligatorii');
      return;
    }

    if (!url.includes('smartliving.ro')) {
      alert('URL-ul trebuie să fie de pe SmartLiving.ro');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const article = await addArticleFromUrl(url, {
        title,
        excerpt,
        category,
        readingTime: Math.max(5, Math.ceil(excerpt.length / 200)),
        publishDate: new Date().toISOString().split('T')[0]
      });

      if (article) {
        // Reset form
        setUrl('');
        setTitle('');
        setExcerpt('');
        setCategory('Sănătate Emoțională');
        
        if (onArticleAdded) {
          onArticleAdded(article);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Eroare la adăugarea articolului');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Adaugă Articol SmartLiving
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL SmartLiving
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://smartliving.ro/articol-nou/"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Titlu
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titlul articolului"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Descrierea scurtă a articolului..."
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categorie
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Se adaugă...' : 'Adaugă Articol'}
        </button>
      </form>
    </div>
  );
};
