import React from 'react';

export default function Hero({ onExploreServices, onGetPrice }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headline & Action */}
        <div className="hero-content">
          <div className="hero-pill">
            <span className="pill-dot"></span>
            <span>Commercial & Retail Printing Workshop</span>
          </div>

          <h1 className="hero-title">
            Precision Printing Crafted for <span className="highlight-gold">Lasting Impact</span>
          </h1>

          <p className="hero-description">
            From luxury foil-stamped visiting cards and high-tensile flex banners to crisp marketing brochures and product packaging labels. Direct shop quality with verified rate calculations.
          </p>

          <div className="hero-actions">
            <a
              href="#pricing"
              className="btn btn-primary"
              onClick={onGetPrice}
            >
              Get a Price
            </a>
            <a
              href="#services"
              className="btn btn-secondary"
              onClick={onExploreServices}
            >
              Explore Services
            </a>
          </div>

          {/* Trust Points */}
          <div className="hero-specs-strip">
            <div className="spec-item">
              <span className="spec-val">400+ GSM</span>
              <span className="spec-lbl">Luxury Boards</span>
            </div>
            <div className="spec-divider"></div>
            <div className="spec-item">
              <span className="spec-val">Solvent & UV</span>
              <span className="spec-lbl">Vibrant Inks</span>
            </div>
            <div className="spec-divider"></div>
            <div className="spec-item">
              <span className="spec-val">Direct Shop</span>
              <span className="spec-lbl">Over-the-Counter</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition of Printed Goods */}
        <div className="hero-visual-pane">
          <div className="hero-composition-frame">
            {/* Visual Sample 1: Visiting Card Composition */}
            <div className="sample-card-stack">
              <div className="sample-card-back"></div>
              <div className="sample-card-front">
                <div className="sample-card-chip"></div>
                <div className="sample-card-lines">
                  <div className="line title-line"></div>
                  <div className="line subtitle-line"></div>
                </div>
                <div className="sample-card-footer">
                  <span className="foil-tag">Hot Stamped Gold</span>
                  <span className="stock-tag">350 GSM Velvet</span>
                </div>
              </div>
            </div>

            {/* Visual Sample 2: Flex Banner Preview */}
            <div className="sample-flex-strip">
              <div className="flex-grommet top-left"></div>
              <div className="flex-grommet top-right"></div>
              <div className="flex-strip-content">
                <span className="flex-badge">Outdoor Heavy Banner</span>
                <span className="flex-dim">Star Flex • 320 GSM • Weatherproof</span>
              </div>
              <div className="flex-grommet bottom-left"></div>
              <div className="flex-grommet bottom-right"></div>
            </div>

            {/* Visual Sample 3: Circular Sticker / Seal */}
            <div className="sample-sticker-seal">
              <div className="sticker-inner">
                <span className="sticker-icon">✦</span>
                <span className="sticker-text">Waterproof Vinyl Seal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
