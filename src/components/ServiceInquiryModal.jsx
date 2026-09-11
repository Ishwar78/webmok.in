import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaCheckCircle,
  FaPaperPlane,
  FaSpinner,
  FaTags,
  FaBuilding,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCheck
} from 'react-icons/fa';
import './ServiceInquiryModal.css';

const API_BASE = 'http://localhost:5005/api';

const ServiceInquiryModal = ({ isOpen, onClose, initialService = '', initialPlan = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: '',
    message: '',
    serviceName: initialService,
    planName: initialPlan
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        serviceName: initialService || prev.serviceName || 'Custom Service',
        planName: initialPlan || prev.planName || 'Selected Plan'
      }));
      setSubmitted(false);
      setErrorMsg('');
    }
  }, [isOpen, initialService, initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const payload = {
      ...formData,
      pageUrl: typeof window !== 'undefined' ? window.location.pathname : ''
    };

    // 1. Immediate local save for resilience
    try {
      const existing = JSON.parse(localStorage.getItem('webmok_service_inquiries') || '[]');
      const newEntry = {
        _id: `sinq-${Date.now()}`,
        id: `sinq-${Date.now()}`,
        ...payload,
        status: 'new',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('webmok_service_inquiries', JSON.stringify([newEntry, ...existing]));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }

    // 2. Submit to backend API
    try {
      const res = await fetch(`${API_BASE}/service-inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok && !json.success) {
        console.warn('API notice:', json.message);
      }
    } catch (netErr) {
      console.warn('API network error, saved locally:', netErr);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="wm-sim-overlay" onClick={onClose}>
      <div className="wm-sim-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="wm-sim-close-btn" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        {submitted ? (
          <div className="wm-sim-success-state">
            <div className="wm-sim-success-icon">
              <FaCheck />
            </div>
            <h3>Inquiry Submitted Successfully!</h3>
            <p className="wm-sim-success-text">
              Thank you, <strong>{formData.name}</strong>. Our senior solution architect for <strong>{formData.serviceName}</strong> will review your requirements and send a comprehensive proposal & timeline within 24 hours.
            </p>
            <div className="wm-sim-summary-box">
              <div><span>Target Service:</span> <strong>{formData.serviceName}</strong></div>
              {formData.planName && <div><span>Plan Selected:</span> <strong>{formData.planName}</strong></div>}
              <div><span>Contact Number:</span> <strong>{formData.phone}</strong></div>
              <div><span>Email Address:</span> <strong>{formData.email}</strong></div>
            </div>
            <button type="button" className="wm-sim-btn-done" onClick={onClose}>
              Done & Return to Page
            </button>
          </div>
        ) : (
          <div className="wm-sim-content">
            <div className="wm-sim-header">
              <span className="wm-sim-badge">
                <FaTags /> Service Proposal Request
              </span>
              <h2 className="wm-sim-title">Request Custom Scope & Quotation</h2>
              <p className="wm-sim-subtitle">
                Receive an itemized technical deliverables breakdown, milestone delivery schedule, and verified team allocation.
              </p>
            </div>

            {/* Auto-filled Service & Plan Context Badges */}
            <div className="wm-sim-context-banner">
              <div className="wm-sim-context-item">
                <span className="wm-sim-context-lbl">Service:</span>
                <span className="wm-sim-context-val highlight">{formData.serviceName || 'Custom Service'}</span>
              </div>
              {formData.planName && (
                <div className="wm-sim-context-item">
                  <span className="wm-sim-context-lbl">Selected Tier:</span>
                  <span className="wm-sim-context-val plan">{formData.planName}</span>
                </div>
              )}
            </div>

            {errorMsg && <div className="wm-sim-error">{errorMsg}</div>}

            <form onSubmit={handleSubmit} className="wm-sim-form">
              <div className="wm-sim-row">
                <div className="wm-sim-group">
                  <label>Full Name *</label>
                  <div className="wm-sim-input-wrap">
                    <FaUser className="wm-sim-icon" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="wm-sim-group">
                  <label>Business Email *</label>
                  <div className="wm-sim-input-wrap">
                    <FaEnvelope className="wm-sim-icon" />
                    <input
                      type="email"
                      required
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="wm-sim-row">
                <div className="wm-sim-group">
                  <label>Phone / WhatsApp Number *</label>
                  <div className="wm-sim-input-wrap">
                    <FaPhoneAlt className="wm-sim-icon" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="wm-sim-group">
                  <label>Company / Brand Name</label>
                  <div className="wm-sim-input-wrap">
                    <FaBuilding className="wm-sim-icon" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Tech Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="wm-sim-row">
                <div className="wm-sim-group">
                  <label>Website URL (If applicable)</label>
                  <div className="wm-sim-input-wrap">
                    <FaGlobe className="wm-sim-icon" />
                    <input
                      type="text"
                      placeholder="https://yoursite.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                </div>

                <div className="wm-sim-group">
                  <label>Estimated Project Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="₹25,000 - ₹50,000 / mo">₹25,000 - ₹50,000 / mo (Starter)</option>
                    <option value="₹50,000 - ₹1,50,000 / mo">₹50,000 - ₹1,50,000 / mo (Growth)</option>
                    <option value="₹1,50,000 - ₹3,00,000 / mo">₹1,50,000 - ₹3,00,000 / mo (Enterprise)</option>
                    <option value="₹3,00,000+ / mo">₹3,00,000+ / mo (Dedicated Squad)</option>
                    <option value="One-time Project Scope">One-time Project Scope</option>
                  </select>
                </div>
              </div>

              <div className="wm-sim-group">
                <label>Key Requirements & Scope Objectives</label>
                <textarea
                  rows={3}
                  placeholder="Share your goals, target audience, technical requirements, or current challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="wm-sim-footer">
                <p className="wm-sim-privacy">
                  🔒 100% Confidential · Strict NDA Guarantee · No Spam
                </p>
                <button type="submit" className="wm-sim-btn-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <FaSpinner className="wm-sim-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Request Itemized Proposal &rarr;
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceInquiryModal;
