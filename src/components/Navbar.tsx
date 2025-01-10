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
    <nav className="fixed left-0 right-0 top-0 z-50 bg-slate-50/50 backdrop-blur-sm">
      <div className="px-4">
        <div className="flex h-16 md:h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 pl-2">
              <div className="relative h-12 w-12 md:h-16 md:w-16">
                <Image
                  src="/images/compressed/logo.png"
                  alt="Harborview Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">
                <span className="hidden sm:inline">Harborview</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" onClick={handleContactClick} className="nav-link">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`
            md:hidden fixed inset-x-0 top-16 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <div className="py-2">
            <a 
              href="#about" 
              className="block px-4 py-3 text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block px-4 py-3 text-gray-900 hover:bg-gray-100"
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
              className="block px-4 py-3 text-gray-900 hover:bg-gray-100"
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
