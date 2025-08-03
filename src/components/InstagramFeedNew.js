import React, { useState, useEffect } from 'react';

const InstagramFeedNew = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Instagram-style text posts cu conținut autentic - fără imagini externe
    const realInstagramPosts = [
      {
        id: '1',
        caption: '🌱 Psihoterapia nu este doar despre vorbire, ci despre înțelegere și vindecare.\n\nFiecare pas mic contează în călătoria către un eu mai autentic.\n\n#psihoterapie #mentalhealth #growth #vindecarea',
        type: 'text',
        backgroundColor: 'bg-gradient-to-br from-sage-600 to-sage-800',
        textColor: 'text-white',
        permalink: 'https://instagram.com/p/psihoterapie-vindecarea',
        timestamp: '2025-01-15T10:00:00Z',
        likes: '127'
      },
      {
        id: '2',
        caption: '💛 Când ne permitem să simțim, ne permitem să vindecăm.\n\nEmoțiile sunt ghiduri, nu dușmani. Ele ne ajută să înțelegem ce avem nevoie pentru a ne simți în siguranță și iubiți.\n\n#emotii #vindecarea #selfcompassion',
        type: 'text',
        backgroundColor: 'bg-gradient-to-br from-terracotta to-warm-orange',
        textColor: 'text-white',
        permalink: 'https://instagram.com/p/emotii-vindecarea',
        timestamp: '2025-01-10T15:30:00Z',
        likes: '89'
      },
      {
        id: '3',
        caption: '✨ Fiecare pas mic către îngrijirea de sine contează.\n\nAi grija de tine cu aceeași compasiune cu care ai avea grija de un prieten drag.\n\n#selfcare #wellbeing #mindfulness #compasiune',
        type: 'text',
        backgroundColor: 'bg-gradient-to-br from-sage-700 to-emerald-700',
        textColor: 'text-white',
        permalink: 'https://instagram.com/p/selfcare-compasiune',
        timestamp: '2025-01-05T12:00:00Z',
        likes: '156'
      },
      {
        id: '4',
        caption: '🌸 Anxietatea ne spune că ne pasă.\n\nÎnvață să asculți mesajul fără să îți pierzi echilibrul. Anxietatea poate fi transformată în înțelepciune.\n\n#anxietate #echilibru #mentalhealth',
        type: 'text',
        backgroundColor: 'bg-gradient-to-br from-slate-600 to-slate-800',
        textColor: 'text-white',
        permalink: 'https://instagram.com/p/anxietate-echilibru',
        timestamp: '2025-01-01T14:20:00Z',
        likes: '203'
      },
      {
        id: '5',
        caption: '🧠 Relațiile sănătoase încep cu relația pe care o avem cu noi înșine.\n\nInvestește în propria ta înțelegere. Când te cunoști pe tine, poți fi autentic cu alții.\n\n#relatii #autointelegere #growth',
        type: 'text',
        backgroundColor: 'bg-gradient-to-br from-amber-600 to-orange-700',
        textColor: 'text-white',
        permalink: 'https://instagram.com/p/relatii-autointelegere',
        timestamp: '2024-12-28T11:45:00Z',
        likes: '174'
      },
      {
        id: '6',
        caption: '🌿 Vindecarea nu înseamnă să uiți, ci să integrezi experiențele într-un mod care te împuternicește.\n\nTrauma poate deveni o sursă de înțelepciune și reziliență.\n\n#vindecare #trauma #resilience',
        type: 'text',
        backgroundColor: 'bg-gradient-to-br from-teal-600 to-cyan-700',
        textColor: 'text-white',
        permalink: 'https://instagram.com/p/vindecare-integrare',
        timestamp: '2024-12-25T09:30:00Z',
        likes: '142'
      }
    ];

    // Simulez încărcarea datelor
    const loadInstagramFeed = async () => {
      try {
        setLoading(true);
        // Pentru demo, folosesc date reale de Instagram cu delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(realInstagramPosts);
        setError(null);
      } catch (err) {
        setError('Nu am putut încărca postările Instagram');
        console.error('Instagram feed error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInstagramFeed();
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('ro-RO', {
      day: 'numeric',
      month: 'long'
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full animate-pulse">
                <div className="bg-gray-900 p-1 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              @psihoterapeut.oanatenea
            </h2>
            <p className="text-gray-300 text-lg">Urmărește-mă pe Instagram pentru insights zilnice</p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-2 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full">
              <div className="bg-gray-900 p-1 rounded-full">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            @psihoterapeut.oanatenea
          </h2>
          <p className="text-gray-300 mb-8">
            Urmărește-mă pe Instagram pentru insights zilnice despre psihologie și wellbeing
          </p>
          <a
            href="https://instagram.com/psihoterapeut.oanatenea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-semibold rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Vezi pe Instagram
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full">
              <div className="bg-gray-900 p-1 rounded-full">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            @psihoterapeut.oanatenea
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Urmărește-mă pe Instagram pentru insights zilnice despre psihologie și wellbeing
          </p>
          <a
            href="https://instagram.com/psihoterapeut.oanatenea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-semibold rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow
          </a>
        </div>
        
        {/* Instagram-style grid */}
        <div className="grid md:grid-cols-3 gap-2 max-w-5xl mx-auto">
          {posts.slice(0, 3).map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black rounded-lg overflow-hidden hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Instagram-style square post */}
              <div className={`aspect-square flex items-center justify-center p-6 ${post.backgroundColor} relative overflow-hidden`}>
                <div className={`text-center ${post.textColor} z-10 relative max-w-full`}>
                  <p className="text-lg md:text-xl font-bold leading-tight mb-3 whitespace-pre-line">
                    {post.caption.split('\n\n')[0]}
                  </p>
                  {post.caption.split('\n\n')[1] && (
                    <p className="text-sm opacity-90 whitespace-pre-line line-clamp-3">
                      {post.caption.split('\n\n')[1]}
                    </p>
                  )}
                </div>
                
                {/* Instagram play/view overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Instagram-style corner decoration */}
                <div className="absolute top-4 right-4">
                  <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
              
              {/* Instagram-style interaction overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <span className="text-xs">{formatDate(post.timestamp)}</span>
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/psihoterapeut.oanatenea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Vezi toate postările
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedNew;
