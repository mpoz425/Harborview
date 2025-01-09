// src/pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global Tailwind CSS styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* The Component prop renders the active page, 
      and the pageProps are passed to it */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
