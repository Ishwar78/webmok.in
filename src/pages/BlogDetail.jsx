import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaShareAlt,
  FaPhoneAlt,
  FaSpinner,
  FaClock
} from 'react-icons/fa';
import './BlogDetail.css';

const BlogDetail = ({ onOpenCallMe, onOpenEnquiry }) => {
  const { blogId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Default fallback articles
  const defaultBlogDetails = {
    'future-of-web-development-2026': {
      title: 'Top Web Development Trends in 2026: Why Modern Frameworks Matter',
      date: 'August 28, 2026',
      author: 'Web Mok Tech Desk',
      readTime: '6 min read',
      category: 'Web Tech',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
      content: '<h2>The Web Development Landscape in 2026</h2><p>The web development landscape in 2026 is moving faster than ever. As businesses demand sub-second load times, instant interactive feedback, and frictionless cross-device experiences, traditional monolithic architectures are rapidly giving way to modern component-driven paradigms.</p><h3>1. Rise of Server Components and Zero-Bundle Hydration</h3><p>Modern React frameworks allow engineering teams to execute compute-intensive rendering on high-speed edge servers, delivering pure lightweight HTML and CSS directly to client devices. This dramatically shrinks initial bundle payloads and ensures instant Core Web Vitals satisfaction.</p><h3>2. Headless Commerce & Decoupled Backends</h3><p>Enterprises are no longer constrained by legacy all-in-one CMS systems. By separating the customer-facing frontend from inventory and payment backends via GraphQL and REST APIs, businesses achieve unmatched layout freedom and rapid A/B testing capability.</p><h3>3. AI-Assisted Personalization & Conversational Interfaces</h3><p>Modern web apps are no longer static digital brochures. From intelligent on-site search to dynamic pricing calculators and conversational quotation bots, modern web experiences adapt in real-time to each visitor’s specific intent.</p><blockquote>At Web Mok Pvt. Ltd., our engineering methodology is anchored in these modern standards. We ensure every web platform we deliver is built for enterprise longevity, bank-grade security, and measurable ROI.</blockquote>',
      seoTitle: 'Top Web Development Trends in 2026 | Web Mok Pvt Ltd',
      seoKeywords: 'web development 2026, react development, server components, web development company delhi',
      seoDescription: 'Explore the top web development trends in 2026 including server components, headless commerce, and AI integrations with Web Mok.'
    },
    'seo-ranking-factors-guide': {
      title: 'Mastering Search Engine Optimization: How to Outrank Big Brands Organically',
      date: 'August 19, 2026',
      author: 'SEO Strategy Lead',
      readTime: '8 min read',
      category: 'SEO Insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      content: '<h2>Winning Against Big Brands in Organic Search</h2><p>Competing against established enterprise giants in Google organic search results can feel daunting. However, Google’s latest search algorithms place unprecedented value on topical authority, genuine user experience signals, and specific user intent satisfaction.</p><h3>1. Topical Authority Over Random Keywords</h3><p>Rather than chasing disconnected high-volume search queries, modern winning SEO strategies build comprehensive topic clusters. By publishing pillar articles supported by interlinked sub-topic guides, you establish demonstrable subject-matter credibility.</p><h3>2. Technical Excellence & Core Web Vitals</h3><p>Google explicitly prioritizes websites that load quickly and remain visually stable. Ensuring high Largest Contentful Paint (LCP) and minimal Interaction to Next Paint (INP) scores is now non-negotiable for competitive rank positions.</p><h3>3. High-Quality Digital PR & Earned Backlinks</h3><p>Algorithmic link spam filters are stricter than ever. Sustainable organic dominance requires earned citations from industry associations, authoritative media outlets, and verified customer testimonials.</p>',
      seoTitle: 'Mastering Search Engine Optimization Guide 2026 | Web Mok',
      seoKeywords: 'seo ranking factors, search engine optimization guide, seo company delhi rohtak, white hat seo',
      seoDescription: 'Master Google search ranking factors and outrank large competitors with Web Mok expert SEO strategies.'
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5005/api/blogs/' + blogId);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            const data = json.data;
            setArticle({
              title: data.title,
              date: data.createdAt
                ? new Date(data.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })
                : 'Recent',
              author: data.author || 'Web Mok Team',
              category: data.category || 'Web Tech',
              readTime: data.readTime || '5 min read',
              image: data.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
              content: data.content,
              seoTitle: data.seoTitle,
              seoKeywords: data.seoKeywords,
              seoDescription: data.seoDescription,
              excerpt: data.excerpt
            });
            return;
          }
        }
      } catch (err) {
        console.warn('Backend API unavailable, using fallback:', err);
      }

      // Fallback
      const fallback = defaultBlogDetails[blogId] || {
        title: blogId ? blogId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Web Mok Publication',
        date: 'August 2026',
        author: 'Web Mok Editorial Team',
        category: 'Digital Strategy',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
        content: '<p>Digital strategy is the foundation of every high-growth modern business. In today’s competitive digital ecosystem, having a modern website and targeted advertising campaigns is no longer optional — it is the cornerstone of brand survival and customer acquisition.</p><p>By integrating high-speed web engineering with continuous SEO optimization and disciplined paid traffic management, businesses can achieve exponential compound returns on their marketing spend.</p><p>Web Mok Pvt. Ltd. continues to partner with forward-thinking enterprises across India and internationally to engineer tailor-made digital growth ecosystems.</p>'
      };
      setArticle(fallback);
      setLoading(false);
    };

    fetchArticle();
  }, [blogId]);

  // SEO Dynamic Title & Meta Tag Injection
  useEffect(() => {
    if (article) {
      document.title = article.seoTitle || (article.title + ' | Web Mok Digital Insights');

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = article.seoDescription || article.excerpt || article.title;

      if (article.seoKeywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.name = 'keywords';
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = article.seoKeywords;
      }
    }

    return () => {
      document.title = 'Web Mok | Top Digital Marketing & Web Development Company';
    };
  }, [article]);

  if (loading && !article) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00a8cc' }}>
        <FaSpinner className="wm-spinner-icon" style={{ fontSize: '32px' }} />
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="wm-bdetail-root">
      {/* Header */}
      <section className="wm-bdetail-hero">
        <div className="wm-bdetail-container">
          <Link to="/blogs" className="wm-bdetail-back">
            <FaArrowLeft /> Back to All Articles
          </Link>
          <span className="wm-bdetail-tag">{article.category}</span>
          <h1 className="wm-bdetail-title">{article.title}</h1>
          <div className="wm-bdetail-meta">
            <span><FaCalendarAlt /> {article.date}</span>
            <span><FaUser /> By {article.author}</span>
            {article.readTime && <span><FaClock /> {article.readTime}</span>}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.image && (
        <div className="wm-bdetail-img-sec">
          <div className="wm-bdetail-container">
            <img src={article.image} alt={article.title} className="wm-bdetail-hero-img" />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="wm-bdetail-body-sec">
        <div className="wm-bdetail-container wm-bdetail-layout">
          <main className="wm-bdetail-main">
            <div className="wm-bdetail-article-card">
              {/* Rich HTML Content Rendering */}
              {typeof article.content === 'string' ? (
                <div
                  className="wm-bdetail-rich-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : Array.isArray(article.content) ? (
                article.content.map((paragraph, index) => (
                  <p key={index} className="wm-bdetail-paragraph">{paragraph}</p>
                ))
              ) : null}

              <div className="wm-bdetail-share-box">
                <span><FaShareAlt /> Share this article with your network</span>
              </div>
            </div>
          </main>

          <aside className="wm-bdetail-sidebar">
            <div className="wm-bside-card wm-bside-cta">
              <h3>Need Digital Marketing Support?</h3>
              <p>Our specialists can help scale your online presence, organic rankings, and sales pipeline.</p>
              <button className="wm-bside-btn-quote" onClick={onOpenEnquiry}>
                Request Free Audit
              </button>
              <button className="wm-bside-btn-call" onClick={onOpenCallMe}>
                <FaPhoneAlt /> Call Me in 28 Seconds
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
