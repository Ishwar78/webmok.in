import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="wm-privacy-root">
      <section className="wm-privacy-hero">
        <div className="wm-privacy-container">
          <span className="wm-privacy-tag">Data Protection</span>
          <h1 className="wm-privacy-title">Privacy Policy</h1>
          <p className="wm-privacy-sub">Compliance with IT Act & Global Standards | Webmok Pvt. Ltd.</p>
        </div>
      </section>

      <section className="wm-privacy-body">
        <div className="wm-privacy-container wm-privacy-card">
          <h2>1. Information We Collect</h2>
          <p>
            When you interact with Webmok.in, request a 28-second callback, or submit an online inquiry, we collect information including your name, email address, phone number, company name, and project specifications.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your contact details solely to:
          </p>
          <ul className="wm-privacy-list">
            <li>Respond to your quotation requests and provide project scopes</li>
            <li>Assign your requirements to a relevant technology specialist</li>
            <li>Deliver scheduled project milestones, invoices, and SLA updates</li>
            <li>Send periodic technology insights or maintenance advisories (opt-out available anytime)</li>
          </ul>

          <h2>3. Zero Spam & Data Confidentiality</h2>
          <p>
            We adhere to strict confidentiality standards. We never sell, rent, lease, or monetize your contact or business data to any third-party marketing companies. All client communication is encrypted and stored on secure cloud databases.
          </p>

          <h2>4. Cookies & Analytics</h2>
          <p>
            Our website uses basic first-party session cookies and Google Analytics to understand page performance, user navigation patterns, and improve website speed. You may choose to disable cookies in your web browser settings at any time.
          </p>

          <h2>5. Contact Our Data Protection Desk</h2>
          <p>
            If you wish to update, modify, or permanently delete any personal data provided to Web Mok, please email <strong>info@webmok.in</strong> or call our compliance desk at <strong>+91 8684031003</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
