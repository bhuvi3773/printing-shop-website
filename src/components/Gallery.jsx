import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Visiting Cards', 'Flex Banners', 'Stickers & Labels', 'Flyers & Brochures', 'Stationery'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Portfolio & Craft</span>
          <h2 className="section-title">Recent Print Work & Finishes</h2>
          <p className="section-subtitle">
            Explore physical samples highlighting our material grades, lamination textures, and edge cuts.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Gallery Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid-3 gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="card gallery-card">
              {/* Visual Preview Swatch Frame */}
              <div className="gallery-swatch" style={{ background: item.bgPattern }}>
                <div className="swatch-overlay">
                  <div className="swatch-chip" style={{ backgroundColor: item.accentColor }}></div>
                  <span className="swatch-category">{item.category}</span>
                </div>
                <div className="swatch-art">
                  <div className="swatch-rule"></div>
                  <span className="swatch-size">{item.dimensions}</span>
                </div>
              </div>

              {/* Item Info */}
              <div className="gallery-info">
                <h3 className="gallery-title">{item.title}</h3>
                <div className="gallery-meta">
                  <div className="meta-row">
                    <span className="meta-label">Substrate:</span>
                    <span className="meta-val">{item.substrate}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Finishing:</span>
                    <span className="meta-val">{item.finish}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer-note">
          <p>
            ℹ️ Physical paper samples, lamination finishes, and banner swatches are available for inspection at our shop counter.
          </p>
        </div>
      </div>
    </section>
  );
}
