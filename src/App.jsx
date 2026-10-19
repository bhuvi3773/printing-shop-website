import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingCalculator from './components/PricingCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedServiceId, setSelectedServiceId] = useState('visiting-cards');

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPricing = () => {
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      {/* 1. Responsive Navigation */}
      <Navbar onSelectPricing={handleScrollToPricing} />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={handleScrollToServices}
          onGetPrice={handleScrollToPricing}
        />

        {/* 3. Services Catalogue */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Interactive Pricing Estimator */}
        <PricingCalculator
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Work Gallery */}
        <Gallery />

        {/* 7. Three-Step Enquiry Process */}
        <Process />

        {/* 8. Contact & Shop Counter */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
