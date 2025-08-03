// Service to automatically sync new SmartLiving articles
import { smartLivingArticles } from '../data/smartLivingArticles';

class SmartLivingSync {
  constructor() {
    this.authorPageUrl = 'https://smartliving.ro/author/oana-tenea/';
    this.lastCheck = localStorage.getItem('smartliving-last-check') || new Date().toISOString();
    this.knownArticleIds = new Set(smartLivingArticles.map(article => article.id));
  }

  // Parse SmartLiving article data from HTML
  parseArticleFromHTML(articleElement) {
    try {
      const titleElement = articleElement.querySelector('h2 a, h3 a, .entry-title a');
      const excerptElement = articleElement.querySelector('.entry-excerpt, .excerpt, p');
      const categoryElement = articleElement.querySelector('.category, .cat-links a');
      const dateElement = articleElement.querySelector('time, .date, .entry-date');
      const linkElement = articleElement.querySelector('a[href*="smartliving.ro"]');

      if (!titleElement || !linkElement) return null;

      const title = titleElement.textContent.trim();
      const url = linkElement.href;
      const excerpt = excerptElement ? excerptElement.textContent.trim() : '';
      const category = categoryElement ? categoryElement.textContent.trim() : 'Articol';
      
      // Generate ID from URL
      const urlParts = url.split('/');
      const slug = urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1];
      const id = `sl-${slug}`;

      // Parse date
      let publishDate = new Date().toISOString().split('T')[0];
      if (dateElement) {
        const dateText = dateElement.getAttribute('datetime') || dateElement.textContent;
        const parsed = new Date(dateText);
        if (!isNaN(parsed)) {
          publishDate = parsed.toISOString().split('T')[0];
        }
      }

      return {
        id,
        title,
        excerpt: excerpt.substring(0, 200) + (excerpt.length > 200 ? '...' : ''),
        category: this.mapCategory(category),
        readingTime: this.estimateReadingTime(excerpt),
        publishDate,
        externalUrl: url,
        tags: this.extractTags(title, excerpt),
        source: 'SmartLiving.ro'
      };
    } catch (error) {
      console.error('Error parsing article:', error);
      return null;
    }
  }

  // Map SmartLiving categories to our categories
  mapCategory(smartLivingCategory) {
    const categoryMap = {
      'SĂNĂTATE EMOȚIONALĂ': 'Sănătate Emoțională',
      'RELAȚII': 'Relații',
      'LIFESTYLE': 'Dezvoltare Personală',
      'PSIHOLOGIE': 'Psihologie',
      'WELLNESS': 'Wellness',
      'PARENTAJ': 'Parentaj',
      'CUPLU': 'Relații'
    };
    
    return categoryMap[smartLivingCategory.toUpperCase()] || 'Sănătate Mentală';
  }

  // Estimate reading time based on content length
  estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.max(3, Math.ceil(wordCount / wordsPerMinute));
  }

  // Extract relevant tags from title and content
  extractTags(title, content) {
    const text = (title + ' ' + content).toLowerCase();
    const tagKeywords = {
      'anxietate': 'Anxietate',
      'relații': 'Relații',
      'cuplu': 'Cuplu',
      'stress': 'Stress',
      'emoții': 'Emoții',
      'comunicare': 'Comunicare',
      'copii': 'Parentaj',
      'părinți': 'Parentaj',
      'depresie': 'Depresie',
      'autoestim': 'Autoestimă',
      'încredere': 'Încredere',
      'vindecare': 'Vindecare',
      'trauma': 'Trauma',
      'dezvoltare': 'Dezvoltare personală'
    };

    const foundTags = [];
    Object.entries(tagKeywords).forEach(([keyword, tag]) => {
      if (text.includes(keyword)) {
        foundTags.push(tag);
      }
    });

    return foundTags.slice(0, 3); // Limit to 3 tags
  }

  // Check for new articles using fetch with CORS proxy
  async checkForNewArticles() {
    try {
      console.log('Checking for new SmartLiving articles...');
      
      // Note: In production, you'd need a backend service or CORS proxy
      // For now, we'll simulate the check and provide manual update method
      const response = await this.fetchWithFallback(this.authorPageUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Look for article containers (adjust selectors based on actual SmartLiving HTML)
      const articleElements = doc.querySelectorAll('article, .post, .entry, .article-item');
      const newArticles = [];

      articleElements.forEach(element => {
        const article = this.parseArticleFromHTML(element);
        if (article && !this.knownArticleIds.has(article.id)) {
          // Check if article is newer than last check
          if (new Date(article.publishDate) > new Date(this.lastCheck)) {
            newArticles.push(article);
            this.knownArticleIds.add(article.id);
          }
        }
      });

      if (newArticles.length > 0) {
        await this.addNewArticlesToBlog(newArticles);
        console.log(`Found ${newArticles.length} new articles:`, newArticles);
      }

      this.lastCheck = new Date().toISOString();
      localStorage.setItem('smartliving-last-check', this.lastCheck);
      
      return newArticles;
    } catch (error) {
      console.error('Error checking for new articles:', error);
      // Fallback to manual check notification
      this.notifyManualCheck();
      return [];
    }
  }

  // Try multiple methods to fetch the page
  async fetchWithFallback(url) {
    // Method 1: Direct fetch (will fail due to CORS)
    try {
      return await fetch(url);
    } catch (error) {
      console.log('Direct fetch failed, trying alternatives...');
    }

    // Method 2: Try with CORS proxy
    try {
      const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
      return await fetch(proxyUrl);
    } catch (error) {
      console.log('CORS proxy failed...');
    }

    // Method 3: Try alternative proxy
    try {
      const altProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(altProxyUrl);
      const data = await response.json();
      return {
        ok: true,
        text: () => Promise.resolve(data.contents)
      };
    } catch (error) {
      console.log('Alternative proxy failed...');
      throw new Error('All fetch methods failed');
    }
  }

  // Add new articles to the blog system
  async addNewArticlesToBlog(newArticles) {
    try {
      // In a real implementation, this would:
      // 1. Save to database
      // 2. Trigger blog rebuild
      // 3. Send notifications
      
      // For now, we'll save to localStorage and trigger a custom event
      const existingArticles = JSON.parse(localStorage.getItem('smartliving-sync-articles') || '[]');
      const updatedArticles = [...existingArticles, ...newArticles];
      localStorage.setItem('smartliving-sync-articles', JSON.stringify(updatedArticles));

      // Trigger custom event for UI updates
      window.dispatchEvent(new CustomEvent('smartliving-articles-updated', {
        detail: { newArticles, allArticles: updatedArticles }
      }));

      // Optionally send notification
      this.showNotification(newArticles);
      
    } catch (error) {
      console.error('Error adding new articles:', error);
    }
  }

  // Show notification for new articles
  showNotification(newArticles) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`${newArticles.length} articole noi pe SmartLiving`, {
        body: newArticles[0]?.title || 'Verifică blogul pentru articole noi',
        icon: '/favicon.ico'
      });
    } else if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          this.showNotification(newArticles);
        }
      });
    }
  }

  // Fallback method for manual checking
  notifyManualCheck() {
    console.log('Automatic sync not available. Please check manually for new SmartLiving articles.');
    
    // Could trigger a UI notification or admin alert
    window.dispatchEvent(new CustomEvent('smartliving-manual-check-needed', {
      detail: { 
        message: 'Please manually check for new SmartLiving articles',
        url: this.authorPageUrl 
      }
    }));
  }

  // Get synced articles from localStorage
  getSyncedArticles() {
    return JSON.parse(localStorage.getItem('smartliving-sync-articles') || '[]');
  }

  // Manual method to add a new article
  async addArticleManually(articleData) {
    const article = {
      id: `sl-manual-${Date.now()}`,
      source: 'SmartLiving.ro',
      ...articleData,
      tags: articleData.tags || this.extractTags(articleData.title, articleData.excerpt)
    };

    await this.addNewArticlesToBlog([article]);
    return article;
  }

  // Start periodic checking
  startPeriodicCheck(intervalHours = 24) {
    // Check immediately
    this.checkForNewArticles();

    // Then check periodically
    setInterval(() => {
      this.checkForNewArticles();
    }, intervalHours * 60 * 60 * 1000);

    console.log(`SmartLiving sync started - checking every ${intervalHours} hours`);
  }

  // Stop periodic checking
  stopPeriodicCheck() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Export singleton instance
export const smartLivingSync = new SmartLivingSync();

// Utility functions for manual integration
export const syncUtils = {
  // Quick add article from SmartLiving URL
  async addFromUrl(url) {
    if (!url.includes('smartliving.ro')) {
      throw new Error('URL must be from SmartLiving.ro');
    }

    // Extract article slug from URL
    const urlParts = url.split('/');
    const slug = urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1];
    
    // Prompt for article details
    const title = prompt('Titlul articolului:');
    const excerpt = prompt('Excerpt (scurt):');
    const category = prompt('Categoria:', 'Sănătate Emoțională');
    
    if (!title || !excerpt) {
      throw new Error('Title and excerpt are required');
    }

    const article = {
      title,
      excerpt,
      category,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-'),
      readingTime: Math.ceil(excerpt.length / 1000) + 5,
      publishDate: new Date().toISOString().split('T')[0],
      externalUrl: url,
      tags: smartLivingSync.extractTags(title, excerpt)
    };

    return await smartLivingSync.addArticleManually(article);
  },

  // Get all articles (original + synced)
  getAllArticles() {
    const original = smartLivingArticles;
    const synced = smartLivingSync.getSyncedArticles();
    return [...original, ...synced].sort((a, b) => 
      new Date(b.publishDate) - new Date(a.publishDate)
    );
  }
};
