import React from 'react';

const CallToAction = () => {
  const handleContactClick = () => {
    const email = 'info@harborviewmarkets.com'; // Replace with your actual email
    const subject = 'Inquiry about Market Advisory Services';
    const body = 'I would like to learn more about your services.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-medium-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-6">
            Ready to Transform Your Market Operations?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Let's discuss how our expertise can help your organization navigate market changes 
            and drive operational excellence.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-primary-purple text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
