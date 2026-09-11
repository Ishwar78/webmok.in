import React, { useState, useEffect } from 'react';
import {
  FaTags,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaTrash,
  FaSyncAlt,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaFilter,
  FaBuilding,
  FaGlobe,
  FaCommentDots,
  FaLayerGroup,
  FaEdit,
  FaSave,
  FaTimes,
  FaMoneyBillWave,
  FaShoppingCart,
  FaSearchDollar,
  FaMobileAlt,
  FaAd,
  FaLaptopCode,
  FaShareAlt,
  FaPalette,
  FaVideo,
  FaBriefcase
} from 'react-icons/fa';
import './AdminServiceInquiries.css';

const API_BASE = 'http://localhost:5005/api';

const categoryButtons = [
  { id: 'all', label: 'All Services', icon: FaLayerGroup, color: '#00d2ff' },
  { id: 'ecommerce', label: 'E-Commerce', icon: FaShoppingCart, color: '#f59e0b', matches: ['e-commerce', 'shopify', 'woocommerce', 'marketplace', 'store'] },
  { id: 'seo', label: 'SEO Services', icon: FaSearchDollar, color: '#10b981', matches: ['seo', 'search engine'] },
  { id: 'mobile-apps', label: 'Mobile Apps', icon: FaMobileAlt, color: '#38bdf8', matches: ['app', 'android', 'ios', 'mobile'] },
  { id: 'ppc-ads', label: 'PPC & Ads', icon: FaAd, color: '#ec4899', matches: ['ppc', 'google ads', 'meta ads', 'facebook ads', 'lead generation'] },
  { id: 'web-dev', label: 'Web Development', icon: FaLaptopCode, color: '#6366f1', matches: ['web', 'website', 'wordpress', 'landing page', 'enterprise web'] },
  { id: 'social-media', label: 'Social Media', icon: FaShareAlt, color: '#8b5cf6', matches: ['social media', 'smo', 'smm', 'instagram', 'linkedin'] },
  { id: 'branding', label: 'Branding & Design', icon: FaPalette, color: '#f97316', matches: ['branding', 'logo', 'graphic design'] },
  { id: 'video', label: 'Video Production', icon: FaVideo, color: '#ef4444', matches: ['video', 'editing', 'promotional video'] },
  { id: 'consulting', label: 'Consulting & Data', icon: FaBriefcase, color: '#14b8a6', matches: ['consulting', 'data science', 'training', 'reputation', 'orm'] }
];

const defaultSeedInquiries = [
  {
    _id: 'sinq-1',
    id: 'sinq-1',
    name: 'Vikram Singhania',
    email: 'vikram@d2cboutique.com',
    phone: '+91 98112 34567',
    company: 'Silk & Loom Organics',
    website: 'https://silkandloom.in',
    serviceName: 'E-Commerce Website Development',
    serviceCategory: 'ecommerce',
    planName: 'WooCommerce Custom',
    budget: '₹50,000 - ₹1,50,000 / mo',
    message: 'Need 1-click UPI checkout, automated WhatsApp abandon cart triggers, and 90+ PageSpeed score.',
    pageUrl: '/services/ecommerce-development',
    status: 'new',
    notes: 'Urgent requirement, ready to start this week.',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    _id: 'sinq-2',
    id: 'sinq-2',
    name: 'Ananya Deshmukh',
    email: 'ananya@growthfin.com',
    phone: '+91 97654 32109',
    company: 'GrowthFin Advisory',
    website: 'https://growthfin.com',
    serviceName: 'SEO Services',
    serviceCategory: 'seo',
    planName: 'Growth Plan',
    budget: '₹50,000 - ₹1,50,000 / mo',
    message: 'Targeting pan-India rank 1 for competitive corporate financial advisory keywords.',
    pageUrl: '/seo-services-company',
    status: 'proposal-sent',
    notes: 'Proposal sent with technical audit. Follow up on Monday.',
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString()
  },
  {
    _id: 'sinq-3',
    id: 'sinq-3',
    name: 'Karan Mehra',
    email: 'karan@quicklogistics.co',
    phone: '+91 98710 54321',
    company: 'QuickDrop Logistics',
    website: 'https://quickdrop.co',
    serviceName: 'Android App Development',
    serviceCategory: 'mobile-apps',
    planName: 'Commercial Scale App',
    budget: '₹1,50,000 - ₹3,00,000 / mo',
    message: 'Delivery rider application with live GPS tracking, route optimization, and digital signature.',
    pageUrl: '/services/android-app-development',
    status: 'in-discussion',
    notes: 'Technical scope call completed with solution architect.',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    _id: 'sinq-4',
    id: 'sinq-4',
    name: 'Pooja Verma',
    email: 'pooja@glowskincare.in',
    phone: '+91 99201 88765',
    company: 'Glow Botanica',
    website: 'https://glowbotanica.in',
    serviceName: 'Facebook & Meta Ads',
    serviceCategory: 'ppc-ads',
    planName: 'Growth Performance Suite',
    budget: '₹50,000 - ₹1,50,000 / mo',
    message: 'Looking to scale ROAS from 2.2x to 4.5x with UGC video ad funnels.',
    pageUrl: '/services/facebook-marketing',
    status: 'converted',
    notes: 'Signed 3-month retainer contract.',
    createdAt: new Date(Date.now() - 3600000 * 36).toISOString()
  },
  {
    _id: 'sinq-5',
    id: 'sinq-5',
    name: 'Arjun Nambiar',
    email: 'arjun@cloudmatrix.io',
    phone: '+91 88820 99412',
    company: 'CloudMatrix SaaS',
    website: 'https://cloudmatrix.io',
    serviceName: 'Enterprise Web Development',
    serviceCategory: 'web-dev',
    planName: 'Core Enterprise Portal',
    budget: '₹1,50,000 - ₹3,00,000 / mo',
    message: 'Client management dashboard built on React & Node.js with role-based access control.',
    pageUrl: '/services/enterprise-web-development',
    status: 'contacted',
    notes: 'Scheduled demo for Wednesday 3 PM.',
    createdAt: new Date(Date.now() - 3600000 * 50).toISOString()
  }
];

const AdminServiceInquiries = () => {
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('webmok_service_inquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return defaultSeedInquiries;
  });

  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceName, setSelectedServiceName] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [editingNotesId, setEditingNotesId] = useState(null);
  const [noteDraft, setNoteDraft] = useState('');

  const saveToLocal = (data) => {
    try {
      localStorage.setItem('webmok_service_inquiries', JSON.stringify(data));
    } catch (e) {
      console.warn('Error saving to localStorage:', e);
    }
  };

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/service-inquiries`);
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        // Merge with any unique local entries
        const localSaved = JSON.parse(localStorage.getItem('webmok_service_inquiries') || '[]');
        const apiIds = new Set(json.data.map(d => d._id || d.id));
        const extraLocal = localSaved.filter(item => !apiIds.has(item._id || item.id));
        const merged = [...json.data, ...extraLocal];
        setInquiries(merged);
        saveToLocal(merged);
      }
    } catch (err) {
      console.log('Using local service inquiries cache:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const showToast = (msg, type = 'success') => {
    setFeedback({ msg, type });
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    showToast(`Copied to clipboard: ${text}`);
  };

  const handleStatusChange = async (inqId, newStatus) => {
    const updated = inquiries.map(item => {
      if ((item._id || item.id) === inqId) {
        return { ...item, status: newStatus, updatedAt: new Date().toISOString() };
      }
      return item;
    });
    setInquiries(updated);
    saveToLocal(updated);

    try {
      await fetch(`${API_BASE}/service-inquiries/${inqId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      showToast(`Status updated to "${newStatus}"`);
    } catch (e) {
      showToast(`Status updated locally to "${newStatus}"`);
    }
  };

  const handleSaveNotes = async (inqId) => {
    const updated = inquiries.map(item => {
      if ((item._id || item.id) === inqId) {
        return { ...item, notes: noteDraft };
      }
      return item;
    });
    setInquiries(updated);
    saveToLocal(updated);
    setEditingNotesId(null);

    try {
      await fetch(`${API_BASE}/service-inquiries/${inqId}/notes`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: noteDraft })
      });
      showToast('Internal notes updated');
    } catch (e) {
      showToast('Notes saved locally');
    }
  };

  const handleDelete = async (inqId) => {
    if (!window.confirm('Are you sure you want to delete this pricing inquiry?')) return;

    const updated = inquiries.filter(item => (item._id || item.id) !== inqId);
    setInquiries(updated);
    saveToLocal(updated);

    try {
      await fetch(`${API_BASE}/service-inquiries/${inqId}`, {
        method: 'DELETE'
      });
      showToast('Inquiry deleted successfully');
    } catch (e) {
      showToast('Inquiry deleted locally');
    }
  };

  const exportCSV = () => {
    const headers = [
      'ID',
      'Client Name',
      'Phone',
      'Email',
      'Company',
      'Website',
      'Service Name',
      'Plan Tier',
      'Estimated Budget',
      'Status',
      'Client Message',
      'Internal Notes',
      'Date'
    ];

    const rows = filteredInquiries.map(item => [
      item._id || item.id || '',
      `"${(item.name || '').replace(/"/g, '""')}"`,
      `"${item.phone || ''}"`,
      `"${item.email || ''}"`,
      `"${(item.company || '').replace(/"/g, '""')}"`,
      `"${item.website || ''}"`,
      `"${(item.serviceName || '').replace(/"/g, '""')}"`,
      `"${(item.planName || '').replace(/"/g, '""')}"`,
      `"${(item.budget || '').replace(/"/g, '""')}"`,
      item.status || 'new',
      `"${(item.message || '').replace(/"/g, '""')}"`,
      `"${(item.notes || '').replace(/"/g, '""')}"`,
      new Date(item.createdAt).toLocaleString()
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Webmok_Service_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported CSV successfully');
  };

  // Extract distinct service names for fine-grained dropdown filter
  const distinctServices = Array.from(new Set(inquiries.map(i => i.serviceName).filter(Boolean))).sort();

  // Filter calculation
  const filteredInquiries = inquiries.filter(item => {
    // 1. Category filter
    if (selectedCategory !== 'all') {
      const activeBtn = categoryButtons.find(b => b.id === selectedCategory);
      if (activeBtn && activeBtn.matches) {
        const target = `${item.serviceName || ''} ${item.serviceCategory || ''} ${item.pageUrl || ''}`.toLowerCase();
        const matchesCat = activeBtn.matches.some(term => target.includes(term.toLowerCase()));
        if (!matchesCat) return false;
      }
    }

    // 2. Specific Service Name filter
    if (selectedServiceName !== 'all') {
      if ((item.serviceName || '').toLowerCase() !== selectedServiceName.toLowerCase()) {
        return false;
      }
    }

    // 3. Status filter
    if (statusFilter !== 'all' && item.status !== statusFilter) {
      return false;
    }

    // 4. Search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      const searchable = [
        item.name,
        item.email,
        item.phone,
        item.company,
        item.serviceName,
        item.planName,
        item.message,
        item.notes
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      if (!searchable.includes(term)) return false;
    }

    return true;
  });

  // KPI Metrics
  const totalCount = inquiries.length;
  const newCount = inquiries.filter(i => i.status === 'new').length;
  const proposalCount = inquiries.filter(i => i.status === 'proposal-sent' || i.status === 'in-discussion').length;
  const convertedCount = inquiries.filter(i => i.status === 'converted').length;

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Just now';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateStr;
    }
  };

  // Helper to count inquiries per category
  const getCategoryCount = (btn) => {
    if (btn.id === 'all') return inquiries.length;
    if (!btn.matches) return 0;
    return inquiries.filter(item => {
      const target = `${item.serviceName || ''} ${item.serviceCategory || ''} ${item.pageUrl || ''}`.toLowerCase();
      return btn.matches.some(term => target.includes(term.toLowerCase()));
    }).length;
  };

  return (
    <div className="wm-asi-container">
      {feedback && (
        <div className={`wm-asi-toast ${feedback.type}`}>
          <FaCheckCircle /> {feedback.msg}
        </div>
      )}

      {/* Header & Meta */}
      <div className="wm-asi-header">
        <div>
          <div className="wm-asi-badge">
            <FaTags /> Service Pricing Leads CRM
          </div>
          <h1 className="wm-asi-title">Service Inquiries & Package Leads</h1>
          <p className="wm-asi-sub">
            Inquiries received from pricing cards across all 29 service pages. Filter by specific service category with 1 click.
          </p>
        </div>
        <div className="wm-asi-actions">
          <button className="wm-asi-btn secondary" onClick={fetchInquiries} disabled={loading} title="Refresh Inquiries">
            <FaSyncAlt className={loading ? 'fa-spin' : ''} /> {loading ? 'Syncing...' : 'Refresh'}
          </button>
          <button className="wm-asi-btn primary" onClick={exportCSV} title="Export Filtered Inquiries as CSV">
            <FaDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="wm-asi-kpis">
        <div className="wm-asi-kpi-card">
          <div className="wm-asi-kpi-num">{totalCount}</div>
          <div className="wm-asi-kpi-lbl">Total Service Inquiries</div>
        </div>
        <div className="wm-asi-kpi-card new">
          <div className="wm-asi-kpi-num">{newCount}</div>
          <div className="wm-asi-kpi-lbl">New Leads (Pending Review)</div>
        </div>
        <div className="wm-asi-kpi-card discussion">
          <div className="wm-asi-kpi-num">{proposalCount}</div>
          <div className="wm-asi-kpi-lbl">In Discussion / Proposal Sent</div>
        </div>
        <div className="wm-asi-kpi-card converted">
          <div className="wm-asi-kpi-num">{convertedCount}</div>
          <div className="wm-asi-kpi-lbl">Successfully Converted</div>
        </div>
      </div>

      {/* Category Filter Buttons (User Requested: "isme ye admin side m alag alag button dena jaise e-commerce ki alag se dhek sake") */}
      <div className="wm-asi-category-section">
        <div className="wm-asi-section-title">
          <FaFilter /> Filter by Service Category:
        </div>
        <div className="wm-asi-btn-tabs">
          {categoryButtons.map(btn => {
            const Icon = btn.icon;
            const count = getCategoryCount(btn);
            const isActive = selectedCategory === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                className={`wm-asi-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  '--btn-color': btn.color
                }}
                onClick={() => {
                  setSelectedCategory(btn.id);
                  setSelectedServiceName('all');
                }}
              >
                <Icon className="wm-asi-tab-icon" />
                <span>{btn.label}</span>
                <span className="wm-asi-tab-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Fine Controls Bar */}
      <div className="wm-asi-controls">
        <div className="wm-asi-search-box">
          <FaSearch className="wm-asi-search-icon" />
          <input
            type="text"
            placeholder="Search by client name, email, phone, company, plan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="wm-asi-clear-search" onClick={() => setSearchTerm('')}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="wm-asi-filter-selects">
          <div className="wm-asi-select-wrap">
            <label>Specific Service:</label>
            <select
              value={selectedServiceName}
              onChange={(e) => setSelectedServiceName(e.target.value)}
            >
              <option value="all">All Specific Services</option>
              {distinctServices.map((name, idx) => (
                <option key={idx} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div className="wm-asi-select-wrap">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in-discussion">In Discussion</option>
              <option value="proposal-sent">Proposal Sent</option>
              <option value="converted">Converted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inquiry Cards / Table List */}
      <div className="wm-asi-list">
        {filteredInquiries.length === 0 ? (
          <div className="wm-asi-empty">
            <FaTags className="wm-asi-empty-icon" />
            <h3>No Service Inquiries Found</h3>
            <p>No client requests match your selected category, service, or search criteria.</p>
            <button
              className="wm-asi-btn secondary"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedServiceName('all');
                setStatusFilter('all');
                setSearchTerm('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredInquiries.map((inq) => {
            const inqId = inq._id || inq.id;
            const isEditingNote = editingNotesId === inqId;

            return (
              <div key={inqId} className={`wm-asi-card status-${inq.status || 'new'}`}>
                <div className="wm-asi-card-top">
                  <div className="wm-asi-client-info">
                    <div className="wm-asi-avatar">
                      {(inq.name || 'C').charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="wm-asi-client-name">{inq.name || 'Unnamed Client'}</h3>
                      <div className="wm-asi-client-sub">
                        {inq.company && (
                          <span className="wm-asi-meta-item">
                            <FaBuilding /> {inq.company}
                          </span>
                        )}
                        {inq.website && (
                          <a
                            href={inq.website.startsWith('http') ? inq.website : `https://${inq.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wm-asi-meta-link"
                          >
                            <FaGlobe /> Website
                          </a>
                        )}
                        <span className="wm-asi-time">
                          <FaClock /> {formatDate(inq.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="wm-asi-top-badges">
                    <span className="wm-asi-service-badge">
                      <FaTags /> {inq.serviceName || 'Custom Service'}
                    </span>
                    {inq.planName && (
                      <span className="wm-asi-plan-badge">
                        Tier: {inq.planName}
                      </span>
                    )}
                    {inq.budget && (
                      <span className="wm-asi-budget-badge">
                        <FaMoneyBillWave /> {inq.budget}
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="wm-asi-contact-row">
                  <div className="wm-asi-contact-pill">
                    <FaPhoneAlt className="icon phone" />
                    <a href={`tel:${inq.phone}`}>{inq.phone}</a>
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={() => handleCopy(inq.phone, `${inqId}-p`)}
                      title="Copy phone"
                    >
                      {copiedId === `${inqId}-p` ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>

                  <div className="wm-asi-contact-pill">
                    <FaEnvelope className="icon mail" />
                    <a href={`mailto:${inq.email}`}>{inq.email}</a>
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={() => handleCopy(inq.email, `${inqId}-e`)}
                      title="Copy email"
                    >
                      {copiedId === `${inqId}-e` ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>

                  {inq.pageUrl && (
                    <div className="wm-asi-contact-pill page">
                      <FaExternalLinkAlt className="icon" />
                      <span>Origin: {inq.pageUrl}</span>
                    </div>
                  )}
                </div>

                {/* Client Requirement Message */}
                {inq.message && (
                  <div className="wm-asi-message-box">
                    <div className="lbl"><FaCommentDots /> Client Requirement:</div>
                    <p>{inq.message}</p>
                  </div>
                )}

                {/* Footer: Internal Notes & Status Selector & Actions */}
                <div className="wm-asi-card-bottom">
                  <div className="wm-asi-notes-block">
                    {isEditingNote ? (
                      <div className="wm-asi-notes-edit">
                        <input
                          type="text"
                          value={noteDraft}
                          onChange={(e) => setNoteDraft(e.target.value)}
                          placeholder="Add internal remark or follow-up note..."
                          autoFocus
                        />
                        <button className="wm-asi-btn-save" onClick={() => handleSaveNotes(inqId)}>
                          <FaSave /> Save
                        </button>
                        <button className="wm-asi-btn-cancel" onClick={() => setEditingNotesId(null)}>
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <div
                        className="wm-asi-notes-view"
                        onClick={() => {
                          setEditingNotesId(inqId);
                          setNoteDraft(inq.notes || '');
                        }}
                        title="Click to edit internal note"
                      >
                        <span className="lbl">Internal Note:</span>
                        <span className="val">{inq.notes || 'No notes added yet (click to edit)'}</span>
                        <FaEdit className="edit-icon" />
                      </div>
                    )}
                  </div>

                  <div className="wm-asi-card-actions">
                    <div className="wm-asi-status-select-wrap">
                      <label>Status:</label>
                      <select
                        value={inq.status || 'new'}
                        onChange={(e) => handleStatusChange(inqId, e.target.value)}
                        className={`status-select ${inq.status || 'new'}`}
                      >
                        <option value="new">🟢 New</option>
                        <option value="contacted">🔵 Contacted</option>
                        <option value="in-discussion">🟣 In Discussion</option>
                        <option value="proposal-sent">🟡 Proposal Sent</option>
                        <option value="converted">⭐ Converted</option>
                        <option value="closed">⚪ Closed</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="wm-asi-btn-delete"
                      onClick={() => handleDelete(inqId)}
                      title="Delete this inquiry"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AdminServiceInquiries;
