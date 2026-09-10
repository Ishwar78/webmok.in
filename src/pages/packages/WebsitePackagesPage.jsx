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
import './WebsitePackagesPage.css';

const WebsitePackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Website Design & Development Packages",
    tagline: "CUSTOM REACT, WORDPRESS & E-COMMERCE WEBSITES INDIA · EST. 2018",
    heroTitleHighlight: "Website Design Packages in India",
    shortName: "Website Packages",
    leadDesc: "Are you looking for a modern, responsive, and blazing-fast website built to convert casual visitors into loyal paying customers?",
    bodyDesc: "WebMok designs and engineers custom, conversion-focused websites utilizing React.js, Next.js, WordPress, and Shopify with sub-second load times and 100% mobile responsiveness.",
    stats: [
  {
    "num": "0.8s",
    "label": "Average Page Load Speed"
  },
  {
    "num": "100%",
    "label": "Mobile-First Responsive"
  },
  {
    "num": "650+",
    "label": "Websites Engineered"
  },
  {
    "num": "100%",
    "label": "Full Source Code Ownership"
  }
],
    plans: [
  {
    "name": "Business Starter",
    "badge": "Small Business / Portfolio",
    "inrPrice": "14,500",
    "usdPrice": "229",
    "period": "/ one-time",
    "desc": "Professional 5-page responsive website for startups, consultants, and local businesses.",
    "features": [
      "Up to 5 Custom Responsive Pages",
      "Mobile-First UI/UX Design",
      "Contact Form & WhatsApp Chat Integration",
      "Basic On-Page SEO & Meta Tags",
      "Social Media & Google Maps Integration",
      "1 Month Free Technical Support"
    ]
  },
  {
    "name": "Corporate Growth",
    "badge": "Most Popular",
    "inrPrice": "28,000",
    "usdPrice": "449",
    "period": "/ one-time",
    "desc": "High-speed 10 to 15 page custom website with dynamic blog, animations, and lead funnels.",
    "highlight": true,
    "features": [
      "Up to 15 Custom Responsive Pages",
      "Dynamic Blog CMS & News Architecture",
      "Sub-Second Speed Optimization (90+ Google Score)",
      "Interactive Quote Request & Callback Modals",
      "Advanced Schema Markup & On-Page SEO",
      "3 Months Free Maintenance & Backups"
    ]
  },
  {
    "name": "E-Commerce / Enterprise",
    "badge": "Full-Scale Custom Store",
    "inrPrice": "48,000",
    "usdPrice": "769",
    "period": "/ one-time",
    "desc": "Full-featured online store or custom React web application with payment gateways.",
    "features": [
      "Full E-Commerce Product Catalog & Cart",
      "Payment Gateway Integration (UPI, Stripe, Cards)",
      "Customer Accounts & Order Tracking System",
      "Inventory & Automated Email Notifications",
      "Enterprise Security Hardening & SSL Setup",
      "6 Months Dedicated Priority Support"
    ]
  }
],
    faqs: [
  {
    "q": "How long does it take to build and launch a website?",
    "a": "Standard business websites are delivered in 2 to 3 weeks, while complex corporate or e-commerce platforms typically take 3 to 5 weeks."
  },
  {
    "q": "Will I be able to edit text and images myself later?",
    "a": "Yes! We build intuitive admin panels so your team can easily update text, change images, and post blogs without any coding knowledge."
  },
  {
    "q": "Do you provide domain registration and web hosting?",
    "a": "Yes, all our packages include domain setup assistance and 1 year of high-speed cloud hosting with SSL."
  }
]
  };
  const pageData = usePackageData('website-packages', defaultPageData);

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
              <span className="opseo-tag">CUSTOM WEB ENGINEERING & UI/UX</span>
              <h2 className="opseo-main-title">
                Best Website Design
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies crafts bespoke, mobile-first websites tailored for startups, corporations, clinics, and e-commerce stores. We merge stunning UI aesthetics with high-converting UX wireframes and clean, modern code.
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
            <span className="opseo-numbers-subtitle">WEB MASTERY</span>
            <h2>
              Web Engineering Scale,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">650+</div>
              <div className="opseo-stat-line"></div>
              <p>Websites Launched</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">0.8s</div>
              <div className="opseo-stat-line"></div>
              <p>Average Load Speed</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">99.9%</div>
              <div className="opseo-stat-line"></div>
              <p>Uptime & Security Score</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">WEB DESIGN SUITE</span>
              <h2 className="opseo-include-title">
                What Do Website Design
                <span>Packages Include?</span>
              </h2>
              <p>Our website design packages cover the entire development lifecycle: custom UI/UX wireframes, mobile-first responsive layout, speed optimization, contact forms with WhatsApp integration, SEO-friendly architecture, and full source code handover.</p>
              <p>You own 100% of your domain, code, and content with zero vendor lock-in.</p>

              <div className="opseo-feature-list">
                <div key="100% Custom Responsive UI/UX Design" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  100% Custom Responsive UI/UX Design
                </div>
                <div key="Modern React, Next.js or WordPress Frameworks" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Modern React, Next.js or WordPress Frameworks
                </div>
                <div key="Fast Load Speed Optimization (90+ PageSpeed)" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Fast Load Speed Optimization (90+ PageSpeed)
                </div>
                <div key="Interactive Contact Modals & WhatsApp Chat Buttons" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Interactive Contact Modals & WhatsApp Chat Buttons
                </div>
                <div key="Search Engine Optimized Semantic HTML5 Structure" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Search Engine Optimized Semantic HTML5 Structure
                </div>
                <div key="1 Year Free Hosting & Technical Support" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  1 Year Free Hosting & Technical Support
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Website Design & Development Packages" />
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
              Importance of a 
              <span>Modern High-Speed Website</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Your website is the digital storefront and primary credibility anchor of your entire enterprise. Over 75% of users judge a company’s trustworthiness based solely on website design, and 53% abandon sites that take more than 3 seconds to load.</p>
              <p>A professionally engineered website converts traffic into inquiries 24/7, serving as your most profitable sales representative.</p>
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
                <span>  Modern Website</span>
                <br />
                <span>Design Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We don’t use generic, bloated templates that slow down your site. We engineer clean, modular web applications built with modern frontend frameworks and intuitive content management systems.</p>
                <p>Every website includes built-in conversion psychology, call-to-action triggers, and enterprise security hardening.</p>
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
              <span className="opseo-benefits-tag">DEVELOPMENT ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Website
                <span>Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Website packages elevate brand prestige, skyrocket lead conversion rates, and deliver sub-second mobile performance that ranks naturally on Google.</p>
                <p>Effortlessly manage and update your content with intuitive admin dashboards.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Sub-Second Load Times & 100% Responsive" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Sub-Second Load Times & 100% Responsive</span>
                </div>
                <div key="High-Converting Inbound Lead Funnels" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>High-Converting Inbound Lead Funnels</span>
                </div>
                <div key="Complete Ownership & Zero Recurring Royalties" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Complete Ownership & Zero Recurring Royalties</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Website Design & Development Packages" />
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

export default WebsitePackagesPage;
