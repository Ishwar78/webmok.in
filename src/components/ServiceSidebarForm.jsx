import React, { useState } from 'react';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
  FaWhatsapp,
  FaClock,
  FaAward
} from 'react-icons/fa';
import './ServiceSidebarForm.css';

const ServiceSidebarForm = ({ serviceName = 'SEO & Digital Marketing', source = 'Service Page Form' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceName,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:5005/api/inquiries/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          service: formData.service || serviceName,
          source: source,
          notes: formData.message.trim() || `Inquiry submitted from ${source}.`
        })
      });

      if (!response.ok) {
        console.warn('Backend responded with status:', response.status);
      }
    } catch (err) {
      console.warn('Network or backend notice:', err.message);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: serviceName,
      message: ''
    });
  };

  return (
    <aside className="wm-service-sidebar-card">
      <div className="wm-ssb-header">
        <span className="wm-ssb-pill">⚡ Free Consultation & Quote</span>
        <h3 className="wm-ssb-title">Speak to our Specialists</h3>
        <p className="wm-ssb-subtitle">
          Fill in your details below for a customized audit, strategy plan & pricing quotation within 2 hours.
        </p>
      </div>

      {isSubmitted ? (
        <div className="wm-ssb-success">
          <FaCheckCircle className="wm-ssb-success-icon" />
          <h4>Enquiry Submitted!</h4>
          <p>
            Thank you, <strong>{formData.name}</strong>. Our senior consultant for <em>{formData.service}</em> will connect with you at <strong>{formData.phone}</strong> shortly.
          </p>
          <div className="wm-ssb-success-meta">
            <span><FaClock /> Response time: ~28 minutes</span>
          </div>
          <button className="wm-ssb-reset-btn" onClick={handleReset}>
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="wm-ssb-form" onSubmit={handleSubmit}>
          {errorMsg && <div className="wm-ssb-error">{errorMsg}</div>}

          <div className="wm-ssb-group">
            <label><FaUser className="wm-ssb-icon" /> Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="wm-ssb-group">
            <label><FaPhoneAlt className="wm-ssb-icon" /> Mobile / WhatsApp *</label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="wm-ssb-group">
            <label><FaEnvelope className="wm-ssb-icon" /> Business Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. rahul@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="wm-ssb-group">
            <label><FaCommentDots className="wm-ssb-icon" /> Project Goals / Message</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Tell us about your website, target audience or specific growth goals..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="wm-ssb-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Sending Enquiry...</span>
            ) : (
              <>
                <FaPaperPlane /> Request Free Proposal
              </>
            )}
          </button>
        </form>
      )}

      {/* Trust Badges */}
      <div className="wm-ssb-trust">
        <div className="wm-ssb-trust-item">
          <FaAward className="wm-ssb-ticon" />
          <span>100% Guaranteed Ranking & Transparency</span>
        </div>
        <div className="wm-ssb-trust-item">
          <FaShieldAlt className="wm-ssb-ticon" />
          <span>NDA Protected & 100% Privacy Guaranteed</span>
        </div>
      </div>

      {/* Quick Direct Contacts */}
      <div className="wm-ssb-direct-connect">
        <span className="wm-ssb-dc-title">Need Immediate Assistance?</span>
        <div className="wm-ssb-dc-buttons">
          <a href="tel:8684031003" className="wm-ssb-dc-btn wm-dc-phone">
            <FaPhoneAlt /> Call 8684031003
          </a>
          <a
            href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noreferrer"
            className="wm-ssb-dc-btn wm-dc-whatsapp"
          >
            <FaWhatsapp /> WhatsApp Chat
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebarForm;
