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

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.wm-mega-parent') && !e.target.closest('.wm-mobile-drawer')) {
        setServicesDropdownOpen(false);
        setPackagesDropdownOpen(false);
        setClientsDropdownOpen(false);
        setInternationalDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <header className={`wm-navbar-header ${scrolled ? 'wm-header-scrolled' : ''}`}>
      {/* Top Announcement / Alert Bar */}
      <div className="wm-topbar">
        <div className="wm-topbar-container">
          <div className="wm-topbar-left">
            <span className="wm-topbar-alert-tag">Alert:</span>
            <div className="wm-topbar-marquee-wrap">
              <div className="wm-topbar-marquee-track">
                <div className="wm-topbar-marquee-group">
                  <span className="wm-topbar-gradient-text">
                    WEBMOK does not offer any jobs via WhatsApp. Such messages are fraudulent. Apply only through{' '}
                    <Link to="/career" className="wm-topbar-alert-link">Careers</Link>.
                  </span>
                  <span className="wm-topbar-dot">✦</span>
                  <span className="wm-topbar-gradient-text">
                    Beware of fake job offers & task fraud. WEBMOK never demands money for interviews or employment.
                  </span>
                  <span className="wm-topbar-dot">✦</span>
                </div>
                <div className="wm-topbar-marquee-group" aria-hidden="true">
                  <span className="wm-topbar-gradient-text">
                    WEBMOK does not offer any jobs via WhatsApp. Such messages are fraudulent. Apply only through{' '}
                    <Link to="/career" className="wm-topbar-alert-link">Careers</Link>.
                  </span>
                  <span className="wm-topbar-dot">✦</span>
                  <span className="wm-topbar-gradient-text">
                    Beware of fake job offers & task fraud. WEBMOK never demands money for interviews or employment.
                  </span>
                  <span className="wm-topbar-dot">✦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wm-topbar-right">
            <Link to="/contact-us" className="wm-topbar-link">Contact</Link>
            <span className="wm-topbar-sep">|</span>
            <Link to="/career" className="wm-topbar-link">Career</Link>
            <span className="wm-topbar-sep">|</span>
            <Link to="/blogs" className="wm-topbar-link">Blog</Link>
            <span className="wm-topbar-sep">|</span>
            <a href="tel:+918684031003" className="wm-topbar-phone">
              <FaPhoneAlt className="wm-topbar-phone-icon" />
              <span>+91 8684031003</span>
            </a>
          </div>
        </div>
      </div>

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
              <span
                role="button"
                tabIndex={0}
                className={`wm-nav-link wm-has-dropdown ${location.pathname.startsWith('/services') || servicesDropdownOpen ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setServicesDropdownOpen((prev) => !prev);
                  setPackagesDropdownOpen(false);
                  setClientsDropdownOpen(false);
                  setInternationalDropdownOpen(false);
                }}
              >
                Services <FaChevronDown className={`wm-dropdown-arrow ${servicesDropdownOpen ? 'wm-arrow-open' : ''}`} />
              </span>

              <div
                className={`wm-mega-menu ${servicesDropdownOpen ? 'wm-mega-visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
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
                  {/* Column 1: E-Commerce, Apps & SEO */}
                  <div className="wm-mega-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-cyan">
                          <FaShoppingCart />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">E-Commerce & Apps</h4>
                          <span className="wm-mtitle-sub">High-conversion engineering</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/e-commerce-development-services-company" onClick={() => setServicesDropdownOpen(false)}>E-Commerce Development</Link></li>
                        <li><Link to="/application-development-services" onClick={() => setServicesDropdownOpen(false)}>Application Development</Link></li>
                        <li><Link to="/android-app-development" onClick={() => setServicesDropdownOpen(false)}>Android App Development</Link></li>
                        <li><Link to="/ios-app-development" onClick={() => setServicesDropdownOpen(false)}>iOS App Development</Link></li>
                        <li><Link to="/shopify-woocommerce" onClick={() => setServicesDropdownOpen(false)}>Shopify & WooCommerce</Link></li>
                        <li><Link to="/custom-marketplace" onClick={() => setServicesDropdownOpen(false)}>Custom Marketplace</Link></li>
                      </ul>
                    </div>

                    {/* <div className="wm-mega-block" style={{ marginTop: '16px' }}>
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-coral">
                          <FaSearch />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">SEO Optimization</h4>
                          <span className="wm-mtitle-sub">Rankings & search visibility</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/seo-services-company" onClick={() => setServicesDropdownOpen(false)}>Search Engine Optimization Company</Link></li>
                        <li><Link to="/hire-seo-expert" onClick={() => setServicesDropdownOpen(false)}>Hire Dedicated SEO Expert</Link></li>
                      </ul>
                    </div> */}
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
                          <span className="wm-mtitle-sub">Modern full-stack platforms</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/word-press-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Wordpress Development</Link></li>
                        <li><Link to="/web-designing-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Web design & Development</Link></li>
                        <li><Link to="/e-commerce-development-services-company" onClick={() => setServicesDropdownOpen(false)}>E-Commerce Development</Link></li>
                        <li><Link to="/landing-page-development-services-company" onClick={() => setServicesDropdownOpen(false)}>Landing Page Development</Link></li>
                        <li><Link to="/website-development-and-design-services" onClick={() => setServicesDropdownOpen(false)}>Website Development & Design Services</Link></li>
                        <li><Link to="/application-development-services" onClick={() => setServicesDropdownOpen(false)}>Application Development</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Digital Marketing & Business Consultant */}
                  <div className="wm-mega-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-coral">
                          <FaBullhorn />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Digital Marketing</h4>
                          <span className="wm-mtitle-sub">Scalable customer acquisition</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/seo-services-company" onClick={() => setServicesDropdownOpen(false)}>Search Engine Optimization Company</Link></li>
                        <li><Link to="/ppc-services-company" onClick={() => setServicesDropdownOpen(false)}>PPC SERVICES</Link></li>
                        <li><Link to="/content-marketing-services-company" onClick={() => setServicesDropdownOpen(false)}>Content Marketing</Link></li>
                        <li><Link to="/social-media-marketing" onClick={() => setServicesDropdownOpen(false)}>Social Media Marketing</Link></li>
                        <li><Link to="/mobile-marketing-services-company" onClick={() => setServicesDropdownOpen(false)}>Mobile Marketing</Link></li>
                        <li><Link to="/video-editing" onClick={() => setServicesDropdownOpen(false)}>Video Editing</Link></li>
                      </ul>
                    </div>

                    {/* <div className="wm-mega-block" style={{ marginTop: '16px' }}>
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-navy">
                          <FaBriefcase />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Business Consultant</h4>
                          <span className="wm-mtitle-sub">Strategic scaling roadmaps</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/business-development-consulting" onClick={() => setServicesDropdownOpen(false)}>Business Development Consulting</Link></li>
                      </ul>
                    </div> */}
                  </div>

                  {/* Column 4: Graphic & Video, Outstanding Services */}
                  <div className="wm-mega-col">
                    <div className="wm-mega-block">
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-purple">
                          <FaVideo />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Graphic & Video</h4>
                          <span className="wm-mtitle-sub">Studio visual production</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/video-and-graphic-development-company" onClick={() => setServicesDropdownOpen(false)}>Video & Graphic</Link></li>
                        <li><Link to="/social-media-graphic-design-services-company" onClick={() => setServicesDropdownOpen(false)}>Social Media Graphic Design</Link></li>
                        <li><Link to="/video-editing" onClick={() => setServicesDropdownOpen(false)}>Video Editing</Link></li>
                        <li><Link to="/logo-design-services-company" onClick={() => setServicesDropdownOpen(false)}>Logo Design</Link></li>
                        <li><Link to="/promotional-video-editing-services-company" onClick={() => setServicesDropdownOpen(false)}>Promotional Video</Link></li>
                      </ul>
                    </div>

                    {/* <div className="wm-mega-block" style={{ marginTop: '16px' }}>
                      <div className="wm-mblock-header">
                        <div className="wm-cat-icon-wrap wm-cicon-blue">
                          <FaStar />
                        </div>
                        <div>
                          <h4 className="wm-mega-title">Outstanding Services</h4>
                          <span className="wm-mtitle-sub">High-impact growth</span>
                        </div>
                      </div>
                      <ul className="wm-mega-sublinks">
                        <li><Link to="/lead-generation-social-media-marketing-services-company" onClick={() => setServicesDropdownOpen(false)}>Lead Generation</Link></li>
                        <li><Link to="/social-media-optimization-services-company" onClick={() => setServicesDropdownOpen(false)}>Social Media Optimization</Link></li>
                        <li><Link to="/online-reputation-management-services-company" onClick={() => setServicesDropdownOpen(false)}>Online Reputation Management (ORM)</Link></li>
                        <li><Link to="/digital-marketing-services-company" onClick={() => setServicesDropdownOpen(false)}>Digital Marketing</Link></li>
                        <li><Link to="/facebook-marketing-services-company" onClick={() => setServicesDropdownOpen(false)}>Facebook Marketing</Link></li>
                      </ul>
                    </div> */}
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
              <span
                role="button"
                tabIndex={0}
                className={`wm-nav-link wm-has-dropdown ${location.pathname.includes('package') || packagesDropdownOpen ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setPackagesDropdownOpen((prev) => !prev);
                  setServicesDropdownOpen(false);
                  setClientsDropdownOpen(false);
                  setInternationalDropdownOpen(false);
                }}
              >
                Packages <FaChevronDown className={`wm-dropdown-arrow ${packagesDropdownOpen ? 'wm-arrow-open' : ''}`} />
              </span>

              <div
                className={`wm-pkg-flyout-menu ${packagesDropdownOpen ? 'wm-pkg-flyout-visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Column: Category Items */}
                <div className="wm-pkg-left-menu">
                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'seo' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('seo')}
                  >
                    <Link to="/seo-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>SEO Packages</span>
                      <FaChevronRight className="wm-pkg-item-arrow" />
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'ppc' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('ppc')}
                  >
                    <Link to="/ppc-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>PPC Packages</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'smm' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('smm')}
                  >
                    <Link to="/smm-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>SMM Packages</span>
                      <FaChevronRight className="wm-pkg-item-arrow" />
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'orm' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('orm')}
                  >
                    <Link to="/orm-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>ORM Packages</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'logo' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('logo')}
                  >
                    <Link to="/logo-design-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>Logo Designing</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'smo' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('smo')}
                  >
                    <Link to="/smo-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>SMO Packages</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'maintenance' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('maintenance')}
                  >
                    <Link to="/website-maintenance-packages" onClick={() => setPackagesDropdownOpen(false)}>
                      <span>Website Maintenance</span>
                    </Link>
                  </div>

                  <div
                    className={`wm-pkg-menu-item ${activePkgHover === 'website' ? 'wm-pkg-item-active' : ''}`}
                    onMouseEnter={() => setActivePkgHover('website')}
                  >
                    <Link to="/website-packages" onClick={() => setPackagesDropdownOpen(false)}>
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
                        <Link to="/seo-packages" onClick={() => setPackagesDropdownOpen(false)}>
                          All SEO Plans →
                        </Link>
                      </div>
                      <ul className="wm-pkg-sublinks">
                        <li><Link to="/local-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>Local SEO</Link></li>
                        <li><Link to="/offpage-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>OffPage SEO</Link></li>
                        <li><Link to="/onpage-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>On-Page SEO</Link></li>
                        <li><Link to="/technical-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>Technical SEO</Link></li>
                        <li><Link to="/white-label-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>White Label SEO Reseller</Link></li>
                        <li><Link to="/enterprise-seo-packages" onClick={() => setPackagesDropdownOpen(false)}>Enterprise SEO Package</Link></li>
                      </ul>
                    </div>
                  )}

                  {activePkgHover === 'smm' && (
                    <div className="wm-pkg-sublist-block">
                      <div className="wm-pkg-sublist-hdr">
                        <h5>Social Media Plans</h5>
                        <Link to="/smm-packages" onClick={() => setPackagesDropdownOpen(false)}>
                          All SMM Plans →
                        </Link>
                      </div>
                      <ul className="wm-pkg-sublinks">
                        <li><Link to="/facebook-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>Facebook Marketing</Link></li>
                        <li><Link to="/instagram-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>Instagram Marketing</Link></li>
                        <li><Link to="/linkedin-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>LinkedIn Marketing</Link></li>
                        <li><Link to="/youtube-marketing-packages" onClick={() => setPackagesDropdownOpen(false)}>YouTube Marketing</Link></li>
                      </ul>
                    </div>
                  )}

                  {activePkgHover !== 'seo' && activePkgHover !== 'smm' && (
                    <div className="wm-pkg-sublist-block wm-pkg-spotlight-block">
                      <div className="wm-pkg-spotlight-img-wrap">
                        <img
                          src="/onpagebenifts.jpg"
                          alt="Transparent Packages & ROI Guarantee"
                          className="wm-pkg-spotlight-img"
                        />
                      </div>
                      <h5>Transparent Packages & ROI Guarantee</h5>
                      <p>
                        All Webmok packages include 100% white-hat execution, dedicated project squad, and bi-weekly telemetry reporting.
                      </p>
                      <div className="wm-pkg-spot-btns">
                        <button
                          type="button"
                          className="wm-pkg-spot-call"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPackagesDropdownOpen(false);
                            onOpenCallMe();
                          }}
                        >
                          <FaPhoneAlt /> Call in 28 Sec
                        </button>
                        <button
                          type="button"
                          className="wm-pkg-spot-quote"
                          onClick={(e) => {
                            e.stopPropagation();
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
                role="button"
                tabIndex={0}
                className={`wm-nav-link wm-has-dropdown ${location.pathname.includes('client') || location.pathname.includes('showcase') || location.pathname.includes('testimonial') || clientsDropdownOpen ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setClientsDropdownOpen((prev) => !prev);
                  setServicesDropdownOpen(false);
                  setPackagesDropdownOpen(false);
                  setInternationalDropdownOpen(false);
                }}
              >
                Clients <FaChevronDown className={`wm-dropdown-arrow ${clientsDropdownOpen ? 'wm-arrow-open' : ''}`} />
              </span>

              <div
                className={`wm-clients-dropdown-menu ${clientsDropdownOpen ? 'wm-clients-dropdown-visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
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
                    <Link to="/video-reviews" onClick={() => setClientsDropdownOpen(false)}>
                      Video Reviews
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
                role="button"
                tabIndex={0}
                className={`wm-nav-link wm-has-dropdown ${location.pathname.startsWith('/international') || internationalDropdownOpen ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setInternationalDropdownOpen((prev) => !prev);
                  setServicesDropdownOpen(false);
                  setPackagesDropdownOpen(false);
                  setClientsDropdownOpen(false);
                }}
              >
                International <FaChevronDown className={`wm-dropdown-arrow ${internationalDropdownOpen ? 'wm-arrow-open' : ''}`} />
              </span>

              <div
                className={`wm-intl-mega-menu ${internationalDropdownOpen ? 'wm-intl-mega-visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="wm-intl-mega-inner">
                  <div className="wm-intl-cols-grid">
                    {/* Column 1: UNITED STATES */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>UNITED STATES</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/miami-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Miami Digital Marketing</Link></li>
                        <li><Link to="/florida-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Florida Digital Marketing</Link></li>
                        <li><Link to="/seo-services-new-york" onClick={() => setInternationalDropdownOpen(false)}>SEO Services in New York</Link></li>
                        <li><Link to="/los-angeles-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Los Angeles Digital Marketing</Link></li>
                        <li><Link to="/san-francisco-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>San Francisco Digital Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: CANADA */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>CANADA</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/canada-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Canada Digital Marketing</Link></li>
                        <li><Link to="/toronto-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Toronto Digital Marketing</Link></li>
                        <li><Link to="/ottawa-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Ottawa Digital Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: EUROPE & UK */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>EUROPE & UK</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/europe-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Europe Digital Marketing</Link></li>
                        <li><Link to="/uk-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>UK Digital Marketing</Link></li>
                        <li><Link to="/london-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>London Digital Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: MIDDLE EAST, AFRICA & APAC */}
                    <div className="wm-intl-col">
                      <div className="wm-intl-col-hdr">
                        <h4>MIDDLE EAST, AFRICA & APAC</h4>
                        <div className="wm-intl-hdr-bar"></div>
                      </div>
                      <ul className="wm-intl-links">
                        <li><Link to="/dubai-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Dubai Digital Marketing</Link></li>
                        <li><Link to="/south-africa-digital-marketing" className="wm-intl-highlight" onClick={() => setInternationalDropdownOpen(false)}>South Africa Digital Marketing</Link></li>
                        <li><Link to="/australia-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Australia Digital Marketing</Link></li>
                        <li><Link to="/melbourne-digital-marketing" onClick={() => setInternationalDropdownOpen(false)}>Melbourne Digital Marketing</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Bar with CTA buttons */}
                  <div className="wm-intl-bottom-bar">
                    <div className="wm-intl-bottom-left">
                      <p>Don't see your market? <strong>We deliver high-ROI digital solutions worldwide.</strong></p>
                    </div>
                    <div className="wm-intl-bottom-actions">
                      <button
                        type="button"
                        className="wm-intl-call-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setInternationalDropdownOpen(false);
                          onOpenCallMe();
                        }}
                      >
                        <FaPhoneAlt /> Call Me in 28 Sec
                      </button>
                      <button
                        type="button"
                        className="wm-intl-quote-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setInternationalDropdownOpen(false);
                          onOpenEnquiry();
                        }}
                      >
                        Request Free Quote →
                      </button>
                    </div>
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
                <div className="wm-mobile-intl-wrap">
                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">E-Commerce & Apps</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/e-commerce-development-services-company" onClick={() => setMobileMenuOpen(false)}>E-Commerce Development</Link></li>
                      <li><Link to="/application-development-services" onClick={() => setMobileMenuOpen(false)}>Application Development</Link></li>
                      <li><Link to="/android-app-development" onClick={() => setMobileMenuOpen(false)}>Android App Development</Link></li>
                      <li><Link to="/ios-app-development" onClick={() => setMobileMenuOpen(false)}>iOS App Development</Link></li>
                      <li><Link to="/shopify-woocommerce" onClick={() => setMobileMenuOpen(false)}>Shopify & WooCommerce</Link></li>
                      <li><Link to="/custom-marketplace" onClick={() => setMobileMenuOpen(false)}>Custom Marketplace</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">SEO Optimization</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/seo-services-company" onClick={() => setMobileMenuOpen(false)}>Search Engine Optimization Company</Link></li>
                      <li><Link to="/hire-seo-expert" onClick={() => setMobileMenuOpen(false)}>Hire Dedicated SEO Expert</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">Web Development</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/word-press-development-services-company" onClick={() => setMobileMenuOpen(false)}>Wordpress Development</Link></li>
                      <li><Link to="/web-designing-development-services-company" onClick={() => setMobileMenuOpen(false)}>Web design & Development</Link></li>
                      <li><Link to="/e-commerce-development-services-company" onClick={() => setMobileMenuOpen(false)}>E-Commerce Development</Link></li>
                      <li><Link to="/landing-page-development-services-company" onClick={() => setMobileMenuOpen(false)}>Landing Page Development</Link></li>
                      <li><Link to="/website-development-and-design-services" onClick={() => setMobileMenuOpen(false)}>Website Development & Design Services</Link></li>
                      <li><Link to="/application-development-services" onClick={() => setMobileMenuOpen(false)}>Application Development</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">Digital Marketing</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/seo-services-company" onClick={() => setMobileMenuOpen(false)}>Search Engine Optimization Company</Link></li>
                      <li><Link to="/ppc-services-company" onClick={() => setMobileMenuOpen(false)}>PPC SERVICES</Link></li>
                      <li><Link to="/content-marketing-services-company" onClick={() => setMobileMenuOpen(false)}>Content Marketing</Link></li>
                      <li><Link to="/social-media-marketing" onClick={() => setMobileMenuOpen(false)}>Social Media Marketing</Link></li>
                      <li><Link to="/mobile-marketing-services-company" onClick={() => setMobileMenuOpen(false)}>Mobile Marketing</Link></li>
                      <li><Link to="/video-editing" onClick={() => setMobileMenuOpen(false)}>Video Editing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">Business Consultant</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/business-development-consulting" onClick={() => setMobileMenuOpen(false)}>Business Development Consulting</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">Graphic & Video</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/video-and-graphic-development-company" onClick={() => setMobileMenuOpen(false)}>Video & Graphic</Link></li>
                      <li><Link to="/social-media-graphic-design-services-company" onClick={() => setMobileMenuOpen(false)}>Social Media Graphic Design</Link></li>
                      <li><Link to="/video-editing" onClick={() => setMobileMenuOpen(false)}>Video Editing</Link></li>
                      <li><Link to="/logo-design-services-company" onClick={() => setMobileMenuOpen(false)}>Logo Design</Link></li>
                      <li><Link to="/promotional-video-editing-services-company" onClick={() => setMobileMenuOpen(false)}>Promotional Video</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">Outstanding Services</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/lead-generation-social-media-marketing-services-company" onClick={() => setMobileMenuOpen(false)}>Lead Generation</Link></li>
                      <li><Link to="/social-media-optimization-services-company" onClick={() => setMobileMenuOpen(false)}>Social Media Optimization</Link></li>
                      <li><Link to="/online-reputation-management-services-company" onClick={() => setMobileMenuOpen(false)}>Online Reputation Management (ORM)</Link></li>
                      <li><Link to="/digital-marketing-services-company" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</Link></li>
                      <li><Link to="/facebook-marketing-services-company" onClick={() => setMobileMenuOpen(false)}>Facebook Marketing</Link></li>
                    </ul>
                  </div>

                  <div style={{ padding: '8px 0' }}>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        fontWeight: 700,
                        color: '#0b4f8a',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        background: '#e0f2fe',
                        borderRadius: '6px',
                        textAlign: 'center'
                      }}
                    >
                      View All Services Directory →
                    </Link>
                  </div>
                </div>
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
                  <li><Link to="/seo-packages" onClick={() => setMobileMenuOpen(false)}>SEO Packages (All)</Link></li>
                  <li><Link to="/local-seo-packages" onClick={() => setMobileMenuOpen(false)}>Local SEO Packages</Link></li>
                  <li><Link to="/offpage-seo-packages" onClick={() => setMobileMenuOpen(false)}>Off-Page SEO Packages</Link></li>
                  <li><Link to="/onpage-seo-packages" onClick={() => setMobileMenuOpen(false)}>On-Page SEO Packages</Link></li>
                  <li><Link to="/technical-seo-packages" onClick={() => setMobileMenuOpen(false)}>Technical SEO Packages</Link></li>
                  <li><Link to="/white-label-seo-packages" onClick={() => setMobileMenuOpen(false)}>White Label SEO Packages</Link></li>
                  <li><Link to="/enterprise-seo-packages" onClick={() => setMobileMenuOpen(false)}>Enterprise SEO Packages</Link></li>
                  <li><Link to="/smm-packages" onClick={() => setMobileMenuOpen(false)}>SMM Packages (All)</Link></li>
                  <li><Link to="/facebook-marketing-packages" onClick={() => setMobileMenuOpen(false)}>Facebook Marketing</Link></li>
                  <li><Link to="/instagram-marketing-packages" onClick={() => setMobileMenuOpen(false)}>Instagram Marketing</Link></li>
                  <li><Link to="/linkedin-marketing-packages" onClick={() => setMobileMenuOpen(false)}>LinkedIn Marketing</Link></li>
                  <li><Link to="/youtube-marketing-packages" onClick={() => setMobileMenuOpen(false)}>YouTube Marketing</Link></li>
                  <li><Link to="/ppc-packages" onClick={() => setMobileMenuOpen(false)}>PPC Packages</Link></li>
                  <li><Link to="/orm-packages" onClick={() => setMobileMenuOpen(false)}>ORM Packages</Link></li>
                  <li><Link to="/logo-design-packages" onClick={() => setMobileMenuOpen(false)}>Logo Designing</Link></li>
                  <li><Link to="/smo-packages" onClick={() => setMobileMenuOpen(false)}>SMO Packages</Link></li>
                  <li><Link to="/website-maintenance-packages" onClick={() => setMobileMenuOpen(false)}>Website Maintenance</Link></li>
                  <li><Link to="/website-packages" onClick={() => setMobileMenuOpen(false)}>Website Packages</Link></li>
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
                  <li><Link to="/video-reviews" onClick={() => setMobileMenuOpen(false)}>Video Reviews</Link></li>
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
                      <li><Link to="/miami-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Miami Digital Marketing</Link></li>
                      <li><Link to="/florida-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Florida Digital Marketing</Link></li>
                      <li><Link to="/seo-services-new-york" onClick={() => setMobileMenuOpen(false)}>SEO Services in New York</Link></li>
                      <li><Link to="/los-angeles-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Los Angeles Digital Marketing</Link></li>
                      <li><Link to="/san-francisco-digital-marketing" onClick={() => setMobileMenuOpen(false)}>San Francisco Digital Marketing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">CANADA</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/canada-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Canada Digital Marketing</Link></li>
                      <li><Link to="/toronto-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Toronto Digital Marketing</Link></li>
                      <li><Link to="/ottawa-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Ottawa Digital Marketing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">EUROPE & UK</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/europe-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Europe Digital Marketing</Link></li>
                      <li><Link to="/uk-digital-marketing" onClick={() => setMobileMenuOpen(false)}>UK Digital Marketing</Link></li>
                      <li><Link to="/london-digital-marketing" onClick={() => setMobileMenuOpen(false)}>London Digital Marketing</Link></li>
                    </ul>
                  </div>

                  <div className="wm-mobile-intl-group">
                    <strong className="wm-m-intl-hdr">MIDDLE EAST, AFRICA & APAC</strong>
                    <ul className="wm-mobile-sublist">
                      <li><Link to="/dubai-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Dubai Digital Marketing</Link></li>
                      <li><Link to="/south-africa-digital-marketing" onClick={() => setMobileMenuOpen(false)}>South Africa Digital Marketing</Link></li>
                      <li><Link to="/australia-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Australia Digital Marketing</Link></li>
                      <li><Link to="/melbourne-digital-marketing" onClick={() => setMobileMenuOpen(false)}>Melbourne Digital Marketing</Link></li>
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
