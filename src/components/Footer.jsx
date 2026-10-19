import React from 'react';
import { SHOP_CONTACT_INFO, SERVICES } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <a href="#home" className="brand-logo footer-logo">
              <span className="brand-badge">P</span>
              <span className="brand-text">{SHOP_CONTACT_INFO.shopName}</span>
            </a>
            <p className="footer-desc">
              Your dependable neighborhood printing facility. Crafting crisp visiting cards, high-grade flex hoardings, brochures, and commercial labels.
            </p>
            <div className="footer-badge-strip">
              <span className="footer-tag">Direct Counter Pick-Up</span>
              <span className="footer-tag">Solvent & UV Print</span>
            </div>
          </div>

          {/* Service Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Printing Services</h4>
            <ul className="footer-links-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Page Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services Catalogue</a></li>
              <li><a href="#pricing">Rate Estimator</a></li>
              <li><a href="#gallery">Our Work & Finishes</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#contact">Contact & Location</a></li>
            </ul>
          </div>

          {/* Workshop Contact Summary */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Shop Details</h4>
            <p className="footer-contact-item">
              <strong>Address:</strong> {SHOP_CONTACT_INFO.addressDisplay}
            </p>
            <p className="footer-contact-item">
              <strong>Hours:</strong> {SHOP_CONTACT_INFO.hoursDisplay}
            </p>
            <p className="footer-contact-item">
              <strong>Direct WhatsApp:</strong> {SHOP_CONTACT_INFO.phoneDisplay}
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {SHOP_CONTACT_INFO.shopName}. All rights reserved.
          </p>
          <p className="footer-sub-disclaimer">
            All prices shown on this website are illustrative estimates. Final pricing, stock validation, and print orders are confirmed directly with our workshop team.
          </p>
        </div>
      </div>
    </footer>
  );
}
