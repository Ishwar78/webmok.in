import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaAward,
  FaHeadset,
  FaClock,
  FaSearch,
  FaBullhorn,
  FaShareAlt,
  FaPenNib,
  FaLaptopCode,
  FaVideo,
  FaChartLine,
  FaBuilding,
  FaUserMd,
  FaShoppingCart,
  FaUtensils,
  FaBriefcase,
  FaCompass,
  FaRegLightbulb,
  FaProjectDiagram,
  FaSpinner
} from 'react-icons/fa';
import HeroLeadForm from '../../components/HeroLeadForm';
import '../../components/HeroTwoColShared.css';
import './DubaiDigitalMarketingPage.css';
import { useInternationalPageData, formatInternationalPrice } from '../../hooks/useInternationalPageData';
import { resolveMediaUrl } from '../../utils/mediaUrl';

const iconMap = {
  FaSearch: <FaSearch />,
  FaBullhorn: <FaBullhorn />,
  FaShareAlt: <FaShareAlt />,
  FaPenNib: <FaPenNib />,
  FaLaptopCode: <FaLaptopCode />,
  FaVideo: <FaVideo />,
  FaChartLine: <FaChartLine />,
  FaCompass: <FaCompass />,
  FaBuilding: <FaBuilding />,
  FaBriefcase: <FaBriefcase />,
  FaUserMd: <FaUserMd />,
  FaShoppingCart: <FaShoppingCart />,
  FaUtensils: <FaUtensils />,
  FaRocket: <FaRocket />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaRegLightbulb: <FaRegLightbulb />,
  FaAward: <FaAward />
};

const getIcon = (name, fallback = <FaRocket />) => {
  return iconMap[name] || fallback;
};

const InternationalDynamicPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const { slug } = useParams();
  const { pageData, loading, error } = useInternationalPageData(slug);
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (pageData && pageData.currency) {
      setCurrency(pageData.currency);
    }
  }, [pageData]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (loading && !pageData) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: '#0052cc', paddingTop: '100px' }}>
        <FaSpinner className="fa-spin" style={{ fontSize: '2.5rem', animation: 'spin 1s linear infinite' }} />
        <h3 style={{ color: '#0f172a', fontWeight: 600 }}>Loading international market details...</h3>
      </div>
    );
  }

  if (!pageData && !loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '120px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.4rem', color: '#0f172a', fontWeight: 800 }}>Page Not Found</h1>
        <p style={{ maxWidth: '500px', color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
          We could not locate the requested international landing page. It may have been relocated or updated in our CMS.
        </p>
        <Link to="/" style={{ background: '#0052cc', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          Return to Home
        </Link>
      </div>
    );
  }

  // Currency options
  const currencyList = [
    { code: pageData.currency || 'USD', symbol: pageData.currencySymbol || '$', rate: 1 },
    { code: 'USD', symbol: '$', rate: 1 },
    { code: 'INR', symbol: '₹', rate: 83 }
  ].filter((v, i, a) => a.findIndex(t => t.code === v.code) === i);

  return (
    <div className="wm-intl-dubai-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-hero-shared-section" id="overview">
        <div className="wm-hero-shared-container">
          <div className="wm-hero-two-col">
            {/* Left Column: Content */}
            <div className="wm-hero-col-left">
              <div className="wm-hero-breadcrumb">
                <Link to="/">Home</Link> / <span>International</span> / <span>{pageData.city || pageData.name}</span>
              </div>

              <span className="wm-hero-pill">
                <FaAward /> {pageData.tagline || `PREMIER DIGITAL MARKETING · ${pageData.city || pageData.name}`}
              </span>

              <h1 className="wm-hero-title">
                {pageData.heroItalic ? `${pageData.heroItalic} ` : 'Accelerate High-Yield Growth with '}
                <span className="wm-hero-title-highlight">{pageData.heroHighlight || pageData.name}</span>
              </h1>

              <p className="wm-hero-lead">
                {pageData.leadDesc}
              </p>

              <div className="wm-hero-cta-group">
                <button
                  type="button"
                  className="wm-hero-cta-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Custom Strategy Proposal`)}
                >
                  Get Free Custom Quote <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="wm-hero-cta-secondary"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Talk to Strategist
                </button>
              </div>

              {pageData.heroImage && (
                <div style={{ marginTop: '24px', borderRadius: '12px', overflow: 'hidden', maxWidth: '480px', border: '1px solid #e2e8f0' }}>
                  <img src={resolveMediaUrl(pageData.heroImage)} alt={pageData.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              )}
            </div>

            {/* Right Column: Hero Lead Form */}
            <div className="wm-hero-col-right">
              <HeroLeadForm
                formTitle={`Targeted ${pageData.city || 'Growth'} Proposal`}
                formSubtitle="Receive a full market roadmap and custom deliverable plan within 24 hours."
                submitButtonText="Request Free Growth Blueprint"
                sourcePage={`International / ${pageData.name || pageData.city}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-METRIC PERFORMANCE BAR */}
      {pageData.stats && pageData.stats.length > 0 && (
        <section className="wm-intl-dubai-hero-stats-bar">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-hstats-grid">
              {pageData.stats.map((s, idx) => (
                <div key={idx} className="wm-intl-dubai-hstat-item">
                  <div className="wm-intl-dubai-hstat-top">
                    <strong className="wm-intl-dubai-hstat-num">{s.num}</strong>
                    <div className="wm-intl-dubai-hstat-dot"></div>
                  </div>
                  <p className="wm-intl-dubai-hstat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. IN-PAGE STICKY NAVIGATION */}
      <nav className="wm-intl-dubai-inpage-nav">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-inpage-nav-inner">
            <a href="#overview" className="wm-intl-dubai-inpage-nav-link">Overview</a>
            {pageData.services?.length > 0 && <a href="#services" className="wm-intl-dubai-inpage-nav-link">Services</a>}
            {pageData.comparisonPoints?.length > 0 && <a href="#why-us" className="wm-intl-dubai-inpage-nav-link">Why Choose Us</a>}
            {pageData.resultsStats?.length > 0 && <a href="#results" className="wm-intl-dubai-inpage-nav-link">Live Telemetry</a>}
            {pageData.marketInsights?.length > 0 && <a href="#market-dynamics" className="wm-intl-dubai-inpage-nav-link">Market Insights</a>}
            {pageData.processSteps?.length > 0 && <a href="#process" className="wm-intl-dubai-inpage-nav-link">Our Approach</a>}
            {pageData.industries?.length > 0 && <a href="#industries" className="wm-intl-dubai-inpage-nav-link">Industries</a>}
            {pageData.plans?.length > 0 && <a href="#pricing-plans" className="wm-intl-dubai-inpage-nav-link">Published Rates</a>}
            {pageData.testimonials?.length > 0 && <a href="#testimonials" className="wm-intl-dubai-inpage-nav-link">Client Reviews</a>}
            {pageData.faqs?.length > 0 && <a href="#faqs" className="wm-intl-dubai-inpage-nav-link">FAQs</a>}
          </div>
        </div>
      </nav>

      {/* 4. SERVICES SUITE */}
      {pageData.services && pageData.services.length > 0 && (
        <section className="wm-intl-dubai-services-section" id="services">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">COMPREHENSIVE CAPABILITIES</span>
              <h2 className="wm-intl-dubai-sec-h2">
                Our {pageData.city || 'Strategic'} <span>Digital Marketing Services</span>
              </h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-services-grid">
              {pageData.services.map((svc, i) => (
                <div key={i} className="wm-intl-dubai-service-card">
                  <div className="wm-intl-dubai-svc-card-glow"></div>
                  <div className="wm-intl-dubai-svc-card-top">
                    <div className="wm-intl-dubai-svc-icon">
                      {getIcon(svc.icon, <FaRocket />)}
                    </div>
                    <span className="wm-intl-dubai-svc-num">0{i + 1}</span>
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="wm-intl-dubai-svc-card-footer">
                    <button
                      type="button"
                      className="wm-intl-dubai-svc-link-btn"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                    >
                      Inquire Capability <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. COMPARISON / WHY US */}
      {pageData.comparisonPoints && pageData.comparisonPoints.length > 0 && (
        <section className="wm-intl-dubai-why-section" id="why-us">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-why-grid">
              <div className="wm-intl-dubai-why-content">
                <span className="wm-intl-dubai-sec-badge">THE STRATEGIC ADVANTAGE</span>
                <h2>{pageData.whyHireOutsideTitle || `Why Hire Webmok for ${pageData.city || 'Your Market'}?`}</h2>
                <p>{pageData.whyHireDesc1 || pageData.bodyDesc}</p>
                {pageData.whyHireDesc2 && <p>{pageData.whyHireDesc2}</p>}
              </div>

              <div className="wm-intl-dubai-compare-table">
                <div className="wm-intl-dubai-compare-row wm-intl-dubai-compare-hdr">
                  <div>Deliverable / Metric</div>
                  <div>Typical Local Agency</div>
                  <div>Webmok Advantage</div>
                </div>
                {pageData.comparisonPoints.map((cp, idx) => (
                  <div key={idx} className="wm-intl-dubai-compare-row">
                    <div className="wm-intl-dubai-compare-feat">{cp.feature}</div>
                    <div className="wm-intl-dubai-compare-local">{cp.local}</div>
                    <div className="wm-intl-dubai-compare-wm">{cp.webmok}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. RESULTS TELEMETRY */}
      {pageData.resultsStats && pageData.resultsStats.length > 0 && (
        <section className="wm-intl-dubai-results-section" id="results">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">{pageData.resultsSubtitle || 'VERIFIED PERFORMANCE'}</span>
              <h2 className="wm-intl-dubai-sec-h2">{pageData.resultsTitle || 'Proven Results & Attributed ROI'}</h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-results-grid">
              {pageData.resultsStats.map((rs, i) => (
                <div key={i} className="wm-intl-dubai-result-card">
                  <strong>{rs.metric}</strong>
                  <p>{rs.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. MARKET DYNAMICS */}
      {pageData.marketInsights && pageData.marketInsights.length > 0 && (
        <section className="wm-intl-dubai-market-section" id="market-dynamics">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">{pageData.marketInsightsSubtitle || 'LOCAL DYNAMICS'}</span>
              <h2 className="wm-intl-dubai-sec-h2">{pageData.marketInsightsTitle || `What We Know About Marketing in ${pageData.city || 'Your Region'}`}</h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-market-grid">
              {pageData.marketInsights.map((mi, i) => (
                <div key={i} className="wm-intl-dubai-market-card">
                  <div className="wm-intl-dubai-market-card-glow"></div>
                  <div className="wm-intl-dubai-market-card-hdr">
                    <div className="wm-intl-dubai-market-badge-wrap">
                      <span className="wm-intl-dubai-market-badge">MARKET DYNAMICS</span>
                      <span className="wm-intl-dubai-market-num">0{i + 1}</span>
                    </div>
                    <div className="wm-intl-dubai-market-pulse-dot"></div>
                  </div>
                  <h4>{mi.title}</h4>
                  <p>{mi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. 4-STEP PROCESS */}
      {pageData.processSteps && pageData.processSteps.length > 0 && (
        <section className="wm-intl-dubai-process-section" id="process">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">OUR PROCESS & APPROACH</span>
              <h2 className="wm-intl-dubai-sec-h2">
                Our 4-Step <span>Agile Growth Framework</span>
              </h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-process-grid">
              {pageData.processSteps.map((ps, i) => (
                <div key={i} className="wm-intl-dubai-process-card">
                  <div className="wm-intl-dubai-proc-card-glow"></div>
                  <div className="wm-intl-dubai-proc-header-row">
                    <span className="wm-intl-dubai-proc-num">0{i + 1}</span>
                    <div className="wm-intl-dubai-proc-icon">
                      {i === 0 && <FaRegLightbulb />}
                      {i === 1 && <FaProjectDiagram />}
                      {i === 2 && <FaLaptopCode />}
                      {i === 3 && <FaRocket />}
                    </div>
                  </div>
                  <h4>{ps.title}</h4>
                  <p>{ps.desc}</p>
                  <div className="wm-intl-dubai-proc-step-tag">Phase 0{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. INDUSTRIES */}
      {pageData.industries && pageData.industries.length > 0 && (
        <section className="wm-intl-dubai-industries-section" id="industries">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">WHO WE WORK WITH</span>
              <h2 className="wm-intl-dubai-sec-h2">
                Specialized Industry <span>Growth Solutions</span>
              </h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-industries-grid">
              {pageData.industries.map((ind, i) => (
                <div key={i} className="wm-intl-dubai-industry-card">
                  <div className="wm-intl-dubai-ind-top">
                    <div className="wm-intl-dubai-ind-icon">
                      {getIcon(ind.icon, <FaBuilding />)}
                    </div>
                    <span className="wm-intl-dubai-ind-num">0{i + 1}</span>
                  </div>
                  <h4>{ind.name}</h4>
                  <p>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. PRICING PLANS */}
      {pageData.plans && pageData.plans.length > 0 && (
        <section className="wm-intl-dubai-pricing-section" id="pricing-plans">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
              <h2 className="wm-intl-dubai-sec-h2">
                Transparent {pageData.city || ''} <span>Growth Packages</span>
              </h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>

              {/* Currency Switcher */}
              <div className="wm-intl-dubai-currency-toggle" style={{ marginTop: '24px' }}>
                {currencyList.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    className={`wm-intl-dubai-curr-btn ${currency === c.code ? 'active' : ''}`}
                    onClick={() => setCurrency(c.code)}
                  >
                    {c.symbol} {c.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Grid */}
            <div className="wm-intl-dubai-cards-grid">
              {pageData.plans.map((plan, i) => {
                // Calculate or pick price
                const displayPrice = formatInternationalPrice(plan, currency, pageData);

                return (
                  <div key={i} className={`wm-intl-dubai-card ${plan.highlight ? 'popular' : ''}`}>
                    {plan.highlight && (
                      <div className="wm-intl-dubai-popular-tag">MOST POPULAR</div>
                    )}

                    <div className="wm-intl-dubai-card-top">
                      {plan.badge && <span className="wm-intl-dubai-plan-badge">{plan.badge}</span>}
                      <h3 className="wm-intl-dubai-card-name">{plan.name}</h3>
                      <p className="wm-intl-dubai-card-desc">{plan.desc}</p>
                    </div>

                    <div className="wm-intl-dubai-card-pricing">
                      <div className="wm-intl-dubai-price-row">
                        <span className="wm-intl-dubai-price-val">{displayPrice}</span>
                        <span className="wm-intl-dubai-price-period">/ month</span>
                      </div>
                    </div>

                    <div className="wm-intl-dubai-card-features">
                      <h4>What's Included:</h4>
                      <ul>
                        {(plan.features || []).map((feat, fi) => (
                          <li key={fi}>
                            <FaCheck className="wm-intl-dubai-feat-check" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="wm-intl-dubai-card-action">
                      <button
                        type="button"
                        className="wm-intl-dubai-select-btn"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${plan.name}`)}
                      >
                        Choose Plan <FaArrowRight />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 11. TESTIMONIALS */}
      {pageData.testimonials && pageData.testimonials.length > 0 && (
        <section className="wm-intl-dubai-testimonials-section" id="testimonials">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">CLIENT SUCCESS STORIES</span>
              <h2 className="wm-intl-dubai-sec-h2">
                What {pageData.city || 'Global'} <span>Leaders Say About Webmok</span>
              </h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-testimonials-grid">
              {pageData.testimonials.map((t, idx) => (
                <div key={idx} className="wm-intl-dubai-testimonial-card">
                  <div className="wm-intl-dubai-t-stars">
                    {[...Array(t.rating || 5)].map((_, si) => (
                      <FaStar key={si} />
                    ))}
                  </div>
                  <p className="wm-intl-dubai-t-quote">"{t.quote}"</p>
                  <div className="wm-intl-dubai-t-author">
                    <strong>{t.author}</strong>
                    <span>{t.role}{t.company ? ` · ${t.company}` : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. ADVANTAGES */}
      <section className="wm-intl-dubai-advantages-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">THE WEBMOK GUARANTEE</span>
            <h2 className="wm-intl-dubai-sec-h2">
              Engineered for <span>Predictable ROI</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-advantage-grid">
            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-dubai-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaRocket /></div>
                <span className="wm-intl-dubai-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaHeadset /></div>
                <span className="wm-intl-dubai-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaClock /></div>
                <span className="wm-intl-dubai-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="wm-intl-dubai-faqs-section" id="faqs">
          <div className="wm-intl-dubai-container">
            <div className="wm-intl-dubai-sec-heading-center">
              <span className="wm-intl-dubai-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="wm-intl-dubai-sec-h2">
                Common Queries About Our {pageData.city || ''} <span>Growth Packages</span>
              </h2>
              <div className="wm-intl-dubai-sec-bar-center"></div>
            </div>

            <div className="wm-intl-dubai-faqs-wrap">
              {pageData.faqs.map((faq, idx) => (
                <div key={idx} className={`wm-intl-dubai-faq-item ${openFaq === idx ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="wm-intl-dubai-faq-q"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openFaq === idx && (
                    <div className="wm-intl-dubai-faq-a">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-dubai-bottom-banner">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-banner-inner">
            <div className="wm-intl-dubai-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city || pageData.name}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-dubai-banner-btns">
              <button
                type="button"
                className="wm-intl-dubai-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-dubai-bbtn-quote"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Bottom Banner Inquiry`)}
              >
                Get Free Custom Proposal <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalDynamicPage;
