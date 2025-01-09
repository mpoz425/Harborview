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
    <div>
      <Head>
        <title>Harborview Markets</title>
        <meta name="description" content="Sleek financial advisory services" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
