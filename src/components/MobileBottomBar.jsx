import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPhoneAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './MobileBottomBar.css';

const MobileBottomBar = ({ onOpenCallMe, onOpenEnquiry }) => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="wm-mobile-bottom-bar" aria-label="Mobile Quick Action Navigation">
      {/* 1. Home Button */}
      <Link
        to="/"
        className={`wm-mbot-item ${location.pathname === '/' ? 'active' : ''}`}
        onClick={handleHomeClick}
        aria-label="Home"
        title="Home"
      >
        <FaHome className="wm-mbot-icon" />
      </Link>

      {/* 2. Call Now Button */}
      <a
        href="tel:8684031003"
        className="wm-mbot-item"
        aria-label="Call Now"
        title="Call Now"
      >
        <FaPhoneAlt className="wm-mbot-icon" />
      </a>

      {/* 3. WhatsApp Button */}
      <a
        href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="wm-mbot-item"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp className="wm-mbot-icon" />
      </a>

      {/* 4. Inquiry Button */}
      <button
        type="button"
        className="wm-mbot-item wm-mbot-btn"
        onClick={onOpenEnquiry}
        aria-label="Inquiry Now"
        title="Inquiry Now"
      >
        <FaPaperPlane className="wm-mbot-icon" />
      </button>
    </nav>
  );
};

export default MobileBottomBar;
