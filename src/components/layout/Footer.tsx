// src/components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-gray/5 py-8 md:py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold text-primary-purple mb-2">Contact</h3>
            <p className="text-sm md:text-base text-gray-600">Email: info@harborviewmarkets.com</p>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm md:text-base text-gray-600">
              © {new Date().getFullYear()} Harborview Markets. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
