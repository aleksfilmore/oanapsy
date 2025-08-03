// Fisier: src/components/LazyImage.js
// Component pentru lazy loading optimizat pentru imagini

import React, { useState, useRef, useCallback } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  blurDataURL,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  // Intersection Observer pentru lazy loading
  const setRef = useCallback((node) => {
    if (imgRef.current) {
      // Cleanup previous observer
    }
    
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      
      observer.observe(node);
      imgRef.current = observer;
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad && onLoad();
  };

  const handleError = () => {
    setHasError(true);
    onError && onError();
  };

  return (
    <div 
      ref={setRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder/Blur effect */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300 ${
            blurDataURL ? 'bg-cover bg-center' : ''
          }`}
          style={blurDataURL ? { 
            backgroundImage: `url(${blurDataURL})`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          } : {}}
        />
      )}
      
      {/* Main Image */}
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {/* Loading indicator */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
