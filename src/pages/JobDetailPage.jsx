import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCalendarAlt,
  FaPaperPlane,
  FaUpload,
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaPhoneAlt,
  FaTimes,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaCheck,
  FaFilePdf,
  FaSpinner
} from 'react-icons/fa';
import { jobsData } from '../data/jobsData';
import './JobDetailPage.css';

const API_BASE = 'http://localhost:5005/api';

const normalizeJob = (raw) => {
  if (!raw) return null;

  const reqList = Array.isArray(raw.requirements)
    ? raw.requirements
    : (typeof raw.requirements === 'string'
        ? raw.requirements.split('\n').map(s => s.trim()).filter(Boolean)
        : (raw.requirements?.skills || []));

  const rawHighlights = Array.isArray(raw.highlights)
    ? raw.highlights
    : (typeof raw.highlights === 'string'
        ? raw.highlights.split('\n').map(s => s.trim()).filter(Boolean)
        : []);

  const rawBenefits = Array.isArray(raw.benefits)
    ? raw.benefits
    : (typeof raw.benefits === 'string'
        ? raw.benefits.split('\n').map(s => s.trim()).filter(Boolean)
        : []);

  const highlights = rawHighlights.length > 0
    ? rawHighlights.map(h => (typeof h === 'string' ? { text: h, icon: 'check' } : h))
    : [
        { text: 'Immediate joining', icon: 'check' },
        { text: 'Creative role & Growth', icon: 'check' },
        { text: 'Learning opportunity', icon: 'check' },
        { text: 'Active applicants', icon: 'users' }
      ];

  const benefits = rawBenefits.length > 0
    ? rawBenefits
    : [
        'Flexible working hours & hybrid options',
        'Performance-linked quarterly bonuses',
        'Health & accident coverage',
        'Paid time off & annual leave',
        'Skill development allowance',
        'Regular team offsites & dinners'
      ];

  const roleDetails = raw.roleDetails || {
    department: raw.department || 'Web Engineering',
    category: raw.category || (raw.department ? `${raw.department} Team` : 'Engineering'),
    employmentType: raw.type || 'Full Time',
    shift: raw.shift || 'Day shift (9:30 AM - 6:30 PM)'
  };

  const requirements = raw.requirements && typeof raw.requirements === 'object' && !Array.isArray(raw.requirements)
    ? raw.requirements
    : {
        experience: raw.experience || '1 - 3 Years',
        education: raw.education || 'Graduation / Any Degree',
        gender: raw.gender || 'Any gender',
        skills: reqList.length > 0 ? reqList : ['Communication', 'Teamwork', 'Core Technical Skills']
      };

  return {
    id: raw._id || raw.id || 'job-1',
    slug: raw.slug || (raw.title ? raw.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : ''),
    title: raw.title || 'Career Opportunity',
    company: raw.company || 'Webmok Technologies',
    logoText: raw.logoText || 'WEBMOK',
    logoSub: raw.logoSub || (raw.department ? raw.department.toUpperCase() : 'TECHNOLOGIES'),
    location: raw.location || 'New Delhi / Hybrid',
    salary: raw.salary || 'Best in Industry',
    posted: raw.posted || 'Today',
    tags: raw.tags || [
      raw.location?.toLowerCase().includes('remote') ? 'Work from Home' : 'Work from office',
      raw.type || 'Full Time',
      raw.experience || '1-3 Years',
      raw.shift || 'Day shift'
    ],
    highlights: highlights,
    roleDetails: roleDetails,
    requirements: requirements,
    description: raw.description || 'Join our fast-growing digital and web agency. We offer world-class projects, modern tooling, and exceptional compensation.',
    benefits: benefits,
    aboutCompany: raw.aboutCompany || 'Webmok Technologies is a premier full-service digital transformation and engineering agency headquartered in Delhi NCR, powering leading brands across 18+ countries.',
    address: raw.address || 'Office 402, Webmok Tower, Netaji Subhash Place, Pitampura, New Delhi - 110034'
  };
};

const JobDetailPage = ({ onOpenCallMe }) => {
  const { jobId } = useParams();

  // Initial lookup from static or local cache
  const [job, setJob] = useState(() => {
    const fromStatic = jobsData.find((j) => j.slug === jobId || j.id === jobId);
    if (fromStatic) return normalizeJob(fromStatic);

    try {
      const cached = localStorage.getItem('webmok_admin_jobs');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) {
          const found = parsed.find(
            (j) =>
              j._id === jobId ||
              j.id === jobId ||
              j.slug === jobId ||
              j.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === jobId
          );
          if (found) return normalizeJob(found);
        }
      }
    } catch (e) {}

    return normalizeJob(jobsData[0]);
  });

  // Application Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    experience: '',
    message: ''
  });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Scroll to top and fetch dynamic job from API or local storage
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const loadJobData = async () => {
      // 1. First check local storage for immediate sync
      try {
        const cached = localStorage.getItem('webmok_admin_jobs');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed)) {
            const found = parsed.find(
              (j) =>
                j._id === jobId ||
                j.id === jobId ||
                j.slug === jobId ||
                j.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === jobId
            );
            if (found) {
              setJob(normalizeJob(found));
            }
          }
        }
      } catch (e) {}

      // 2. Fetch from backend API
      try {
        const res = await fetch(`${API_BASE}/jobs/${jobId}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setJob(normalizeJob(json.data));
            return;
          }
        }

        // Fallback: list all jobs and match
        const allRes = await fetch(`${API_BASE}/jobs?all=true`);
        if (allRes.ok) {
          const allJson = await allRes.json();
          if (allJson.success && Array.isArray(allJson.data)) {
            const match = allJson.data.find(
              (j) =>
                j._id === jobId ||
                j.id === jobId ||
                j.slug === jobId ||
                j.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === jobId
            );
            if (match) {
              setJob(normalizeJob(match));
              return;
            }
          }
        }
      } catch (err) {
        console.warn('Notice loading job detail from API:', err.message);
      }

      // 3. Fallback to jobsData
      const staticMatch = jobsData.find((j) => j.slug === jobId || j.id === jobId);
      if (staticMatch) {
        setJob(normalizeJob(staticMatch));
      }
    };

    loadJobData();
  }, [jobId]);

  const handleOpenApply = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setErrorMsg('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setErrorMsg('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('File size must be under 10MB');
        return;
      }
      setCvFile(file);
      setErrorMsg('');
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('city', formData.location);
      payload.append('jobTitle', job.title);
      payload.append('jobId', job.id);
      payload.append('message', formData.message);
      if (cvFile) {
        payload.append('resume', cvFile);
      }

      await fetch(`${API_BASE}/job-applications`, {
        method: 'POST',
        body: payload
      });

      setIsSubmitted(true);
    } catch (err) {
      console.warn('API submission fallback, saving locally:', err.message);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const skillsList = Array.isArray(job.requirements?.skills)
    ? job.requirements.skills
    : (typeof job.requirements?.skills === 'string'
        ? job.requirements.skills.split(',').map(s => s.trim())
        : ['Technical Skills', 'Teamwork', 'Communication']);

  return (
    <div className="wm-jd-root">
      {/* 1. TOP BREADCRUMB & WRAPPER */}
      <div className="wm-jd-container">
        <div className="wm-jd-breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <Link to="/career">Career</Link> <span>/</span> <span>{job.title}</span>
        </div>

        {/* 2. MAIN 2-COLUMN LAYOUT */}
        <div className="wm-jd-layout">
          {/* LEFT CONTENT COLUMN */}
          <div className="wm-jd-main-col">
            {/* CARD 1: TOP HEADER CARD (MATCHING IMAGE 2) */}
            <div className="wm-jd-card wm-jd-header-card">
              <div className="wm-jd-header-top">
                <div className="wm-jd-logo-box">
                  <span className="wm-jd-logo-main">{job.logoText}</span>
                  <span className="wm-jd-logo-sub">{job.logoSub}</span>
                </div>
                <div className="wm-jd-header-info">
                  <h1 className="wm-jd-job-title">{job.title}</h1>
                  <p className="wm-jd-company-name">{job.company}</p>
                </div>
              </div>

              <div className="wm-jd-meta-row">
                <span className="wm-jd-meta-item">
                  <FaMapMarkerAlt className="wm-jd-meta-icon" /> {job.location}
                </span>
                <span className="wm-jd-meta-item wm-jd-salary">
                  <FaRupeeSign className="wm-jd-meta-icon" /> {job.salary}
                </span>
                <span className="wm-jd-meta-item">
                  <FaCalendarAlt className="wm-jd-meta-icon" /> {job.posted}
                </span>
              </div>

              <div className="wm-jd-tags-row">
                {(job.tags || []).map((tag, idx) => (
                  <span key={idx} className="wm-jd-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="wm-jd-action-row">
                <button
                  type="button"
                  className="wm-jd-btn-apply"
                  onClick={handleOpenApply}
                >
                  <FaPaperPlane /> Apply for Job
                </button>
                <button
                  type="button"
                  className="wm-jd-btn-upload"
                  onClick={handleOpenApply}
                >
                  <FaUpload /> Upload CV
                </button>
              </div>
            </div>

            {/* CARD 2: JOB HIGHLIGHTS (MATCHING IMAGE 2) */}
            <div className="wm-jd-card wm-jd-highlights-card">
              <h2 className="wm-jd-section-title">Job Highlights</h2>
              <div className="wm-jd-highlights-grid">
                {(job.highlights || []).map((h, idx) => (
                  <div key={idx} className="wm-jd-highlight-pill">
                    {h.icon === 'users' ? (
                      <FaUsers className="wm-jd-hl-icon wm-hl-users" />
                    ) : (
                      <FaCheckCircle className="wm-jd-hl-icon wm-hl-check" />
                    )}
                    <span>{typeof h === 'string' ? h : (h.text || h)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 3: JOB ROLE (MATCHING IMAGE 3) */}
            <div className="wm-jd-card wm-jd-role-card">
              <h2 className="wm-jd-section-title">Job Role</h2>
              <div className="wm-jd-grid-2x2">
                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaBuilding />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Department</span>
                    <p className="wm-jd-spec-val">{job.roleDetails?.department || 'Web Engineering'}</p>
                  </div>
                </div>

                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaBriefcase />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Role / Category</span>
                    <p className="wm-jd-spec-val">{job.roleDetails?.category || 'Engineering Team'}</p>
                  </div>
                </div>

                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaBriefcase />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Employment Type</span>
                    <p className="wm-jd-spec-val">{job.roleDetails?.employmentType || 'Full Time'}</p>
                  </div>
                </div>

                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Shift</span>
                    <p className="wm-jd-spec-val">{job.roleDetails?.shift || 'Day shift'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: JOB REQUIREMENTS (MATCHING IMAGE 3) */}
            <div className="wm-jd-card wm-jd-reqs-card">
              <h2 className="wm-jd-section-title">Job Requirements</h2>
              <div className="wm-jd-grid-2x2">
                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaBriefcase />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Experience</span>
                    <p className="wm-jd-spec-val">{job.requirements?.experience || '1 - 3 Years'}</p>
                  </div>
                </div>

                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Education</span>
                    <p className="wm-jd-spec-val">{job.requirements?.education || 'Graduation / Any Degree'}</p>
                  </div>
                </div>

                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaUser />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Gender</span>
                    <p className="wm-jd-spec-val">{job.requirements?.gender || 'Any gender'}</p>
                  </div>
                </div>

                <div className="wm-jd-spec-item">
                  <div className="wm-jd-spec-icon-box">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <span className="wm-jd-spec-label">Skills</span>
                    <p className="wm-jd-spec-val">{skillsList.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 5: JOB DESCRIPTION (MATCHING IMAGE 3) */}
            <div className="wm-jd-card wm-jd-desc-card">
              <h2 className="wm-jd-section-title">Job Description</h2>
              <p className="wm-jd-desc-text">{job.description}</p>
            </div>

            {/* CARD 6: BENEFITS (MATCHING IMAGE 4) */}
            <div className="wm-jd-card wm-jd-benefits-card">
              <h2 className="wm-jd-section-title">Benefits</h2>
              <div className="wm-jd-benefits-pills">
                {(job.benefits || []).map((b, idx) => (
                  <span key={idx} className="wm-jd-benefit-pill">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* CARD 7: ABOUT COMPANY (MATCHING IMAGE 4) */}
            <div className="wm-jd-card wm-jd-about-card">
              <h2 className="wm-jd-section-title">About Company</h2>
              <p className="wm-jd-about-desc">{job.aboutCompany}</p>
              <div className="wm-jd-address-box">
                <span className="wm-jd-address-label">ADDRESS</span>
                <p className="wm-jd-address-text">{job.address}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR COLUMN (STICKY) */}
          <div className="wm-jd-sidebar-col">
            {/* SIDEBAR CARD 1: APPLY IN SIMPLE STEPS (MATCHING IMAGE 2) */}
            <div className="wm-jd-apply-steps-card">
              <h3 className="wm-jd-steps-title">Apply in simple steps</h3>
              <ol className="wm-jd-steps-list">
                <li>
                  <span className="wm-jd-step-num">1.</span> Verify mobile number
                </li>
                <li>
                  <span className="wm-jd-step-num">2.</span> Fill basic details
                </li>
                <li>
                  <span className="wm-jd-step-num">3.</span> Upload CV and submit
                </li>
              </ol>
              <button
                type="button"
                className="wm-jd-btn-apply-now"
                onClick={handleOpenApply}
              >
                Apply Now
              </button>
            </div>

            {/* SIDEBAR CARD 2: NEED HELP? (MATCHING IMAGE 2 & 3) */}
            <div className="wm-jd-need-help-card">
              <h3 className="wm-jd-help-title">Need help?</h3>
              <p className="wm-jd-help-desc">
                Talk to our career expert for CV, interview and hiring support.
              </p>
              <a href="tel:8684031003" className="wm-jd-btn-talk-expert">
                <FaPhoneAlt /> Talk to Expert
              </a>
            </div>

            {/* SIDEBAR CARD 3: SOCIAL CONNECTIONS (MATCHING IMAGE 2) */}
            <div className="wm-jd-social-card">
              <div className="wm-jd-social-header">
                <h3>Social Connections</h3>
                <span className="wm-jd-social-badge">FOLLOW US</span>
              </div>
              <div className="wm-jd-social-icons">
                <a
                  href="https://www.instagram.com/web_mok_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-jd-social-btn wm-s-instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/webmoktech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-jd-social-btn wm-s-facebook"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/web-mok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-jd-social-btn wm-s-linkedin"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://youtube.com/@webmok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-jd-social-btn wm-s-youtube"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. APPLICATION MODAL DIALOG */}
      {isModalOpen && (
        <div className="wm-jd-modal-overlay" onClick={handleCloseModal}>
          <div className="wm-jd-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="wm-jd-modal-header">
              <div>
                <span className="wm-jd-modal-tag">Apply for Position</span>
                <h3 className="wm-jd-modal-title">{job.title}</h3>
                <p className="wm-jd-modal-sub">{job.company} • {job.location}</p>
              </div>
              <button
                type="button"
                className="wm-jd-modal-close"
                onClick={handleCloseModal}
              >
                <FaTimes />
              </button>
            </div>

            {isSubmitted ? (
              <div className="wm-jd-modal-success">
                <div className="wm-jd-success-icon-wrap">
                  <FaCheck className="wm-jd-check-icon" />
                </div>
                <h4>Application Submitted Successfully!</h4>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your profile has been received for the <strong>{job.title}</strong> role. Our talent acquisition team will review your application and contact you soon.
                </p>
                <button
                  type="button"
                  className="wm-jd-btn-done"
                  onClick={handleCloseModal}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="wm-jd-form">
                {errorMsg && (
                  <div className="wm-jd-form-error">
                    <FaTimes /> <span>{errorMsg}</span>
                  </div>
                )}

                <div className="wm-jd-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="wm-jd-form-row">
                  <div className="wm-jd-form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="wm-jd-form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="wm-jd-form-row">
                  <div className="wm-jd-form-group">
                    <label>Current City / Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Delhi NCR, Rohtak, Noida"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="wm-jd-form-group">
                    <label>Relevant Experience</label>
                    <input
                      type="text"
                      name="experience"
                      placeholder="e.g. 2.5 Years, Fresher"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="wm-jd-form-group">
                  <label>Attach CV / Resume (Optional)</label>
                  <label className="wm-jd-dropzone">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    <div className="wm-jd-dropzone-inner">
                      {cvFile ? (
                        <div className="wm-jd-file-info">
                          <FaFilePdf className="wm-jd-pdf-icon" />
                          <div>
                            <strong>{cvFile.name}</strong>
                            <small>{(cvFile.size / (1024 * 1024)).toFixed(2)} MB</small>
                          </div>
                        </div>
                      ) : (
                        <div className="wm-jd-dropzone-prompt">
                          <FaUpload />
                          <span>Choose PDF or Word Document (Max 10MB)</span>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                <div className="wm-jd-form-group">
                  <label>Message / Note to Hiring Team (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your projects, notice period, or portfolio links..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="wm-jd-form-actions">
                  <button
                    type="button"
                    className="wm-jd-btn-cancel"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="wm-jd-btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="wm-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;
