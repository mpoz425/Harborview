import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getImageQuality, getImageSize } from '../utils/imageLoader';

const ServicesFlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-[600px]">
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-full"
          >
            {/* Front content */}
            <div className="flex flex-col md:flex-row items-center">
              {/* Image section - Adjusted for better mobile display */}
              <div className="w-full md:w-1/2 md:-mr-32 mt-4 md:mt-[-20px] z-0">
                <div className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/compressed/services.jpg"
                    alt="Our Services"
                    fill
                    className="object-cover"
                    quality={isMobile ? 75 : 90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text section - Improved mobile spacing */}
              <div className="w-full md:w-[60%] bg-white p-6 md:p-12 rounded-lg shadow-xl z-10 mt-4 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-4">Services</h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg">
                  We bring our extensive experience in responding to the dynamic nature of 
                  financial markets directly to you.
                </p>
                <button 
                  onClick={() => setIsFlipped(true)}
                  className="w-full md:w-auto bg-primary-purple text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-full"
          >
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-purple mb-4 md:mb-6">Our Services</h2>
              
              <div className="space-y-6 md:space-y-8">
                {/* Service sections - Improved mobile layout */}
                {/* First section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-[140px] md:w-[180px] h-[140px] md:h-[180px] rounded-full overflow-hidden shadow-xl border-4 border-primary-purple">
                      <Image
                        src="/images/compressed/navigate.jpg"
                        alt="Market Structure Changes"
                        fill
                        className="object-cover"
                        quality={isMobile ? 70 : 85}
                        sizes="(max-width: 768px) 140px, 180px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-2 md:-ml-4">
                    <h3 className="text-xl font-semibold text-primary-purple">
                      Navigating Market Structure Changes
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Guiding your business through radical changes in market behavior, innovations 
                      in technology and a substantial increase in the range and complexity of 
                      regulatory requirements.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Changes in the structure and functioning of the Treasury market in particular, 
                      will require firms to reassess how they interact with clients and providers 
                      of post trade services.
                    </p>
                  </div>
                </div>

                {/* Second section */}
                <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-2 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-[140px] md:w-[180px] h-[140px] md:h-[180px] rounded-full overflow-hidden shadow-xl border-4 border-primary-purple">
                      <Image
                        src="/images/compressed/operation.jpg"
                        alt="Operational Efficiencies"
                        fill
                        className="object-cover"
                        quality={95}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-2 md:-mr-4">
                    <h3 className="text-xl font-semibold text-primary-purple">
                      Driving Operational Efficiencies
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      We can work with you to create greater operational performance and resilience, 
                      enable modernization and break away from legacy systems that create roadblocks 
                      to efficiency. Through this we keep one eye on increasingly sophisticated 
                      challenges of cybersecurity, that are the principal concern of many market 
                      participants.
                    </p>
                  </div>
                </div>

                {/* Third section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-[140px] md:w-[180px] h-[140px] md:h-[180px] rounded-full overflow-hidden shadow-xl border-4 border-primary-purple">
                      <Image
                        src="/images/compressed/strategy.jpg"
                        alt="Strategic Product Innovation"
                        fill
                        className="object-cover"
                        quality={95}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-2 md:-ml-4">
                    <h3 className="text-xl font-semibold text-primary-purple">
                      Strategic Product Innovation
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      We have been instrumental in the development, launch and optimization of 
                      electronic platforms and products that have increased capital efficiency, 
                      boosted liquidity and reduced the costs of post trade processing across 
                      asset classes. This encompasses digitization and the shift towards more 
                      real time processing in the capital markets.
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsFlipped(false)}
                className="w-full md:w-auto mt-6 md:mt-8 bg-primary-purple text-white px-4 md:px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Back to Overview
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesFlipCard; 