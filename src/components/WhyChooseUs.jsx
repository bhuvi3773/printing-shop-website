import React from 'react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: "💎",
      title: "Tested Substrates & Inks",
      desc: "We use genuine branded boards (300–400 GSM) and UV-resistant outdoor flex media for color stability and durability.",
    },
    {
      icon: "🔍",
      title: "Over-the-Counter Proofing",
      desc: "Examine physical cardstock samples, lamination swatches, and test prints at our counter before committing to large volumes.",
    },
    {
      icon: "⚖️",
      title: "Transparent Workshop Rates",
      desc: "Our rate calculations are direct and clear. Minimum volume requirements and finishing options are explained upfront.",
    },
    {
      icon: "⚡",
      title: "Direct In-House Production",
      desc: "Equipped with commercial digital presses, large-format flex plotters, and precision cutting machines under one roof.",
    },
  ];

  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Shop Standards</span>
          <h2 className="section-title">Why Customers Trust Our Workshop</h2>
          <p className="section-subtitle">
            Reliable local printing with dedicated craftsmanship and personalized counter consultation.
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
