import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      // Create multiple threshold points for smoother animation
      threshold: Array.from({ length: 100 }, (_, i) => i / 100)
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (currentElement) {
          // Calculate opacity based on intersection ratio
          const opacity = entry.intersectionRatio;
          const translateY = 50 * (1 - entry.intersectionRatio); // Start at 50px up, move to 0

          // Apply smooth transform and opacity
          currentElement.style.opacity = opacity.toString();
          currentElement.style.transform = `translateY(${translateY}px)`;
          currentElement.style.transition = 'transform 0.3s ease-out';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (currentElement) {
      // Set initial state
      currentElement.style.opacity = '0';
      currentElement.style.transform = 'translateY(50px)';
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, []);

  return elementRef;
}; 