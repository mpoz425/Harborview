import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const AboutFlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
                    src="/images/compressed/about.jpg"
                    alt="About Us"
                    fill
                    className="object-cover"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text section - Improved mobile spacing */}
              <div className="w-full md:w-[60%] bg-white p-6 md:p-12 rounded-lg shadow-xl z-10 mt-4 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-4">About Us</h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg">
                  Harborview Markets has over 40 years of experience in financial advisory services. 
                  We help clients navigate complex markets with confidence and achieve lasting success.
                </p>
                <button 
                  onClick={() => setIsFlipped(true)}
                  className="w-full md:w-auto bg-primary-purple text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Learn More
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
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Text content */}
                <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold text-primary-purple mb-6">WHO WE ARE</h2>
                  <div className="space-y-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Murray Pozmanter is a business leader and change agent in financial services 
                      with over 30 years' leadership experience across leading investment banks, 
                      market utilities, and fintech. He is valued for his ability to achieve 
                      consensus on business strategy and direction, balancing corporate growth, 
                      regulatory compliance, industry positioning, and client engagement while 
                      driving clarity, efficiency and resilience across technology, architecture, 
                      people and processes.
                    </p>
                    
                    <div className="h-4" />
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      He has sat on numerous Boards and committees, including spending 14 years 
                      on the NY Fed's Treasury Markets Practices Group and membership of CFTC's 
                      Global Markets Advisory Group. At DTCC he became Executive Chairman of 
                      New York Portfolio Clearing and a board member of Euroclear Global Collateral.
                    </p>
                  </div>
                </div>

                {/* Image section */}
                <div className="md:w-1/3 flex flex-col items-center pt-4 space-y-6">
                  <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-xl border-4 border-primary-purple">
                    <Image
                      src="/images/murray.jpg"
                      alt="Murray Pozmanter"
                      fill
                      className="object-cover"
                      quality={95}
                    />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/murraypozmanter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <button 
                onClick={() => setIsFlipped(false)}
                className="mt-12 bg-primary-purple text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300"
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

export default AboutFlipCard; 