// Fisier: src/hooks/useScrollAnimation.js
// Hook pentru animatii trigger-uite de scroll

import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, delay]);

  return [elementRef, isVisible];
};

// Hook pentru animatii staggered (consecutive cu delay)
export const useStaggeredAnimation = (itemCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isTriggered, setIsTriggered] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTriggered) {
          setIsTriggered(true);
          
          // Animate items one by one
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i]);
            }, i * delay);
          }
        }
      },
      {
        threshold: 0.1
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [itemCount, delay, isTriggered]);

  const isItemVisible = (index) => visibleItems.includes(index);

  return [containerRef, isItemVisible];
};

// Hook pentru parallax scroll
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [elementRef, offset];
};

// Component wrapper pentru scroll animations
export const ScrollReveal = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ delay });

  const animationClasses = {
    'fade-up': isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'slide-left': isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8',
    'slide-right': isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8',
    'scale-in': isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${animationClasses[animation]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
