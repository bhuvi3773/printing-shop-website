import React from 'react';
import { SERVICES } from '../data/servicesData';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">Comprehensive Printing Services</h2>
          <p className="section-subtitle">
            Engineered for corporate identity, outdoor retail exposure, event marketing, and retail packaging.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="card service-card">
              <div className="service-card-top">
                <div className="service-icon-wrapper" aria-hidden="true">
                  {service.icon}
                </div>
                <span className="badge category-badge">{service.category}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>

              {/* Quick specs pill summary */}
              <div className="service-features">
                {service.id === 'visiting-cards' && (
                  <>
                    <span className="spec-chip">300–400 GSM Boards</span>
                    <span className="spec-chip">Matte / Gloss / Spot UV</span>
                  </>
                )}
                {service.id === 'flex-banners' && (
                  <>
                    <span className="spec-chip">Normal & Star Flex</span>
                    <span className="spec-chip">Custom Dimensions in Ft</span>
                  </>
                )}
                {service.id === 'flyers-brochures' && (
                  <>
                    <span className="spec-chip">A4 & A5 Leaflets</span>
                    <span className="spec-chip">Single / Bi-Fold / Tri-Fold</span>
                  </>
                )}
                {service.id === 'stickers-labels' && (
                  <>
                    <span className="spec-chip">Paper & Vinyl Film</span>
                    <span className="spec-chip">Kiss-Cut & Contour Die</span>
                  </>
                )}
                {service.id === 'office-stationery' && (
                  <>
                    <span className="spec-chip">Watermark Letterheads</span>
                    <span className="spec-chip">Duplicate Invoice Books</span>
                  </>
                )}
                {service.id === 'custom-print' && (
                  <>
                    <span className="spec-chip">Certificates & Invitations</span>
                    <span className="spec-chip">Bespoke Foil & Binding</span>
                  </>
                )}
              </div>

              {/* Action Button */}
              <div className="service-card-bottom">
                <a
                  href="#pricing"
                  className="btn btn-secondary btn-sm service-action-btn"
                  onClick={() => onSelectService(service.id)}
                >
                  {service.isCustomQuoteOnly ? 'Inquire Direct &rarr;' : 'Configure & Price &rarr;'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
