import React from 'react';
import { Link } from 'react-router-dom';
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
  FaCheckCircle
} from 'react-icons/fa';
import ServiceSidebarForm from '../../components/ServiceSidebarForm';
import './ServicePageShared.css';

const SeoServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const seoPillars = [
    {
      icon: <FaLink />,
      title: 'Off-Page SEO',
      desc: 'WebMok creating backlinks on high Page Authority and Domain Authority platforms to significantly improve the position of your website on major search engines.'
    },
    {
      icon: <FaStar />,
      title: 'Reputation Management (ORM)',
      desc: 'We help you out with improving your brand sentiment from negative reviews and comments, working proactively to build up your company brand value and digital reputation.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Content Marketing',
      desc: 'Content is the king of digital business. We craft informative, high-ranking content that boosts audience engagement, brand connection, and conversion rates.'
    },
    {
      icon: <FaBuilding />,
      title: 'Enterprise SEO',
      desc: 'WebMok has an elite team for Enterprise SEO, focusing on comprehensive architecture, scalable keyword matrices, and optimized customer experience for top SERP rankings.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Google Recovery Services',
      desc: 'If your website has been hit or penalized by algorithmic Google updates or manual actions, our specialist team can help identify root causes and recover your lost traffic.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'National & International SEO',
      desc: 'We offer tailored SEO services for national as well as global multi-regional brands, helping you establish worldwide dominance with multi-language and ccTLD targeting.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile & App SEO',
      desc: 'With smartphones driving majority of web searches, we audit mobile-friendliness, Core Web Vitals, and App Store / Google Play visibility for mobile audiences.'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Local SEO & Maps',
      desc: 'Dominate Google Map pack and local search listings. We capture high-intent nearby customers seeking your services in Delhi, Rohtak, Gurgaon, and beyond.'
    },
    {
      icon: <FaCode />,
      title: 'On-Page SEO',
      desc: 'The foundational pillar of any portal. We optimize title tags, headers, URL structures, image compression, schema markup, website speed, internal linking, and competitor gap analysis.'
    }
  ];

  const industries = [
    'Electronics Business',
    'Transportation Business',
    'Agricultural Business',
    'Construction / Real Estate',
    'Mining & Engineering',
    'News & Media / Informational',
    'Educational & E-Learning',
    'Pharmaceutical & Biotech',
    'Foods, Cafes & Hotels',
    'Health & Medical Care',
    'Hospitality & Tourism',
    'Entertainment & Music'
  ];

  return (
    <div className="wm-sp-root">
      {/* Hero Header */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>SEO Services Company</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Google Certified SEO Agency
          </span>
          <h1 className="wm-sp-hero-title">Search Engine Optimization Company</h1>
          <p className="wm-sp-hero-lead">
            Look forward and take a step to reach your customers organically. Boost your website on Google, Bing, Yahoo, and all major search engines with Delhi & Rohtak’s premier SEO specialists.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free SEO Audit <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call in 28 Seconds
            </button>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Organic Growth That Multiplies Your Business Revenue</h2>
              <p className="wm-sp-paragraph">
                Create the brand of your company by gaining high visibility on every search engine, which directly leads to an increase in qualified inquiries, sales, and inbound customer calls. This is the reason <strong>WebMok</strong> and our dedicated team focus aggressively on organic search visibility.
              </p>
              <p className="wm-sp-paragraph">
                The continuous process of securing the highest ranking positions and expanding your brand’s digital footprint is known as Search Engine Optimization (SEO). <strong>WebMok Pvt Ltd</strong> is a trusted and top-ranking SEO company headquartered in Delhi and Rohtak, serving domestic and international clients with advanced methodologies and verified technical processes.
              </p>
            </div>

            {/* Top Page Ranking */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Rank Up Your Website on Top Search Results in Delhi & NCR</h2>
              <p className="wm-sp-paragraph">
                Want more organic traffic and an increase in real sales engagement from genuine users? WebMok Pvt Ltd helps you attain your precise business milestones. We have successfully executed and delivered growth campaigns across multiple industries, delivering consistent #1 page rankings.
              </p>
              <p className="wm-sp-paragraph">
                Looking for the best SEO services company in <strong>Hisar, Rohtak, Delhi, Gurgaon, and Dehradun</strong>? We offer complete SEO solutions including on-page, off-page, technical SEO, and 360-degree digital marketing to boost your website ranking and grow your business online.
              </p>
            </div>

            {/* 9 Core Pillars Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Our Comprehensive SEO Capabilities</h2>
              <p className="wm-sp-paragraph">
                We combine technical precision with high-authority digital outreach across 9 distinct core pillars:
              </p>
              <div className="wm-sp-grid-3">
                {seoPillars.map((item, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <div className="wm-sp-fi-icon">{item.icon}</div>
                    <h3 className="wm-sp-fi-title">{item.title}</h3>
                    <p className="wm-sp-fi-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Business Industries */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">SEO for Special Business Industries</h2>
              <p className="wm-sp-paragraph">
                WebMok Pvt Ltd provides SEO services across all consumer and B2B sectors, whether you are in product exchange, technical services, or informational distribution:
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

            {/* Guaranteed Ranking Banner */}
            <div className="wm-sp-callout-banner">
              <div className="wm-sp-cb-content">
                <h3>Guaranteed First-Page SEO Ranking Plan</h3>
                <p>
                  Work with our result-oriented team of SEO professionals. Startups and enterprise brands trust WebMok for transparent white-hat ranking strategies.
                </p>
              </div>
              <button className="wm-sp-cb-btn" onClick={onOpenEnquiry}>
                Claim SEO Package
              </button>
            </div>

            {/* Professional Strategy */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Why WebMok Pvt Ltd is the Best SEO Partner</h2>
              <p className="wm-sp-paragraph">
                We work as certified professionals with a deep bench of experienced search specialists. We have formulated distinct, battle-tested roadmaps for new startups as well as established corporate enterprises looking to dominate their vertical digitally.
              </p>
              <div className="wm-sp-benefit-list">
                <div className="wm-sp-benefit-item">
                  <FaCheckCircle className="wm-sp-bi-icon" />
                  <div className="wm-sp-bi-content">
                    <h4>Result-Oriented Top SEO Company</h4>
                    <p>Every keyword strategy is mapped to high-buyer intent keywords that bring paying clients, not vanity clicks.</p>
                  </div>
                </div>
                <div className="wm-sp-benefit-item">
                  <FaCheckCircle className="wm-sp-bi-icon" />
                  <div className="wm-sp-bi-content">
                    <h4>Guaranteed SEO Services in Rohtak & Delhi</h4>
                    <p>At WebMok Pvt Ltd, we ensure guaranteed improvements in organic impressions, click-through rates, and Google ranking positions.</p>
                  </div>
                </div>
                <div className="wm-sp-benefit-item">
                  <FaCheckCircle className="wm-sp-bi-icon" />
                  <div className="wm-sp-bi-content">
                    <h4>Ethical White-Hat Methodologies</h4>
                    <p>100% compliant with Google Search Essentials and Webmaster guidelines, safeguarding your domain from penalties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Lead Capture Form */}
          <div className="wm-sp-sidebar-col">
            <ServiceSidebarForm
              serviceName="SEO Services Company"
              source="SEO Service Page Form"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServicesPage;
