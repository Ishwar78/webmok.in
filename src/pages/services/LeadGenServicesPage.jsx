import React, { useState } from 'react';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaUserCheck,
  FaEnvelopeOpenText,
  FaLinkedin,
  FaBullseye,
  FaChartLine,
  FaCogs,
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaChevronDown,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './LeadGenServicesPage.css';

const LeadGenServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
    { num: '8+ yrs', label: 'Of enterprise B2B lead generation mastery' },
    { num: '2.5M+', label: 'Verified B2B & B2C qualified leads delivered' },
    { num: '3.8×', label: 'Average sales pipeline velocity expansion' },
    { num: '98.5%', label: 'Decision-maker contact verification rate' }
  ];

  const caseStudies = [
    {
      cat: 'B2B Auto & Industrial',
      metric: '11×',
      sub: 'Enterprise inquiries · ₹18.5Cr pipeline',
      name: 'JBM Group Auto',
      desc: 'Account-Based Marketing (ABM) targeting tier-1 OEM procurement directors with verified RFP conversion pipelines.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Enterprise SaaS',
      metric: '420+',
      sub: 'Sales Qualified Leads (SQLs) · -38% CAC',
      name: 'CloudScale ERP',
      desc: 'Multi-touch LinkedIn InMail sequences and interactive ROI calculator funnels booking demo calls directly onto sales calendars.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Fintech & Corporate UAE',
      metric: '+315%',
      sub: 'High-net-worth investor inquiries',
      name: 'RadiantBiz Dubai',
      desc: 'Laser-focused Google Ads and WhatsApp lead generation for business setup and offshore corporate licensing.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Industrial Engineering',
      metric: '+180%',
      sub: 'Verified Genset & Power RFQs',
      name: 'Sudhir Power Systems',
      desc: 'Hyper-targeted industrial buyer campaigns capturing construction contractors and factory plant heads.',
      link: '/clients/case-studies'
    },
    {
      cat: 'EdTech & Coaching',
      metric: '14,500+',
      sub: 'Direct student enrollment leads',
      name: 'Grab Guidance',
      desc: 'High-converting Meta Reels and WhatsApp chatbot inquiry funnels with 28-second counselor callbacks.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Luxury Real Estate',
      metric: '1,240',
      sub: 'Verified HNI apartment buyers',
      name: 'Omaxe Properties',
      desc: 'Exclusive geo-fenced NRI campaigns driving verified luxury villa and penthouse booking appointments.',
      link: '/clients/case-studies'
    }
  ];

  const disciplines = [
    {
      badge: '01',
      icon: <FaEnvelopeOpenText />,
      title: 'B2B Cold Email & Outbound Sequences',
      desc: 'Deliverability-guaranteed multi-inbox cold email campaigns reaching C-level decision-makers with personalized value propositions.'
    },
    {
      badge: '02',
      icon: <FaLinkedin />,
      title: 'LinkedIn Lead Gen & Social Selling',
      desc: 'Automated executive outreach, LinkedIn InMail, and thought-leadership content nurturing qualified corporate prospects.'
    },
    {
      badge: '03',
      icon: <FaBullseye />,
      title: 'Account-Based Marketing (ABM)',
      desc: 'Custom-tailored marketing campaigns built around high-value enterprise dream accounts to shorten multi-month sales cycles.'
    },
    {
      badge: '04',
      icon: <FaChartLine />,
      title: 'High-Converting Paid Lead Funnels',
      desc: 'Laser-targeted Google Search, Meta instant forms, and YouTube action ads driving frictionless inbound inquiries.'
    },
    {
      badge: '05',
      icon: <FaUserCheck />,
      title: 'Lead Scoring & BANT Qualification',
      desc: 'Pre-screening prospective leads by Budget, Authority, Need, and Timeline before handing them over to your sales closers.'
    },
    {
      badge: '06',
      icon: <FaCogs />,
      title: 'CRM Automation & Instant Callbacks',
      desc: 'Seamless real-time lead routing into HubSpot, Salesforce, Zoho, and automated 28-second callback integration.'
    }
  ];

  const industries = [
    'B2B Corporate & Consulting',
    'Enterprise SaaS & Software',
    'Industrial & Manufacturing',
    'Real Estate & Luxury Housing',
    'Healthcare & Medical Clinics',
    'Financial Services & Fintech',
    'Education & EdTech',
    'Logistics & Supply Chain',
    'Hospitality & Travel',
    'Automotive & Dealerships',
    'E-Commerce & Retail',
    'Legal & Advisory Services'
  ];

  const faqs = [
    {
      q: 'How do you guarantee lead quality over quantity?',
      a: 'We implement rigorous multi-stage qualification including custom questionnaire filters, OTP verification, and BANT pre-screening so your sales team only spends time talking to legitimate decision-makers.'
    },
    {
      q: 'What is the average turnaround time to receive the first leads?',
      a: 'For paid inbound funnels, leads begin flowing within 3 to 5 days of campaign launch. For outbound ABM and email sequences, prospect warm-up and initial replies occur within 7 to 14 days.'
    },
    {
      q: 'Can leads be synced directly to our existing CRM?',
      a: 'Yes. We provide native real-time webhook and API integrations with HubSpot, Salesforce, Zoho CRM, LeadSquared, Pipedrive, and WhatsApp Business.'
    },
    {
      q: 'What data sources do you use for B2B list building?',
      a: 'We leverage enterprise verified databases (Apollo, ZoomInfo, LinkedIn Sales Navigator) cross-referenced with real-time SMTP ping validation to maintain a 98%+ deliverability rate.'
    },
    {
      q: 'Do you create the ad creatives and landing pages?',
      a: 'Yes, our turnkey service includes custom conversion copy, visual creative assets, interactive quiz/lead capture pages, and A/B testing.'
    },
    {
      q: 'What is the pricing model for lead generation services?',
      a: 'We operate on transparent monthly retainers based on pipeline volume, campaign complexity, and channel scope with zero hidden costs.'
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
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Lead Generation</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Premier Demand Generation Partner · #Pipeline Velocity
          </span>
          <h1 className="wm-sp-hero-title">
            B2B <span>Lead Generation</span> & Demand Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Accelerate your revenue pipeline with verified, high-intent B2B inquiries and qualified customer conversations generated through data-backed omnichannel acquisition funnels.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Build Your Pipeline <FaArrowRight />
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
                pageName="Lead Generation"
                source="Lead Generation Hero Section"
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
              <span className="wm-dsm-rating__num">4.9</span>
              <span className="wm-dsm-rating__out">/5</span>
            </div>
            <div>
              <div className="wm-dsm-rating__stars" aria-hidden="true">★★★★★</div>
              <p className="wm-dsm-rating__meta">
                Rated <strong>4.9 out of 5</strong> from <strong>280+ enterprise client reviews</strong> across Clutch, G2, Trustpilot, and AmbitionBox.
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
              <h2 className="wm-sp-card-title">Transform Cold Audiences into Booked Sales Meetings</h2>
              <p className="wm-sp-paragraph">
                Scaling modern B2B and high-ticket B2C revenue requires more than generic contact lists. It demands a scientific demand-generation engine that identifies your Ideal Customer Profile (ICP), personalizes touchpoints across multiple channels, and qualifies intent before passing leads to your sales closers.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we construct end-to-end inbound and outbound pipelines. By unifying cold email automation, LinkedIn social selling, high-intent paid search, and custom interactive landing funnels, we consistently feed your sales calendar with qualified, ready-to-buy decision-makers.
              </p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Acquisition Framework</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Lead Generation Layers</h2>
              <p className="wm-dsm-stack__lede">
                Consistent sales pipeline velocity only happens when data accuracy, multi-touch messaging, and rapid CRM qualification work in total harmony.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Data & ICP Precision</h3>
                  <span className="wm-dsm-layer__role">Audience Enrichment & Decision-Maker Mapping</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Building verified, spam-free contact datasets filtered by firmographics, technographics, employee count, and buying trigger events.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Direct C-Suite, VP, and Director contact intelligence</li>
                  <li>Real-time SMTP and MX record verification with zero bounce guarantees</li>
                  <li>Account tiering and intent signal tracking across industry sectors</li>
                  <li>Custom domain infrastructure and mailbox warmup protocols</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Omnichannel Sequences</h3>
                  <span className="wm-dsm-layer__role">Multi-Touch Inbound & Outbound Funnels</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Engaging prospective decision-makers through personalized email cadences, LinkedIn messaging, and high-converting paid search & social ads.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Hyper-personalized value propositions and pain-point copywriting</li>
                  <li>Multi-step follow-up sequences across email, social, and SMS</li>
                  <li>High-converting landing page funnels with 1-click booking</li>
                  <li>Retargeting sequences keeping your brand top-of-mind</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Qualification & Pipeline Sync</h3>
                  <span className="wm-dsm-layer__role">BANT Scoring & Real-Time CRM Routing</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Pre-qualifying inbound leads and syncing meetings directly into your sales reps' calendars and CRM pipeline.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>BANT (Budget, Authority, Need, Timeline) question filtering</li>
                  <li>Real-time webhook routing to HubSpot, Salesforce, and Zoho</li>
                  <li>Automated 28-second callback triggers for hot incoming leads</li>
                  <li>Weekly pipeline analytics and Cost-Per-Qualified-Lead (CPQL) reporting</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure Sales Qualified Leads (SQLs) and Closed Revenue.</strong> You get complete pipeline transparency with zero guesswork.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Talk to a Demand Gen Specialist &rarr;
                </button>
              </div>
            </section>

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Lead Gen Results, from Client Analytics</h2>
              <p className="wm-sp-paragraph">
                Every metric below represents verified customer pipeline expansion across enterprise and high-growth commercial partnerships:
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
              <h2 className="wm-sp-card-title">Comprehensive Lead Generation Disciplines</h2>
              <p className="wm-sp-paragraph">
                We combine outbound hunting with inbound attraction to build unstoppable pipeline momentum:
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
              <h2 className="wm-sp-card-title">Lead Generation for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                Customized buyer persona mapping across key high-value industry verticals:
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
              <h2 className="wm-sp-card-title">Demand Generation Transparent Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting plans so you can evaluate scope and pipeline volume with full clarity:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  {/* Starter */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Starter Pipeline</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Best for single product or early-stage B2B</p>
                    <span className="wm-seopk__kw">500+ Verified Contacts</span>
                    <ul className="wm-seopk__l">
                      <li>500+ verified decision-maker prospects / mo</li>
                      <li>Cold email sequence copywriting & inbox warmup</li>
                      <li>Basic lead scoring & email notification</li>
                      <li>Monthly conversion & reply report</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={onOpenEnquiry}>
                      Choose Starter &rarr;
                    </button>
                  </div>

                  {/* Growth */}
                  <div className="wm-seopk__c wm-seopk__c--hi">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Growth Pipeline</p>
                    <div className="wm-seopk__amt">₹65,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Best for scaling inbound & outbound pipeline</p>
                    <span className="wm-seopk__kw">1,500+ Contacts + Paid Funnel</span>
                    <ul className="wm-seopk__l">
                      <li>1,500+ verified prospects + Paid Social Lead Funnel</li>
                      <li>LinkedIn Sales Navigator outreach integration</li>
                      <li>Custom high-converting lead capture landing page</li>
                      <li>Direct CRM sync & bi-weekly strategy calls</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={onOpenEnquiry}>
                      Choose Growth &rarr;
                    </button>
                  </div>

                  {/* Scale */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Scale Enterprise</p>
                    <div className="wm-seopk__amt">₹1.10 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Best for high-ticket ABM enterprise deals</p>
                    <span className="wm-seopk__kw">3,500+ Contacts + Full ABM</span>
                    <ul className="wm-seopk__l">
                      <li>Account-Based Marketing targeting tier-1 accounts</li>
                      <li>Multi-channel cold email + LinkedIn + Meta + Search</li>
                      <li>BANT pre-qualification by dedicated SDR manager</li>
                      <li>Weekly pipeline sync & direct Slack support</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={onOpenEnquiry}>
                      Choose Scale &rarr;
                    </button>
                  </div>

                  {/* Dedicated Retainer */}
                  <div className="wm-seopk__c wm-seopk__c--dark">
                    <p className="wm-seopk__nm">Dedicated SDR Squad</p>
                    <div className="wm-seopk__amt">₹1.80 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">For enterprise organizations needing outsourced SDR</p>
                    <span className="wm-seopk__kw">Dedicated SDR Team</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated SDR + Data Researcher + Campaign Lead</li>
                      <li>Unlimited customized outreach & live meeting booking</li>
                      <li>Custom CRM workflows & sales enablement collateral</li>
                      <li>Real-time dashboard and enterprise SLA guarantee</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={onOpenEnquiry}>
                      Hire Dedicated Squad &rarr;
                    </button>
                  </div>
                </div>

                <div className="wm-seopk__inc">
                  <h3>Included in Every Plan</h3>
                  <div className="wm-seopk__incg">
                    <span>Verified C-Suite contact data</span>
                    <span>100% spam-safe mailbox warmup</span>
                    <span>Custom conversion copywriting</span>
                    <span>CRM integration & webhook sync</span>
                    <span>Lead qualification & filtering</span>
                    <span>Transparent weekly pipeline tracking</span>
                    <span>Zero duplicate contact guarantee</span>
                    <span>Dedicated account strategist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Free Lead Diagnostic Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Pipeline Diagnostic <i>Free</i></span>
                  <h2>Find Where Your Sales Funnel Is Leaking Revenue</h2>
                  <p>
                    Submit your website URL to get a comprehensive <b>Pipeline & CAC Diagnostic</b> evaluating your lead capture efficiency, B2B audience reach, and sales cycle friction.
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
                      Get Free Funnel Audit &rarr;
                    </button>
                  </form>
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Audit delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Diagnostic Includes</p>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Addressable ICP market size</b> and decision-maker volume analysis</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Landing page friction audit</b> and mobile conversion barriers</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Competitor outbound & paid funnel benchmark</b> breakdown</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>30-day pipeline roadmap</b> to double sales qualified appointments</span>
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

export default LeadGenServicesPage;
