import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import RichTextEditor from '../components/RichTextEditor';
import AdminJobs from './admin/AdminJobs';
import AdminJobInquiries from './admin/AdminJobInquiries';
import AdminPackages from './admin/AdminPackages';
import AdminTestimonials from './admin/AdminTestimonials';
import AdminVideoReviews from './admin/AdminVideoReviews';
import AdminCreativeShowcase from './admin/AdminCreativeShowcase';
import AdminVideoShowcase from './admin/AdminVideoShowcase';

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
  FaInfoCircle,
  FaTrophy,
  FaAward,
  FaShieldAlt,
  FaHandshake,
  FaBuilding,
  FaRegLightbulb,
  FaMobileAlt,
  FaShareAlt,
  FaAd,
  FaHome,
  FaQuestionCircle,
  FaArrowRight,
  FaPlayCircle
} from 'react-icons/fa';
import './AdminDashboard.css';
import { resolveMediaUrl } from '../utils/mediaUrl';


const defaultAboutData = {
  bentoStats: {
    tagline: 'Our foundation for every project we deliver.',
    accentWord: 'Excellence.',
    taglineDesc: 'Since 2016, Webmok Pvt Ltd has consistently delivered measurable digital success to businesses across India and globally — backed by a team of seasoned experts and a proven track record.',
    whyTitle: 'Why Webmok?',
    whyDesc1: 'We are a premier IT and Digital Marketing company with offices in Delhi and Rohtak, serving 500+ active clients across India and abroad.',
    whyDesc2: 'Our team of 75+ specialists combines cutting-edge technology with deep domain expertise to engineer digital growth engines that outperform the competition.',
    stats: [
      { id: '1', num: '1500+', label: 'Projects Delivered', icon: 'FaTrophy' },
      { id: '2', num: '20+', label: 'Industry Sectors', icon: 'FaLayerGroup' },
      { id: '3', num: '75+', label: 'Professionals', icon: 'FaUsers' },
      { id: '4', num: '10+', label: 'Years of Experience', icon: 'FaBuilding' }
    ]
  },
  corporateProfile: {
    subtitle: 'Corporate Profile',
    title: 'Developing Any Kind of Business in Digital Form',
    leadPara: 'Webmok Pvt Ltd is a top-ranking IT service providing enterprise from India delivering comprehensive, end-to-end digital transformation solutions. Operating on a global level, we spearhead strategic projects for clients across India as well as overseas markets.',
    bodyPara: 'We have over 500+ active clients and have successfully delivered 1500+ projects across diverse sectors. We ensure to promote your business digitally and provide you 100% ranking on Google.',
    guaranteeTitle: '100% Earned Result & Money-Back Policy',
    guaranteeText: 'Webmok Pvt Ltd gives you a 100% guarantee for delivering earned results. If due to any unforeseen reason we are unable to deliver your project milestones, according to our transparent policy we will return your entire amount of consideration. We build healthy, fair client relationships, deliver every project on time, and disclose our complete execution process prior to agreement.',
    fastFacts: [
      { label: 'Incorporation Date', value: '16 June 2016' },
      { label: 'Corporate Headquarters', value: 'New Delhi, India' },
      { label: 'Branch Offices', value: 'Rohtak, Haryana' },
      { label: 'Client Geographic Scope', value: 'Pan-India & Global International Clients' },
      { label: 'Active Client Roster', value: '500+ Ongoing Partnerships' },
      { label: 'Completed Projects', value: '1500+ Digital Deployments' },
      { label: 'Assurance Policy', value: '100% Milestones or Full Consideration Refund' }
    ]
  },
  expertiseExecution: {
    subtitle: 'Expertise & Execution',
    title: 'Well-Qualified Staff & Complete Services Portfolio',
    services: [
      {
        id: 'web-design',
        icon: 'FaLaptopCode',
        title: 'Web Designing',
        desc: 'Crafting stunning, human-centric visual interfaces and frictionless user experiences tailored for high brand authority.',
        subFeatures: ['UI/UX Strategy & Wireframing', 'Responsive Mobile-First Design', 'Brand Identity & Style Guides', 'Figma / Adobe XD Prototyping', 'Landing Page & CRO Design', 'E-Commerce Storefront Design']
      },
      {
        id: 'web-dev',
        icon: 'FaCogs',
        title: 'Web Development',
        desc: 'Engineering robust, full-stack web software, React apps, and custom CMS platforms with sub-second page performance.',
        subFeatures: ['React / Next.js Applications', 'WordPress & Custom CMS', 'RESTful API Integration', 'Performance Optimization', 'Progressive Web Apps (PWA)', 'Database Architecture & Scaling']
      },
      {
        id: 'seo',
        icon: 'FaSearch',
        title: 'Search Engine Optimization',
        desc: '100% white-hat organic ranking strategies designed to dominate competitive keyword niches on Google search.',
        subFeatures: ['Technical SEO Audit & Fix', 'On-Page & Off-Page SEO', 'Local SEO & Google Maps', 'Backlink Authority Building', 'Keyword Research & Mapping', 'Monthly Ranking Reports']
      },
      {
        id: 'email-mkt',
        icon: 'FaEnvelopeOpenText',
        title: 'Email Marketing',
        desc: 'High-deliverability automated email funnels, behavioral trigger campaigns, and high-converting subscriber flows.',
        subFeatures: ['Drip Campaign Automation', 'Behavioral Trigger Emails', 'Subscriber List Management', 'A/B Split Testing', 'HTML Email Template Design', 'Deliverability & Open Rate Boost']
      },
      {
        id: 'content-mkt',
        icon: 'FaRegLightbulb',
        title: 'Content Marketing',
        desc: 'In-depth editorial articles, authority whitepapers, and compelling brand storytelling that drives qualified traffic.',
        subFeatures: ['SEO Blog Articles & Guides', 'Brand Storytelling & Copywriting', 'Authority Whitepapers', 'Infographic & Visual Content', 'YouTube Script Writing', 'Content Distribution Strategy']
      },
      {
        id: 'mobile-mkt',
        icon: 'FaMobileAlt',
        title: 'Mobile Marketing',
        desc: 'Targeted in-app marketing, device-optimized acquisition flows, and App Store Optimization (ASO) for native apps.',
        subFeatures: ['App Store Optimization (ASO)', 'Push Notification Campaigns', 'SMS & WhatsApp Marketing', 'In-App Advertising Strategy', 'Mobile-First Campaign Design', 'User Retention & Re-engagement']
      },
      {
        id: 'smm',
        icon: 'FaBullhorn',
        title: 'Social Media Marketing',
        desc: 'Viral creative campaigns, interactive motion graphics, and paid performance ad funnels on Meta, LinkedIn & Instagram.',
        subFeatures: ['Facebook & Instagram Ads', 'LinkedIn B2B Campaigns', 'Creative Reels & Motion Graphics', 'Influencer Collaboration Strategy', 'Paid Ad Funnel Optimization', 'Audience Targeting & Retargeting']
      },
      {
        id: 'smo',
        icon: 'FaShareAlt',
        title: 'Social Media Optimization',
        desc: 'Optimizing corporate profiles, amplifying brand authority, and cultivating vibrant, engaged customer communities.',
        subFeatures: ['Profile Setup & Branding', 'Content Calendar Planning', 'Organic Reach Amplification', 'Hashtag Strategy Research', 'Community Engagement Management', 'Social Analytics & Reporting']
      },
      {
        id: 'ppc',
        icon: 'FaAd',
        title: 'PPC & Google AdWords',
        desc: 'Precision laser-targeted Google Search Ads and Performance Max funnels designed to deliver maximum return on ad spend.',
        subFeatures: ['Google Search Ad Campaigns', 'Performance Max Campaigns', 'Display & Remarketing Ads', 'Shopping Ads for E-Commerce', 'Bid Strategy & Budget Optimization', 'Conversion Tracking & ROAS Analysis']
      }
    ]
  },
  executiveGuidance: {
    subtitle: 'Executive Guidance',
    title: 'Meet The Experts Guiding Your Brand',
    leaders: [
      {
        id: '1',
        name: 'Rahish Sangwan',
        role: 'Founder & Managing Director',
        bio: 'Over a decade of leadership in digital transformation, tech architecture, and scaling business development in NCR & North India.',
        image: '/Rahish Sir.png'
      },
      {
        id: '2',
        name: 'Simran Narang',
        role: 'Digital Marketing Head',
        bio: 'Full-stack engineering expert specializing in scalable React ecosystem, mobile application pipelines, and high-load web architectures.',
        image: '/simran1.png'
      },
      {
        id: '3',
        name: 'Deepak Suhag',
        role: 'Director of Performance Marketing',
        bio: 'Data-driven PPC and SEO strategist who has managed over ₹15+ Crore in profitable digital advertising spend across enterprise brands.',
        image: '/DeepakSir-1.png'
      }
    ]
  }
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // ==========================================
  // ABOUT US PAGE CMS STATE & HANDLERS
  // ==========================================
  const [aboutSubTab, setAboutSubTab] = useState('bento'); // 'bento' | 'profile' | 'expertise' | 'guidance'
  const [aboutLoading, setAboutLoading] = useState(false);
  const [aboutSaving, setAboutSaving] = useState(false);
  const [aboutFeedback, setAboutFeedback] = useState(null);
  const [aboutData, setAboutData] = useState(() => {
    try {
      const cached = localStorage.getItem('webmok_about_data');
      if (cached) return JSON.parse(cached);
    } catch (e) {}
    return defaultAboutData;
  });

  const fetchAboutData = async () => {
    try {
      setAboutLoading(true);
      const res = await fetch(`${API_BASE}/about`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setAboutData(json.data);
          localStorage.setItem('webmok_about_data', JSON.stringify(json.data));
        }
      }
    } catch (err) {
      console.warn('Backend /api/about offline, using local cached state:', err.message);
    } finally {
      setAboutLoading(false);
    }
  };

  const handleSaveAboutData = async (e) => {
    if (e) e.preventDefault();
    setAboutSaving(true);
    setAboutFeedback(null);
    try {
      localStorage.setItem('webmok_about_data', JSON.stringify(aboutData));
      window.dispatchEvent(new Event('webmok_about_updated'));

      const res = await fetch(`${API_BASE}/about`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aboutData)
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setAboutData(json.data);
          localStorage.setItem('webmok_about_data', JSON.stringify(json.data));
        }
      }
      setAboutFeedback({ type: 'success', message: 'About Us page content successfully saved and published!' });
    } catch (err) {
      console.warn('Error saving about data to API:', err.message);
      setAboutFeedback({ type: 'success', message: 'Saved in browser storage (Backend sync offline)!' });
    } finally {
      setAboutSaving(false);
      setTimeout(() => setAboutFeedback(null), 5000);
    }
  };

  const handleResetAboutData = async () => {
    if (!window.confirm('Are you sure you want to reset all About Us page sections to factory defaults?')) return;
    setAboutSaving(true);
    try {
      const res = await fetch(`${API_BASE}/about/reset`, { method: 'POST' });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setAboutData(json.data);
          localStorage.setItem('webmok_about_data', JSON.stringify(json.data));
          window.dispatchEvent(new Event('webmok_about_updated'));
          setAboutFeedback({ type: 'success', message: 'About Us page successfully reset to factory defaults!' });
          return;
        }
      }
    } catch (e) {
      console.warn('Backend reset failed:', e.message);
    }
    setAboutData(defaultAboutData);
    localStorage.setItem('webmok_about_data', JSON.stringify(defaultAboutData));
    window.dispatchEvent(new Event('webmok_about_updated'));
    setAboutFeedback({ type: 'success', message: 'Reset locally to default factory content!' });
    setAboutSaving(false);
    setTimeout(() => setAboutFeedback(null), 5000);
  };

  // Upload leader image
  const handleLeaderImageUpload = async (index, file) => {
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch(`${API_BASE}/about/upload`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.fileUrl) {
          const updatedLeaders = [...aboutData.executiveGuidance.leaders];
          updatedLeaders[index] = { ...updatedLeaders[index], image: json.fileUrl };
          setAboutData({
            ...aboutData,
            executiveGuidance: { ...aboutData.executiveGuidance, leaders: updatedLeaders }
          });
          return;
        }
      }
    } catch (err) {
      console.warn('Backend file upload failed, using Base64 data URL fallback:', err.message);
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const updatedLeaders = [...aboutData.executiveGuidance.leaders];
      updatedLeaders[index] = { ...updatedLeaders[index], image: e.target.result };
      setAboutData({
        ...aboutData,
        executiveGuidance: { ...aboutData.executiveGuidance, leaders: updatedLeaders }
      });
    };
    reader.readAsDataURL(file);
  };

  // Bento helpers
  const handleBentoChange = (field, val) => {
    setAboutData(prev => ({
      ...prev,
      bentoStats: { ...prev.bentoStats, [field]: val }
    }));
  };

  const handleStatChange = (index, field, val) => {
    const nextStats = [...aboutData.bentoStats.stats];
    nextStats[index] = { ...nextStats[index], [field]: val };
    setAboutData(prev => ({
      ...prev,
      bentoStats: { ...prev.bentoStats, stats: nextStats }
    }));
  };

  const handleAddStat = () => {
    const nextStats = [...aboutData.bentoStats.stats, {
      id: Date.now().toString(),
      num: '100+',
      label: 'New Metric',
      icon: 'FaAward'
    }];
    setAboutData(prev => ({
      ...prev,
      bentoStats: { ...prev.bentoStats, stats: nextStats }
    }));
  };

  const handleDeleteStat = (index) => {
    if (!window.confirm('Delete this stat card?')) return;
    const nextStats = aboutData.bentoStats.stats.filter((_, idx) => idx !== index);
    setAboutData(prev => ({
      ...prev,
      bentoStats: { ...prev.bentoStats, stats: nextStats }
    }));
  };

  // Corporate Profile helpers
  const handleCorporateChange = (field, val) => {
    setAboutData(prev => ({
      ...prev,
      corporateProfile: { ...prev.corporateProfile, [field]: val }
    }));
  };

  const handleFastFactChange = (index, field, val) => {
    const nextFacts = [...aboutData.corporateProfile.fastFacts];
    nextFacts[index] = { ...nextFacts[index], [field]: val };
    setAboutData(prev => ({
      ...prev,
      corporateProfile: { ...prev.corporateProfile, fastFacts: nextFacts }
    }));
  };

  const handleAddFastFact = () => {
    const nextFacts = [...aboutData.corporateProfile.fastFacts, {
      label: 'New Label',
      value: 'New Description'
    }];
    setAboutData(prev => ({
      ...prev,
      corporateProfile: { ...prev.corporateProfile, fastFacts: nextFacts }
    }));
  };

  const handleDeleteFastFact = (index) => {
    if (!window.confirm('Delete this fast fact?')) return;
    const nextFacts = aboutData.corporateProfile.fastFacts.filter((_, idx) => idx !== index);
    setAboutData(prev => ({
      ...prev,
      corporateProfile: { ...prev.corporateProfile, fastFacts: nextFacts }
    }));
  };

  // Expertise & Execution helpers
  const handleExpertiseChange = (field, val) => {
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, [field]: val }
    }));
  };

  const handleServiceChange = (index, field, val) => {
    const nextServices = [...aboutData.expertiseExecution.services];
    nextServices[index] = { ...nextServices[index], [field]: val };
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };


  const handleServiceSubFeatureChange = (serviceIndex, featIndex, value) => {
    const nextServices = [...aboutData.expertiseExecution.services];
    const nextSubFeatures = [...(nextServices[serviceIndex].subFeatures || [])];
    nextSubFeatures[featIndex] = value;
    nextServices[serviceIndex] = { ...nextServices[serviceIndex], subFeatures: nextSubFeatures };
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };

  const handleAddServiceSubFeature = (serviceIndex) => {
    const nextServices = [...aboutData.expertiseExecution.services];
    const nextSubFeatures = [...(nextServices[serviceIndex].subFeatures || []), ''];
    nextServices[serviceIndex] = { ...nextServices[serviceIndex], subFeatures: nextSubFeatures };
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };

  const handleDeleteServiceSubFeature = (serviceIndex, featIndex) => {
    const nextServices = [...aboutData.expertiseExecution.services];
    const nextSubFeatures = (nextServices[serviceIndex].subFeatures || []).filter((_, idx) => idx !== featIndex);
    nextServices[serviceIndex] = { ...nextServices[serviceIndex], subFeatures: nextSubFeatures };
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };

  const handleServiceSubFeaturesChange = (index, text) => {
    const list = text.split('\n').map(s => s.trim()).filter(Boolean);
    const nextServices = [...aboutData.expertiseExecution.services];
    nextServices[index] = { ...nextServices[index], subFeatures: list };
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };

  const handleAddAboutService = () => {
    const nextServices = [...aboutData.expertiseExecution.services, {
      id: 'service-' + Date.now(),
      icon: 'FaLaptopCode',
      title: 'New Service',
      desc: 'High-impact enterprise digital service engineered for rapid growth.',
      subFeatures: ['Tailored Strategy', 'Quality Execution', '24/7 Support']
    }];
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };

  const handleDeleteAboutService = (index) => {
    if (!window.confirm('Delete this service card from Expertise & Execution?')) return;
    const nextServices = aboutData.expertiseExecution.services.filter((_, idx) => idx !== index);
    setAboutData(prev => ({
      ...prev,
      expertiseExecution: { ...prev.expertiseExecution, services: nextServices }
    }));
  };

  // Executive Guidance helpers
  const handleGuidanceChange = (field, val) => {
    setAboutData(prev => ({
      ...prev,
      executiveGuidance: { ...prev.executiveGuidance, [field]: val }
    }));
  };

  const handleLeaderChange = (index, field, val) => {
    const nextLeaders = [...aboutData.executiveGuidance.leaders];
    nextLeaders[index] = { ...nextLeaders[index], [field]: val };
    setAboutData(prev => ({
      ...prev,
      executiveGuidance: { ...prev.executiveGuidance, leaders: nextLeaders }
    }));
  };

  const handleAddLeader = () => {
    const nextLeaders = [...aboutData.executiveGuidance.leaders, {
      id: Date.now().toString(),
      name: 'Leader Name',
      role: 'Executive Role / Designation',
      bio: 'Professional leadership biography, milestones and expertise...',
      image: '/Rahish Sir.png'
    }];
    setAboutData(prev => ({
      ...prev,
      executiveGuidance: { ...prev.executiveGuidance, leaders: nextLeaders }
    }));
  };

  const handleDeleteLeader = (index) => {
    if (!window.confirm('Delete this executive leader?')) return;
    const nextLeaders = aboutData.executiveGuidance.leaders.filter((_, idx) => idx !== index);
    setAboutData(prev => ({
      ...prev,
      executiveGuidance: { ...prev.executiveGuidance, leaders: nextLeaders }
    }));
  };

  const navigate = useNavigate();

  // Services State (Dynamic MongoDB Managed for Home Page & Explore Pages)
  const [servicesList, setServicesList] = useState([]);
  const [activeServiceKey, setActiveServiceKey] = useState('web-designing-development-services-company');
  const [servicesLoading, setServicesLoading] = useState(false);
  const [servicesSaving, setServicesSaving] = useState(false);
  const [servicesFeedback, setServicesFeedback] = useState(null);
  const [servicePreviewTab, setServicePreviewTab] = useState('home'); // 'home' | 'explore'
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [serviceVideoUploading, setServiceVideoUploading] = useState(false);
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
    videoUrl: '/Home-Hero.mp4',
    videoBadge: 'Interactive Showcase',
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

  // Portfolio State & Management
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [portfolioSaving, setPortfolioSaving] = useState(false);
  const [portfolioFeedback, setPortfolioFeedback] = useState(null);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [portfolioFormData, setPortfolioFormData] = useState({
    title: '',
    client: '',
    category: 'web',
    image: '',
    results: '',
    description: '',
    tag: '',
    order: 0
  });
  const [portfolioImageFile, setPortfolioImageFile] = useState(null);
  const [portfolioImageUploading, setPortfolioImageUploading] = useState(false);

  // Hero Multi-Slide State & Management (Image and Video)
  const [heroSlides, setHeroSlides] = useState([]);
  const [heroSlideLoading, setHeroSlideLoading] = useState(false);
  const [heroSlideSaving, setHeroSlideSaving] = useState(false);
  const [heroSlideUploading, setHeroSlideUploading] = useState(false);
  const [heroSlideFeedback, setHeroSlideFeedback] = useState(null);
  const [newSlideType, setNewSlideType] = useState('video');
  const [newSlideUrl, setNewSlideUrl] = useState('');
  const [newSlideTitle, setNewSlideTitle] = useState('');

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
    const fetchHeroSlides = async () => {
      try {
        setHeroSlideLoading(true);
        const res = await fetch(`${API_BASE}/hero-slides`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setHeroSlides(json.data);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback hero slides:', err.message);
      } finally {
        setHeroSlideLoading(false);
      }
    };

    const fetchPortfolio = async () => {
      try {
        setPortfolioLoading(true);
        const res = await fetch(`${API_BASE}/portfolio`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setPortfolioList(json.data);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback portfolio:', err.message);
      } finally {
        setPortfolioLoading(false);
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
    fetchHeroSlides();
    fetchPortfolio();
    fetchServicesFromDB();
    fetchAboutData();
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
  // HERO SLIDER HANDLERS (IMAGES & VIDEOS)
  // =========================================================================
  const handleAddHeroSlideUrl = async (e) => {
    if (e) e.preventDefault();
    if (!newSlideUrl.trim()) return;

    try {
      setHeroSlideSaving(true);
      setHeroSlideFeedback(null);
      const res = await fetch(`${API_BASE}/hero-slides`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newSlideTitle.trim() || (newSlideType === 'video' ? 'Hero Video Slide' : 'Hero Image Slide'),
          mediaType: newSlideType,
          mediaUrl: newSlideUrl.trim(),
          order: heroSlides.length
        })
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setHeroSlides((prev) => [...prev, json.data]);
        setNewSlideUrl('');
        setNewSlideTitle('');
        setHeroSlideFeedback({ type: 'success', message: 'Hero slide added successfully!' });
      } else {
        setHeroSlideFeedback({ type: 'error', message: json.message || 'Failed to add slide' });
      }
    } catch (err) {
      setHeroSlideFeedback({ type: 'error', message: err.message });
    } finally {
      setHeroSlideSaving(false);
      setTimeout(() => setHeroSlideFeedback(null), 5000);
    }
  };

  const handleUploadHeroSlideFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('mediaFile', file);
    if (newSlideTitle) {
      formData.append('title', newSlideTitle);
    }

    try {
      setHeroSlideUploading(true);
      setHeroSlideFeedback(null);
      const res = await fetch(`${API_BASE}/hero-slides/upload`, {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setHeroSlides((prev) => [...prev, json.data]);
        setNewSlideTitle('');
        setHeroSlideFeedback({ type: 'success', message: `Slide "${file.name}" uploaded successfully!` });
      } else {
        setHeroSlideFeedback({ type: 'error', message: json.message || 'Failed to upload slide' });
      }
    } catch (err) {
      setHeroSlideFeedback({ type: 'error', message: err.message });
    } finally {
      setHeroSlideUploading(false);
      setTimeout(() => setHeroSlideFeedback(null), 5000);
    }
  };

  const handleDeleteHeroSlide = async (id) => {
    if (!window.confirm('Are you sure you want to delete this hero slide?')) return;
    try {
      setHeroSlideLoading(true);
      const res = await fetch(`${API_BASE}/hero-slides/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setHeroSlides((prev) => prev.filter((s) => (s._id || s.id) !== id));
        setHeroSlideFeedback({ type: 'success', message: 'Slide deleted successfully!' });
      }
    } catch (err) {
      setHeroSlideFeedback({ type: 'error', message: err.message });
    } finally {
      setHeroSlideLoading(false);
      setTimeout(() => setHeroSlideFeedback(null), 4000);
    }
  };

  const handleToggleHeroSlideActive = async (slide) => {
    const id = slide._id || slide.id;
    try {
      const res = await fetch(`${API_BASE}/hero-slides/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !slide.isActive })
      });
      if (res.ok) {
        setHeroSlides((prev) =>
          prev.map((s) => ((s._id || s.id) === id ? { ...s, isActive: !s.isActive } : s))
        );
      }
    } catch (err) {
      console.warn('Error toggling slide status:', err.message);
    }
  };

  // =========================================================================
  // PORTFOLIO MANAGEMENT HANDLERS (FULL CRUD)
  // =========================================================================
  const handleOpenAddPortfolio = () => {
    setEditingProjectId(null);
    setPortfolioFormData({
      title: '',
      client: '',
      category: 'web',
      image: '',
      results: '',
      description: '',
      tag: '',
      order: portfolioList.length + 1
    });
    setPortfolioImageFile(null);
    setPortfolioFeedback(null);
    setIsPortfolioModalOpen(true);
  };

  const handleOpenEditPortfolio = (proj) => {
    setEditingProjectId(proj._id || proj.id);
    setPortfolioFormData({
      title: proj.title || '',
      client: proj.client || '',
      category: proj.category || 'web',
      image: proj.image || '',
      results: proj.results || '',
      description: proj.description || '',
      tag: proj.tag || '',
      order: proj.order || 0
    });
    setPortfolioImageFile(null);
    setPortfolioFeedback(null);
    setIsPortfolioModalOpen(true);
  };

  const handleSavePortfolio = async (e) => {
    e.preventDefault();
    if (!portfolioFormData.title.trim() || !portfolioFormData.client.trim()) {
      alert('Please fill out the Project Title and Client Name.');
      return;
    }

    try {
      setPortfolioSaving(true);
      let finalImageUrl = portfolioFormData.image;

      // If a local image file was selected, upload it first
      if (portfolioImageFile) {
        setPortfolioImageUploading(true);
        const imgData = new FormData();
        imgData.append('imageFile', portfolioImageFile);
        const upRes = await fetch(`${API_BASE}/portfolio/upload`, {
          method: 'POST',
          body: imgData
        });
        const upJson = await upRes.json();
        if (upRes.ok && upJson.success && upJson.imageUrl) {
          finalImageUrl = upJson.imageUrl;
        }
        setPortfolioImageUploading(false);
      }

      const payload = {
        ...portfolioFormData,
        image: finalImageUrl || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80'
      };

      if (editingProjectId) {
        // Update existing
        const res = await fetch(`${API_BASE}/portfolio/${editingProjectId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (res.ok && json.success) {
          setPortfolioList((prev) =>
            prev.map((p) => ((p._id || p.id) === editingProjectId ? json.data : p))
          );
          setIsPortfolioModalOpen(false);
          setPortfolioFeedback({ type: 'success', message: 'Project updated successfully!' });
        } else {
          setPortfolioFeedback({ type: 'error', message: json.message || 'Failed to update project' });
        }
      } else {
        // Create new
        const res = await fetch(`${API_BASE}/portfolio`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (res.ok && json.success) {
          setPortfolioList((prev) => [...prev, json.data]);
          setIsPortfolioModalOpen(false);
          setPortfolioFeedback({ type: 'success', message: 'Project created successfully!' });
        } else {
          setPortfolioFeedback({ type: 'error', message: json.message || 'Failed to create project' });
        }
      }
    } catch (err) {
      setPortfolioFeedback({ type: 'error', message: err.message });
    } finally {
      setPortfolioSaving(false);
      setTimeout(() => setPortfolioFeedback(null), 5000);
    }
  };

  const handleDeletePortfolio = async (id) => {
    if (!window.confirm('Are you sure you want to delete this portfolio project?')) return;
    try {
      const res = await fetch(`${API_BASE}/portfolio/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPortfolioList((prev) => prev.filter((p) => (p._id || p.id) !== id));
        setPortfolioFeedback({ type: 'success', message: 'Project deleted successfully!' });
      }
    } catch (err) {
      setPortfolioFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setPortfolioFeedback(null), 4000);
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
    videoUrl: '/Home-Hero.mp4', // default svc video
    videoBadge: 'Live Web Demo',
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

  const handleServiceVideoUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    try {
      setServiceVideoUploading(true);
      setServicesFeedback(null);
      const res = await fetch(`${API_BASE}/services/upload-video`, {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      if (res.ok && json.success && json.videoUrl) {
        handleUpdateServiceField('videoUrl', json.videoUrl);
        setServicesFeedback({
          type: 'success',
          message: `Video "${file.name}" uploaded successfully! Remember to click "Save Service Changes" below.`
        });
      } else {
        setServicesFeedback({
          type: 'error',
          message: json.message || 'Video upload failed'
        });
      }
    } catch (err) {
      setServicesFeedback({
        type: 'error',
        message: err.message || 'Error uploading service video'
      });
    } finally {
      setServiceVideoUploading(false);
    }
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
        videoUrl: newServiceData.videoUrl || '/Home-Hero.mp4',
        videoBadge: newServiceData.videoBadge || 'Interactive Showcase',
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

  const handleDeleteService = async (serviceIdOrSlug, serviceTitle) => {
    const titleToDisplay = serviceTitle || 'this service';
    if (!window.confirm(`Are you sure you want to permanently delete service "${titleToDisplay}"?`)) return;
    try {
      setServicesLoading(true);
      const res = await fetch(`${API_BASE}/services/${serviceIdOrSlug}`, { method: 'DELETE' });
      const json = await res.json();
      
      setServicesList(prev => {
        const updated = prev.filter(s => s._id !== serviceIdOrSlug && s.slug !== serviceIdOrSlug);
        if ((activeServiceKey === serviceIdOrSlug || currentService.slug === serviceIdOrSlug || currentService._id === serviceIdOrSlug) && updated.length > 0) {
          setActiveServiceKey(updated[0].slug || updated[0]._id);
        }
        return updated;
      });

      setServicesFeedback({
        type: 'success',
        message: (json && json.message) || `Service "${titleToDisplay}" deleted successfully`
      });
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
        {/* =========================================================================
            TAB: MANAGE ABOUT US (HERO BENTO, CORPORATE PROFILE, EXPERTISE, EXECUTIVE GUIDANCE)
           ========================================================================= */}
        {activeTab === 'about' && (
          <div className="wm-adash-tab-view">
            <div className="wm-adash-section-header">
              <div>
                <h2>Manage About Us Page CMS</h2>
                <p>
                  Full control over Corporate Profile, Hero Bottom Bento Stats, Expertise & Execution services,
                  and Executive Guidance leadership team with photo upload capability.
                </p>
              </div>
              <div className="wm-out-header-actions">
                {/* <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetAboutData}
                  disabled={aboutSaving || aboutLoading}
                  title="Reset all About Us sections to factory defaults"
                >
                  <FaUndoAlt /> Reset Defaults
                </button> */}
                <a
                  href="/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-out-btn-view-site"
                >
                  <FaExternalLinkAlt /> View Live About Us
                </a>
                <button
                  type="button"
                  className="wm-about-save-btn"
                  onClick={handleSaveAboutData}
                  disabled={aboutSaving || aboutLoading}
                >
                  {aboutSaving ? (
                    <><FaSpinner className="wm-spinner-icon" /> Saving...</>
                  ) : (
                    <><FaSave /> Save Changes</>
                  )}
                </button>
              </div>
            </div>

            {aboutFeedback && (
              <div className={`wm-out-alert ${aboutFeedback.type === 'error' ? 'wm-out-alert-error' : 'wm-out-alert-success'}`}>
                {aboutFeedback.type === 'error' ? <FaTimes /> : <FaCheckCircle />}
                <span>{aboutFeedback.message}</span>
              </div>
            )}

            {/* Subtabs Bar */}
            <div className="wm-about-subnav-bar">
              <button
                type="button"
                className={`wm-about-subnav-btn ${aboutSubTab === 'bento' ? 'active' : ''}`}
                onClick={() => setAboutSubTab('bento')}
              >
                <FaLayerGroup /> Hero Bento & Stats ({aboutData?.bentoStats?.stats?.length || 0})
              </button>
              <button
                type="button"
                className={`wm-about-subnav-btn ${aboutSubTab === 'profile' ? 'active' : ''}`}
                onClick={() => setAboutSubTab('profile')}
              >
                <FaBuilding /> Corporate Profile ({aboutData?.corporateProfile?.fastFacts?.length || 0} Facts)
              </button>
              <button
                type="button"
                className={`wm-about-subnav-btn ${aboutSubTab === 'expertise' ? 'active' : ''}`}
                onClick={() => setAboutSubTab('expertise')}
              >
                <FaLaptopCode /> Expertise & Execution ({aboutData?.expertiseExecution?.services?.length || 0} Services)
              </button>
              <button
                type="button"
                className={`wm-about-subnav-btn ${aboutSubTab === 'guidance' ? 'active' : ''}`}
                onClick={() => setAboutSubTab('guidance')}
              >
                <FaUsers /> Executive Guidance ({aboutData?.executiveGuidance?.leaders?.length || 0} Leaders)
              </button>
            </div>

            {/* 1. HERO BOTTOM BENTO & STATS SECTION */}
            {aboutSubTab === 'bento' && (
              <div className="wm-about-tab-content">
                <div className="wm-about-card">
                  <div className="wm-about-card-head">
                    <h3><FaLayerGroup /> Hero Bottom Bento Content</h3>
                    <p>Customize the headline, accent wording, and Why Webmok story displayed below the hero.</p>
                  </div>
                  <div className="wm-about-form-grid">
                    <div className="wm-cfield">
                      <label>Main Tagline Heading</label>
                      <input
                        type="text"
                        value={aboutData?.bentoStats?.tagline || ''}
                        onChange={(e) => handleBentoChange('tagline', e.target.value)}
                        placeholder="e.g. Our foundation for every project we deliver."
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Accent Word / Highlight</label>
                      <input
                        type="text"
                        value={aboutData?.bentoStats?.accentWord || ''}
                        onChange={(e) => handleBentoChange('accentWord', e.target.value)}
                        placeholder="e.g. Excellence."
                      />
                    </div>
                    <div className="wm-cfield full-width">
                      <label>Tagline Description Text</label>
                      <textarea
                        rows="3"
                        value={aboutData?.bentoStats?.taglineDesc || ''}
                        onChange={(e) => handleBentoChange('taglineDesc', e.target.value)}
                        placeholder="Detailed mission / foundation statement..."
                      />
                    </div>
                    <div className="wm-cfield full-width">
                      <label>Why Webmok Section Heading</label>
                      <input
                        type="text"
                        value={aboutData?.bentoStats?.whyTitle || ''}
                        onChange={(e) => handleBentoChange('whyTitle', e.target.value)}
                        placeholder="e.g. Why Webmok?"
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Why Description Paragraph 1</label>
                      <textarea
                        rows="3"
                        value={aboutData?.bentoStats?.whyDesc1 || ''}
                        onChange={(e) => handleBentoChange('whyDesc1', e.target.value)}
                        placeholder="First paragraph of Why Webmok..."
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Why Description Paragraph 2</label>
                      <textarea
                        rows="3"
                        value={aboutData?.bentoStats?.whyDesc2 || ''}
                        onChange={(e) => handleBentoChange('whyDesc2', e.target.value)}
                        placeholder="Second paragraph of Why Webmok..."
                      />
                    </div>
                  </div>
                </div>

                {/* 4 Stat Cards */}
                <div className="wm-about-card">
                  <div className="wm-about-card-head flex-between">
                    <div>
                      <h3><FaTrophy /> Bento Stat Metrics</h3>
                      <p>Manage the 4 key stat highlights shown in the Bento box.</p>
                    </div>
                    <button
                      type="button"
                      className="wm-about-btn-add"
                      onClick={handleAddStat}
                    >
                      <FaPlus /> Add Stat Card
                    </button>
                  </div>

                  <div className="wm-about-stats-grid">
                    {(aboutData?.bentoStats?.stats || []).map((stat, idx) => (
                      <div key={stat.id || idx} className="wm-about-stat-item-card">
                        <div className="wm-about-item-top">
                          <span className="wm-about-item-badge">Stat #{idx + 1}</span>
                          <button
                            type="button"
                            className="wm-about-btn-del"
                            onClick={() => handleDeleteStat(idx)}
                            title="Delete this stat"
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <div className="wm-cfield">
                          <label>Number / Metric</label>
                          <input
                            type="text"
                            value={stat.num || ''}
                            onChange={(e) => handleStatChange(idx, 'num', e.target.value)}
                            placeholder="e.g. 1500+"
                          />
                        </div>
                        <div className="wm-cfield">
                          <label>Metric Label</label>
                          <input
                            type="text"
                            value={stat.label || ''}
                            onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                            placeholder="e.g. Projects Delivered"
                          />
                        </div>
                        <div className="wm-cfield">
                          <label>Icon Style</label>
                          <select
                            value={stat.icon || 'FaTrophy'}
                            onChange={(e) => handleStatChange(idx, 'icon', e.target.value)}
                          >
                            <option value="FaTrophy">FaTrophy (Cup)</option>
                            <option value="FaLayerGroup">FaLayerGroup (Layers)</option>
                            <option value="FaUsers">FaUsers (Team)</option>
                            <option value="FaBuilding">FaBuilding (Office)</option>
                            <option value="FaRocket">FaRocket (Rocket)</option>
                            <option value="FaAward">FaAward (Medal)</option>
                            <option value="FaShieldAlt">FaShieldAlt (Shield)</option>
                            <option value="FaChartLine">FaChartLine (Growth)</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. CORPORATE PROFILE SECTION */}
            {aboutSubTab === 'profile' && (
              <div className="wm-about-tab-content">
                <div className="wm-about-card">
                  <div className="wm-about-card-head">
                    <h3><FaBuilding /> Corporate Profile Story & Guarantee</h3>
                    <p>Update company registration profile, mission copy, and the 100% money-back guarantee policy.</p>
                  </div>
                  <div className="wm-about-form-grid">
                    <div className="wm-cfield">
                      <label>Section Subtitle / Badge</label>
                      <input
                        type="text"
                        value={aboutData?.corporateProfile?.subtitle || ''}
                        onChange={(e) => handleCorporateChange('subtitle', e.target.value)}
                        placeholder="e.g. Corporate Profile"
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Main Headline</label>
                      <input
                        type="text"
                        value={aboutData?.corporateProfile?.title || ''}
                        onChange={(e) => handleCorporateChange('title', e.target.value)}
                        placeholder="e.g. Developing Any Kind of Business in Digital Form"
                      />
                    </div>
                    <div className="wm-cfield full-width">
                      <label>Lead Paragraph</label>
                      <textarea
                        rows="3"
                        value={aboutData?.corporateProfile?.leadPara || ''}
                        onChange={(e) => handleCorporateChange('leadPara', e.target.value)}
                        placeholder="Opening corporate introduction..."
                      />
                    </div>
                    <div className="wm-cfield full-width">
                      <label>Body Paragraph</label>
                      <textarea
                        rows="3"
                        value={aboutData?.corporateProfile?.bodyPara || ''}
                        onChange={(e) => handleCorporateChange('bodyPara', e.target.value)}
                        placeholder="Secondary details on achievements and client scope..."
                      />
                    </div>
                    <div className="wm-cfield full-width">
                      <label>Guarantee Policy Box Title</label>
                      <input
                        type="text"
                        value={aboutData?.corporateProfile?.guaranteeTitle || ''}
                        onChange={(e) => handleCorporateChange('guaranteeTitle', e.target.value)}
                        placeholder="e.g. 100% Earned Result & Money-Back Policy"
                      />
                    </div>
                    <div className="wm-cfield full-width">
                      <label>Guarantee Policy Text</label>
                      <textarea
                        rows="4"
                        value={aboutData?.corporateProfile?.guaranteeText || ''}
                        onChange={(e) => handleCorporateChange('guaranteeText', e.target.value)}
                        placeholder="Full terms of 100% result satisfaction policy..."
                      />
                    </div>
                  </div>
                </div>

                {/* Fast Facts Key-Values */}
                <div className="wm-about-card">
                  <div className="wm-about-card-head flex-between">
                    <div>
                      <h3><FaAward /> Corporate Fast Facts & Credentials</h3>
                      <p>Manage the bullet credentials (Incorporation date, offices, assurance policy, etc.).</p>
                    </div>
                    <button
                      type="button"
                      className="wm-about-btn-add"
                      onClick={handleAddFastFact}
                    >
                      <FaPlus /> Add Fast Fact
                    </button>
                  </div>

                  <div className="wm-about-facts-list">
                    {(aboutData?.corporateProfile?.fastFacts || []).map((fact, idx) => (
                      <div key={idx} className="wm-about-fact-row">
                        <div className="wm-cfield fact-label">
                          <label>Fact Label #{idx + 1}</label>
                          <input
                            type="text"
                            value={fact.label || ''}
                            onChange={(e) => handleFastFactChange(idx, 'label', e.target.value)}
                            placeholder="e.g. Incorporation Date"
                          />
                        </div>
                        <div className="wm-cfield fact-value">
                          <label>Fact Detail / Value</label>
                          <input
                            type="text"
                            value={fact.value || ''}
                            onChange={(e) => handleFastFactChange(idx, 'value', e.target.value)}
                            placeholder="e.g. 16 June 2016"
                          />
                        </div>
                        <button
                          type="button"
                          className="wm-about-btn-del row-del"
                          onClick={() => handleDeleteFastFact(idx)}
                          title="Delete fact"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. EXPERTISE & EXECUTION SECTION */}
            {aboutSubTab === 'expertise' && (
              <div className="wm-about-tab-content">
                <div className="wm-about-card">
                  <div className="wm-about-card-head">
                    <h3><FaLaptopCode /> Expertise & Execution Section Header</h3>
                    <p>Header titles for the full service portfolio section on About Us.</p>
                  </div>
                  <div className="wm-about-form-grid">
                    <div className="wm-cfield">
                      <label>Section Subtitle / Badge</label>
                      <input
                        type="text"
                        value={aboutData?.expertiseExecution?.subtitle || ''}
                        onChange={(e) => handleExpertiseChange('subtitle', e.target.value)}
                        placeholder="e.g. Expertise & Execution"
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Main Headline</label>
                      <input
                        type="text"
                        value={aboutData?.expertiseExecution?.title || ''}
                        onChange={(e) => handleExpertiseChange('title', e.target.value)}
                        placeholder="e.g. Well-Qualified Staff & Complete Services Portfolio"
                      />
                    </div>
                  </div>
                </div>

                {/* Services Cards CRUD */}
                <div className="wm-about-card">
                  <div className="wm-about-card-head flex-between">
                    <div>
                      <h3><FaCogs /> Service Offerings ({aboutData?.expertiseExecution?.services?.length || 0})</h3>
                      <p>Add, edit, or delete the services and sub-bullet items displayed on the About Us page.</p>
                    </div>
                    <button
                      type="button"
                      className="wm-about-btn-add"
                      onClick={handleAddAboutService}
                    >
                      <FaPlus /> Add New Service
                    </button>
                  </div>

                  <div className="wm-about-services-grid">
                    {(aboutData?.expertiseExecution?.services || []).map((service, idx) => (
                      <div key={service.id || idx} className="wm-about-service-card">
                        <div className="wm-about-item-top">
                          <span className="wm-about-item-badge">Service #{idx + 1}</span>
                          <button
                            type="button"
                            className="wm-about-btn-del"
                            onClick={() => handleDeleteAboutService(idx)}
                            title="Delete this service"
                          >
                            <FaTrash />
                          </button>
                        </div>

                        <div className="wm-cfield">
                          <label>Service Title</label>
                          <input
                            type="text"
                            value={service.title || ''}
                            onChange={(e) => handleServiceChange(idx, 'title', e.target.value)}
                            placeholder="e.g. Web Designing"
                          />
                        </div>

                        <div className="wm-cfield">
                          <label>Service Icon</label>
                          <select
                            value={service.icon || 'FaLaptopCode'}
                            onChange={(e) => handleServiceChange(idx, 'icon', e.target.value)}
                          >
                            <option value="FaLaptopCode">FaLaptopCode (Laptop)</option>
                            <option value="FaCogs">FaCogs (Gears / Dev)</option>
                            <option value="FaSearch">FaSearch (SEO)</option>
                            <option value="FaEnvelopeOpenText">FaEnvelopeOpenText (Email)</option>
                            <option value="FaRegLightbulb">FaRegLightbulb (Content)</option>
                            <option value="FaMobileAlt">FaMobileAlt (Mobile App)</option>
                            <option value="FaBullhorn">FaBullhorn (SMM)</option>
                            <option value="FaShareAlt">FaShareAlt (SMO)</option>
                            <option value="FaAd">FaAd (PPC / Ads)</option>
                            <option value="FaChartLine">FaChartLine (Analytics)</option>
                            <option value="FaRocket">FaRocket (Growth)</option>
                            <option value="FaAward">FaAward (Quality)</option>
                          </select>
                        </div>

                        <div className="wm-cfield full-width">
                          <label>Short Description</label>
                          <textarea
                            rows="2"
                            value={service.desc || ''}
                            onChange={(e) => handleServiceChange(idx, 'desc', e.target.value)}
                            placeholder="Brief description of this capability..."
                          />
                        </div>

                        <div className="wm-cfield full-width">
                          <div className="wm-about-item-top" style={{ marginBottom: '8px' }}>
                            <label style={{ margin: 0, fontWeight: 700 }}>
                              Sub-Features / Deliverables ({service.subFeatures?.length || 0})
                            </label>
                            <button
                              type="button"
                              className="wm-about-btn-add"
                              style={{ padding: '4px 10px', fontSize: '12px' }}
                              onClick={() => handleAddServiceSubFeature(idx)}
                            >
                              <FaPlus /> Add Sub-Feature
                            </button>
                          </div>

                          <div className="wm-about-subfeat-list">
                            {(service.subFeatures || []).map((feat, fidx) => (
                              <div key={fidx} className="wm-about-subfeat-row">
                                <span className="wm-about-subfeat-num">{fidx + 1}.</span>
                                <input
                                  type="text"
                                  value={feat}
                                  onChange={(e) => handleServiceSubFeatureChange(idx, fidx, e.target.value)}
                                  placeholder={`Sub-Feature #${fidx + 1}`}
                                />
                                <button
                                  type="button"
                                  className="wm-about-btn-del"
                                  style={{ width: '30px', height: '30px' }}
                                  onClick={() => handleDeleteServiceSubFeature(idx, fidx)}
                                  title="Delete sub-feature"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                            {(!service.subFeatures || service.subFeatures.length === 0) && (
                              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0' }}>
                                No sub-features added yet. Click "+ Add Sub-Feature" to add deliverables.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. EXECUTIVE GUIDANCE SECTION */}
            {aboutSubTab === 'guidance' && (
              <div className="wm-about-tab-content">
                <div className="wm-about-card">
                  <div className="wm-about-card-head">
                    <h3><FaUsers /> Executive Guidance Section Header</h3>
                    <p>Header titles for the leadership team section on About Us.</p>
                  </div>
                  <div className="wm-about-form-grid">
                    <div className="wm-cfield">
                      <label>Section Subtitle / Badge</label>
                      <input
                        type="text"
                        value={aboutData?.executiveGuidance?.subtitle || ''}
                        onChange={(e) => handleGuidanceChange('subtitle', e.target.value)}
                        placeholder="e.g. Executive Guidance"
                      />
                    </div>
                    <div className="wm-cfield">
                      <label>Main Headline</label>
                      <input
                        type="text"
                        value={aboutData?.executiveGuidance?.title || ''}
                        onChange={(e) => handleGuidanceChange('title', e.target.value)}
                        placeholder="e.g. Meet The Experts Guiding Your Brand"
                      />
                    </div>
                  </div>
                </div>

                {/* Leadership Team Members CRUD */}
                <div className="wm-about-card">
                  <div className="wm-about-card-head flex-between">
                    <div>
                      <h3><FaUsers /> Leadership Team ({aboutData?.executiveGuidance?.leaders?.length || 0} Executives)</h3>
                      <p>Add, edit, delete leadership members and upload their executive profile photos.</p>
                    </div>
                    <button
                      type="button"
                      className="wm-about-btn-add"
                      onClick={handleAddLeader}
                    >
                      <FaPlus /> Add Executive Leader
                    </button>
                  </div>

                  <div className="wm-about-leaders-grid">
                    {(aboutData?.executiveGuidance?.leaders || []).map((leader, idx) => (
                      <div key={leader.id || idx} className="wm-about-leader-card">
                        <div className="wm-about-item-top">
                          <span className="wm-about-item-badge">Executive #{idx + 1}</span>
                          <button
                            type="button"
                            className="wm-about-btn-del"
                            onClick={() => handleDeleteLeader(idx)}
                            title="Delete this leader"
                          >
                            <FaTrash />
                          </button>
                        </div>

                        {/* Leader Photo & Upload */}
                        <div className="wm-about-leader-photo-box">
                          <div className="wm-about-photo-preview">
                            <img
                              src={leader.image || '/Rahish Sir.png'}
                              alt={leader.name || 'Executive Leader'}
                              onError={(e) => { e.target.src = '/Rahish Sir.png'; }}
                            />
                          </div>
                          <div className="wm-about-photo-ctrls">
                            <label className="wm-about-upload-label">
                              <FaUpload /> Upload Photo
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleLeaderImageUpload(idx, e.target.files[0])}
                                style={{ display: 'none' }}
                              />
                            </label>
                            <input
                              type="text"
                              className="wm-about-img-url-input"
                              value={leader.image || ''}
                              onChange={(e) => handleLeaderChange(idx, 'image', e.target.value)}
                              placeholder="Or paste photo URL / path (/name.png)"
                            />
                          </div>
                        </div>

                        <div className="wm-cfield">
                          <label>Full Name</label>
                          <input
                            type="text"
                            value={leader.name || ''}
                            onChange={(e) => handleLeaderChange(idx, 'name', e.target.value)}
                            placeholder="e.g. Rahish Sangwan"
                          />
                        </div>

                        <div className="wm-cfield">
                          <label>Executive Role / Title</label>
                          <input
                            type="text"
                            value={leader.role || ''}
                            onChange={(e) => handleLeaderChange(idx, 'role', e.target.value)}
                            placeholder="e.g. Founder & Managing Director"
                          />
                        </div>

                        <div className="wm-cfield full-width">
                          <label>Executive Biography / Track Record</label>
                          <textarea
                            rows="3"
                            value={leader.bio || ''}
                            onChange={(e) => handleLeaderChange(idx, 'bio', e.target.value)}
                            placeholder="Over a decade of leadership in digital transformation..."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

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
                                      <span>/{blog.slug}</span>
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
                                    href={`/${blog.slug}`}
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
                {/* <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetOutstandingDefaults}
                  disabled={outstandingLoading}
                  title="Reset all tabs to default copy & mock graph"
                >
                  <FaUndoAlt /> Reset All Defaults
                </button> */}
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
                <h2><FaVideo /> Home Page Hero Slider & Media Manager</h2>
                <p>Upload videos (MP4, WebM) or images (JPG, PNG, WebP) to display in the Home Page hero section. If multiple active slides are added, an auto-playing slider will run smoothly on the home page.</p>
              </div>
              <div className="wm-out-header-actions">
                {/* <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetHeroVideo}
                  disabled={heroVideoLoading}
                  title="Reset fallback video to default /Home-Hero.mp4"
                >
                  <FaUndoAlt /> Reset Default Video
                </button> */}
              </div>
            </div>

            {/* Feedback Message Banner */}
            {(heroSlideFeedback || heroVideoFeedback) && (
              <div className={`wm-out-feedback-banner ${(heroSlideFeedback?.type === 'success' || heroVideoFeedback?.type === 'success') ? 'wm-feed-success' : 'wm-feed-error'}`}>
                {(heroSlideFeedback?.type === 'success' || heroVideoFeedback?.type === 'success') ? <FaCheckCircle /> : <FaTimes />}
                <span>{heroSlideFeedback?.message || heroVideoFeedback?.message}</span>
              </div>
            )}

            {/* 2-Column Split Workspace */}
            <div className="wm-hero-vid-grid">
              {/* Left Column: Upload Form & Slide List */}
              <div className="wm-hero-vid-form-col">
                {/* Card 1: Add New Slide (Image or Video) */}
                <div className="wm-out-card">
                  <div className="wm-out-card-header">
                    <h3><FaPlus /> Add New Hero Slide</h3>
                  </div>
                  <p className="wm-out-card-help">
                    Add a video or image slide to the home page hero slider. When 2 or more active slides exist, visitors will see an interactive slider with smooth transitions.
                  </p>

                  <div className="wm-hero-type-selector" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    <button
                      type="button"
                      className={`wm-hero-type-btn ${newSlideType === 'video' ? 'active' : ''}`}
                      onClick={() => setNewSlideType('video')}
                      style={{
                        flex: 1,
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: newSlideType === 'video' ? '2px solid #0077b6' : '1px solid #cbd5e1',
                        background: newSlideType === 'video' ? '#e0f2fe' : '#f8fafc',
                        color: newSlideType === 'video' ? '#0077b6' : '#64748b',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <FaVideo /> Video Slide
                    </button>
                    <button
                      type="button"
                      className={`wm-hero-type-btn ${newSlideType === 'image' ? 'active' : ''}`}
                      onClick={() => setNewSlideType('image')}
                      style={{
                        flex: 1,
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: newSlideType === 'image' ? '2px solid #0077b6' : '1px solid #cbd5e1',
                        background: newSlideType === 'image' ? '#e0f2fe' : '#f8fafc',
                        color: newSlideType === 'image' ? '#0077b6' : '#64748b',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <FaImage /> Image Slide
                    </button>
                  </div>

                  <div className="wm-csfield" style={{ marginBottom: '14px' }}>
                    <label>Slide Title / Label (Optional):</label>
                    <input
                      type="text"
                      value={newSlideTitle}
                      onChange={(e) => setNewSlideTitle(e.target.value)}
                      placeholder={newSlideType === 'video' ? 'e.g. Webmok Brand Reel' : 'e.g. Enterprise IT Solutions'}
                    />
                  </div>

                  {/* Method A: File Upload Dropzone */}
                  <label className="wm-out-file-dropzone wm-hero-vid-dropzone" style={{ marginBottom: '16px' }}>
                    <input
                      type="file"
                      accept={newSlideType === 'video' ? 'video/mp4,video/webm,video/ogg,video/quicktime,video/x-matroska,video/avi' : 'image/*'}
                      onChange={handleUploadHeroSlideFile}
                      disabled={heroSlideUploading}
                    />
                    <div className="wm-out-dropzone-inner">
                      {heroSlideUploading ? (
                        <>
                          <FaSpinner className="wm-spin wm-upload-spin-icon" />
                          <strong>Uploading {newSlideType === 'video' ? 'Video' : 'Image'} Slide...</strong>
                          <small>Please wait while the media file is uploading to the server...</small>
                        </>
                      ) : (
                        <>
                          {newSlideType === 'video' ? <FaVideo className="wm-upload-cloud-icon" /> : <FaImage className="wm-upload-cloud-icon" />}
                          <strong>Click or Drag & Drop {newSlideType === 'video' ? 'Video' : 'Image'} File</strong>
                          <small>{newSlideType === 'video' ? 'Supports MP4, WebM, MOV (Max 250MB)' : 'Supports JPG, PNG, WebP, SVG (Max 20MB)'}</small>
                        </>
                      )}
                    </div>
                  </label>

                  {/* Method B: Or Enter Direct URL */}
                  <div style={{ position: 'relative', textAlign: 'center', margin: '14px 0 16px' }}>
                    <span style={{ background: '#ffffff', padding: '0 10px', color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>OR ENTER DIRECT URL</span>
                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '-10px 0 0', position: 'relative', zIndex: -1 }} />
                  </div>

                  <form onSubmit={handleAddHeroSlideUrl} style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="text"
                      value={newSlideUrl}
                      onChange={(e) => setNewSlideUrl(e.target.value)}
                      placeholder={newSlideType === 'video' ? 'e.g. /Home-Hero.mp4 or https://...' : 'e.g. https://images.unsplash.com/... or /uploads/...'}
                      style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                    <button
                      type="submit"
                      className="wm-out-btn-save"
                      disabled={heroSlideSaving || !newSlideUrl.trim()}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {heroSlideSaving ? <FaSpinner className="wm-spin" /> : <FaPlus />} Add Slide
                    </button>
                  </form>
                </div>

                {/* Card 2: Current Hero Slides List */}
                <div className="wm-out-card">
                  <div className="wm-out-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3><FaLayerGroup /> Current Hero Slides ({heroSlides.length})</h3>
                    <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                      {heroSlides.filter(s => s.isActive).length} Active on Home
                    </span>
                  </div>

                  {heroSlideLoading ? (
                    <div style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                      <FaSpinner className="wm-spin" style={{ fontSize: '24px', marginBottom: '8px' }} />
                      <div>Loading hero slides...</div>
                    </div>
                  ) : heroSlides.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '32px 16px', background: '#f8fafc', borderRadius: '10px', border: '1px dashed #cbd5e1' }}>
                      <FaVideo style={{ fontSize: '32px', color: '#94a3b8', marginBottom: '10px' }} />
                      <div style={{ fontWeight: '700', color: '#334155', marginBottom: '4px' }}>No Slides Added Yet</div>
                      <div style={{ fontSize: '13px', color: '#64748b', maxWidth: '380px', margin: '0 auto' }}>
                        The Home Page is currently displaying the single fallback video (<code>{heroVideoData.videoUrl}</code>). Upload slides above to turn it into a dynamic slider!
                      </div>
                    </div>
                  ) : (
                    <div className="wm-hero-slides-admin-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {heroSlides.map((slide, idx) => (
                        <div
                          key={slide._id || slide.id || idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            opacity: slide.isActive ? 1 : 0.6
                          }}
                        >
                          {/* Mini Preview */}
                          <div style={{ width: '80px', height: '52px', borderRadius: '6px', overflow: 'hidden', background: '#000', flexShrink: 0 }}>
                            {slide.mediaType === 'video' ? (
                              <video src={getMediaUrl(slide.mediaUrl)} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <img src={getMediaUrl(slide.mediaUrl)} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            )}
                          </div>

                          {/* Details */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span
                                style={{
                                  fontSize: '10.5px',
                                  fontWeight: '800',
                                  textTransform: 'uppercase',
                                  padding: '2px 8px',
                                  borderRadius: '4px',
                                  background: slide.mediaType === 'video' ? '#0077b6' : '#10b981',
                                  color: '#ffffff'
                                }}
                              >
                                {slide.mediaType}
                              </span>
                              <strong style={{ fontSize: '14px', color: '#0d2f57', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {slide.title || `Slide #${idx + 1}`}
                              </strong>
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              <code>{slide.mediaUrl}</code>
                            </div>
                          </div>

                          {/* Actions */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button
                              type="button"
                              onClick={() => handleToggleHeroSlideActive(slide)}
                              style={{
                                padding: '6px 12px',
                                fontSize: '12px',
                                fontWeight: '700',
                                borderRadius: '6px',
                                border: 'none',
                                cursor: 'pointer',
                                background: slide.isActive ? '#dcfce7' : '#f1f5f9',
                                color: slide.isActive ? '#166534' : '#64748b'
                              }}
                            >
                              {slide.isActive ? 'Active' : 'Disabled'}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteHeroSlide(slide._id || slide.id)}
                              style={{
                                padding: '8px 10px',
                                borderRadius: '6px',
                                border: 'none',
                                background: '#fee2e2',
                                color: '#b91c1c',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center'
                              }}
                              title="Delete Slide"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card 3: Fallback Single Video Settings */}
                <div className="wm-out-card">
                  <div className="wm-out-card-header">
                    <h3><FaGlobe /> Fallback Hero Video Configuration</h3>
                  </div>
                  <form onSubmit={handleSaveHeroVideoUrl}>
                    <div className="wm-csfield">
                      <label>Fallback Video Title:</label>
                      <input
                        type="text"
                        value={heroVideoCustomTitle}
                        onChange={(e) => setHeroVideoCustomTitle(e.target.value)}
                        placeholder="e.g. Web Mok 2026 Brand Reel"
                      />
                    </div>
                    <div className="wm-csfield" style={{ marginTop: '14px' }}>
                      <label>Fallback Video Direct URL:</label>
                      <input
                        type="text"
                        value={heroVideoCustomUrl}
                        onChange={(e) => setHeroVideoCustomUrl(e.target.value)}
                        placeholder="e.g. /Home-Hero.mp4"
                      />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                      <button type="submit" className="wm-out-btn-save" disabled={heroVideoSaving}>
                        {heroVideoSaving ? <FaSpinner className="wm-spin" /> : <FaSave />} Save Fallback Video
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

                    <div className="wm-hero-preview-video-container" style={{ position: 'relative', minHeight: '220px', background: '#000' }}>
                      {heroSlides.filter(s => s.isActive).length > 0 ? (
                        heroSlides.filter(s => s.isActive)[0].mediaType === 'video' ? (
                          <video
                            key={heroSlides.filter(s => s.isActive)[0].mediaUrl}
                            src={getMediaUrl(heroSlides.filter(s => s.isActive)[0].mediaUrl)}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="wm-hero-preview-video-element"
                          />
                        ) : (
                          <img
                            src={getMediaUrl(heroSlides.filter(s => s.isActive)[0].mediaUrl)}
                            alt="Hero preview"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        )
                      ) : (
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
                      )}
                    </div>

                    <div className="wm-hero-preview-footer-note">
                      <FaInfoCircle /> {heroSlides.filter(s => s.isActive).length > 1
                        ? `Slider is active with ${heroSlides.filter(s => s.isActive).length} slides auto-playing smoothly.`
                        : 'Single media view active. Add 2 or more active slides to run the auto-sliding carousel.'}
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
                {/* <button
                  type="button"
                  className="wm-out-btn-reset-all"
                  onClick={handleResetServicesDefaults}
                  disabled={servicesLoading}
                  title="Reset all services to system defaults"
                >
                  <FaUndoAlt /> Reset Defaults
                </button> */}
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
                  <div
                    key={svc.slug || svc._id || idx}
                    className={`wm-out-subtab-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveServiceKey(svc.slug || svc._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="wm-out-subtab-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="wm-out-subtab-title">{svc.title}</span>
                    <span className="wm-svc-cat-badge">{svc.category}</span>
                    <button
                      type="button"
                      className="wm-svc-pill-del-btn"
                      title={`Delete "${svc.title}"`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteService(svc._id || svc.slug, svc.title);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
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

                    {/* Home Page Video Showcase Settings */}
                    <div className="wm-svc-video-box" style={{ marginTop: '22px', padding: '18px', background: 'rgba(0, 212, 255, 0.05)', borderRadius: '14px', border: '1.5px solid rgba(0, 212, 255, 0.35)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <FaPlayCircle style={{ color: '#00d4ff', fontSize: '20px' }} />
                          <h4 style={{ margin: 0, color: '#f8fafc', fontSize: '15px', fontWeight: '700' }}>
                            Home Page Course/Service Video Showcase Settings
                          </h4>
                        </div>
                        <span style={{ fontSize: '12px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', padding: '3px 10px', borderRadius: '12px', fontWeight: 600 }}>
                          "What We Offer" Section
                        </span>
                      </div>

                      <div className="wm-out-fields-grid">
                        <div className="wm-csfield">
                          <label>Video Badge Label (e.g. Live Web Demo, Live Student Review)</label>
                          <input
                            type="text"
                            value={currentService.videoBadge || ''}
                            onChange={(e) => handleUpdateServiceField('videoBadge', e.target.value)}
                            placeholder="e.g. Live Web Demo / SEO Ranking Proof / Student Review"
                          />
                        </div>

                        <div className="wm-csfield">
                          <label>Video File URL / Path</label>
                          <input
                            type="text"
                            value={currentService.videoUrl || ''}
                            onChange={(e) => handleUpdateServiceField('videoUrl', e.target.value)}
                            placeholder="e.g. /Home-Hero.mp4 or /TM004-ypZUa7vp.mp4 or direct link"
                          />
                        </div>
                      </div>

                      {/* Video Quick Selection & Upload */}
                      <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                        <label
                          className="wm-out-btn-reset-all"
                          style={{
                            cursor: 'pointer',
                            background: 'linear-gradient(135deg, #0284c7, #00d4ff)',
                            border: 'none',
                            color: '#ffffff',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '13px',
                            fontWeight: '700',
                            boxShadow: '0 4px 14px rgba(0, 212, 255, 0.35)'
                          }}
                        >
                          <FaUpload /> {serviceVideoUploading ? 'Uploading Video...' : 'Upload Video File (.mp4)'}
                          <input
                            type="file"
                            accept="video/mp4,video/webm,video/ogg,video/quicktime,video/mov,video/m4v"
                            style={{ display: 'none' }}
                            onChange={handleServiceVideoUpload}
                            disabled={serviceVideoUploading}
                          />
                        </label>

                        {/* Quick Presets for bundled videos */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Quick Pick:</span>
                          {[
                            { label: 'Web Hero', url: '/Home-Hero.mp4', badge: 'Live Web Demo' },
                            { label: 'Mobile App', url: '/hh3-CAsds3iE.mp4', badge: 'Mobile App Showcase' },
                            { label: 'SEO Proof', url: '/hh2-CH6clGIc.mp4', badge: 'SEO & Ranking Proof' },
                            { label: 'PPC Campaign', url: '/hh4-a6dUAa-8.mp4', badge: 'High-ROAS Ad Campaign' },
                            { label: 'E-Comm', url: '/bhuwan.mp4', badge: 'E-Commerce Store' },
                            { label: 'Social Reel', url: '/TM0016-CLpL79Mu.mp4', badge: 'Social Growth Reel' },
                            { label: 'Student Review', url: '/TM004-ypZUa7vp.mp4', badge: 'Live Student Review' }
                          ].map((preset, pi) => (
                            <button
                              key={pi}
                              type="button"
                              onClick={() => {
                                handleUpdateServiceField('videoUrl', preset.url);
                                handleUpdateServiceField('videoBadge', preset.badge);
                              }}
                              style={{
                                background: currentService.videoUrl === preset.url ? 'rgba(0, 212, 255, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                                border: currentService.videoUrl === preset.url ? '1.5px solid #00d4ff' : '1px solid rgba(255, 255, 255, 0.12)',
                                color: currentService.videoUrl === preset.url ? '#00d4ff' : '#cbd5e1',
                                padding: '5px 11px',
                                borderRadius: '6px',
                                fontSize: '11px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Video Live Preview */}
                      {currentService.videoUrl && (
                        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap', background: 'rgba(0, 0, 0, 0.35)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <div style={{ maxWidth: '320px', width: '100%', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(0, 212, 255, 0.35)', background: '#000', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                            <video
                              key={currentService.videoUrl}
                              src={resolveMediaUrl(currentService.videoUrl)}
                              controls
                              playsInline
                              style={{ width: '100%', maxHeight: '220px', display: 'block', objectFit: 'contain' }}
                            />
                          </div>
                          <div style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.7', flex: 1, minWidth: '220px' }}>
                            <div style={{ color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                              <FaCheckCircle /> Video preview ready
                            </div>
                            <div style={{ marginTop: '4px' }}>
                              <strong>File Path:</strong> <code style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{currentService.videoUrl}</code>
                            </div>
                            <div>
                              <strong>Badge Text:</strong> <code style={{ color: '#fbbf24', background: 'rgba(251, 191, 36, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{currentService.videoBadge || 'Interactive Showcase'}</code>
                            </div>
                            <p style={{ margin: '8px 0 0 0', fontSize: '11.5px', color: '#64748b' }}>
                              Click "Save Changes" below to publish this video for "{currentService.title}" on the Home Page.
                            </p>
                          </div>
                        </div>
                      )}
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

                    <button
                      type="button"
                      className="wm-out-btn-reset-all wm-svc-btn-delete-active"
                      style={{
                        color: '#ef4444',
                        borderColor: '#fca5a5',
                        background: '#fef2f2',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleDeleteService(currentService._id || currentService.slug, currentService.title)}
                      title={`Delete "${currentService.title}"`}
                    >
                      <FaTrash /> Delete "{currentService.title}"
                    </button>
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

                    <div className="wm-out-fields-grid" style={{ marginTop: '12px' }}>
                      <div className="wm-csfield">
                        <label>Home Video Badge Label</label>
                        <input
                          type="text"
                          value={newServiceData.videoBadge || ''}
                          onChange={(e) => setNewServiceData({ ...newServiceData, videoBadge: e.target.value })}
                          placeholder="e.g. Live Web Demo / Student Review"
                        />
                      </div>
                      <div className="wm-csfield">
                        <label>Home Video URL / Path</label>
                        <input
                          type="text"
                          value={newServiceData.videoUrl || ''}
                          onChange={(e) => setNewServiceData({ ...newServiceData, videoUrl: e.target.value })}
                          placeholder="e.g. /Home-Hero.mp4 or /TM004-ypZUa7vp.mp4"
                        />
                      </div>
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
                <h2><FaBriefcase /> Portfolio & Project Showcase</h2>
                <p>Manage public case studies, deliverables, and performance metric highlights shown on the Home and Portfolio pages.</p>
              </div>
              <div className="wm-out-header-actions">
                <button
                  type="button"
                  className="wm-out-btn-save"
                  onClick={handleOpenAddPortfolio}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <FaPlus /> Add New Project
                </button>
              </div>
            </div>

            {/* Feedback Banner */}
            {portfolioFeedback && (
              <div className={`wm-out-feedback-banner ${portfolioFeedback.type === 'success' ? 'wm-feed-success' : 'wm-feed-error'}`}>
                {portfolioFeedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
                <span>{portfolioFeedback.message}</span>
              </div>
            )}

            <div className="wm-adash-table-card">
              <div className="wm-atable-header">
                <h3>All Showcase Projects ({portfolioList.length})</h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Synced with MongoDB</span>
              </div>

              {portfolioLoading ? (
                <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                  <FaSpinner className="wm-spin" style={{ fontSize: '28px', marginBottom: '10px' }} />
                  <div>Loading portfolio items...</div>
                </div>
              ) : portfolioList.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px 16px', background: '#f8fafc', borderRadius: '10px' }}>
                  <FaBriefcase style={{ fontSize: '36px', color: '#94a3b8', marginBottom: '12px' }} />
                  <div style={{ fontWeight: '700', color: '#334155', fontSize: '16px' }}>No Projects in Showcase</div>
                  <p style={{ color: '#64748b', fontSize: '13.5px', marginTop: '4px' }}>Click "Add New Project" to add your first case study or deliverable.</p>
                  <button
                    type="button"
                    className="wm-out-btn-save"
                    onClick={handleOpenAddPortfolio}
                    style={{ marginTop: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <FaPlus /> Add New Project
                  </button>
                </div>
              ) : (
                <div className="wm-table-responsive">
                  <table className="wm-admin-table">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>Preview</th>
                        <th>Project Title & Tag</th>
                        <th>Client Name</th>
                        <th>Category</th>
                        <th>Outcome Metric</th>
                        <th style={{ textAlign: 'right', width: '120px' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolioList.map((proj) => (
                        <tr key={proj._id || proj.id}>
                          <td>
                            <div style={{ width: '70px', height: '48px', borderRadius: '6px', overflow: 'hidden', background: '#e2e8f0' }}>
                              <img
                                src={getMediaUrl(proj.image) || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&auto=format&fit=crop&q=80'}
                                alt={proj.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&auto=format&fit=crop&q=80'; }}
                              />
                            </div>
                          </td>
                          <td>
                            <strong style={{ fontSize: '14px', color: '#0d2f57' }}>{proj.title}</strong>
                            {proj.tag && (
                              <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                                <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '1px 6px', borderRadius: '4px', fontWeight: '600' }}>
                                  {proj.tag}
                                </span>
                              </div>
                            )}
                          </td>
                          <td style={{ fontWeight: '500' }}>{proj.client}</td>
                          <td>
                            <span style={{ textTransform: 'capitalize', background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#334155' }}>
                              {proj.categoryName || proj.category}
                            </span>
                          </td>
                          <td>
                            <strong className="wm-text-green" style={{ fontSize: '13.5px', color: '#16a34a' }}>
                              {proj.results || proj.outcome || 'Success'}
                            </strong>
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                              <button
                                type="button"
                                onClick={() => handleOpenEditPortfolio(proj)}
                                style={{
                                  padding: '6px 10px',
                                  borderRadius: '6px',
                                  border: '1px solid #cbd5e1',
                                  background: '#ffffff',
                                  color: '#0b4f8a',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  fontSize: '12.5px',
                                  fontWeight: '600'
                                }}
                                title="Edit Project"
                              >
                                <FaEdit /> Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeletePortfolio(proj._id || proj.id)}
                                style={{
                                  padding: '6px 10px',
                                  borderRadius: '6px',
                                  border: 'none',
                                  background: '#fee2e2',
                                  color: '#dc2626',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  fontSize: '12.5px'
                                }}
                                title="Delete Project"
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
          </div>
        )}

        {/* =========================================================================
            POPUP MODAL: ADD / EDIT PORTFOLIO PROJECT
           ========================================================================= */}
        {isPortfolioModalOpen && (
          <div className="wm-inq-modal-overlay" onClick={() => setIsPortfolioModalOpen(false)}>
            <div className="wm-inq-modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
              <div className="wm-inq-modal-header">
                <div>
                  <span className="wm-inq-modal-tag">{editingProjectId ? 'Edit Project' : 'New Project'}</span>
                  <h3>{editingProjectId ? 'Update Portfolio Showcase' : 'Add Project to Showcase'}</h3>
                </div>
                <button
                  type="button"
                  className="wm-inq-modal-close"
                  onClick={() => setIsPortfolioModalOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleSavePortfolio}>
                <div className="wm-inq-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                    <div className="wm-csfield">
                      <label>Project Title *</label>
                      <input
                        type="text"
                        required
                        value={portfolioFormData.title}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, title: e.target.value })}
                        placeholder="e.g. EduTech Interactive Platform"
                      />
                    </div>
                    <div className="wm-csfield">
                      <label>Client Name *</label>
                      <input
                        type="text"
                        required
                        value={portfolioFormData.client}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, client: e.target.value })}
                        placeholder="e.g. Apex Global Academy"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                    <div className="wm-csfield">
                      <label>Discipline / Category</label>
                      <select
                        value={portfolioFormData.category}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, category: e.target.value })}
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                      >
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="ecommerce">E-Commerce Solutions</option>
                        <option value="seo">SEO & Digital Marketing</option>
                      </select>
                    </div>
                    <div className="wm-csfield">
                      <label>Outcome / Metric Highlight</label>
                      <input
                        type="text"
                        value={portfolioFormData.results}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, results: e.target.value })}
                        placeholder="e.g. +320% Enrollments or 500K+ Installs"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                    <div className="wm-csfield">
                      <label>Tech Stack / Tags</label>
                      <input
                        type="text"
                        value={portfolioFormData.tag}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, tag: e.target.value })}
                        placeholder="e.g. React / Node / AWS"
                      />
                    </div>
                    <div className="wm-csfield">
                      <label>Display Order</label>
                      <input
                        type="number"
                        value={portfolioFormData.order}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, order: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                  </div>

                  {/* Project Image Selection */}
                  <div className="wm-csfield" style={{ marginBottom: '14px' }}>
                    <label>Project Cover Image</label>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '6px' }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPortfolioImageFile(e.target.files && e.target.files[0])}
                        style={{ flex: 1 }}
                      />
                    </div>
                    <div style={{ marginTop: '8px' }}>
                      <input
                        type="text"
                        value={portfolioFormData.image}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, image: e.target.value })}
                        placeholder="Or enter image URL (https://... or /uploads/...)"
                      />
                    </div>
                    {(portfolioFormData.image || portfolioImageFile) && (
                      <div style={{ marginTop: '10px', width: '120px', height: '80px', borderRadius: '8px', overflow: 'hidden', background: '#f1f5f9', border: '1px solid #cbd5e1' }}>
                        <img
                          src={portfolioImageFile ? URL.createObjectURL(portfolioImageFile) : getMediaUrl(portfolioFormData.image)}
                          alt="Selected preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="wm-csfield">
                    <label>Brief Description / Summary</label>
                    <textarea
                      rows={3}
                      value={portfolioFormData.description}
                      onChange={(e) => setPortfolioFormData({ ...portfolioFormData, description: e.target.value })}
                      placeholder="Brief overview of the project deliverables, key milestones, and business impact..."
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>
                </div>

                <div className="wm-inq-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', padding: '16px 24px', borderTop: '1px solid #e2e8f0' }}>
                  <button
                    type="button"
                    className="wm-out-btn-reset-all"
                    onClick={() => setIsPortfolioModalOpen(false)}
                    disabled={portfolioSaving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="wm-out-btn-save"
                    disabled={portfolioSaving || portfolioImageUploading}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    {(portfolioSaving || portfolioImageUploading) ? (
                      <>
                        <FaSpinner className="wm-spin" /> Saving...
                      </>
                    ) : (
                      <>
                        <FaSave /> {editingProjectId ? 'Update Project' : 'Save Project'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 8: MANAGE CAREER JOBS (Dedicated Component & CSS)
           ========================================================================= */}
        {activeTab === 'jobs' && <AdminJobs />}

        {/* =========================================================================
            TAB 9: JOB CANDIDATE INQUIRIES & APPLICATIONS (Dedicated Component & CSS)
           ========================================================================= */}
        {activeTab === 'job-inquiries' && <AdminJobInquiries />}

        {/* =========================================================================
            TAB 10: MANAGE PACKAGES CMS & PRICING TIERS
           ========================================================================= */}
        {activeTab === 'packages' && <AdminPackages />}

        {/* =========================================================================
            TAB 11: CLIENT TESTIMONIALS & GOOGLE REVIEWS CMS
           ========================================================================= */}
        {activeTab === 'testimonials' && <AdminTestimonials />}

        {/* =========================================================================
            TAB 12: STUDENT & CLIENT VIDEO REVIEWS CMS
           ========================================================================= */}
        {activeTab === 'video-reviews' && <AdminVideoReviews />}

        {/* =========================================================================
            TAB 13: CREATIVE SHOWCASE & DESIGN GALLERY CMS
           ========================================================================= */}
        {activeTab === 'creative-showcase' && <AdminCreativeShowcase />}

        {/* =========================================================================
            TAB 14: VIDEO SHOWCASE & COMMERCIAL FILMS CMS
           ========================================================================= */}
        {activeTab === 'video-showcase' && <AdminVideoShowcase />}

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
                        https://webmok.in/{blogFormData.slug || 'article-url-slug'}
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
