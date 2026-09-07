import React from 'react';
import { FaShieldAlt, FaCalendarCheck, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="wm-policy-root">
      <section className="wm-policy-hero">
        <div className="wm-policy-container">
          <span className="wm-policy-tag">Terms & Guidelines</span>
          <h1 className="wm-policy-title">Refund & Cancellation Policy</h1>
          <p className="wm-policy-sub">Last updated: August 2026 | Webmok Pvt. Ltd.</p>
        </div>
      </section>

      <section className="wm-policy-body">
        <div className="wm-policy-container wm-policy-card">
          <h2>1. Commitment to Excellence</h2>
          <p>
            At Webmok Pvt. Ltd., we take immense pride in delivering top-tier website design, custom software development, mobile apps, and measurable digital marketing services. Each project begins with a clear scope of work and agreed milestone deliveries.
          </p>

          <h2>2. Web & Software Development Projects</h2>
          <p>
            Payments made towards web design and custom application development are linked directly to pre-approved developmental milestones. 
          </p>
          <ul className="wm-policy-bullet-list">
            <li><strong>Initial Advance Payment:</strong> The initial discovery and design deposit covers UX/UI wireframing and server provisioning. This advance is non-refundable once initial mockups have been delivered.</li>
            <li><strong>Development Phase:</strong> If a cancellation is requested before milestone signoff, client liability is restricted to actual work hours completed up to that date.</li>
            <li><strong>Final Handover:</strong> Upon full project delivery, code sign-off, and production deployment, payments are deemed fully earned and non-refundable.</li>
          </ul>

          <h2>3. SEO & Digital Marketing Retainers</h2>
          <p>
            Search Engine Optimization (SEO), Pay-Per-Click (PPC), and Social Media Marketing campaigns involve continuous human hours, third-party advertising budgets (Google, Meta), and software indexing tools. Ad spend paid to third-party ad networks is strictly non-refundable. Service retainers can be cancelled with a 15-day prior written notice before the next monthly billing cycle.
          </p>

          <h2>4. Dispute Resolution & Support</h2>
          <p>
            If you are not satisfied with any aspect of our service delivery, we encourage you to contact your dedicated project manager or write to <strong>info@webmok.in</strong>. Our executive leadership commits to reviewing and resolving grievances within 5 business days.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
