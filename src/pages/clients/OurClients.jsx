import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaSearch,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
  FaHospital,
  FaGraduationCap,
  FaTv,
  FaHome,
  FaCar,
  FaCoins,
  FaGlobe,
  FaIndustry,
  FaHandsHelping,
  FaTshirt,
  FaAppleAlt
} from 'react-icons/fa';
import './OurClients.css';

const OurClients = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 12 Categories matching DigiStreet Reference Image 2
  const categories = [
    { id: 'all', label: 'All', icon: <FaGlobe /> },
    { id: 'healthcare', label: 'Healthcare', icon: <FaHospital /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'consumer-electronics', label: 'Consumer / Home Electronics', icon: <FaTv /> },
    { id: 'real-estate', label: 'Home Decor & Real Estate', icon: <FaHome /> },
    { id: 'auto-ev', label: 'Auto/EV', icon: <FaCar /> },
    { id: 'finance', label: 'Finance', icon: <FaCoins /> },
    { id: 'international', label: 'International', icon: <FaGlobe /> },
    { id: 'b2b', label: 'B2B', icon: <FaIndustry /> },
    { id: 'ngo', label: 'NGO', icon: <FaHandsHelping /> },
    { id: 'fashion', label: 'Fashion', icon: <FaTshirt /> },
    { id: 'fmcg', label: 'FMCG', icon: <FaAppleAlt /> }
  ];

  // Client Brands List matching DigiStreet Style (Self-Contained inside this file)
  const clientBrands = [
    // Healthcare
    { id: 'asian', name: 'asian', subtitle: 'Institute of Medical Sciences', category: 'healthcare', color: '#00a8cc', markType: 'cross', desc: 'Tertiary Care Hospital Network' },
    { id: 'kamal-medtech', name: 'iKamal', subtitle: 'MedTech Diagnostics', category: 'healthcare', color: '#0284c7', markType: 'lotus', desc: 'Precision Medical Devices' },
    { id: 'jagat-pharma', name: 'JAGAT PHARMA', subtitle: 'Ayurvedic Innovations', category: 'healthcare', color: '#ea580c', markType: 'leaf', desc: 'Global Ayurvedic Therapeutics' },
    { id: 'boston-scientific', name: 'Boston Scientific', subtitle: 'Advancing Science for Life', category: 'healthcare', color: '#0369a1', markType: 'globe-mesh', desc: 'Global Medical Technology' },
    { id: 'dr-harors', name: "Dr. Haror's", subtitle: 'Wellness & Dermatology', category: 'healthcare', color: '#0f766e', markType: 'diamond', desc: 'Cosmetic & Clinical Aesthetic' },
    { id: 'jb-skincare', name: 'JB Skincare', subtitle: 'Derma Science Lab', category: 'healthcare', color: '#00a8cc', markType: 'monogram', desc: 'Dermatology Care Formulations' },
    { id: 'kairali', name: 'Kairali', subtitle: 'Ayurvedic Healing', category: 'healthcare', color: '#15803d', markType: 'herbal', desc: 'Centuries of Natural Healing' },
    { id: 'regenco', name: 'RegenCo.', subtitle: 'Stem Cell BioTech', category: 'healthcare', color: '#475569', markType: 'dna', desc: 'Regenerative Therapeutics' },
    { id: 'repechage', name: 'REPÊCHAGE', subtitle: 'Beauty From The Sea', category: 'healthcare', color: '#1e3a8a', markType: 'sea', desc: 'Marine Bio-Therapy' },
    { id: 'medicare', name: 'MediCare Clinics', subtitle: 'Superspecialty Centers', category: 'healthcare', color: '#0b4f8a', markType: 'cross', desc: 'Multi-Specialty Healthcare' },

    // Education
    { id: 'apeejay', name: 'APEEJAY SCHOOL', subtitle: 'International', category: 'education', color: '#ea580c', markType: 'bird', desc: 'World Baccalaureate Academy' },
    { id: 'avanse-edu', name: 'AVANSE', subtitle: 'Financial Services', category: 'education', color: '#0284c7', markType: 'wings', desc: 'Global Education Financing' },
    { id: 'cyboard', name: 'CYBOARD SCHOOL', subtitle: 'Future of Learning', category: 'education', color: '#f97316', markType: 'digital', desc: 'India’s 1st Hybrid AI School' },
    { id: 'imt-ghaziabad', name: 'IMT Ghaziabad', subtitle: 'Centre for Distance Learning', category: 'education', color: '#1e3a8a', markType: 'crest', desc: 'Premier Management School' },
    { id: 'inurture', name: 'iNurture', subtitle: 'Education Solutions', category: 'education', color: '#ea580c', markType: 'cube', desc: 'Higher Education Ecosystem' },
    { id: 'amity', name: 'AMITY', subtitle: 'University Global Network', category: 'education', color: '#1e40af', markType: 'crest', desc: 'Top Research University Partner' },
    { id: 'gice', name: 'GICE', subtitle: 'Academy of Engineering', category: 'education', color: '#0f172a', markType: 'sharp', desc: 'Technical Certifications' },
    { id: 'edura', name: 'Edura Global', subtitle: 'Interactive LMS', category: 'education', color: '#0284c7', markType: 'cap', desc: 'Professional Upskilling' },

    // Consumer / Home Electronics
    { id: 'rohto', name: 'ROHTO', subtitle: 'Japan Global Health', category: 'consumer-electronics', color: '#0284c7', markType: 'circle-eye', desc: 'Healthcare & Precision Optics' },
    { id: 'nasaka', name: 'Nasaka', subtitle: 'Be Health Sure', category: 'consumer-electronics', color: '#dc2626', markType: 'pure-water', desc: 'Smart RO Water Technologies' },
    { id: 'uro-tech', name: 'Uro', subtitle: 'Electronics & Sensors', category: 'consumer-electronics', color: '#16a34a', markType: 'circuit', desc: 'Microcontroller Automation' },
    { id: 'vega', name: 'VEGA', subtitle: 'Personal Care & Grooming', category: 'consumer-electronics', color: '#0b4f8a', markType: 'sharp', desc: 'Styling & Grooming Devices' },
    { id: 'karara', name: 'KARARA', subtitle: 'Acoustic Sound Labs', category: 'consumer-electronics', color: '#0f172a', markType: 'sound', desc: 'High-Fidelity Audio Equipment' },
    { id: 'bolt-audio', name: 'Bolt Audio', subtitle: 'True Wireless Sound', category: 'consumer-electronics', color: '#eab308', markType: 'bolt', desc: 'Lifestyle Audio Tech' },

    // Home Decor & Real Estate
    { id: 'mani', name: 'MANI', subtitle: 'Architectural Landmarks', category: 'real-estate', color: '#0f172a', markType: 'pillar', desc: 'Luxury Residential & Commercial' },
    { id: 'skylight', name: 'SKYLIGHT', subtitle: 'Infrastructures Ltd', category: 'real-estate', color: '#0b4f8a', markType: 'tower', desc: 'Grade-A Commercial High-Rises' },
    { id: 'earthstone', name: 'EarthStone', subtitle: 'Living & Interiors', category: 'real-estate', color: '#78350f', markType: 'stone', desc: 'Eco-Luxury Architectural Stone' },
    { id: 'apex-living', name: 'Apex Living', subtitle: 'Smart Urban Condos', category: 'real-estate', color: '#00a8cc', markType: 'condo', desc: 'Integrated Townships' },

    // Auto / EV
    { id: 'roto-ev', name: 'ROTO RUDRA', subtitle: 'EV Powertrain & Solar', category: 'auto-ev', color: '#10b981', markType: 'gear-ev', desc: 'Solar Pumping & EV Motors' },
    { id: 'voltdrive', name: 'VoltDrive', subtitle: 'Electric Mobility', category: 'auto-ev', color: '#06b6d4', markType: 'ev-volt', desc: 'Commercial EV Fleets' },
    { id: 'kinetic-tech', name: 'Kinetic Auto', subtitle: 'Precision Engineering', category: 'auto-ev', color: '#1e293b', markType: 'wheel', desc: 'Automotive Precision Parts' },

    // Finance
    { id: 'avanse-cap', name: 'Avanse Capital', subtitle: 'Financing Next Horizons', category: 'finance', color: '#0284c7', markType: 'arrow-up', desc: 'Non-Banking Financial Institution' },
    { id: 'horizon-swift', name: 'Horizon Swift', subtitle: 'Cross-Border Payments', category: 'finance', color: '#6366f1', markType: 'ledger', desc: 'Global B2B Financial Rails' },
    { id: 'truecred', name: 'TrueCred', subtitle: 'Institutional Lending', category: 'finance', color: '#059669', markType: 'shield-check', desc: 'Corporate Credit Solutions' },
    { id: 'apex-wealth', name: 'Apex Wealth', subtitle: 'Asset Management', category: 'finance', color: '#0b4f8a', markType: 'chart', desc: 'HNW Wealth Preservation' },

    // International
    { id: 'boston-intl', name: 'Boston Scientific', subtitle: 'USA / Global', category: 'international', color: '#0369a1', markType: 'globe-mesh', desc: 'North America & Europe Healthcare' },
    { id: 'rohto-intl', name: 'ROHTO Global', subtitle: 'Tokyo, Japan', category: 'international', color: '#0284c7', markType: 'circle-eye', desc: 'Asia-Pacific Consumer Health' },
    { id: 'nordic-labs', name: 'Nordic Cloud Labs', subtitle: 'Stockholm, Sweden', category: 'international', color: '#0ea5e9', markType: 'cloud', desc: 'SaaS Multi-Cloud Observability' },
    { id: 'silkroute', name: 'SilkRoute Exim', subtitle: 'Singapore HQ', category: 'international', color: '#d97706', markType: 'ship', desc: 'APAC Supply Chain Solutions' },

    // B2B
    { id: 'catalysts', name: 'Catalysts', subtitle: 'Making Things Happen', category: 'b2b', color: '#0284c7', markType: 'molecule', desc: 'Biotechnology & Enzymes' },
    { id: 'equilibrium-pro', name: 'equilibrium PRO', subtitle: 'Industrial Balance', category: 'b2b', color: '#e11d48', markType: 'wave', desc: 'High-Precision Calibration' },
    { id: 'mrcn', name: 'MRCN', subtitle: 'Heavy Alloy Metals', category: 'b2b', color: '#0f172a', markType: 'ingot', desc: 'Metallurgical Manufacturing' },
    { id: 'steelcraft', name: 'SteelCraft India', subtitle: 'Structural Fabrication', category: 'b2b', color: '#334155', markType: 'beam', desc: 'Industrial EPC Infrastructure' },
    { id: 'apex-logistics', name: 'Apex Global Logistics', subtitle: 'Freight Systems', category: 'b2b', color: '#0b4f8a', markType: 'ship', desc: 'Global Multimodal Forwarding' },

    // NGO
    { id: 'smile-all', name: 'Smile For All', subtitle: 'Education For All Kids', category: 'ngo', color: '#f59e0b', markType: 'smile', desc: 'Slum Child Literacy Movement' },
    { id: 'goonj-partner', name: 'Goonj Partners', subtitle: 'Material Redistribution', category: 'ngo', color: '#16a34a', markType: 'hands', desc: 'Disaster Relief & Upliftment' },
    { id: 'greenearth', name: 'GreenEarth', subtitle: 'Afforestation Initiative', category: 'ngo', color: '#059669', markType: 'tree', desc: 'Carbon Offset Forestry' },

    // Fashion
    { id: 'hair-story', name: 'HAIR STORY', subtitle: 'Couture Salon & Spa', category: 'fashion', color: '#0f172a', markType: 'scissors', desc: 'Luxury Haircare Experience' },
    { id: 'bail-naturals-fash', name: 'bail naturals', subtitle: 'Botanical Skincare', category: 'fashion', color: '#0f172a', markType: 'clean-type', desc: 'Organic Lifestyle Beauty' },
    { id: 'urban-luxecart', name: 'LuxeCart Essentials', subtitle: 'D2C Apparel Brand', category: 'fashion', color: '#e11d48', markType: 'monogram', desc: 'Sustainable Daily Wear' },
    { id: 'repechage-fash', name: 'REPÊCHAGE Paris', subtitle: 'Esthetic Formulations', category: 'fashion', color: '#1e3a8a', markType: 'sea', desc: 'Runway Grade Skin Rituals' },

    // FMCG
    { id: 'agrimark', name: 'AgriMark Foods', subtitle: 'Organic Superfoods', category: 'fmcg', color: '#15803d', markType: 'wheat', desc: 'Single-Origin Farm Harvest' },
    { id: 'bon-vie', name: 'BON VIE', subtitle: 'Pure Fruit Pouches', category: 'fmcg', color: '#dc2626', markType: 'apple', desc: 'Vacuum-Dried Gourmet Snacks' },
    { id: 'y-cook', name: 'Y-COOK!', subtitle: 'Boiled Sweet Corn', category: 'fmcg', color: '#d97706', markType: 'corn', desc: 'Ready-To-Eat Healthy Snacks' },
    { id: 'nutrifresh', name: 'NutriFresh', subtitle: 'Dairy & Beverages', category: 'fmcg', color: '#0284c7', markType: 'milk', desc: 'Farm-Fresh Direct Delivery' },
    { id: 'bail-fmcg', name: 'bail naturals', subtitle: 'Pure Wellness Essentials', category: 'fmcg', color: '#0f172a', markType: 'clean-type', desc: 'Zero Chemical Daily Essentials' }
  ];

  // Creative Posters for Dual-Column Up/Down Auto-Scrolling Marquee (Image 3)
  const marqueeCol1 = [
    {
      id: 'marq-1',
      title: 'Roto Rudra Solar Pumping Solutions',
      tag: 'Industrial AgriTech',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'marq-2',
      title: 'Bon Vie Organic Fruit Pouches',
      tag: 'Packaging Design',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'marq-3',
      title: 'Agrimate Rural Harvesting Campaign',
      tag: 'Brand Campaign',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'marq-4',
      title: 'Karara Sound Engineering Brochure',
      tag: 'Print & Editorial',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=80'
    }
  ];

  const marqueeCol2 = [
    {
      id: 'marq-5',
      title: 'Vega Quick-Charge Grooming Trimmer',
      tag: 'Social Ad Creatives',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'marq-6',
      title: 'Y-Cook Ready Snacks Catalog',
      tag: 'Brochure Design',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'marq-7',
      title: 'Tax Heist Financial Campaign',
      tag: 'Digital Marketing Creative',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'marq-8',
      title: 'Boston Scientific Cardiology Brochure',
      tag: 'Healthcare Collateral',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80'
    }
  ];

  // Filter clients by tab and search
  const filteredBrands = useMemo(() => {
    return clientBrands.filter(brand => {
      const matchesCategory = activeCategory === 'all' || brand.category === activeCategory;
      const matchesSearch =
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="wm-clients-page-root">
      {/* ======================================================================
          1. HERO SECTION (MATCHING USER REFERENCE IMAGE 3)
          Tilted Dual-Column Up/Down Continuous Auto-Scrolling Marquee
          ====================================================================== */}
      <section className="wm-clients-hero">
        <div className="wm-clients-hero-container">
          <div className="wm-clients-hero-grid">
            {/* Left Column: Heading & Calls to Action */}
            <div className="wm-chero-left">
              <div className="wm-chero-tag-wrap">
                <span className="wm-chero-pill">TOP CREATIVE SERVICES IN INDIA</span>
              </div>

              <h1 className="wm-chero-title">
                Creative Solutions for a <span className="wm-chero-gradient">Digital World</span>
              </h1>

              <p className="wm-chero-desc">
                At Webmok, we craft innovative design, marketing, and technology solutions that help brands stand out and succeed in today's digital world.
              </p>

              <div className="wm-chero-cta-row">
                <button
                  type="button"
                  className="wm-chero-btn-enquire"
                  onClick={onOpenEnquiry}
                >
                  Enquire Now <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="wm-chero-btn-call"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Call in 28 Sec
                </button>
              </div>
            </div>

            {/* Right Column: 3D Angled Vertical Dual-Column Marquee ("Upper Niche Scroll") */}
            <div className="wm-clients-hero-right">
              <div className="wm-chero-marquee-perspective">
                {/* Column 1: Scrolls UP continuously */}
                <div className="wm-marquee-col wm-col-scroll-up">
                  <div className="wm-marquee-track-up">
                    {[...marqueeCol1, ...marqueeCol1].map((item, idx) => (
                      <div key={`c1-${item.id}-${idx}`} className="wm-marquee-card">
                        <img src={item.image} alt={item.title} className="wm-mcard-img" />
                        <div className="wm-mcard-overlay">
                          <span className="wm-mcard-tag">{item.tag}</span>
                          <h4 className="wm-mcard-title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Scrolls DOWN continuously */}
                <div className="wm-marquee-col wm-col-scroll-down">
                  <div className="wm-marquee-track-down">
                    {[...marqueeCol2, ...marqueeCol2].map((item, idx) => (
                      <div key={`c2-${item.id}-${idx}`} className="wm-marquee-card">
                        <img src={item.image} alt={item.title} className="wm-mcard-img" />
                        <div className="wm-mcard-overlay">
                          <span className="wm-mcard-tag">{item.tag}</span>
                          <h4 className="wm-mcard-title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edge Gradient Fades for Seamless Look */}
              <div className="wm-chero-top-fade"></div>
              <div className="wm-chero-bottom-fade"></div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Strip (Matching Image 2 / Image 3 Bottom Bar) */}
        <div className="wm-chero-bottom-strip">
          <div className="wm-clients-hero-container wm-cstrip-flex">
            <div className="wm-cstrip-links">
              <Link to="/our-clients" className="wm-cstrip-link active">Clients</Link>
              <span className="wm-cstrip-sep">|</span>
              <Link to="/creative-showcase" className="wm-cstrip-link">Showcase</Link>
              <span className="wm-cstrip-sep">|</span>
              <a
                href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="wm-cstrip-link wm-cstrip-wa"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>

            <div className="wm-cstrip-badge">
              <span>Award-Winning Digital Marketing Agency</span>
              <span className="wm-cstrip-sep">|</span>
              <span className="wm-cstrip-stars">
                Google 500+ ★★★★★
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. CLIENT LOGOS & BRANDS DIRECTORY (MATCHING DIGISTREET IMAGE 2)
          Clean White Brand Logo Grid with 12 Category Filter Tabs
          ====================================================================== */}
      <section className="wm-clients-brands-section">
        <div className="wm-clients-container">
          {/* Top Search & Filter Bar */}
          <div className="wm-cbrands-toolbar">
            <div className="wm-cbrands-search-wrap">
              <FaSearch className="wm-csearch-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search brand, company, or sector..."
                className="wm-cbrands-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="wm-csearch-clear"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="wm-cbrands-count-badge">
              <strong>{filteredBrands.length}</strong> Marquee Brands
            </div>
          </div>

          {/* 12 Category Tabs (Image 2 Match) */}
          <div className="wm-cbrands-tabs-wrap">
            <div className="wm-cbrands-tabs-scroll">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`wm-ctab-pill ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Brand Logos Grid (Matching Image 2 Clean White Surface) */}
          <div className="wm-cbrands-grid">
            {filteredBrands.map(brand => (
              <div key={brand.id} className="wm-cbrand-tile">
                <div className="wm-cbrand-inner">
                  {/* Brand Typography & Emblem */}
                  <div className="wm-cbrand-logo-display">
                    {/* Simulated SVG Logo Emblem */}
                    <div className="wm-cbrand-mark-wrap" style={{ color: brand.color }}>
                      {brand.markType === 'cross' && (
                        <div className="wm-mark-cross">
                          <span className="wm-mc-h"></span>
                          <span className="wm-mc-v"></span>
                        </div>
                      )}
                      {brand.markType === 'lotus' && <div className="wm-mark-lotus">❖</div>}
                      {brand.markType === 'leaf' && <div className="wm-mark-leaf">❧</div>}
                      {brand.markType === 'globe-mesh' && <div className="wm-mark-globe">🌐</div>}
                      {brand.markType === 'diamond' && <div className="wm-mark-diamond">✦</div>}
                      {brand.markType === 'monogram' && <div className="wm-mark-mono">JB</div>}
                      {brand.markType === 'herbal' && <div className="wm-mark-herbal">✿</div>}
                      {brand.markType === 'dna' && <div className="wm-mark-dna">🧬</div>}
                      {brand.markType === 'sea' && <div className="wm-mark-sea">≋</div>}
                      {brand.markType === 'bird' && <div className="wm-mark-bird">🦅</div>}
                      {brand.markType === 'wings' && <div className="wm-mark-wings">≫</div>}
                      {brand.markType === 'digital' && <div className="wm-mark-digital">⌘</div>}
                      {brand.markType === 'crest' && <div className="wm-mark-crest">🏛</div>}
                      {brand.markType === 'cube' && <div className="wm-mark-cube">⬡</div>}
                      {brand.markType === 'circle-eye' && <div className="wm-mark-rohto">◎</div>}
                      {brand.markType === 'pure-water' && <div className="wm-mark-water">💧</div>}
                      {brand.markType === 'circuit' && <div className="wm-mark-circuit">☊</div>}
                      {brand.markType === 'sound' && <div className="wm-mark-sound">♫</div>}
                      {brand.markType === 'bolt' && <div className="wm-mark-bolt">⚡</div>}
                      {brand.markType === 'pillar' && <div className="wm-mark-pillar">🏛</div>}
                      {brand.markType === 'tower' && <div className="wm-mark-tower">🏢</div>}
                      {brand.markType === 'gear-ev' && <div className="wm-mark-gear">⚙</div>}
                      {brand.markType === 'ev-volt' && <div className="wm-mark-ev">⚡</div>}
                      {brand.markType === 'wheel' && <div className="wm-mark-wheel">❂</div>}
                      {brand.markType === 'arrow-up' && <div className="wm-mark-arrow">▲</div>}
                      {brand.markType === 'ledger' && <div className="wm-mark-ledger">⇄</div>}
                      {brand.markType === 'shield-check' && <div className="wm-mark-shield">🛡</div>}
                      {brand.markType === 'chart' && <div className="wm-mark-chart">📈</div>}
                      {brand.markType === 'cloud' && <div className="wm-mark-cloud">☁</div>}
                      {brand.markType === 'ship' && <div className="wm-mark-ship">🚢</div>}
                      {brand.markType === 'molecule' && <div className="wm-mark-molecule">⚛</div>}
                      {brand.markType === 'wave' && <div className="wm-mark-wave">≈</div>}
                      {brand.markType === 'ingot' && <div className="wm-mark-ingot">■</div>}
                      {brand.markType === 'beam' && <div className="wm-mark-beam">工</div>}
                      {brand.markType === 'smile' && <div className="wm-mark-smile">☺</div>}
                      {brand.markType === 'hands' && <div className="wm-mark-hands">🤝</div>}
                      {brand.markType === 'tree' && <div className="wm-mark-tree">🌲</div>}
                      {brand.markType === 'scissors' && <div className="wm-mark-scissors">✂</div>}
                      {brand.markType === 'clean-type' && <div className="wm-mark-clean">bn</div>}
                      {brand.markType === 'wheat' && <div className="wm-mark-wheat">🌾</div>}
                      {brand.markType === 'apple' && <div className="wm-mark-apple">🍎</div>}
                      {brand.markType === 'corn' && <div className="wm-mark-corn">🌽</div>}
                      {brand.markType === 'milk' && <div className="wm-mark-milk">🥛</div>}
                      {brand.markType === 'sharp' && <div className="wm-mark-sharp">▲</div>}
                      {brand.markType === 'stone' && <div className="wm-mark-stone">◈</div>}
                      {brand.markType === 'condo' && <div className="wm-mark-condo">⊞</div>}
                    </div>

                    <h3 className="wm-cbrand-name" style={{ color: brand.color }}>
                      {brand.name}
                    </h3>
                  </div>

                  <span className="wm-cbrand-sub">{brand.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="wm-cbrands-empty">
              <h3>No brands found for "{searchQuery}"</h3>
              <p>Try clearing your search query or selecting a different category tab.</p>
              <button
                type="button"
                className="wm-csearch-reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================================
          3. GLOBAL REACH STRIP
          ====================================================================== */}
      <section className="wm-clients-footprint-sec">
        <div className="wm-clients-container">
          <div className="wm-cfoot-inner">
            <div className="wm-cfoot-text">
              <span className="wm-cfoot-pill">GLOBAL DELIVERY CAPABILITY</span>
              <h2>Empowering Enterprises Across 14+ Countries</h2>
              <p>
                From homegrown Indian innovators to Fortune 500 multinationals in the US, UK, UAE, and Singapore, Webmok delivers reliable engineering and revenue performance.
              </p>
            </div>

            <div className="wm-cfoot-badges">
              <div className="wm-cfbadge">
                <strong>150+</strong>
                <span>Active Marquee Clients</span>
              </div>
              <div className="wm-cfbadge">
                <strong>98.4%</strong>
                <span>Annual Client Retention</span>
              </div>
              <div className="wm-cfbadge">
                <strong>4.9/5</strong>
                <span>Verified Google Rating</span>
              </div>
              <div className="wm-cfbadge">
                <strong>100%</strong>
                <span>NDA &amp; IP Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. BOTTOM CONVERSION CTA STRIP
          ====================================================================== */}
      <section className="wm-clients-cta-sec">
        <div className="wm-clients-container">
          <div className="wm-ccta-box">
            <div className="wm-ccta-content">
              <h2>Ready to Become Our Next Growth Milestone?</h2>
              <p>
                Book an immediate 28-second technical consultation or request a custom scope tailored to your industry vertical.
              </p>
            </div>

            <div className="wm-ccta-actions">
              <button
                type="button"
                className="wm-ccta-btn-primary"
                onClick={onOpenEnquiry}
              >
                Request Custom Scope <FaArrowRight />
              </button>
              <button
                type="button"
                className="wm-ccta-btn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <a
                href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="wm-ccta-btn-wa"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
