import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaAward,
  FaChartLine
} from 'react-icons/fa';
import { industriesData } from '../data/industriesData';
import './IndustriesWeServe.css';

const IndustriesWeServe = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeIndustryId, setActiveIndustryId] = useState('fitness');

  const activeIndustry = industriesData.find((i) => i.id === activeIndustryId) || industriesData[0];

  return (
    <div className="wm-industries-page-root">
      {/* 1. HERO BANNER */}
      <section className="wm-ind-page-hero">
        <div className="wm-ind-page-container">
          <div className="wm-ind-page-breadcrumb">
            <Link to="/">Home</Link> / <span>Industries We Serve</span>
          </div>

          <span className="wm-ind-page-pill">
            <FaAward /> 14+ ENTERPRISE INDUSTRY DOMAINS
          </span>

          <h1 className="wm-ind-page-title">
            Tailored Digital Engineering & Growth for <span className="wm-ind-title-highlight">Every Industry</span>
          </h1>

          <p className="wm-ind-page-lead">
            From regulated healthcare and fintech platforms to high-velocity ecommerce and fan-focused sports applications, Webmok engineers specialized digital ecosystems designed to dominate your market vertical.
          </p>

          <div className="wm-ind-page-hero-btns">
            <button
              type="button"
              className="wm-ind-hero-btn-quote"
              onClick={() => onOpenEnquiry && onOpenEnquiry('Industries Page Consultation')}
            >
              Get Custom Industry Proposal <FaArrowRight />
            </button>
            <button
              type="button"
              className="wm-ind-hero-btn-call"
              onClick={onOpenCallMe}
            >
              <FaPhoneAlt /> Call in 28 Sec
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE INDUSTRY EXPLORER (MATCHING REFERENCE SCREENSHOT 3 & 4) */}
      <section className="wm-ind-page-showcase-section">
        <div className="wm-ind-page-container">
          <div className="wm-ind-showcase-header">
            <h2 className="wm-ind-section-title">
              <span className="wm-ind-orange-text">Industries</span> We Serve
            </h2>
            {/* <p className="wm-ind-section-sub">
              We serve and work with a wide range of industries. Over the years, we at Webmok have expanded our work profile, taking in various different businesses and helping them to scale up in this dynamic digital world.
            </p> */}
          </div>

          {/* Interactive 2-Col Layout */}
          <div className="wm-ind-showcase-layout">
            {/* Left Nav Tabs */}
            <div className="wm-ind-showcase-nav">
              <ul className="wm-ind-tabs-list">
                {industriesData.map((item) => {
                  const isActive = item.id === activeIndustryId;
                  return (
                    <li key={item.id} className="wm-ind-tab-item">
                      <button
                        type="button"
                        className={`wm-ind-tab-btn ${isActive ? 'active' : ''} wm-tab-${item.id}`}
                        onClick={() => setActiveIndustryId(item.id)}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Industry Showcase Card */}
            <div className="wm-ind-showcase-display">
              <div className={`wm-ind-display-card wm-ind-card-${activeIndustry.id}`}>
                <div className="wm-ind-card-inner">
                  <h3 className="wm-ind-card-heading">{activeIndustry.name}</h3>
                  <p className="wm-ind-card-text">{activeIndustry.desc}</p>

                  <ul className="wm-ind-card-points">
                    {activeIndustry.points.map((point, idx) => (
                      <li key={idx} className="wm-ind-point-row">
                        <span className="wm-ind-point-diamond">◆</span>
                        <span className="wm-ind-point-desc">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="wm-ind-card-cta"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`Consultation for ${activeIndustry.title}`)}
                  >
                    Build for {activeIndustry.name} <FaArrowRight />
                  </button>
                </div>

                {/* Bottom-Right Stylized Icon Illustration */}
                <div className="wm-ind-card-icon-art">
                  {activeIndustry.icon}
                </div>
              </div>

              {/* Bottom Subtle Bar (matching reference screenshot) */}
              <div className="wm-ind-card-subbar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION PILLARS */}
      <section className="wm-ind-pillars-section">
        <div className="wm-ind-page-container">
          <div className="wm-ind-pillars-header">
            <span className="wm-ind-pill-badge">WHY DOMAIN EXPERTISE MATTERS</span>
            <h2>Engineered with Deep Sector Compliance & Precision</h2>
            <div className="wm-ind-bar-center"></div>
          </div>

          <div className="wm-ind-pillars-grid">
            <div className="wm-ind-pillar-card">
              <div className="wm-ind-pillar-icon"><FaShieldAlt /></div>
              <h4>Compliance & Security First</h4>
              <p>HIPAA for healthcare, PCI-DSS for fintech, GDPR for global SaaS. Every platform is built strict to regulatory standards.</p>
            </div>

            <div className="wm-ind-pillar-card">
              <div className="wm-ind-pillar-icon"><FaRocket /></div>
              <h4>High-Concurrency Scalability</h4>
              <p>Architected for spikes in traffic, flash sales in eCommerce, and real-time live match updates in sports & gaming.</p>
            </div>

            <div className="wm-ind-pillar-card">
              <div className="wm-ind-pillar-icon"><FaChartLine /></div>
              <h4>Attributed ROI & Growth Funnels</h4>
              <p>Custom conversion funnels and tracking telemetry aligned with your industry's specific sales cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CONVERSION BANNER */}
      <section className="wm-ind-bottom-cta">
        <div className="wm-ind-page-container">
          <div className="wm-ind-cta-box">
            <div className="wm-ind-cta-content">
              <h2>Ready to Transform Your Industry Presence?</h2>
              <p>Speak with our senior industry directors and receive a comprehensive technological audit within 24 hours.</p>
            </div>
            <div className="wm-ind-cta-actions">
              <button
                type="button"
                className="wm-ind-cta-btn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-ind-cta-btn-quote"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Industries Bottom Banner Inquiry')}
              >
                Get Free Consultation <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesWeServe;
