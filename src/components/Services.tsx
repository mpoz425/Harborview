import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServicesFlipCard from './ServicesFlipCard';

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="py-20 mb-20">
      <div ref={sectionRef} className="container mx-auto px-4 will-change-transform min-h-[600px]">
        <div className="relative h-full">
          {/* Background rectangle */}
          <div className="absolute top-10 left-0 w-2/3 h-[120%] bg-light-gray rounded-lg -z-10" />
          
          <ServicesFlipCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
