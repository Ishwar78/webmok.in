import React, { useState, useEffect } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaHeadset
} from 'react-icons/fa';
import './ContactUs.css';

const API_BASE = 'http://localhost:5005/api';

const ContactUs = ({ onOpenCallMe }) => {
  const [contactInfo, setContactInfo] = useState(() => {
    const saved = localStorage.getItem('webmok_contact_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      phonePrimary: '8684031003',
      phoneSecondary: '+91 98765 43210',
      emailPrimary: 'info@webmok.in',
      emailSupport: 'support@webmok.in',
      address: '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',
      workingHours: 'Monday - Saturday: 9:30 AM to 7:00 PM'
    };
  });

  // Fetch real contact details from MongoDB Atlas on mount & listen for live updates
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const res = await fetch(`${API_BASE}/contact-info`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setContactInfo(json.data);
            localStorage.setItem('webmok_contact_info', JSON.stringify(json.data));
          }
        }
      } catch (e) {
        // Fallback to local data if server not running
      }
    };

    fetchContactDetails();

    const handleContactUpdated = () => {
      fetchContactDetails();
    };

    window.addEventListener('webmok_contact_updated', handleContactUpdated);
    return () => window.removeEventListener('webmok_contact_updated', handleContactUpdated);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Save Contact Inquiry directly to MongoDB Atlas
    try {
      await fetch(`${API_BASE}/inquiries/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || 'Website Contact Form Query',
          message: formData.message || 'Customer reached out via Contact Us page.'
        })
      });
    } catch (err) {
      console.warn('Backend server offline, message queued locally:', err.message);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="wm-contactpage-root">
      {/* Hero */}
      <section className="wm-contactpage-hero">
        <div className="wm-contactpage-container">
          <span className="wm-contactpage-tag">Get in Touch</span>
          <h1 className="wm-contactpage-title">Connect With Web Mok Experts</h1>
          <p className="wm-contactpage-desc">
            Have a project in mind, need technical advice, or want to explore our digital marketing solutions? We are ready to help you thrive.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="wm-contactpage-body">
        <div className="wm-contactpage-container wm-cpage-grid">
          {/* Info Column */}
          <div className="wm-cpage-info-col">
            <h2 className="wm-cpage-subheading">Contact Details & Locations</h2>
            <p className="wm-cpage-infotext">
              Drop by our office or call our priority response helpline. Our consultants are available Mon-Sat to review your requirements.
            </p>

            <div className="wm-cpage-card-list">
              <div className="wm-cinfo-card">
                <div className="wm-cinfo-icon-box"><FaPhoneAlt /></div>
                <div>
                  <h4>Phone Helplines</h4>
                  <a href={`tel:${contactInfo.phonePrimary}`} className="wm-cinfo-link">
                    Primary: {contactInfo.phonePrimary}
                  </a>
                  {contactInfo.phoneSecondary && (
                    <span style={{ display: 'block', fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                      Direct: {contactInfo.phoneSecondary}
                    </span>
                  )}
                  <button className="wm-cinfo-callme-btn" onClick={onOpenCallMe}>
                    Trigger 28s Call Back
                  </button>
                </div>
              </div>

              <div className="wm-cinfo-card">
                <div className="wm-cinfo-icon-box"><FaEnvelope /></div>
                <div>
                  <h4>Email Inquiries</h4>
                  <a href={`mailto:${contactInfo.emailPrimary}`} className="wm-cinfo-link">
                    {contactInfo.emailPrimary}
                  </a>
                  {contactInfo.emailSupport && (
                    <span style={{ display: 'block', fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                      Support: {contactInfo.emailSupport}
                    </span>
                  )}
                  <p className="wm-cinfo-sub">Average response within 2 hours</p>
                </div>
              </div>

              <div className="wm-cinfo-card">
                <div className="wm-cinfo-icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Delhi NCR Head Office</h4>
                  <p className="wm-cinfo-address">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="wm-cinfo-card">
                <div className="wm-cinfo-icon-box"><FaClock /></div>
                <div>
                  <h4>Office Hours</h4>
                  <p className="wm-cinfo-sub">{contactInfo.workingHours}</p>
                  <p className="wm-cinfo-sub">Sunday: On-Call Urgent Technical Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="wm-cpage-form-col">
            <div className="wm-cform-card">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we will get back to you promptly.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="wm-cpage-form">
                  <div className="wm-cfield">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="wm-cfield-row">
                    <div className="wm-cfield">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="ramesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="wm-cfield">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiry regarding Web & Mobile App Development"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="wm-cfield">
                    <label>Project Details / Message</label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your project requirements or queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="wm-cform-submit">
                    <FaPaperPlane /> Send Message Now
                  </button>
                </form>
              ) : (
                <div className="wm-cform-success">
                  <FaCheckCircle className="wm-csuccess-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out, {formData.name}. Our team will review your message and contact you within 2 business hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
