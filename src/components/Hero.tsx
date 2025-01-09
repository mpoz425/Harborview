import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const scrollToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/compressed/hero.jpg"
          alt="Financial Markets"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="container mx-auto relative px-6 lg:px-20 text-white">
        <div className="max-w-3xl opacity-0 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Prepare for the Future of Capital Markets
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Expert guidance for financial institutions adapting to market evolution. 
            We provide strategic consulting to help you stay ahead in today's dynamic landscape.
          </p>
          <button 
            onClick={scrollToNext}
            className="bg-primary-purple py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;