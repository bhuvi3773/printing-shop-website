import React, { useState, useEffect } from 'react';

export default function Navbar({ onSelectPricing }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Identity */}
        <a href="#home" className="brand-logo" onClick={closeMenu}>
          <div className="brand-badge" aria-hidden="true">P</div>
          <div className="brand-text-group">
            <span className="brand-name">PrintCraft</span>
            <span className="brand-sub">Commercial Printing</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Rate Estimator</a></li>
            <li><a href="#gallery">Our Work</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href="#pricing"
            className="btn btn-primary btn-sm nav-cta"
            onClick={() => {
              closeMenu();
              if (onSelectPricing) onSelectPricing();
            }}
          >
            Get a Price
          </a>

          {/* Accessible Mobile Hamburger */}
          <button
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Printing Services</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Rate Estimator</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Our Work</a></li>
          <li><a href="#why-us" onClick={closeMenu}>Why Choose Us</a></li>
          <li><a href="#process" onClick={closeMenu}>How It Works</a></li>
          <li><a href="#contact" onClick={closeMenu}>Shop Contact</a></li>
        </ul>
        <div className="mobile-drawer-footer">
          <a
            href="#pricing"
            className="btn btn-primary btn-block"
            onClick={closeMenu}
          >
            Calculate Price Now
          </a>
        </div>
      </div>
    </header>
  );
}
