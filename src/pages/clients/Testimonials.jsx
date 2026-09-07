import React, { useState } from 'react';
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaWhatsapp,
  FaShieldAlt,
  FaBuilding,
  FaGoogle,
  FaThumbsUp
} from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Testimonials data embedded directly in this component
  const reviewsData = [
    {
      id: 1,
      name: 'Rohan Malhotra',
      designation: 'Founder & CEO',
      company: 'UrbanStyle Fashion (LuxeCart)',
      category: 'web',
      categoryName: 'Web & eCommerce',
      rating: 5,
      date: '2 weeks ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      title: 'Remarkable experience with Webmok!',
      text: 'Webmok transformed our slow, lagging WordPress store into a blazing-fast React and WooCommerce setup. Our cart abandonments dropped by 34% in the first month alone! Their team works with utmost professionalism and deep technical expertise.'
    },
    {
      id: 2,
      name: 'Dr. Sunita Rao',
      designation: 'Managing Director',
      company: 'MediCare Superspecialty Clinics',
      category: 'seo',
      categoryName: 'Search & SEO',
      rating: 5,
      date: '1 month ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      title: 'Our patient bookings multiplied threefold',
      text: 'Their local SEO and Google 3-Pack campaigns made us the #1 recommended multi-specialty clinic in West Delhi and Dwarka. From managing our web portal to orchestrating high-intent SEO, Webmok has consistently delivered outstanding results.'
    },
    {
      id: 3,
      name: 'Alok Gupta',
      designation: 'Managing Partner',
      company: 'Apex Global Logistics Ltd',
      category: 'web',
      categoryName: 'Web & eCommerce',
      rating: 5,
      date: '3 weeks ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      title: 'Flawless enterprise portal execution',
      text: 'Handling over 50,000 monthly freight bookings requires rock-solid architecture. Webmok built an enterprise dispatch dashboard and client portal that has run with 99.99% uptime for the past 14 months without a single glitch.'
    },
    {
      id: 4,
      name: 'Vikramaditya Chauhan',
      designation: 'Chief Marketing Officer',
      company: 'Roto Rudra Engineering',
      category: 'ppc',
      categoryName: 'Paid Ads & PPC',
      rating: 5,
      date: '1 month ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      title: 'Industrial B2B lead generation at scale',
      text: 'Their targeted Google Ads and LinkedIn funnel generated over 450 verified dealer distributor inquiries in Q2 alone. Cost per lead dropped by 42% compared to our previous agency. Highly analytical and proactive squad!'
    },
    {
      id: 5,
      name: 'Pooja Kashyap',
      designation: 'Director of Brand Strategy',
      company: 'Bail Naturals Wellness',
      category: 'brand',
      categoryName: 'Brand & Creative',
      rating: 5,
      date: '2 months ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
      title: 'Our packaging won shelf space in 80+ retail stores',
      text: 'Webmok created our complete brand identity, luxury pouch packaging design, and social launch collateral. Customers frequently compliment the aesthetic packaging. They truly understand consumer sensory psychology.'
    },
    {
      id: 6,
      name: 'Marcus Vance',
      designation: 'VP of Technology',
      company: 'Horizon Swift Payments (UK)',
      category: 'web',
      categoryName: 'Web & eCommerce',
      rating: 5,
      date: '1 month ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
      title: 'Exceptional offshore engineering squad',
      text: 'Working from London, we needed an engineering partner in India that could execute clean, type-safe React code while adhering to strict UK FCA guidelines. Webmok met and exceeded every sprint deadline with zero technical debt.'
    },
    {
      id: 7,
      name: 'Rajesh Singhal',
      designation: 'Managing Director',
      company: 'Skylight Infrastructures',
      category: 'ppc',
      categoryName: 'Paid Ads & PPC',
      rating: 5,
      date: '3 weeks ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
      title: '₹45 Cr inventory sold through laser-targeted ads',
      text: 'Webmoks performance marketing team ran hyper-targeted Meta and Google Search campaigns that generated over 4,200 verified site visit bookings for our premium residential towers in Noida and Gurugram.'
    },
    {
      id: 8,
      name: 'Kavita Sundaram',
      designation: 'Academic Dean',
      company: 'Edura Global Academy',
      category: 'seo',
      categoryName: 'Search & SEO',
      rating: 5,
      date: '2 months ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
      title: 'Top rankings across 300+ competitive academic keywords',
      text: 'Our organic admissions traffic jumped by 450% within 6 months. Their programmatic SEO strategy and high-authority backlink architecture made Edura the primary choice for students looking for online master degrees.'
    },
    {
      id: 9,
      name: 'Anand Vardhan',
      designation: 'Co-Founder',
      company: 'AgriMark Fresh Superfoods',
      category: 'brand',
      categoryName: 'Brand & Creative',
      rating: 5,
      date: '1 month ago',
      platform: 'Google Verified Review',
      badge: '5.0 Star Verified',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
      title: 'From farm to 100,000 orders — Webmok made it happen',
      text: 'Webmok crafted our entire digital storefront, subscription flow, and 3D product motion renders. Their conversion rate optimization sprints helped us achieve a 4.6% checkout conversion rate, far above industry average.'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Reviews (500+)' },
    { id: 'seo', label: 'SEO & Organic Growth' },
    { id: 'web', label: 'Web & eCommerce' },
    { id: 'ppc', label: 'Paid Ads & PPC' },
    { id: 'brand', label: 'Brand & Creative' }
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviewsData
    : reviewsData.filter(r => r.category === activeFilter);

  return (
    <div className="wm-test-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-test-hero">
        <div className="wm-test-hero-glow"></div>
        <div className="wm-test-container">
          <div className="wm-thero-topbadge">
            <span className="wm-thero-pill">
              <FaGoogle /> Google Rated 4.9 / 5.0 Agency
            </span>
            <div className="wm-thero-stars-chip">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="wm-tgold-star" />
              ))}
              <span>500+ Verified Client Reviews</span>
            </div>
          </div>

          <h1 className="wm-thero-title">
            What Our <span className="wm-tgradient-cyan">Clients Say</span> About Webmok
          </h1>

          <p className="wm-thero-desc">
            Discover why 500+ founders, enterprise CTOs, and marketing leaders trust Webmok as their dedicated digital growth custodian.
          </p>

          <div className="wm-thero-actions">
            <button className="wm-thero-btn-primary" onClick={onOpenEnquiry}>
              Share Your Project Vision <FaArrowRight />
            </button>
            <button className="wm-thero-btn-call" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call in 28 Seconds
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-test-stats-sec">
        <div className="wm-test-container">
          <div className="wm-tstats-grid">
            <div className="wm-tstat-box">
              <strong>4.9 / 5.0</strong>
              <span>Average Google Rating</span>
            </div>
            <div className="wm-tstat-box">
              <strong>500+</strong>
              <span>Verified Customer Reviews</span>
            </div>
            <div className="wm-tstat-box">
              <strong>98%</strong>
              <span>Client Retention Rate</span>
            </div>
            <div className="wm-tstat-box">
              <strong>100%</strong>
              <span>NDA &amp; Confidentiality Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS DIRECTORY & TABS */}
      <section className="wm-test-reviews-sec">
        <div className="wm-test-container">
          <div className="wm-treviews-hdr">
            <span className="wm-treviews-sub">Client Testimonials</span>
            <h2 className="wm-treviews-title">Real Feedback from Real Brands</h2>
            <div className="wm-treviews-bar"></div>
            <p className="wm-treviews-desc">
              Filter authentic client endorsements across search engine optimization, web architecture, and digital paid marketing.
            </p>

            {/* Filter Tabs */}
            <div className="wm-treviews-tabs">
              {filterTabs.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  className={`wm-ttab-btn ${activeFilter === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="wm-tgrid">
            {filteredReviews.map(review => (
              <div key={review.id} className="wm-treview-card">
                <div className="wm-tcard-top">
                  <div className="wm-tstars-row">
                    {[...Array(review.rating)].map((_, idx) => (
                      <FaStar key={idx} className="wm-tgold-star" />
                    ))}
                  </div>
                  <span className="wm-tverified-badge">
                    <FaCheckCircle /> {review.platform}
                  </span>
                </div>

                <h3 className="wm-tcard-headline">"{review.title}"</h3>
                <p className="wm-tcard-quote">{review.text}</p>

                <div className="wm-tcard-author-row">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="wm-tauthor-img"
                    style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div className="wm-tauthor-info">
                    <h4>{review.name}</h4>
                    <span className="wm-tauthor-desig">{review.designation}</span>
                    <span className="wm-tauthor-co">{review.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA STRIP */}
      <section className="wm-test-cta-sec">
        <div className="wm-test-container">
          <div className="wm-tcta-inner">
            <div>
              <h2>Experience the Webmok Difference</h2>
              <p>Speak with our senior solutions architect in 28 seconds and get an itemized project blueprint.</p>
            </div>
            <div className="wm-tcta-actions">
              <button className="wm-tcta-btn-primary" onClick={onOpenEnquiry}>
                Start Your Project <FaArrowRight />
              </button>
              <button className="wm-tcta-btn-call" onClick={onOpenCallMe}>
                <FaPhoneAlt /> Call Me in 28 Sec
              </button>
              <a
                href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="wm-tcta-btn-wa"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
