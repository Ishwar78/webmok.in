import React, { useState, useEffect } from 'react';
import {
  FaBriefcase,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimes,
  FaMapMarkerAlt,
  FaClock,
  FaSpinner,
  FaSave,
  FaUsers,
  FaSearch
} from 'react-icons/fa';
import './AdminJobs.css';

const API_BASE = 'http://localhost:5005/api';

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    department: 'Web Engineering',
    location: 'New Delhi / Hybrid',
    type: 'Full Time',
    experience: '2 - 4 Years',
    salary: 'Best in Industry',
    description: '',
    requirements: '',
    order: 0,
    isActive: true
  });

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/jobs?all=true`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setJobs(json.data);
        }
      }
    } catch (err) {
      console.warn('Backend error fetching jobs:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleOpenAdd = () => {
    setEditingJobId(null);
    setFormData({
      title: '',
      department: 'Web Engineering',
      location: 'New Delhi / Hybrid',
      type: 'Full Time',
      experience: '2 - 4 Years',
      salary: 'Best in Industry',
      description: '',
      requirements: '',
      order: jobs.length + 1,
      isActive: true
    });
    setFeedback(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (job) => {
    setEditingJobId(job._id || job.id);
    setFormData({
      title: job.title || '',
      department: job.department || 'Web Engineering',
      location: job.location || 'New Delhi / Hybrid',
      type: job.type || 'Full Time',
      experience: job.experience || '2 - 4 Years',
      salary: job.salary || 'Best in Industry',
      description: job.description || '',
      requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : (job.requirements || ''),
      order: job.order || 0,
      isActive: job.isActive !== undefined ? job.isActive : true
    });
    setFeedback(null);
    setIsModalOpen(true);
  };

  const handleSaveJob = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Job Title is required');
      return;
    }

    try {
      setSaving(true);
      const reqList = formData.requirements
        ? formData.requirements.split('\n').map(r => r.trim()).filter(Boolean)
        : [];

      const payload = {
        ...formData,
        requirements: reqList
      };

      if (editingJobId) {
        const res = await fetch(`${API_BASE}/jobs/${editingJobId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (res.ok && json.success) {
          setJobs(prev => prev.map(j => ((j._id || j.id) === editingJobId ? json.data : j)));
          setIsModalOpen(false);
          setFeedback({ type: 'success', message: 'Job opening updated successfully!' });
        } else {
          setFeedback({ type: 'error', message: json.message || 'Failed to update job' });
        }
      } else {
        const res = await fetch(`${API_BASE}/jobs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (res.ok && json.success) {
          setJobs(prev => [...prev, json.data]);
          setIsModalOpen(false);
          setFeedback({ type: 'success', message: 'New job opening created successfully!' });
        } else {
          setFeedback({ type: 'error', message: json.message || 'Failed to create job' });
        }
      }
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
      setTimeout(() => setFeedback(null), 5000);
    }
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job opening?')) return;
    try {
      const res = await fetch(`${API_BASE}/jobs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setJobs(prev => prev.filter(j => (j._id || j.id) !== id));
        setFeedback({ type: 'success', message: 'Job opening deleted successfully!' });
      }
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const handleToggleActive = async (job) => {
    const id = job._id || job.id;
    try {
      const res = await fetch(`${API_BASE}/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !job.isActive })
      });
      if (res.ok) {
        setJobs(prev => prev.map(j => ((j._id || j.id) === id ? { ...j, isActive: !j.isActive } : j)));
      }
    } catch (err) {
      console.warn('Error toggling job status:', err.message);
    }
  };

  const filteredJobs = jobs.filter(j =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    j.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wm-ajobs-root">
      {/* Header Banner */}
      <div className="wm-ajobs-header">
        <div>
          <h2><FaBriefcase /> Manage Career Job Openings</h2>
          <p>Add, update, or remove live vacancies displayed on the public /career page.</p>
        </div>
        <div>
          <button type="button" className="wm-ajobs-btn-add" onClick={handleOpenAdd}>
            <FaPlus /> Post New Job
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

      {/* KPI Row */}
      <div className="wm-ajobs-kpi-row">
        <div className="wm-ajobs-kpi-card">
          <div className="wm-ajobs-kpi-info">
            <h4>Total Vacancies</h4>
            <span>{jobs.length}</span>
          </div>
          <div className="wm-ajobs-kpi-icon"><FaBriefcase /></div>
        </div>
        <div className="wm-ajobs-kpi-card">
          <div className="wm-ajobs-kpi-info">
            <h4>Active on Site</h4>
            <span style={{ color: '#16a34a' }}>{jobs.filter(j => j.isActive).length}</span>
          </div>
          <div className="wm-ajobs-kpi-icon" style={{ background: '#dcfce7', color: '#16a34a' }}><FaCheckCircle /></div>
        </div>
        <div className="wm-ajobs-kpi-card">
          <div className="wm-ajobs-kpi-info">
            <h4>Departments</h4>
            <span>{new Set(jobs.map(j => j.department)).size}</span>
          </div>
          <div className="wm-ajobs-kpi-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}><FaUsers /></div>
        </div>
        <div className="wm-ajobs-kpi-card">
          <div className="wm-ajobs-kpi-info">
            <h4>Inactive / Closed</h4>
            <span style={{ color: '#94a3b8' }}>{jobs.filter(j => !j.isActive).length}</span>
          </div>
          <div className="wm-ajobs-kpi-icon" style={{ background: '#f1f5f9', color: '#64748b' }}><FaTimes /></div>
        </div>
      </div>

      {/* Job Postings Table Card */}
      <div className="wm-ajobs-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ margin: 0, fontSize: '17px', color: '#0d2f57', fontWeight: '800' }}>
            Job Openings List ({filteredJobs.length})
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '6px 12px', gap: '8px' }}>
            <FaSearch style={{ color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13.5px' }}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            <FaSpinner className="wm-spin" style={{ fontSize: '24px', marginBottom: '8px' }} />
            <div>Loading jobs list...</div>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b', background: '#f8fafc', borderRadius: '10px' }}>
            <FaBriefcase style={{ fontSize: '32px', color: '#94a3b8', marginBottom: '10px' }} />
            <div style={{ fontWeight: '700', color: '#334155' }}>No Jobs Found</div>
            <p style={{ margin: '4px 0 14px' }}>Click "Post New Job" to publish a vacancy.</p>
            <button type="button" className="wm-ajobs-btn-add" onClick={handleOpenAdd}>
              <FaPlus /> Post New Job
            </button>
          </div>
        ) : (
          <div className="wm-table-responsive">
            <table className="wm-ajobs-table">
              <thead>
                <tr>
                  <th>Job Title & Dept</th>
                  <th>Location</th>
                  <th>Type & Exp</th>
                  <th>Salary Budget</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job._id || job.id}>
                    <td className="wm-ajobs-title-cell">
                      <strong>{job.title}</strong>
                      <span className="wm-ajobs-badge-dept">{job.department}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
                        <FaMapMarkerAlt style={{ color: '#0077b6' }} />
                        <span>{job.location}</span>
                      </div>
                    </td>
                    <td>
                      <div><strong>{job.type}</strong></div>
                      <small style={{ color: '#64748b' }}>{job.experience}</small>
                    </td>
                    <td>
                      <strong style={{ color: '#16a34a' }}>{job.salary || 'Best in Industry'}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleToggleActive(job)}
                        className={`wm-ajobs-status-btn ${job.isActive ? 'wm-ajobs-status-active' : 'wm-ajobs-status-inactive'}`}
                      >
                        {job.isActive ? <FaCheckCircle /> : <FaTimes />}
                        {job.isActive ? 'Active' : 'Disabled'}
                      </button>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="wm-ajobs-actions" style={{ justifyContent: 'flex-end' }}>
                        <button
                          type="button"
                          className="wm-ajobs-act-btn wm-ajobs-act-edit"
                          onClick={() => handleOpenEdit(job)}
                          title="Edit Job"
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          type="button"
                          className="wm-ajobs-act-btn wm-ajobs-act-del"
                          onClick={() => handleDeleteJob(job._id || job.id)}
                          title="Delete Job"
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

      {/* Add / Edit Job Modal */}
      {isModalOpen && (
        <div className="wm-ajobs-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="wm-ajobs-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="wm-ajobs-modal-hdr">
              <h3>{editingJobId ? 'Edit Job Opening' : 'Post New Job Opening'}</h3>
              <button type="button" className="wm-ajobs-modal-close" onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSaveJob} className="wm-ajobs-modal-form">
              <div className="wm-ajobs-modal-body">
                <div className="wm-csfield">
                  <label>Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior React Developer"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="wm-csfield">
                    <label>Department / Category</label>
                    <input
                      type="text"
                      placeholder="e.g. Web Engineering, SEO, Design"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    />
                  </div>
                  <div className="wm-csfield">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="e.g. New Delhi / Hybrid or Remote"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="wm-csfield">
                    <label>Job Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract / Freelance">Contract / Freelance</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div className="wm-csfield">
                    <label>Experience Required</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 - 4 Years Experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="wm-csfield">
                    <label>Salary Package / Budget</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹5.0L - ₹8.0L PA or Best in Industry"
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    />
                  </div>
                  <div className="wm-csfield">
                    <label>Display Order</label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="wm-csfield">
                  <label>Job Description / Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Describe role responsibilities and expectations..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>

                <div className="wm-csfield">
                  <label>Key Requirements / Skills (One per line)</label>
                  <textarea
                    rows={4}
                    placeholder="3+ years React.js&#10;REST APIs & WebSockets&#10;State management"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <input
                    type="checkbox"
                    id="wm-job-active-check"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="wm-job-active-check" style={{ fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                    Publish vacancy as active on the public Career page
                  </label>
                </div>
              </div>

              <div className="wm-ajobs-modal-footer">
                <button type="button" className="wm-ajobs-btn-cancel" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="wm-ajobs-btn-save" disabled={saving}>
                  {saving ? (
                    <>
                      <FaSpinner className="wm-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <FaSave /> {editingJobId ? 'Save & Update Job' : 'Save Job Opening'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJobs;
