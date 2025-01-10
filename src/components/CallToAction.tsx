import React from 'react';

const CallToAction = () => {
  const handleContactClick = () => {
    const email = 'info@harborviewmarkets.com';
    const subject = 'Inquiry about Market Advisory Services';
    const body = 'I would like to learn more about your services.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-medium-gray py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-purple mb-4 md:mb-6 leading-tight">
            Ready to Transform Your Market Operations?
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 px-2 md:px-0">
            Let's discuss how our expertise can help your organization navigate market changes 
            and drive operational excellence.
          </p>
          <button 
            onClick={handleContactClick}
            className="w-full md:w-auto bg-primary-purple text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
