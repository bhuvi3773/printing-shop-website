import React from 'react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: "📐",
      title: "Custom Formats",
      desc: "Support for standard and custom dimensions across visiting cards, outdoor banners, flyers, and stationery (subject to shop confirmation).",
    },
    {
      icon: "💬",
      title: "Direct Counter Enquiries",
      desc: "Connect directly with our local printing team via WhatsApp or shop visits for clear, personalized communication without intermediaries.",
    },
    {
      icon: "⚖️",
      title: "Transparent Estimates",
      desc: "Calculations based on standard rate structures, with clearly marked demonstration estimates and dedicated custom quote options.",
    },
    {
      icon: "📇",
      title: "Product Variety",
      desc: "A wide range of card stocks, banner media, and sticker finishes tailored to your specific commercial or personal project.",
    },
  ];

  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Service Highlights</span>
          <h2 className="section-title">Why Choose Our Shop</h2>
          <p className="section-subtitle">
            Straightforward service highlights and direct communication (all specifications subject to final shop confirmation).
          </p>
        </div>

        <div className="grid-4 why-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="card feature-card">
              <div className="feature-icon-box" aria-hidden="true">{pillar.icon}</div>
              <h3 className="feature-title">{pillar.title}</h3>
              <p className="feature-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
