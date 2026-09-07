import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="wm-terms-root">
      <section className="wm-terms-hero">
        <div className="wm-terms-container">
          <span className="wm-terms-tag">Legal Terms</span>
          <h1 className="wm-terms-title">Terms & Conditions</h1>
          <p className="wm-terms-sub">Effective Date: August 2026 | Webmok Pvt. Ltd.</p>
        </div>
      </section>

      <section className="wm-terms-body">
        <div className="wm-terms-container wm-terms-card">
          <h2>1. Introduction & Acceptance</h2>
          <p>
            Welcome to Webmok.in, owned and operated by Webmok Pvt. Ltd. By accessing our website, hiring our web design, app development, or digital marketing services, you acknowledge that you have read, understood, and agree to be bound by the following Terms and Conditions.
          </p>

          <h2>2. Scope of Services</h2>
          <p>
            Webmok Pvt. Ltd. delivers custom software development, mobile apps, website design, SEO, and paid performance marketing. All specific project parameters, milestone dates, and payment obligations are governed by individual client Statements of Work (SOW) or quotation invoices.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            Upon receipt of 100% full cleared payment for custom web development or software projects, full copyright, design assets, and compiled source code ownership transfer directly to the client. Web Mok reserves the right to showcase non-confidential project visuals in our portfolio case studies unless a formal White-Label NDA agreement is executed.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            Clients agree to provide timely feedback, necessary brand assets, API credentials, and content copies essential for project progression. Delays in providing necessary approvals may adjust milestone delivery timelines accordingly.
          </p>

          <h2>5. Limitation of Liability & Warranties</h2>
          <p>
            While we implement industry-leading QA standards and bank-grade security configurations, Web Mok shall not be held liable for third-party hosting outages, search engine core algorithm changes, or unauthorized third-party hacking attempts on external servers outside our managed cloud control.
          </p>

          <h2>6. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India. Any legal dispute or proceeding arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
