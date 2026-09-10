import React, { useState, useEffect } from 'react';
import {
  FaClipboardList,
  FaFileAlt,
  FaFilePdf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTrash,
  FaEye,
  FaCheckCircle,
  FaTimes,
  FaSearch,
  FaDownload,
  FaWhatsapp,
  FaSpinner
} from 'react-icons/fa';
import './AdminJobInquiries.css';

const API_BASE = 'http://localhost:5005/api';

const AdminJobInquiries = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/job-applications`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setApplications(json.data);
        }
      }
    } catch (err) {
      console.warn('Error fetching job applications:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_BASE}/job-applications/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setApplications(prev => prev.map(a => ((a._id || a.id) === id ? { ...a, status: newStatus } : a)));
        if (selectedApp && (selectedApp._id || selectedApp.id) === id) {
          setSelectedApp(prev => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.warn('Error updating status:', err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this candidate application?')) return;
    try {
      const res = await fetch(`${API_BASE}/job-applications/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setApplications(prev => prev.filter(a => (a._id || a.id) !== id));
        if (selectedApp && (selectedApp._id || selectedApp.id) === id) {
          setSelectedApp(null);
        }
        setFeedback({ type: 'success', message: 'Application deleted successfully!' });
      }
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const getMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `http://localhost:5005${url.startsWith('/') ? '' : '/'}${url}`;
  };

  const filteredApps = applications.filter(app => {
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone.includes(searchTerm) ||
      (app.jobTitle && app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (app.city && app.city.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="wm-ajinq-root">
      {/* Header Banner */}
      <div className="wm-ajinq-header">
        <div>
          <h2><FaClipboardList /> Candidate Job Inquiries & Applications</h2>
          <p>Review candidate profiles, contact info, cover notes, and download uploaded resumes / CVs.</p>
        </div>
        <div>
          <button type="button" className="wm-out-btn-reset-all" onClick={fetchApplications}>
            Refresh Applications
          </button>
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div className={`wm-out-feedback-banner ${feedback.type === 'success' ? 'wm-feed-success' : 'wm-feed-error'}`}>
          {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* KPI Stats */}
      <div className="wm-ajinq-kpis">
        <div className="wm-ajinq-kpi-card">
          <div>
            <div style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b' }}>Total Applicants</div>
            <div className="wm-ajinq-kpi-val">{applications.length}</div>
          </div>
          <FaClipboardList style={{ fontSize: '26px', color: '#0077b6' }} />
        </div>
        <div className="wm-ajinq-kpi-card">
          <div>
            <div style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b' }}>Pending Review</div>
            <div className="wm-ajinq-kpi-val" style={{ color: '#d97706' }}>
              {applications.filter(a => a.status === 'Pending').length}
            </div>
          </div>
          <FaClock style={{ fontSize: '26px', color: '#d97706' }} />
        </div>
        <div className="wm-ajinq-kpi-card">
          <div>
            <div style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b' }}>Shortlisted</div>
            <div className="wm-ajinq-kpi-val" style={{ color: '#16a34a' }}>
              {applications.filter(a => a.status === 'Shortlisted').length}
            </div>
          </div>
          <FaCheckCircle style={{ fontSize: '26px', color: '#16a34a' }} />
        </div>
        <div className="wm-ajinq-kpi-card">
          <div>
            <div style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b' }}>With CV Attached</div>
            <div className="wm-ajinq-kpi-val" style={{ color: '#2563eb' }}>
              {applications.filter(a => a.cvUrl).length}
            </div>
          </div>
          <FaFilePdf style={{ fontSize: '26px', color: '#2563eb' }} />
        </div>
      </div>

      {/* Applications Table Card */}
      <div className="wm-ajinq-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
          {/* Status Filter Buttons */}
          <div className="wm-ajinq-filters">
            <button
              className={`wm-ajinq-fbtn ${filterStatus === 'all' ? 'active' : ''}`}
              onClick={() => setFilterStatus('all')}
            >
              All ({applications.length})
            </button>
            <button
              className={`wm-ajinq-fbtn ${filterStatus === 'Pending' ? 'active' : ''}`}
              onClick={() => setFilterStatus('Pending')}
            >
              Pending ({applications.filter(a => a.status === 'Pending').length})
            </button>
            <button
              className={`wm-ajinq-fbtn ${filterStatus === 'Reviewed' ? 'active' : ''}`}
              onClick={() => setFilterStatus('Reviewed')}
            >
              Reviewed ({applications.filter(a => a.status === 'Reviewed').length})
            </button>
            <button
              className={`wm-ajinq-fbtn ${filterStatus === 'Shortlisted' ? 'active' : ''}`}
              onClick={() => setFilterStatus('Shortlisted')}
            >
              Shortlisted ({applications.filter(a => a.status === 'Shortlisted').length})
            </button>
            <button
              className={`wm-ajinq-fbtn ${filterStatus === 'Rejected' ? 'active' : ''}`}
              onClick={() => setFilterStatus('Rejected')}
            >
              Rejected ({applications.filter(a => a.status === 'Rejected').length})
            </button>
          </div>

          {/* Search Box */}
          <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '6px 12px', gap: '8px' }}>
            <FaSearch style={{ color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search by name, phone, job..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13.5px' }}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            <FaSpinner className="wm-spin" style={{ fontSize: '24px', marginBottom: '8px' }} />
            <div>Loading candidate applications...</div>
          </div>
        ) : filteredApps.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 16px', background: '#f8fafc', borderRadius: '10px' }}>
            <FaClipboardList style={{ fontSize: '36px', color: '#94a3b8', marginBottom: '12px' }} />
            <div style={{ fontWeight: '700', color: '#334155', fontSize: '16px' }}>No Applications Found</div>
            <p style={{ color: '#64748b', fontSize: '13.5px', marginTop: '4px' }}>
              Applications submitted from the Career "Apply Now" modal will appear here.
            </p>
          </div>
        ) : (
          <div className="wm-table-responsive">
            <table className="wm-admin-table">
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th>Contact Info</th>
                  <th>Location</th>
                  <th>Applied Position</th>
                  <th>CV / Resume</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map((app) => (
                  <tr key={app._id || app.id}>
                    <td>
                      <strong style={{ fontSize: '14px', color: '#0d2f57' }}>{app.name}</strong>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                        {new Date(app.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <a href={`tel:${app.phone}`} style={{ color: '#0077b6', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>
                          <FaPhoneAlt style={{ fontSize: '11px', marginRight: '4px' }} /> {app.phone}
                        </a>
                        <a href={`mailto:${app.email}`} style={{ color: '#64748b', textDecoration: 'none', fontSize: '12.5px' }}>
                          <FaEnvelope style={{ fontSize: '11px', marginRight: '4px' }} /> {app.email}
                        </a>
                      </div>
                    </td>
                    <td>
                      <span style={{ color: '#334155', fontSize: '13px' }}>
                        {app.city ? `${app.city}, ${app.state || ''}` : (app.state || 'India')}
                      </span>
                    </td>
                    <td>
                      <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '700' }}>
                        {app.jobTitle || 'General Application'}
                      </span>
                    </td>
                    <td>
                      {app.cvUrl ? (
                        <a
                          href={getMediaUrl(app.cvUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wm-ajinq-cv-btn"
                          title="Download / View CV"
                        >
                          <FaFilePdf /> View CV
                        </a>
                      ) : (
                        <span className="wm-ajinq-no-cv">No CV Attached</span>
                      )}
                    </td>
                    <td>
                      <select
                        value={app.status || 'Pending'}
                        onChange={(e) => handleStatusChange(app._id || app.id, e.target.value)}
                        className={`wm-ajinq-status-select ${app.status || 'Pending'}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                        <button
                          type="button"
                          onClick={() => setSelectedApp(app)}
                          style={{
                            padding: '6px 10px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            background: '#ffffff',
                            color: '#0077b6',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}
                          title="View Full Application"
                        >
                          <FaEye /> View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(app._id || app.id)}
                          style={{
                            padding: '6px 8px',
                            borderRadius: '6px',
                            border: 'none',
                            background: '#fee2e2',
                            color: '#dc2626',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                          title="Delete Application"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Candidate Full Application Modal */}
      {selectedApp && (
        <div className="wm-inq-modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="wm-inq-modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="wm-inq-modal-header">
              <div>
                <span className="wm-inq-modal-tag">{selectedApp.jobTitle || 'Job Application'}</span>
                <h3>{selectedApp.name}</h3>
              </div>
              <button type="button" className="wm-inq-modal-close" onClick={() => setSelectedApp(null)}>
                <FaTimes />
              </button>
            </div>

            <div className="wm-inq-modal-body">
              <div className="wm-inq-modal-grid">
                <div>
                  <span className="wm-inq-data-label">Phone Number</span>
                  <a href={`tel:${selectedApp.phone}`} className="wm-inq-data-link">
                    <FaPhoneAlt /> {selectedApp.phone}
                  </a>
                </div>

                <div>
                  <span className="wm-inq-data-label">Email Address</span>
                  <a href={`mailto:${selectedApp.email}`} className="wm-inq-data-link">
                    <FaEnvelope /> {selectedApp.email}
                  </a>
                </div>

                <div>
                  <span className="wm-inq-data-label">Location (City, State)</span>
                  <strong>{selectedApp.city ? `${selectedApp.city}, ${selectedApp.state || ''}` : (selectedApp.state || 'N/A')}</strong>
                </div>

                <div>
                  <span className="wm-inq-data-label">Applied Date</span>
                  <span>{new Date(selectedApp.createdAt).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* CV / Resume Download Box */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', margin: '16px 0' }}>
                <span className="wm-inq-data-label" style={{ marginBottom: '8px', display: 'block' }}>Candidate CV / Resume</span>
                {selectedApp.cvUrl ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaFilePdf style={{ fontSize: '28px', color: '#dc2626' }} />
                      <div>
                        <strong style={{ fontSize: '13.5px', color: '#0d2f57', display: 'block' }}>
                          {selectedApp.cvOriginalName || 'Candidate-Resume'}
                        </strong>
                        <small style={{ color: '#64748b' }}>Click to view or download document</small>
                      </div>
                    </div>
                    <a
                      href={getMediaUrl(selectedApp.cvUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wm-ajinq-cv-btn"
                      style={{ padding: '8px 16px', fontSize: '13px' }}
                    >
                      <FaDownload /> Download CV
                    </a>
                  </div>
                ) : (
                  <span style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '13px' }}>
                    No CV attached by applicant (CV is optional).
                  </span>
                )}
              </div>

              {/* Cover Note / Message */}
              <div>
                <span className="wm-inq-data-label">Applicant Message / Cover Note</span>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px', marginTop: '6px', fontSize: '14px', lineHeight: '1.6', color: '#334155' }}>
                  {selectedApp.message || 'No additional message provided.'}
                </div>
              </div>
            </div>

            <div className="wm-inq-modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={`tel:${selectedApp.phone}`}
                  className="wm-out-btn-save"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}
                >
                  <FaPhoneAlt /> Call
                </a>
                <a
                  href={`https://wa.me/91${selectedApp.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedApp.name}, regarding your job application for ${selectedApp.jobTitle} at Web Mok...`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-out-btn-save"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#25D366', fontSize: '13px' }}
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
              <button type="button" className="wm-out-btn-reset-all" onClick={() => setSelectedApp(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJobInquiries;
