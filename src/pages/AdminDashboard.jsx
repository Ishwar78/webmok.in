import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import RichTextEditor from '../components/RichTextEditor';

const API_BASE = 'http://localhost:5005/api';
import {
  FaTachometerAlt,
  FaCogs,
  FaBlog,
  FaAddressBook,
  FaBriefcase,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheckCircle,
  FaSearch,
  FaEye,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaClipboardList,
  FaEnvelopeOpenText,
  FaTimes,
  FaSave,
  FaUndoAlt,
  FaExternalLinkAlt,
  FaGoogle,
  FaGlobe,
  FaKey,
  FaFileAlt,
  FaLayerGroup,
  FaSpinner,
  FaMagic,
  FaImage,
  FaVideo,
  FaChartLine,
  FaUpload,
  FaCheck,
  FaBullhorn,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaInfoCircle
} from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  // Services State (Dynamic MongoDB Managed for Home Page & Explore Pages)
  const [servicesList, setServicesList] = useState([]);
  const [activeServiceKey, setActiveServiceKey] = useState('web-designing-development-services-company');
  const [servicesLoading, setServicesLoading] = useState(false);
  const [servicesSaving, setServicesSaving] = useState(false);
  const [servicesFeedback, setServicesFeedback] = useState(null);
  const [servicePreviewTab, setServicePreviewTab] = useState('home'); // 'home' | 'explore'
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [newServiceData, setNewServiceData] = useState({
    title: '',
    slug: '',
    category: 'Web Development',
    icon: 'FaLaptopCode',
    metric: 'Top Performance',
    tag: 'Custom Solution',
    desc: 'Bespoke digital solution engineered for rapid business growth and top performance.',
    tags: 'React.js, Cloud, UI/UX',
    subFeatures: 'Custom Strategy\nQuality Engineering\nRapid Turnaround\nDedicated Support',
    headline: 'High-Impact Digital Engineering & Solutions by Web Mok',
    overview: 'Full-cycle enterprise digital services tailored to scale your brand valuation.',
    features: 'Tailored Strategy\nEnd-to-End Implementation\n24/7 Monitoring',
    techStack: 'React.js, Node.js, Cloud APIs',
    timeline: '2 to 4 Weeks Delivery',
    status: 'Active'
  });

  
  // ==========================================
  // BLOG MANAGEMENT STATE & HANDLERS (MongoDB)
  // ==========================================
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('all');
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogFormSaving, setBlogFormSaving] = useState(false);
  const [blogFeedback, setBlogFeedback] = useState(null);

  const initialBlogFormState = {
    title: '',
    slug: '',
    category: 'Web Tech',
    author: 'Web Mok Team',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
    excerpt: '',
    content: '<h2>Introduction</h2><p>Write your detailed article insights here...</p>',
    seoTitle: '',
    seoKeywords: '',
    seoDescription: '',
    status: 'Published'
  };

  const [blogFormData, setBlogFormData] = useState(initialBlogFormState);

  // Fetch blogs from MongoDB API
  const fetchBlogsFromDB = async () => {
    try {
      setBlogsLoading(true);
      const res = await fetch(`${API_BASE}/blogs`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setBlogList(json.data);
        }
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setBlogsLoading(false);
    }
  };

  // Blogs State
  const [blogList, setBlogList] = useState([
    { id: 1, title: 'Top Web Development Trends in 2026', author: 'Tech Desk', date: 'Aug 28, 2026', views: 3420, category: 'Web Tech' },
    { id: 2, title: 'Mastering Search Engine Optimization', author: 'SEO Lead', date: 'Aug 19, 2026', views: 4890, category: 'SEO' },
    { id: 3, title: 'How We Reduced Cost Per Lead by 58%', author: 'PPC Desk', date: 'Aug 10, 2026', views: 2710, category: 'Paid Ads' },
    { id: 4, title: 'Mobile App Architecture: React Native vs Flutter', author: 'Mobile Lead', date: 'Jul 30, 2026', views: 1980, category: 'App Dev' }
  ]);

  // Portfolio State
  const [portfolioList, setPortfolioList] = useState([
    { id: 1, title: 'EduTech Interactive Platform', client: 'Apex Global Academy', category: 'Web Development', outcome: '+320% Enrollments' },
    { id: 2, title: 'PaySwift Mobile Finance App', client: 'PaySwift Fintech Ltd', category: 'App Development', outcome: '500K+ Active Installs' },
    { id: 3, title: 'LuxeCart E-Commerce Brand', client: 'Vogue Essentials', category: 'E-Commerce', outcome: '₹1.8 Cr Monthly GMV' },
    { id: 4, title: 'MediCare Healthcare Lead Funnel', client: 'MediCare Multispecialty', category: 'SEO & PPC', outcome: '1st Page Rank 480+ Keywords' }
  ]);

  // 1. Enquiry Now Submissions State (Only real inquiries from MongoDB)
  const [enquiryNowList, setEnquiryNowList] = useState([]);

  // 2. Contact Form Messages State (Only real messages from MongoDB)
  const [contactMessagesList, setContactMessagesList] = useState([]);

  // 3. Contact Info Settings State (Requested feature 3)
  const defaultContactSettings = {
    phonePrimary: '8684031003',
    phoneSecondary: '+91 98765 43210',
    emailPrimary: 'info@webmok.in',
    emailSupport: 'support@webmok.in',
    address: '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',
    workingHours: 'Monday - Saturday: 9:30 AM to 7:00 PM (Sunday Closed)',
    whatsapp: '8684031003'
  };

  const [contactSettings, setContactSettings] = useState(() => {
    const saved = localStorage.getItem('webmok_contact_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return defaultContactSettings;
  });
  const [contactSavedSuccess, setContactSavedSuccess] = useState(false);

  // Sub-tab for unified Inquiries page ('enquiry-now' or 'contact-queries')
  const [inquirySubTab, setInquirySubTab] = useState('enquiry-now');

  // Selected Inquiry Modal
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [inquirySearch, setInquirySearch] = useState('');

  // Form states for adding items
  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogCat, setNewBlogCat] = useState('Web Tech');

  // Outstanding Section Management State (Home Page Interactive Tabs)
  const [outstandingTabs, setOutstandingTabs] = useState([]);
  const [activeOutstandingKey, setActiveOutstandingKey] = useState('analytics');
  const [outstandingLoading, setOutstandingLoading] = useState(false);
  const [outstandingSaving, setOutstandingSaving] = useState(false);
  const [outstandingUploading, setOutstandingUploading] = useState(false);
  const [outstandingFeedback, setOutstandingFeedback] = useState(null);

  // Hero Video Management State (Home Page Hero Section)
  const [heroVideoData, setHeroVideoData] = useState({
    title: 'Home Hero Video',
    videoUrl: '/Home-Hero.mp4',
    originalName: 'Home-Hero.mp4',
    filename: '',
    size: 0,
    mimeType: 'video/mp4',
    isDefault: true
  });
  const [heroVideoLoading, setHeroVideoLoading] = useState(false);
  const [heroVideoSaving, setHeroVideoSaving] = useState(false);
  const [heroVideoUploading, setHeroVideoUploading] = useState(false);
  const [heroVideoFeedback, setHeroVideoFeedback] = useState(null);
  const [heroVideoCustomUrl, setHeroVideoCustomUrl] = useState('/Home-Hero.mp4');
  const [heroVideoCustomTitle, setHeroVideoCustomTitle] = useState('Home Hero Video');

  // Fetch real inquiries, messages, and contact info from MongoDB on mount
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(`${API_BASE}/inquiries/enquiry`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setEnquiryNowList(
              json.data.map((item) => ({
                id: item._id,
                name: item.name,
                phone: item.phone,
                email: item.email || '',
                service: item.service || 'Website Development',
                budget: item.budget || 'Flexible',
                timeline: item.timeline || 'Standard',
                date: new Date(item.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                }),
                source: item.source || 'Enquiry Now Modal',
                notes: item.notes || '',
                status: item.status || 'New'
              }))
            );
          }
        }
      } catch (err) {
        console.warn('Backend offline or not reachable, using cached enquiries:', err.message);
      }
    };

    const fetchContactMessages = async () => {
      try {
        const res = await fetch(`${API_BASE}/inquiries/contact`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setContactMessagesList(
              json.data.map((item) => ({
                id: item._id,
                name: item.name,
                email: item.email,
                phone: item.phone || '',
                subject: item.subject || 'Project Inquiry',
                message: item.message,
                date: new Date(item.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                }),
                status: item.status || 'New'
              }))
            );
          }
        }
      } catch (err) {
        console.warn('Backend offline, using cached contact messages:', err.message);
      }
    };

    const fetchContactInfo = async () => {
      try {
        const res = await fetch(`${API_BASE}/contact-info`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setContactSettings(json.data);
            localStorage.setItem('webmok_contact_info', JSON.stringify(json.data));
          }
        }
      } catch (err) {
        console.warn('Backend offline, using local contact settings:', err.message);
      }
    };

    const fetchOutstanding = async () => {
      try {
        setOutstandingLoading(true);
        const res = await fetch(`${API_BASE}/outstanding`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setOutstandingTabs(json.data);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback outstanding tabs:', err.message);
      } finally {
        setOutstandingLoading(false);
      }
    };

    const fetchHeroVideo = async () => {
      try {
        setHeroVideoLoading(true);
        const res = await fetch(`${API_BASE}/hero-video`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setHeroVideoData(json.data);
            setHeroVideoCustomUrl(json.data.videoUrl || '/Home-Hero.mp4');
            setHeroVideoCustomTitle(json.data.title || 'Home Hero Video');
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback hero video:', err.message);
      } finally {
        setHeroVideoLoading(false);
      }
    };

    const fetchServicesFromDB = async () => {
      try {
        setServicesLoading(true);
        const res = await fetch(`${API_BASE}/services`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setServicesList(json.data);
            setActiveServiceKey(prev => prev || json.data[0].slug);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using local services:', err.message);
      } finally {
        setServicesLoading(false);
      }
    };

    fetchEnquiries();
    fetchBlogsFromDB();
    fetchContactMessages();
    fetchContactInfo();
    fetchOutstanding();
    fetchHeroVideo();
    fetchServicesFromDB();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('webmok_admin_logged_in');
    localStorage.removeItem('webmok_admin_token');
    localStorage.removeItem('webmok_admin_user');
    navigate('/admin/login');
  };

  // Blog Modal Open / Edit / Delete Handlers
  const handleOpenCreateBlog = () => {
    setBlogFormData(initialBlogFormState);
    setEditingBlogId(null);
    setBlogFeedback(null);
    setIsBlogModalOpen(true);
  };

  const handleOpenEditBlog = (blog) => {
    setEditingBlogId(blog._id || blog.id);
    setBlogFormData({
      title: blog.title || '',
      slug: blog.slug || '',
      category: blog.category || 'Web Tech',
      author: blog.author || 'Web Mok Team',
      readTime: blog.readTime || '5 min read',
      image: blog.image || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      seoTitle: blog.seoTitle || blog.title || '',
      seoKeywords: blog.seoKeywords || '',
      seoDescription: blog.seoDescription || blog.excerpt || '',
      status: blog.status || 'Published'
    });
    setBlogFeedback(null);
    setIsBlogModalOpen(true);
  };

  const handleAutoGenerateSlug = () => {
    if (!blogFormData.title) return;
    const generated = blogFormData.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    setBlogFormData((prev) => ({ ...prev, slug: generated }));
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    if (!blogFormData.title.trim() || !blogFormData.content.trim()) {
      alert('Please provide both an article title and content.');
      return;
    }

    try {
      setBlogFormSaving(true);
      const url = editingBlogId
        ? `${API_BASE}/blogs/${editingBlogId}`
        : `${API_BASE}/blogs`;
      const method = editingBlogId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogFormData)
      });

      const json = await res.json();
      if (json.success) {
        setBlogFeedback({
          type: 'success',
          message: editingBlogId ? 'Blog article updated successfully in database!' : 'New blog article published successfully in database!'
        });
        await fetchBlogsFromDB();
        setTimeout(() => {
          setIsBlogModalOpen(false);
          setBlogFeedback(null);
        }, 1200);
      } else {
        alert(json.message || 'Failed to save blog');
      }
    } catch (err) {
      console.error('Error saving blog:', err);
      alert('Network error while saving blog. Check backend server.');
    } finally {
      setBlogFormSaving(false);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm('Are you sure you want to permanently delete this blog article from the database?')) {
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}`, {
        method: 'DELETE'
      });
      const json = await res.json();
      if (json.success) {
        setBlogList((prev) => prev.filter((b) => (b._id || b.id) !== blogId));
        alert('Blog article deleted successfully from database.');
      } else {
        alert(json.message || 'Failed to delete blog article');
      }
    } catch (err) {
      console.error('Error deleting blog:', err);
      alert('Network error while deleting blog');
    }
  };



  const handleUpdateEnquiryStatus = async (id, newStatus) => {
    setEnquiryNowList(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    try {
      await fetch(`${API_BASE}/inquiries/enquiry/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {
      console.warn('Error updating status in MongoDB:', e.message);
    }
  };

  const handleUpdateContactMessageStatus = async (id, newStatus) => {
    setContactMessagesList(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    try {
      await fetch(`${API_BASE}/inquiries/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {
      console.warn('Error updating status in MongoDB:', e.message);
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry record from the database?')) {
      setEnquiryNowList(enquiryNowList.filter((item) => item.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
      try {
        await fetch(`${API_BASE}/inquiries/enquiry/${id}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('Error deleting from MongoDB:', e.message);
      }
    }
  };

  const handleDeleteContactMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact message from the database?')) {
      setContactMessagesList(contactMessagesList.filter((item) => item.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
      try {
        await fetch(`${API_BASE}/inquiries/contact/${id}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('Error deleting from MongoDB:', e.message);
      }
    }
  };

  const handleUpdateContactSettings = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/contact-info`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactSettings)
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data) setContactSettings(json.data);
      }
    } catch (err) {
      console.warn('Could not save to MongoDB, saving locally:', err.message);
    }
    localStorage.setItem('webmok_contact_info', JSON.stringify(contactSettings));
    window.dispatchEvent(new Event('webmok_contact_updated'));
    setContactSavedSuccess(true);
    setTimeout(() => {
      setContactSavedSuccess(false);
    }, 4000);
  };

  const handleResetContactSettings = async () => {
    if (window.confirm('Reset all contact information to initial default values in MongoDB?')) {
      try {
        const res = await fetch(`${API_BASE}/contact-info/reset`, { method: 'PUT' });
        if (res.ok) {
          const json = await res.json();
          if (json.data) setContactSettings(json.data);
        } else {
          setContactSettings(defaultContactSettings);
        }
      } catch (e) {
        setContactSettings(defaultContactSettings);
      }
      localStorage.setItem('webmok_contact_info', JSON.stringify(defaultContactSettings));
      window.dispatchEvent(new Event('webmok_contact_updated'));
      setContactSavedSuccess(true);
      setTimeout(() => setContactSavedSuccess(false), 3000);
    }
  };

  // Outstanding Section Handlers
  const currentOutstandingTab = (outstandingTabs && outstandingTabs.find(t => t.tabKey === activeOutstandingKey)) || {
    tabKey: 'analytics',
    tabNumber: '01',
    tabTitle: 'Real-Time Analytics',
    heading: 'Real-Time Analytics & BI',
    description: '',
    points: [
      { title: '', text: '' },
      { title: '', text: '' },
      { title: '', text: '' }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: 'Active Growth Module'
  };

  const handleUpdateCurrentTabField = (field, value) => {
    setOutstandingTabs(prev => prev.map(t => {
      if (t.tabKey === activeOutstandingKey) {
        return { ...t, [field]: value };
      }
      return t;
    }));
  };

  const handleUpdateCurrentTabPoint = (index, field, value) => {
    setOutstandingTabs(prev => prev.map(t => {
      if (t.tabKey === activeOutstandingKey) {
        const updatedPoints = Array.isArray(t.points) ? [...t.points] : [];
        while (updatedPoints.length <= index) {
          updatedPoints.push({ title: '', text: '' });
        }
        updatedPoints[index] = { ...updatedPoints[index], [field]: value };
        return { ...t, points: updatedPoints };
      }
      return t;
    }));
  };

  const handleSaveOutstandingTab = async (e) => {
    if (e) e.preventDefault();
    if (!currentOutstandingTab) return;
    try {
      setOutstandingSaving(true);
      setOutstandingFeedback(null);
      const res = await fetch(`${API_BASE}/outstanding/${currentOutstandingTab.tabKey}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentOutstandingTab)
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setOutstandingFeedback({
          type: 'success',
          message: `Tab "${currentOutstandingTab.tabTitle}" successfully saved to MongoDB!`
        });
        if (json.data) {
          setOutstandingTabs(prev => prev.map(t => t.tabKey === json.data.tabKey ? json.data : t));
        }
      } else {
        setOutstandingFeedback({
          type: 'error',
          message: json.message || 'Failed to update tab'
        });
      }
    } catch (err) {
      setOutstandingFeedback({
        type: 'error',
        message: err.message || 'Network error saving tab'
      });
    } finally {
      setOutstandingSaving(false);
      setTimeout(() => setOutstandingFeedback(null), 5000);
    }
  };

  const handleOutstandingFileUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setOutstandingUploading(true);
      setOutstandingFeedback(null);
      const res = await fetch(`${API_BASE}/outstanding/upload`, {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setOutstandingTabs(prev => prev.map(t => {
          if (t.tabKey === activeOutstandingKey) {
            return {
              ...t,
              mediaType: json.mediaType,
              mediaUrl: json.mediaUrl
            };
          }
          return t;
        }));
        setOutstandingFeedback({
          type: 'success',
          message: `${json.mediaType === 'video' ? 'Video' : 'Image'} "${file.name}" uploaded successfully! Click "Save Tab" to persist.`
        });
      } else {
        setOutstandingFeedback({
          type: 'error',
          message: json.message || 'Upload failed'
        });
      }
    } catch (err) {
      setOutstandingFeedback({
        type: 'error',
        message: err.message || 'Error uploading file'
      });
    } finally {
      setOutstandingUploading(false);
    }
  };

  const handleResetOutstandingDefaults = async () => {
    if (!window.confirm('Are you sure you want to reset all 6 tabs to their original default content and graph view? Any custom media/text on these tabs will be restored.')) {
      return;
    }
    try {
      setOutstandingLoading(true);
      const res = await fetch(`${API_BASE}/outstanding/reset`, { method: 'POST' });
      const json = await res.json();
      if (res.ok && json.success && Array.isArray(json.data)) {
        setOutstandingTabs(json.data);
        setOutstandingFeedback({
          type: 'success',
          message: 'All 6 Outstanding tabs reset to original defaults!'
        });
      }
    } catch (err) {
      setOutstandingFeedback({
        type: 'error',
        message: err.message || 'Failed to reset tabs'
      });
    } finally {
      setOutstandingLoading(false);
      setTimeout(() => setOutstandingFeedback(null), 5000);
    }
  };

  // =========================================================================
  // HERO VIDEO HANDLERS
  // =========================================================================
  const handleHeroVideoFileUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);
    if (heroVideoCustomTitle) {
      formData.append('title', heroVideoCustomTitle);
    }

    try {
      setHeroVideoUploading(true);
      setHeroVideoFeedback(null);
      const res = await fetch(`${API_BASE}/hero-video/upload`, {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      if (res.ok && json.success && json.data) {
        setHeroVideoData(json.data);
        setHeroVideoCustomUrl(json.data.videoUrl);
        setHeroVideoFeedback({
          type: 'success',
          message: `Hero video "${file.name}" uploaded successfully and updated on Home page!`
        });
      } else {
        setHeroVideoFeedback({
          type: 'error',
          message: json.message || 'Failed to upload hero video'
        });
      }
    } catch (err) {
      setHeroVideoFeedback({
        type: 'error',
        message: err.message || 'Error uploading hero video'
      });
    } finally {
      setHeroVideoUploading(false);
      setTimeout(() => setHeroVideoFeedback(null), 5000);
    }
  };

  const handleSaveHeroVideoUrl = async (e) => {
    if (e) e.preventDefault();
    if (!heroVideoCustomUrl) return;

    try {
      setHeroVideoSaving(true);
      setHeroVideoFeedback(null);
      const res = await fetch(`${API_BASE}/hero-video/url`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoUrl: heroVideoCustomUrl,
          title: heroVideoCustomTitle || 'Home Hero Video'
        })
      });
      const json = await res.json();
      if (res.ok && json.success && json.data) {
        setHeroVideoData(json.data);
        setHeroVideoFeedback({
          type: 'success',
          message: 'Hero video URL successfully saved to MongoDB!'
        });
      } else {
        setHeroVideoFeedback({
          type: 'error',
          message: json.message || 'Failed to update hero video URL'
        });
      }
    } catch (err) {
      setHeroVideoFeedback({
        type: 'error',
        message: err.message || 'Error updating hero video URL'
      });
    } finally {
      setHeroVideoSaving(false);
      setTimeout(() => setHeroVideoFeedback(null), 5000);
    }
  };

  const handleResetHeroVideo = async () => {
    if (!window.confirm('Reset hero video back to default /Home-Hero.mp4?')) {
      return;
    }
    try {
      setHeroVideoLoading(true);
      setHeroVideoFeedback(null);
      const res = await fetch(`${API_BASE}/hero-video/reset`, { method: 'POST' });
      const json = await res.json();
      if (res.ok && json.success && json.data) {
        setHeroVideoData(json.data);
        setHeroVideoCustomUrl('/Home-Hero.mp4');
        setHeroVideoCustomTitle('Home Hero Video');
        setHeroVideoFeedback({
          type: 'success',
          message: 'Hero video reset to default (/Home-Hero.mp4)!'
        });
      }
    } catch (err) {
      setHeroVideoFeedback({
        type: 'error',
        message: err.message || 'Failed to reset hero video'
      });
    } finally {
      setHeroVideoLoading(false);
      setTimeout(() => setHeroVideoFeedback(null), 5000);
    }
  };

  // =========================================================================
  // SERVICES MANAGEMENT HANDLERS (Home Page Showcase + Explore Page Content)
  // =========================================================================
  const currentService = (servicesList && servicesList.find(s => (s.slug === activeServiceKey || s._id === activeServiceKey))) || (servicesList && servicesList[0]) || {
    slug: 'web-designing-development-services-company',
    title: 'Web Design & Development',
    category: 'Web Development',
    icon: 'FaLaptopCode',
    metric: '0.8s Avg Speed',
    tag: 'Custom Web Apps',
    desc: 'Bespoke web applications built for high conversion.',
    tags: ['React.js', 'Next.js'],
    subFeatures: ['Custom UI/UX', 'Speed Optimization'],
    headline: 'Award-Winning UI/UX & Responsive Web Development',
    overview: 'Full-service web design and development.',
    features: ['Custom Component Architecture', 'API Integrations'],
    techStack: ['React.js', 'Node.js'],
    timeline: '3 to 5 Weeks Delivery',
    faqs: [
      { q: 'How long does development take?', a: 'Standard turnaround is 3 to 5 weeks.' }
    ]
  };

  const handleUpdateServiceField = (field, value) => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        return { ...s, [field]: value };
      }
      return s;
    }));
  };

  const handleUpdateServiceArrayItem = (field, index, value) => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        const arr = Array.isArray(s[field]) ? [...s[field]] : [];
        arr[index] = value;
        return { ...s, [field]: arr };
      }
      return s;
    }));
  };

  const handleAddServiceArrayItem = (field, defaultVal = '') => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        const arr = Array.isArray(s[field]) ? [...s[field]] : [];
        arr.push(defaultVal);
        return { ...s, [field]: arr };
      }
      return s;
    }));
  };

  const handleRemoveServiceArrayItem = (field, index) => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        const arr = Array.isArray(s[field]) ? s[field].filter((_, i) => i !== index) : [];
        return { ...s, [field]: arr };
      }
      return s;
    }));
  };

  const handleUpdateServiceFaq = (index, faqField, value) => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        const faqs = Array.isArray(s.faqs) ? [...s.faqs] : [];
        while (faqs.length <= index) {
          faqs.push({ q: '', a: '' });
        }
        faqs[index] = { ...faqs[index], [faqField]: value };
        return { ...s, faqs };
      }
      return s;
    }));
  };

  const handleAddServiceFaq = () => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        const faqs = Array.isArray(s.faqs) ? [...s.faqs] : [];
        faqs.push({ q: 'New Frequently Asked Question?', a: 'Detailed answer for this question...' });
        return { ...s, faqs };
      }
      return s;
    }));
  };

  const handleRemoveServiceFaq = (index) => {
    setServicesList(prev => prev.map(s => {
      if (s.slug === activeServiceKey || s._id === activeServiceKey) {
        const faqs = Array.isArray(s.faqs) ? s.faqs.filter((_, i) => i !== index) : [];
        return { ...s, faqs };
      }
      return s;
    }));
  };

  const handleSaveCurrentService = async (e) => {
    if (e) e.preventDefault();
    if (!currentService) return;
    try {
      setServicesSaving(true);
      setServicesFeedback(null);
      const res = await fetch(`${API_BASE}/services/${currentService._id || currentService.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentService)
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setServicesFeedback({
          type: 'success',
          message: `Service "${currentService.title}" updated successfully! Changes are live on Home and Explore pages.`
        });
        if (json.data) {
          setServicesList(prev => prev.map(s => (s.slug === json.data.slug || s._id === json.data._id) ? json.data : s));
        }
      } else {
        setServicesFeedback({
          type: 'error',
          message: json.message || 'Failed to update service'
        });
      }
    } catch (err) {
      setServicesFeedback({
        type: 'error',
        message: err.message || 'Error saving service'
      });
    } finally {
      setServicesSaving(false);
      setTimeout(() => setServicesFeedback(null), 5000);
    }
  };

  const handleResetServicesDefaults = async () => {
    if (!window.confirm('Are you sure you want to reset all services to default system data?')) {
      return;
    }
    try {
      setServicesLoading(true);
      const res = await fetch(`${API_BASE}/services/reset`, { method: 'POST' });
      const json = await res.json();
      if (res.ok && json.success && Array.isArray(json.data)) {
        setServicesList(json.data);
        if (json.data.length > 0) setActiveServiceKey(json.data[0].slug);
        setServicesFeedback({
          type: 'success',
          message: 'All services successfully reset to default system records!'
        });
      }
    } catch (err) {
      setServicesFeedback({
        type: 'error',
        message: err.message || 'Failed to reset services'
      });
    } finally {
      setServicesLoading(false);
      setTimeout(() => setServicesFeedback(null), 5000);
    }
  };

  const handleCreateNewService = async (e) => {
    if (e) e.preventDefault();
    if (!newServiceData.title) return;
    try {
      setServicesSaving(true);
      const payload = {
        title: newServiceData.title,
        slug: newServiceData.slug || newServiceData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        category: newServiceData.category,
        icon: newServiceData.icon,
        metric: newServiceData.metric,
        tag: newServiceData.tag,
        desc: newServiceData.desc,
        tags: typeof newServiceData.tags === 'string' ? newServiceData.tags.split(',').map(s => s.trim()).filter(Boolean) : newServiceData.tags,
        subFeatures: typeof newServiceData.subFeatures === 'string' ? newServiceData.subFeatures.split('\n').map(s => s.trim()).filter(Boolean) : newServiceData.subFeatures,
        headline: newServiceData.headline,
        overview: newServiceData.overview,
        features: typeof newServiceData.features === 'string' ? newServiceData.features.split('\n').map(s => s.trim()).filter(Boolean) : newServiceData.features,
        techStack: typeof newServiceData.techStack === 'string' ? newServiceData.techStack.split(',').map(s => s.trim()).filter(Boolean) : newServiceData.techStack,
        timeline: newServiceData.timeline,
        status: newServiceData.status || 'Active',
        faqs: [
          { q: 'What is included in this service?', a: 'Complete end-to-end design, implementation, and dedicated support.' }
        ]
      };

      const res = await fetch(`${API_BASE}/services`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (res.ok && json.success && json.data) {
        setServicesList(prev => [...prev, json.data]);
        setActiveServiceKey(json.data.slug);
        setIsAddServiceModalOpen(false);
        setServicesFeedback({
          type: 'success',
          message: `New service "${json.data.title}" created successfully!`
        });
      } else {
        alert(json.message || 'Error creating service');
      }
    } catch (err) {
      alert(err.message || 'Failed to create service');
    } finally {
      setServicesSaving(false);
      setTimeout(() => setServicesFeedback(null), 5000);
    }
  };

  const handleDeleteService = async (serviceId) => {
    if (!window.confirm('Delete this service permanently from MongoDB?')) return;
    try {
      setServicesLoading(true);
      const res = await fetch(`${API_BASE}/services/${serviceId}`, { method: 'DELETE' });
      const json = await res.json();
      if (res.ok && json.success) {
        setServicesList(prev => prev.filter(s => s._id !== serviceId && s.slug !== serviceId));
        setServicesFeedback({
          type: 'success',
          message: 'Service deleted successfully'
        });
      }
    } catch (err) {
      setServicesFeedback({
        type: 'error',
        message: err.message || 'Failed to delete service'
      });
    } finally {
      setServicesLoading(false);
      setTimeout(() => setServicesFeedback(null), 5000);
    }
  };

  const getMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    return `http://localhost:5005${url.startsWith('/') ? '' : '/'}${url}`;
  };

  const renderTabIcon = (key) => {
    switch (key) {
      case 'analytics': return <FaChartLine />;
      case 'ppc': return <FaBullhorn />;
      case 'online': return <FaLaptopCode />;
      case 'email': return <FaEnvelope />;
      case 'social': return <FaUsers />;
      case 'digital': return <FaRocket />;
      default: return <FaLayerGroup />;
    }
  };

  return (
    <div className="wm-admindash-root">
      {/* Sidebar with distinct buttons */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
        enquiryCount={enquiryNowList.length}
        contactCount={contactMessagesList.length}
      />

      {/* Main Content Area */}
      <main className="wm-admindash-main">
        {/* Header Bar */}
        <header className="wm-admindash-topbar">
          <div className="wm-admindash-greeting">
            <h2>Welcome Back, Administrator</h2>
            <p>Webmok Enterprise Portal & Lead Management Suite</p>
          </div>
          <div className="wm-admindash-user-badge">
            <span className="wm-status-indicator"></span>
            <strong>admininfo@webmok.in</strong>
          </div>
        </header>

        {/* =========================================================================
            TAB 1: DASHBOARD OVERVIEW
           ========================================================================= */}
        {activeTab === 'dashboard' && (
          <div className="wm-adash-tab-view">
            {/* Metric KPI Cards */}
            <div className="wm-adash-kpi-grid">
              <div className="wm-akpi-card" onClick={() => { setActiveTab('inquiries'); setInquirySubTab('enquiry-now'); }} style={{ cursor: 'pointer' }}>
                <div className="wm-akpi-icon wm-kpi-blue"><FaClipboardList /></div>
                <div className="wm-akpi-info">
                  <span className="wm-akpi-label">Enquiry Now Leads</span>
                  <strong className="wm-akpi-val">{enquiryNowList.length}</strong>
                  <span className="wm-akpi-growth">Click to review leads</span>
                </div>
              </div>

              <div className="wm-akpi-card" onClick={() => { setActiveTab('inquiries'); setInquirySubTab('contact-queries'); }} style={{ cursor: 'pointer' }}>
                <div className="wm-akpi-icon wm-kpi-coral"><FaEnvelopeOpenText /></div>
                <div className="wm-akpi-info">
                  <span className="wm-akpi-label">Contact Form Messages</span>
                  <strong className="wm-akpi-val">{contactMessagesList.length}</strong>
                  <span className="wm-akpi-growth">Click to read queries</span>
                </div>
              </div>

              <div className="wm-akpi-card" onClick={() => setActiveTab('services')} style={{ cursor: 'pointer' }}>
                <div className="wm-akpi-icon wm-kpi-cyan"><FaCogs /></div>
                <div className="wm-akpi-info">
                  <span className="wm-akpi-label">Active Services</span>
                  <strong className="wm-akpi-val">{servicesList.length}</strong>
                  <span className="wm-akpi-sub">Across 8 Categories</span>
                </div>
              </div>

              <div className="wm-akpi-card" onClick={() => setActiveTab('contact-info')} style={{ cursor: 'pointer' }}>
                <div className="wm-akpi-icon wm-kpi-green"><FaPhoneAlt /></div>
                <div className="wm-akpi-info">
                  <span className="wm-akpi-label">Contact Details</span>
                  <strong className="wm-akpi-val">Configured</strong>
                  <span className="wm-akpi-sub">Phone, Email, Address</span>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation Strip */}
            <div className="wm-adash-quick-strip">
              <div className="wm-quick-banner-text">
                <h3>Direct Inquiries Management</h3>
                <p>Review customer quotation briefs, 28-second callback requests, and direct contact form messages.</p>
              </div>
              <div className="wm-quick-banner-actions">
                <button
                  type="button"
                  className="wm-qbtn-blue"
                  onClick={() => { setActiveTab('inquiries'); setInquirySubTab('enquiry-now'); }}
                >
                  <FaClipboardList /> View Enquiry Now Leads ({enquiryNowList.length})
                </button>
                <button
                  type="button"
                  className="wm-qbtn-coral"
                  onClick={() => { setActiveTab('inquiries'); setInquirySubTab('contact-queries'); }}
                >
                  <FaEnvelopeOpenText /> View Contact Messages ({contactMessagesList.length})
                </button>
                <button
                  type="button"
                  className="wm-qbtn-green"
                  onClick={() => setActiveTab('contact-info')}
                >
                  <FaPhoneAlt /> Edit Contact Info Settings
                </button>
              </div>
            </div>

            {/* Recent Leads Preview */}
            <div className="wm-adash-table-card">
              <div className="wm-table-card-header">
                <h3>Latest Inbound Leads (Combined)</h3>
                <button
                  type="button"
                  className="wm-table-view-all-btn"
                  onClick={() => setActiveTab('enquiry-now')}
                >
                  View Full Inquiries Hub &rarr;
                </button>
              </div>
              <div className="wm-table-responsive">
                <table className="wm-admin-table">
                  <thead>
                    <tr>
                      <th>Prospect Name</th>
                      <th>Contact Number</th>
                      <th>Service Interest</th>
                      <th>Source Type</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiryNowList.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '36px 16px', color: '#64748b' }}>
                          No inquiries received yet. New inquiries submitted through website forms will appear here.
                        </td>
                      </tr>
                    ) : (
                      enquiryNowList.slice(0, 4).map((inq) => (
                        <tr key={inq.id}>
                          <td><strong>{inq.name}</strong></td>
                          <td><a href={`tel:${inq.phone}`} className="wm-text-phone">{inq.phone}</a></td>
                          <td>{inq.service}</td>
                          <td><span className="wm-source-tag">{inq.source}</span></td>
                          <td>{inq.date}</td>
                          <td>
                            <span className={`wm-status-pill ${inq.status.toLowerCase().replace(/[^a-z]/g, '')}`}>
                              {inq.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}



        {/* =========================================================================
            TAB 3: MANAGE BLOGS (CONNECTED TO MONGODB & RICH TEXT EDITOR)
           ========================================================================= */}
        {activeTab === 'blogs' && (
          <div className="wm-adash-tab-view">
            <div className="wm-adash-section-header">
              <div>
                <h2>Blog Publications & Knowledge Hub</h2>
                <p>Publish fresh technology articles with rich text formatting, manage SEO metadata, and track article reads directly in MongoDB.</p>
              </div>
              <button
                type="button"
                className="wm-abtn-create-blog"
                onClick={handleOpenCreateBlog}
              >
                <FaPlus /> Write New Article
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="wm-adash-filter-bar">
              <div className="wm-adash-search-box">
                <FaSearch className="wm-adash-search-icon" />
                <input
                  type="text"
                  placeholder="Search articles by title, keywords, or author..."
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                />
                {blogSearch && (
                  <button
                    type="button"
                    className="wm-clear-search-btn"
                    onClick={() => setBlogSearch('')}
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <div className="wm-adash-filter-group">
                <select
                  value={blogCategoryFilter}
                  onChange={(e) => setBlogCategoryFilter(e.target.value)}
                  className="wm-adash-select"
                >
                  <option value="all">All Categories ({blogList.length})</option>
                  <option value="Web Tech">Web Tech</option>
                  <option value="SEO Insights">SEO Insights</option>
                  <option value="PPC & Ads">PPC & Ads</option>
                  <option value="App Strategy">App Strategy</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Video & Social">Video & Social</option>
                  <option value="Digital Strategy">Digital Strategy</option>
                </select>

                <button
                  type="button"
                  className="wm-btn-refresh"
                  onClick={fetchBlogsFromDB}
                  title="Reload from Database"
                >
                  <FaUndoAlt /> Refresh
                </button>
              </div>
            </div>

            {/* Blogs Table */}
            <div className="wm-adash-table-card">
              <div className="wm-table-responsive">
                <table className="wm-admin-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '260px' }}>Article Details</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Date</th>
                      <th>SEO Status</th>
                      <th>Views</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'center' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogsLoading ? (
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '40px' }}>
                          <FaSpinner className="wm-spinner-icon" /> Loading articles from database...
                        </td>
                      </tr>
                    ) : blogList.filter((b) => {
                        const q = blogSearch.toLowerCase();
                        const matchesQ =
                          (b.title && b.title.toLowerCase().includes(q)) ||
                          (b.category && b.category.toLowerCase().includes(q)) ||
                          (b.author && b.author.toLowerCase().includes(q)) ||
                          (b.seoKeywords && b.seoKeywords.toLowerCase().includes(q));
                        const matchesCat =
                          blogCategoryFilter === 'all' || b.category === blogCategoryFilter;
                        return matchesQ && matchesCat;
                      }).length === 0 ? (
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                          No articles found matching your criteria. Click "+ Write New Article" to publish your first post!
                        </td>
                      </tr>
                    ) : (
                      blogList
                        .filter((b) => {
                          const q = blogSearch.toLowerCase();
                          const matchesQ =
                            (b.title && b.title.toLowerCase().includes(q)) ||
                            (b.category && b.category.toLowerCase().includes(q)) ||
                            (b.author && b.author.toLowerCase().includes(q)) ||
                            (b.seoKeywords && b.seoKeywords.toLowerCase().includes(q));
                          const matchesCat =
                            blogCategoryFilter === 'all' || b.category === blogCategoryFilter;
                          return matchesQ && matchesCat;
                        })
                        .map((blog) => {
                          const blogKey = blog._id || blog.id || blog.slug;
                          const hasSeo = blog.seoTitle && blog.seoDescription;
                          return (
                            <tr key={blogKey}>
                              <td>
                                <div className="wm-blog-td-title">
                                  {blog.image && (
                                    <img
                                      src={blog.image}
                                      alt={blog.title}
                                      className="wm-blog-thumb"
                                      onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                  )}
                                  <div>
                                    <strong>{blog.title}</strong>
                                    <div className="wm-blog-slug-preview">
                                      <span>/blogs/{blog.slug}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="wm-cat-badge">{blog.category || 'General'}</span>
                              </td>
                              <td>
                                <div>{blog.author || 'Web Mok'}</div>
                                <small style={{ color: '#94a3b8' }}>{blog.readTime || '5 min'}</small>
                              </td>
                              <td>
                                {blog.createdAt
                                  ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })
                                  : blog.date || 'Recent'}
                              </td>
                              <td>
                                {hasSeo ? (
                                  <span className="wm-seo-badge wm-seo-pass" title="SEO Title & Description Configured">
                                    <FaCheckCircle /> SEO Ready
                                  </span>
                                ) : (
                                  <span className="wm-seo-badge wm-seo-warn" title="SEO fields need optimization">
                                    Needs SEO
                                  </span>
                                )}
                              </td>
                              <td>
                                <strong>{blog.views || 0}</strong>
                              </td>
                              <td>
                                <span
                                  className={
                                    'wm-status-pill ' +
                                    (blog.status === 'Draft' ? 'wm-status-draft' : 'wm-status-published')
                                  }
                                >
                                  {blog.status || 'Published'}
                                </span>
                              </td>
                              <td>
                                <div className="wm-blog-action-buttons">
                                  <button
                                    type="button"
                                    className="wm-action-edit-btn"
                                    onClick={() => handleOpenEditBlog(blog)}
                                    title="Edit Article & SEO"
                                  >
                                    <FaEdit /> Edit
                                  </button>
                                  <a
                                    href={`/blogs/${blog.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wm-action-view-btn"
                                    title="Preview on Live Website"
                                  >
                                    <FaExternalLinkAlt />
                                  </a>
                                  <button
                                    type="button"
                                    className="wm-action-del-btn"
                                    onClick={() => handleDeleteBlog(blog._id || blog.id)}
                                    title="Delete Article"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: UNIFIED INQUIRIES HUB (Enquiry Now Leads & Contact Form Messages)
           ========================================================================= */}
        {(activeTab === 'inquiries' || activeTab === 'enquiry-now' || activeTab === 'contact-queries') && (
          <div className="wm-adash-tab-view">
            <div className="wm-adash-section-header">
              <div>
                <h2>Client Inquiries Hub</h2>
                <p>Manage all prospect quotation leads and contact messages saved in your MongoDB database.</p>
              </div>
            </div>

            {/* 2 TOGGLE BUTTONS INSIDE THE INQUIRIES PAGE (REQUESTED BY USER) */}
            <div className="wm-inquiry-toggle-bar">
              <button
                type="button"
                className={`wm-inquiry-tab-btn ${inquirySubTab === 'enquiry-now' ? 'active' : ''}`}
                onClick={() => setInquirySubTab('enquiry-now')}
              >
                <FaClipboardList />
                <span>Enquiry Now Submissions ({enquiryNowList.length})</span>
              </button>

              <button
                type="button"
                className={`wm-inquiry-tab-btn ${inquirySubTab === 'contact-queries' ? 'active' : ''}`}
                onClick={() => setInquirySubTab('contact-queries')}
              >
                <FaEnvelopeOpenText />
                <span>Contact Form Inquiries ({contactMessagesList.length})</span>
              </button>
            </div>

            {/* SUB-VIEW 1: ENQUIRY NOW SUBMISSIONS */}
            {inquirySubTab === 'enquiry-now' && (
              <>
                {/* Search & Counter Bar */}
                <div className="wm-inquiry-action-bar">
                  <div className="wm-inquiry-search-wrap">
                    <FaSearch className="wm-isearch-icon" />
                    <input
                      type="text"
                      placeholder="Search by client name, email, phone, or service..."
                      value={inquirySearch}
                      onChange={(e) => setInquirySearch(e.target.value)}
                    />
                  </div>
                  <div className="wm-inquiry-counter-badge">
                    Showing <strong>{enquiryNowList.filter(i => i.name.toLowerCase().includes(inquirySearch.toLowerCase()) || i.phone.includes(inquirySearch) || i.service.toLowerCase().includes(inquirySearch.toLowerCase())).length}</strong> Enquiry Leads
                  </div>
                </div>

                <div className="wm-adash-table-card">
                  <div className="wm-table-responsive">
                    <table className="wm-admin-table">
                      <thead>
                        <tr>
                          <th>Prospect Name</th>
                          <th>Phone & Email</th>
                          <th>Interested Service</th>
                          <th>Source Type</th>
                          <th>Date Received</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {enquiryNowList.filter(i =>
                          i.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                          i.phone.includes(inquirySearch) ||
                          i.service.toLowerCase().includes(inquirySearch.toLowerCase())
                        ).length === 0 ? (
                          <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '48px 20px', color: '#64748b' }}>
                              <div style={{ fontSize: '15px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>No Enquiry Submissions Yet</div>
                              <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>Customer enquiries submitted via website modals and callback forms will appear here in real-time.</p>
                            </td>
                          </tr>
                        ) : (
                          enquiryNowList
                            .filter(i =>
                              i.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                              i.phone.includes(inquirySearch) ||
                              i.service.toLowerCase().includes(inquirySearch.toLowerCase())
                            )
                            .map((inq) => (
                              <tr key={inq.id}>
                                <td>
                                  <strong>{inq.name}</strong>
                                </td>
                                <td>
                                  <div>
                                    <a href={`tel:${inq.phone}`} className="wm-text-phone">
                                      <FaPhoneAlt style={{ fontSize: '10px', marginRight: '4px' }} /> {inq.phone}
                                    </a>
                                  </div>
                                  <small className="wm-text-muted">{inq.email}</small>
                                </td>
                                <td>
                                  <strong>{inq.service}</strong>
                                </td>
                                <td>
                                  <span className="wm-source-tag">{inq.source}</span>
                                </td>
                                <td>{inq.date}</td>
                                <td>
                                  <select
                                    className={`wm-status-select ${inq.status.toLowerCase().replace(/[^a-z]/g, '')}`}
                                    value={inq.status}
                                    onChange={(e) => handleUpdateEnquiryStatus(inq.id, e.target.value)}
                                  >
                                    <option value="New">New</option>
                                    <option value="Callback Connected">Callback Connected</option>
                                    <option value="In Discussion">In Discussion</option>
                                    <option value="Proposal Sent">Proposal Sent</option>
                                    <option value="Closed / Won">Closed / Won</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="wm-table-action-btns">
                                    <button
                                      type="button"
                                      className="wm-action-view-btn"
                                      onClick={() => setSelectedInquiry({ ...inq, type: 'enquiry' })}
                                      title="View Full Prospect Details"
                                    >
                                      <FaEye />
                                    </button>
                                    <button
                                      type="button"
                                      className="wm-action-del-btn"
                                      onClick={() => handleDeleteEnquiry(inq.id)}
                                      title="Delete Record from Database"
                                    >
                                      <FaTrash />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* SUB-VIEW 2: CONTACT FORM INQUIRIES */}
            {inquirySubTab === 'contact-queries' && (
              <>
                {/* Search Bar */}
                <div className="wm-inquiry-action-bar">
                  <div className="wm-inquiry-search-wrap">
                    <FaSearch className="wm-isearch-icon" />
                    <input
                      type="text"
                      placeholder="Search contact messages by name, email, or message keyword..."
                      value={inquirySearch}
                      onChange={(e) => setInquirySearch(e.target.value)}
                    />
                  </div>
                  <div className="wm-inquiry-counter-badge">
                    Showing <strong>{contactMessagesList.filter(c => c.name.toLowerCase().includes(inquirySearch.toLowerCase()) || c.email.toLowerCase().includes(inquirySearch.toLowerCase()) || c.subject.toLowerCase().includes(inquirySearch.toLowerCase())).length}</strong> Contact Messages
                  </div>
                </div>

                <div className="wm-adash-table-card">
                  <div className="wm-table-responsive">
                    <table className="wm-admin-table">
                      <thead>
                        <tr>
                          <th>Sender Name</th>
                          <th>Email & Phone</th>
                          <th>Project Subject</th>
                          <th>Message Brief</th>
                          <th>Received On</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactMessagesList.filter(c =>
                          c.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                          c.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                          c.subject.toLowerCase().includes(inquirySearch.toLowerCase())
                        ).length === 0 ? (
                          <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '48px 20px', color: '#64748b' }}>
                              <div style={{ fontSize: '15px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>No Contact Form Messages Yet</div>
                              <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>Customer inquiries sent from the Contact Us page will appear here in real-time.</p>
                            </td>
                          </tr>
                        ) : (
                          contactMessagesList
                            .filter(c =>
                              c.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                              c.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                              c.subject.toLowerCase().includes(inquirySearch.toLowerCase())
                            )
                            .map((cMsg) => (
                              <tr key={cMsg.id}>
                                <td><strong>{cMsg.name}</strong></td>
                                <td>
                                  <div><a href={`mailto:${cMsg.email}`} className="wm-text-phone">{cMsg.email}</a></div>
                                  <small className="wm-text-muted">{cMsg.phone}</small>
                                </td>
                                <td><strong>{cMsg.subject}</strong></td>
                                <td>
                                  <p className="wm-table-msg-excerpt" title={cMsg.message}>
                                    {cMsg.message}
                                  </p>
                                </td>
                                <td>{cMsg.date}</td>
                                <td>
                                  <select
                                    className={`wm-status-select ${cMsg.status.toLowerCase().replace(/[^a-z]/g, '')}`}
                                    value={cMsg.status}
                                    onChange={(e) => handleUpdateContactMessageStatus(cMsg.id, e.target.value)}
                                  >
                                    <option value="New">New</option>
                                    <option value="In Review">In Review</option>
                                    <option value="Replied">Replied</option>
                                    <option value="Closed">Closed</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="wm-table-action-btns">
                                    <button
                                      type="button"
                                      className="wm-action-view-btn"
                                      onClick={() => setSelectedInquiry({ ...cMsg, type: 'contact' })}
                                      title="Read Full Message"
                                    >
                                      <FaEye />
                                    </button>
                                    <button
                                      type="button"
                                      className="wm-action-del-btn"
                                      onClick={() => handleDeleteContactMessage(cMsg.id)}
                                      title="Delete Message from Database"
                                    >
                                      <FaTrash />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 6: CONTACT INFO SETTINGS (REQUESTED FEATURE 3)
           ========================================================================= */}
        {activeTab === 'contact-info' && (
          <div className="wm-adash-tab-view">
            <div className="wm-adash-section-header">
              <div>
                <h2>Contact Information & Company Details</h2>
                <p>
                  Update company phone numbers, email addresses, office locations, and working hours.
                  Changes immediately persist and reflect on the public Contact Us page!
                </p>
              </div>
            </div>

            {contactSavedSuccess && (
              <div className="wm-contact-save-alert">
                <FaCheckCircle className="wm-alert-check-icon" />
                <div>
                  <strong>Contact Information Successfully Saved!</strong>
                  <p>Your changes have been updated and stored for the website.</p>
                </div>
              </div>
            )}

            <div className="wm-csettings-layout">
              {/* Left Column: Form Editor */}
              <div className="wm-csettings-form-card">
                <h3 className="wm-csettings-heading">
                  <FaEdit /> Edit Company Contact Data
                </h3>

                <form onSubmit={handleUpdateContactSettings} className="wm-csettings-form">
                  <div className="wm-csettings-row">
                    <div className="wm-csfield">
                      <label>
                        <FaPhoneAlt className="wm-csfield-icon" /> Primary Helpline Phone *
                      </label>
                      <input
                        type="text"
                        value={contactSettings.phonePrimary}
                        onChange={(e) => setContactSettings({ ...contactSettings, phonePrimary: e.target.value })}
                        placeholder="e.g. 8684031003"
                        required
                      />
                    </div>

                    <div className="wm-csfield">
                      <label>
                        <FaPhoneAlt className="wm-csfield-icon" /> Secondary / Direct Phone
                      </label>
                      <input
                        type="text"
                        value={contactSettings.phoneSecondary}
                        onChange={(e) => setContactSettings({ ...contactSettings, phoneSecondary: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="wm-csettings-row">
                    <div className="wm-csfield">
                      <label>
                        <FaEnvelope className="wm-csfield-icon" /> Primary Inquiries Email *
                      </label>
                      <input
                        type="email"
                        value={contactSettings.emailPrimary}
                        onChange={(e) => setContactSettings({ ...contactSettings, emailPrimary: e.target.value })}
                        placeholder="e.g. info@webmok.in"
                        required
                      />
                    </div>

                    <div className="wm-csfield">
                      <label>
                        <FaEnvelope className="wm-csfield-icon" /> Support & Operations Email
                      </label>
                      <input
                        type="email"
                        value={contactSettings.emailSupport}
                        onChange={(e) => setContactSettings({ ...contactSettings, emailSupport: e.target.value })}
                        placeholder="e.g. support@webmok.in"
                      />
                    </div>
                  </div>

                  <div className="wm-csfield">
                    <label>
                      <FaMapMarkerAlt className="wm-csfield-icon" /> Head Office Physical Address *
                    </label>
                    <textarea
                      rows="3"
                      value={contactSettings.address}
                      onChange={(e) => setContactSettings({ ...contactSettings, address: e.target.value })}
                      placeholder="e.g. 2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)"
                      required
                    ></textarea>
                  </div>

                  <div className="wm-csettings-row">
                    <div className="wm-csfield">
                      <label>
                        <FaClock className="wm-csfield-icon" /> Business / Operating Hours *
                      </label>
                      <input
                        type="text"
                        value={contactSettings.workingHours}
                        onChange={(e) => setContactSettings({ ...contactSettings, workingHours: e.target.value })}
                        placeholder="e.g. Monday - Saturday: 9:30 AM to 7:00 PM"
                        required
                      />
                    </div>

                    <div className="wm-csfield">
                      <label>
                        <FaWhatsapp className="wm-csfield-icon" /> WhatsApp Priority Chat Number
                      </label>
                      <input
                        type="text"
                        value={contactSettings.whatsapp}
                        onChange={(e) => setContactSettings({ ...contactSettings, whatsapp: e.target.value })}
                        placeholder="e.g. 8684031003"
                      />
                    </div>
                  </div>

                  <div className="wm-csettings-actions">
                    <button type="submit" className="wm-csbtn-save">
                      <FaSave /> Save & Apply Contact Changes
                    </button>
                    <button type="button" className="wm-csbtn-reset" onClick={handleResetContactSettings}>
                      <FaUndoAlt /> Restore Defaults
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Website Preview */}
              <div className="wm-csettings-preview-card">
                <div className="wm-cpreview-header">
                  <span className="wm-cpreview-badge">Live Public Preview</span>
                  <h4>How Visitors Will See Your Contact Info</h4>
                </div>

                <div className="wm-cpreview-item">
                  <div className="wm-cpreview-icon-wrap"><FaPhoneAlt /></div>
                  <div>
                    <span className="wm-cpreview-label">Phone Helplines</span>
                    <strong>{contactSettings.phonePrimary}</strong>
                    {contactSettings.phoneSecondary && <small>{contactSettings.phoneSecondary}</small>}
                  </div>
                </div>

                <div className="wm-cpreview-item">
                  <div className="wm-cpreview-icon-wrap"><FaEnvelope /></div>
                  <div>
                    <span className="wm-cpreview-label">Email Channels</span>
                    <strong>{contactSettings.emailPrimary}</strong>
                    {contactSettings.emailSupport && <small>{contactSettings.emailSupport}</small>}
                  </div>
                </div>

                <div className="wm-cpreview-item">
                  <div className="wm-cpreview-icon-wrap"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="wm-cpreview-label">Registered Delhi NCR Office</span>
                    <p>{contactSettings.address}</p>
                  </div>
                </div>

                <div className="wm-cpreview-item">
                  <div className="wm-cpreview-icon-wrap"><FaClock /></div>
                  <div>
                    <span className="wm-cpreview-label">Official Business Hours</span>
                    <p>{contactSettings.workingHours}</p>
                  </div>
                </div>

                <div className="wm-cpreview-note">
                  <FaCheckCircle className="wm-cpreview-note-icon" />
                  <span>These values are automatically synchronized with public contact cards and footer components.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB: OUTSTANDING SECTION (HOME PAGE TABS & MEDIA)
           ========================================================================= */}
        {activeTab === 'outstanding' && (
          <div className="wm-adash-tab-view">
            <div className="wm-adash-section-header">
              <div>
                <h2>Manage Outstanding Section (Home Page)</h2>
                <p>
                  Tabs-wise customizable content and Image / Video uploads. Customize each tab's heading,
                  description, 3 key bullet points, and choose between the default vector graph, or upload a custom image or video!
                </p>
              </div>
              <div className="wm-out-header-actions">
                <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetOutstandingDefaults}
                  disabled={outstandingLoading}
                  title="Reset all tabs to default copy & mock graph"
                >
                  <FaUndoAlt /> Reset All Defaults
                </button>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-out-btn-view-site"
                >
                  <FaExternalLinkAlt /> View Live Section
                </a>
              </div>
            </div>

            {outstandingFeedback && (
              <div className={`wm-out-alert ${outstandingFeedback.type === 'error' ? 'wm-out-alert-error' : 'wm-out-alert-success'}`}>
                {outstandingFeedback.type === 'error' ? <FaTimes /> : <FaCheckCircle />}
                <span>{outstandingFeedback.message}</span>
              </div>
            )}

            {/* 6 Tabs Sub-Nav Pills */}
            <div className="wm-out-subtabs-bar">
              {outstandingTabs.map((tab) => {
                const isActive = activeOutstandingKey === tab.tabKey;
                const hasImage = tab.mediaType === 'image' && tab.mediaUrl;
                const hasVideo = tab.mediaType === 'video' && tab.mediaUrl;
                return (
                  <button
                    key={tab.tabKey}
                    type="button"
                    className={`wm-out-subtab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveOutstandingKey(tab.tabKey)}
                  >
                    <div className="wm-out-subtab-top">
                      <span className="wm-out-subtab-num">{tab.tabNumber || '01'}</span>
                      <span className="wm-out-subtab-icon">{renderTabIcon(tab.tabKey)}</span>
                    </div>
                    <span className="wm-out-subtab-title">{tab.tabTitle}</span>
                    <span className={`wm-out-subtab-pill ${hasImage ? 'pill-image' : hasVideo ? 'pill-video' : 'pill-graph'}`}>
                      {hasImage ? '📷 Image' : hasVideo ? '🎬 Video' : '📊 Graph'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Manager Grid (Form on Left, Live Preview on Right) */}
            <div className="wm-out-manager-grid">
              {/* Left Column: Form Editor */}
              <div className="wm-out-editor-col">
                <form onSubmit={handleSaveOutstandingTab} className="wm-out-form">
                  {/* Card 1: Core Content */}
                  <div className="wm-out-card">
                    <div className="wm-out-card-header">
                      <div className="wm-out-card-badge">Tab {currentOutstandingTab.tabNumber || '01'}</div>
                      <h3><FaEdit /> Tab Copy & Headings</h3>
                    </div>

                    <div className="wm-out-fields-grid">
                      <div className="wm-csfield">
                        <label>Tab Button Label</label>
                        <input
                          type="text"
                          value={currentOutstandingTab.tabTitle || ''}
                          onChange={(e) => handleUpdateCurrentTabField('tabTitle', e.target.value)}
                          placeholder="e.g. Real-Time Analytics"
                          required
                        />
                      </div>

                      <div className="wm-csfield">
                        <label>Right Badge Text</label>
                        <input
                          type="text"
                          value={currentOutstandingTab.mediaBadgeText || ''}
                          onChange={(e) => handleUpdateCurrentTabField('mediaBadgeText', e.target.value)}
                          placeholder="e.g. Active Growth Module"
                        />
                      </div>
                    </div>

                    <div className="wm-csfield">
                      <label>Main Section Heading *</label>
                      <input
                        type="text"
                        value={currentOutstandingTab.heading || ''}
                        onChange={(e) => handleUpdateCurrentTabField('heading', e.target.value)}
                        placeholder="e.g. Real-Time Analytics & BI"
                        required
                      />
                    </div>

                    <div className="wm-csfield">
                      <label>Main Description *</label>
                      <textarea
                        rows={3}
                        value={currentOutstandingTab.description || ''}
                        onChange={(e) => handleUpdateCurrentTabField('description', e.target.value)}
                        placeholder="Detailed description of this feature or service..."
                        required
                      />
                    </div>
                  </div>

                  {/* Card 2: 3 Key Feature Points */}
                  <div className="wm-out-card">
                    <div className="wm-out-card-header">
                      <h3><FaCheckCircle /> 3 Key Feature Points</h3>
                    </div>

                    {[0, 1, 2].map((idx) => {
                      const point = (currentOutstandingTab.points && currentOutstandingTab.points[idx]) || { title: '', text: '' };
                      return (
                        <div key={idx} className="wm-out-point-block">
                          <div className="wm-out-point-num-tag">Point #{idx + 1}</div>
                          <div className="wm-csfield">
                            <label>Point Title</label>
                            <input
                              type="text"
                              value={point.title || ''}
                              onChange={(e) => handleUpdateCurrentTabPoint(idx, 'title', e.target.value)}
                              placeholder={`Feature ${idx + 1} Title`}
                            />
                          </div>
                          <div className="wm-csfield">
                            <label>Point Description</label>
                            <textarea
                              rows={2}
                              value={point.text || ''}
                              onChange={(e) => handleUpdateCurrentTabPoint(idx, 'text', e.target.value)}
                              placeholder={`Feature ${idx + 1} Description`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card 3: Media Upload & Type Configuration */}
                  <div className="wm-out-card">
                    <div className="wm-out-card-header">
                      <h3><FaImage /> Tab Media (Image, Video, or SVG Graph)</h3>
                    </div>

                    <p className="wm-out-card-help">
                      Choose what to display on the right side of this tab on the Home page.
                      You can keep the interactive default graph, or upload a custom image or video.
                    </p>

                    {/* Media Type Selector Pills */}
                    <div className="wm-out-media-selector">
                      <button
                        type="button"
                        className={`wm-out-media-choice ${currentOutstandingTab.mediaType === 'graph' ? 'active' : ''}`}
                        onClick={() => handleUpdateCurrentTabField('mediaType', 'graph')}
                      >
                        <FaChartLine />
                        <div>
                          <strong>Default SVG Graph</strong>
                          <small>Interactive vector mockup</small>
                        </div>
                      </button>

                      <button
                        type="button"
                        className={`wm-out-media-choice ${currentOutstandingTab.mediaType === 'image' ? 'active' : ''}`}
                        onClick={() => handleUpdateCurrentTabField('mediaType', 'image')}
                      >
                        <FaImage />
                        <div>
                          <strong>Custom Image</strong>
                          <small>JPG, PNG, WEBP, SVG</small>
                        </div>
                      </button>

                      <button
                        type="button"
                        className={`wm-out-media-choice ${currentOutstandingTab.mediaType === 'video' ? 'active' : ''}`}
                        onClick={() => handleUpdateCurrentTabField('mediaType', 'video')}
                      >
                        <FaVideo />
                        <div>
                          <strong>Custom Video</strong>
                          <small>MP4, WebM, MOV</small>
                        </div>
                      </button>
                    </div>

                    {/* File Upload / URL Area if Image or Video selected */}
                    {currentOutstandingTab.mediaType !== 'graph' && (
                      <div className="wm-out-upload-box">
                        <label className="wm-out-file-dropzone">
                          <input
                            type="file"
                            accept={currentOutstandingTab.mediaType === 'video' ? 'video/mp4,video/webm,video/ogg,video/quicktime' : 'image/*'}
                            onChange={handleOutstandingFileUpload}
                            disabled={outstandingUploading}
                          />
                          <div className="wm-out-dropzone-inner">
                            {outstandingUploading ? (
                              <>
                                <FaSpinner className="wm-spin wm-upload-spin-icon" />
                                <strong>Uploading {currentOutstandingTab.mediaType}...</strong>
                                <small>Saving to server uploads folder...</small>
                              </>
                            ) : (
                              <>
                                <FaUpload className="wm-upload-cloud-icon" />
                                <strong>
                                  Click or Drag & Drop {currentOutstandingTab.mediaType === 'video' ? 'a Video (MP4, WebM)' : 'an Image (PNG, JPG, WebP)'} here
                                </strong>
                                <small>Max file size 100MB • Automatically saved in /uploads/outstanding/</small>
                              </>
                            )}
                          </div>
                        </label>

                        {/* Direct URL input alternative */}
                        <div className="wm-csfield wm-out-url-field">
                          <label>Or Media URL (Server Path or External Link):</label>
                          <input
                            type="text"
                            value={currentOutstandingTab.mediaUrl || ''}
                            onChange={(e) => handleUpdateCurrentTabField('mediaUrl', e.target.value)}
                            placeholder={currentOutstandingTab.mediaType === 'video' ? 'e.g. /uploads/outstanding/...mp4 or https://...' : 'e.g. /uploads/outstanding/...png or https://...'}
                          />
                        </div>

                        {currentOutstandingTab.mediaUrl && (
                          <div className="wm-out-media-attached-bar">
                            <div className="wm-out-attached-info">
                              <span className="wm-out-dot-active"></span>
                              <span>Attached: <code>{currentOutstandingTab.mediaUrl}</code></span>
                            </div>
                            <button
                              type="button"
                              className="wm-out-btn-clear-media"
                              onClick={() => {
                                handleUpdateCurrentTabField('mediaUrl', '');
                                handleUpdateCurrentTabField('mediaType', 'graph');
                              }}
                            >
                              <FaTrash /> Remove Media (Revert to Graph)
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Form Submit Bar */}
                  <div className="wm-out-form-submit-bar">
                    <button
                      type="submit"
                      className="wm-out-btn-save"
                      disabled={outstandingSaving || outstandingUploading}
                    >
                      {outstandingSaving ? (
                        <>
                          <FaSpinner className="wm-spin" /> Saving Tab Changes...
                        </>
                      ) : (
                        <>
                          <FaSave /> Save Tab "{currentOutstandingTab.tabTitle}"
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Card & Frame Preview */}
              <div className="wm-out-preview-col">
                <div className="wm-out-preview-sticky">
                  <div className="wm-out-preview-badge-header">
                    <span className="wm-pulsing-dot"></span>
                    <span>Live Preview: {currentOutstandingTab.tabTitle}</span>
                  </div>

                  {/* The Preview Frame mimicking Home page */}
                  <div className="wm-tab-illustration-container">
                    <div className="wm-tab-illustration-badge">
                      <span className="wm-pulsing-dot"></span> {currentOutstandingTab.mediaBadgeText || 'Active Growth Module'}
                    </div>

                    {currentOutstandingTab.mediaType === 'image' && currentOutstandingTab.mediaUrl ? (
                      <div className="wm-tab-media-frame">
                        <img
                          src={getMediaUrl(currentOutstandingTab.mediaUrl)}
                          alt={currentOutstandingTab.heading}
                          className="wm-tab-uploaded-img"
                        />
                      </div>
                    ) : currentOutstandingTab.mediaType === 'video' && currentOutstandingTab.mediaUrl ? (
                      <div className="wm-tab-media-frame">
                        <video
                          src={getMediaUrl(currentOutstandingTab.mediaUrl)}
                          controls
                          className="wm-tab-uploaded-video"
                        />
                      </div>
                    ) : (
                      <div className="wm-tab-vector-art">
                        <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="wm-tab-svg">
                          <rect x="20" y="20" width="460" height="340" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
                          <rect x="40" y="40" width="420" height="40" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                          <circle cx="60" cy="60" r="6" fill="#ff5e3a" />
                          <circle cx="80" cy="60" r="6" fill="#f59e0b" />
                          <circle cx="100" cy="60" r="6" fill="#10b981" />
                          <rect x="130" y="52" width="180" height="16" rx="4" fill="#f1f5f9"/>

                          <rect x="40" y="100" width="260" height="150" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                          <path d="M60 210 L100 170 L140 190 L180 130 L220 150 L270 120" stroke="#0b4f8a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="270" cy="120" r="6" fill="#00a8cc" />

                          <rect x="320" y="100" width="140" height="150" rx="12" fill="#0b4f8a" />
                          <circle cx="390" cy="150" r="35" stroke="#ffffff" strokeWidth="8" strokeDasharray="140 60" />
                          <text x="390" y="155" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">92%</text>
                          <text x="390" y="220" textAnchor="middle" fill="#ffffff" fontSize="12">Conversion Lift</text>

                          <rect x="40" y="270" width="420" height="70" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                          <rect x="60" y="295" width="100" height="18" rx="4" fill="#ff5e3a" opacity="0.85"/>
                          <rect x="180" y="295" width="130" height="18" rx="4" fill="#00a8cc" opacity="0.85"/>
                          <rect x="330" y="295" width="110" height="18" rx="4" fill="#0d2f57" opacity="0.85"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content Preview */}
                  <div className="wm-out-preview-content-box">
                    <h4 className="wm-out-preview-heading">{currentOutstandingTab.heading || 'Heading'}</h4>
                    <p className="wm-out-preview-desc">{currentOutstandingTab.description || 'Description...'}</p>

                    <div className="wm-out-preview-points">
                      {(currentOutstandingTab.points || []).map((pt, i) => (
                        <div key={i} className="wm-out-preview-point-row">
                          <div className="wm-tab-check-circle"><FaCheck /></div>
                          <div>
                            <strong>{pt.title || `Point ${i + 1}`}</strong>
                            <p>{pt.text || 'Point description details...'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6.5: HERO VIDEO MANAGEMENT (Home Page Hero Video Upload & Settings)
           ========================================================================= */}
        {activeTab === 'hero-video' && (
          <div className="wm-adash-tab-view wm-hero-vid-view">
            {/* Tab Header Banner */}
            <div className="wm-adash-section-header">
              <div>
                <h2><FaVideo /> Home Page Hero Video Manager</h2>
                <p>Upload a new custom video file (MP4, WebM, MOV) or manage the hero video displayed on the Home Page.</p>
              </div>
              <div className="wm-out-header-actions">
                <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetHeroVideo}
                  disabled={heroVideoLoading}
                  title="Reset video to default /Home-Hero.mp4"
                >
                  <FaUndoAlt /> Reset to Default Video
                </button>
              </div>
            </div>

            {/* Feedback Message Banner */}
            {heroVideoFeedback && (
              <div className={`wm-out-feedback-banner ${heroVideoFeedback.type === 'success' ? 'wm-feed-success' : 'wm-feed-error'}`}>
                {heroVideoFeedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
                <span>{heroVideoFeedback.message}</span>
              </div>
            )}

            {/* 2-Column Split Workspace */}
            <div className="wm-hero-vid-grid">
              {/* Left Column: Upload Form & Settings */}
              <div className="wm-hero-vid-form-col">
                {/* Card 1: Video File Upload */}
                <div className="wm-out-card">
                  <div className="wm-out-card-header">
                    <h3><FaUpload /> Upload Video File</h3>
                  </div>

                  <p className="wm-out-card-help">
                    Select an MP4, WebM, or MOV video file from your computer. The video will be saved directly into the server's uploads directory and immediately activated on the live website.
                  </p>

                  <label className="wm-out-file-dropzone wm-hero-vid-dropzone">
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg,video/quicktime,video/x-matroska,video/avi"
                      onChange={handleHeroVideoFileUpload}
                      disabled={heroVideoUploading}
                    />
                    <div className="wm-out-dropzone-inner">
                      {heroVideoUploading ? (
                        <>
                          <FaSpinner className="wm-spin wm-upload-spin-icon" />
                          <strong>Uploading Hero Video...</strong>
                          <small>Please wait while the video file is uploading to the server...</small>
                        </>
                      ) : (
                        <>
                          <FaVideo className="wm-upload-cloud-icon" />
                          <strong>Click or Drag & Drop Video File Here</strong>
                          <small>Supported formats: MP4, WebM, MOV, AVI • Max size: 250MB</small>
                        </>
                      )}
                    </div>
                  </label>

                  {/* Current File Metadata Box */}
                  <div className="wm-hero-vid-meta-box">
                    <div className="wm-hero-meta-row">
                      <span className="wm-hero-meta-label">Active Status:</span>
                      <span className={`wm-hero-status-pill ${heroVideoData.isDefault ? 'default' : 'custom'}`}>
                        {heroVideoData.isDefault ? 'Default Built-in Video' : 'Custom Uploaded Video'}
                      </span>
                    </div>

                    <div className="wm-hero-meta-row">
                      <span className="wm-hero-meta-label">Active Video URL:</span>
                      <code className="wm-hero-meta-code">{heroVideoData.videoUrl}</code>
                    </div>

                    {heroVideoData.originalName && (
                      <div className="wm-hero-meta-row">
                        <span className="wm-hero-meta-label">File Name:</span>
                        <strong>{heroVideoData.originalName}</strong>
                      </div>
                    )}

                    {heroVideoData.size > 0 && (
                      <div className="wm-hero-meta-row">
                        <span className="wm-hero-meta-label">File Size:</span>
                        <span>{(heroVideoData.size / (1024 * 1024)).toFixed(2)} MB</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card 2: Manual URL Configuration */}
                <div className="wm-out-card">
                  <div className="wm-out-card-header">
                    <h3><FaGlobe /> Video URL & Title Configuration</h3>
                  </div>

                  <form onSubmit={handleSaveHeroVideoUrl}>
                    <div className="wm-csfield">
                      <label>Video Title / Label:</label>
                      <input
                        type="text"
                        value={heroVideoCustomTitle}
                        onChange={(e) => setHeroVideoCustomTitle(e.target.value)}
                        placeholder="e.g. Web Mok 2026 Brand Reel"
                      />
                    </div>

                    <div className="wm-csfield" style={{ marginTop: '14px' }}>
                      <label>Direct Video URL (or /uploads/hero-video/... path):</label>
                      <input
                        type="text"
                        value={heroVideoCustomUrl}
                        onChange={(e) => setHeroVideoCustomUrl(e.target.value)}
                        placeholder="e.g. /Home-Hero.mp4 or /uploads/hero-video/xyz.mp4 or https://..."
                      />
                    </div>

                    <div style={{ marginTop: '18px', display: 'flex', gap: '10px' }}>
                      <button
                        type="submit"
                        className="wm-out-btn-save"
                        disabled={heroVideoSaving || heroVideoUploading}
                      >
                        {heroVideoSaving ? (
                          <>
                            <FaSpinner className="wm-spin" /> Saving...
                          </>
                        ) : (
                          <>
                            <FaSave /> Save Video Settings
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column: Live Website Preview Frame */}
              <div className="wm-hero-vid-preview-col">
                <div className="wm-out-preview-sticky">
                  <div className="wm-out-preview-badge-header">
                    <span className="wm-pulsing-dot"></span>
                    <span>Live Public Website Preview</span>
                  </div>

                  <div className="wm-hero-live-preview-card">
                    <div className="wm-hero-preview-browser-bar">
                      <span className="wm-cdot wm-cdot-red"></span>
                      <span className="wm-cdot wm-cdot-yellow"></span>
                      <span className="wm-cdot wm-cdot-green"></span>
                      <div className="wm-browser-url-bar">https://webmok.in</div>
                    </div>

                    <div className="wm-hero-preview-video-container">
                      <video
                        key={heroVideoData.videoUrl}
                        src={getMediaUrl(heroVideoData.videoUrl)}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="wm-hero-preview-video-element"
                      />
                    </div>

                    <div className="wm-hero-preview-footer-note">
                      <FaInfoCircle /> This is how the video appears seamlessly in the hero section on desktop & mobile screens.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6.8: MANAGE SERVICES (HOME PAGE "WHAT WE OFFER" & EXPLORE PAGES)
           ========================================================================= */}
        {activeTab === 'services' && (
          <div className="wm-adash-tab-view wm-svc-mgr-view">
            {/* Header */}
            <div className="wm-adash-section-header">
              <div>
                <h2><FaCogs /> Manage Core Services (Home Page & Explore Pages)</h2>
                <p>
                  Manage the services showcased in the Home Page's <strong>"Engineered For Exponential Digital Growth / What We Offer"</strong> section,
                  as well as their individual <strong>Explore Service Detail Pages (`/services/:slug`)</strong>.
                </p>
              </div>
              <div className="wm-out-header-actions">
                <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={() => setIsAddServiceModalOpen(true)}
                  style={{ background: 'linear-gradient(135deg, #0b4f8a, #00a8cc)', color: '#fff', border: 'none' }}
                >
                  <FaPlus /> Add New Service
                </button>
                <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetServicesDefaults}
                  disabled={servicesLoading}
                  title="Reset all services to system defaults"
                >
                  <FaUndoAlt /> Reset Defaults
                </button>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-out-btn-view-site"
                >
                  <FaExternalLinkAlt /> View Home Page
                </a>
              </div>
            </div>

            {/* Feedback alert */}
            {servicesFeedback && (
              <div className={`wm-out-feedback-banner ${servicesFeedback.type === 'success' ? 'wm-feed-success' : 'wm-feed-error'}`}>
                {servicesFeedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
                <span>{servicesFeedback.message}</span>
              </div>
            )}

            {/* Service Selection Tabs Strip */}
            <div className="wm-out-subtabs-bar wm-svc-subtabs-bar">
              {servicesList.map((svc, idx) => {
                const isActive = activeServiceKey === svc.slug || activeServiceKey === svc._id;
                return (
                  <button
                    key={svc.slug || svc._id || idx}
                    type="button"
                    className={`wm-out-subtab-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveServiceKey(svc.slug || svc._id)}
                  >
                    <span className="wm-out-subtab-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="wm-out-subtab-title">{svc.title}</span>
                    <span className="wm-svc-cat-badge">{svc.category}</span>
                  </button>
                );
              })}
            </div>

            {/* 2-Column Split Workspace */}
            <div className="wm-svc-workspace-grid">
              {/* Left Column: Editor Form */}
              <div className="wm-svc-form-col">
                <form onSubmit={handleSaveCurrentService}>
                  {/* Card 1: Home Page Tab Showcase Details */}
                  <div className="wm-out-card">
                    <div className="wm-out-card-header">
                      <h3><FaHome /> 1. Home Page "What We Offer" Section Settings</h3>
                    </div>
                    <p className="wm-out-card-help">
                      Configure the title, metric badge, short description, technology tags, and sub-features displayed on the Home Page interactive tab.
                    </p>

                    <div className="wm-out-fields-grid">
                      <div className="wm-csfield">
                        <label>Service Title *</label>
                        <input
                          type="text"
                          value={currentService.title || ''}
                          onChange={(e) => handleUpdateServiceField('title', e.target.value)}
                          required
                        />
                      </div>

                      <div className="wm-csfield">
                        <label>URL Slug (Route Path: /services/:slug) *</label>
                        <input
                          type="text"
                          value={currentService.slug || ''}
                          onChange={(e) => handleUpdateServiceField('slug', e.target.value)}
                          required
                        />
                      </div>

                      <div className="wm-csfield">
                        <label>Service Category</label>
                        <select
                          value={currentService.category || 'Web Development'}
                          onChange={(e) => handleUpdateServiceField('category', e.target.value)}
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="App Development">App Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="E-Commerce">E-Commerce</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Custom Solution">Custom Solution</option>
                        </select>
                      </div>

                      <div className="wm-csfield">
                        <label>Metric Highlight Badge (e.g. 0.8s Avg Speed)</label>
                        <input
                          type="text"
                          value={currentService.metric || ''}
                          onChange={(e) => handleUpdateServiceField('metric', e.target.value)}
                          placeholder="e.g. 0.8s Avg Speed, 3.4x ROAS, #1 Ranks"
                        />
                      </div>
                    </div>

                    <div className="wm-csfield" style={{ marginTop: '14px' }}>
                      <label>Home Page Short Overview Description *</label>
                      <textarea
                        rows="3"
                        value={currentService.desc || ''}
                        onChange={(e) => handleUpdateServiceField('desc', e.target.value)}
                        placeholder="Brief 1-2 sentence overview shown in the active tab on the home page..."
                        required
                      />
                    </div>

                    {/* Sub-Features List for Home Page */}
                    <div className="wm-svc-subfeat-wrap" style={{ marginTop: '16px' }}>
                      <div className="wm-label-flex">
                        <label>Home Page Sub-Features Checklist (Shown with Check Arrows)</label>
                        <button
                          type="button"
                          className="wm-svc-mini-add-btn"
                          onClick={() => handleAddServiceArrayItem('subFeatures', 'New Feature')}
                        >
                          <FaPlus /> Add Bullet
                        </button>
                      </div>

                      <div className="wm-svc-array-grid">
                        {(currentService.subFeatures || []).map((feat, idx) => (
                          <div key={idx} className="wm-svc-array-item">
                            <input
                              type="text"
                              value={feat}
                              onChange={(e) => handleUpdateServiceArrayItem('subFeatures', idx, e.target.value)}
                              placeholder={`Feature ${idx + 1}`}
                            />
                            <button
                              type="button"
                              className="wm-svc-array-del"
                              onClick={() => handleRemoveServiceArrayItem('subFeatures', idx)}
                              title="Delete Bullet"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="wm-csfield" style={{ marginTop: '16px' }}>
                      <label>Technology / Category Chips (Comma Separated)</label>
                      <input
                        type="text"
                        value={Array.isArray(currentService.tags) ? currentService.tags.join(', ') : (currentService.tags || '')}
                        onChange={(e) => handleUpdateServiceField('tags', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                        placeholder="e.g. React.js, WordPress, Next.js, Custom UI/UX"
                      />
                    </div>
                  </div>

                  {/* Card 2: Explore Page Content & Deliverables */}
                  <div className="wm-out-card">
                    <div className="wm-out-card-header">
                      <h3><FaGlobe /> 2. Explore Detail Page (`/services/{currentService.slug}`) Settings</h3>
                    </div>
                    <p className="wm-out-card-help">
                      Manage the headline, in-depth service overview, key capabilities, tech stack chips, and estimated project timeline for the dedicated explore page.
                    </p>

                    <div className="wm-csfield">
                      <label>Explore Page Main Headline</label>
                      <input
                        type="text"
                        value={currentService.headline || ''}
                        onChange={(e) => handleUpdateServiceField('headline', e.target.value)}
                        placeholder="e.g. Award-Winning UI/UX & Responsive Web Development in India"
                      />
                    </div>

                    <div className="wm-csfield" style={{ marginTop: '14px' }}>
                      <label>In-Depth Service Overview Narrative</label>
                      <textarea
                        rows="4"
                        value={currentService.overview || ''}
                        onChange={(e) => handleUpdateServiceField('overview', e.target.value)}
                        placeholder="Comprehensive service description rendered in the Service Overview card..."
                      />
                    </div>

                    {/* Key Capabilities & Deliverables */}
                    <div className="wm-svc-subfeat-wrap" style={{ marginTop: '16px' }}>
                      <div className="wm-label-flex">
                        <label>Key Capabilities & Deliverables (Checklist on Explore Page)</label>
                        <button
                          type="button"
                          className="wm-svc-mini-add-btn"
                          onClick={() => handleAddServiceArrayItem('features', 'New Deliverable Item')}
                        >
                          <FaPlus /> Add Capability
                        </button>
                      </div>

                      <div className="wm-svc-array-grid">
                        {(currentService.features || []).map((feat, idx) => (
                          <div key={idx} className="wm-svc-array-item">
                            <input
                              type="text"
                              value={feat}
                              onChange={(e) => handleUpdateServiceArrayItem('features', idx, e.target.value)}
                              placeholder={`Deliverable ${idx + 1}`}
                            />
                            <button
                              type="button"
                              className="wm-svc-array-del"
                              onClick={() => handleRemoveServiceArrayItem('features', idx)}
                              title="Delete Item"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="wm-out-fields-grid" style={{ marginTop: '16px' }}>
                      <div className="wm-csfield">
                        <label>Technologies & Tooling (Comma Separated)</label>
                        <input
                          type="text"
                          value={Array.isArray(currentService.techStack) ? currentService.techStack.join(', ') : (currentService.techStack || '')}
                          onChange={(e) => handleUpdateServiceField('techStack', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                          placeholder="e.g. React.js, Next.js, Node.js, GraphQL, Redis"
                        />
                      </div>

                      <div className="wm-csfield">
                        <label>Estimated Project Timeline</label>
                        <input
                          type="text"
                          value={currentService.timeline || ''}
                          onChange={(e) => handleUpdateServiceField('timeline', e.target.value)}
                          placeholder="e.g. 2 to 4 Weeks Delivery"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Frequently Asked Questions (FAQs) */}
                  <div className="wm-out-card">
                    <div className="wm-out-card-header">
                      <h3><FaQuestionCircle /> 3. Frequently Asked Questions (Explore Page FAQs)</h3>
                      <button
                        type="button"
                        className="wm-svc-mini-add-btn"
                        onClick={handleAddServiceFaq}
                      >
                        <FaPlus /> Add FAQ
                      </button>
                    </div>

                    <div className="wm-svc-faq-list">
                      {(currentService.faqs || []).map((faq, fidx) => (
                        <div key={fidx} className="wm-svc-faq-card">
                          <div className="wm-svc-faq-card-hdr">
                            <strong>FAQ #{fidx + 1}</strong>
                            <button
                              type="button"
                              className="wm-svc-array-del"
                              onClick={() => handleRemoveServiceFaq(fidx)}
                            >
                              <FaTrash /> Remove
                            </button>
                          </div>
                          <div className="wm-csfield">
                            <label>Question:</label>
                            <input
                              type="text"
                              value={faq.q || ''}
                              onChange={(e) => handleUpdateServiceFaq(fidx, 'q', e.target.value)}
                              placeholder="e.g. How fast will the website load?"
                            />
                          </div>
                          <div className="wm-csfield" style={{ marginTop: '8px' }}>
                            <label>Answer:</label>
                            <textarea
                              rows="2"
                              value={faq.a || ''}
                              onChange={(e) => handleUpdateServiceFaq(fidx, 'a', e.target.value)}
                              placeholder="e.g. We optimize scripts and caching for sub-second performance..."
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Bar */}
                  <div className="wm-out-form-submit-bar" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button
                      type="submit"
                      className="wm-out-btn-save"
                      disabled={servicesSaving}
                    >
                      {servicesSaving ? (
                        <>
                          <FaSpinner className="wm-spin" /> Saving Service Changes...
                        </>
                      ) : (
                        <>
                          <FaSave /> Save Changes for "{currentService.title}"
                        </>
                      )}
                    </button>

                    {currentService._id && (
                      <button
                        type="button"
                        className="wm-out-btn-reset-all"
                        style={{ color: '#ef4444', borderColor: '#fca5a5' }}
                        onClick={() => handleDeleteService(currentService._id)}
                      >
                        <FaTrash /> Delete Service
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Column: Live Interactive Multi-View Preview */}
              <div className="wm-svc-preview-col">
                <div className="wm-out-preview-sticky">
                  {/* View Mode Toggle */}
                  <div className="wm-svc-preview-toggle">
                    <button
                      type="button"
                      className={`wm-svc-ptab ${servicePreviewTab === 'home' ? 'active' : ''}`}
                      onClick={() => setServicePreviewTab('home')}
                    >
                      <FaHome /> Home Showcase Preview
                    </button>
                    <button
                      type="button"
                      className={`wm-svc-ptab ${servicePreviewTab === 'explore' ? 'active' : ''}`}
                      onClick={() => setServicePreviewTab('explore')}
                    >
                      <FaExternalLinkAlt /> Explore Page Preview
                    </button>
                  </div>

                  {/* 1. HOME SHOWCASE VIEW */}
                  {servicePreviewTab === 'home' && (
                    <div className="wm-svc-live-home-card">
                      <div className="wm-hsvc-panel" style={{ background: '#0b2b4d', color: '#fff', borderRadius: '16px', padding: '24px' }}>
                        <div className="wm-hsvc-panel-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '14px' }}>
                          <div className="wm-hsvc-panel-iconbox" style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(0,168,204,0.2)', color: '#00a8cc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                            <FaLaptopCode />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0, fontSize: '18px', color: '#ffffff', fontWeight: 800 }}>{currentService.title}</h3>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{currentService.category}</span>
                          </div>
                          <span style={{ background: 'rgba(0,168,204,0.15)', color: '#38bdf8', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>
                            {currentService.metric || '0.8s Avg Speed'}
                          </span>
                        </div>

                        <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '16px' }}>
                          {currentService.desc || 'Service description...'}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '16px' }}>
                          {(currentService.subFeatures || []).map((feat, fi) => (
                            <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#e2e8f0' }}>
                              <FaCheckCircle style={{ color: '#00a8cc', flexShrink: 0 }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                          {(currentService.tags || []).map((tag, ti) => (
                            <span key={ti} style={{ background: 'rgba(255,255,255,0.08)', color: '#93c5fd', padding: '3px 8px', borderRadius: '6px', fontSize: '11px' }}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          <button type="button" style={{ background: '#10b981', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>
                            <FaPhoneAlt /> Call Now
                          </button>
                          <button type="button" style={{ background: '#00a8cc', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>
                            Enquiry Now
                          </button>
                          <Link to={`/services/${currentService.slug}`} target="_blank" style={{ background: '#ffffff', color: '#0b4f8a', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            Explore Service <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. EXPLORE PAGE VIEW */}
                  {servicePreviewTab === 'explore' && (
                    <div className="wm-svc-live-explore-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                      <div style={{ background: '#0b2b4d', color: '#fff', padding: '20px' }}>
                        <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#38bdf8', fontWeight: 700 }}>{currentService.tag || currentService.category}</span>
                        <h3 style={{ margin: '6px 0', fontSize: '18px', fontWeight: 800 }}>{currentService.title}</h3>
                        <p style={{ margin: 0, fontSize: '12.5px', color: '#cbd5e1' }}>{currentService.headline}</p>
                      </div>

                      <div style={{ padding: '18px' }}>
                        <h4 style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#0d2f57' }}>Service Overview</h4>
                        <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.5, margin: '0 0 14px 0' }}>{currentService.overview}</p>

                        <h4 style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#0d2f57' }}>Key Deliverables</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                          {(currentService.features || []).map((feat, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#334155' }}>
                              <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                          <span>Timeline: <strong>{currentService.timeline || '2 to 4 Weeks'}</strong></span>
                          <span>FAQs: <strong>{(currentService.faqs || []).length} Question(s)</strong></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal: Add New Service */}
            {isAddServiceModalOpen && (
              <div className="wm-inq-modal-overlay" onClick={() => setIsAddServiceModalOpen(false)}>
                <div className="wm-inq-modal-dialog wm-svc-modal-dialog" onClick={(e) => e.stopPropagation()}>
                  <div className="wm-inq-modal-header">
                    <div>
                      <span className="wm-inq-modal-tag">Create New Service</span>
                      <h3>Add Service to MongoDB</h3>
                    </div>
                    <button type="button" className="wm-inq-modal-close" onClick={() => setIsAddServiceModalOpen(false)}>
                      <FaTimes />
                    </button>
                  </div>

                  <form onSubmit={handleCreateNewService} className="wm-inq-modal-body">
                    <div className="wm-out-fields-grid">
                      <div className="wm-csfield">
                        <label>Service Title *</label>
                        <input
                          type="text"
                          value={newServiceData.title}
                          onChange={(e) => setNewServiceData({ ...newServiceData, title: e.target.value })}
                          placeholder="e.g. AI Automation & Custom Bots"
                          required
                        />
                      </div>
                      <div className="wm-csfield">
                        <label>URL Slug (auto-generated if empty)</label>
                        <input
                          type="text"
                          value={newServiceData.slug}
                          onChange={(e) => setNewServiceData({ ...newServiceData, slug: e.target.value })}
                          placeholder="e.g. ai-automation-custom-bots"
                        />
                      </div>
                      <div className="wm-csfield">
                        <label>Category</label>
                        <select
                          value={newServiceData.category}
                          onChange={(e) => setNewServiceData({ ...newServiceData, category: e.target.value })}
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="App Development">App Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="E-Commerce">E-Commerce</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Custom Solution">Custom Solution</option>
                        </select>
                      </div>
                      <div className="wm-csfield">
                        <label>Metric Badge</label>
                        <input
                          type="text"
                          value={newServiceData.metric}
                          onChange={(e) => setNewServiceData({ ...newServiceData, metric: e.target.value })}
                          placeholder="e.g. 99.9% Uptime"
                        />
                      </div>
                    </div>

                    <div className="wm-csfield" style={{ marginTop: '12px' }}>
                      <label>Short Description (for Home Page Tab) *</label>
                      <textarea
                        rows="2"
                        value={newServiceData.desc}
                        onChange={(e) => setNewServiceData({ ...newServiceData, desc: e.target.value })}
                        required
                      />
                    </div>

                    <div className="wm-csfield" style={{ marginTop: '12px' }}>
                      <label>Sub-Features Checklist (One per line)</label>
                      <textarea
                        rows="3"
                        value={newServiceData.subFeatures}
                        onChange={(e) => setNewServiceData({ ...newServiceData, subFeatures: e.target.value })}
                      />
                    </div>

                    <div className="wm-blog-modal-footer" style={{ marginTop: '20px' }}>
                      <button type="button" className="wm-bbtn-cancel" onClick={() => setIsAddServiceModalOpen(false)}>
                        Cancel
                      </button>
                      <button type="submit" className="wm-bbtn-save" disabled={servicesSaving}>
                        {servicesSaving ? <FaSpinner className="wm-spin" /> : <FaPlus />} Create Service
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 7: MANAGE PORTFOLIO
           ========================================================================= */}
        {activeTab === 'portfolio' && (
          <div className="wm-adash-tab-view">
            <div className="wm-adash-section-header">
              <div>
                <h2>Portfolio & Project Showcase</h2>
                <p>Manage public case studies, deliverables, and performance metric highlights.</p>
              </div>
            </div>

            <div className="wm-adash-table-card">
              <div className="wm-table-responsive">
                <table className="wm-admin-table">
                  <thead>
                    <tr>
                      <th>Project Title</th>
                      <th>Client Name</th>
                      <th>Discipline</th>
                      <th>Outcome Metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioList.map((proj) => (
                      <tr key={proj.id}>
                        <td><strong>{proj.title}</strong></td>
                        <td>{proj.client}</td>
                        <td>{proj.category}</td>
                        <td><strong className="wm-text-green">{proj.outcome}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POPUP MODAL: VIEW FULL INQUIRY / CONTACT DETAILS
           ========================================================================= */}
        {selectedInquiry && (
          <div className="wm-inq-modal-overlay" onClick={() => setSelectedInquiry(null)}>
            <div className="wm-inq-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="wm-inq-modal-header">
                <div>
                  <span className="wm-inq-modal-tag">
                    {selectedInquiry.type === 'enquiry' ? 'Enquiry Now Lead' : 'Contact Form Inquiry'}
                  </span>
                  <h3>{selectedInquiry.name}</h3>
                </div>
                <button
                  type="button"
                  className="wm-inq-modal-close"
                  onClick={() => setSelectedInquiry(null)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="wm-inq-modal-body">
                <div className="wm-inq-modal-grid">
                  <div>
                    <span className="wm-inq-data-label">Phone Number</span>
                    <a href={`tel:${selectedInquiry.phone}`} className="wm-inq-data-link">
                      <FaPhoneAlt /> {selectedInquiry.phone}
                    </a>
                  </div>

                  <div>
                    <span className="wm-inq-data-label">Email Address</span>
                    <a href={`mailto:${selectedInquiry.email}`} className="wm-inq-data-link">
                      <FaEnvelope /> {selectedInquiry.email}
                    </a>
                  </div>

                  <div>
                    <span className="wm-inq-data-label">Service / Subject</span>
                    <strong>{selectedInquiry.service || selectedInquiry.subject}</strong>
                  </div>

                  <div>
                    <span className="wm-inq-data-label">Date & Time Received</span>
                    <span>{selectedInquiry.date}</span>
                  </div>



                  {selectedInquiry.timeline && (
                    <div>
                      <span className="wm-inq-data-label">Requested Timeline</span>
                      <span>{selectedInquiry.timeline}</span>
                    </div>
                  )}

                  {selectedInquiry.source && (
                    <div>
                      <span className="wm-inq-data-label">Inquiry Source</span>
                      <span className="wm-source-tag">{selectedInquiry.source}</span>
                    </div>
                  )}

                  <div>
                    <span className="wm-inq-data-label">Current Pipeline Status</span>
                    <span className={`wm-status-pill ${selectedInquiry.status.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {selectedInquiry.status}
                    </span>
                  </div>
                </div>

                {(selectedInquiry.notes || selectedInquiry.message) && (
                  <div className="wm-inq-message-box">
                    <span className="wm-inq-data-label">Detailed Project Scope / Message:</span>
                    <p>{selectedInquiry.notes || selectedInquiry.message}</p>
                  </div>
                )}
              </div>

              <div className="wm-inq-modal-footer">
                <a href={`tel:${selectedInquiry.phone}`} className="wm-inq-call-now-btn">
                  <FaPhoneAlt /> Call Prospect Now
                </a>
                <a href={`mailto:${selectedInquiry.email}`} className="wm-inq-email-now-btn">
                  <FaEnvelope /> Send Direct Email
                </a>
                <button
                  type="button"
                  className="wm-inq-close-btn"
                  onClick={() => setSelectedInquiry(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      
        {/* =========================================================================
            BLOG CREATE / EDIT MODAL (WITH RICH TEXT EDITOR & SEO PREVIEW)
           ========================================================================= */}
        {isBlogModalOpen && (
          <div className="wm-blog-modal-overlay" onClick={() => setIsBlogModalOpen(false)}>
            <div className="wm-blog-modal-card" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="wm-blog-modal-header">
                <div>
                  <h3>{editingBlogId ? 'Edit Blog Publication' : 'Create New Blog Publication'}</h3>
                  <p>Configure article typography, rich content, and search engine metadata.</p>
                </div>
                <button
                  type="button"
                  className="wm-modal-close-btn"
                  onClick={() => setIsBlogModalOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Feedback Alert */}
              {blogFeedback && (
                <div className={`wm-blog-modal-alert ${blogFeedback.type}`}>
                  <FaCheckCircle /> {blogFeedback.message}
                </div>
              )}

              {/* Form Body */}
              <form onSubmit={handleSaveBlog} className="wm-blog-modal-form">
                <div className="wm-blog-modal-scroll">
                  {/* Section 1: Basic Information */}
                  <div className="wm-bform-section">
                    <h4 className="wm-bform-section-title">
                      <FaFileAlt /> 1. Article Details & Metadata
                    </h4>
                    
                    <div className="wm-bform-row">
                      <div className="wm-bform-group wm-bform-flex2">
                        <label>Article Headline <span className="wm-req">*</span></label>
                        <input
                          type="text"
                          placeholder="e.g. 10 Proven Strategies to 10x Inbound B2B Leads in 2026"
                          value={blogFormData.title}
                          onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                          required
                        />
                      </div>

                      <div className="wm-bform-group wm-bform-flex1">
                        <div className="wm-label-flex">
                          <label>URL Slug <span className="wm-req">*</span></label>
                          <button
                            type="button"
                            className="wm-slug-auto-btn"
                            onClick={handleAutoGenerateSlug}
                            title="Generate slug from title"
                          >
                            <FaMagic /> Auto-Generate
                          </button>
                        </div>
                        <input
                          type="text"
                          placeholder="e.g. 10-proven-strategies-b2b-leads"
                          value={blogFormData.slug}
                          onChange={(e) => setBlogFormData({ ...blogFormData, slug: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="wm-bform-row wm-bform-row-3">
                      <div className="wm-bform-group">
                        <label>Category</label>
                        <select
                          value={blogFormData.category}
                          onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                        >
                          <option value="Web Tech">Web Tech</option>
                          <option value="SEO Insights">SEO Insights</option>
                          <option value="PPC & Ads">PPC & Ads</option>
                          <option value="App Strategy">App Strategy</option>
                          <option value="E-Commerce">E-Commerce</option>
                          <option value="Video & Social">Video & Social</option>
                          <option value="Digital Strategy">Digital Strategy</option>
                        </select>
                      </div>

                      <div className="wm-bform-group">
                        <label>Author Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Web Mok Editorial Desk"
                          value={blogFormData.author}
                          onChange={(e) => setBlogFormData({ ...blogFormData, author: e.target.value })}
                        />
                      </div>

                      <div className="wm-bform-group">
                        <label>Read Time Estimate</label>
                        <input
                          type="text"
                          placeholder="e.g. 6 min read"
                          value={blogFormData.readTime}
                          onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="wm-bform-row">
                      <div className="wm-bform-group wm-bform-flex2">
                        <label>Featured Cover Image URL</label>
                        <input
                          type="url"
                          placeholder="https://images.unsplash.com/... or /assets/blog.jpg"
                          value={blogFormData.image}
                          onChange={(e) => setBlogFormData({ ...blogFormData, image: e.target.value })}
                        />
                      </div>

                      <div className="wm-bform-group wm-bform-flex1">
                        <label>Publication Status</label>
                        <select
                          value={blogFormData.status}
                          onChange={(e) => setBlogFormData({ ...blogFormData, status: e.target.value })}
                        >
                          <option value="Published">Published (Visible on site)</option>
                          <option value="Draft">Draft (Hidden)</option>
                        </select>
                      </div>
                    </div>

                    <div className="wm-bform-group">
                      <label>Short Excerpt / Teaser Summary</label>
                      <textarea
                        rows={2}
                        placeholder="Brief 1-2 sentence overview shown on blog list cards..."
                        value={blogFormData.excerpt}
                        onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Section 2: Rich Text Editor */}
                  <div className="wm-bform-section">
                    <h4 className="wm-bform-section-title">
                      <FaLayerGroup /> 2. Article Body (Rich Text Editor)
                    </h4>
                    <p className="wm-bform-help">
                      Use the formatting toolbar below for Headings, Bold, Italic, Bullet Lists, Blockquotes, Links, and Media.
                    </p>
                    <RichTextEditor
                      value={blogFormData.content}
                      onChange={(html) => setBlogFormData({ ...blogFormData, content: html })}
                      placeholder="Write your in-depth publication insights here..."
                    />
                  </div>

                  {/* Section 3: SEO Configuration & Google Preview */}
                  <div className="wm-bform-section wm-bform-seo-section">
                    <h4 className="wm-bform-section-title">
                      <FaGoogle /> 3. Search Engine Optimization (SEO Metadata)
                    </h4>
                    <p className="wm-bform-help">
                      Fine-tune how Google and Bing index and display this article on search results.
                    </p>

                    <div className="wm-bform-group">
                      <div className="wm-label-flex">
                        <label>SEO Meta Title (Title Tag)</label>
                        <span className="wm-char-counter">
                          {(blogFormData.seoTitle || blogFormData.title).length}/60 chars
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Optimized Google search title (defaults to article title if empty)..."
                        value={blogFormData.seoTitle}
                        onChange={(e) => setBlogFormData({ ...blogFormData, seoTitle: e.target.value })}
                      />
                    </div>

                    <div className="wm-bform-group">
                      <label>SEO Target Keywords (Comma Separated)</label>
                      <input
                        type="text"
                        placeholder="e.g. seo services delhi, google ads agency, web development 2026"
                        value={blogFormData.seoKeywords}
                        onChange={(e) => setBlogFormData({ ...blogFormData, seoKeywords: e.target.value })}
                      />
                    </div>

                    <div className="wm-bform-group">
                      <div className="wm-label-flex">
                        <label>SEO Meta Description</label>
                        <span className="wm-char-counter">
                          {(blogFormData.seoDescription || blogFormData.excerpt).length}/160 chars
                        </span>
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Compelling snippet for search engine search results..."
                        value={blogFormData.seoDescription}
                        onChange={(e) => setBlogFormData({ ...blogFormData, seoDescription: e.target.value })}
                      />
                    </div>

                    {/* Google SERP Live Preview Box */}
                    <div className="wm-serp-preview-card">
                      <div className="wm-serp-preview-header">
                        <FaGoogle className="wm-google-icon" /> Google Search Preview
                      </div>
                      <div className="wm-serp-url">
                        https://webmok.in/blogs/{blogFormData.slug || 'article-url-slug'}
                      </div>
                      <div className="wm-serp-title">
                        {blogFormData.seoTitle || blogFormData.title || 'Article Headline Will Appear Here'} | Web Mok
                      </div>
                      <div className="wm-serp-desc">
                        {blogFormData.seoDescription || blogFormData.excerpt || 'Article summary description snippet will be rendered here on Google search result pages.'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="wm-blog-modal-footer">
                  <button
                    type="button"
                    className="wm-bbtn-cancel"
                    onClick={() => setIsBlogModalOpen(false)}
                    disabled={blogFormSaving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="wm-bbtn-save"
                    disabled={blogFormSaving}
                  >
                    {blogFormSaving ? (
                      <>
                        <FaSpinner className="wm-spinner-icon" /> Saving to Database...
                      </>
                    ) : (
                      <>
                        <FaSave /> {editingBlogId ? 'Update Publication' : 'Publish Article to Database'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;
