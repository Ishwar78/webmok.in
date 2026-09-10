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
import './LinkedinMarketingPackagesPage.css';

const LinkedinMarketingPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "LinkedIn Marketing Packages",
    tagline: "B2B THOUGHT LEADERSHIP, LEAD GEN & EXECUTIVE BRANDING INDIA · EST. 2018",
    heroTitleHighlight: "LinkedIn Marketing Packages in India",
    shortName: "LinkedIn Marketing",
    leadDesc: "Are you looking to generate high-ticket B2B leads, establish executive thought leadership, and reach corporate decision-makers on LinkedIn?",
    bodyDesc: "WebMok engineers high-impact B2B LinkedIn campaigns, founder personal branding, corporate company page management, and precision-targeted LinkedIn Sponsored Content ads.",
    stats: [
  {
    "num": "4.5x",
    "label": "Average B2B Lead Conversion"
  },
  {
    "num": "100%",
    "label": "C-Suite & Founder Targeted"
  },
  {
    "num": "250+",
    "label": "B2B Companies Scaled"
  },
  {
    "num": "10M+",
    "label": "B2B Professional Impressions"
  }
],
    plans: [
  {
    "name": "LinkedIn Company Hub",
    "badge": "B2B Company Presence",
    "inrPrice": "14,000",
    "usdPrice": "229",
    "period": "/ month",
    "desc": "Professional brand presence and content management for B2B company pages.",
    "features": [
      "12 Custom B2B Infographic & Graphic Posts",
      "4 Professional Multi-Page PDF Document Carousels",
      "Company Page SEO & Header Branding",
      "Industry Hashtag & Topic Curation",
      "Engagement Moderation & Response",
      "Monthly B2B Reach & Follower Report"
    ]
  },
  {
    "name": "Executive Growth & Ads",
    "badge": "Most Popular",
    "inrPrice": "26,000",
    "usdPrice": "419",
    "period": "/ month",
    "desc": "Company page management + Founder personal branding + targeted LinkedIn sponsored ads.",
    "highlight": true,
    "features": [
      "Company Page + 1 Founder Profile Ghostwriting",
      "8 Personal Brand Thought Leadership Articles/Posts",
      "6 High-Impact PDF Document Carousels",
      "LinkedIn Sponsored Content Ad Campaign Setup",
      "Lead Gen Form Integration with CRM/Email",
      "Dedicated B2B Marketing Strategist"
    ]
  },
  {
    "name": "Enterprise B2B Dominance",
    "badge": "High-Ticket B2B Scaling",
    "inrPrice": "48,000",
    "usdPrice": "749",
    "period": "/ month",
    "desc": "Full-scale enterprise B2B dominance across multiple executive profiles and sponsored campaigns.",
    "features": [
      "Company Page + 3 Executive Profile Ghostwriting",
      "16 High-Authority Thought Leadership Posts",
      "LinkedIn InMail, Video & Carousel Ad Funnels",
      "Account-Based Marketing (ABM) Company Targeting",
      "Direct CRM & Hubspot Lead Flow Integration",
      "Bi-Weekly Executive Strategy Consultations"
    ]
  }
],
    faqs: [
  {
    "q": "How does personal branding for founders help our business?",
    "a": "Posts from personal founder profiles generate up to 8x more organic engagement on LinkedIn than company pages, building authentic trust and opening doors to high-value partnerships."
  },
  {
    "q": "Can we target specific companies by name on LinkedIn?",
    "a": "Yes! Using Account-Based Marketing (ABM) on LinkedIn, we can upload your target company list and deliver ads specifically to their directors and executives."
  },
  {
    "q": "Do you integrate LinkedIn leads with our CRM?",
    "a": "Yes, we connect LinkedIn Lead Gen forms directly to HubSpot, Salesforce, Zoho, or email via webhooks for instant sales team notification."
  }
]
  };
  const pageData = usePackageData('linkedin-marketing-packages', defaultPageData);

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
              <span className="opseo-tag">B2B LEAD GEN & EXECUTIVE BRANDING</span>
              <h2 className="opseo-main-title">
                Best LinkedIn Marketing
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies builds enterprise-grade LinkedIn marketing funnels tailored for SaaS companies, IT consultancies, manufacturing leaders, and corporate service providers. We connect your brand directly with CEOs, CTOs, and purchasing directors.
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
            <span className="opseo-numbers-subtitle">B2B AUTHORITY</span>
            <h2>
              LinkedIn Lead Generation,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">250+</div>
              <div className="opseo-stat-line"></div>
              <p>B2B Enterprise Accounts</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">45K+</div>
              <div className="opseo-stat-line"></div>
              <p>Verified Decision-Maker Leads</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">10M+</div>
              <div className="opseo-stat-line"></div>
              <p>Targeted B2B Impressions</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Professional Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">LINKEDIN SUITE</span>
              <h2 className="opseo-include-title">
                What Do LinkedIn Marketing
                <span>Packages Include?</span>
              </h2>
              <p>Our LinkedIn marketing packages include company page management, CEO/Founder personal brand ghostwriting, professional PDF carousel documents, and laser-targeted LinkedIn Sponsored InMail and Feed ad campaigns.</p>
              <p>We target prospects by exact job titles, company size, industry vertical, and geographic seniority.</p>

              <div className="opseo-feature-list">
                <div key="Founder & Executive Ghostwriting Posts" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Founder & Executive Ghostwriting Posts
                </div>
                <div key="Corporate Company Page Content Management" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Corporate Company Page Content Management
                </div>
                <div key="High-Converting PDF Document Carousels" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-Converting PDF Document Carousels
                </div>
                <div key="Targeted Job Title & Industry Ad Campaigns" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Targeted Job Title & Industry Ad Campaigns
                </div>
                <div key="Lead Gen Form & InMail Sponsored Messaging" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Lead Gen Form & InMail Sponsored Messaging
                </div>
                <div key="Monthly B2B Pipeline & Lead Telemetry" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Monthly B2B Pipeline & Lead Telemetry
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="LinkedIn Marketing Packages" />
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
              <span>LinkedIn for B2B Growth</span>
            </h2>

            <div className="opseo-importance-content">
              <p>LinkedIn is the premier network for professional decision-makers, with over 900 million professionals and 4 out of 5 members driving business decisions. Unlike consumer networks, LinkedIn audiences have immediate commercial budget authority.</p>
              <p>Strategic thought leadership and targeted sponsored content position your enterprise as the obvious vendor of choice for high-ticket contracts.</p>
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
                Why B2B Leaders Choose
Webmok for
                <span>  LinkedIn Lead</span>
                <br />
                <span>Generation Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We understand enterprise sales cycles and B2B terminology. Our copywriters craft authoritative, insightful thought leadership that commands respect among industry peers.</p>
                <p>We configure precision LinkedIn Matched Audiences and lead gen forms with CRM integrations to feed qualified prospect meetings directly into your sales calendar.</p>
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
              <span className="opseo-benefits-tag">B2B ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of LinkedIn
                <span>Marketing Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>LinkedIn marketing packages generate predictable high-ticket B2B inquiries, build immense industry thought leadership, and recruit top talent effortlessly.</p>
                <p>Executive personal branding establishes your leadership team as definitive industry experts.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Direct Access to C-Suite Decision Makers" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Direct Access to C-Suite Decision Makers</span>
                </div>
                <div key="High-Ticket Inbound Contract Inquiries" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>High-Ticket Inbound Contract Inquiries</span>
                </div>
                <div key="Founder & Corporate Thought Leadership" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Founder & Corporate Thought Leadership</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="LinkedIn Marketing Packages" />
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

export default LinkedinMarketingPackagesPage;
