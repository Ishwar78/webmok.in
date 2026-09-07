import React from 'react';
import { FaSearch, FaCheckCircle, FaChartLine, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';
import './HireSeoExpert.css';

const HireSeoExpert = ({ onOpenCallMe, onOpenEnquiry }) => {
  return (
    <div className="wm-hireseo-root">
      <section className="wm-hireseo-hero">
        <div className="wm-hireseo-container">
          <span className="wm-hireseo-tag">Dedicated Specialists</span>
          <h1 className="wm-hireseo-title">Hire a Dedicated SEO Expert in Delhi NCR</h1>
          <p className="wm-hireseo-desc">
            Partner directly with certified senior SEO strategists who focus 100% on dominating your target keywords, building high-authority links, and driving profitable organic sales.
          </p>
          <div className="wm-hireseo-hero-btns">
            <button className="wm-hbtn-primary" onClick={onOpenEnquiry}>
              Hire an Expert Today
            </button>
            <button className="wm-hbtn-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Sec
            </button>
          </div>
        </div>
      </section>

      <section className="wm-hireseo-body">
        <div className="wm-hireseo-container">
          <div className="wm-hireseo-grid-2">
            <div className="wm-hireseo-card">
              <h2>What Our Dedicated SEO Experts Deliver</h2>
              <ul className="wm-hireseo-points">
                <li><FaCheckCircle className="wm-hchk" /> <strong>Full Technical Audits:</strong> Crawl error remediation, canonical tags, schema markup, and XML sitemaps.</li>
                <li><FaCheckCircle className="wm-hchk" /> <strong>High-Intent Keyword Mapping:</strong> Targeting buyer-ready commercial queries rather than low-value vanity traffic.</li>
                <li><FaCheckCircle className="wm-hchk" /> <strong>Manual Outreach Link Building:</strong> 100% white-hat contextual backlink acquisition from high DA/DR websites.</li>
                <li><FaCheckCircle className="wm-hchk" /> <strong>Core Web Vitals Tuning:</strong> Boosting page load speed to comply with Google ranking factors.</li>
                <li><FaCheckCircle className="wm-hchk" /> <strong>Dedicated Weekly Consultations:</strong> Direct 1-on-1 Zoom syncs with your assigned senior SEO account manager.</li>
              </ul>
            </div>

            <div className="wm-hireseo-card wm-hireseo-models">
              <h2>Flexible Hiring Models</h2>
              <div className="wm-hmodel-box">
                <h4>Dedicated Monthly Retainer</h4>
                <p>Full-time or part-time senior SEO resource working exclusively on your project accounts with daily reporting.</p>
              </div>
              <div className="wm-hmodel-box">
                <h4>Technical SEO Sprint</h4>
                <p>One-time intense 30-day technical diagnostic and migration audit designed for enterprise redesigns.</p>
              </div>
              <div className="wm-hmodel-box">
                <h4>Local SEO & Google Maps Dominance</h4>
                <p>Engineered for service businesses seeking the #1 spot on Google 3-Pack Maps for their city/territory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireSeoExpert;
