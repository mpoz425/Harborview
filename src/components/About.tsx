import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AboutFlipCard from './AboutFlipCard';

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-20">
      <div ref={sectionRef} className="container mx-auto px-4 will-change-transform min-h-[600px]">
        <div className="relative h-full">
          {/* Background rectangle */}
          <div className="absolute top-10 right-0 w-2/3 h-[120%] bg-light-gray rounded-lg -z-10" />
          
          <AboutFlipCard />
        </div>
      </div>
    </section>
  );
};

export default About;