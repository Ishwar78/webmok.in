import React, { useState } from 'react';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaSearch,
  FaLink,
  FaStar,
  FaFileAlt,
  FaBuilding,
  FaShieldAlt,
  FaGlobeAmericas,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaCode,
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaCheckCircle,
  FaChevronDown,
  FaBolt,
  FaLayerGroup,
  FaChartLine,
  FaExternalLinkAlt,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './SeoServicesPage.css';

const SeoServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
    { num: '13+ yrs', label: 'Of SEO for Indian and global brands' },
    { num: '250+', label: 'Brands across B2B, industrial and consumer' },
    { num: '+565%', label: 'Best documented organic lift from client analytics' },
    { num: '15+', label: 'Case studies published with verified numbers' }
  ];

  const caseStudies = [
    {
      cat: 'B2B · Manufacturing',
      metric: '+565%',
      sub: 'organic traffic · 937,815 impressions',
      name: 'SKF Bearings',
      desc: 'A global industrial bearings leader that was effectively invisible in Indian organic search.',
      link: '/clients/case-studies'
    },
    {
      cat: 'B2B · Automotive',
      metric: '+522%',
      sub: 'organic sessions · 329,261 impressions',
      name: 'JBM Group',
      desc: 'Scaling a premier Indian component manufacturer into global markets through intent-driven search.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Education & EdTech',
      metric: '11×',
      sub: '1,406 → 15,467 monthly visitors in a year',
      name: 'Grab Guidance',
      desc: 'Building an online education portal from near zero organic presence into high-ranking topical authority.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Energy & Industrial',
      metric: '+574%',
      sub: 'organic traffic · 15,394 targeted sessions',
      name: 'Jakson Group',
      desc: 'Making an energy major searchable well beyond the gensets it was historically known for.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Home Decor & Coating',
      metric: '+285%',
      sub: 'five years of compounding organic growth',
      name: 'Sirca Paints',
      desc: 'A luxury Italian wood coatings brand grown steadily across high-intent domestic architectural search.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Power & Engineering',
      metric: '+245%',
      sub: 'organic traffic after a complete architecture rebuild',
      name: 'Sudhir Power',
      desc: 'A complete corporate website redesign and rebuild that tripled organic traffic with zero loss of legacy rankings.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Healthcare & Wellness',
      metric: '+240%',
      sub: 'organic traffic · 16,690 high-intent sessions',
      name: 'Dr. Haror\'s Wellness',
      desc: 'A clinic rebrand that was deeply strategic, driving sustained organic search consultations across Delhi NCR.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Real Estate & NCR',
      metric: '+142%',
      sub: 'organic traffic · 383,864 impressions',
      name: 'Omaxe Group',
      desc: 'Award-winning real estate SEO, capturing domestic buyers and high-ticket NRI demand from overseas markets.',
      link: '/clients/case-studies'
    },
    {
      cat: 'International · UAE',
      metric: '+41%',
      sub: 'organic sessions · 90,953 impressions in Dubai',
      name: 'RadiantBiz Dubai',
      desc: 'A UAE corporate business setup consultancy grown in one of the most competitive commercial markets.',
      link: '/clients/case-studies'
    }
  ];

  const seoDisciplines = [
    {
      badge: '01',
      icon: <FaLink />,
      title: 'Off-Page SEO & Authority Outreach',
      desc: 'WebMok engineers high-trust backlinks on high Domain Authority platforms, building unshakeable domain trust and driving top-tier rankings on major search engines.'
    },
    {
      badge: '02',
      icon: <FaCode />,
      title: 'On-Page SEO & Content Tuning',
      desc: 'Complete optimization of title tags, heading hierarchies, semantic HTML5, keyword intent clusters, internal link silos, and high-converting commercial copy.'
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: 'Technical SEO & Core Web Vitals',
      desc: 'Deep technical audits fixing crawl budgets, XML sitemaps, robots.txt directives, sub-second TTFB, canonical loops, and mobile render performance.'
    },
    {
      badge: '04',
      icon: <FaBuilding />,
      title: 'Enterprise & Corporate SEO',
      desc: 'Scalable keyword matrices and multi-department governance for high-volume enterprise architectures, delivering massive visibility across multi-category funnels.'
    },
    {
      badge: '05',
      icon: <FaMapMarkerAlt />,
      title: 'Local SEO & Google Map Pack',
      desc: 'Dominate localized 3-pack search results. We capture nearby high-intent prospective buyers seeking your specialized services in Delhi, Rohtak, Gurgaon, and Noida.'
    },
    {
      badge: '06',
      icon: <FaGlobeAmericas />,
      title: 'National & Multilingual Global SEO',
      desc: 'Tailored organic expansion for domestic pan-India and international markets using ccTLDs, hreflang directives, and localized regional search intent mapping.'
    },
    {
      badge: '07',
      icon: <FaStar />,
      title: 'Reputation Management (ORM) with SEO',
      desc: 'Suppressing misleading negative links while amplifying positive brand assets, executive bios, and authoritative corporate press coverage.'
    }
  ];

  const industries = [
    'Electronics & Technology',
    'Automotive & EV Mobility',
    'Manufacturing & Industrial',
    'Real Estate & Infrastructure',
    'Healthcare & Medical Clinics',
    'Education & E-Learning',
    'Pharmaceutical & Biotech',
    'Hospitality, Cafes & Hotels',
    'Food & Beverage (FMCG)',
    'Financial Services & Fintech',
    'Home Decor & Interior Design',
    'B2B Corporate Services'
  ];

  const faqs = [
    {
      q: 'What exactly is Search Engine Optimization (SEO)?',
      a: 'SEO is the systematic discipline of optimizing your digital platform to improve its organic visibility and rankings across search engines like Google, Bing, and AI answer engines. At WebMok, we combine foundational technical health, answer-engine schema (AEO), and generative engine authority (GEO) to drive sustainable paying customer inquiries.'
    },
    {
      q: 'How do I know if my business needs SEO services?',
      a: 'If your prospective customers use Google or AI assistants to search for the products or services you provide, SEO is non-negotiable. Without top 3 positions, over 70% of potential inbound clicks and commercial inquiries are captured directly by your competitors.'
    },
    {
      q: 'How long before we see measurable SEO ranking improvements?',
      a: 'Technical and on-page fixes typically deliver noticeable keyword ranking shifts within 45 to 60 days. Substantial, compounding organic traffic and qualified business inquiries accelerate exponentially between months 3 to 9 as domain authority builds.'
    },
    {
      q: 'Do you follow Google-safe white-hat methodologies?',
      a: '100% yes. We strictly adhere to Google Search Essentials and Webmaster Guidelines. We never use spammy automated link schemes or black-hat tactics, safeguarding your domain against algorithmic updates.'
    },
    {
      q: 'How do SEO, AEO, and GEO work together in your strategy?',
      a: 'SEO ensures search engines can crawl, render, and index your platform cleanly. AEO structures your content with schema markup so Google quotes you directly in AI Overviews and Rich Snippets. GEO builds third-party brand entity consensus so ChatGPT, Claude, Perplexity, and Gemini cite your brand by name.'
    },
    {
      q: 'Will we receive transparent ranking and traffic reports?',
      a: 'Yes. Every report is generated straight from your own Google Analytics 4 and Google Search Console accounts, with bi-weekly updates on keyword rankings, impression lifts, and inbound lead conversions.'
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
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>SEO Services</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Google Certified Partner Agency · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Best <span>SEO Services</span> in India & Delhi NCR
          </h1>
          <p className="wm-sp-hero-lead">
            At WebMok, India’s leading SEO agency delivers assured organic rankings, exponential traffic growth, and sustainable revenue expansion with proven technical strategies and expert optimization.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free SEO Audit <FaArrowRight />
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
                pageName="SEO Services"
                source="SEO Services Hero Section"
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
                Rated <strong>4.8 out of 5</strong> from <strong>250+ client reviews</strong> across Clutch, Google, AmbitionBox, and Facebook.
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
              <h2 className="wm-sp-card-title">SEO is the Foundation that AEO and GEO are Built On</h2>
              <p className="wm-sp-paragraph">
                If you are looking for premier SEO services, you already understand the power of search engine visibility. In modern search architecture, user discovery has expanded into three distinct surfaces: traditional Google search, AI Overviews, and conversational AI assistants like ChatGPT, Gemini, Perplexity, and Claude.
              </p>
              <p className="wm-sp-paragraph">
                Every one of these systems relies on the exact same foundation: crawling your platform, understanding your topical authority, and deciding whether your entity is trustworthy. <strong>You cannot skip to being cited by an AI without rock-solid SEO fundamentals</strong> — which is why WebMok executes three interconnected layers.
              </p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">How We Work</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Layers, Built in Order</h2>
              <p className="wm-dsm-stack__lede">
                Agencies selling standalone AI tactics are selling the roof without the walls. Each layer only succeeds because the foundation beneath it is robust.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">SEO</h3>
                  <span className="wm-dsm-layer__role">The Core Foundation</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Everything else depends on this. If a crawler cannot reach a page, render it cleanly, and index what it is about, no amount of advanced tactics will help.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Technical health: crawlability, indexation & Core Web Vitals</li>
                  <li>Site architecture and internal link topical clustering</li>
                  <li>High-buyer intent keyword mapping across the funnel</li>
                  <li>Deep content architecture on commercial conversion pages</li>
                  <li>Authority building through digital PR and high-trust links</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">AEO</h3>
                  <span className="wm-dsm-layer__role">Answer Engine Optimization</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Structuring your platform so search engines can lift your answers cleanly as rich snippets and Google AI Overviews before a user clicks.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Schema and structured JSON-LD data across all templates</li>
                  <li>Question-and-answer formats matching natural language queries</li>
                  <li>Unambiguous entity identification: organization, products & geo</li>
                  <li>Featured-snippet and "People Also Ask" algorithmic targeting</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">GEO</h3>
                  <span className="wm-dsm-layer__role">Generative Engine Optimization</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Earning direct citations inside AI-generated responses across ChatGPT, Claude, Perplexity, and Gemini through authority consensus.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Consistent brand entity recognition across major digital web indexes</li>
                  <li>Third-party corroboration: business directories, press & verified reviews</li>
                  <li>Machine-readable signals and structured entity graph optimization</li>
                  <li>Continuous tracking of AI model brand mentions and citations</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure all three layers.</strong> Rankings and traffic are monitored via live Search Console and GA4 dashboards.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Talk to an SEO Specialist &rarr;
                </button>
              </div>
            </section>

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">SEO Results, from Client Analytics</h2>
              <p className="wm-sp-paragraph">
                Every figure below comes directly from verified Google Analytics and Google Search Console performance data across enterprise engagements.
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

            {/* Types of SEO Services Disciplines */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive Types of SEO Services</h2>
              <p className="wm-sp-paragraph">
                Our team provides specialized optimization tailored to your precise commercial objectives:
              </p>
              <div className="wm-sp-disciplines-grid">
                {seoDisciplines.map((item, idx) => (
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
              <h2 className="wm-sp-card-title">SEO Solutions for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                WebMok has formulated battle-tested organic ranking playbooks across all major consumer and B2B sectors:
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
              <h2 className="wm-sp-card-title">SEO, AEO & GEO Transparent Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting plans so you can size the scope with complete transparency. Every plan covers all three layers:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  {/* Starter */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Starter Plan</p>
                    <div className="wm-seopk__amt">₹50,000</div>
                    <p className="wm-seopk__gst">+ GST per month</p>
                    <p className="wm-seopk__per">Best for single category or localized market</p>
                    <span className="wm-seopk__kw">30 Keywords</span>
                    <ul className="wm-seopk__l">
                      <li><b>30 target keywords</b> researched and tracked</li>
                      <li>Technical SEO audit and Core Web Vitals fixes</li>
                      <li>On-page meta tags & content optimization</li>
                      <li>Monthly GA4 & Search Console reporting</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={onOpenEnquiry}>
                      Choose Starter &rarr;
                    </button>
                  </div>

                  {/* Growth */}
                  <div className="wm-seopk__c wm-seopk__c--hi">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Growth Plan</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST per month</p>
                    <p className="wm-seopk__per">Best for multi-category or regional scaling</p>
                    <span className="wm-seopk__kw">50 Keywords</span>
                    <ul className="wm-seopk__l">
                      <li><b>50 target keywords</b> tracked across regions</li>
                      <li>Everything in Starter, at deeper technical execution</li>
                      <li>Topical authority content clustering & internal linking</li>
                      <li>High-authority digital PR & earned backlink outreach</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={onOpenEnquiry}>
                      Choose Growth &rarr;
                    </button>
                  </div>

                  {/* Scale */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Scale Plan</p>
                    <div className="wm-seopk__amt">₹1.25 Lakh</div>
                    <p className="wm-seopk__gst">+ GST per month</p>
                    <p className="wm-seopk__per">Best for high-competition or national brands</p>
                    <span className="wm-seopk__kw">80 Keywords</span>
                    <ul className="wm-seopk__l">
                      <li><b>80 target keywords</b> with deep intent mapping</li>
                      <li>Everything in Growth, across multiple target markets</li>
                      <li>Comprehensive AEO schema & Google AI Overview targeting</li>
                      <li>Bi-weekly executive synchronization & sprint reviews</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={onOpenEnquiry}>
                      Choose Scale &rarr;
                    </button>
                  </div>

                  {/* Dedicated Specialist */}
                  <div className="wm-seopk__c wm-seopk__c--dark">
                    <p className="wm-seopk__nm">Dedicated Retainer</p>
                    <div className="wm-seopk__amt">₹2 Lakh</div>
                    <p className="wm-seopk__gst">+ GST per month</p>
                    <p className="wm-seopk__per">Best when keyword caps restrict growth</p>
                    <span className="wm-seopk__kw">No Keyword Cap</span>
                    <ul className="wm-seopk__l">
                      <li><b>Two dedicated senior specialists</b> embedded on your brand</li>
                      <li><b>No keyword limit</b> — scope governed by business revenue targets</li>
                      <li>Full AEO, GEO, and international search governance</li>
                      <li>Essentially an elite in-house SEO team without hiring overhead</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={onOpenEnquiry}>
                      Hire Dedicated Team &rarr;
                    </button>
                  </div>
                </div>

                <div className="wm-seopk__inc">
                  <h3>Included in Every Plan</h3>
                  <div className="wm-seopk__incg">
                    <span>Technical SEO & site health</span>
                    <span>On-page tags & metadata</span>
                    <span>Content strategy & briefs</span>
                    <span>Internal linking structure</span>
                    <span>Schema JSON-LD structured data</span>
                    <span>AEO & GEO readiness auditing</span>
                    <span>Core Web Vitals monitoring</span>
                    <span>Direct Google Analytics 4 reporting</span>
                  </div>
                </div>

                <p className="wm-seopk__note">
                  <b>How to choose:</b> Starter and Growth are tiered by target keyword volume for businesses with focused product lines. The Dedicated Retainer provides unlimited keyword scope for dynamic enterprises where overall customer acquisition volume is the primary benchmark.
                </p>
              </div>
            </div>

            {/* Instant Free SEO Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">WebMok Audit Engine <i>Free</i></span>
                  <h2>See What is Holding Your Website Back in 30 Seconds</h2>
                  <p>
                    Type your domain URL below to evaluate <b>60+ technical and on-page ranking signals</b>, Core Web Vitals health, and AI answer readiness.
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
                      Run Free Audit &rarr;
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
                    <span><b>60-point scorecard</b> covering technical, indexation, and content health</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>AEO & GEO readiness</b> — whether AI assistants can cite your platform</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Core Web Vitals & speed</b> measured across mobile & desktop devices</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Prioritized action plan</b> — the top fixes in order of commercial impact</span>
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

export default SeoServicesPage;

