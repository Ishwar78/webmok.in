import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFilter, FaPaperPlane } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = ({ onOpenEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'edutech-learning-platform',
      title: 'EduTech Interactive Platform',
      category: 'web',
      categoryName: 'Web Development',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80',
      client: 'Apex Global Academy',
      results: '+320% Student Enrollments',
      description: 'A cutting-edge LMS and interactive video course portal designed with sub-second page switching and secure Razorpay payment flows.'
    },
    {
      id: 'fintech-crypto-wallet-app',
      title: 'PaySwift Mobile Finance App',
      category: 'app',
      categoryName: 'App Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&auto=format&fit=crop&q=80',
      client: 'PaySwift Fintech Ltd',
      results: '500K+ Active Installs',
      description: 'Cross-platform iOS and Android financial wallet offering instant UPI transfers, biometric authentication, and expense analytics.'
    },
    {
      id: 'luxury-fashion-ecommerce',
      title: 'LuxeCart E-Commerce Brand',
      category: 'ecommerce',
      categoryName: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80',
      client: 'Vogue Essentials',
      results: '₹1.8 Cr Monthly GMV',
      description: 'High-end designer fashion portal with visual lookbooks, instant variant swatches, abandoned cart recovery, and express checkout.'
    },
    {
      id: 'b2b-healthcare-seo-campaign',
      title: 'MediCare Healthcare Lead Funnel',
      category: 'seo',
      categoryName: 'SEO & PPC',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop&q=80',
      client: 'MediCare Multispecialty',
      results: '1st Page Rank for 480+ Keywords',
      description: 'Comprehensive technical SEO audit and high-intent appointment booking PPC campaign that reduced cost-per-lead by 62%.'
    },
    {
      id: 'real-estate-crm-portal',
      title: 'Skyline Real Estate Portal',
      category: 'web',
      categoryName: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&auto=format&fit=crop&q=80',
      client: 'Skyline Infrastructures',
      results: '4,200+ Verified Property Inquiries',
      description: 'Interactive map-based property search engine with virtual 360 walkthroughs and instant CRM WhatsApp lead distribution.'
    },
    {
      id: 'fitness-tracker-mobile-app',
      title: 'FitPulse On-Demand Workout App',
      category: 'app',
      categoryName: 'App Development',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=700&auto=format&fit=crop&q=80',
      client: 'PulseFit Technologies',
      results: '4.8 App Store Rating',
      description: 'Real-time workout coaching application with personalized calorie calculators, push notifications, and subscription tiers.'
    }
  ];

  const [dynamicProjects, setDynamicProjects] = useState(projects);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch('http://localhost:5005/api/portfolio');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setDynamicProjects(json.data.map((item, idx) => ({
              id: item.slug || item._id || `proj-${idx}`,
              title: item.title,
              category: item.category,
              categoryName: item.categoryName || (item.category === 'web' ? 'Web Development' : item.category === 'app' ? 'App Development' : item.category === 'ecommerce' ? 'E-Commerce' : 'SEO & PPC'),
              image: item.image,
              client: item.client,
              results: item.results,
              description: item.description || ''
            })));
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback portfolio:', err.message);
      }
    };
    fetchPortfolio();
  }, []);

  const getMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    return `http://localhost:5005${url.startsWith('/') ? '' : '/'}${url}`;
  };

  const filtered = activeFilter === 'all'
    ? dynamicProjects
    : dynamicProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="wm-portpage-root">
      {/* Hero */}
      <section className="wm-portpage-hero">
        <div className="wm-portpage-container">
          <span className="wm-portpage-tag">Proven Track Record</span>
          <h1 className="wm-portpage-title">Client Case Studies & Portfolio</h1>
          <p className="wm-portpage-desc">
            Discover how Web Mok helped global enterprises and disruptive startups achieve measurable digital transformation and scale their revenues.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="wm-portpage-filter-sec">
        <div className="wm-portpage-container">
          <div className="wm-portpage-filters">
            <button
              className={`wm-port-fbtn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`wm-port-fbtn ${activeFilter === 'web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('web')}
            >
              Web Applications
            </button>
            <button
              className={`wm-port-fbtn ${activeFilter === 'app' ? 'active' : ''}`}
              onClick={() => setActiveFilter('app')}
            >
              Mobile Apps
            </button>
            <button
              className={`wm-port-fbtn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ecommerce')}
            >
              E-Commerce Stores
            </button>
            <button
              className={`wm-port-fbtn ${activeFilter === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveFilter('seo')}
            >
              SEO & PPC Funnels
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="wm-portpage-grid-sec">
        <div className="wm-portpage-container">
          <div className="wm-portpage-grid">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="wm-portpage-card"
                title={`View ${item.title} Case Study`}
              >
                <div className="wm-portpage-img-wrap">
                  <img
                    src={getMediaUrl(item.image)}
                    alt={item.title}
                    className="wm-portpage-img"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80'; }}
                  />
                  <span className="wm-portpage-badge">{item.categoryName}</span>
                </div>
                <div className="wm-portpage-body">
                  <span className="wm-portpage-client">{item.client}</span>
                  <h3 className="wm-portpage-card-title">{item.title}</h3>
                  <p className="wm-portpage-card-desc">{item.description}</p>
                  <div className="wm-portpage-stat">
                    <span>Key Outcome:</span>
                    <strong>{item.results}</strong>
                  </div>
                  <div className="wm-portpage-cta-row">
                    <span className="wm-portpage-link">
                      Case Study <FaArrowRight />
                    </span>
                    <button
                      type="button"
                      className="wm-portpage-inquiry-btn"
                      title="Enquire About This Project"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (onOpenEnquiry) onOpenEnquiry();
                      }}
                    >
                      <FaPaperPlane /> Inquiry Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wm-portpage-cta">
        <div className="wm-portpage-container">
          <div className="wm-portpage-cta-card">
            <h2>Have a Vision For Your Next Digital Product?</h2>
            <p>Let us turn your ideas into a market-ready web platform or high-growth mobile app.</p>
            <button className="wm-portpage-cta-btn" onClick={onOpenEnquiry}>
              Discuss Your Project Scope
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
