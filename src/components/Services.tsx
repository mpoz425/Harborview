import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServicesFlipCard from './ServicesFlipCard';

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="py-12 md:py-20 mb-12 md:mb-20">
      <div ref={sectionRef} className="container mx-auto px-4 will-change-transform min-h-[500px] md:min-h-[600px]">
        <div className="relative h-full pb-[600px] md:pb-0">
          {/* Background rectangle - adjusted for mobile */}
          <div className="absolute top-10 left-0 w-full md:w-2/3 h-[120%] bg-light-gray rounded-lg -z-10" />
          
          <ServicesFlipCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
