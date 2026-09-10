import React, { useState, useEffect, useRef } from 'react';
import {
  FaBoxOpen,
  FaPlus,
  FaTrash,
  FaSave,
  FaUndoAlt,
  FaExternalLinkAlt,
  FaUpload,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaImage,
  FaListUl,
  FaQuestionCircle,
  FaLayerGroup,
  FaStar,
  FaTag
} from 'react-icons/fa';
import './AdminPackages.css';

const API_BASE = 'http://localhost:5005/api';

const defaultSeedPackage = {
  slug: 'custom-package',
  name: 'New Custom Package',
  shortName: 'New Package',
  category: 'SEO',
  tagline: 'STRATEGIC DIGITAL PERFORMANCE & ROI · EST. 2018',
  heroTitleHighlight: 'High Performance Package',
  leadDesc: 'Accelerate your digital presence with enterprise results and data-driven execution.',
  bodyDesc: 'Tailored solutions designed to scale your business, generate qualified leads, and maximize revenue.',
  image: '',
  stats: [
    { num: '99%', label: 'Delivery Accuracy' },
    { num: '3.5x', label: 'Average ROI Multiplier' },
    { num: '500+', label: 'Global Clients Served' },
    { num: '24/7', label: 'Dedicated Account Support' }
  ],
  plans: [
    {
      name: 'Starter Tier',
      badge: 'Startups & Local Business',
      inrPrice: '15,000',
      usdPrice: '249',
      period: '/ month',
      desc: 'Essential foundation for emerging businesses ready to establish market authority.',
      features: ['Dedicated Specialist', 'Weekly Reporting', 'Core Optimization', 'Basic Analytics'],
      popular: false
    },
    {
      name: 'Growth Tier',
      badge: 'Most Popular / Growth Brands',
      inrPrice: '28,000',
      usdPrice: '449',
      period: '/ month',
      desc: 'Rapid expansion engine engineered to outperform competitors across key touchpoints.',
      features: ['Priority Account Manager', 'Advanced Strategy & Audits', 'Daily Monitoring', 'Custom KPI Dashboards'],
      popular: true
    },
    {
      name: 'Enterprise Tier',
      badge: 'High Volume & Multi-Location',
      inrPrice: '55,000',
      usdPrice: '849',
      period: '/ month',
      desc: 'Full-scale enterprise execution with dedicated squad and bespoke strategy delivery.',
      features: ['Dedicated Team Squad', 'Omnichannel Strategy', 'Real-Time Telemetry', 'SLA Guarantee'],
      popular: false
    }
  ],
  faqs: [
    { q: 'What is the contract duration for this package?', a: 'We offer flexible monthly retainers with zero lock-in contracts. You can scale or pause anytime.' },
    { q: 'How do we track progress and campaign milestones?', a: 'You receive weekly automated scorecards, bi-weekly strategic calls, and live 24/7 access to your KPI dashboard.' }
  ],
  status: 'Active',
  order: 1
};

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [activePackageId, setActivePackageId] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPkgData, setNewPkgData] = useState({
    name: '',
    slug: '',
    shortName: '',
    category: 'SEO'
  });

  const fileInputRef = useRef(null);

  // Show auto-dismissing banner
  const triggerFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => {
      setFeedback({ type: '', message: '' });
    }, 5000);
  };

  // Fetch all packages
  const fetchPackages = async (preferredSlug = null) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/packages`);
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        setPackages(json.data);
        const target = preferredSlug
          ? json.data.find(p => p.slug === preferredSlug || p._id === preferredSlug)
          : json.data[0];
        const selected = target || json.data[0];
        setActivePackageId(selected._id || selected.slug);
        setFormData(JSON.parse(JSON.stringify(selected)));
      } else {
        setPackages([]);
        setFormData(null);
      }
    } catch (err) {
      console.error('Failed to load packages:', err);
      triggerFeedback('error', 'Could not connect to backend server. Make sure server is running on port 5005.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // Handle switching active package
  const handleSelectPackage = (pkg) => {
    setActivePackageId(pkg._id || pkg.slug);
    setFormData(JSON.parse(JSON.stringify(pkg)));
  };

  // Field change handler
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Stats field change
  const handleStatChange = (index, key, value) => {
    const updatedStats = [...(formData.stats || [])];
    if (!updatedStats[index]) {
      updatedStats[index] = { num: '', label: '' };
    }
    updatedStats[index][key] = value;
    setFormData(prev => ({ ...prev, stats: updatedStats }));
  };

  // Plan field change
  const handlePlanChange = (pIdx, key, value) => {
    const updatedPlans = [...(formData.plans || [])];
    updatedPlans[pIdx][key] = value;
    setFormData(prev => ({ ...prev, plans: updatedPlans }));
  };

  // Plan feature add/remove/change
  const handleFeatureChange = (pIdx, fIdx, value) => {
    const updatedPlans = [...(formData.plans || [])];
    updatedPlans[pIdx].features[fIdx] = value;
    setFormData(prev => ({ ...prev, plans: updatedPlans }));
  };

  const handleAddFeature = (pIdx) => {
    const updatedPlans = [...(formData.plans || [])];
    if (!updatedPlans[pIdx].features) updatedPlans[pIdx].features = [];
    updatedPlans[pIdx].features.push('New Feature Item');
    setFormData(prev => ({ ...prev, plans: updatedPlans }));
  };

  const handleRemoveFeature = (pIdx, fIdx) => {
    const updatedPlans = [...(formData.plans || [])];
    updatedPlans[pIdx].features.splice(fIdx, 1);
    setFormData(prev => ({ ...prev, plans: updatedPlans }));
  };

  // Add plan
  const handleAddPlan = () => {
    const newPlan = {
      name: 'Custom Tier',
      badge: 'Custom Plan',
      inrPrice: '19,999',
      usdPrice: '299',
      period: '/ month',
      desc: 'Bespoke features tailored to target goals.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      popular: false
    };
    setFormData(prev => ({
      ...prev,
      plans: [...(prev.plans || []), newPlan]
    }));
  };

  // Remove plan
  const handleRemovePlan = (pIdx) => {
    if ((formData.plans || []).length <= 1) {
      alert('A package must have at least 1 pricing tier.');
      return;
    }
    const updatedPlans = [...formData.plans];
    updatedPlans.splice(pIdx, 1);
    setFormData(prev => ({ ...prev, plans: updatedPlans }));
  };

  // FAQ change
  const handleFaqChange = (fIdx, key, value) => {
    const updatedFaqs = [...(formData.faqs || [])];
    updatedFaqs[fIdx][key] = value;
    setFormData(prev => ({ ...prev, faqs: updatedFaqs }));
  };

  const handleAddFaq = () => {
    setFormData(prev => ({
      ...prev,
      faqs: [...(prev.faqs || []), { q: 'Frequently Asked Question?', a: 'Detailed answer explanation.' }]
    }));
  };

  const handleRemoveFaq = (fIdx) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs.splice(fIdx, 1);
    setFormData(prev => ({ ...prev, faqs: updatedFaqs }));
  };

  // Image Upload handler
  const handleImageFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const bodyFormData = new FormData();
    bodyFormData.append('image', file);

    setUploadingImage(true);
    try {
      const res = await fetch(`${API_BASE}/packages/upload`, {
        method: 'POST',
        body: bodyFormData
      });
      const data = await res.json();
      if (data.success && data.imageUrl) {
        // Construct full URL if relative
        const fullUrl = data.imageUrl.startsWith('http') ? data.imageUrl : `http://localhost:5005${data.imageUrl}`;
        setFormData(prev => ({ ...prev, image: fullUrl }));
        triggerFeedback('success', `Image uploaded: ${file.name}`);
      } else {
        triggerFeedback('error', data.message || 'Image upload failed.');
      }
    } catch (err) {
      console.error('Image upload error:', err);
      triggerFeedback('error', 'Error uploading image file.');
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Save changes
  const handleSave = async (e) => {
    if (e) e.preventDefault();
    if (!formData || !formData.slug) {
      alert('Package slug cannot be empty.');
      return;
    }

    setSaving(true);
    try {
      const identifier = formData._id || formData.slug;
      const res = await fetch(`${API_BASE}/packages/${identifier}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        triggerFeedback('success', `Saved package "${formData.name}" successfully!`);
        await fetchPackages(formData.slug);
      } else {
        triggerFeedback('error', data.message || 'Failed to save package.');
      }
    } catch (err) {
      console.error('Error saving package:', err);
      triggerFeedback('error', 'Error connecting to database to save package.');
    } finally {
      setSaving(false);
    }
  };

  // Delete current package
  const handleDelete = async () => {
    if (!formData) return;
    const confirmDel = window.confirm(`Are you sure you want to delete "${formData.name}" (${formData.slug})? This cannot be undone.`);
    if (!confirmDel) return;

    try {
      const identifier = formData._id || formData.slug;
      const res = await fetch(`${API_BASE}/packages/${identifier}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        triggerFeedback('success', `Deleted package "${formData.name}".`);
        await fetchPackages();
      } else {
        triggerFeedback('error', data.message || 'Failed to delete package.');
      }
    } catch (err) {
      console.error('Error deleting package:', err);
      triggerFeedback('error', 'Error deleting package.');
    }
  };

  // Reset to default seed packages
  const handleResetDefaults = async () => {
    const confirmReset = window.confirm('Reset all 18 package pages to factory default templates? Any custom package edits will be overwritten.');
    if (!confirmReset) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/packages/reset`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        triggerFeedback('success', 'All packages reset to system default templates successfully!');
        await fetchPackages();
      } else {
        triggerFeedback('error', data.message || 'Failed to reset packages.');
      }
    } catch (err) {
      console.error('Error resetting packages:', err);
      triggerFeedback('error', 'Error resetting packages to default.');
    } finally {
      setLoading(false);
    }
  };

  // Add new package submit
  const handleCreateNewPackage = async (e) => {
    e.preventDefault();
    if (!newPkgData.name.trim() || !newPkgData.slug.trim()) {
      alert('Please enter both a name and a URL slug.');
      return;
    }

    const cleanSlug = newPkgData.slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-').replace(/^-+|-+$/g, '');
    const newPackagePayload = {
      ...defaultSeedPackage,
      name: newPkgData.name.trim(),
      slug: cleanSlug,
      shortName: newPkgData.shortName.trim() || newPkgData.name.trim(),
      category: newPkgData.category || 'SEO',
      heroTitleHighlight: `${newPkgData.name.trim()} in India`,
      order: packages.length + 1
    };

    try {
      const res = await fetch(`${API_BASE}/packages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPackagePayload)
      });
      const data = await res.json();
      if (data.success) {
        triggerFeedback('success', `Created package "${newPkgData.name}"!`);
        setShowAddModal(false);
        setNewPkgData({ name: '', slug: '', shortName: '', category: 'SEO' });
        await fetchPackages(cleanSlug);
      } else {
        alert(data.message || 'Failed to create package.');
      }
    } catch (err) {
      console.error('Error creating package:', err);
      alert('Error creating package in database.');
    }
  };

  if (loading && packages.length === 0) {
    return (
      <div className="wm-pkg-admin-wrap" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <FaSpinner className="wm-spinner-icon" style={{ fontSize: '36px', color: '#0b4f8a' }} />
        <h3 style={{ color: '#0b4f8a', marginTop: '16px' }}>Loading Package CMS Data...</h3>
        <p style={{ color: '#64748b' }}>Syncing packages and pricing tiers from database.</p>
      </div>
    );
  }

  return (
    <div className="wm-pkg-admin-wrap">
      {/* Top Header Card */}
      <div className="wm-pkg-admin-header">
        <div className="wm-pkg-admin-title">
          <h2>
            <FaBoxOpen /> Package CMS & Pricing Management
          </h2>
          <p>
            Select any package below to update headlines, descriptions, 4-metric stats, multi-tier pricing plans (INR/USD), FAQs, or upload custom banner images.
          </p>
        </div>
        <div className="wm-pkg-admin-actions">
          <button
            type="button"
            className="wm-pkg-btn-add"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus /> Add New Package
          </button>
          {/* <button
            type="button"
            className="wm-pkg-btn-reset"
            onClick={handleResetDefaults}
            title="Restore all default seed packages"
          >
            <FaUndoAlt /> Reset Defaults
          </button> */}
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback.message && (
        <div className={`wm-pkg-feedback-banner ${feedback.type === 'success' ? 'wm-pkg-feedback-success' : 'wm-pkg-feedback-error'}`}>
          {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Horizontal Package Subtabs Selector */}
      <div className="wm-pkg-subtabs-bar">
        {packages.map((pkg, idx) => {
          const isActive = (formData && (formData.slug === pkg.slug || formData._id === pkg._id));
          return (
            <button
              key={pkg._id || pkg.slug}
              type="button"
              className={`wm-pkg-subtab-pill ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectPackage(pkg)}
            >
              <span className="wm-pkg-subtab-num">{idx + 1}</span>
              <span className="wm-pkg-subtab-title">{pkg.shortName || pkg.name}</span>
              <span className="wm-pkg-subtab-cat">{pkg.category || 'Package'}</span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Split Workspace: Form Editor (Left) & Live Preview (Right) */}
      {formData && (
        <div className="wm-pkg-workspace-grid">
          {/* LEFT COLUMN: EDITOR FORM */}
          <form onSubmit={handleSave} className="wm-pkg-editor-col">
            {/* CARD 1: Basic Information & Routing */}
            <div className="wm-pkg-editor-card">
              <div className="wm-pkg-editor-card-header">
                <h3><FaTag /> 1. Package Identity & Routing</h3>
                <a
                  href={`/${formData.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '13px', color: '#00a8cc', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}
                >
                  <FaExternalLinkAlt /> View Live (/{formData.slug})
                </a>
              </div>

              <div className="wm-pkg-fields-row">
                <div className="wm-pkg-field-group">
                  <label>Package Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g. SEO Packages"
                  />
                </div>

                <div className="wm-pkg-field-group">
                  <label>URL Slug (Direct Domain Path) *</label>
                  <input
                    type="text"
                    required
                    value={formData.slug || ''}
                    onChange={(e) => handleChange('slug', e.target.value)}
                    placeholder="e.g. seo-packages"
                  />
                  <small style={{ color: '#64748b', fontSize: '11.5px', marginTop: '2px' }}>
                    Opens at: <code>https://webmok.in/{formData.slug || 'slug'}</code>
                  </small>
                </div>
              </div>

              <div className="wm-pkg-fields-row">
                <div className="wm-pkg-field-group">
                  <label>Short Nav Label</label>
                  <input
                    type="text"
                    value={formData.shortName || ''}
                    onChange={(e) => handleChange('shortName', e.target.value)}
                    placeholder="e.g. SEO"
                  />
                </div>

                <div className="wm-pkg-field-group">
                  <label>Category</label>
                  <select
                    value={formData.category || 'SEO'}
                    onChange={(e) => handleChange('category', e.target.value)}
                  >
                    <option value="SEO">SEO Packages</option>
                    <option value="Social Media">Social Media / SMM</option>
                    <option value="PPC & Ads">PPC & Google Ads</option>
                    <option value="Web & Maintenance">Web Development & Maintenance</option>
                    <option value="Branding & Design">Branding & Logo Design</option>
                    <option value="ORM">Online Reputation (ORM)</option>
                  </select>
                </div>
              </div>

              <div className="wm-pkg-fields-row">
                <div className="wm-pkg-field-group">
                  <label>Status</label>
                  <select
                    value={formData.status || 'Active'}
                    onChange={(e) => handleChange('status', e.target.value)}
                  >
                    <option value="Active">Active (Published)</option>
                    <option value="Draft">Draft (Hidden)</option>
                  </select>
                </div>

                <div className="wm-pkg-field-group">
                  <label>Order Priority</label>
                  <input
                    type="number"
                    value={formData.order || 1}
                    onChange={(e) => handleChange('order', parseInt(e.target.value) || 1)}
                  />
                </div>
              </div>
            </div>

            {/* CARD 2: Hero & Headline Content */}
            <div className="wm-pkg-editor-card">
              <div className="wm-pkg-editor-card-header">
                <h3><FaLayerGroup /> 2. Hero Headlines & Marketing Copy</h3>
              </div>

              <div className="wm-pkg-field-group">
                <label>Top Accent Tagline / Badge</label>
                <input
                  type="text"
                  value={formData.tagline || ''}
                  onChange={(e) => handleChange('tagline', e.target.value)}
                  placeholder="e.g. ALL-IN-ONE ORGANIC SEARCH ENGINE MARKETING INDIA · EST. 2018"
                />
              </div>

              <div className="wm-pkg-field-group">
                <label>Hero Title Highlight Headline</label>
                <input
                  type="text"
                  value={formData.heroTitleHighlight || ''}
                  onChange={(e) => handleChange('heroTitleHighlight', e.target.value)}
                  placeholder="e.g. Complete SEO Packages in India"
                />
              </div>

              <div className="wm-pkg-field-group">
                <label>Lead Hero Description</label>
                <textarea
                  rows={3}
                  value={formData.leadDesc || ''}
                  onChange={(e) => handleChange('leadDesc', e.target.value)}
                  placeholder="Brief compelling intro rendered directly under hero title..."
                />
              </div>

              <div className="wm-pkg-field-group">
                <label>Detailed Body / Overview Description</label>
                <textarea
                  rows={3}
                  value={formData.bodyDesc || ''}
                  onChange={(e) => handleChange('bodyDesc', e.target.value)}
                  placeholder="Detailed description outlining agency deliverables, methodologies, and advantages..."
                />
              </div>
            </div>

            {/* CARD 3: Custom Image Upload */}
            <div className="wm-pkg-editor-card">
              <div className="wm-pkg-editor-card-header">
                <h3><FaImage /> 3. Featured / Banner Image Upload</h3>
              </div>

              <div className="wm-pkg-field-group">
                <label>Image URL (Direct link or upload file below)</label>
                <input
                  type="text"
                  value={formData.image || ''}
                  onChange={(e) => handleChange('image', e.target.value)}
                  placeholder="https://... or /uploads/packages/..."
                />
              </div>

              <div
                className="wm-pkg-upload-zone"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/jpeg,image/png,image/webp,image/svg+xml"
                  onChange={handleImageFileSelect}
                />
                <FaUpload className="wm-pkg-upload-icon" />
                <div className="wm-pkg-upload-text">
                  {uploadingImage ? 'Uploading image to server...' : 'Click to Upload Custom Package Image'}
                </div>
                <div className="wm-pkg-upload-subtext">
                  Supports JPG, PNG, WebP, SVG (Max 25MB). Auto-saved to server uploads folder.
                </div>
              </div>

              {formData.image && (
                <div className="wm-pkg-preview-img-wrap">
                  <img src={formData.image} alt={formData.name} className="wm-pkg-preview-img" />
                  <button
                    type="button"
                    className="wm-pkg-remove-img-btn"
                    onClick={() => handleChange('image', '')}
                  >
                    <FaTimes /> Remove Image
                  </button>
                </div>
              )}
            </div>

            {/* CARD 4: 4 Performance Metric Stats */}
            <div className="wm-pkg-editor-card">
              <div className="wm-pkg-editor-card-header">
                <h3><FaStar /> 4. Four Performance Metric Stats</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '-6px', marginBottom: '16px' }}>
                Key statistics highlighted in the package hero section (e.g. retention rate, ROI, client count).
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[0, 1, 2, 3].map((idx) => {
                  const stat = (formData.stats && formData.stats[idx]) || { num: '', label: '' };
                  return (
                    <div key={idx} style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontWeight: '700', fontSize: '12px', color: '#0b4f8a', marginBottom: '8px' }}>
                        Stat #{idx + 1}
                      </div>
                      <div className="wm-pkg-field-group" style={{ marginBottom: '8px' }}>
                        <label style={{ fontSize: '11px' }}>Number / Stat Value</label>
                        <input
                          type="text"
                          value={stat.num || ''}
                          onChange={(e) => handleStatChange(idx, 'num', e.target.value)}
                          placeholder="e.g. 98% or 3.5x"
                        />
                      </div>
                      <div className="wm-pkg-field-group" style={{ marginBottom: 0 }}>
                        <label style={{ fontSize: '11px' }}>Stat Label</label>
                        <input
                          type="text"
                          value={stat.label || ''}
                          onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                          placeholder="e.g. Client Retention"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CARD 5: Pricing Tiers & Deliverables */}
            <div className="wm-pkg-editor-card">
              <div className="wm-pkg-editor-card-header">
                <h3><FaListUl /> 5. Pricing Tiers & Plan Deliverables ({(formData.plans || []).length})</h3>
                <button
                  type="button"
                  onClick={handleAddPlan}
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#0b4f8a',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <FaPlus /> Add Plan Tier
                </button>
              </div>

              {(formData.plans || []).map((plan, pIdx) => (
                <div key={pIdx} className="wm-pkg-plan-card-item">
                  <div className="wm-pkg-plan-hdr">
                    <strong>Plan Tier #{pIdx + 1}: {plan.name || 'Tier'}</strong>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <label style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#0b4f8a', fontWeight: '600' }}>
                        <input
                          type="checkbox"
                          checked={plan.popular || false}
                          onChange={(e) => handlePlanChange(pIdx, 'popular', e.target.checked)}
                        />
                        Popular Badge
                      </label>
                      <button
                        type="button"
                        onClick={() => handleRemovePlan(pIdx)}
                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '14px', padding: '4px' }}
                        title="Delete this plan tier"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  <div className="wm-pkg-fields-row">
                    <div className="wm-pkg-field-group">
                      <label>Plan Name *</label>
                      <input
                        type="text"
                        value={plan.name || ''}
                        onChange={(e) => handlePlanChange(pIdx, 'name', e.target.value)}
                        placeholder="e.g. SEO Essential"
                      />
                    </div>
                    <div className="wm-pkg-field-group">
                      <label>Subtitle / Audience Badge</label>
                      <input
                        type="text"
                        value={plan.badge || ''}
                        onChange={(e) => handlePlanChange(pIdx, 'badge', e.target.value)}
                        placeholder="e.g. Small Business / Startups"
                      />
                    </div>
                  </div>

                  <div className="wm-pkg-fields-row">
                    <div className="wm-pkg-field-group">
                      <label>INR Price (₹)</label>
                      <input
                        type="text"
                        value={plan.inrPrice || ''}
                        onChange={(e) => handlePlanChange(pIdx, 'inrPrice', e.target.value)}
                        placeholder="e.g. 12,000"
                      />
                    </div>
                    <div className="wm-pkg-field-group">
                      <label>USD Price ($)</label>
                      <input
                        type="text"
                        value={plan.usdPrice || ''}
                        onChange={(e) => handlePlanChange(pIdx, 'usdPrice', e.target.value)}
                        placeholder="e.g. 199"
                      />
                    </div>
                  </div>

                  <div className="wm-pkg-fields-row">
                    <div className="wm-pkg-field-group">
                      <label>Billing Period</label>
                      <input
                        type="text"
                        value={plan.period || '/ month'}
                        onChange={(e) => handlePlanChange(pIdx, 'period', e.target.value)}
                        placeholder="/ month or One-time"
                      />
                    </div>
                    <div className="wm-pkg-field-group">
                      <label>Short Teaser Description</label>
                      <input
                        type="text"
                        value={plan.desc || ''}
                        onChange={(e) => handlePlanChange(pIdx, 'desc', e.target.value)}
                        placeholder="Brief summary of target outcomes..."
                      />
                    </div>
                  </div>

                  {/* Feature Bullets Checklist */}
                  <div style={{ marginTop: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155' }}>
                        Feature Bullet Checklist ({(plan.features || []).length})
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAddFeature(pIdx)}
                        style={{ background: '#e0f2fe', border: 'none', color: '#0369a1', borderRadius: '4px', padding: '4px 8px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}
                      >
                        + Add Bullet
                      </button>
                    </div>

                    {(plan.features || []).map((feat, fIdx) => (
                      <div key={fIdx} className="wm-pkg-bullet-tag">
                        <input
                          type="text"
                          value={feat}
                          onChange={(e) => handleFeatureChange(pIdx, fIdx, e.target.value)}
                          placeholder="e.g. Up to 15 Target Keywords"
                        />
                        <button
                          type="button"
                          className="wm-pkg-bullet-del"
                          onClick={() => handleRemoveFeature(pIdx, fIdx)}
                          title="Remove feature bullet"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CARD 6: Frequently Asked Questions (FAQs) */}
            <div className="wm-pkg-editor-card">
              <div className="wm-pkg-editor-card-header">
                <h3><FaQuestionCircle /> 6. Frequently Asked Questions ({(formData.faqs || []).length})</h3>
                <button
                  type="button"
                  onClick={handleAddFaq}
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#0b4f8a',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <FaPlus /> Add FAQ
                </button>
              </div>

              {(formData.faqs || []).map((faq, fIdx) => (
                <div key={fIdx} style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0b4f8a' }}>Question #{fIdx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFaq(fIdx)}
                      style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '13px' }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <input
                    type="text"
                    style={{ width: '100%', padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '8px', fontSize: '13px' }}
                    value={faq.q || ''}
                    onChange={(e) => handleFaqChange(fIdx, 'q', e.target.value)}
                    placeholder="Enter customer question..."
                  />
                  <textarea
                    rows={2}
                    style={{ width: '100%', padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', fontFamily: 'inherit' }}
                    value={faq.a || ''}
                    onChange={(e) => handleFaqChange(fIdx, 'a', e.target.value)}
                    placeholder="Enter detailed transparent answer..."
                  />
                </div>
              ))}
            </div>

            {/* STICKY SUBMIT & ACTION BAR */}
            <div className="wm-pkg-submit-bar">
              <button
                type="submit"
                className="wm-pkg-btn-save"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <FaSpinner className="wm-spinner-icon" /> Saving Changes...
                  </>
                ) : (
                  <>
                    <FaSave /> Save Package Updates
                  </>
                )}
              </button>

              <button
                type="button"
                className="wm-pkg-btn-delete"
                onClick={handleDelete}
              >
                <FaTrash /> Delete Package
              </button>

              <a
                href={`/${formData.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 'auto',
                  fontSize: '13.5px',
                  fontWeight: '600',
                  color: '#00a8cc',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <FaExternalLinkAlt /> Live Page Preview
              </a>
            </div>
          </form>

          {/* RIGHT COLUMN: LIVE VISUAL PREVIEW CARD */}
          <div className="wm-pkg-preview-col">
            <div className="wm-pkg-preview-card">
              <span className="wm-pkg-preview-badge">{formData.category || 'Package Category'}</span>

              <h2 className="wm-pkg-preview-title">
                {formData.heroTitleHighlight || formData.name || 'Package Headline'}
              </h2>

              <p style={{ fontSize: '11px', color: '#00d2ff', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: '700', marginBottom: '8px' }}>
                {formData.tagline || 'AGENCY SERVICE GUARANTEE'}
              </p>

              <p className="wm-pkg-preview-lead">
                {formData.leadDesc || 'Lead description outlining target outcomes and ROI for businesses.'}
              </p>

              {/* Banner Image Preview */}
              {formData.image && (
                <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '16px', border: '1px solid rgba(0, 210, 255, 0.25)' }}>
                  <img
                    src={formData.image}
                    alt={formData.name}
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              )}

              {/* 4 Stats Grid */}
              <div className="wm-pkg-preview-stats">
                {((formData.stats && formData.stats.length > 0) ? formData.stats : defaultSeedPackage.stats).slice(0, 4).map((st, sIdx) => (
                  <div key={sIdx} className="wm-pkg-preview-stat-box">
                    <p className="wm-pkg-preview-stat-num">{st.num || '100%'}</p>
                    <p className="wm-pkg-preview-stat-lbl">{st.label || 'Metric'}</p>
                  </div>
                ))}
              </div>

              {/* Plans Overview */}
              <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#00d2ff' }}>
                    Pricing Plans ({(formData.plans || []).length})
                  </span>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Direct INR / USD</span>
                </div>

                {(formData.plans || []).slice(0, 3).map((pl, pIdx) => (
                  <div key={pIdx} className="wm-pkg-preview-plan-teaser">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '13.5px', color: '#ffffff' }}>
                        {pl.name || `Tier ${pIdx + 1}`}
                        {pl.popular && (
                          <span style={{ marginLeft: '6px', fontSize: '9px', background: '#00d2ff', color: '#0d1b2a', padding: '1px 5px', borderRadius: '4px', fontWeight: '800' }}>
                            POPULAR
                          </span>
                        )}
                      </strong>
                      <span style={{ fontSize: '13px', fontWeight: '800', color: '#38bdf8' }}>
                        ₹{pl.inrPrice || '0'} <span style={{ fontSize: '10px', color: '#94a3b8' }}>(${pl.usdPrice || '0'})</span>
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                      {(pl.features || []).length} features included
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQs Teaser */}
              <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#cbd5e1' }}>
                  {(formData.faqs || []).length} Frequently Asked Questions Configured
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CREATE NEW PACKAGE MODAL */}
      {showAddModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setShowAddModal(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              padding: '28px',
              maxWidth: '520px',
              width: '100%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ margin: 0, color: '#0b4f8a', fontSize: '18px', fontWeight: '800' }}>
                <FaPlus /> Create New Package Page
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                style={{ background: 'transparent', border: 'none', fontSize: '18px', color: '#64748b', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleCreateNewPackage}>
              <div className="wm-pkg-field-group">
                <label>Package Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. YouTube Marketing Packages"
                  value={newPkgData.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    const autoSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    setNewPkgData(prev => ({
                      ...prev,
                      name,
                      slug: prev.slug ? prev.slug : autoSlug
                    }));
                  }}
                />
              </div>

              <div className="wm-pkg-field-group">
                <label>Direct URL Slug *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. youtube-marketing-packages"
                  value={newPkgData.slug}
                  onChange={(e) => setNewPkgData({ ...newPkgData, slug: e.target.value })}
                />
                <small style={{ color: '#64748b', fontSize: '11px', marginTop: '2px' }}>
                  Will be accessible directly at: <code>https://webmok.in/{newPkgData.slug || 'slug'}</code>
                </small>
              </div>

              <div className="wm-pkg-fields-row">
                <div className="wm-pkg-field-group">
                  <label>Short Navigation Label</label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube"
                    value={newPkgData.shortName}
                    onChange={(e) => setNewPkgData({ ...newPkgData, shortName: e.target.value })}
                  />
                </div>

                <div className="wm-pkg-field-group">
                  <label>Category</label>
                  <select
                    value={newPkgData.category}
                    onChange={(e) => setNewPkgData({ ...newPkgData, category: e.target.value })}
                  >
                    <option value="SEO">SEO Packages</option>
                    <option value="Social Media">Social Media / SMM</option>
                    <option value="PPC & Ads">PPC & Google Ads</option>
                    <option value="Web & Maintenance">Web Development & Maintenance</option>
                    <option value="Branding & Design">Branding & Logo Design</option>
                    <option value="ORM">Online Reputation (ORM)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={{
                    padding: '10px 18px',
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    color: '#475569',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="wm-pkg-btn-save"
                  style={{ padding: '10px 22px' }}
                >
                  <FaPlus /> Create Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPackages;
