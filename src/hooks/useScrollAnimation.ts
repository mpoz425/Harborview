import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    const isMobile = window.innerWidth < 768;

    // Don't apply animations on mobile
    if (isMobile) {
      if (currentElement) {
        currentElement.style.opacity = '1';
        currentElement.style.transform = 'none';
      }
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: Array.from({ length: 100 }, (_, i) => i / 100)
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (currentElement) {
          const opacity = entry.intersectionRatio;
          const translateY = 50 * (1 - entry.intersectionRatio);

          currentElement.style.opacity = opacity.toString();
          currentElement.style.transform = `translateY(${translateY}px)`;
          currentElement.style.transition = 'transform 0.3s ease-out';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (currentElement) {
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