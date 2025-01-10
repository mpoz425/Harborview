import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[500px] md:h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/compressed/hero.jpg"
          alt="Financial Markets"
          fill
          className="object-cover"
          quality={isMobile ? 80 : 90}
          priority={true}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content - Improved mobile spacing and text sizes */}
      <div className="container mx-auto relative px-4 md:px-6 lg:px-20 text-white py-16 md:py-0">
        <div className="max-w-3xl opacity-0 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Prepare for the Future of Capital Markets
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
            Expert guidance for financial institutions adapting to market evolution. 
            We provide strategic consulting to help you stay ahead in today's dynamic landscape.
          </p>
          <button 
            onClick={scrollToNext}
            className="w-full md:w-auto bg-primary-purple py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
