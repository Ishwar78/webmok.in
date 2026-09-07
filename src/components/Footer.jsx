import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactInfo, setContactInfo] = useState(() => {
    const saved = localStorage.getItem('webmok_contact_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      phonePrimary: '8684031003',
      emailPrimary: 'info@webmok.in',
      address: '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM'
    };
  });

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);

    const updateContactInfo = () => {
      const saved = localStorage.getItem('webmok_contact_info');
      if (saved) {
        try {
          setContactInfo(JSON.parse(saved));
        } catch (e) {}
      }
    };
    window.addEventListener('webmok_contact_updated', updateContactInfo);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('webmok_contact_updated', updateContactInfo);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="wm-footer-root">
      <div className="wm-footer-container">
        <div className="wm-footer-grid">
          {/* Col 1: OUR SERVICES */}
          <div className="wm-footer-col">
            <h4 className="wm-footer-heading">OUR SERVICES</h4>
            <div className="wm-footer-heading-line"></div>
            <ul className="wm-footer-links">
              <li><Link to="/services/seo-services-company">Search Engine Optimization Company</Link></li>
              <li><Link to="/services/ppc-services-company">PPC SERVICES</Link></li>
              <li><Link to="/services/lead-generation-social-media-marketing-services-company">Lead Generation</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/services/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link to="/services/web-designing-development-services-company">Web design & Development</Link></li>
              <li><Link to="/services/computer-training">Computer Training</Link></li>
              <li><Link to="/services/video-editing">Video Editing</Link></li>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link to="/services/facebook-marketing">Facebook Marketing</Link></li>
              <li><Link to="/services/website-design-development-rohtak-delhi">Website Development & Design Services</Link></li>
              <li><Link to="/services/business-development-consulting">Business Development Consulting</Link></li>
              <li><Link to="/services/application-development">Application Development</Link></li>
              <li><Link to="/services/data-science">Data Science</Link></li>
            </ul>
          </div>

          {/* Col 2: ABOUT COMPANY */}
          <div className="wm-footer-col">
            <h4 className="wm-footer-heading">ABOUT COMPANY</h4>
            <div className="wm-footer-heading-line"></div>
            <ul className="wm-footer-links">
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/services/branding">Branding</Link></li>
              <li><Link to="/about-us">About Web Mok Team</Link></li>
              {/* <li><Link to="/admin/login" className="wm-footer-admin-link">Staff & Admin Access</Link></li> */}
            </ul>
          </div>

          {/* Col 3: RESOURCES */}
          <div className="wm-footer-col">
            <h4 className="wm-footer-heading">RESOURCES</h4>
            <div className="wm-footer-heading-line"></div>
            <ul className="wm-footer-links">
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/faq">Frequently Asked Questions (FAQ)</Link></li>
              <li><Link to="/site-map">Site Map</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/offers">Offer & Discount</Link></li>
              <li><Link to="/hire-seo-expert">Hire Seo Expert</Link></li>
              <li><Link to="/payment">Inr Payment Link</Link></li>
              <li><Link to="/payment">Other Payment Options</Link></li>
            </ul>
          </div>

          {/* Col 4: OFFICE ADDRESS */}
          <div className="wm-footer-col">
            <h4 className="wm-footer-heading">OFFICE ADDRESS</h4>
            <div className="wm-footer-heading-line"></div>
            <div className="wm-footer-contact-items">
              <div className="wm-fcontact-item">
                <FaPhoneAlt className="wm-fcontact-icon" />
                <a href={`tel:${contactInfo.phonePrimary}`} className="wm-fcontact-text">{contactInfo.phonePrimary}</a>
              </div>
              <div className="wm-fcontact-item">
                <FaEnvelope className="wm-fcontact-icon" />
                <a href={`mailto:${contactInfo.emailPrimary}`} className="wm-fcontact-text">{contactInfo.emailPrimary}</a>
              </div>
              <div className="wm-fcontact-item wm-fcontact-address">
                <FaMapMarkerAlt className="wm-fcontact-icon" />
                <span className="wm-fcontact-text">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            <div className="wm-footer-hours-box">
              <span className="wm-hours-title">Working Hours</span>
              <p>{contactInfo.workingHours || 'Mon - Sat: 9:30 AM - 7:00 PM'}</p>
              <p>Sunday: Technical Support On Call</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="wm-footer-bottom">
        <div className="wm-bottom-container">
          <p className="wm-copyright-text">
            © Copyright @2021 Webmok Pvt. Ltd.. All Rights Reserved
          </p>

          <div className="wm-social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918684031003?text=Hi%20Web%20Mok,%20I%20am%20interested%20in%20your%20services"
        className="wm-floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          className="wm-scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
