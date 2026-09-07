import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaWhatsapp,
  FaAward,
  FaGlobeAmericas
} from 'react-icons/fa';
import { packagesRegistry } from '../../data/packagesData';
import SeoPackagesPage from './SeoPackagesPage';
import './PackageDetailPage.css';

const PackageDetailPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const { packageSlug } = useParams();
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  // If user requested seo-packages, render full SeoPackagesPage
  if (packageSlug === 'seo-packages') {
    return <SeoPackagesPage onOpenCallMe={onOpenCallMe} onOpenEnquiry={onOpenEnquiry} />;
  }

  const pkgData = packagesRegistry[packageSlug];

  // Fallback if package not in registry
  if (!pkgData) {
    return (
      <div className="wm-pkg-not-found-page">
        <div className="wm-pkg-container" style={{ textAlign: 'center', padding: '120px 24px' }}>
          <h2>Package Details</h2>
          <p>Looking for a custom package? Explore our complete service packages.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
            <Link to="/packages/seo-packages" className="wm-pkg-btn-select" style={{ width: 'auto', display: 'inline-flex' }}>
              View SEO Packages <FaArrowRight />
            </Link>
            <button className="wm-pkg-btn-call" style={{ width: 'auto' }} onClick={onOpenEnquiry}>
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="wm-pkg-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-pkg-hero">
        <div className="wm-pkg-ambient-glow"></div>
        <div className="wm-pkg-container">
          <div className="wm-pkg-hero-topbadge">
            <span className="wm-pkg-badge-pill">
              <FaAward className="wm-pkg-badge-icon" /> {pkgData.category}
            </span>
            <div className="wm-pkg-rating-chip">
              <div className="wm-pkg-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="wm-star-gold" />
                ))}
              </div>
              <span className="wm-pkg-rating-text">4.9 / 5 Rated Agency</span>
            </div>
          </div>

          <h1 className="wm-pkg-hero-title">
            {pkgData.heroTitle}
          </h1>

          <p className="wm-pkg-hero-desc">
            {pkgData.heroDesc}
          </p>

          <div className="wm-pkg-hero-badges-row">
            <div className="wm-pkg-hbadge">
              <FaShieldAlt className="wm-hbadge-icon" />
              <span>100% Earned Result Guarantee</span>
            </div>
            <div className="wm-pkg-hbadge">
              <FaRocket className="wm-hbadge-icon" />
              <span>1,500+ Delivered Deployments</span>
            </div>
            <div className="wm-pkg-hbadge">
              <FaGlobeAmericas className="wm-hbadge-icon" />
              <span>Zero Lock-In Contract</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      {pkgData.stats && (
        <section className="wm-pkg-stats-strip">
          <div className="wm-pkg-container">
            <div className="wm-pkg-stats-grid">
              {pkgData.stats.map((st, i) => (
                <div key={i} className="wm-pkg-stat-card">
                  <strong>{st.num}</strong>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. TIERED PRICING PLANS */}
      <section className="wm-pkg-pricing-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Pricing Architecture</span>
            <h2 className="wm-pkg-sec-title">Transparent {pkgData.name} Pricing</h2>
            <div className="wm-pkg-bar"></div>
            <p className="wm-pkg-sec-desc">
              Select the optimal plan designed to meet your deliverables and commercial targets.
            </p>

            {/* Currency Switcher */}
            <div className="wm-pkg-currency-toggle">
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR (India)
              </button>
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD (Global)
              </button>
            </div>
          </div>

          <div className="wm-pkg-cards-grid" style={{ gridTemplateColumns: pkgData.plans.length === 3 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' }}>
            {pkgData.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`wm-pkg-card ${plan.highlight ? 'wm-pkg-card-popular' : ''}`}
              >
                {plan.highlight && (
                  <div className="wm-pkg-popular-badge">Most Popular</div>
                )}
                <div className="wm-pkg-card-head">
                  <span className="wm-pkg-target-badge">{plan.badge}</span>
                  <h3 className="wm-pkg-plan-name">{plan.name}</h3>
                  <div className="wm-pkg-price-row">
                    {plan.inrPrice === 'Custom' ? (
                      <span className="wm-pkg-price-custom">Custom Scope</span>
                    ) : (
                      <>
                        <span className="wm-pkg-price-currency">
                          {currency === 'INR' ? '₹' : '$'}
                        </span>
                        <span className="wm-pkg-price-val">
                          {currency === 'INR' ? plan.inrPrice : plan.usdPrice}
                        </span>
                        <span className="wm-pkg-price-period">{plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="wm-pkg-plan-desc">{plan.desc}</p>
                </div>

                <div className="wm-pkg-card-divider"></div>

                <div className="wm-pkg-card-features">
                  <span className="wm-pkg-features-title">Deliverables & Scope:</span>
                  <ul className="wm-pkg-feat-list">
                    {plan.features.map((feat, fi) => (
                      <li key={fi}>
                        <FaCheck className="wm-feat-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="wm-pkg-card-actions">
                  <button
                    type="button"
                    className="wm-pkg-btn-select"
                    onClick={onOpenEnquiry}
                  >
                    Select {plan.name} <FaArrowRight />
                  </button>
                  <button
                    type="button"
                    className="wm-pkg-btn-call"
                    onClick={onOpenCallMe}
                  >
                    <FaPhoneAlt /> Talk to Specialist
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="wm-pkg-enterprise-banner">
            <div className="wm-ep-icon-col">
              <FaRocket />
            </div>
            <div className="wm-ep-text-col">
              <h4>Require an Enterprise or Multi-Service Solution?</h4>
              <p>
                We can combine SEO, PPC, SMM, and Website Maintenance into a unified, cost-effective digital growth retainer.
              </p>
            </div>
            <div className="wm-ep-btn-col">
              <button className="wm-ep-cta-btn" onClick={onOpenEnquiry}>
                Request Unified Retainer Scope
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      {pkgData.faqs && pkgData.faqs.length > 0 && (
        <section className="wm-pkg-faq-section">
          <div className="wm-pkg-container">
            <div className="wm-pkg-sec-header">
              <span className="wm-pkg-subtitle">Frequently Asked Questions</span>
              <h2 className="wm-pkg-sec-title">{pkgData.name} FAQs</h2>
              <div className="wm-pkg-bar"></div>
            </div>

            <div className="wm-pkg-faq-accordion">
              {pkgData.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`wm-faq-item ${openFaq === idx ? 'wm-faq-open' : ''}`}
                >
                  <button
                    type="button"
                    className="wm-faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span className="wm-faq-q-text">{faq.q}</span>
                    <span className="wm-faq-arrow">
                      {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="wm-faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. BOTTOM CTA STRIP */}
      <section className="wm-pkg-bottom-cta">
        <div className="wm-pkg-container">
          <div className="wm-pkg-cta-box">
            <div className="wm-cta-text-col">
              <h2>Ready to Accelerate Your Brand with Webmok?</h2>
              <p>
                Connect with our senior technical architect in 28 seconds and get an itemized scope today.
              </p>
            </div>
            <div className="wm-cta-actions-col">
              <button
                type="button"
                className="wm-cta-btn-primary"
                onClick={onOpenEnquiry}
              >
                <FaPaperPlane /> Request Free Proposal
              </button>
              <button
                type="button"
                className="wm-cta-btn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call Me in 28 Seconds
              </button>
              <a
                href={`https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20${encodeURIComponent(pkgData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wm-cta-btn-wa"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetailPage;
