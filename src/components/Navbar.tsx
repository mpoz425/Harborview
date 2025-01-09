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
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-slate-50/50 shadow-sm">
      <div className="px-4">
        <div className="flex h-40 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-4 pl-4 group">
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/compressed/logo.png"
                  alt="Harborview Logo"
                  width={200}
                  height={200}
                  className="h-32 w-auto"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 transform transition-all duration-300 group-hover:scale-105 inline-block relative after:content-[''] after:absolute after:w-0 after:h-1.5 after:left-0 after:-bottom-1 after:bg-primary-purple after:transition-all after:duration-300 group-hover:after:w-full">
                Navigating Financial Markets
              </span>
            </Link>
          </div>

          {/* Push the navigation links to the right */}
          <div className="ml-auto flex items-center">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-10 mr-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
