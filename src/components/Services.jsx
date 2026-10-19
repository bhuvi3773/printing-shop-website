import React from 'react';
import { SERVICES, SHOP_CONTACT_INFO } from '../data/servicesData';

export default function Services({ onSelectService }) {
  const getWhatsAppInquiryUrl = (serviceTitle) => {
    const text = `Hello ${SHOP_CONTACT_INFO.shopName}! I would like to inquire about *${serviceTitle}*. Please share available options, turnaround times, and quotation details.`;
    return `https://wa.me/${SHOP_CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header with Clear Guidance */}
        <div className="section-header">
          <span className="section-tag">Service Catalogue</span>
          <h2 className="section-title">Commercial & Retail Printing Services</h2>
          <p className="section-subtitle">
            Explore our standard printing offerings. Select any service to configure dimensions and options in our instant rate estimator, or inquire directly for bespoke requirements.
          </p>
          <div className="service-guide-pill">
            <span className="guide-icon" aria-hidden="true">💡</span>
            <span>Click <strong>"Configure & View Estimate →"</strong> to calculate demo rates, or <strong>"Ask About This Service →"</strong> for direct shop consultation.</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="card service-card">
              {/* Card Header */}
              <div className="service-card-top">
                <div className="service-icon-wrapper" aria-hidden="true">
                  {service.icon}
                </div>
                <span className="badge category-badge">{service.category}</span>
              </div>

              {/* Realistic Visual Preview for each service */}
              <div className="service-preview-box" aria-hidden="true">
                {service.id === 'visiting-cards' && (
                  <div className="preview-card-mockup">
                    <div className="mini-card-chip"></div>
                    <div className="mini-card-lines">
                      <div className="mini-line w-60 gold"></div>
                      <div className="mini-line w-40"></div>
                    </div>
                    <div className="mini-card-footer">
                      <span>3.5" × 2.0" Standard</span>
                      <span className="badge-micro">350 GSM</span>
                    </div>
                  </div>
                )}

                {service.id === 'flex-banners' && (
                  <div className="preview-banner-mockup">
                    <div className="banner-grommet tl"></div>
                    <div className="banner-grommet tr"></div>
                    <div className="banner-grommet bl"></div>
                    <div className="banner-grommet br"></div>
                    <div className="banner-mockup-body">
                      <span className="banner-label">HEAVY STAR FLEX</span>
                      <span className="banner-sub">Custom Dimensions in Feet • Solvent Inks</span>
                    </div>
                  </div>
                )}

                {service.id === 'flyers-brochures' && (
                  <div className="preview-brochure-mockup">
                    <div className="brochure-panel panel-left">
                      <div className="mini-line w-70"></div>
                      <div className="mini-line w-50"></div>
                    </div>
                    <div className="brochure-crease"></div>
                    <div className="brochure-panel panel-right">
                      <div className="mini-line w-80 gold"></div>
                      <div className="mini-line w-40"></div>
                    </div>
                  </div>
                )}

                {service.id === 'stickers-labels' && (
                  <div className="preview-sticker-mockup">
                    <div className="sticker-disc">
                      <span className="disc-star">✦</span>
                      <span className="disc-text">DIE-CUT VINYL</span>
                    </div>
                    <div className="sticker-peel"></div>
                  </div>
                )}

                {service.id === 'office-stationery' && (
                  <div className="preview-stationery-mockup">
                    <div className="sheet-header">
                      <div className="sheet-crest"></div>
                      <div className="sheet-header-line"></div>
                    </div>
                    <div className="sheet-body-lines">
                      <div className="mini-line w-90"></div>
                      <div className="mini-line w-80"></div>
                      <div className="mini-line w-70"></div>
                    </div>
                  </div>
                )}

                {service.id === 'custom-print' && (
                  <div className="preview-custom-mockup">
                    <div className="custom-frame">
                      <div className="custom-corner"></div>
                      <span className="custom-text">Bespoke Foil & Bind</span>
                      <span className="custom-sub">Tailored to Your Project</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>

              {/* Feature Tags */}
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
                    <span className="spec-chip">Bi-Fold & Tri-Fold</span>
                  </>
                )}
                {service.id === 'stickers-labels' && (
                  <>
                    <span className="spec-chip">Paper & Vinyl Film</span>
                    <span className="spec-chip">Sheet & Die-Cut</span>
                  </>
                )}
                {service.id === 'office-stationery' && (
                  <>
                    <span className="spec-chip">Executive Letterheads</span>
                    <span className="spec-chip">Duplicate Bill Books</span>
                  </>
                )}
                {service.id === 'custom-print' && (
                  <>
                    <span className="spec-chip">Certificates & Invites</span>
                    <span className="spec-chip">Bespoke Orders</span>
                  </>
                )}
              </div>

              {/* Working Action Buttons with Clean Unicode Arrow */}
              <div className="service-card-bottom">
                {service.isCustomQuoteOnly ? (
                  <a
                    href={getWhatsAppInquiryUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm service-action-btn"
                  >
                    Ask About This Service →
                  </a>
                ) : (
                  <a
                    href="#pricing"
                    className="btn btn-secondary btn-sm service-action-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(service.id);
                    }}
                  >
                    Configure & View Estimate →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
