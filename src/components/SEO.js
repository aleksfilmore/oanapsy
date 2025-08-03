// Fisier: src/components/SEO.js
// Component pentru meta tags și SEO optimization

import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  slug, 
  publishDate, 
  type = 'website',
  image,
  author = 'Oana Tenea',
  category,
  tags = []
}) => {
  const siteUrl = 'https://oanatenea.ro';
  const fullUrl = `${siteUrl}${slug ? `/blog/${slug}` : ''}`;
  const fullTitle = title ? `${title} | Oana Tenea - Psihoterapeut` : 'Oana Tenea - Psihoterapeut';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const imageUrl = image ? `${siteUrl}${image}` : defaultImage;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph meta tags */}
      <meta property="og:site_name" content="Oana Tenea - Psihoterapeut" />
      <meta property="og:title" content={title || 'Oana Tenea - Psihoterapeut'} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Oana Tenea - Psihoterapeut'} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:published_time" content={publishDate} />
          {category && <meta property="article:section" content={category} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebSite',
          "name": title || 'Oana Tenea - Psihoterapeut',
          "headline": title,
          "description": description,
          "url": fullUrl,
          "image": imageUrl,
          ...(type === 'article' && {
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Oana Tenea - Psihoterapeut",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
              }
            },
            "datePublished": publishDate,
            "dateModified": publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullUrl
            }
          })
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
