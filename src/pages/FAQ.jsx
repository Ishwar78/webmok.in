import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
  FaPaperPlane,
  FaSearch,
  FaLaptopCode,
  FaBullhorn,
  FaShoppingCart,
  FaShieldAlt,
  FaHeadset
} from 'react-icons/fa';
import './FAQ.css';

const FAQ = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const faqCategories = [
    { id: 'all', label: 'All Questions', icon: <FaQuestionCircle /> },
    { id: 'general', label: 'General & Engagement', icon: <FaShieldAlt /> },
    { id: 'web', label: 'Web & App Development', icon: <FaLaptopCode /> },
    { id: 'marketing', label: 'SEO & Digital Marketing', icon: <FaBullhorn /> },
    { id: 'ecommerce', label: 'E-Commerce Solutions', icon: <FaShoppingCart /> },
    { id: 'support', label: 'Pricing, IP & Support', icon: <FaHeadset /> }
  ];

  const allFaqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is Web Mok Pvt. Ltd. and how does your engagement process work?',
      answer: 'Web Mok Pvt. Ltd. is a full-cycle IT engineering and digital performance marketing agency headquartered in Dwarka Mor, New Delhi. Our engagement follows a transparent 5-step process: (1) Free Initial Consultation & Feasibility Audit, (2) Strategic Scope & Architecture Blueprint, (3) Milestone-Based Development or Campaign Setup, (4) Strict Multi-Device QA & Security Audits, and (5) Launch with Continuous ROI Telemetry.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How fast can Web Mok initiate our project?',
      answer: 'Once project specifications are finalized and the initial agreement/NDA is signed, our dedicated project manager and tech squad kick off the sprint within 24 to 48 hours. For urgent marketing campaigns or rapid landing page deployments, we can initiate expedited sprints within 24 hours.'
    },
    {
      id: 3,
      category: 'general',
      question: 'How does the "Call Me in 28 Seconds" callback feature work?',
      answer: 'When you submit your phone number via the "Call Me 28 Seconds" modal, our automated telephony system connects our available senior solution consultant to your line within 28 seconds during standard business hours. You get immediate, expert guidance with zero hold times.'
    },
    {
      id: 4,
      category: 'web',
      question: 'Which technologies and frameworks does Web Mok specialize in for Web & App Development?',
      answer: 'We build enterprise-grade digital products using modern tech stacks including React.js, Next.js, Node.js, Python, Flutter, React Native, and high-performance headless WordPress architectures. Every solution is optimized for sub-second load times, mobile responsiveness, and Google Core Web Vitals compliance.'
    },
    {
      id: 5,
      category: 'web',
      question: 'Will our website or application be 100% mobile-friendly and responsive?',
      answer: 'Yes, absolutely. We design with a mobile-first philosophy. Your web application will look flawless and function smoothly across all screen resolutions—including iPhones, Android devices, iPads, laptops, and ultra-wide desktop monitors.'
    },
    {
      id: 6,
      category: 'web',
      question: 'Do you offer website redesign and legacy code modernization?',
      answer: 'Yes! We specialize in modernizing legacy PHP, ASP.NET, or outdated CMS websites into high-speed, modern React/Next.js single-page applications. We preserve all your existing SEO equity and 301 redirects while providing a 3x to 5x speed boost and modern UX.'
    },
    {
      id: 7,
      category: 'marketing',
      question: 'How long does it take to see tangible ranking improvements with your SEO services?',
      answer: 'SEO is a compounding organic strategy. Initial technical fixes, indexing resolutions, and keyword jumps typically show measurable movement within 4 to 8 weeks. Substantial competitive top-3 keyword rankings and exponential traffic growth generally manifest within 3 to 6 months depending on keyword difficulty and domain authority.'
    },
    {
      id: 8,
      category: 'marketing',
      question: 'How do you track and report the ROI on our Google & Meta PPC campaigns?',
      answer: 'We implement server-side conversion tracking (Google Tag Manager, GA4, Meta Pixel with Conversions API). You receive transparent, live dashboard access displaying real-time metrics: Cost Per Click (CPC), Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and itemized lead attribution. No vanity metrics—only real business conversions.'
    },
    {
      id: 9,
      category: 'marketing',
      question: 'Can I hire a dedicated SEO expert or digital marketer from Web Mok?',
      answer: 'Yes, we provide flexible dedicated hiring models (Hourly, Part-Time, or Full-Time Dedicated Specialist). You get a senior strategist working exclusively on your accounts with daily standup updates and weekly milestone reviews.'
    },
    {
      id: 10,
      category: 'ecommerce',
      question: 'Which e-commerce platforms do you build and support?',
      answer: 'We engineer custom Shopify Plus stores, WooCommerce setups, and custom headless e-commerce platforms using React and Node.js. Our stores include one-click checkout, automated inventory sync, international multi-currency billing, and secure payment integrations (Razorpay, Stripe, Cashfree, UPI).'
    },
    {
      id: 11,
      category: 'ecommerce',
      question: 'How secure will our e-commerce checkout and customer data be?',
      answer: 'We implement bank-grade 256-bit SSL encryption, PCI-DSS compliance standards, secure webhook authentication, and automated daily cloud backups to protect your transactional data and customer privacy 24/7.'
    },
    {
      id: 12,
      category: 'support',
      question: 'Who owns the source code, design assets, and intellectual property (IP)?',
      answer: 'You do. 100%. Upon settlement of project milestones, complete ownership of all custom source code, GitHub repositories, Figma design files, and brand assets is transferred directly to your organization with zero licensing locks.'
    },
    {
      id: 13,
      category: 'support',
      question: 'What happens after our website or mobile app goes live?',
      answer: 'Every project comes with complimentary post-launch technical warranty and maintenance (typically 30 to 90 days depending on scope). We monitor server uptime, security patches, and minor UI adjustments. We also offer ongoing SLA maintenance packages for continuous feature rollouts.'
    },
    {
      id: 14,
      category: 'support',
      question: 'What are your payment terms and available payment methods?',
      answer: 'We work on milestone-based billing (e.g., 30% advance on kickoff, 40% upon design & staging approval, 30% upon final testing & deployment). We accept UPI, IMPS/NEFT, Credit/Debit Cards, NetBanking, and International SWIFT wire transfers.'
    }
  ];

  // Filter FAQs based on category and search
  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="wm-faqpage-root">
      {/* Hero Banner */}
      <section className="wm-faqpage-hero">
        <div className="wm-faqpage-container">
          <span className="wm-faqpage-badge">Knowledge & Transparency Center</span>
          <h1 className="wm-faqpage-title">Frequently Asked Questions</h1>
          <p className="wm-faqpage-desc">
            Everything you need to know about partnering with Web Mok Pvt. Ltd. Clear answers about our development standards, digital marketing deliverables, timelines, and pricing.
          </p>

          {/* Interactive Search Bar */}
          <div className="wm-faqpage-search-wrap">
            <FaSearch className="wm-faqsearch-icon" />
            <input
              type="text"
              placeholder="Search by keyword, e.g. SEO, source code, pricing, react..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="wm-faqsearch-input"
            />
            {searchQuery && (
              <button
                className="wm-faqsearch-clear"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="wm-faqpage-main-sec">
        <div className="wm-faqpage-container">
          {/* Category Filter Tabs */}
          <div className="wm-faq-cat-tabs">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                className={`wm-faq-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0);
                }}
              >
                <span className="wm-fcat-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="wm-faq-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`wm-faq-item ${isOpen ? 'wm-faq-item-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="wm-faq-question-btn"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="wm-faq-qtext">
                        <span className="wm-faq-num">Q{idx + 1}.</span> {item.question}
                      </span>
                      <span className="wm-faq-icon-box">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="wm-faq-answer-pane">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="wm-faq-empty">
                <FaQuestionCircle className="wm-empty-icon" />
                <h3>No matching questions found</h3>
                <p>We could not find answers matching "{searchQuery}". Try searching for another topic or speak directly with our team.</p>
                <button
                  className="wm-btn-reset-faq"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* Bottom Help Desk Card */}
          <div className="wm-faq-help-card">
            <div className="wm-faq-help-info">
              <span className="wm-faq-help-pill">Still Have Questions?</span>
              <h3>Speak Directly With Our Lead Solution Architect</h3>
              <p>Our senior technical consulting team is ready to answer your custom project requirements, timeline estimates, and budget queries.</p>
            </div>
            <div className="wm-faq-help-actions">
              <button
                type="button"
                className="wm-fhelp-btn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call Me in 28 Seconds
              </button>
              <button
                type="button"
                className="wm-fhelp-btn-quote"
                onClick={onOpenEnquiry}
              >
                <FaPaperPlane /> Request Free Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
