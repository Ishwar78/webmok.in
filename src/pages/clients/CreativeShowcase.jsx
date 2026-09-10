import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaSearchPlus,
  FaTimes,
  FaPalette,
  FaLayerGroup,
  FaBezierCurve,
  FaPrint,
  FaLaptopCode,
  FaAward
} from 'react-icons/fa';
import './CreativeShowcase.css';
import { resolveMediaUrl, handleImageError } from '../../utils/mediaUrl';

const CreativeShowcase = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [previewItem, setPreviewItem] = useState(null);

  // Creative Showcase Data embedded directly inside this page
  const showcaseItems = [
    {
      id: 'agrimark-pouch-packaging',
      title: 'AgriMark Superfoods Pouch Packaging',
      category: 'packaging',
      categoryName: 'Packaging & Print',
      client: 'AgriMark Organics',
      deliverable: 'Matte Finish Standup Pouch & Label Design',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
      description: 'Modern eco-friendly superfood pouch packaging with clean typography, custom ingredient illustrations, and QR traceability.'
    },
    {
      id: 'roto-solar-product-brochure',
      title: 'Roto Rudra Solar Pumping Catalog',
      category: 'packaging',
      categoryName: 'Packaging & Print',
      client: 'Roto Rudra Solar Tech',
      deliverable: '24-Page Technical Product Brochure & Spec Sheets',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
      description: 'Industrial-grade technical brochure with exploded view diagrams, pumping flow rate curves, and B2B dealer specification sheets.'
    },
    {
      id: 'grooming-lifestyle-social',
      title: 'Precision Trimmer Social Campaign',
      category: 'social',
      categoryName: 'Social Creatives',
      client: 'Ultimate Bro Grooming',
      deliverable: 'Meta Ads & Instagram Carousel Design Series',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
      description: 'High-contrast bold lifestyle creatives featuring urban grooming, product highlights, and high-CTR headline typography.'
    },
    {
      id: 'ycook-quick-eats-creatives',
      title: 'Y-Cook Ready-to-Eat Promo Creatives',
      category: 'social',
      categoryName: 'Social Creatives',
      client: 'Y-Cook Food Tech',
      deliverable: 'Digital Display Banners & Swiggy/Zomato Ads',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80',
      description: 'Mouth-watering visual banners with vibrant contrast, food styling highlights, and instant discount CTA buttons.'
    },
    {
      id: 'apex-brand-identity-system',
      title: 'Apex Global Brand Identity System',
      category: 'branding',
      categoryName: 'Brand Identity',
      client: 'Apex Global Logistics',
      deliverable: 'Corporate Logo, Typography & Full Brand Book',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
      description: 'Complete brand visual identity guidelines, corporate stationary, fleet vehicle livery, and uniform branding.'
    },
    {
      id: 'luxecart-uiux-storefront',
      title: 'LuxeCart Mobile-First Storefront UI/UX',
      category: 'uiux',
      categoryName: 'UI/UX & Web',
      client: 'LuxeCart Essentials',
      deliverable: 'Figma Prototyping & Responsive Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      description: 'Frictionless luxury shopping interface with sticky one-click add to cart, gesture-friendly product filters, and micro-animations.'
    },
    {
      id: 'medicare-patient-portal-ui',
      title: 'MediCare Clinical Portal & App Interface',
      category: 'uiux',
      categoryName: 'UI/UX & Web',
      client: 'MediCare Superspecialty',
      deliverable: 'Patient Appointment & Health Records UI',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      description: 'Calm, accessible UI engineered for all age groups with real-time doctor availability calendars and instant tele-consultation.'
    },
    {
      id: 'fintech-isometric-infographic',
      title: 'Horizon Swift Cross-Border Flow Infographic',
      category: 'infographics',
      categoryName: 'Infographics & Collaterals',
      client: 'Horizon Pay Swift',
      deliverable: '3D Isometric Flow Charts & Investor Pitch Deck',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
      description: 'Clean isometric infographics explaining complex multi-currency ledger routing for international venture investors.'
    },
    {
      id: 'skylight-realestate-luxury-brochure',
      title: 'Skylight Towers Luxury Coffee Table Book',
      category: 'packaging',
      categoryName: 'Packaging & Print',
      client: 'Skylight Infrastructures',
      deliverable: 'Hardcover Gold Foil Embossed Brochure',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
      description: 'Premium architectural brochure with metallic foil stamping, architectural floorplans, and aerial drone spreads.'
    }
  ];

  // Creative Posters for Dual-Column Up/Down Auto-Scrolling Marquee (Image 3)
  const marqueeCol1 = [
    {
      id: 'cr-m1',
      title: 'Bon Vie Organic Fruit Pouches',
      tag: 'Packaging & Print',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'cr-m2',
      title: 'Roto Rudra Solar Pumping Solutions',
      tag: 'Industrial AgriTech',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'cr-m3',
      title: 'Agrimate Rural Harvesting Campaign',
      tag: 'Brand Campaign',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'cr-m4',
      title: 'Karara Sound Engineering Brochure',
      tag: 'Print & Editorial',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=80'
    }
  ];

  const marqueeCol2 = [
    {
      id: 'cr-m5',
      title: 'Vega Quick-Charge Grooming Trimmer',
      tag: 'Social Ad Creatives',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'cr-m6',
      title: 'Y-Cook Ready Snacks Catalog',
      tag: 'Brochure Design',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'cr-m7',
      title: 'Tax Heist Financial Campaign',
      tag: 'Digital Creative',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'cr-m8',
      title: 'Luxury Watch & Apparel Branding',
      tag: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80'
    }
  ];

  const [items, setItems] = useState(showcaseItems);

  useEffect(() => {
    fetch('http://localhost:5005/api/creative-showcase')
      .then(res => res.json())
      .then(json => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setItems(json.data);
        }
      })
      .catch(err => {
        console.warn('Notice: Creative showcase live API offline, using defaults:', err.message);
      });
  }, []);

  const categories = [
    { id: 'all', label: 'All Creatives' },
    { id: 'packaging', label: 'Packaging & Print' },
    { id: 'social', label: 'Social Media Creatives' },
    { id: 'branding', label: 'Brand Identity & Logo' },
    { id: 'uiux', label: 'UI/UX & Web Design' },
    { id: 'infographics', label: 'Infographics & Decks' }
  ];

  const filteredItems = activeTab === 'all'
    ? items
    : items.filter(item => item.category === activeTab);

  return (
    <div className="wm-creative-page-root">
      {/* 1. HERO SECTION (MATCHING REFERENCE IMAGE 3) */}
      <section className="wm-creative-hero">
        <div className="wm-creative-hero-container">
          <div className="wm-creative-hero-grid">
            {/* Left Column */}
            <div className="wm-crhero-left">
              <span className="wm-crhero-tag">Top Creative Services in India</span>
              <h1 className="wm-crhero-title">
                Creative Solutions for a <span className="wm-crhero-accent">Digital World</span>
              </h1>
              <p className="wm-crhero-desc">
                At Webmok, we craft innovative design, marketing, and technology solutions that help brands stand out and succeed in today's digital world.
              </p>

              <div className="wm-crhero-cta-row">
                <button
                  type="button"
                  className="wm-crhero-btn-enquire"
                  onClick={onOpenEnquiry}
                >
                  Enquire Now <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="wm-crhero-btn-call"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Call in 28 Sec
                </button>
              </div>
            </div>

            {/* Right 3D Angled Vertical Dual-Column Marquee ("Upper Niche Scroll" - Matching Image 3) */}
            <div className="wm-creative-hero-right">
              <div className="wm-crhero-marquee-perspective">
                {/* Column 1: Scrolls UP continuously */}
                <div className="wm-crmarquee-col wm-col-scroll-up">
                  <div className="wm-crmarquee-track-up">
                    {[...marqueeCol1, ...marqueeCol1].map((item, idx) => (
                      <div key={`c1-${item.id}-${idx}`} className="wm-crmarquee-card">
                        <img src={item.image} alt={item.title} className="wm-crmcard-img" />
                        <div className="wm-crmcard-overlay">
                          <span className="wm-crmcard-tag">{item.tag}</span>
                          <h4 className="wm-crmcard-title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Scrolls DOWN continuously */}
                <div className="wm-crmarquee-col wm-col-scroll-down">
                  <div className="wm-crmarquee-track-down">
                    {[...marqueeCol2, ...marqueeCol2].map((item, idx) => (
                      <div key={`c2-${item.id}-${idx}`} className="wm-crmarquee-card">
                        <img src={item.image} alt={item.title} className="wm-crmcard-img" />
                        <div className="wm-crmcard-overlay">
                          <span className="wm-crmcard-tag">{item.tag}</span>
                          <h4 className="wm-crmcard-title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edge Gradient Fades */}
              <div className="wm-crhero-top-fade"></div>
              <div className="wm-crhero-bottom-fade"></div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Strip (Matching Image 2) */}
        <div className="wm-crhero-bottom-strip">
          <div className="wm-creative-hero-container wm-crstrip-flex">
            <div className="wm-crstrip-links">
              <Link to="/our-clients" className="wm-crstrip-link">Clients</Link>
              <span className="wm-crstrip-sep">|</span>
              <Link to="/creative-showcase" className="wm-crstrip-link active">Showcase</Link>
              <span className="wm-crstrip-sep">|</span>
              <a
                href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20Creative%20Design%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="wm-crstrip-link wm-crstrip-wa"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>

            <div className="wm-crstrip-badge">
              <span>Award-Winning Digital Marketing Agency</span>
              <span className="wm-crstrip-sep">|</span>
              <span className="wm-crstrip-stars">
                Google 100+ ★★★★★
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SHOWCASE GALLERY */}
      <section className="wm-cgallery-sec">
        <div className="wm-creative-container">
          <div className="wm-cgallery-hdr">
            <span className="wm-cg-sub">Our Creative Portfolio</span>
            <h2 className="wm-cg-title">Visual Identities, Packaging &amp; Digital Collateral</h2>
            <div className="wm-cg-bar"></div>
            <p className="wm-cg-desc">
              Every design is meticulously engineered to evoke emotion, communicate distinct value, and compel immediate customer action.
            </p>

            {/* Filter Tabs */}
            <div className="wm-cg-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`wm-cg-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={(e) => {
                    setActiveTab(cat.id);
                    if (e?.currentTarget) {
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="wm-cgallery-grid">
            {filteredItems.map(item => (
              <div key={item._id || item.id} className="wm-citem-card">
                <div className="wm-citem-img-wrap" onClick={() => setPreviewItem(item)}>
                  <img
                    src={resolveMediaUrl(item.image)}
                    alt={item.title}
                    className="wm-citem-img"
                    onError={(e) => handleImageError(e)}
                  />
                  <div className="wm-citem-hover-mask">
                    <FaSearchPlus className="wm-zoom-icon" />
                    <span>View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGN CAPABILITIES BREAKDOWN */}
      <section className="wm-ccap-sec">
        <div className="wm-creative-container">
          <div className="wm-cgallery-hdr">
            <span className="wm-cg-sub" style={{ color: '#00d4ff' }}>Our Craftsmanship</span>
            <h2 className="wm-cg-title" style={{ color: '#ffffff' }}>End-to-End Creative Design Capabilities</h2>
            <div className="wm-cg-bar"></div>
          </div>

          <div className="wm-ccap-grid">
            <div className="wm-ccap-card">
              <div className="wm-ccap-icon"><FaPalette /></div>
              <h4>Brand Identity &amp; Guidelines</h4>
              <p>Original logos, color psychology, custom typography pairings, and 30+ page comprehensive corporate brand books.</p>
            </div>

            <div className="wm-ccap-card">
              <div className="wm-ccap-icon"><FaPrint /></div>
              <h4>Packaging &amp; Label Design</h4>
              <p>Print-ready CMYK dielines, standup pouches, boxes, bottles, metallic foil embossing, and barcode compliance.</p>
            </div>

            <div className="wm-ccap-card">
              <div className="wm-ccap-icon"><FaLaptopCode /></div>
              <h4>UI/UX &amp; Web Prototyping</h4>
              <p>Figma interactive prototypes, user journey mapping, design systems, and responsive mobile-first interfaces.</p>
            </div>

            <div className="wm-ccap-card">
              <div className="wm-ccap-icon"><FaBezierCurve /></div>
              <h4>Performance Ad Creatives</h4>
              <p>High-CTR static and animated social media ads engineered to stop the scroll and convert paying customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODAL PREVIEW LIGHTBOX */}
      {previewItem && (
        <div className="wm-cmodal-backdrop" onClick={() => setPreviewItem(null)}>
          <div className="wm-cmodal-box" onClick={e => e.stopPropagation()}>
            <button className="wm-cmodal-close" onClick={() => setPreviewItem(null)}>
              <FaTimes />
            </button>
            <div className="wm-cmodal-img-col">
              <img
                src={resolveMediaUrl(previewItem.image)}
                alt={previewItem.title}
                onError={(e) => handleImageError(e)}
              />
            </div>
            
          </div>
        </div>
      )}

      {/* 5. CTA STRIP */}
      <section className="wm-cr-cta-sec">
        <div className="wm-creative-container">
          <div className="wm-crcta-inner">
            <div>
              <h2>Have a Creative Vision in Mind?</h2>
              <p>Let our senior art directors bring your brand to life with world-class design collateral.</p>
            </div>
            <div className="wm-crcta-actions">
              <button className="wm-crcta-primary" onClick={onOpenEnquiry}>
                Start Creative Project <FaArrowRight />
              </button>
              <button className="wm-crcta-call" onClick={onOpenCallMe}>
                <FaPhoneAlt /> Call Me in 28 Sec
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeShowcase;
