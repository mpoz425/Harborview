// src/components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const handleContactClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const email = 'info@harborviewmarkets.com';
  const subject = 'Inquiry about Market Advisory Services';
  const body = 'I would like to learn more about your services.';
  
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-slate-50/50 shadow-sm">
      <div className="px-4">
        <div className="flex h-24 md:h-40 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 md:space-x-4 pl-2 md:pl-4 group">
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/compressed/logo.png"
                  alt="Harborview Logo"
                  width={200}
                  height={200}
                  className="h-16 md:h-32 w-auto"
                />
              </div>
              <span className="text-lg md:text-2xl font-bold text-gray-900 transform transition-all duration-300 group-hover:scale-105 inline-block relative after:content-[''] after:absolute after:w-0 after:h-1.5 after:left-0 after:-bottom-1 after:bg-primary-purple after:transition-all after:duration-300 group-hover:after:w-full">
                <span className="hidden sm:inline">Navigating Financial Markets</span>
                <span className="sm:hidden">Harborview</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-10 mr-8">
              <a 
                href="#about" 
                className="text-xl transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary-purple after:transition-all after:duration-300 hover:after:w-full text-gray-900 hover:text-primary-purple"
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-xl transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary-purple after:transition-all after:duration-300 hover:after:w-full text-gray-900 hover:text-primary-purple"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="text-xl transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary-purple after:transition-all after:duration-300 hover:after:w-full text-gray-900 hover:text-primary-purple"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden fixed inset-x-0 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="pb-4 space-y-2 shadow-lg">
            <a 
              href="#about" 
              className="block text-lg text-gray-900 hover:text-primary-purple px-6 py-3 active:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block text-lg text-gray-900 hover:text-primary-purple px-6 py-3 active:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                handleContactClick(e);
                setIsMenuOpen(false);
              }}
              className="block text-lg text-gray-900 hover:text-primary-purple px-6 py-3 active:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
