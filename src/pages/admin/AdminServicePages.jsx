import React, { useState, useEffect } from 'react';
import {
  FaLaptopCode,
  FaSearch,
  FaSave,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaPlus,
  FaTrash,
  FaStar,
  FaQuestionCircle,
  FaLayerGroup,
  FaFileAlt
} from 'react-icons/fa';
import './AdminServicePages.css';

const API_BASE = 'http://localhost:5005/api';

const AdminServicePages = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState('seo-services-company');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Form state for active service
  const [formData, setFormData] = useState({
    serviceSlug: '',
    serviceName: '',
    category: '',
    heroTitle: '',
    heroSubtitle: '',
    heroRatingScore: '4.9',
    heroRatingReviewCount: '250+ client reviews',
    heroRatingText: '',
    overviewTitle: '',
    overviewParagraph1: '',
    overviewParagraph2: '',
    features: [],
    faqs: []
  });

  // Fetch all service pages from backend
  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/service-pages`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setServices(json.data);
          try {
            localStorage.setItem('webmok_admin_service_pages', JSON.stringify(json.data));
          } catch (e) {}
        }
      }
    } catch (err) {
      console.warn('Backend offline, trying localStorage cache:', err.message);
      try {
        const saved = localStorage.getItem('webmok_admin_service_pages');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) setServices(parsed);
        }
      } catch (e) {}
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Whenever services load or selectedSlug changes, update formData
  useEffect(() => {
    if (services.length > 0) {
      const active = services.find((s) => s.serviceSlug === selectedSlug) || services[0];
      if (active) {
        setSelectedSlug(active.serviceSlug);
        setFormData({
          serviceSlug: active.serviceSlug || '',
          serviceName: active.serviceName || '',
          category: active.category || '',
          heroTitle: active.heroTitle || '',
          heroSubtitle: active.heroSubtitle || '',
          heroRatingScore: active.heroRatingScore || '4.9',
          heroRatingReviewCount: active.heroRatingReviewCount || '250+ client reviews',
          heroRatingText: active.heroRatingText || '',
          overviewTitle: active.overviewTitle || '',
          overviewParagraph1: active.overviewParagraph1 || '',
          overviewParagraph2: active.overviewParagraph2 || '',
          features: Array.isArray(active.features) ? [...active.features] : [],
          faqs: Array.isArray(active.faqs) ? [...active.faqs] : []
        });
      }
    }
  }, [selectedSlug, services]);

  // Handle Save
  const handleSave = async (e) => {
    if (e) e.preventDefault();
    if (!formData.serviceSlug) return;

    try {
      setSaving(true);
      setFeedback(null);
      const res = await fetch(`${API_BASE}/service-pages/${formData.serviceSlug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setServices((prev) =>
          prev.map((s) => (s.serviceSlug === formData.serviceSlug ? json.data : s))
        );
        // Also save to individual localStorage key for instant frontend hydration
        try {
          localStorage.setItem(`webmok_sp_${formData.serviceSlug}`, JSON.stringify(json.data));
        } catch (e) {}
        setFeedback({ type: 'success', message: `"${formData.serviceName}" updated successfully! Changes are live on frontend.` });
      } else {
        setFeedback({ type: 'error', message: json.message || 'Failed to save changes' });
      }
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
      setTimeout(() => setFeedback(null), 5000);
    }
  };

  // Feature list handlers
  const handleAddFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [
        ...prev.features,
        {
          badge: String(prev.features.length + 1).padStart(2, '0'),
          title: 'New Service Capability',
          desc: 'Comprehensive end-to-end execution delivering high ROI.'
        }
      ]
    }));
  };

  const handleUpdateFeature = (idx, field, val) => {
    setFormData((prev) => {
      const next = [...prev.features];
      next[idx] = { ...next[idx], [field]: val };
      return { ...prev, features: next };
    });
  };

  const handleDeleteFeature = (idx) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== idx)
    }));
  };

  // FAQ list handlers
  const handleAddFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        {
          q: 'Frequently asked question title?',
          a: 'Comprehensive answer explaining deliverables, timelines, and guarantees.'
        }
      ]
    }));
  };

  const handleUpdateFaq = (idx, field, val) => {
    setFormData((prev) => {
      const next = [...prev.faqs];
      next[idx] = { ...next[idx], [field]: val };
      return { ...prev, faqs: next };
    });
  };

  const handleDeleteFaq = (idx) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== idx)
    }));
  };

  // Filter categories
  const categories = ['all', ...new Set(services.map((s) => s.category).filter(Boolean))];

  const filteredServices = services.filter((s) => {
    const matchCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchSearch =
      s.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.serviceSlug.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="wm-asp-root">
      {/* Header Banner */}
      <div className="wm-asp-header">
        <div>
          <h2>
            <FaLaptopCode /> Manage Service Pages Content & Details
          </h2>
          <p>
            Select any service page below to edit its H1 Hero Title, Trust Rating, Overview, Features, and FAQs. Frontend design stays 100% identical and responsive.
          </p>
        </div>
        <div className="wm-asp-header-meta">
          <span className="wm-asp-count-pill">{services.length} Total Service Pages</span>
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div className={`wm-asp-feedback ${feedback.type === 'success' ? 'success' : 'error'}`}>
          {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* 1. SERVICE SELECTOR BUTTONS */}
      <div className="wm-asp-selector-card">
        <div className="wm-asp-selector-top">
          <div className="wm-asp-cat-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`wm-asp-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All Services' : cat}
              </button>
            ))}
          </div>
          <div className="wm-asp-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 29 Individual Buttons Grid */}
        <div className="wm-asp-btn-grid">
          {filteredServices.map((item) => (
            <button
              key={item.serviceSlug}
              type="button"
              className={`wm-asp-service-btn ${selectedSlug === item.serviceSlug ? 'active' : ''}`}
              onClick={() => setSelectedSlug(item.serviceSlug)}
            >
              <span className="wm-asp-sbtn-name">{item.serviceName}</span>
              <span className="wm-asp-sbtn-cat">{item.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. ACTIVE SERVICE EDITOR FORM */}
      <form onSubmit={handleSave} className="wm-asp-editor-form">
        {/* Editor Top Bar with Action Buttons */}
        <div className="wm-asp-editor-header">
          <div>
            <span className="wm-asp-tagline">Editing Service Page</span>
            <h3>{formData.serviceName}</h3>
            <code className="wm-asp-slug-tag">/services/{formData.serviceSlug}</code>
          </div>
          <div className="wm-asp-editor-actions">
            <a
              href={`/services/${formData.serviceSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wm-asp-btn-preview"
              title="Open frontend service page in a new tab"
            >
              <FaExternalLinkAlt /> View Live Page
            </a>
            <button type="submit" className="wm-asp-btn-save" disabled={saving}>
              {saving ? <FaSpinner className="wm-spin" /> : <FaSave />} Save Changes
            </button>
          </div>
        </div>

        {/* SECTION 1: HERO SECTION & TRUST SCORECARD */}
        <div className="wm-asp-form-section">
          <div className="wm-asp-section-title">
            <FaFileAlt />
            <h4>1. Hero Section & Trust Rating</h4>
          </div>

          <div className="wm-asp-grid-2">
            <div className="wm-asp-field">
              <label>H1 Hero Title * (Displayed prominently on the service page):</label>
              <input
                type="text"
                required
                value={formData.heroTitle}
                onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                placeholder="e.g. Best SEO Services in India & Delhi NCR"
              />
            </div>
            <div className="wm-asp-field">
              <label>Hero Subtitle / Badge (Optional):</label>
              <input
                type="text"
                value={formData.heroSubtitle}
                onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                placeholder="e.g. Proven organic search performance"
              />
            </div>
          </div>

          <div className="wm-asp-grid-3">
            <div className="wm-asp-field">
              <label>Rating Score (out of 5):</label>
              <input
                type="text"
                value={formData.heroRatingScore}
                onChange={(e) => setFormData({ ...formData, heroRatingScore: e.target.value })}
                placeholder="4.9"
              />
            </div>
            <div className="wm-asp-field">
              <label>Client Reviews Count:</label>
              <input
                type="text"
                value={formData.heroRatingReviewCount}
                onChange={(e) => setFormData({ ...formData, heroRatingReviewCount: e.target.value })}
                placeholder="250+ client reviews"
              />
            </div>
            <div className="wm-asp-field">
              <label>Rating Platforms & Trust Statement:</label>
              <input
                type="text"
                value={formData.heroRatingText}
                onChange={(e) => setFormData({ ...formData, heroRatingText: e.target.value })}
                placeholder="Rated 4.9/5 across Clutch, Google, AmbitionBox"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: OVERVIEW SECTION */}
        <div className="wm-asp-form-section">
          <div className="wm-asp-section-title">
            <FaFileAlt />
            <h4>2. Overview & Lead Section</h4>
          </div>

          <div className="wm-asp-field">
            <label>Overview H2 Title:</label>
            <input
              type="text"
              value={formData.overviewTitle}
              onChange={(e) => setFormData({ ...formData, overviewTitle: e.target.value })}
              placeholder="e.g. Engineered for Measurable Digital Dominance"
            />
          </div>

          <div className="wm-asp-grid-2">
            <div className="wm-asp-field">
              <label>Overview Paragraph 1:</label>
              <textarea
                rows={3}
                value={formData.overviewParagraph1}
                onChange={(e) => setFormData({ ...formData, overviewParagraph1: e.target.value })}
                placeholder="Primary description of this service and value proposition..."
              />
            </div>
            <div className="wm-asp-field">
              <label>Overview Paragraph 2:</label>
              <textarea
                rows={3}
                value={formData.overviewParagraph2}
                onChange={(e) => setFormData({ ...formData, overviewParagraph2: e.target.value })}
                placeholder="Secondary details, methodology, and guarantees..."
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: KEY CAPABILITIES / DELIVERABLES */}
        <div className="wm-asp-form-section">
          <div className="wm-asp-section-title" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaLayerGroup />
              <h4>3. Key Offerings & Features ({formData.features.length})</h4>
            </div>
            <button type="button" className="wm-asp-btn-add-item" onClick={handleAddFeature}>
              <FaPlus /> Add Offering
            </button>
          </div>

          <div className="wm-asp-items-list">
            {formData.features.map((feat, fi) => (
              <div key={fi} className="wm-asp-item-card">
                <div className="wm-asp-item-header">
                  <span className="wm-asp-item-num">Offering #{fi + 1}</span>
                  <button
                    type="button"
                    className="wm-asp-btn-del-item"
                    onClick={() => handleDeleteFeature(fi)}
                    title="Delete offering"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="wm-asp-grid-2">
                  <div className="wm-asp-field">
                    <label>Badge / Number:</label>
                    <input
                      type="text"
                      value={feat.badge || ''}
                      onChange={(e) => handleUpdateFeature(fi, 'badge', e.target.value)}
                      placeholder="e.g. 01"
                    />
                  </div>
                  <div className="wm-asp-field">
                    <label>Offering Title:</label>
                    <input
                      type="text"
                      value={feat.title || ''}
                      onChange={(e) => handleUpdateFeature(fi, 'title', e.target.value)}
                      placeholder="e.g. Technical SEO & Core Web Vitals"
                    />
                  </div>
                </div>
                <div className="wm-asp-field">
                  <label>Description:</label>
                  <textarea
                    rows={2}
                    value={feat.desc || ''}
                    onChange={(e) => handleUpdateFeature(fi, 'desc', e.target.value)}
                    placeholder="Comprehensive description of this offering..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <div className="wm-asp-form-section">
          <div className="wm-asp-section-title" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaQuestionCircle />
              <h4>4. Frequently Asked Questions ({formData.faqs.length})</h4>
            </div>
            <button type="button" className="wm-asp-btn-add-item" onClick={handleAddFaq}>
              <FaPlus /> Add FAQ
            </button>
          </div>

          <div className="wm-asp-items-list">
            {formData.faqs.map((faq, fqi) => (
              <div key={fqi} className="wm-asp-item-card">
                <div className="wm-asp-item-header">
                  <span className="wm-asp-item-num">FAQ #{fqi + 1}</span>
                  <button
                    type="button"
                    className="wm-asp-btn-del-item"
                    onClick={() => handleDeleteFaq(fqi)}
                    title="Delete FAQ"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="wm-asp-field">
                  <label>Question:</label>
                  <input
                    type="text"
                    value={faq.q || ''}
                    onChange={(e) => handleUpdateFaq(fqi, 'q', e.target.value)}
                    placeholder="e.g. What is the standard timeline for deliverables?"
                  />
                </div>
                <div className="wm-asp-field">
                  <label>Answer:</label>
                  <textarea
                    rows={3}
                    value={faq.a || ''}
                    onChange={(e) => handleUpdateFaq(fqi, 'a', e.target.value)}
                    placeholder="Direct, authoritative answer..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Bottom Save Bar */}
        <div className="wm-asp-bottom-bar">
          <div className="wm-asp-bottom-info">
            <span>Selected Service: <strong>{formData.serviceName}</strong></span>
          </div>
          <button type="submit" className="wm-asp-btn-save" disabled={saving}>
            {saving ? <FaSpinner className="wm-spin" /> : <FaSave />} Save Changes Live
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminServicePages;
