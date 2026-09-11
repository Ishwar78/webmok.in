import React, { useState } from 'react';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaChevronDown,
  FaCheckCircle,
  FaLayerGroup,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaLaptopCode,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaBullhorn,
  FaTools,
  FaGlobe,
  FaShoppingBag,
  FaVideo,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './OrmServicesPage.css';

const OrmServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "Of confidential corporate reputation defense"
  },
  {
    "num": "200+",
    "label": "Executive and enterprise reputations repaired"
  },
  {
    "num": "95%+",
    "label": "Page 1 Google negative link suppression rate"
  },
  {
    "num": "100%",
    "label": "Confidentiality & Non-Disclosure guarantee"
  }
];

  const caseStudies = [
  {
    "cat": "Hospitality & Luxury Hotel",
    "metric": "4.8★",
    "sub": "Rating Restored · 1,400 Reviews",
    "name": "Grand Royal Palace Hotel",
    "desc": "Resolved competitor smear campaign and generated 850+ verified 5-star guest reviews on Google Maps."
  },
  {
    "cat": "Corporate Managing Director",
    "metric": "100%",
    "sub": "Defamatory Links Pushed off Page 1 & 2",
    "name": "Confidential B2B Executive",
    "desc": "Reverse-SEO suppression replacing misleading tabloid links with verified Forbes and business journal articles."
  },
  {
    "cat": "Healthcare & Multispeciality",
    "metric": "+340%",
    "sub": "Patient Consultation Inquiries",
    "name": "Metro Healthcare Group",
    "desc": "Eliminated defamatory consumer forum threads and established Google Knowledge Graph verified panel."
  },
  {
    "cat": "Fintech & NBFC",
    "metric": "98%",
    "sub": "Positive SERP Sentiment Ratio",
    "name": "SecureLend Financial Group",
    "desc": "Replaced negative review aggregator links with Tier-1 press releases and verified customer case studies."
  },
  {
    "cat": "Real Estate Developer",
    "metric": "₹65Cr",
    "sub": "Inbound Property Deals Unlocked",
    "name": "Prestige Infrastructure NCR",
    "desc": "De-indexed malicious forum links and restored consumer buyer confidence ahead of project launch."
  },
  {
    "cat": "EdTech Institute",
    "metric": "4.9★",
    "sub": "Rating Across 2,800 Student Reviews",
    "name": "CareerPro Learning",
    "desc": "Proactive review collection system offsetting disgruntled reviews with authenticated graduate testimonials."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaShieldAlt />,
      title: "Reverse-SEO Search Suppression",
      desc: "Pushing negative, defamatory search results down below Google Page 2 and 3."
    },
    {
      badge: '02',
      icon: <FaAward />,
      title: "Tier-1 Digital PR & News Articles",
      desc: "Publishing authoritative, verified press coverage on prestigious media platforms."
    },
    {
      badge: '03',
      icon: <FaUsers />,
      title: "Google Review Management",
      desc: "Disputing fake reviews and systematically capturing positive 5-star client ratings."
    },
    {
      badge: '04',
      icon: <FaLaptopCode />,
      title: "Knowledge Graph & Wikipedia",
      desc: "Establishing verified Google Knowledge Panels and authoritative entity citations."
    },
    {
      badge: '05',
      icon: <FaSearch />,
      title: "Executive Brand Defense",
      desc: "Curating personal website portfolios and professional bios for C-Suite leaders."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "24/7 Brand Sentiment Monitoring",
      desc: "Real-time alert telemetry detecting emerging online threats before they escalate."
    }
  ];

  const industries = [
  "Electronics & Technology",
  "Real Estate & Infrastructure",
  "E-Commerce & D2C Brands",
  "Manufacturing & Industrial",
  "Healthcare & Medical Clinics",
  "Education, Coaching & EdTech",
  "Automotive & EV Mobility",
  "Financial Services & Fintech",
  "Hospitality & Tourism",
  "Home Decor & Construction",
  "Food & Beverage (FMCG)",
  "B2B Corporate Services"
];

  const faqs = [
  {
    "q": "Can negative articles or links be completely removed from Google?",
    "a": "If a link violates Google Search Essentials, contains non-consensual personal data, or infringes copyright/defamation laws, it can be permanently de-indexed. In other cases, we execute reverse-SEO to bury it past Page 2 where less than 2% of users ever look."
  },
  {
    "q": "Is the ORM process strictly confidential?",
    "a": "100% yes. All ORM engagements are governed by strict legally binding Non-Disclosure Agreements (NDA). We never disclose client identities or campaign tactics."
  },
  {
    "q": "How long does reverse-SEO link suppression typically take?",
    "a": "Noticeable link displacement typically takes 60 to 90 days. Completely displacing authoritative negative links off Google Page 1 and Page 2 usually requires 4 to 6 months of steady authority building."
  },
  {
    "q": "Can fake or malicious Google reviews be removed?",
    "a": "Yes! We file structured policy violation appeals directly with Google to remove reviews that violate policies regarding conflict of interest, hate speech, harassment, or fake engagement."
  },
  {
    "q": "How do you generate genuine positive reviews without violating guidelines?",
    "a": "We build automated SMS and WhatsApp post-service feedback workflows that direct genuinely happy clients to leave Google reviews, while routing complaints privately to management."
  },
  {
    "q": "Do you work with individuals as well as corporate enterprises?",
    "a": "Yes, we manage reputation defense for public figures, corporate executives, doctors, attorneys, high-growth startups, and listed corporations."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root ormservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Reputation Management (ORM)</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Executive & Brand Protection · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Strategic <span>Online Reputation Management</span> (ORM)
          </h1>
          <p className="wm-sp-hero-lead">
            Protect brand credibility, suppress damaging Google search results, resolve negative reviews, and establish undeniable executive authority with confidential ORM solutions.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free Custom Quote <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Seconds
            </button>
          </div>

          {/* 4-Metric Performance Bar */}
          <div className="wm-seost">
            {stats.map((st, i) => (
              <div key={i} className="wm-seost__i">
                <p className="wm-seost__n">{st.num}</p>
                <p className="wm-seost__l">{st.label}</p>
              </div>
            ))}
          </div>
        
            </div>
            <div className="wm-sp-hero-col-right">
              <HeroLeadForm
                pageName="Reputation Management (ORM)"
                source="Reputation Management (ORM) Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rating Scorecard Badge */}
      <div className="wm-dsm-rating-wrap">
        <div className="wm-sp-container">
          <div className="wm-dsm-rating">
            <div className="wm-dsm-rating__score">
              <span className="wm-dsm-rating__num">4.9</span>
              <span className="wm-dsm-rating__out">/5</span>
            </div>
            <div>
              <div className="wm-dsm-rating__stars" aria-hidden="true">★★★★★</div>
              <p className="wm-dsm-rating__meta">
                Rated <strong>4.9 out of 5</strong> from <strong>350+ verified client reviews</strong> across Clutch, Google, AmbitionBox, and G2.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Take Absolute Control of What People See When They Google Your Name</h2>
              <p className="wm-sp-paragraph">
                In the digital age, your Google search results are your first impression. A single defamatory link, unfair review, or outdated news article can destroy million-dollar business deals, investor confidence, and customer trust in seconds.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we execute white-hat reverse-SEO suppression, high-authority digital PR, review generation, and crisis communications to push negative results off Google Page 1 and amplify verified positive brand assets.
              </p>
            </div>

           

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Verified Results, from Client Engagements</h2>
              <p className="wm-sp-paragraph">
                Every figure below represents documented performance lifts and commercial deliverables from active client engagements:
              </p>
              <div className="wm-seocs__grid">
                {caseStudies.map((cs, idx) => (
                  <div key={idx} className="wm-seocs__c">
                    <p className="wm-seocs__cat">{cs.cat}</p>
                    <div className="wm-seocs__big">{cs.metric}</div>
                    <p className="wm-seocs__met">{cs.sub}</p>
                    <h3 className="wm-seocs__nm">{cs.name}</h3>
                    <p className="wm-seocs__d">{cs.desc}</p>
                    <div className="wm-seocs__actions">
                      <button
                        type="button"
                        className="wm-seocs-btn-inquiry"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`${cs.name} - Case Study Inquiry`)}
                        title="Request an Inquiry"
                      >
                        <FaPaperPlane /> Inquire
                      </button>
                      <button
                        type="button"
                        className="wm-seocs-btn-call"
                        onClick={onOpenCallMe}
                        title="Call Webmok"
                      >
                        <FaPhoneAlt /> Call
                      </button>
                      <a
                        href={`https://wa.me/918684031003?text=${encodeURIComponent(`Hi Webmok Team, I am interested in case study: ${cs.name} (${cs.metric})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wm-seocs-btn-whatsapp"
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disciplines Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive Capabilities & Deliverables</h2>
              <p className="wm-sp-paragraph">
                Our specialized team provides end-to-end execution tailored precisely to your commercial objectives:
              </p>
              <div className="wm-sp-disciplines-grid">
                {disciplines.map((item, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <span className="wm-sp-fi-badge">{item.badge}</span>
                    <div className="wm-sp-fi-icon">{item.icon}</div>
                    <h3 className="wm-sp-fi-title">{item.title}</h3>
                    <p className="wm-sp-fi-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Verticals */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Solutions for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                WebMok formulates tailored execution frameworks optimized for distinct commercial sectors:
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

            {/* 4-Tier Transparent Packages */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Transparent Project Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting plans so you can evaluate scope with complete transparency:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Review Defense & Acceleration</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Local Businesses & Clinics</p>
                    <span className="wm-seopk__kw">Google Maps Reviews</span>
                    <ul className="wm-seopk__l">
                      <li>Automated 5-star customer review collection system</li>
                      <li>Dispute handling for fake / policy-violating reviews</li>
                      <li>Google Business Profile optimization & monitoring</li>
                      <li>Monthly reputation scorecard & sentiment metrics</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Review &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Executive Reverse-SEO</p>
                    <div className="wm-seopk__amt">₹65,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Founders, MDs & Executives</p>
                    <span className="wm-seopk__kw">Page 1 SERP Cleanup</span>
                    <ul className="wm-seopk__l">
                      <li>Reverse-SEO suppression targeting specific executive names</li>
                      <li>Creation of 5 high-authority biographical web assets</li>
                      <li>Tier-1 digital PR publishing & executive interviews</li>
                      <li>Suppression of up to 3 damaging links off Google Page 1</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Executive &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Crisis Management</p>
                    <div className="wm-seopk__amt">₹1.25 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Corporate Brands & High Stakes</p>
                    <span className="wm-seopk__kw">Full SERP Domination</span>
                    <ul className="wm-seopk__l">
                      <li>Multi-keyword reverse-SEO suppression across Google & Bing</li>
                      <li>10+ dedicated high-authority web assets & digital PR blitz</li>
                      <li>Google legal de-indexing and defamation resolution</li>
                      <li>24/7 priority incident response and crisis communications</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Confidential Retainer & Defense</p>
                    <div className="wm-seopk__amt">₹50,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Reputation Guard</p>
                    <span className="wm-seopk__kw">Ongoing Protection</span>
                    <ul className="wm-seopk__l">
                      <li>Continuous monitoring of brand keywords & executive names</li>
                      <li>Immediate suppression of newly emerging negative content</li>
                      <li>Ongoing positive digital PR & thought leadership syndication</li>
                      <li>Strict Non-Disclosure Agreement (NDA) compliance</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Confidential &rarr;
                    </button>
                  </div>
                </div>

               
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>Request a 100% Confidential Reputation Audit</h2>
                  <p>
                    Submit your brand name or executive name to receive a confidential sentiment audit evaluating Google search exposures, negative links, and review threats.
                  </p>
                  <form className="wm-rsau__form" onSubmit={handleAuditSubmit}>
                    <input
                      className="wm-rsau__in"
                      type="text"
                      placeholder="https://yoursite.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      required
                    />
                    <button className="wm-rsau__go" type="submit">
                      Get Free Analysis &rarr;
                    </button>
                  </form>
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Google Page 1-3 Sentiment Breakdown</b> — Calculate the ratio of positive, neutral, and negative search results</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Vulnerable Review Assets</b> — Identify review sites with unaddressed complaints harming conversion rates</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Negative URL Authority Profile</b> — Analyze the domain authority of damaging links to calculate suppression time</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Confidential Remediation Strategy</b> — Step-by-step roadmap to eliminate negative links and restore trust</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <div className="wm-sp-faq-list">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`wm-sp-faq-item ${openFaq === idx ? 'open' : ''}`}
                  >
                    <div
                      className="wm-sp-faq-q"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    >
                      <span>
                        <span className="wm-sp-faq-badge">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        {faq.q}
                      </span>
                      <FaChevronDown className="wm-sp-faq-chevron" />
                    </div>
                    {openFaq === idx && <p className="wm-sp-faq-a">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrmServicesPage;
