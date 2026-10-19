import React from 'react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Select Service & Options",
      desc: "Browse our catalogue of visiting cards, flex banners, marketing brochures, and stickers to find the right format for your project.",
      detail: "Choose dimensions, paper weight, and single or double-sided printing.",
    },
    {
      num: "02",
      title: "Customize & Calculate Estimate",
      desc: "Enter your exact volume and required finishes to view an instant estimate based on our standard workshop rate cards.",
      detail: "Bespoke specifications can easily route to a tailored quote request.",
    },
    {
      num: "03",
      title: "Discuss & Confirm with Our Shop",
      desc: "Connect directly with our workshop via WhatsApp or visit our physical counter to review physical proofs and approve production.",
      detail: "Orders are verified and finalized directly with our print specialists.",
    },
  ];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Shop Process</span>
          <h2 className="section-title">How Our Shop Works</h2>
          <p className="section-subtitle">
            A transparent, three-step journey from initial rate calculation to in-person order confirmation.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-card card">
              <div className="step-badge">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              <div className="step-detail-box">
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="process-note-banner">
          <span className="note-icon" aria-hidden="true">📍</span>
          <span>
            <strong>Direct Counter Service:</strong> Customers visit our physical shop to verify color proofs and pick up their finalized prints once production is complete.
          </span>
        </div>
      </div>
    </section>
  );
}
