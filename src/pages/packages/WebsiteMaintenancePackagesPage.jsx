import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaWhatsapp,
  FaAward,
  FaGoogle,
  FaChevronRight,
  FaHeadset,
  FaClock,
  FaLaptopCode,
  FaCheckCircle
} from 'react-icons/fa';
import HeroLeadForm from '../../components/HeroLeadForm';
import usePackageData from '../../hooks/usePackageData';
import '../../components/HeroTwoColShared.css';
import './WebsiteMaintenancePackagesPage.css';

const WebsiteMaintenancePackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Website Maintenance Packages",
    tagline: "SECURITY PATCHES, DAILY BACKUPS & 24/7 SUPPORT INDIA · EST. 2018",
    heroTitleHighlight: "Website Maintenance Packages in India",
    shortName: "Website Maintenance",
    leadDesc: "Are you looking for reliable, 24/7 website maintenance to keep your site secure, lightning-fast, and 100% bug-free?",
    bodyDesc: "WebMok provides complete web maintenance: daily cloud backups, core and plugin updates, malware scanning, uptime monitoring, emergency bug fixes, and continuous speed optimization.",
    stats: [
  {
    "num": "99.99%",
    "label": "Uptime Reliability"
  },
  {
    "num": "Under 1 hr",
    "label": "Emergency Response Time"
  },
  {
    "num": "100%",
    "label": "Malware & Hack Protection"
  },
  {
    "num": "Daily",
    "label": "Automated Cloud Backups"
  }
],
    plans: [
  {
    "name": "Basic Care",
    "badge": "Small Business Sites",
    "inrPrice": "4,500",
    "usdPrice": "69",
    "period": "/ month",
    "desc": "Essential security, weekly backups, and core software updates for simple websites.",
    "features": [
      "Weekly Automated Cloud Backups",
      "Core & Plugin Security Updates",
      "24/7 Uptime Monitoring",
      "Basic Malware Scanning",
      "1 Hour Dedicated Developer Edits / mo",
      "Monthly Health Report"
    ]
  },
  {
    "name": "Standard Pro Care",
    "badge": "Most Popular",
    "inrPrice": "8,500",
    "usdPrice": "129",
    "period": "/ month",
    "desc": "Comprehensive maintenance, daily backups, speed monitoring, and content updates.",
    "highlight": true,
    "features": [
      "Daily Automated Offsite Cloud Backups",
      "Proactive Security Hardening & Malware Removal",
      "Continuous Core Web Vitals Speed Checks",
      "Contact Form & Checkout Testing",
      "3 Hours Dedicated Developer Edits / mo",
      "Priority Slack & Phone Support"
    ]
  },
  {
    "name": "Enterprise VIP Care",
    "badge": "High-Traffic & E-Commerce",
    "inrPrice": "16,000",
    "usdPrice": "249",
    "period": "/ month",
    "desc": "High-availability care for mission-critical portals, e-commerce stores, and custom React apps.",
    "features": [
      "Real-Time Real-User Uptime Monitoring",
      "Staging Environment Update Verification",
      "Database Optimization & Query Caching",
      "8 Hours Dedicated Developer Edits / mo",
      "30-Minute Emergency Response SLA",
      "Dedicated Senior Web Engineer"
    ]
  }
],
    faqs: [
  {
    "q": "What happens if our website gets hacked or experiences downtime?",
    "a": "With our maintenance packages, we immediately restore a clean cloud backup and clean all malware within minutes at zero extra charge."
  },
  {
    "q": "Can we use our dedicated hours for adding new pages or text?",
    "a": "Yes! Your dedicated developer hours can be used for text changes, image swaps, banner uploads, or adding new features."
  },
  {
    "q": "Do unused developer hours roll over to the next month?",
    "a": "Yes, up to 1 month of unused developer hours can roll over into the following billing cycle."
  }
]
  };
  const pageData = usePackageData('website-maintenance-packages', defaultPageData);

  return (
    <div className="wm-pkg-page-root">
            {/* 1. HERO SECTION (2-COLUMN MODERN DESIGN WITH COMMON LEAD FORM) */}
      <section className="wm-hero-shared-section">
        <div className="wm-hero-shared-container">
          <div className="wm-hero-two-col">
            {/* Left Column: Content & 4-Metric Performance Bar */}
            <div className="wm-hero-col-left">
              <div className="wm-hero-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span>{pageData.name}</span>
              </div>

              <span className="wm-hero-pill">
                <FaAward /> {pageData.tagline}
              </span>

              <h1 className="wm-hero-title">
                Make Your Business Stand Out Using <span className="wm-hero-title-highlight">{pageData.heroTitleHighlight || pageData.name}</span>
              </h1>

              <p className="wm-hero-lead">
                {pageData.leadDesc}
              </p>
              {pageData.image && (
                <div style={{ borderRadius: '10px', overflow: 'hidden', margin: '14px 0 18px 0', border: '1px solid rgba(0, 210, 255, 0.25)', maxWidth: '540px' }}>
                  <img src={pageData.image} alt={pageData.name} style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              )}

              <div className="wm-hero-cta-group">
                <button
                  type="button"
                  className="wm-hero-cta-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Custom Quote`)}
                >
                  Get Free Custom Quote <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="wm-hero-cta-secondary"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Call Me in 28 Seconds
                </button>
              </div>

              {/* 4-Metric Performance Bar (Embedded in Hero) */}
              <div className="wm-hero-stats-grid">
                {(pageData.stats || []).map((st, i) => (
                  <div key={i} className="wm-hstat-card">
                    <p className="wm-hstat-num">{st.num}</p>
                    <p className="wm-hstat-label">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Reusable Hero Lead Form */}
            <div className="wm-hero-col-right">
              <HeroLeadForm
                pageName={pageData.name}
                source={`${pageData.name} Hero Section`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="opseo-intro-section">
        <div className="opseo-container">
          <div className="opseo-intro-grid">
            <div className="opseo-intro-left">
              <span className="opseo-tag">24/7 SECURITY & PERFORMANCE SUPPORT</span>
              <h2 className="opseo-main-title">
                Best Website Maintenance
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies protects your digital investments with proactive, round-the-clock website maintenance. We prevent security breaches, fix broken layouts, update software frameworks, and ensure zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="opseo-numbers-section">
        <div className="opseo-numbers-bg"></div>
        <div className="opseo-numbers-overlay"></div>
        <div className="opseo-numbers-container">
          <div className="opseo-numbers-heading">
            <span className="opseo-numbers-subtitle">RELIABILITY STATS</span>
            <h2>
              Website Maintenance Care,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">500+</div>
              <div className="opseo-stat-line"></div>
              <p>Websites Monitored 24/7</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">99.99%</div>
              <div className="opseo-stat-line"></div>
              <p>Verified Uptime Record</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">Under 1 hr</div>
              <div className="opseo-stat-line"></div>
              <p>Average Support Ticket Resolution</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">0</div>
              <div className="opseo-stat-line"></div>
              <p>Unresolved Security Incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">MAINTENANCE SUITE</span>
              <h2 className="opseo-include-title">
                What Do Website Maintenance
                <span>Packages Include?</span>
              </h2>
              <p>Our website maintenance packages include core and extension updates, malware cleanup, daily offsite backups, speed optimization, form testing, and dedicated monthly developer hours for new edits.</p>
              <p>You get a dedicated engineer on call to handle urgent fixes without hiring full-time staff.</p>

              <div className="opseo-feature-list">
                <div key="Daily Automated Offsite Cloud Backups" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Daily Automated Offsite Cloud Backups
                </div>
                <div key="Core, Plugin & Theme Security Updates" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Core, Plugin & Theme Security Updates
                </div>
                <div key="24/7 Real-Time Uptime Monitoring" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  24/7 Real-Time Uptime Monitoring
                </div>
                <div key="Malware Scanning & Hack Recovery Guarantee" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Malware Scanning & Hack Recovery Guarantee
                </div>
                <div key="Dedicated Developer Hours for Content Updates" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Dedicated Developer Hours for Content Updates
                </div>
                <div key="Monthly Performance & Health Telemetry Reports" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Monthly Performance & Health Telemetry Reports
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Website Maintenance Packages" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="opseo-importance-section">
        <div className="opseo-container">
          <div className="opseo-importance-box">
            <div className="opseo-importance-glow glow-one"></div>
            <div className="opseo-importance-glow glow-two"></div>

            <h2 className="opseo-importance-title">
              Importance of 
              <span>Proactive Website Maintenance</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Over 43% of cyber attacks target small-to-medium business websites through outdated plugins and unpatched vulnerabilities. A hacked or crashed website destroys customer trust, ruins SEO rankings, and causes immediate revenue loss.</p>
              <p>Proactive maintenance ensures your website remains secure, fast, and operational every single minute of the year.</p>
            </div>

            <div className="opseo-importance-btn-wrap">
              <a href="#pricing-plans" className="opseo-importance-btn">
                <span>Explore Packages</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="opseo-why-section">
        <div className="opseo-container">
          <div className="opseo-why-grid">
            <div className="opseo-why-content">
              <span className="opseo-why-tag">WHY WEBMOK</span>
              <h2 className="opseo-why-title">
                Why Webmok
Technologies for
                <span>  Proactive Website</span>
                <br />
                <span>Maintenance Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Webmok provides dedicated senior developers, not robotic ticket queues. When you need an urgent update or fix, our team acts immediately with guaranteed response times.</p>
                <p>We test all updates on staging environments before applying them to your live website, preventing unexpected broken layouts or checkout failures.</p>
              </div>
            </div>

            <div className="opseo-why-image">
              <div className="opseo-why-image-bg"></div>
              <img src="/onpage3.avif" alt="Why Choose Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. TIERED PRICING PLANS SECTION */}
      <section className="wm-pkg-pricing-section" id="pricing-plans">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Transparent Pricing</span>
            <h2 className="wm-pkg-sec-title">Flexible Monthly {pageData.shortName} Plans with Zero Lock-In</h2>
            <div className="wm-pkg-bar"></div>

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

          {/* Pricing Grid */}
          <div className={`wm-pkg-cards-grid wm-grid-${pageData.plans.length}`}>
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-pkg-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-pkg-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-pkg-card-top">
                    {plan.badge && <span className="wm-pkg-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-pkg-card-name">{plan.name}</h3>
                    <p className="wm-pkg-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-pkg-card-pricing">
                    <div className="wm-pkg-price-row">
                      <span className="wm-pkg-price-val">{displayPrice}</span>
                      <span className="wm-pkg-price-period">{plan.period || '/ month'}</span>
                    </div>
                  </div>

                  <div className="wm-pkg-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-pkg-card-action">
                    <button
                      type="button"
                      className="wm-pkg-select-btn"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${plan.name}`)}
                    >
                      Choose Plan <FaArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BENEFITS SECTION */}
      <section className="opseo-benefits-section">
        <div className="opseo-container">
          <div className="opseo-benefits-grid">
            <div className="opseo-benefits-content">
              <span className="opseo-benefits-tag">CARE ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Website
                <span>Maintenance Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Website maintenance packages deliver complete peace of mind, prevent catastrophic data loss, and keep your website running at peak speed.</p>
                <p>Dedicated monthly developer hours allow you to implement ongoing content and design updates effortlessly.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Zero Downtime & 24/7 Hack Protection" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Zero Downtime & 24/7 Hack Protection</span>
                </div>
                <div key="Daily Automated Safe Cloud Backups" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Daily Automated Safe Cloud Backups</span>
                </div>
                <div key="Dedicated Developer on Call for Instant Edits" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Dedicated Developer on Call for Instant Edits</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Website Maintenance Packages" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHY PARTNER WITH WEBMOK */}
      <section className="wm-pkg-why-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Why Partner With Us</span>
            <h2 className="wm-pkg-sec-title">The WebMok Advantage in {pageData.shortName} Execution</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-why-grid">
            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaShieldAlt /></div>
              <h4>100% Proven Methodology</h4>
              <p>Zero shortcuts. We strictly execute high-grade, sustainable methods that protect and scale your brand equity.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaRocket /></div>
              <h4>Full Telemetry Reporting</h4>
              <p>Transparent bi-weekly and monthly dashboards tracking your key conversions, leads, and direct ROI.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaHeadset /></div>
              <h4>Dedicated Account Squad</h4>
              <p>Work directly with dedicated senior strategists, copywriters, and engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-pkg-faqs-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-pkg-sec-title">Common Queries About {pageData.shortName} Packages</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-pkg-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-pkg-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-pkg-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-pkg-bottom-banner">
        <div className="wm-pkg-container">
          <div className="wm-pkg-banner-inner">
            <div className="wm-pkg-banner-text">
              <h2>Ready to Accelerate Growth with Our {pageData.shortName} Packages?</h2>
              <p>Schedule a quick 1-on-1 strategy call with our senior specialists today. Get a customized campaign blueprint tailored to your targets.</p>
            </div>
            <div className="wm-pkg-banner-btns">
              <button
                type="button"
                className="wm-pkg-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-pkg-bbtn-quote"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Bottom Banner Inquiry`)}
              >
                Get Custom Quote <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMaintenancePackagesPage;
