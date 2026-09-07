import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaWhatsapp,
  FaAward,
  FaGoogle,
  FaChevronRight,
  FaHeadset,
  FaClock,
  FaLaptopCode,
  FaCheckCircle
} from 'react-icons/fa';
import './OnpageSeoPackagesPage.css';

const OnpageSeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "On-Page SEO Packages",
    tagline: "ON-PAGE CONTENT & TECHNICAL SEO INDIA · EST. 2018",
    heroTitleHighlight: "On-Page SEO Packages in India",
    shortName: "On-Page SEO",
    leadDesc: "Are you looking for on-page SEO packages to optimize your content, keyword architecture, and internal siloing for maximum relevance?",
    bodyDesc: "WebMok audits and transforms your page titles, headings, semantic schema, image tags, and content depth to turn indexable pages into ranking engines. Get your on-page audit started today!",
    stats: [
  {
    "num": "100%",
    "label": "Semantic Keyword Alignment"
  },
  {
    "num": "3.5x",
    "label": "Organic CTR Boost"
  },
  {
    "num": "500+",
    "label": "Sites Optimized"
  },
  {
    "num": "100%",
    "label": "E-E-A-T Compliant"
  }
],
    plans: [
  {
    "name": "On-Page Starter",
    "badge": "Up to 10 Pages",
    "inrPrice": "9,000",
    "usdPrice": "149",
    "period": "/ month",
    "desc": "Meticulous on-page overhaul for core business and landing pages.",
    "features": [
      "Comprehensive On-Page Audit of 10 Pages",
      "Title Tags & Meta Descriptions Optimization",
      "Header Tag (H1-H6) Structuring",
      "Image Alt Text & Compression",
      "Internal Linking Architecture",
      "Keyword Density & Readability Balancing"
    ]
  },
  {
    "name": "On-Page Advanced",
    "badge": "Most Popular",
    "inrPrice": "18,000",
    "usdPrice": "299",
    "period": "/ month",
    "desc": "Complete 25-page on-page optimization including schema and content enhancements.",
    "highlight": true,
    "features": [
      "Full Optimization of Up to 25 Key Pages",
      "Schema.org (JSON-LD) Rich Snippets Integration",
      "Search Intent Content Rewrites & Additions",
      "Content Silo & Topic Cluster Structuring",
      "FAQ & Featured Snippet Optimization",
      "Core Web Vitals HTML/CSS Recommendations",
      "Before/After Optimization Scorecard"
    ]
  },
  {
    "name": "Enterprise On-Page",
    "badge": "High-SKU & 50+ Pages",
    "inrPrice": "34,000",
    "usdPrice": "549",
    "period": "/ month",
    "desc": "Full-scale on-page architecture for large catalogs, portals, and dynamic eCommerce stores.",
    "features": [
      "50+ Pages / Category Optimization",
      "Automated Dynamic Meta Tag Formulation",
      "Faceted Navigation SEO Structuring",
      "Entity & Vector Search Optimization for LLMs",
      "Dedicated Senior On-Page Strategist"
    ]
  }
],
    faqs: [
  {
    "q": "How does On-Page SEO improve rankings?",
    "a": "On-page SEO helps Google understand exactly what your pages are about, ensuring you rank for the right commercial search queries with high click-through rates."
  }
]
  };

  return (
    <div className="wm-pkg-page-root">
      {/* 1. HERO SECTION (MATCHING SCREENSHOT REFERENCE) */}
      <section className="wm-pkg-hero-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-hero-grid">
            {/* Left Column: Heading, Copy, & Buttons */}
            <div className="wm-pkg-hero-left">
              <span className="wm-pkg-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-pkg-hero-title-dual">
                <span className="wm-hero-italic-orange">Make Your Business Stand Out Using</span>
                <span className="wm-hero-bold-dark">{pageData.heroTitleHighlight}</span>
              </h1>

              <p className="wm-pkg-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-pkg-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-pkg-hero-btns-row">
                <button
                  type="button"
                  className="wm-pkg-btn-case-study"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Audit / Case Study`)}
                >
                  {pageData.shortName} Case Study <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-pkg-btn-packages-outline">
                  {pageData.shortName} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Credibility / Review Cards Stack */}
            <div className="wm-pkg-hero-right-trust">
              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>#1 SEO Company</h4>
                  <p>Clutch · India 2025</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-clutch">C</div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>On Upwork</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-upwork">up</div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>4.9 / 5</h4>
                  <p>
                    Google Reviews · 130+{' '}
                    <span className="wm-pkg-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-google-stars">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Certified Agency</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-google-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-pkg-stats-strip">
        <div className="wm-pkg-container">
          <div className="wm-pkg-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-pkg-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* ================================
    ON-PAGE SEO INTRO SECTION
================================ */}

<section className="opseo-intro-section">
  <div className="opseo-container">

    <div className="opseo-intro-grid">

      {/* Left Content */}
      <div className="opseo-intro-left">

        <span className="opseo-tag">
          AFFORDABLE ON-PAGE SEO PACKAGES
        </span>

        <h1 className="opseo-main-title">
          Best On-Page SEO
          <span>Packages in India</span>
        </h1>

      </div>

      {/* Right Content */}
      <div className="opseo-intro-right">

        <p>
          <span>Webmok Technologies is a great option for enterprises</span>
          {" "}looking to enhance their on-page SEO. Our team of SEO experts
          is highly knowledgeable and can optimize your website's on-page
          elements, including content and meta tags, to improve your search
          engine rankings.
        </p>

      </div>

    </div>

  </div>
</section>



{/* =========================================
    RANKON EXPERIENCE / NUMBERS SECTION
========================================= */}

<section className="opseo-numbers-section">

  {/* Background Image */}
  <div className="opseo-numbers-bg"></div>

  {/* Dark Overlay */}
  <div className="opseo-numbers-overlay"></div>


  <div className="opseo-numbers-container">

    {/* Heading */}

    <div className="opseo-numbers-heading">

      <span className="opseo-numbers-subtitle">
        WHY CHOOSE US
      </span>

      <h2>
        Webmok SEO Expertise,
        <span> Backed by Numbers</span>
      </h2>

      {/* <p>
        Here are a few numbers that reflect RankON Technologies'
        experience, capabilities, and commitment to delivering
        quality SEO services.
      </p> */}

    </div>


    {/* Statistics */}

    <div className="opseo-stats-grid">


      {/* Stat 1 */}

      <div className="opseo-stat-item">

        <div className="opseo-stat-number">
          500<span>+</span>
        </div>

        <div className="opseo-stat-line"></div>

        <p>
          Happy Customers
        </p>

      </div>


      {/* Stat 2 */}

      <div className="opseo-stat-item">

        <div className="opseo-stat-number">
          1,000<span>+</span>
        </div>

        <div className="opseo-stat-line"></div>

        <p>
          SEO Projects Completed
        </p>

      </div>


      {/* Stat 3 */}

      <div className="opseo-stat-item">

        <div className="opseo-stat-number">
          50K<span>+</span>
        </div>

        <div className="opseo-stat-line"></div>

        <p>
          Keywords Ranked
        </p>

      </div>


      {/* Stat 4 */}

      <div className="opseo-stat-item">

        <div className="opseo-stat-number">
          1K<span>+</span>
        </div>

        <div className="opseo-stat-line"></div>

        <p>
          Websites Optimized
        </p>

      </div>

    </div>


    {/* Button */}

    {/* <div className="opseo-numbers-button-wrap">

      <button className="opseo-numbers-button">

        <span>
          Check Our Reviews
        </span>

        <span className="opseo-button-arrow">
          ↗
        </span>

      </button>

    </div> */}


  </div>

</section>
      
{/* ================================
    ON-PAGE SEO INCLUDE SECTION
================================ */}

<section className="opseo-include-section">

  <div className="opseo-container">

    <div className="opseo-include-grid">

      {/* Left Content */}

      <div className="opseo-include-content">

        <span className="opseo-include-tag">
          PACKAGES INCLUDE
        </span>


        <h2 className="opseo-include-title">
          What Do On-Page SEO
          <span>Packages Include?</span>
        </h2>


        <p>
          On-page SEO packages are a critical element of an adequate
          digital marketing strategy aimed at improving a website's
          on-page elements to achieve higher search engine rankings
          and enhance user experience.
        </p>


        <p>
          These packages typically include various services, such as
          keyword research, content optimization, meta tag optimization,
          header tag optimization, and internal linking improvements.
        </p>


        {/* Optional Features */}

        <div className="opseo-feature-list">

          <div className="opseo-feature-item">
            <span className="opseo-check">✓</span>
            Keyword Research
          </div>

          <div className="opseo-feature-item">
            <span className="opseo-check">✓</span>
            Content Optimization
          </div>

          <div className="opseo-feature-item">
            <span className="opseo-check">✓</span>
            Meta Tag Optimization
          </div>

        </div>

      </div>


      {/* Right Image */}

      <div className="opseo-include-image">

        <div className="opseo-image-glow"></div>

        <img
          src="/onpage1.avif"
          alt="On Page SEO Services"
        />

      </div>

    </div>

  </div>




{/* =========================================
    IMPORTANCE OF ON-PAGE SEO SECTION
========================================= */}

<section className="opseo-importance-section">
  <div className="opseo-container">

    <div className="opseo-importance-box">

      {/* Background Effects */}
      <div className="opseo-importance-glow glow-one"></div>
      <div className="opseo-importance-glow glow-two"></div>

      {/* Heading */}
      <h2 className="opseo-importance-title">
        Importance of{" "}
        <span>On-Page SEO</span>
      </h2>

      {/* Content */}
      <div className="opseo-importance-content">

        <p>
          On-page SEO is a crucial aspect of digital marketing that enables
          businesses to improve their website's visibility, ranking, and
          organic traffic. The importance of On-Page SEO cannot be overstated,
          as it applies to optimizing individual web pages to make them more
          search engine friendly. By employing diverse strategies, including
          keyword optimization, content creation, meta tag optimization, and
          internal linking, businesses can enhance their website's ranking in
          search engine results pages (SERPs).
        </p>

        <p>
          Keyword optimization is a core component of on-page SEO, which
          involves identifying and targeting relevant keywords to use within
          the site's content. These keywords help search engines understand
          what the page is about and thus rank it accordingly. Additionally,
          creating high-quality content that is optimized for search engines
          can further improve the website's ranking. Thus, businesses must
          focus on producing engaging and informative content that incorporates
          targeted keywords.
        </p>

      </div>

      {/* Button */}
      <div className="opseo-importance-btn-wrap">
        <a href="#contact" className="opseo-importance-btn">
          <span>Get Started Now!</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

    </div>

  </div>
</section>







{/* =========================================
    WHY RANKON SECTION
========================================= */}

<section className="opseo-why-section">
  <div className="opseo-container">
    <div className="opseo-why-grid">

      {/* LEFT CONTENT */}
      <div className="opseo-why-content">

        <span className="opseo-why-tag">
          WHY WEBMOK
        </span>

        <h2 className="opseo-why-title">
          Why Webmok
          <br />
          Technologies for
          <span> On-Page</span>
          <br />
          <span>SEO Packages</span>
        </h2>

        <div className="opseo-why-text">

          <p>
            If you're looking for effective on-page SEO packages,
            there's a good chance that you've heard of Webmok
            Technologies. But why select this company over others?
            Webmok Technologies is a well-established digital marketing
            agency with years of experience. We specialize in delivering
            customized and affordable SEO solutions to companies of all
            sizes. Whether you're a startup or a large enterprise,
            Webmok has the expertise to help boost your online visibility
            through compelling on-page optimization.
          </p>

          <p>
            Another reason why Webmok Technologies stands out from other
            digital marketing agencies is because of its dedication to
            quality. We use only ethical and white-hat techniques that
            comply with Google's guidelines, assuring that your website
            doesn't get penalized by search engines. Moreover, they
            conduct detailed studies and analyses before implementing any
            on-page optimisation strategies to ensure their efforts are
            tailored to your company's needs.
          </p>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="opseo-why-image">

        <div className="opseo-why-image-bg"></div>

        <img
          src="/onpage3.avif"
          alt="Why Choose RankON for On Page SEO"
        />

      </div>

    </div>
  </div>
</section>
</section>

{/* 3. TIERED PRICING PLANS SECTION */}
      <section className="wm-pkg-pricing-section" id="pricing-plans">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Transparent Pricing</span>
            <h2 className="wm-pkg-sec-title">Flexible Monthly {pageData.shortName} Plans with Zero Lock-In</h2>
            <div className="wm-pkg-bar"></div>
            

            {/* Currency Switcher */}
            <div className="wm-pkg-currency-toggle">
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR (India)
              </button>
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD (Global)
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className={`wm-pkg-cards-grid wm-grid-${pageData.plans.length}`}>
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-pkg-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-pkg-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-pkg-card-top">
                    {plan.badge && <span className="wm-pkg-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-pkg-card-name">{plan.name}</h3>
                    <p className="wm-pkg-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-pkg-card-pricing">
                    <div className="wm-pkg-price-row">
                      <span className="wm-pkg-price-val">{displayPrice}</span>
                      <span className="wm-pkg-price-period">{plan.period || '/ month'}</span>
                    </div>
                  </div>

                  <div className="wm-pkg-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-pkg-card-action">
                    <button
                      type="button"
                      className="wm-pkg-select-btn"
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
{/* =========================================
    BENEFITS OF ON-PAGE SEO SECTION
========================================= */}

<section className="opseo-benefits-section">
  <div className="opseo-container">
    <div className="opseo-benefits-grid">

      {/* LEFT CONTENT */}
      <div className="opseo-benefits-content">

        <span className="opseo-benefits-tag">
          BENEFITS
        </span>

        <h2 className="opseo-benefits-title">
          Benefits of On-Page
          <span>SEO Packages</span>
        </h2>

        <div className="opseo-benefits-text">
          <p>
            On-page SEO Packages offer multiple benefits to companies looking
            to enhance their online presence. These packages deliver a thorough
            process to optimizing website content, which aids in enhancing
            search engine ranking and eventually driving traffic toward the
            site.
          </p>

          <p>
            Companies that invest in On-Page SEO Packages can expect an
            increase in organic traffic, better user engagement, and improved
            conversion rates.
          </p>
        </div>

        {/* Benefits Points */}
        <div className="opseo-benefits-points">

          <div className="opseo-benefit-point">
            <span className="opseo-benefit-icon">↗</span>
            <span>Higher Search Rankings</span>
          </div>

          <div className="opseo-benefit-point">
            <span className="opseo-benefit-icon">✓</span>
            <span>Better User Experience</span>
          </div>

          <div className="opseo-benefit-point">
            <span className="opseo-benefit-icon">+</span>
            <span>Improved Organic Traffic</span>
          </div>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="opseo-benefits-image">

        <div className="opseo-benefits-circle circle-one"></div>
        <div className="opseo-benefits-circle circle-two"></div>

        <img
          src="/onpagebenifts.jpg"
          alt="Benefits of On Page SEO Packages"
        />

      </div>

    </div>
  </div>
</section>

      {/* 4. WHY CHOOSE WEBMOK */}
      <section className="wm-pkg-why-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Why Partner With Us</span>
            <h2 className="wm-pkg-sec-title">The WebMok Advantage in {pageData.shortName} Execution</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-why-grid">
            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaShieldAlt /></div>
              <h4>100% White-Hat & Safe</h4>
              <p>Zero spam, zero shortcuts. We strictly execute high-grade, sustainable methods that protect your brand equity.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaRocket /></div>
              <h4>Full Telemetry Reporting</h4>
              <p>Transparent bi-weekly and monthly dashboards tracking your key metrics, conversions, and direct ROI.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaHeadset /></div>
              <h4>Dedicated Account Squad</h4>
              <p>Work directly with dedicated senior strategists, copywriters, and engineers with direct phone & Slack support.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS ACCORDION */}
      <section className="wm-pkg-faqs-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-pkg-sec-title">Common Queries About {pageData.shortName} Packages</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`wm-pkg-faq-item ${openFaq === idx ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="wm-pkg-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-pkg-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONVERSION BANNER */}
      <section className="wm-pkg-bottom-banner">
        <div className="wm-pkg-container">
          <div className="wm-pkg-banner-inner">
            <div className="wm-pkg-banner-text">
              <h2>Ready to Accelerate Growth with Our {pageData.shortName} Packages?</h2>
              <p>Schedule a quick 1-on-1 audit with our senior specialists today. Get a customized campaign blueprint tailored to your targets.</p>
            </div>
            <div className="wm-pkg-banner-btns">
              <button
                type="button"
                className="wm-pkg-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-pkg-bbtn-quote"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Bottom Banner Inquiry`)}
              >
                Get Custom Quote <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnpageSeoPackagesPage;
