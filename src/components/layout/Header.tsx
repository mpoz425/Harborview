// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isInsightsOpen, setInsightsOpen] = useState(false);

  return (
    <header className="bg-harbor-purple text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Harborview Market</div>
        <div className="flex items-center">
          <Link href="/" passHref><span className="px-4 hover:underline cursor-pointer">Home</span></Link>
          <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <span className="px-4 hover:underline cursor-pointer">Services</span>
            {isServicesOpen && (
              <div className="absolute mt-12 bg-white text-harbor-purple shadow-lg p-4 rounded-lg">
                <Link href="/services/consulting" passHref><span className="block px-4 py-2 hover:bg-harbor-gray">Consulting</span></Link>
                <Link href="/services/management" passHref><span className="block px-4 py-2 hover:bg-harbor-gray">Asset Management</span></Link>
              </div>
            )}
          </div>
          <Link href="/about" passHref><span className="px-4 hover:underline">About</span></Link>
          <div onMouseEnter={() => setInsightsOpen(true)} onMouseLeave={() => setInsightsOpen(false)}>
            <span className="px-4 hover:underline cursor-pointer">Insights</span>
            {isInsightsOpen && (
              <div className="absolute mt-12 bg-white text-harbor-purple shadow-lg p-4 rounded-lg">
                <Link href="/insights/blogs" passHref><span className="block px-4 py-2 hover:bg-harbor-gray">Blogs</span></Link>
                <Link href="/insights/case-studies" passHref><span className="block px-4 py-2 hover:bg-harbor-gray">Case Studies</span></Link>
              </div>
            )}
          </div>
          <Link href="/contact" passHref><span className="px-4 hover:underline">Contact</span></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
