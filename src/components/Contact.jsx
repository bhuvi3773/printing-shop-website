import React, { useState } from 'react';
import { SHOP_CONTACT_INFO } from '../data/servicesData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Visiting Cards',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Build WhatsApp message for direct consultation
    const msg = `Hello ${SHOP_CONTACT_INFO.shopName}! My name is ${formData.name.trim()} (${formData.phone.trim()}). I am inquiring about *${formData.service}*:\n\n${formData.message.trim() || 'Please let me know current availability and rates.'}`;
    const url = `https://wa.me/${SHOP_CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">Visit Our Shop or Enquire Direct</h2>
          <p className="section-subtitle">
            Have questions about paper weights, large flex dimensions, or volume orders? Connect with our team.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Workshop Details */}
          <div className="contact-info-panel card">
            <h3 className="panel-title">Workshop Information</h3>
            <p className="panel-subtitle">
              We welcome in-person counter consultations and physical proof inspections.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-row">
                <div className="detail-icon" aria-hidden="true">📍</div>
                <div className="detail-text">
                  <strong>Shop Address (Placeholder)</strong>
                  <p>{SHOP_CONTACT_INFO.addressDisplay}</p>
                  <small className="placeholder-tag">Owner will confirm exact physical location</small>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon" aria-hidden="true">💬</div>
                <div className="detail-text">
                  <strong>Direct WhatsApp & Phone</strong>
                  <p>{SHOP_CONTACT_INFO.phoneDisplay}</p>
                  <a
                    href={`https://wa.me/${SHOP_CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-link"
                  >
                    Open WhatsApp Chat →
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon" aria-hidden="true">🕒</div>
                <div className="detail-text">
                  <strong>Operating Hours</strong>
                  <p>{SHOP_CONTACT_INFO.hoursDisplay}</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon" aria-hidden="true">✉️</div>
                <div className="detail-text">
                  <strong>Email Inquiries</strong>
                  <p>{SHOP_CONTACT_INFO.emailDisplay}</p>
                </div>
              </div>
            </div>

            <div className="shop-counter-box">
              <strong>Walk-in Counter Service:</strong> Bring your design files on a USB drive or email them in advance for immediate resolution and paper checks.
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="contact-form-panel card">
            <h3 className="panel-title">Quick Enquiry Message</h3>
            <p className="panel-subtitle">
              Fill in your details below to open a pre-formatted consultation chat directly with our shop.
            </p>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="control-group">
                <label htmlFor="customer-name">Your Full Name *</label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="control-group">
                <label htmlFor="customer-phone">Phone / WhatsApp Number *</label>
                <input
                  id="customer-phone"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 00000"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="control-group">
                <label htmlFor="inquiry-service">Product of Interest</label>
                <select
                  id="inquiry-service"
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Visiting Cards">Visiting Cards</option>
                  <option value="Flex Banners & Signboards">Flex Banners & Signboards</option>
                  <option value="Flyers & Brochures">Flyers & Brochures</option>
                  <option value="Stickers & Product Labels">Stickers & Product Labels</option>
                  <option value="Office Stationery">Office Stationery</option>
                  <option value="Custom Bespoke Order">Custom Bespoke Order</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="inquiry-message">Requirements & File Notes</label>
                <textarea
                  id="inquiry-message"
                  rows="3"
                  placeholder="Tell us about your quantity, size, or design readiness..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Start WhatsApp Consultation
              </button>

              <div className="form-disclaimer">
                <small>
                  ⚠️ <strong>Notice:</strong> This form opens a WhatsApp message directly to our workshop. It does not process payments or automatically confirm orders. All specifications and files are verified before printing begins.
                </small>
              </div>

              {formSubmitted && (
                <div className="form-success-banner" role="status">
                  ✓ WhatsApp chat opened. Please tap "Send" in WhatsApp to dispatch your message. (Note: No enquiry data is stored on this website).
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
