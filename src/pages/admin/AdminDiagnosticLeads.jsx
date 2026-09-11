import React, { useState, useEffect } from 'react';
import {
  FaMicrochip,
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
  FaInfoCircle
} from 'react-icons/fa';
import './AdminDiagnosticLeads.css';

const API_BASE = 'http://localhost:5005/api';

const defaultSeedLeads = [
  {
    _id: 'diag-1',
    id: 'diag-1',
    phoneOrEmail: '+91 98765 43210',
    serviceName: 'SEO Optimization Service',
    pageUrl: '/services/search-engine-optimization',
    status: 'new',
    notes: 'Requested Free SEO Health & Visibility Audit',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    _id: 'diag-2',
    id: 'diag-2',
    phoneOrEmail: 'growth.director@clientcorp.in',
    serviceName: 'Full-Stack Web Development',
    pageUrl: '/services/web-development',
    status: 'contacted',
    notes: 'Audit report sent via email, awaiting call back',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
  },
  {
    _id: 'diag-3',
    id: 'diag-3',
    phoneOrEmail: '+91 88820 19934',
    serviceName: 'Performance Marketing (PPC)',
    pageUrl: '/services/performance-marketing',
    status: 'converted',
    notes: 'Converted to monthly Google Ads retainer',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  }
];

const AdminDiagnosticLeads = () => {
  const [leads, setLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('webmok_diagnostic_leads');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return defaultSeedLeads;
  });

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const saveToLocal = (data) => {
    try {
      localStorage.setItem('webmok_diagnostic_leads', JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/diagnostic-leads`);
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        if (json.data.length > 0) {
          setLeads(json.data);
          saveToLocal(json.data);
        } else {
          // If server is empty, keep current or seed
          const saved = localStorage.getItem('webmok_diagnostic_leads');
          if (saved) {
            setLeads(JSON.parse(saved));
          }
        }
      }
    } catch (err) {
      console.warn('API fetch failed, utilizing cached local diagnostic leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      try {
        await fetch(`${API_BASE}/diagnostic-leads/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus })
        });
      } catch (e) {
        console.warn('API update error, updating locally:', e);
      }

      const updated = leads.map(l =>
        ((l._id || l.id) === id ? { ...l, status: newStatus } : l)
      );
      setLeads(updated);
      saveToLocal(updated);
      setFeedback({ type: 'success', message: `Lead marked as ${newStatus}` });
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this diagnostic lead?')) return;
    try {
      try {
        await fetch(`${API_BASE}/diagnostic-leads/${id}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('API delete error, deleting locally:', e);
      }

      const updated = leads.filter(l => (l._id || l.id) !== id);
      setLeads(updated);
      saveToLocal(updated);
      setFeedback({ type: 'success', message: 'Diagnostic lead deleted successfully' });
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const exportCSV = () => {
    if (leads.length === 0) {
      alert('No diagnostic leads to export');
      return;
    }
    const headers = ['Phone Or Email', 'Service Name', 'Status', 'Date Submitted', 'Page URL', 'Notes'];
    const rows = leads.map(l => [
      `"${l.phoneOrEmail || ''}"`,
      `"${l.serviceName || ''}"`,
      `"${l.status || 'new'}"`,
      `"${new Date(l.createdAt || Date.now()).toLocaleString()}"`,
      `"${l.pageUrl || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `webmok_diagnostic_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => {
    const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      (l.phoneOrEmail && l.phoneOrEmail.toLowerCase().includes(term)) ||
      (l.serviceName && l.serviceName.toLowerCase().includes(term)) ||
      (l.notes && l.notes.toLowerCase().includes(term));
    return matchesStatus && matchesSearch;
  });

  const countNew = leads.filter(l => l.status === 'new').length;
  const countContacted = leads.filter(l => l.status === 'contacted').length;
  const countConverted = leads.filter(l => l.status === 'converted').length;

  return (
    <div className="wm-adl-container">
      {/* Header */}
      <div className="wm-adl-header">
        <div className="wm-adl-header-left">
          <div className="wm-adl-badge">
            <FaMicrochip /> Service Diagnostic Engine Leads
          </div>
          <h2 className="wm-adl-title">Client Audit & Diagnostic Submissions</h2>
          <p className="wm-adl-subtitle">
            Direct client phone numbers & emails captured instantly from the Diagnostic Engine across all service pages.
          </p>
        </div>
        <div className="wm-adl-header-actions">
          <button type="button" className="wm-adl-btn-refresh" onClick={fetchLeads} title="Refresh data">
            <FaSyncAlt className={loading ? 'wm-spin' : ''} /> Refresh
          </button>
          <button type="button" className="wm-adl-btn-export" onClick={exportCSV}>
            <FaDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Feedback Toast */}
      {feedback && (
        <div className={`wm-adl-toast ${feedback.type === 'error' ? 'wm-toast-err' : 'wm-toast-ok'}`}>
          <FaInfoCircle /> {feedback.message}
        </div>
      )}

      {/* KPI Stats */}
      <div className="wm-adl-stats-grid">
        <div className="wm-adl-stat-card">
          <div className="wm-adl-stat-num">{leads.length}</div>
          <div className="wm-adl-stat-lbl">Total Audit Leads</div>
        </div>
        <div className="wm-adl-stat-card wm-stat-orange">
          <div className="wm-adl-stat-num">{countNew}</div>
          <div className="wm-adl-stat-lbl">New / Uncontacted</div>
        </div>
        <div className="wm-adl-stat-card wm-stat-blue">
          <div className="wm-adl-stat-num">{countContacted}</div>
          <div className="wm-adl-stat-lbl">Auditing / Contacted</div>
        </div>
        <div className="wm-adl-stat-card wm-stat-green">
          <div className="wm-adl-stat-num">{countConverted}</div>
          <div className="wm-adl-stat-lbl">Converted Clients</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="wm-adl-controls">
        <div className="wm-adl-search">
          <FaSearch className="wm-adl-search-icon" />
          <input
            type="text"
            placeholder="Search by phone number, email, or service name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="wm-adl-filters">
          <button
            type="button"
            className={`wm-adl-filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
            onClick={() => setStatusFilter('all')}
          >
            All ({leads.length})
          </button>
          <button
            type="button"
            className={`wm-adl-filter-btn ${statusFilter === 'new' ? 'active' : ''}`}
            onClick={() => setStatusFilter('new')}
          >
            New ({countNew})
          </button>
          <button
            type="button"
            className={`wm-adl-filter-btn ${statusFilter === 'contacted' ? 'active' : ''}`}
            onClick={() => setStatusFilter('contacted')}
          >
            Contacted ({countContacted})
          </button>
          <button
            type="button"
            className={`wm-adl-filter-btn ${statusFilter === 'converted' ? 'active' : ''}`}
            onClick={() => setStatusFilter('converted')}
          >
            Converted ({countConverted})
          </button>
          <button
            type="button"
            className={`wm-adl-filter-btn ${statusFilter === 'archived' ? 'active' : ''}`}
            onClick={() => setStatusFilter('archived')}
          >
            Archived
          </button>
        </div>
      </div>

      {/* Leads Table / List */}
      <div className="wm-adl-table-wrap">
        {filteredLeads.length === 0 ? (
          <div className="wm-adl-empty">
            <FaMicrochip className="wm-adl-empty-icon" />
            <h4>No Diagnostic Leads Found</h4>
            <p>Leads submitted via the "Get Free Analysis" Diagnostic Engine on any service page will appear here instantly.</p>
          </div>
        ) : (
          <table className="wm-adl-table">
            <thead>
              <tr>
                <th>Phone / Email</th>
                <th>Target Service</th>
                <th>Status</th>
                <th>Date & Time</th>
                <th>Quick Actions</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => {
                const id = lead._id || lead.id;
                const isEmail = lead.phoneOrEmail && lead.phoneOrEmail.includes('@');
                const isCopied = copiedId === id;

                return (
                  <tr key={id} className={`wm-adl-row status-${lead.status}`}>
                    {/* Contact Info */}
                    <td className="wm-adl-contact-cell">
                      <div className="wm-adl-contact-val">
                        {isEmail ? <FaEnvelope className="wm-contact-type-icon email" /> : <FaPhoneAlt className="wm-contact-type-icon phone" />}
                        <span className="wm-adl-contact-text">{lead.phoneOrEmail}</span>
                        <button
                          type="button"
                          className="wm-adl-btn-copy"
                          title="Copy to clipboard"
                          onClick={() => handleCopy(lead.phoneOrEmail, id)}
                        >
                          {isCopied ? <FaCheck className="wm-text-green" /> : <FaCopy />}
                        </button>
                      </div>
                      {lead.notes && <div className="wm-adl-lead-notes">{lead.notes}</div>}
                    </td>

                    {/* Service Name */}
                    <td>
                      <span className="wm-adl-service-badge">
                        {lead.serviceName || 'Diagnostic Audit'}
                      </span>
                      {lead.pageUrl && (
                        <div className="wm-adl-page-link">
                          <a href={lead.pageUrl} target="_blank" rel="noreferrer">
                            View Page <FaExternalLinkAlt size={10} />
                          </a>
                        </div>
                      )}
                    </td>

                    {/* Status Dropdown */}
                    <td>
                      <select
                        className={`wm-adl-status-select status-${lead.status || 'new'}`}
                        value={lead.status || 'new'}
                        onChange={(e) => handleStatusChange(id, e.target.value)}
                      >
                        <option value="new">🔴 New Lead</option>
                        <option value="contacted">🔵 Contacted</option>
                        <option value="converted">🟢 Converted</option>
                        <option value="archived">⚪ Archived</option>
                      </select>
                    </td>

                    {/* Submission Time */}
                    <td className="wm-adl-time-cell">
                      <div className="wm-adl-time-date">
                        {new Date(lead.createdAt || Date.now()).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="wm-adl-time-hour">
                        {new Date(lead.createdAt || Date.now()).toLocaleTimeString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </td>

                    {/* Quick Direct Actions */}
                    <td>
                      <div className="wm-adl-quick-actions">
                        {isEmail ? (
                          <a
                            href={`mailto:${lead.phoneOrEmail}?subject=Free Diagnostic Audit & Proposal - WebMok`}
                            className="wm-adl-action-btn email"
                            title="Send Email"
                          >
                            <FaEnvelope /> Email
                          </a>
                        ) : (
                          <a
                            href={`tel:${lead.phoneOrEmail.replace(/\s+/g, '')}`}
                            className="wm-adl-action-btn call"
                            title="Call Now"
                          >
                            <FaPhoneAlt /> Call
                          </a>
                        )}
                      </div>
                    </td>

                    {/* Delete */}
                    <td>
                      <button
                        type="button"
                        className="wm-adl-btn-del"
                        title="Delete record"
                        onClick={() => handleDelete(id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDiagnosticLeads;
