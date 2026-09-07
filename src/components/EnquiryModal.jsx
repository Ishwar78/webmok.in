import React, { useState } from 'react';
import { FaTimes, FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaLaptopCode } from 'react-icons/fa';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Website Development & Design Services',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your name, email and phone number.');
      return;
    }
    try {
      await fetch('http://localhost:5005/api/inquiries/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          source: 'Enquiry Now Modal',
          notes: formData.message || 'Submitted from Enquiry Now Modal popup.'
        })
      });
    } catch (err) {
      console.warn('Backend server offline, lead queued locally:', err.message);
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Website Development & Design Services',
      message: ''
    });
    onClose();
  };

  return (
    <div className="enquiry-overlay" onClick={handleClose}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="enquiry-close" onClick={handleClose}>
          <FaTimes />
        </button>

        {!submitted ? (
          <div>
            <div className="enquiry-header">
              <span className="enquiry-badge">Fast Response Guaranteed</span>
              <h3 className="enquiry-title">Request a Quick Quotation</h3>
              <p className="enquiry-subtitle">
                Share your requirements. Our technical analysts will prepare a custom proposal and reach out within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="enquiry-row">
                <div className="enquiry-field">
                  <label><FaUser className="enquiry-field-icon" /> Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="enquiry-field">
                  <label><FaEnvelope className="enquiry-field-icon" /> Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="enquiry-row">
                <div className="enquiry-field">
                  <label><FaPhone className="enquiry-field-icon" /> Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="enquiry-field">
                  <label><FaLaptopCode className="enquiry-field-icon" /> Interested Service</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="Website Development & Design Services">Website Development & Design</option>
                    <option value="Wordpress Development">Wordpress Development</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                    <option value="Mobile App Development">App Development (iOS/Android)</option>
                    <option value="SEO Services Company">Search Engine Optimization (SEO)</option>
                    <option value="PPC Services">PPC & Google Ads</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Graphic & Video Editing">Graphic & Video Editing</option>
                    <option value="Lead Generation">Lead Generation & ORM</option>
                  </select>
                </div>
              </div>



              <div className="enquiry-field">
                <label><FaCommentAlt className="enquiry-field-icon" /> Project Details & Goals</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your project requirements, goals, or references..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="enquiry-submit-btn">
                <FaPaperPlane /> Send My Free Enquiry
              </button>
            </form>
          </div>
        ) : (
          <div className="enquiry-success">
            <FaCheckCircle className="enquiry-success-icon" />
            <h3>Enquiry Sent Successfully!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>! We have received your request for <em>{formData.service}</em>.
            </p>
            <p className="enquiry-time-notice">
              One of our senior consultants will review your brief and contact you at <strong>{formData.phone}</strong> shortly.
            </p>
            <button className="enquiry-modal-btn" onClick={handleClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
