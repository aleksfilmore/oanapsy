// Fisier: src/utils/redirects.js
// Handler pentru redirects din URL-urile vechi către cele noi

import { urlRedirectMap } from '../seo/blogMigration';

export const handleLegacyRedirects = () => {
  const currentPath = window.location.pathname;
  
  // Verifică dacă URL-ul curent este un URL vechi care trebuie redirectat
  if (urlRedirectMap[currentPath]) {
    const newUrl = urlRedirectMap[currentPath];
    // Redirect 301 permanent pentru SEO
    window.history.replaceState(null, null, newUrl);
    return newUrl;
  }
  
  return null;
};

// Generează sitemap.xml pentru noile URL-uri
export const generateSitemap = (posts) => {
  const siteUrl = 'https://oanatenea.ro';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/despre', changefreq: 'monthly', priority: '0.8' },
    { url: '/servicii', changefreq: 'monthly', priority: '0.8' },
    { url: '/blog', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    { url: '/termeni-si-conditii', changefreq: 'yearly', priority: '0.3' }
  ];
  
  const blogPages = posts.map(post => ({
    url: `/blog/${post.newSlug}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: post.publishDate
  }));
  
  const allPages = [...staticPages, ...blogPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};

// Generează robots.txt
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://oanatenea.ro/sitemap.xml`;
};
