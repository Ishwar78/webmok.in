import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaPaperPlane,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaSearch,
  FaVideo,
  FaStar,
  FaBriefcase,
  FaShoppingCart,
  FaArrowRight,
  FaChevronRight,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaTags
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [internationalDropdownOpen, setInternationalDropdownOpen] = useState(false);
  const [activePkgHover, setActivePkgHover] = useState('seo');
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);
  const [mobilePackagesAccordion, setMobilePackagesAccordion] = useState(false);
  const [mobileClientsAccordion, setMobileClientsAccordion] = useState(false);
  const [mobileInternationalAccordion, setMobileInternationalAccordion] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPackagesDropdownOpen(false);
    setClientsDropdownOpen(false);
    setInternationalDropdownOpen(false);
  }, [location]);

  return (
    <header className={`wm-navbar-header ${scrolled ? 'wm-header-scrolled' : ''}`}>
      <div className="wm-nav-container">
        {/* Brand Logo */}
        <Link to="/" className="wm-brand-logo">
          <img
            src="/logo.png"
            alt="Web Mok"
            className="wm-logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="wm-desktop-nav">
          <ul className="wm-nav-list">
            {/* <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'wm-nav-link active' : 'wm-nav-link')}>
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'wm-nav-link active' : 'wm-nav-link')}>
                About Us
              </NavLink>
            </li>

            {/* DIBULL-STYLE MEGA MENU DROPDOWN */}
            <li
              className="wm-mega-parent"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'wm-nav-link wm-has-dropdown active' : 'wm-nav-link wm-has-dropdown')}
              >
                Services <FaChevronDown className="wm-dropdown-arrow" />
              </NavLink>

              <div className={`wm-mega-menu ${servicesDropdownOpen ? 'wm-mega-visible' : ''}`}>
                <div className="wm-mega-topbar">
                  <div className="wm-mega-topbar-left">
                    <span className="wm-mtop-pill">Digital Growth Architecture</span>
                    <span className="wm-mtop-text">Explore 24+ High-Performance Engineering & Marketing Solutions</span>
                  </div>
                  <Link to="/services" className="wm-mtop-all-link" onClick={() => setServicesDropdownOpen(false)}>
                    View All Services Directory <FaArrowRight />
                  </Link>
                </div>

                <div className="wm-mega-inner">
                  {/* Column 1: E-commerce & App Development */}
                  <div className="wm-mega-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-cyan">
                          <FaShoppingCart />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">E-Commerce Dev</h4>
                          <span className="wm-mtitle-sub">High-conversion stores</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/services/e-commerce-development" onClick={() => setServicesDropdownOpen(false)}>E-Commerce Development</Link></li>
                        <li><Link to="/services/shopify-woocommerce" onClick={() => setServicesDropdownOpen(false)}>Shopify & WooCommerce</Link></li>
                        <li><Link to="/services/custom-marketplace" onClick={() => setServicesDropdownOpen(false)}>Custom Marketplace</Link></li>
                      </ul>
                    </div>

                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-blue">
                          <FaMobileAlt />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">App Development</h4>
                          <span className="wm-mtitle-sub">iOS & Android solutions</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/services/application-development" onClick={() => setServicesDropdownOpen(false)}>Application Development</Link></li>
                        <li><Link to="/services/android-app-development" onClick={() => setServicesDropdownOpen(false)}>Android App Development</Link></li>
                        <li><Link to="/services/ios-app-development" onClick={() => setServicesDropdownOpen(false)}>iOS App Development</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Web Development */}
                  <div className="wm-mega-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-navy">
                          <FaLaptopCode />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Web Development</h4>
                          <span className="wm-mtitle-sub">Blazing-fast architectures</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/services/word-press-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Wordpress Development</Link></li>
                        <li><Link to="/services/web-designing-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Web Design & Development</Link></li>
                        <li><Link to="/services/e-commerce-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Custom Web Applications</Link></li>
                        <li><Link to="/services/landing-page-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Landing Page Development</Link></li>
                        <li><Link to="/services/website-design-development-rohtak-delhi" onClick={() => setServicesDropdownOpen(false)}>Enterprise Web Portal</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Digital Marketing & SEO */}
                  <div className="wm-mega-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-coral">
                          <FaBullhorn />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Digital Marketing</h4>
                          <span className="wm-mtitle-sub">Performance customer acquisition</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/services/seo-services-company" onClick={() => setServicesDropdownOpen(false)}>SEO - Search Engine Optimization</Link></li>
                        <li><Link to="/services/ppc-services-company" onClick={() => setServicesDropdownOpen(false)}>PPC & Performance Google Ads</Link></li>
                        <li><Link to="/services/content-marketing-services-company" onClick={() => setServicesDropdownOpen(false)}>Content Marketing Strategy</Link></li>
                        <li><Link to="/services/social-media-marketing" onClick={() => setServicesDropdownOpen(false)}>Social Media Marketing</Link></li>
                        <li><Link to="/hire-seo-expert" onClick={() => setServicesDropdownOpen(false)}>Hire Dedicated SEO Expert</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 4: Creative, Consulting & Spotlight Card */}
                  <div className="wm-mega-col wm-mega-spotlight-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-purple">
                          <FaVideo />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Creative & Consulting</h4>
                          <span className="wm-mtitle-sub">Video, branding & strategy</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/services/video-and-graphic-development-company" onClick={() => setServicesDropdownOpen(false)}>Video & Graphic Design</Link></li>
                        <li><Link to="/services/online-reputation-management-services-company" onClick={() => setServicesDropdownOpen(false)}>Online Reputation (ORM)</Link></li>
                        <li><Link to="/services/business-development-consulting" onClick={() => setServicesDropdownOpen(false)}>Business Consulting</Link></li>
                      </ul>
                    </div>

                    {/* DIBULL-STYLE SPOTLIGHT CARD */}
                    <div className="wm-mega-spotlight-card">
                      <div className="wm-mspot-tag">
                        <FaBolt /> Instant Consultation
                      </div>
                      <h5>Ready to Scale Your Brand?</h5>
                      <p>Talk with our Senior Solution Architect in 28 seconds & get an itemized scope.</p>
                      <div className="wm-mspot-actions">
                        <button
                          type="button"
                          className="wm-mspot-call-btn"
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenCallMe();
                          }}
                        >
                          <FaPhoneAlt /> Call Me in 28 Sec
                        </button>
                        <button
                          type="button"
                          className="wm-mspot-quote-btn"
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenEnquiry();
                          }}
                        >
                          Request Free Quote →
                        </button>
                      </div>
                      <div className="wm-mspot-trust-row">
                        <span><FaStar className="wm-star-gold" /> 4.9 Google Rating</span>
                        <span><FaShieldAlt className="wm-shield-green" /> 100% NDA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* PACKAGES MULTI-LEVEL FLYOUT DROPDOWN (MATCHING SCREENSHOT) */}
            <li
              className="wm-mega-parent wm-pkg-nav-parent"
              onMouseEnter={() => setPackagesDropdownOpen(true)}
              onMouseLeave={() => setPackagesDropdownOpen(false)}
            >
              <NavLink
                to="/packages/seo-packages"
                className={({ isActive }) => (isActive ? 'wm-nav-link wm-has-dropdown active' : 'wm-nav-link wm-has-dropdown')}
              >
                Packages <FaChevronDown className="wm-dropdown-arrow" />
              </NavLink>

              <div className={`wm-pkg-flyout-menu ${packagesDropdownOpen ? 'wm-pkg-flyout-visible' : ''}`}>
                {/* Left Column: Category Items */}
                <div className="wm-pkg-left-menu">
                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'seo' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('seo')}
                  >
                    <Link to="/packages/seo-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>SEO Packages</span>
                      <FaChevronRight className="wm-pkg-item-arrow" />
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'ppc' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('ppc')}
                  >
                    <Link to="/packages/ppc-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>PPC Packages</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'smm' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('smm')}
                  >
                    <Link to="/packages/smm-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>SMM Packages</span>
                      <FaChevronRight className="wm-pkg-item-arrow" />
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'orm' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('orm')}
                  >
                    <Link to="/packages/orm-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>ORM Packages</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'logo' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('logo')}
                  >
                    <Link to="/packages/logo-design-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>Logo Designing</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'smo' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('smo')}
                  >
                    <Link to="/packages/smo-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>SMO Packages</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'maintenance' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('maintenance')}
                  >
                    <Link to="/packages/website-maintenance-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>Website Maintenance</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'website' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('website')}
                  >
                    <Link to="/packages/website-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>Website Packages</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Flyout Submenu */}
                <div className="wm-pkg-right-submenu">
                  {activePkgHover === 'seo' && (
                    <div className="wm-pkg-sublist-block">
                      <div className="wm-pkg-sublist-hdr">
                        <h5>SEO Solutions</h5>
                        <Link to="/packages/seo-packages" onClick={() => setPackagesDropdownOpen(false)}>
                          All SEO Plans →
                        </Link>
                      </div>
                      <ul className="wm-pkg-sublinks">
                        <li><Link to="/packages/local-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>Local SEO</Link></li>
                        <li><Link to="/packages/offpage-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>OffPage SEO</Link></li>
                        <li><Link to="/packages/onpage-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>On-Page SEO</Link></li>
                        <li><Link to="/packages/technical-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>Technical SEO</Link></li>
                        <li><Link to="/packages/white-label-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>White Label SEO Reseller</Link></li>
                        <li><Link to="/packages/enterprise-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>Enterprise SEO Package</Link></li>
                      </ul>
                    </div>
                  )}

                  {activePkgHover === 'smm' && (
                    <div className="wm-pkg-sublist-block">
                      <div className="wm-pkg-sublist-hdr">
                        <h5>Social Media Plans</h5>
                        <Link to="/packages/smm-packages" onClick={() => setPackagesDropdownOpen(false)}>
                          All SMM Plans →
                        </Link>
                      </div>
                      <ul className="wm-pkg-sublinks">
                        <li><Link to="/packages/facebook-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>Facebook Marketing</Link></li>
                        <li><Link to="/packages/instagram-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>Instagram Marketing</Link></li>
                        <li><Link to="/packages/linkedin-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>LinkedIn Marketing</Link></li>
                        <li><Link to="/packages/youtube-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>YouTube Marketing</Link></li>
                      </ul>
                    </div>
                  )}

                  {activePkgHover !== 'seo' && activePkgHover !== 'smm' && (
                    <div className="wm-pkg-sublist-block wm-pkg-spotlight-block">
                      <h5>Transparent Packages & ROI Guarantee</h5>
                      <p>
                        All Webmok packages include 100% white-hat execution, dedicated project squad, and bi-weekly telemetry reporting.
                      </p>
                      <div className="wm-pkg-spot-btns">
                        <button
                          type="button"
                          className="wm-pkg-spot-call"
                          onClick={() => {
                            setPackagesDropdownOpen(false);
                            onOpenCallMe();
                          }}
                        >
                          <FaPhoneAlt /> Call in 28 Sec
                        </button>
                        <button
                          type="button"
                          className="wm-pkg-spot-quote"
                          onClick={() => {
                            setPackagesDropdownOpen(false);
                            onOpenEnquiry();
                          }}
                        >
                          Get Free Quote
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>

            {/* CLIENTS DROPDOWN (MATCHING DIGISTREET REFERENCE - EXCLUDING CASE STUDIES) */}
            <li
              className="wm-mega-parent wm-clients-nav-parent"
              onMouseEnter={() => setClientsDropdownOpen(true)}
              onMouseLeave={() => setClientsDropdownOpen(false)}
            >
              <span
                className={`wm-nav-link wm-has-dropdown ${location.pathname.includes('client') || location.pathname.includes('showcase') || location.pathname.includes('testimonial') ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                Clients <FaChevronDown className="wm-dropdown-arrow" />
              </span>

              <div className={`wm-clients-dropdown-menu ${clientsDropdownOpen ? 'wm-clients-dropdown-visible' : ''}`}>
                <ul className="wm-clients-drop-list">
                  <li>
                    <Link to="/our-clients" onClick={() => setClientsDropdownOpen(false)}>
                      Our Clients
                    </Link>
                  </li>
                  <li>
                    <Link to="/creative-showcase" onClick={() => setClientsDropdownOpen(false)}>
                      Creative Showcase
                    </Link>
                  </li>
                  <li>
                    <Link to="/video-showcase" onClick={() => setClientsDropdownOpen(false)}>
                      Video Showcase
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials" onClick={() => setClientsDropdownOpen(false)}>
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* INTERNATIONAL MEGA MENU DROPDOWN (MATCHING USER REFERENCE SCREENSHOT) */}
            <li
              className="wm-mega-parent wm-intl-nav-parent"
              onMouseEnter={() => setInternationalDropdownOpen(true)}
              onMouseLeave={() => setInternationalDropdownOpen(false)}
            >
              <span
                className={`wm-nav-link wm-has-dropdown ${location.pathname.startsWith('/international') ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                International <FaChevronDown className="wm-dropdown-arrow" />
              </span>

              <div className={`wm-intl-mega-menu ${internationalDropdownOpen ? 'wm-intl-mega-visible' : ''}`}>
                <div className="wm-intl-mega-inner">
                  <div className="wm-intl-cols-grid">
                    {/* Column 1: UNITED STATES */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>UNITED STATES</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/international/miami-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Miami Digital Marketing</Link></li>
                        <li><Link to="/international/florida-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Florida Digital Marketing</Link></li>
                        <li><Link to="/international/seo-services-new-york" onClick={() => setInternationalDropdownOpen(false)}>SEO Services in New York</Link></li>
                        <li><Link to="/international/los-angeles-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Los Angeles Digital Marketing</Link></li>
                        <li><Link to="/international/san-francisco-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>San Francisco Digital Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: CANADA */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>CANADA</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/international/canada-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Canada Digital Marketing</Link></li>
                        <li><Link to="/international/toronto-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Toronto Digital Marketing</Link></li>
                        <li><Link to="/international/ottawa-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Ottawa Digital Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: EUROPE & UK */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>EUROPE & UK</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/international/europe-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Europe Digital Marketing</Link></li>
                        <li><Link to="/international/uk-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>UK Digital Marketing</Link></li>
                        <li><Link to="/international/london-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>London Digital Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: MIDDLE EAST, AFRICA & APAC */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>MIDDLE EAST, AFRICA & APAC</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/international/dubai-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Dubai Digital Marketing</Link></li>
                        <li><Link to="/international/south-africa-digital-marketing" className="wm-intl-highlight" onClick={() => setInternationalDropdownOpen(false)}>South Africa Digital Marketing</Link></li>
                        <li><Link to="/international/australia-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Australia Digital Marketing</Link></li>
                        <li><Link to="/international/melbourne-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Melbourne Digital Marketing</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Bar matching screenshot */}
                  <div className="wm-intl-bottom-bar">
                    <p>Don't see your market? <strong>We work with brands worldwide.</strong></p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'wm-nav-link active' : 'wm-nav-link')}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'wm-nav-link active' : 'wm-nav-link')}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'wm-nav-link active' : 'wm-nav-link')}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action CTAs */}
        <div className="wm-header-actions">
          <button type="button" className="wm-btn-callme" onClick={onOpenCallMe}>
            <FaPhoneAlt className="wm-btn-icon" />
            <span>Call Me 28 Seconds</span>
          </button>
          <button type="button" className="wm-btn-enquiry" onClick={onOpenEnquiry}>
            <FaPaperPlane className="wm-btn-icon" />
            <span>Enquiry Now</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="wm-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`wm-mobile-drawer ${mobileMenuOpen ? 'wm-drawer-open' : ''}`}>
        <div className="wm-drawer-inner">
          <ul className="wm-mobile-nav-list">
            <li>
              <NavLink to="/" className="wm-mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="wm-mobile-link" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li className="wm-mobile-dropdown-item">
              <div
                className="wm-mobile-dropdown-header"
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
              >
                <span>Services</span>
                <FaChevronDown className={`wm-marrow ${mobileServicesAccordion ? 'wm-marrow-up' : ''}`} />
              </div>

              {mobileServicesAccordion && (
                <ul className="wm-mobile-sublist">
                  <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>All Services Directory</Link></li>
                  <li><Link to="/services/e-commerce-development" onClick={() => setMobileMenuOpen(false)}>E-Commerce Development</Link></li>
                  <li><Link to="/services/application-development" onClick={() => setMobileMenuOpen(false)}>App Development</Link></li>
                  <li><Link to="/services/web-designing-development-services-company" onClick={() => setMobileMenuOpen(false)}>Web Design & Development</Link></li>
                  <li><Link to="/services/seo-services-company" onClick={() => setMobileMenuOpen(false)}>SEO Services</Link></li>
                  <li><Link to="/services/ppc-services-company" onClick={() => setMobileMenuOpen(false)}>PPC Services</Link></li>
                  <li><Link to="/services/video-and-graphic-development-company" onClick={() => setMobileMenuOpen(false)}>Video & Graphic Design</Link></li>
                </ul>
              )}
            </li>

            {/* Packages Mobile Drawer Accordion */}
            <li className="wm-mobile-dropdown-item">
              <div
                className="wm-mobile-dropdown-header"
                onClick={() => setMobilePackagesAccordion(!mobilePackagesAccordion)}
              >
                <span>Packages</span>
                <FaChevronDown className={`wm-marrow ${mobilePackagesAccordion ? 'wm-marrow-up' : ''}`} />
              </div>

              {mobilePackagesAccordion && (
                <ul className="wm-mobile-sublist">
                  <li><Link to="/packages/seo-packages" onClick={() => setMobileMenuOpen(false)}>SEO Packages (All)</Link></li>
                  <li><Link to="/packages/local-seo-packages" onClick={() => setMobileMenuOpen(false)}>Local SEO Packages</Link></li>
                  <li><Link to="/packages/offpage-seo-packages" onClick={() => setMobileMenuOpen(false)}>Off-Page SEO Packages</Link></li>
                  <li><Link to="/packages/onpage-seo-packages" onClick={() => setMobileMenuOpen(false)}>On-Page SEO Packages</Link></li>
                  <li><Link to="/packages/technical-seo-packages" onClick={() => setMobileMenuOpen(false)}>Technical SEO Packages</Link></li>
                  <li><Link to="/packages/white-label-seo-packages" onClick={() => setMobileMenuOpen(false)}>White Label SEO Packages</Link></li>
                  <li><Link to="/packages/enterprise-seo-packages" onClick={() => setMobileMenuOpen(false)}>Enterprise SEO Packages</Link></li>
                  <li><Link to="/packages/smm-packages" onClick={() => setMobileMenuOpen(false)}>SMM Packages (All)</Link></li>
                  <li><Link to="/packages/facebook-marketing-packages" onClick={() => setMobileMenuOpen(false)}>Facebook Marketing</Link></li>
                  <li><Link to="/packages/instagram-marketing-packages" onClick={() => setMobileMenuOpen(false)}>Instagram Marketing</Link></li>
                  <li><Link to="/packages/linkedin-marketing-packages" onClick={() => setMobileMenuOpen(false)}>LinkedIn Marketing</Link></li>
                  <li><Link to="/packages/youtube-marketing-packages" onClick={() => setMobileMenuOpen(false)}>YouTube Marketing</Link></li>
                  <li><Link to="/packages/ppc-packages" onClick={() => setMobileMenuOpen(false)}>PPC Packages</Link></li>
                  <li><Link to="/packages/orm-packages" onClick={() => setMobileMenuOpen(false)}>ORM Packages</Link></li>
                  <li><Link to="/packages/logo-design-packages" onClick={() => setMobileMenuOpen(false)}>Logo Designing</Link></li>
                  <li><Link to="/packages/smo-packages" onClick={() => setMobileMenuOpen(false)}>SMO Packages</Link></li>
                  <li><Link to="/packages/website-maintenance-packages" onClick={() => setMobileMenuOpen(false)}>Website Maintenance</Link></li>
                  <li><Link to="/packages/website-packages" onClick={() => setMobileMenuOpen(false)}>Website Packages</Link></li>
                </ul>
              )}
            </li>

            {/* Clients Mobile Drawer Accordion */}
            <li className="wm-mobile-dropdown-item">
              <div
                className="wm-mobile-dropdown-header"
                onClick={() => setMobileClientsAccordion(!mobileClientsAccordion)}
              >
                <span>Clients</span>
                <FaChevronDown className={`wm-marrow ${mobileClientsAccordion ? 'wm-marrow-up' : ''}`} />
              </div>

              {mobileClientsAccordion && (
                <ul className="wm-mobile-sublist">
                  <li><Link to="/our-clients" onClick={() => setMobileMenuOpen(false)}>Our Clients</Link></li>
                  <li><Link to="/creative-showcase" onClick={() => setMobileMenuOpen(false)}>Creative Showcase</Link></li>
                  <li><Link to="/video-showcase" onClick={() => setMobileMenuOpen(false)}>Video Showcase</Link></li>
                  <li><Link to="/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link></li>
                </ul>
              )}
            </li>

            {/* International Mobile Drawer Accordion */}
            <li className="wm-mobile-dropdown-item">
              <div
                className="wm-mobile-dropdown-header"
                onClick={() => setMobileInternationalAccordion(!mobileInternationalAccordion)}
              >
                <span>International</span>
                <FaChevronDown className={`wm-marrow ${mobileInternationalAccordion ? 'wm-marrow-up' : ''}`} />
              </div>

              {mobileInternationalAccordion && (
                <div className="wm-mobile-intl-wrap">
                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">UNITED STATES</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/international/miami-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Miami Digital Marketing</Link></li>
                      <li><Link to="/international/florida-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Florida Digital Marketing</Link></li>
                      <li><Link to="/international/seo-services-new-york" onClick={() => setMobileMenuOpen(false)}>SEO Services in New York</Link></li>
                      <li><Link to="/international/los-angeles-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Los Angeles Digital Marketing</Link></li>
                      <li><Link to="/international/san-francisco-digital-marketing" onClick={() => setMobileMenuOpen(false)}>San Francisco Digital Marketing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">CANADA</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/international/canada-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Canada Digital Marketing</Link></li>
                      <li><Link to="/international/toronto-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Toronto Digital Marketing</Link></li>
                      <li><Link to="/international/ottawa-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Ottawa Digital Marketing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">EUROPE & UK</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/international/europe-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Europe Digital Marketing</Link></li>
                      <li><Link to="/international/uk-digital-marketing" onClick={() => setMobileMenuOpen(false)}>UK Digital Marketing</Link></li>
                      <li><Link to="/international/london-digital-marketing" onClick={() => setMobileMenuOpen(false)}>London Digital Marketing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">MIDDLE EAST, AFRICA & APAC</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/international/dubai-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Dubai Digital Marketing</Link></li>
                      <li><Link to="/international/south-africa-digital-marketing" onClick={() => setMobileMenuOpen(false)}>South Africa Digital Marketing</Link></li>
                      <li><Link to="/international/australia-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Australia Digital Marketing</Link></li>
                      <li><Link to="/international/melbourne-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Melbourne Digital Marketing</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/portfolio" className="wm-mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="wm-mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="wm-mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="wm-mobile-drawer-actions">
            <button
              type="button"
              className="wm-drawer-call-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallMe();
              }}
            >
              <FaPhoneAlt /> Call Me 28 Seconds
            </button>
            <button
              type="button"
              className="wm-drawer-enquiry-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
            >
              <FaPaperPlane /> Enquiry Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
