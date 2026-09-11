import React, { useState, useEffect, useRef } from 'react';
import {
  FaGlobeAmericas,
  FaPlus,
  FaTrash,
  FaSave,
  FaUndoAlt,
  FaExternalLinkAlt,
  FaUpload,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaSearch,
  FaImage,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaLayerGroup,
  FaChartLine,
  FaAward,
  FaBuilding,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaListUl,
  FaCheck,
  FaExchangeAlt,
  FaFlag
} from 'react-icons/fa';
import './AdminInternationalPages.css';
import { resolveMediaUrl } from '../../utils/mediaUrl';

const API_BASE = 'http://localhost:5005/api';

const AdminInternationalPages = () => {
  const [pages, setPages] = useState([]);
  const [activeSlug, setActiveSlug] = useState('');
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({
    hero: false,
    stats: false,
    services: true,
    comparison: true,
    results: true,
    insights: true,
    industries: true,
    plans: false,
    testimonials: true,
    faqs: true
  });

  const [newPageData, setNewPageData] = useState({
    name: '',
    slug: '',
    city: '',
    region: '',
    country: 'United States',
    currency: 'USD',
    currencySymbol: '$'
  });

  const fileInputRef = useRef(null);

  const toggleSection = (sectionKey) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const triggerFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => {
      setFeedback({ type: '', message: '' });
    }, 4500);
  };

  // Fetch all international pages
  const fetchPages = async (preserveActive = true) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/international-pages`);
      const json = await res.json();
      if (res.ok && json.success && Array.isArray(json.data)) {
        setPages(json.data);
        if (json.data.length > 0) {
          const target = preserveActive && activeSlug
            ? json.data.find((p) => p.slug === activeSlug) || json.data[0]
            : json.data[0];
          setActiveSlug(target.slug);
          setFormData(JSON.parse(JSON.stringify(target)));
        }
      } else {
        triggerFeedback('error', json.message || 'Failed to fetch international pages');
      }
    } catch (err) {
      triggerFeedback('error', 'Backend offline or network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages(false);
  }, []);

  // When activeSlug changes, load page into formData
  const handleSelectPage = (slug) => {
    setActiveSlug(slug);
    const selected = pages.find((p) => p.slug === slug);
    if (selected) {
      setFormData(JSON.parse(JSON.stringify(selected)));
    }
  };

  // Generic top-level field updater
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Generic array updater for stats, services, plans, etc.
  const handleArrayItemChange = (arrayKey, index, subField, value) => {
    setFormData((prev) => {
      const arr = Array.isArray(prev[arrayKey]) ? [...prev[arrayKey]] : [];
      if (typeof subField === 'string' && subField) {
        arr[index] = { ...arr[index], [subField]: value };
      } else {
        arr[index] = value;
      }
      return { ...prev, [arrayKey]: arr };
    });
  };

  const handleAddArrayItem = (arrayKey, defaultItem) => {
    setFormData((prev) => ({
      ...prev,
      [arrayKey]: [...(Array.isArray(prev[arrayKey]) ? prev[arrayKey] : []), defaultItem]
    }));
  };

  const handleRemoveArrayItem = (arrayKey, index) => {
    setFormData((prev) => ({
      ...prev,
      [arrayKey]: prev[arrayKey].filter((_, i) => i !== index)
    }));
  };

  // Plan feature bullet add / remove
  const handlePlanFeatureChange = (planIndex, featIndex, value) => {
    setFormData((prev) => {
      const plans = [...(prev.plans || [])];
      const features = [...(plans[planIndex].features || [])];
      features[featIndex] = value;
      plans[planIndex] = { ...plans[planIndex], features };
      return { ...prev, plans };
    });
  };

  const handleAddPlanFeature = (planIndex) => {
    setFormData((prev) => {
      const plans = [...(prev.plans || [])];
      const features = [...(plans[planIndex].features || []), 'New Deliverable'];
      plans[planIndex] = { ...plans[planIndex], features };
      return { ...prev, plans };
    });
  };

  const handleRemovePlanFeature = (planIndex, featIndex) => {
    setFormData((prev) => {
      const plans = [...(prev.plans || [])];
      const features = plans[planIndex].features.filter((_, i) => i !== featIndex);
      plans[planIndex] = { ...plans[planIndex], features };
      return { ...prev, plans };
    });
  };

  // Image Upload handler for Hero Banner / Screenshots
  const handleImageUpload = async (e, targetField = 'heroImage') => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('image', file);

    try {
      setUploadingImage(true);
      const res = await fetch(`${API_BASE}/international-pages/upload-image`, {
        method: 'POST',
        body: data
      });
      const json = await res.json();
      if (res.ok && json.success && json.imageUrl) {
        handleFieldChange(targetField, json.imageUrl);
        triggerFeedback('success', `Image "${file.name}" uploaded successfully!`);
      } else {
        triggerFeedback('error', json.message || 'Image upload failed');
      }
    } catch (err) {
      triggerFeedback('error', 'Error uploading image: ' + err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  // Save current page
  const handleSavePage = async (e) => {
    if (e) e.preventDefault();
    if (!formData) return;

    try {
      setSaving(true);
      const res = await fetch(`${API_BASE}/international-pages/${formData._id || formData.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      if (res.ok && json.success) {
        const savedDoc = json.data || json.page || formData;
        triggerFeedback('success', `Page "${savedDoc.name || formData.name}" saved successfully to MongoDB!`);
        if (json.data || json.page) {
          setFormData(JSON.parse(JSON.stringify(savedDoc)));
          if (savedDoc.slug) setActiveSlug(savedDoc.slug);
        }
        // update local list
        setPages((prev) =>
          prev.map((p) => ((p._id === savedDoc._id || p.slug === savedDoc.slug) ? savedDoc : p))
        );
      } else {
        triggerFeedback('error', json.message || 'Failed to save international page');
      }
    } catch (err) {
      triggerFeedback('error', 'Save error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete page
  const handleDeletePage = async (pageToDelete) => {
    const target = pageToDelete || formData;
    if (!target) return;
    if (!window.confirm(`Are you sure you want to permanently delete the page "${target.name}"?`)) {
      return;
    }

    try {
      setSaving(true);
      const res = await fetch(`${API_BASE}/international-pages/${target._id || target.slug}`, {
        method: 'DELETE'
      });
      const json = await res.json();
      if (res.ok && json.success) {
        triggerFeedback('success', json.message || `Page "${target.name}" deleted`);
        const remaining = pages.filter((p) => p._id !== target._id && p.slug !== target.slug);
        setPages(remaining);
        if (remaining.length > 0) {
          setActiveSlug(remaining[0].slug);
          setFormData(JSON.parse(JSON.stringify(remaining[0])));
        } else {
          setActiveSlug('');
          setFormData(null);
        }
      } else {
        triggerFeedback('error', json.message || 'Failed to delete page');
      }
    } catch (err) {
      triggerFeedback('error', 'Delete error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Reset to default 15 pages
  const handleResetDefaults = async () => {
    if (!window.confirm('Are you sure you want to restore all 15 default international pages? Any custom modifications will be reset to the original seeds.')) {
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/international-pages/reset`, {
        method: 'POST'
      });
      const json = await res.json();
      if (res.ok && json.success && Array.isArray(json.data)) {
        triggerFeedback('success', 'All 15 default international pages restored successfully!');
        setPages(json.data);
        if (json.data.length > 0) {
          setActiveSlug(json.data[0].slug);
          setFormData(JSON.parse(JSON.stringify(json.data[0])));
        }
      } else {
        triggerFeedback('error', json.message || 'Failed to reset pages');
      }
    } catch (err) {
      triggerFeedback('error', 'Reset error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create new page
  const handleCreateNewPage = async (e) => {
    e.preventDefault();
    if (!newPageData.name.trim()) return;

    try {
      setSaving(true);
      const slug = (newPageData.slug || newPageData.name)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const payload = {
        name: newPageData.name,
        slug,
        city: newPageData.city || newPageData.name.split(' ')[0],
        region: newPageData.region || `${newPageData.city}, ${newPageData.country}`,
        country: newPageData.country,
        currency: newPageData.currency || 'USD',
        currencySymbol: newPageData.currencySymbol || '$',
        tagline: `PREMIER ${newPageData.city.toUpperCase() || 'GLOBAL'} DIGITAL MARKETING & SEO · ${newPageData.country.toUpperCase()}`,
        heroHighlight: `${newPageData.name} Agency`,
        heroItalic: 'Accelerate High-Yield Growth with',
        leadDesc: `Scale your ${newPageData.city || 'local'} business with performance-driven SEO, Google Ads, and conversion funnels.`,
        bodyDesc: 'Webmok delivers compound revenue growth, top Google rankings, and high-converting customer acquisition.',
        stats: [
          { num: '450%', label: `Average ${newPageData.city || 'Local'} Traffic Surge` },
          { num: '6.2x', label: 'Average Return on Ad Spend (ROAS)' },
          { num: '#1 Rank', label: 'In High-Intent Local Searches' },
          { num: '24/7', label: 'Dedicated Regional Account Lead' }
        ],
        services: [
          { icon: 'FaSearch', title: `Hyper-Local ${newPageData.city} SEO`, desc: `Dominating local organic search queries and Google Maps in ${newPageData.city}.` },
          { icon: 'FaBullhorn', title: 'High-ROAS Paid Search & PPC', desc: 'Precision search funnels and Performance Max campaigns driving qualified buyers.' },
          { icon: 'FaShareAlt', title: 'Targeted Social Media Ads', desc: 'High-impact visuals and ad creative optimized for high engagement.' },
          { icon: 'FaPenNib', title: 'Digital PR & Content Hubs', desc: 'Authoritative backlink placements in top regional publications.' },
          { icon: 'FaLaptopCode', title: 'High-Converting Web Development', desc: 'Speed-optimized, mobile-first web designs engineered for maximum conversion.' },
          { icon: 'FaVideo', title: 'Commercial Video & Motion', desc: 'Studio-grade video production and commercial creative.' }
        ],
        whyHireOutsideTitle: `Why ${newPageData.city} Brands Partner with Webmok`,
        whyHireOutsideSubtitle: 'HIGH VELOCITY · AGILE PRICING',
        whyHireDesc1: `Local agencies in ${newPageData.city} charge astronomical overhead rates with slow turnaround times.`,
        whyHireDesc2: 'Webmok delivers senior technical execution, timezone alignment, and rapid sprint cycles at a high-ROI model.',
        comparisonPoints: [
          { feature: 'Turnaround Sprint Speed', local: 'Slow 2-3 Week Approvals', webmok: '48-72 Hour High-Velocity Sprints' },
          { feature: 'Contract Terms', local: 'Mandatory 1-Year Lock-In', webmok: '100% Flexible Month-to-Month' },
          { feature: 'Performance Telemetry', local: 'Vanity Impressions & Clicks', webmok: 'Direct Revenue & ROAS Attribution' }
        ],
        resultsTitle: `${newPageData.city} Performance Telemetry`,
        resultsSubtitle: 'VERIFIABLE REGIONAL RESULTS',
        resultsStats: [
          { metric: '100+', label: `${newPageData.city} Brands Scaled to Page 1` },
          { metric: `${newPageData.currencySymbol}12M+`, label: 'Tracked Client Revenue Generated' },
          { metric: '99.2%', label: 'Regional Client Satisfaction Rate' },
          { metric: '24/7', label: 'Dedicated Account Management' }
        ],
        marketInsightsTitle: `Marketing Dynamics in ${newPageData.city}`,
        marketInsightsSubtitle: 'LOCAL MARKET INTELLIGENCE',
        marketInsights: [
          { title: 'High Local Search Velocity', desc: `Consumers in ${newPageData.city} demand sub-second mobile pages and instant response.` },
          { title: 'Multi-Channel Touchpoints', desc: 'Seamless orchestration across Google, Meta, and LinkedIn maximizes conversion.' }
        ],
        processSteps: [
          { num: '01', title: 'Local Market & Competitor Audit', desc: 'Scoping keyword gaps, ad spend density, and conversion barriers.' },
          { num: '02', title: 'High-Converting Architecture', desc: 'Deploying optimized landing pages, schema, and conversion tracking.' },
          { num: '03', title: 'Omni-Channel Execution Sprints', desc: 'Scaling high-intent Google Search ads and high-authority link building.' },
          { num: '04', title: 'Continuous CRO & ROAS Attribution', desc: 'Refining customer acquisition cost and compounding revenue.' }
        ],
        industries: [
          { icon: 'FaBuilding', name: 'Real Estate & Property', desc: 'Capturing high-intent luxury property buyers and investors.' },
          { icon: 'FaBriefcase', name: 'Corporate & Professional Services', desc: 'Generating high-ticket B2B retainers and business contracts.' },
          { icon: 'FaUserMd', name: 'Healthcare & Wellness Clinics', desc: 'Patient acquisition for private medical and dental practices.' },
          { icon: 'FaShoppingCart', name: 'E-Commerce & DTC Brands', desc: 'Scaling storefronts with profitable ROAS on Google and Meta.' },
          { icon: 'FaUtensils', name: 'Hospitality & Dining', desc: 'Driving reservations and local buzz.' },
          { icon: 'FaLaptopCode', name: 'Tech Startups & SaaS', desc: 'Accelerating user acquisition and trial signups.' }
        ],
        plans: [
          {
            name: `${newPageData.city} Starter Scale`,
            badge: 'Local Traction',
            highlight: false,
            usdPrice: '799',
            inrPrice: '64,999',
            localPrice: `${newPageData.currencySymbol}799`,
            desc: `Ideal for local ${newPageData.city} service providers seeking dominant search & map visibility.`,
            features: [
              `Up to 20 High-Intent ${newPageData.city} Keywords`,
              'Google Business Profile Optimization',
              'Local Citations & Directory Listings',
              'On-Page SEO Tuning (4 Pages/mo)',
              'Monthly Executive ROI Report'
            ]
          },
          {
            name: `${newPageData.city} Accelerator`,
            badge: 'Most Popular',
            highlight: true,
            usdPrice: '1,499',
            inrPrice: '1,19,999',
            localPrice: `${newPageData.currencySymbol}1,499`,
            desc: 'Comprehensive expansion combining technical SEO, Google Ads management, and content.',
            features: [
              `Up to 50 ${newPageData.city} & Regional Keywords`,
              'Google Ads & Paid Social Management',
              'High-Converting Landing Page Optimization',
              'High-Authority Content Marketing (6 Posts/mo)',
              'Bi-Weekly Strategy Consultation'
            ]
          },
          {
            name: `${newPageData.city} Enterprise Monopoly`,
            badge: 'Category Leader',
            highlight: false,
            usdPrice: '2,999',
            inrPrice: '2,44,999',
            localPrice: `${newPageData.currencySymbol}2,999`,
            desc: 'Full-scale market dominance for enterprise brands and multi-location operators.',
            features: [
              'Regional & National Keyword Domination',
              'Omni-Channel PPC (Google, Meta, LinkedIn)',
              'Tier-1 Digital PR Placements & Backlinks',
              'Dedicated Squad & Slack Channel',
              'Full Conversion Rate Optimization'
            ]
          }
        ],
        testimonials: [
          {
            quote: `Webmok accelerated our organic search revenue by over 380% in ${newPageData.city}. Their execution velocity is second to none.`,
            author: 'Michael R.',
            role: 'Managing Director',
            company: `${newPageData.city} Growth Ventures`,
            rating: 5
          }
        ],
        faqs: [
          {
            q: `Why choose Webmok for ${newPageData.city} digital marketing?`,
            a: 'Webmok pairs elite engineering and performance marketing with transparent month-to-month terms and direct ROAS accountability.'
          },
          {
            q: 'Are there any mandatory long-term contracts?',
            a: 'No. All our international marketing retainers operate on flexible month-to-month agreements.'
          }
        ],
        status: 'Active',
        order: pages.length + 1
      };

      const res = await fetch(`${API_BASE}/international-pages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (res.ok && json.success && json.data) {
        triggerFeedback('success', `New international page "${json.data.name}" created successfully!`);
        setPages((prev) => [...prev, json.data]);
        setActiveSlug(json.data.slug);
        setFormData(JSON.parse(JSON.stringify(json.data)));
        setShowAddModal(false);
        setNewPageData({
          name: '',
          slug: '',
          city: '',
          region: '',
          country: 'United States',
          currency: 'USD',
          currencySymbol: '$'
        });
      } else {
        triggerFeedback('error', json.message || 'Error creating page');
      }
    } catch (err) {
      triggerFeedback('error', 'Creation error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const filteredPages = pages.filter((p) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.city && p.city.toLowerCase().includes(q)) ||
      (p.country && p.country.toLowerCase().includes(q)) ||
      (p.slug && p.slug.toLowerCase().includes(q))
    );
  });

  return (
    <div className="wm-intl-admin-root">
      {/* Top Header Bar */}
      <div className="wm-intl-admin-header">
        <div className="wm-intl-header-left">
          <div className="wm-intl-title-icon">
            <FaGlobeAmericas />
          </div>
          <div>
            <h2>International Geo-Targeted Pages CMS</h2>
            <p>
              Manage all {pages.length} global landing pages, city-specific pricing packages, hero messaging, and market telemetry from MongoDB.
            </p>
          </div>
        </div>

        <div className="wm-intl-header-actions">
          {formData && (
            <button
              type="button"
              className="wm-intl-btn-save-header"
              onClick={handleSavePage}
              disabled={saving}
              title={`Save changes to ${formData.name}`}
            >
              {saving ? <FaSpinner className="wm-intl-spin" /> : <FaSave />} Save Changes
            </button>
          )}

          <button
            type="button"
            className="wm-intl-btn-add"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus /> Add New International Page
          </button>

          {/* <button
            type="button"
            className="wm-intl-btn-reset"
            onClick={handleResetDefaults}
            disabled={loading}
            title="Restore original 15 default international pages"
          >
            <FaUndoAlt /> Reset 15 Defaults
          </button> */}

          {formData && (
            <a
              href={`/international/${formData.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wm-intl-btn-view"
            >
              <FaExternalLinkAlt /> View Live Page
            </a>
          )}
        </div>
      </div>

      {/* Status Feedback Banner */}
      {feedback.message && (
        <div className={`wm-intl-alert ${feedback.type === 'success' ? 'wm-intl-alert-success' : 'wm-intl-alert-error'}`}>
          {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="wm-intl-filter-bar">
        <div className="wm-intl-search-box">
          <FaSearch className="wm-intl-search-icon" />
          <input
            type="text"
            placeholder="Search by city, country, title, or slug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="wm-intl-search-clear"
              onClick={() => setSearchQuery('')}
            >
              <FaTimes />
            </button>
          )}
        </div>

        <div className="wm-intl-count-chip">
          Showing <strong>{filteredPages.length}</strong> of {pages.length} International Locations
        </div>
      </div>

      {/* Horizontal Page Tabs Strip */}
      <div className="wm-intl-tabs-strip">
        {filteredPages.map((page, idx) => {
          const isActive = page.slug === activeSlug;
          return (
            <div
              key={page.slug || page._id || idx}
              className={`wm-intl-tab-pill ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectPage(page.slug)}
            >
              <span className="wm-intl-pill-num">0{idx + 1}</span>
              <span className="wm-intl-pill-city">{page.city || page.name}</span>
              <span className="wm-intl-pill-country">{page.country || 'Global'}</span>
              <span className="wm-intl-pill-curr">{page.currency || 'USD'}</span>
              <button
                type="button"
                className="wm-intl-pill-del"
                title={`Delete ${page.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeletePage(page);
                }}
              >
                <FaTrash />
              </button>
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="wm-intl-loading-state">
          <FaSpinner className="wm-intl-spin" /> Loading International Pages...
        </div>
      )}

      {!loading && !formData && (
        <div className="wm-intl-empty-state">
          <FaGlobeAmericas style={{ fontSize: '48px', color: '#64748b' }} />
          <h3>No International Page Selected</h3>
          <p>Choose a location from the pills above or click "Add New International Page".</p>
        </div>
      )}

      {/* Main Workspace Editor */}
      {!loading && formData && (
        <form onSubmit={handleSavePage} className="wm-intl-editor-form">
          {/* SECTION 1: GEO IDENTITY & ROUTE INFO */}
          <div className="wm-intl-card">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('hero')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge">01</span>
                <h3>Geo Identity & Hero Section Settings</h3>
              </div>
              <button type="button" className="wm-intl-toggle-btn">
                {collapsedSections.hero ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {!collapsedSections.hero && (
              <div className="wm-intl-card-body">
                <div className="wm-intl-grid-3">
                  <div className="wm-intl-field">
                    <label>Page Title / Full Name *</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="wm-intl-field">
                    <label>URL Slug (e.g. dubai-digital-marketing) *</label>
                    <input
                      type="text"
                      value={formData.slug || ''}
                      onChange={(e) => handleFieldChange('slug', e.target.value)}
                      required
                    />
                  </div>

                  <div className="wm-intl-field">
                    <label>Target City Name *</label>
                    <input
                      type="text"
                      value={formData.city || ''}
                      onChange={(e) => handleFieldChange('city', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="wm-intl-grid-4" style={{ marginTop: '14px' }}>
                  <div className="wm-intl-field">
                    <label>Target Country *</label>
                    <input
                      type="text"
                      value={formData.country || ''}
                      onChange={(e) => handleFieldChange('country', e.target.value)}
                      placeholder="e.g. United Arab Emirates, USA, UK"
                    />
                  </div>

                  <div className="wm-intl-field">
                    <label>Region / State / Territory</label>
                    <input
                      type="text"
                      value={formData.region || ''}
                      onChange={(e) => handleFieldChange('region', e.target.value)}
                      placeholder="e.g. Dubai & UAE, Florida, Ontario"
                    />
                  </div>

                  <div className="wm-intl-field">
                    <label>Currency Code</label>
                    <select
                      value={formData.currency || 'USD'}
                      onChange={(e) => handleFieldChange('currency', e.target.value)}
                    >
                      <option value="USD">USD ($)</option>
                      <option value="AED">AED (AED)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="CAD">CAD (C$)</option>
                      <option value="AUD">AUD (A$)</option>
                      <option value="ZAR">ZAR (R)</option>
                      <option value="INR">INR (₹)</option>
                    </select>
                  </div>

                  <div className="wm-intl-field">
                    <label>Currency Symbol</label>
                    <input
                      type="text"
                      value={formData.currencySymbol || '$'}
                      onChange={(e) => handleFieldChange('currencySymbol', e.target.value)}
                      placeholder="e.g. $, AED , £, €, C$, A$, R"
                    />
                  </div>
                </div>

                <div className="wm-intl-grid-2" style={{ marginTop: '14px' }}>
                  <div className="wm-intl-field">
                    <label>Hero Badge / Tagline</label>
                    <input
                      type="text"
                      value={formData.tagline || ''}
                      onChange={(e) => handleFieldChange('tagline', e.target.value)}
                      placeholder="e.g. PREMIER DUBAI DIGITAL MARKETING AGENCY · UAE"
                    />
                  </div>

                  <div className="wm-intl-field">
                    <label>Hero Headline Highlight Keyword</label>
                    <input
                      type="text"
                      value={formData.heroHighlight || ''}
                      onChange={(e) => handleFieldChange('heroHighlight', e.target.value)}
                      placeholder="e.g. Dubai Digital Marketing Agency"
                    />
                  </div>
                </div>

                <div className="wm-intl-field" style={{ marginTop: '14px' }}>
                  <label>Hero Headline Prefix</label>
                  <input
                    type="text"
                    value={formData.heroItalic || ''}
                    onChange={(e) => handleFieldChange('heroItalic', e.target.value)}
                    placeholder="e.g. Accelerate High-Yield UAE Growth with"
                  />
                </div>

                <div className="wm-intl-grid-2" style={{ marginTop: '14px' }}>
                  <div className="wm-intl-field">
                    <label>Lead Paragraph Description</label>
                    <textarea
                      rows={3}
                      value={formData.leadDesc || ''}
                      onChange={(e) => handleFieldChange('leadDesc', e.target.value)}
                    />
                  </div>

                  <div className="wm-intl-field">
                    <label>Body Overview Description</label>
                    <textarea
                      rows={3}
                      value={formData.bodyDesc || ''}
                      onChange={(e) => handleFieldChange('bodyDesc', e.target.value)}
                    />
                  </div>
                </div>

                {/* Hero Banner Image Upload */}
                <div className="wm-intl-image-box" style={{ marginTop: '16px' }}>
                  <label>Hero Background / Banner Image</label>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '6px', flexWrap: 'wrap' }}>
                    <input
                      type="text"
                      value={formData.heroImage || ''}
                      onChange={(e) => handleFieldChange('heroImage', e.target.value)}
                      placeholder="Enter URL or upload file below..."
                      style={{ flex: 1, minWidth: '240px' }}
                    />
                    <label className="wm-intl-upload-btn">
                      <FaUpload /> {uploadingImage ? 'Uploading...' : 'Upload Image'}
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageUpload(e, 'heroImage')}
                        disabled={uploadingImage}
                      />
                    </label>
                  </div>
                  {formData.heroImage && (
                    <div className="wm-intl-img-preview" style={{ marginTop: '10px' }}>
                      <img
                        src={resolveMediaUrl(formData.heroImage)}
                        alt="Hero preview"
                        style={{ maxHeight: '140px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 2: HERO 4-METRIC STATS BAR */}
          <div className="wm-intl-card">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('stats')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge">02</span>
                <h3>Hero 4-Metric Performance Bar</h3>
              </div>
              <button type="button" className="wm-intl-toggle-btn">
                {collapsedSections.stats ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {!collapsedSections.stats && (
              <div className="wm-intl-card-body">
                <div className="wm-intl-subitems-header">
                  <p>Numbers and labels rendered across the hero scorecard bar.</p>
                  <button
                    type="button"
                    className="wm-intl-btn-subadd"
                    onClick={() => handleAddArrayItem('stats', { num: '99%', label: 'Delivery Rate' })}
                  >
                    <FaPlus /> Add Metric
                  </button>
                </div>

                <div className="wm-intl-grid-4">
                  {(formData.stats || []).map((st, sidx) => (
                    <div key={sidx} className="wm-intl-subcard">
                      <div className="wm-intl-subcard-top">
                        <span className="wm-intl-subcard-tag">Metric {sidx + 1}</span>
                        <button
                          type="button"
                          className="wm-intl-del-icon"
                          onClick={() => handleRemoveArrayItem('stats', sidx)}
                          title="Delete metric"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="wm-intl-field">
                        <label>Stat Number / %</label>
                        <input
                          type="text"
                          value={st.num || ''}
                          onChange={(e) => handleArrayItemChange('stats', sidx, 'num', e.target.value)}
                          placeholder="e.g. 480% or 6.4x"
                        />
                      </div>
                      <div className="wm-intl-field" style={{ marginTop: '8px' }}>
                        <label>Label</label>
                        <input
                          type="text"
                          value={st.label || ''}
                          onChange={(e) => handleArrayItemChange('stats', sidx, 'label', e.target.value)}
                          placeholder="e.g. Average Traffic Surge"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 3: DYNAMIC PRICING PACKAGES (THE USER'S PRIMARY REQUEST) */}
          <div className="wm-intl-card wm-intl-card-featured">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('plans')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge wm-badge-cyan">03</span>
                <h3>
                  <FaMoneyBillWave /> Packages & Transparent Pricing Tiers ({formData.currency})
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="wm-intl-chip-count">{(formData.plans || []).length} Tiers</span>
                <button type="button" className="wm-intl-toggle-btn">
                  {collapsedSections.plans ? <FaChevronDown /> : <FaChevronUp />}
                </button>
              </div>
            </div>

            {!collapsedSections.plans && (
              <div className="wm-intl-card-body">
                <div className="wm-intl-subitems-header">
                  <p>
                    Manage all published package pricing, deliverables checklists, badges, and popular highlights.
                  </p>
                  <button
                    type="button"
                    className="wm-intl-btn-subadd"
                    onClick={() =>
                      handleAddArrayItem('plans', {
                        name: `${formData.city || 'Custom'} Growth Tier`,
                        badge: 'New Package',
                        highlight: false,
                        usdPrice: '999',
                        inrPrice: '79,999',
                        localPrice: `${formData.currencySymbol || '$'}999`,
                        desc: 'Bespoke strategic execution package.',
                        features: ['Deliverable 1', 'Deliverable 2', 'Weekly KPI Reports']
                      })
                    }
                  >
                    <FaPlus /> Add Pricing Tier
                  </button>
                </div>

                <div className="wm-intl-plans-editor-grid">
                  {(formData.plans || []).map((plan, pidx) => (
                    <div
                      key={pidx}
                      className={`wm-intl-plan-card ${plan.highlight ? 'plan-card-highlight' : ''}`}
                    >
                      <div className="wm-intl-plan-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="wm-intl-plan-idx">Tier 0{pidx + 1}</span>
                          <label className="wm-intl-popular-toggle">
                            <input
                              type="checkbox"
                              checked={plan.highlight || false}
                              onChange={(e) => handleArrayItemChange('plans', pidx, 'highlight', e.target.checked)}
                            />
                            <span>Featured (Most Popular)</span>
                          </label>
                        </div>
                        <button
                          type="button"
                          className="wm-intl-del-icon"
                          onClick={() => handleRemoveArrayItem('plans', pidx)}
                          title="Delete Tier"
                        >
                          <FaTrash />
                        </button>
                      </div>

                      <div className="wm-intl-grid-2" style={{ marginTop: '12px' }}>
                        <div className="wm-intl-field">
                          <label>Package Name *</label>
                          <input
                            type="text"
                            value={plan.name || ''}
                            onChange={(e) => handleArrayItemChange('plans', pidx, 'name', e.target.value)}
                            placeholder="e.g. Dubai Accelerator"
                            required
                          />
                        </div>

                        <div className="wm-intl-field">
                          <label>Badge Label</label>
                          <input
                            type="text"
                            value={plan.badge || ''}
                            onChange={(e) => handleArrayItemChange('plans', pidx, 'badge', e.target.value)}
                            placeholder="e.g. Most Popular / High Volume"
                          />
                        </div>
                      </div>

                      <div className="wm-intl-grid-3" style={{ marginTop: '10px' }}>
                        <div className="wm-intl-field">
                          <label>Local Price ({formData.currency})</label>
                          <input
                            type="text"
                            value={plan.localPrice || ''}
                            onChange={(e) => handleArrayItemChange('plans', pidx, 'localPrice', e.target.value)}
                            placeholder="e.g. AED 2,930 or £999"
                          />
                        </div>

                        <div className="wm-intl-field">
                          <label>USD Price ($)</label>
                          <input
                            type="text"
                            value={plan.usdPrice || ''}
                            onChange={(e) => handleArrayItemChange('plans', pidx, 'usdPrice', e.target.value)}
                            placeholder="e.g. 1,499"
                          />
                        </div>

                        <div className="wm-intl-field">
                          <label>INR Price (₹)</label>
                          <input
                            type="text"
                            value={plan.inrPrice || ''}
                            onChange={(e) => handleArrayItemChange('plans', pidx, 'inrPrice', e.target.value)}
                            placeholder="e.g. 1,19,999"
                          />
                        </div>
                      </div>

                      <div className="wm-intl-field" style={{ marginTop: '10px' }}>
                        <label>Package Summary Description</label>
                        <textarea
                          rows={2}
                          value={plan.desc || ''}
                          onChange={(e) => handleArrayItemChange('plans', pidx, 'desc', e.target.value)}
                          placeholder="Brief 1-sentence value proposition..."
                        />
                      </div>

                      {/* Features / Deliverables Checklist */}
                      <div className="wm-intl-plan-features-wrap" style={{ marginTop: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <label style={{ fontSize: '12px', fontWeight: '700', color: '#38bdf8' }}>
                            Included Deliverables ({ (plan.features || []).length })
                          </label>
                          <button
                            type="button"
                            className="wm-intl-mini-btn"
                            onClick={() => handleAddPlanFeature(pidx)}
                          >
                            <FaPlus /> Add Bullet
                          </button>
                        </div>

                        <div className="wm-intl-features-list">
                          {(plan.features || []).map((feat, fidx) => (
                            <div key={fidx} className="wm-intl-feature-row">
                              <FaCheck className="wm-intl-feat-icon" />
                              <input
                                type="text"
                                value={feat}
                                onChange={(e) => handlePlanFeatureChange(pidx, fidx, e.target.value)}
                                placeholder="Deliverable / scope point..."
                              />
                              <button
                                type="button"
                                className="wm-intl-feat-del"
                                onClick={() => handleRemovePlanFeature(pidx, fidx)}
                                title="Remove bullet"
                              >
                                <FaTimes />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: CORE GEO SERVICES SUITE */}
          <div className="wm-intl-card">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('services')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge">04</span>
                <h3>Core Geo Services Suite ({(formData.services || []).length} Capabilities)</h3>
              </div>
              <button type="button" className="wm-intl-toggle-btn">
                {collapsedSections.services ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {!collapsedSections.services && (
              <div className="wm-intl-card-body">
                <div className="wm-intl-subitems-header">
                  <p>Services grid showcasing local specialized offerings.</p>
                  <button
                    type="button"
                    className="wm-intl-btn-subadd"
                    onClick={() => handleAddArrayItem('services', { icon: 'FaSearch', title: 'New Service', desc: 'Service description...' })}
                  >
                    <FaPlus /> Add Service
                  </button>
                </div>

                <div className="wm-intl-grid-3">
                  {(formData.services || []).map((svc, sidx) => (
                    <div key={sidx} className="wm-intl-subcard">
                      <div className="wm-intl-subcard-top">
                        <span className="wm-intl-subcard-tag">Card 0{sidx + 1}</span>
                        <button
                          type="button"
                          className="wm-intl-del-icon"
                          onClick={() => handleRemoveArrayItem('services', sidx)}
                        >
                          <FaTrash />
                        </button>
                      </div>

                      <div className="wm-intl-grid-2">
                        <div className="wm-intl-field">
                          <label>Icon</label>
                          <select
                            value={svc.icon || 'FaSearch'}
                            onChange={(e) => handleArrayItemChange('services', sidx, 'icon', e.target.value)}
                          >
                            <option value="FaSearch">Search (SEO)</option>
                            <option value="FaBullhorn">Bullhorn (Ads/PPC)</option>
                            <option value="FaShareAlt">Share (Social)</option>
                            <option value="FaPenNib">Pen (PR/Content)</option>
                            <option value="FaLaptopCode">Laptop (Web Dev)</option>
                            <option value="FaVideo">Video (Visuals)</option>
                            <option value="FaChartLine">Chart (Analytics)</option>
                            <option value="FaBuilding">Building (Enterprise)</option>
                          </select>
                        </div>

                        <div className="wm-intl-field">
                          <label>Service Title</label>
                          <input
                            type="text"
                            value={svc.title || ''}
                            onChange={(e) => handleArrayItemChange('services', sidx, 'title', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="wm-intl-field" style={{ marginTop: '8px' }}>
                        <label>Description</label>
                        <textarea
                          rows={2}
                          value={svc.desc || ''}
                          onChange={(e) => handleArrayItemChange('services', sidx, 'desc', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 5: WHY HIRE WEBMOK VS LOCAL AGENCIES */}
          <div className="wm-intl-card">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('comparison')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge">05</span>
                <h3>Why Hire Webmok vs Local Agencies Comparison</h3>
              </div>
              <button type="button" className="wm-intl-toggle-btn">
                {collapsedSections.comparison ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {!collapsedSections.comparison && (
              <div className="wm-intl-card-body">
                <div className="wm-intl-grid-2">
                  <div className="wm-intl-field">
                    <label>Section Title</label>
                    <input
                      type="text"
                      value={formData.whyHireOutsideTitle || ''}
                      onChange={(e) => handleFieldChange('whyHireOutsideTitle', e.target.value)}
                    />
                  </div>
                  <div className="wm-intl-field">
                    <label>Section Subtitle / Badge</label>
                    <input
                      type="text"
                      value={formData.whyHireOutsideSubtitle || ''}
                      onChange={(e) => handleFieldChange('whyHireOutsideSubtitle', e.target.value)}
                    />
                  </div>
                </div>

                <div className="wm-intl-grid-2" style={{ marginTop: '12px' }}>
                  <div className="wm-intl-field">
                    <label>Paragraph 1 (Local Agency Limitations)</label>
                    <textarea
                      rows={2}
                      value={formData.whyHireDesc1 || ''}
                      onChange={(e) => handleFieldChange('whyHireDesc1', e.target.value)}
                    />
                  </div>
                  <div className="wm-intl-field">
                    <label>Paragraph 2 (Webmok Direct Advantage)</label>
                    <textarea
                      rows={2}
                      value={formData.whyHireDesc2 || ''}
                      onChange={(e) => handleFieldChange('whyHireDesc2', e.target.value)}
                    />
                  </div>
                </div>

                {/* Comparison Points Table */}
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <label style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '13px' }}>
                      Comparison Rows ({ (formData.comparisonPoints || []).length })
                    </label>
                    <button
                      type="button"
                      className="wm-intl-mini-btn"
                      onClick={() => handleAddArrayItem('comparisonPoints', { feature: 'Contract', local: '1-Year Lock-In', webmok: 'Flexible Month-to-Month' })}
                    >
                      <FaPlus /> Add Row
                    </button>
                  </div>

                  <div className="wm-intl-table-wrap">
                    <table className="wm-intl-editable-table">
                      <thead>
                        <tr>
                          <th>Comparison Dimension</th>
                          <th>Typical Local Agency</th>
                          <th>Webmok Advantage</th>
                          <th style={{ width: '40px' }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(formData.comparisonPoints || []).map((cp, cidx) => (
                          <tr key={cidx}>
                            <td>
                              <input
                                type="text"
                                value={cp.feature || ''}
                                onChange={(e) => handleArrayItemChange('comparisonPoints', cidx, 'feature', e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={cp.local || ''}
                                onChange={(e) => handleArrayItemChange('comparisonPoints', cidx, 'local', e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={cp.webmok || ''}
                                onChange={(e) => handleArrayItemChange('comparisonPoints', cidx, 'webmok', e.target.value)}
                              />
                            </td>
                            <td>
                              <button
                                type="button"
                                className="wm-intl-del-icon"
                                onClick={() => handleRemoveArrayItem('comparisonPoints', cidx)}
                              >
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 6: VERIFIED RESULTS TELEMETRY */}
          <div className="wm-intl-card">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('results')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge">06</span>
                <h3>Verified Performance Results & Telemetry</h3>
              </div>
              <button type="button" className="wm-intl-toggle-btn">
                {collapsedSections.results ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {!collapsedSections.results && (
              <div className="wm-intl-card-body">
                <div className="wm-intl-grid-2">
                  <div className="wm-intl-field">
                    <label>Results Section Title</label>
                    <input
                      type="text"
                      value={formData.resultsTitle || ''}
                      onChange={(e) => handleFieldChange('resultsTitle', e.target.value)}
                    />
                  </div>
                  <div className="wm-intl-field">
                    <label>Results Subtitle / Badge</label>
                    <input
                      type="text"
                      value={formData.resultsSubtitle || ''}
                      onChange={(e) => handleFieldChange('resultsSubtitle', e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <label style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '13px' }}>
                      Telemetry Metric Cards ({ (formData.resultsStats || []).length })
                    </label>
                    <button
                      type="button"
                      className="wm-intl-mini-btn"
                      onClick={() => handleAddArrayItem('resultsStats', { metric: '99%', label: 'Retention Rate' })}
                    >
                      <FaPlus /> Add Metric Card
                    </button>
                  </div>

                  <div className="wm-intl-grid-4">
                    {(formData.resultsStats || []).map((rs, ridx) => (
                      <div key={ridx} className="wm-intl-subcard">
                        <div className="wm-intl-subcard-top">
                          <span className="wm-intl-subcard-tag">Result 0{ridx + 1}</span>
                          <button
                            type="button"
                            className="wm-intl-del-icon"
                            onClick={() => handleRemoveArrayItem('resultsStats', ridx)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <div className="wm-intl-field">
                          <label>Metric Value</label>
                          <input
                            type="text"
                            value={rs.metric || ''}
                            onChange={(e) => handleArrayItemChange('resultsStats', ridx, 'metric', e.target.value)}
                            placeholder="e.g. AED 38M+ or 99.5%"
                          />
                        </div>
                        <div className="wm-intl-field" style={{ marginTop: '8px' }}>
                          <label>Description Label</label>
                          <input
                            type="text"
                            value={rs.label || ''}
                            onChange={(e) => handleArrayItemChange('resultsStats', ridx, 'label', e.target.value)}
                            placeholder="e.g. Client Revenue Generated"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 7: TESTIMONIALS & FAQS */}
          <div className="wm-intl-card">
            <div
              className="wm-intl-card-header"
              onClick={() => toggleSection('faqs')}
            >
              <div className="wm-intl-card-title">
                <span className="wm-intl-step-badge">07</span>
                <h3>Client Testimonials & FAQs</h3>
              </div>
              <button type="button" className="wm-intl-toggle-btn">
                {collapsedSections.faqs ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {!collapsedSections.faqs && (
              <div className="wm-intl-card-body">
                {/* FAQs */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontWeight: '700', color: '#e2e8f0', fontSize: '13px' }}>
                    Frequently Asked Questions ({ (formData.faqs || []).length })
                  </label>
                  <button
                    type="button"
                    className="wm-intl-mini-btn"
                    onClick={() => handleAddArrayItem('faqs', { q: 'New Question?', a: 'Detailed answer...' })}
                  >
                    <FaPlus /> Add FAQ
                  </button>
                </div>

                <div className="wm-intl-faq-list">
                  {(formData.faqs || []).map((faq, fidx) => (
                    <div key={fidx} className="wm-intl-faq-item">
                      <div className="wm-intl-faq-header">
                        <span className="wm-intl-faq-qnum">Q{fidx + 1}</span>
                        <input
                          type="text"
                          value={faq.q || ''}
                          onChange={(e) => handleArrayItemChange('faqs', fidx, 'q', e.target.value)}
                          placeholder="Question..."
                          style={{ flex: 1 }}
                        />
                        <button
                          type="button"
                          className="wm-intl-del-icon"
                          onClick={() => handleRemoveArrayItem('faqs', fidx)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={faq.a || ''}
                        onChange={(e) => handleArrayItemChange('faqs', fidx, 'a', e.target.value)}
                        placeholder="Answer..."
                        style={{ marginTop: '8px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Bottom Submit Bar */}
          <div className="wm-intl-sticky-footer">
            <div className="wm-intl-footer-info">
              <span>Editing: <strong>{formData.name}</strong></span>
              <span className="wm-intl-footer-slug">Route: /international/{formData.slug}</span>
            </div>

            <div className="wm-intl-footer-btns">
              <button
                type="button"
                className="wm-intl-btn-delete-active"
                onClick={() => handleDeletePage(formData)}
                disabled={saving}
              >
                <FaTrash /> Delete Page
              </button>

              <button
                type="button"
                onClick={handleSavePage}
                className="wm-intl-btn-save-main"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <FaSpinner className="wm-intl-spin" /> Saving Changes...
                  </>
                ) : (
                  <>
                    <FaSave /> Save Changes for "{formData.city || formData.name}"
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* MODAL: ADD NEW INTERNATIONAL PAGE */}
      {showAddModal && (
        <div className="wm-intl-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="wm-intl-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="wm-intl-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaGlobeAmericas style={{ color: '#00d4ff', fontSize: '20px' }} />
                <h3>Add New International Geo Page</h3>
              </div>
              <button
                type="button"
                className="wm-intl-modal-close"
                onClick={() => setShowAddModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleCreateNewPage} className="wm-intl-modal-body">
              <div className="wm-intl-field">
                <label>Page Title / Full Name *</label>
                <input
                  type="text"
                  value={newPageData.name}
                  onChange={(e) => setNewPageData({ ...newPageData, name: e.target.value })}
                  placeholder="e.g. Singapore Digital Marketing Agency"
                  required
                />
              </div>

              <div className="wm-intl-grid-2" style={{ marginTop: '12px' }}>
                <div className="wm-intl-field">
                  <label>City *</label>
                  <input
                    type="text"
                    value={newPageData.city}
                    onChange={(e) => setNewPageData({ ...newPageData, city: e.target.value })}
                    placeholder="e.g. Singapore"
                    required
                  />
                </div>

                <div className="wm-intl-field">
                  <label>Country *</label>
                  <input
                    type="text"
                    value={newPageData.country}
                    onChange={(e) => setNewPageData({ ...newPageData, country: e.target.value })}
                    placeholder="e.g. Singapore"
                    required
                  />
                </div>
              </div>

              <div className="wm-intl-grid-3" style={{ marginTop: '12px' }}>
                <div className="wm-intl-field">
                  <label>URL Slug (auto-generated if empty)</label>
                  <input
                    type="text"
                    value={newPageData.slug}
                    onChange={(e) => setNewPageData({ ...newPageData, slug: e.target.value })}
                    placeholder="e.g. singapore-digital-marketing"
                  />
                </div>

                <div className="wm-intl-field">
                  <label>Currency Code</label>
                  <select
                    value={newPageData.currency}
                    onChange={(e) => setNewPageData({ ...newPageData, currency: e.target.value })}
                  >
                    <option value="USD">USD ($)</option>
                    <option value="SGD">SGD (S$)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="AED">AED (AED)</option>
                    <option value="CAD">CAD (C$)</option>
                    <option value="AUD">AUD (A$)</option>
                    <option value="INR">INR (₹)</option>
                  </select>
                </div>

                <div className="wm-intl-field">
                  <label>Currency Symbol</label>
                  <input
                    type="text"
                    value={newPageData.currencySymbol}
                    onChange={(e) => setNewPageData({ ...newPageData, currencySymbol: e.target.value })}
                    placeholder="e.g. S$, $, £, €"
                  />
                </div>
              </div>

              <p style={{ marginTop: '14px', fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.5' }}>
                💡 When created, this page will automatically be populated with pre-configured packages, SEO services, comparison charts, and FAQs tailored to <strong>{newPageData.city || 'your target market'}</strong>, ready for you to customize!
              </p>

              <div className="wm-intl-modal-footer">
                <button
                  type="button"
                  className="wm-intl-btn-cancel"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="wm-intl-btn-create"
                  disabled={saving}
                >
                  {saving ? <FaSpinner className="wm-intl-spin" /> : <FaPlus />} Create Page
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInternationalPages;
