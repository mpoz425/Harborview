import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Harborview Markets</title>
        <meta name="description" content="Sleek financial advisory services" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
