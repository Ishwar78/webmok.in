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
  FaAward,
  FaSpinner
} from 'react-icons/fa';
import './HeroLeadForm.css';

const HeroLeadForm = ({
  pageName = 'Digital Marketing & Web Solutions',
  source = 'Hero Section Lead Form',
  badge = '⚡ Instant Free Consultation & Quote',
  title = 'Speak with our Specialists',
  subtitle = 'Get a customized strategy audit & exact pricing proposal within 28 minutes.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: pageName,
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
      setErrorMsg('Please enter your full name and phone number.');
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
          service: formData.service || pageName,
          source: source,
          notes: formData.message.trim() || ('Inquiry from ' + source + ' for ' + pageName + '.')
        })
      });

      if (!response.ok) {
        console.warn('Backend server returned status:', response.status);
      }
    } catch (err) {
      console.warn('Network notice:', err.message);
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
      service: pageName,
      message: ''
    });
  };

  return (
    <aside className="wm-hlf-card">
      <div className="wm-hlf-header">
        <span className="wm-hlf-pill">{badge}</span>
        <h3 className="wm-hlf-title">{title}</h3>
        {/* <p className="wm-hlf-subtitle">{subtitle}</p> */}
      </div>

      {isSubmitted ? (
        <div className="wm-hlf-success">
          <FaCheckCircle className="wm-hlf-success-icon" />
          <h4>Enquiry Submitted Successfully!</h4>
          <p>
            Thank you, <strong>{formData.name}</strong>. Our senior growth architect for <em>{pageName}</em> will call or message you on <strong>{formData.phone}</strong> shortly.
          </p>
          <div className="wm-hlf-success-meta">
            <span><FaClock /> Average response: ~28 minutes</span>
          </div>
          <button className="wm-hlf-reset-btn" onClick={handleReset} type="button">
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="wm-hlf-form" onSubmit={handleSubmit}>
          {errorMsg && <div className="wm-hlf-error">{errorMsg}</div>}

          <div className="wm-hlf-group">
            <label><FaUser className="wm-hlf-icon" /> Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="wm-hlf-row-two">
            <div className="wm-hlf-group">
              <label><FaPhoneAlt className="wm-hlf-icon" /> Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="wm-hlf-group">
              <label><FaEnvelope className="wm-hlf-icon" /> Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="wm-hlf-group">
            <label><FaCommentDots className="wm-hlf-icon" /> Project Details / Goals</label>
            <textarea
              name="message"
              rows="2"
              placeholder="Target keywords, business website, specific goals..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="wm-hlf-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <><FaSpinner className="wm-hlf-spinner" /> Submitting Request...</>
            ) : (
              <><FaPaperPlane /> Request Free Proposal &amp; Pricing &rarr;</>
            )}
          </button>
        </form>
      )}

      {/* Trust & Privacy Badges */}
      {/* <div className="wm-hlf-trust">
        <div className="wm-hlf-trust-item">
          <FaAward className="wm-hlf-ticon" />
          <span>100% Earned Result Guarantee</span>
        </div>
        <div className="wm-hlf-trust-item">
          <FaShieldAlt className="wm-hlf-ticon" />
          <span>Strict Non-Disclosure &amp; Privacy</span>
        </div>
      </div> */}

      {/* Quick Direct Connect Hotlines */}
      <div className="wm-hlf-direct">
        <span className="wm-hlf-direct-label">Need Immediate Answer?</span>
        <div className="wm-hlf-direct-btns">
          <a href="tel:8684031003" className="wm-hlf-dbtn wm-hlf-dbtn-phone">
            <FaPhoneAlt /> Call Now: 8684031003
          </a>
          <a
            href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noreferrer"
            className="wm-hlf-dbtn wm-hlf-dbtn-wa"
          >
            <FaWhatsapp /> WhatsApp Chat
          </a>
        </div>
      </div>
    </aside>
  );
};

export default HeroLeadForm;
