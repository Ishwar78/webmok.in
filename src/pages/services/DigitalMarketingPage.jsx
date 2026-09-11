import React, { useState } from 'react';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaBullhorn,
  FaSearch,
  FaMousePointer,
  FaChartPie,
  FaEnvelope,
  FaSyncAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaChevronDown,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './DigitalMarketingPage.css';

const DigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
    { num: '12+ yrs', label: 'Of digital marketing excellence & innovation' },
    { num: '500+', label: 'Global and Indian brands scaled profitably' },
    { num: '4.8×', label: 'Average documented customer acquisition ROI' },
    { num: '99.2%', label: 'Long-term client retention & satisfaction rate' }
  ];

  const caseStudies = [
    {
      cat: 'Manufacturing · Global',
      metric: '+565%',
      sub: 'Organic traffic growth · 8.2x inquiries',
      name: 'SKF India Solutions',
      desc: 'Holistic 360-degree digital transformation unifying enterprise SEO, AEO schema architecture, and technical Core Web Vitals optimization.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Home Decor & Coating',
      metric: '5.2×',
      sub: 'Blended ROAS · 45,000+ social community',
      name: 'Sirca Paints Italy',
      desc: 'Omnichannel campaign combining influencer collaborations, YouTube video ads, and localized Google Maps ranking.',
      link: '/clients/case-studies'
    },
    {
      cat: 'EdTech & Coaching',
      metric: '11×',
      sub: 'Inbound student registrations',
      name: 'Grab Guidance',
      desc: 'Integrated growth strategy combining high-intent Google search ads, viral Reels content marketing, and automated WhatsApp nurturing.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Real Estate & Housing',
      metric: '3.4×',
      sub: 'Pipeline value · ₹42Cr property sales',
      name: 'Omaxe Real Estate',
      desc: 'Multi-touch digital marketing capturing high-net-worth investors across Delhi NCR, Haryana, and NRI diaspora.',
      link: '/clients/case-studies'
    },
    {
      cat: 'International · UAE',
      metric: '₹1.2 Cr',
      sub: 'Closed inbound corporate contracts',
      name: 'RadiantBiz Dubai',
      desc: 'Full-funnel digital dominance across Google Search, localized landing pages, and instant 28-second callback integration.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Healthcare & Wellness',
      metric: '+240%',
      sub: 'Patient appointment bookings',
      name: "Dr. Haror's Wellness",
      desc: 'Hyper-local SEO combined with geo-targeted Instagram video ads driving verified clinic walk-ins.',
      link: '/clients/case-studies'
    }
  ];

  const disciplines = [
    {
      badge: '01',
      icon: <FaSearch />,
      title: 'Search Engine Optimization (SEO & AEO)',
      desc: 'Dominate organic search results and get quoted directly in AI Overviews, ChatGPT, and Google rich snippets.'
    },
    {
      badge: '02',
      icon: <FaMousePointer />,
      title: 'High-ROAS Paid Ads (Google & Meta)',
      desc: 'Scale high-converting paid search, shopping, video, and social campaigns with granular negative keyword and audience sculpting.'
    },
    {
      badge: '03',
      icon: <FaBullhorn />,
      title: 'Content Marketing & Brand Copywriting',
      desc: 'Topical authority clusters, high-converting commercial copy, and corporate thought leadership that builds buyer trust.'
    },
    {
      badge: '04',
      icon: <FaChartPie />,
      title: 'Social Media Management & Studio',
      desc: 'Engaging visual branding, viral video reels, and active community management across Instagram, LinkedIn, and YouTube.'
    },
    {
      badge: '05',
      icon: <FaEnvelope />,
      title: 'Marketing Automation & Email Drips',
      desc: 'Nurture prospective leads into repeat purchasers with automated lifecycle emails, SMS triggers, and WhatsApp chatbots.'
    },
    {
      badge: '06',
      icon: <FaSyncAlt />,
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Data-driven landing page optimization, heatmaps, and A/B split testing to maximize revenue per site visitor.'
    }
  ];

  const industries = [
    'Electronics & Technology',
    'Real Estate & Infrastructure',
    'E-Commerce & D2C Brands',
    'Manufacturing & Industrial',
    'Healthcare & Medical Clinics',
    'Education, Coaching & EdTech',
    'Automotive & EV Dealerships',
    'Financial Services & Fintech',
    'Hospitality & Tourism',
    'Home Decor & Interior Design',
    'Food & Beverage (FMCG)',
    'B2B Corporate Services'
  ];

  const faqs = [
    {
      q: 'What is included in 360° Digital Marketing services?',
      a: 'Our 360° digital marketing combines organic search optimization (SEO/AEO), high-ROAS paid advertising (Google & Meta), creative content production, social media community management, email automation, and conversion rate optimization (CRO).'
    },
    {
      q: 'How does WebMok measure marketing success?',
      a: 'We track real commercial business metrics: Cost-Per-Acquisition (CPA), Return on Ad Spend (ROAS), Sales-Qualified Leads (SQLs), and closed revenue attribution via live GA4 and Looker Studio dashboards.'
    },
    {
      q: 'How quickly can we expect to see tangible results?',
      a: 'Paid ad campaigns deliver qualified inquiries within 48 to 72 hours of launch. Organic SEO, content authority clustering, and brand positioning compound exponentially from months 3 through 9.'
    },
    {
      q: 'Will we have a dedicated account manager?',
      a: 'Yes. Every client is assigned a dedicated Account Strategist, accompanied by specialist leads in SEO, paid media, creative design, and copy.'
    },
    {
      q: 'Can you customize packages based on our specific budget?',
      a: 'Absolutely. We formulate tailored digital growth roadmaps aligned precisely with your industry vertical, market size, and commercial revenue objectives.'
    },
    {
      q: 'Do you work with international brands outside India?',
      a: 'Yes! We actively manage digital marketing and lead acquisition for clients across the United States, UAE/Dubai, Canada, the United Kingdom, and Australia.'
    }
  ];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Digital Marketing</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Complete 360° Growth Agency · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            360° <span>Digital Marketing</span> & Growth Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Scale brand authority, capture high-intent buyers, and maximize omnichannel customer lifetime value with integrated digital marketing strategies engineered by WebMok.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free Growth Strategy <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Seconds
            </button>
          </div>

          {/* 4-Metric Performance Bar */}
          <div className="wm-seost">
            {stats.map((st, i) => (
              <div key={i} className="wm-seost__i">
                <p className="wm-seost__n">{st.num}</p>
                <p className="wm-seost__l">{st.label}</p>
              </div>
            ))}
          </div>
        
            </div>
            <div className="wm-sp-hero-col-right">
              <HeroLeadForm
                pageName="Digital Marketing"
                source="Digital Marketing Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rating Scorecard Badge */}
      <div className="wm-dsm-rating-wrap">
        <div className="wm-sp-container">
          <div className="wm-dsm-rating">
            <div className="wm-dsm-rating__score">
              <span className="wm-dsm-rating__num">4.8</span>
              <span className="wm-dsm-rating__out">/5</span>
            </div>
            <div>
              <div className="wm-dsm-rating__stars" aria-hidden="true">★★★★★</div>
              <p className="wm-dsm-rating__meta">
                Rated <strong>4.8 out of 5</strong> from <strong>350+ brand reviews</strong> across Clutch, Google, AmbitionBox, and GoodFirms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Stop Siloing Your Marketing: Build an Omnichannel Growth Engine</h2>
              <p className="wm-sp-paragraph">
                Isolated marketing tactics — running ads without conversion-optimized pages, or doing SEO without social proof — waste enormous capital. True commercial acceleration occurs when every digital touchpoint reinforces the other.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we harmonize high-intent search visibility, hyper-targeted performance advertising, brand storytelling, and automated retention workflows into a unified, scalable growth engine that compounds your return on investment month over month.
              </p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Growth Architecture</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Growth Layers</h2>
              <p className="wm-dsm-stack__lede">
                Sustainable digital scale requires a rock-solid foundation, followed by aggressive customer acquisition and long-term customer retention.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Organic Foundation</h3>
                  <span className="wm-dsm-layer__role">Search Authority & Core Technical Health</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Building your organic digital moat through enterprise technical SEO, topical authority clustering, and AI answer engine schema (AEO).
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Comprehensive technical SEO and Core Web Vitals optimization</li>
                  <li>Commercial keyword intent mapping across all products/services</li>
                  <li>Schema JSON-LD data markup for Google AI Overviews and rich snippets</li>
                  <li>High-authority digital PR and trustworthy backlink acquisition</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Paid Acquisition</h3>
                  <span className="wm-dsm-layer__role">High-ROAS Paid Search & Social Ads</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Capturing immediate buyer demand and scaling profitable customer acquisition through Google Ads, Meta Ads, and Performance Max.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Google Search, Shopping & Performance Max campaign architecture</li>
                  <li>Meta & Instagram high-converting visual video and carousel ads</li>
                  <li>Multi-device dynamic remarketing across web and social feeds</li>
                  <li>Sub-second landing pages with 1-click WhatsApp and call conversion triggers</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Retention & Brand Loyalty</h3>
                  <span className="wm-dsm-layer__role">Lifecycle Automation & Community Building</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Maximizing customer lifetime value (LTV) and corporate reputation through email nurturing, social engagement, and online reputation management.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Automated email drip sequences, cart recovery, and VIP workflows</li>
                  <li>Consistent, premium social media visual branding and thought leadership</li>
                  <li>Proactive Google Business review generation and ORM monitoring</li>
                  <li>Executive reporting dashboards linking spend directly to net profit</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We deliver transparent end-to-end revenue tracking.</strong> Receive bi-weekly sprint reviews and live Looker Studio performance dashboards.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Talk to a Digital Marketing Strategist &rarr;
                </button>
              </div>
            </section>

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Digital Marketing Results, from Client Analytics</h2>
              <p className="wm-sp-paragraph">
                Every metric below is pulled directly from verified client analytics, ad accounts, and transaction records:
              </p>
              <div className="wm-seocs__grid">
                {caseStudies.map((cs, idx) => (
                  <div key={idx} className="wm-seocs__c">
                    <p className="wm-seocs__cat">{cs.cat}</p>
                    <div className="wm-seocs__big">{cs.metric}</div>
                    <p className="wm-seocs__met">{cs.sub}</p>
                    <h3 className="wm-seocs__nm">{cs.name}</h3>
                    <p className="wm-seocs__d">{cs.desc}</p>
                    <div className="wm-seocs__actions">
                      <button
                        type="button"
                        className="wm-seocs-btn-inquiry"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`${cs.name} - Case Study Inquiry`)}
                        title="Request an Inquiry"
                      >
                        <FaPaperPlane /> Inquire
                      </button>
                      <button
                        type="button"
                        className="wm-seocs-btn-call"
                        onClick={onOpenCallMe}
                        title="Call Webmok"
                      >
                        <FaPhoneAlt /> Call
                      </button>
                      <a
                        href={`https://wa.me/918684031003?text=${encodeURIComponent(`Hi Webmok Team, I am interested in case study: ${cs.name} (${cs.metric})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wm-seocs-btn-whatsapp"
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive 360° Digital Marketing Disciplines</h2>
              <p className="wm-sp-paragraph">
                We deliver an integrated suite of full-funnel digital capabilities:
              </p>
              <div className="wm-sp-disciplines-grid">
                {disciplines.map((item, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <span className="wm-sp-fi-badge">{item.badge}</span>
                    <div className="wm-sp-fi-icon">{item.icon}</div>
                    <h3 className="wm-sp-fi-title">{item.title}</h3>
                    <p className="wm-sp-fi-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Verticals */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Digital Growth for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                Proven marketing playbooks optimized for specific sector nuances and buyer behavior:
              </p>
              <div className="wm-sp-industries-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="wm-sp-industry-chip">
                    <span className="wm-sp-chip-dot"></span>
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Tier Transparent Packages */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">360° Growth Transparent Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting plans so you can evaluate scope with complete transparency:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  {/* Starter */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Starter Growth</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Best for focused regional brands</p>
                    <span className="wm-seopk__kw">SEO + Google Ads</span>
                    <ul className="wm-seopk__l">
                      <li>25 target SEO keywords & technical fixes</li>
                      <li>Google Search Ads campaign management</li>
                      <li>Monthly GA4 & Search Console reporting</li>
                      <li>Dedicated account manager</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={onOpenEnquiry}>
                      Choose Starter &rarr;
                    </button>
                  </div>

                  {/* Growth */}
                  <div className="wm-seopk__c wm-seopk__c--hi">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Omnichannel Growth</p>
                    <div className="wm-seopk__amt">₹85,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Best for aggressive multi-channel scaling</p>
                    <span className="wm-seopk__kw">SEO + Paid Ads + Social Studio</span>
                    <ul className="wm-seopk__l">
                      <li>50 target SEO keywords + AEO Schema</li>
                      <li>Google Ads + Meta Paid Social Funnels</li>
                      <li>12 custom creative social media assets & reels</li>
                      <li>Conversion rate optimization & Looker Studio dashboard</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={onOpenEnquiry}>
                      Choose Growth &rarr;
                    </button>
                  </div>

                  {/* Scale */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Scale Enterprise</p>
                    <div className="wm-seopk__amt">₹1.40 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Best for high-competition or national brands</p>
                    <span className="wm-seopk__kw">Full-Funnel 360° Domination</span>
                    <ul className="wm-seopk__l">
                      <li>80+ keywords, AEO, GEO & PR link building</li>
                      <li>Full-funnel Google, Meta & YouTube video ads</li>
                      <li>20 social assets + email drip automation</li>
                      <li>Bi-weekly sprint reviews & dedicated copy team</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={onOpenEnquiry}>
                      Choose Scale &rarr;
                    </button>
                  </div>

                  {/* Dedicated Squad */}
                  <div className="wm-seopk__c wm-seopk__c--dark">
                    <p className="wm-seopk__nm">Dedicated 360° Growth Squad</p>
                    <div className="wm-seopk__amt">₹2.25 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Complete outsourced marketing department</p>
                    <span className="wm-seopk__kw">Dedicated 5-Person Team</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated SEO Lead + Media Buyer + Designer + Copywriter</li>
                      <li>Unlimited scope across all digital touchpoints</li>
                      <li>Real-time Slack collaboration & weekly growth sprints</li>
                      <li>Custom CRM workflows & executive attribution model</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={onOpenEnquiry}>
                      Hire Dedicated Squad &rarr;
                    </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Instant Free 360 Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">360° Growth Audit <i>Free</i></span>
                  <h2>Discover Your Biggest Growth Bottlenecks in 30 Seconds</h2>
                  <p>
                    Enter your website URL to receive a comprehensive <b>360° Digital Growth Scorecard</b> covering SEO health, paid ad leakage, speed, and conversion friction.
                  </p>
                  <form className="wm-rsau__form" onSubmit={handleAuditSubmit}>
                    <input
                      className="wm-rsau__in"
                      type="text"
                      placeholder="https://yoursite.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      required
                    />
                    <button className="wm-rsau__go" type="submit">
                      Run Free 360° Audit &rarr;
                    </button>
                  </form>
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Detailed scorecard delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Audit Includes</p>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>SEO, AEO & indexation health</b> check</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Paid ad competitor benchmark</b> and keyword gaps</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Mobile speed & Core Web Vitals</b> performance</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Prioritized 90-day action plan</b> to 3x qualified inbound pipeline</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <div className="wm-sp-faq-list">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`wm-sp-faq-item ${openFaq === idx ? 'open' : ''}`}
                  >
                    <div
                      className="wm-sp-faq-q"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    >
                      <span>
                        <span className="wm-sp-faq-badge">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        {faq.q}
                      </span>
                      <FaChevronDown className="wm-sp-faq-chevron" />
                    </div>
                    {openFaq === idx && <p className="wm-sp-faq-a">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
