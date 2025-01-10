import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: isMobile ? '-10px' : '0px', // Smaller margin on mobile for better performance
      // Fewer threshold points on mobile for better performance
      threshold: isMobile 
        ? [0, 0.25, 0.5, 0.75, 1] 
        : Array.from({ length: 100 }, (_, i) => i / 100)
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (currentElement) {
          // Calculate opacity based on intersection ratio
          const opacity = entry.intersectionRatio;
          // Reduced transform distance on mobile
          const translateY = (isMobile ? 30 : 50) * (1 - entry.intersectionRatio);

          // Apply smooth transform and opacity with reduced motion on mobile
          currentElement.style.opacity = opacity.toString();
          currentElement.style.transform = `translateY(${translateY}px)`;
          currentElement.style.transition = `transform ${isMobile ? '0.2s' : '0.3s'} ease-out`;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (currentElement) {
      // Set initial state with reduced transform on mobile
      currentElement.style.opacity = '0';
      currentElement.style.transform = `translateY(${isMobile ? '30px' : '50px'})`;
      observer.observe(currentElement);
    }

    // Cleanup function
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, []);

  return elementRef;
}; 