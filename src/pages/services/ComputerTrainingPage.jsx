import React, { useState } from 'react';
import DiagnosticLeadForm from '../../components/DiagnosticLeadForm';
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
import './ComputerTrainingPage.css';

const ComputerTrainingPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "Of excellence in professional IT education"
  },
  {
    "num": "3,500+",
    "label": "Students & working professionals certified"
  },
  {
    "num": "94%",
    "label": "Job placement & internship assistance rate"
  },
  {
    "num": "100%",
    "label": "Live real-world commercial client projects"
  }
];

  const caseStudies = [
  {
    "cat": "Full-Stack Graduate",
    "metric": "₹8.5 LPA",
    "sub": "Starting Salary at Tech Multinational",
    "name": "Aman Sharma",
    "desc": "Zero prior coding experience; completed 6-month Full-Stack Web Development course and joined top Noida IT firm."
  },
  {
    "cat": "Digital Marketing Graduate",
    "metric": "₹6.2 LPA",
    "sub": "Hired as Performance Marketing Lead",
    "name": "Priya Verma",
    "desc": "Managed real ₹50,000 ad budget during course; secured role at premier Gurgaon digital marketing agency."
  },
  {
    "cat": "Corporate IT Training",
    "metric": "45+",
    "sub": "Corporate Employees Upskilled",
    "name": "JBM Group Engineering Batch",
    "desc": "Custom 4-week Python data analysis and Excel automation corporate training bootcamp."
  },
  {
    "cat": "Graphic & UI/UX Graduate",
    "metric": "$2,500+",
    "sub": "Monthly International Freelance Income",
    "name": "Rahul Saini",
    "desc": "Built a 10-project Figma UI/UX portfolio and now works remotely with international European clients."
  },
  {
    "cat": "Python & AI Graduate",
    "metric": "100%",
    "sub": "Job Placement within 45 Days",
    "name": "Sneha Malik",
    "desc": "Mastered Python data structures and machine learning fundamentals with 3 production-ready GitHub repositories."
  },
  {
    "cat": "College Student Bootcamp",
    "metric": "120+",
    "sub": "Engineering Students Certified",
    "name": "MDU University Summer Batch",
    "desc": "Intensive 60-day summer industrial training on modern React.js and RESTful web services."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "Full-Stack Web Development",
      desc: "Master React.js, Next.js, Node.js, Express, MongoDB, and Tailwind CSS."
    },
    {
      badge: '02',
      icon: <FaBullhorn />,
      title: "Advanced Digital Marketing",
      desc: "Hands-on mastery of SEO, Google Ads, Meta Ads, Email Marketing, and GA4."
    },
    {
      badge: '03',
      icon: <FaCogs />,
      title: "Python & Data Analysis",
      desc: "Learn Python programming, Pandas, NumPy, SQL, and data visualization."
    },
    {
      badge: '04',
      icon: <FaRocket />,
      title: "UI/UX & Graphic Design",
      desc: "Professional training in Figma, Adobe Photoshop, Illustrator, and Premiere Pro."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "Basic Computer & Office Mastery",
      desc: "Advanced Excel formulas, Word, PowerPoint, and business communication."
    },
    {
      badge: '06',
      icon: <FaUsers />,
      title: "Corporate Team Training",
      desc: "Tailored corporate training programs upskilling enterprise employees."
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
    "q": "Do I need a coding or computer science background to enroll?",
    "a": "No! Over 60% of our students come from non-IT backgrounds (B.Com, B.A, BBA). We start from absolute fundamentals and build up to advanced commercial development."
  },
  {
    "q": "Are classes available offline and online?",
    "a": "Yes! We conduct offline classroom batches at our modern centers in New Delhi and Rohtak (Haryana), as well as interactive live online batches with screen-sharing."
  },
  {
    "q": "Do you provide a formal course completion certificate?",
    "a": "Yes! You receive an industry-recognized certificate from WebMok Pvt Ltd, along with credentials to prepare for official Google, Meta, and AWS certifications."
  },
  {
    "q": "How does your job placement assistance work?",
    "a": "We conduct mock interviews, optimize your LinkedIn profile and GitHub portfolio, and directly share your resume with our network of 250+ hiring partner companies across Delhi NCR."
  },
  {
    "q": "Are flexible installment fee options available?",
    "a": "Yes! We provide flexible 2 or 3 installment fee payment plans with zero interest to ensure education remains affordable."
  },
  {
    "q": "Can working professionals attend weekend batches?",
    "a": "Yes! We offer dedicated Saturday and Sunday weekend batches designed specifically for working professionals looking to upskill."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root computertrainingpage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Computer Training</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Job-Oriented IT Certification · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Professional <span>Computer Training</span> & IT Academy
          </h1>

          {/* Rating Scorecard Badge in Hero */}
          <div className="wm-dsm-rating-hero">
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

          <p className="wm-sp-hero-lead">
            Master high-income digital and software skills with 100% practical, project-based computer training courses in Full-Stack Web Development, Digital Marketing, Python, and Graphic Design.
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
                pageName="Computer Training"
                source="Computer Training Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Learn from Senior Software Engineers & Certified Digital Marketers</h2>
              <p className="wm-sp-paragraph">
                Traditional college degrees teach outdated theory that fails in actual job interviews. The modern tech market demands hands-on mastery of Git, React, Node.js, Google Ads, SEO, and cloud deployment.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok Academy in Delhi and Rohtak, our curriculum is taught directly by working software architects and performance marketers who build live commercial client projects every single day.
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
                    
                    <p className="wm-seopk__nm">Certificate in Digital Marketing</p>
                    <div className="wm-seopk__amt">₹22,000</div>
                    <p className="wm-seopk__gst">3 Months (Live Project)</p>
                    <p className="wm-seopk__per">Aspiring Marketers & Business Owners</p>
                    <span className="wm-seopk__kw">Practical Marketing</span>
                    <ul className="wm-seopk__l">
                      <li>SEO, Google Ads, Social Media, Email & GA4</li>
                      <li>Live ad budget management under expert mentors</li>
                      <li>Google & Meta certification exam preparation</li>
                      <li>Job placement assistance & resume refinement</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Computer Training & IT Academy', 'Certificate in Digital Marketing')}
                    >
                      Choose Certificate &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Full-Stack Web Developer Pro</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">6 Months (Industrial Training)</p>
                    <p className="wm-seopk__per">Job Seekers & Software Engineers</p>
                    <span className="wm-seopk__kw">MERN Stack Mastery</span>
                    <ul className="wm-seopk__l">
                      <li>HTML5, CSS3, JavaScript ES6+, React.js, Node.js & MongoDB</li>
                      <li>Build 5 live commercial web applications for your portfolio</li>
                      <li>Git, GitHub, REST APIs & cloud deployment on Vercel/AWS</li>
                      <li>100% placement support with corporate mock interviews</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Computer Training & IT Academy', 'Full-Stack Web Developer Pro')}
                    >
                      Choose Full-Stack &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Python & Data Science Bootcamp</p>
                    <div className="wm-seopk__amt">₹28,000</div>
                    <p className="wm-seopk__gst">4 Months (Project Based)</p>
                    <p className="wm-seopk__per">Graduates & Analysts</p>
                    <span className="wm-seopk__kw">Python + SQL + ML</span>
                    <ul className="wm-seopk__l">
                      <li>Core Python, OOPs, Pandas, NumPy, and SQL databases</li>
                      <li>Machine learning algorithms and predictive analytics models</li>
                      <li>Data visualization with Matplotlib and Looker Studio</li>
                      <li>GitHub portfolio setup and technical interview coaching</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Computer Training & IT Academy', 'Python & Data Science Bootcamp')}
                    >
                      Choose Python &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">UI/UX & Graphic Design Master</p>
                    <div className="wm-seopk__amt">₹24,000</div>
                    <p className="wm-seopk__gst">3.5 Months (Portfolio Focused)</p>
                    <p className="wm-seopk__per">Creative Designers</p>
                    <span className="wm-seopk__kw">Figma + Adobe Suite</span>
                    <ul className="wm-seopk__l">
                      <li>Figma wireframing, component design systems & prototypes</li>
                      <li>Adobe Photoshop, Illustrator & Premiere Pro video editing</li>
                      <li>Complete 8-project Behance & Dribbble professional portfolio</li>
                      <li>Freelancing mentorship & international client acquisition</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Computer Training & IT Academy', 'UI/UX & Graphic Design Master')}
                    >
                      Choose UI/UX &rarr;
                    </button>
                  </div>
                </div>

               
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <span>Free</span></span>
                  <h2>Book a Free Career Counseling & Demo Class</h2>
                  <p>
                    Visit our training centers in Delhi or Rohtak, or attend an online demo session to meet our mentors and evaluate course syllabus modules.
                  </p>
                  <DiagnosticLeadForm serviceName="Computer Training" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>1-on-1 Career Roadmap Session</b> — Assess your background and identify the highest-paying IT career path for you</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Free Hands-On Live Demo Class</b> — Experience our practical, zero-boring-theory teaching methodology firsthand</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Curriculum & Project Walkthrough</b> — Review the live commercial projects and tech stack you will build</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Scholarship & Installment Options</b> — Learn about flexible 0% interest monthly installment fee options</span>
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

export default ComputerTrainingPage;
