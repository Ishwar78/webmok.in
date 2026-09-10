import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaSearch,
  FaVideo,
  FaStar,
  FaBriefcase,
  FaShoppingCart,
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle
} from 'react-icons/fa';
import './Services.css';

const Services = ({ onOpenEnquiry }) => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // All service categories and their sub-services (Synchronized with Navbar Mega Menu)
  const serviceCategories = [
    {
      id: 'ecommerce',
      name: 'E-Commerce & Apps',
      icon: <FaShoppingCart />,
      desc: 'High-conversion e-commerce stores, custom portals, and native mobile apps.',
      services: [
        { slug: 'e-commerce-development-services-company', title: 'E-Commerce Development', desc: 'Custom online stores with seamless payment gateways and conversion funnels.' },
        { slug: 'application-development-services', title: 'Application Development', desc: 'Complex web platforms, SaaS dashboards, and portal architectures.' },
        { slug: 'android-app-development', title: 'Android App Development', desc: 'Feature-packed apps optimized for all screen sizes and Google Play.' },
        { slug: 'ios-app-development', title: 'iOS App Development', desc: 'Elegant Apple ecosystem apps complying with strict App Store guidelines.' },
        { slug: 'shopify-woocommerce', title: 'Shopify & WooCommerce', desc: 'Specialized e-commerce storefront setups with custom themes and checkout flows.' },
        { slug: 'custom-marketplace', title: 'Custom Marketplace', desc: 'Multi-vendor marketplace platforms with seller dashboards and split payouts.' }
      ]
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      icon: <FaSearch />,
      desc: 'Rankings, organic search visibility, and dedicated SEO engineering.',
      services: [
        { slug: 'seo-services-company', title: 'Search Engine Optimization Company', desc: 'Top 1-3 rankings for high-intent competitive keywords.' },
        { slug: 'hire-seo-expert', title: 'Hire Dedicated SEO Expert', desc: 'Full-time dedicated SEO strategist committed to your digital growth.' }
      ]
    },
    {
      id: 'web',
      name: 'Web Development',
      icon: <FaLaptopCode />,
      desc: 'High-speed, responsive, custom web applications built for business conversion.',
      services: [
        { slug: 'word-press-development-services-company', title: 'Wordpress Development', desc: 'Custom themes, lightning-fast WooCommerce stores, and secure plugins.' },
        { slug: 'web-designing-development-services-company', title: 'Web design & Development', desc: 'Modern responsive UX/UI with interactive animations and high speed.' },
        { slug: 'e-commerce-development-services-company', title: 'E-Commerce Development', desc: 'Custom online stores with seamless payment gateways and cart flows.' },
        { slug: 'landing-page-development-services-company', title: 'Landing Page Development', desc: 'High-converting lead gen landing pages with A/B testing frameworks.' },
        { slug: 'website-development-and-design-services', title: 'Website Development & Design Services', desc: 'End-to-end IT development tailored for NCR and global businesses.' },
        { slug: 'application-development-services', title: 'Application Development', desc: 'Complex web platforms, SaaS dashboards, and portal architectures.' }
      ]
    },
    {
      id: 'digital',
      name: 'Digital Marketing',
      icon: <FaBullhorn />,
      desc: 'Precision paid ads, organic search marketing, and social brand growth.',
      services: [
        { slug: 'seo-services-company', title: 'Search Engine Optimization Company', desc: 'Top 1-3 rankings for high-intent competitive keywords.' },
        { slug: 'ppc-services-company', title: 'PPC SERVICES', desc: 'Google Search, Display, and Performance Max campaigns with low CPA.' },
        { slug: 'content-marketing-services-company', title: 'Content Marketing', desc: 'Authority blog posts, whitepapers, and viral social copywriting.' },
        { slug: 'social-media-marketing', title: 'Social Media Marketing', desc: 'Community growth and targeted paid ads on Instagram, LinkedIn, FB.' },
        { slug: 'mobile-marketing-services-company', title: 'Mobile Marketing', desc: 'App install campaigns, SMS automation, and mobile ad networks.' },
        { slug: 'video-editing', title: 'Video Editing & Reels', desc: 'Engaging video reels, YouTube edits, and brand promotional clips.' }
      ]
    },
    {
      id: 'consultant',
      name: 'Business Consultant',
      icon: <FaBriefcase />,
      desc: 'Strategic market positioning and digital revenue scaling roadmaps.',
      services: [
        { slug: 'business-development-consulting', title: 'Business Development Consulting', desc: 'Strategic market positioning, unit economics, and digital revenue scaling roadmaps.' }
      ]
    },
    {
      id: 'graphic',
      name: 'Graphic & Video',
      icon: <FaVideo />,
      desc: 'Creative branding, visual identity, and thumb-stopping marketing visuals.',
      services: [
        { slug: 'video-and-graphic-development-company', title: 'Video & Graphic Development', desc: 'Complete brand creative design and video storytelling.' },
        { slug: 'social-media-graphic-design-services-company', title: 'Social Media Graphic Design', desc: 'Custom templates, banners, carousel designs, and story packs.' },
        { slug: 'video-editing', title: 'Video Editing', desc: 'Color grading, motion graphics, and audio mastering for brands.' },
        { slug: 'logo-design-services-company', title: 'Logo Design & Brand Identity', desc: 'Memorable brand logos, style guides, and stationery collateral.' },
        { slug: 'promotional-video-editing-services-company', title: 'Promotional Video Production', desc: 'Explainer videos, SaaS walk-throughs, and launch commercials.' }
      ]
    },
    {
      id: 'outstanding',
      name: 'Outstanding Services',
      icon: <FaStar />,
      desc: 'B2B Lead generation, brand reputation, and high-impact growth.',
      services: [
        { slug: 'lead-generation-social-media-marketing-services-company', title: 'Lead Generation Campaigns', desc: 'Predictable high-ticket B2B inquiry funnels via LinkedIn & Meta.' },
        { slug: 'social-media-optimization-services-company', title: 'Social Media Optimization (SMO)', desc: 'Organic reach expansion, profile auditing, and viral engagement.' },
        { slug: 'online-reputation-management-services-company', title: 'Online Reputation Management (ORM)', desc: 'Cultivating 5-star public perception and mitigating negative links.' },
        { slug: 'digital-marketing-services-company', title: 'Digital Marketing', desc: '360-degree performance marketing across search, social, and programmatic.' },
        { slug: 'facebook-marketing-services-company', title: 'Facebook Marketing', desc: 'Targeted custom audience funnels and high-ROAS retargeting campaigns.' }
      ]
    }
  ];

  const filteredCategories = selectedCat === 'all'
    ? serviceCategories
    : serviceCategories.filter((cat) => cat.id === selectedCat);

  return (
    <div className="wm-services-page-root">
      {/* Services Hero */}
      <section className="wm-spage-hero">
        <div className="wm-spage-container">
          <span className="wm-spage-tag">Comprehensive Solutions</span>
          <h1 className="wm-spage-title">Our Digital Services Portfolio</h1>
          <p className="wm-spage-desc">
            Explore our end-to-end technology and digital marketing services engineered to transform your business and maximize market valuation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="wm-spage-filters-section">
        <div className="wm-spage-container">
          <div className="wm-spage-filter-buttons">
            <button
              className={`wm-spage-fbtn ${selectedCat === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCat('all')}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                className={`wm-spage-fbtn ${selectedCat === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Listings */}
      <section className="wm-spage-list-section">
        <div className="wm-spage-container">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="wm-scat-block">
              <div className="wm-scat-header">
                <div className="wm-scat-icon">{cat.icon}</div>
                <div>
                  <h2 className="wm-scat-title">{cat.name}</h2>
                  <p className="wm-scat-desc">{cat.desc}</p>
                </div>
              </div>

              <div className="wm-scat-cards-grid">
                {cat.services.map((serv, index) => (
                  <div
                    key={index}
                    className="wm-scat-card"
                    onClick={() => navigate(`/${serv.slug}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3 className="wm-scard-title">{serv.title}</h3>
                    <p className="wm-scard-desc">{serv.desc}</p>
                    <div className="wm-scard-footer">
                      <Link
                        to={`/${serv.slug}`}
                        className="wm-scard-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Details & Packages <FaArrowRight />
                      </Link>
                      <button
                        type="button"
                        className="wm-scard-enq-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEnquiry && onOpenEnquiry(serv.title);
                        }}
                      >
                        Inquiry Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service-Specific FAQ Section */}
      {/* <section className="wm-spage-faq-sec">
        <div className="wm-spage-container">
          <div className="wm-spage-faq-header">
            <span className="wm-spage-badge">Got Questions?</span>
            <h2 className="wm-spage-faq-title">Frequently Asked Questions on Our Services</h2>
            
          </div>

          <div className="wm-spage-faq-list">
            {[
              {
                q: 'What is the standard delivery timeline for custom web and app development?',
                a: 'Standard landing pages and corporate portals are deployed within 1 to 2 weeks. Comprehensive custom React/Next.js web applications, e-commerce stores, and native mobile apps typically span 4 to 8 weeks, broken into transparent 1-week milestone sprints.'
              },
              {
                q: 'Do you assign a dedicated project manager and team to our account?',
                a: 'Yes! Every client project is assigned a dedicated senior technical project manager, frontend & backend engineers, QA tester, and an SEO/growth strategist. You have direct communication via Slack, WhatsApp, and weekly Zoom progress reviews.'
              },
              {
                q: 'Can we hire dedicated developers or digital marketers on a monthly basis?',
                a: 'Yes, we provide flexible dedicated hiring models (Hourly, Part-Time, or Full-Time Dedicated Specialist). You get a senior strategist working exclusively on your accounts with daily standup updates and weekly milestone reviews.'
              },
              {
                q: 'What post-launch technical warranty and maintenance do you offer?',
                a: 'All our custom engineering deliverables include 30 to 90 days of complimentary post-launch warranty covering bug fixes, speed audits, security updates, and performance tuning. We also offer ongoing SLA maintenance packages.'
              },
              {
                q: 'Who retains the intellectual property (IP) and source code ownership?',
                a: 'You retain 100% full legal ownership of the source code, design assets, and database architecture upon milestone completion. We provide clean GitHub repository transfers with complete documentation.'
              }
            ].map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div key={fIdx} className={`wm-sfaq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="wm-sfaq-qbtn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                  >
                    <span className="wm-sfaq-qtitle">{faq.q}</span>
                    <span className="wm-sfaq-icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                  </button>
                  {isOpen && (
                    <div className="wm-sfaq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="wm-spage-faq-more">
            <Link to="/faq" className="wm-spage-faq-link">
              Have More Questions? Explore Full Knowledge Base & FAQ Page <FaArrowRight />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Help Banner */}
      <section className="wm-spage-cta">
        <div className="wm-spage-container">
          <div className="wm-spage-cta-card">
            <h2>Need Assistance Selecting The Best Strategy?</h2>
            <p>Speak directly with our senior technology consultant for a zero-obligation consultation.</p>
            <button className="wm-spage-cta-btn" onClick={onOpenEnquiry}>
              Request Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
