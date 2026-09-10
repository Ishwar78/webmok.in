import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaUser, FaArrowRight, FaSearch, FaSpinner } from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [loading, setLoading] = useState(false);

  const defaultBlogPosts = [
    {
      id: 'future-of-web-development-2026',
      title: 'Top Web Development Trends in 2026: Why Modern Frameworks Matter',
      date: 'August 28, 2026',
      author: 'Web Mok Tech Desk',
      readTime: '6 min read',
      excerpt: 'Discover how modern server components, headless architectures, micro-interactions, and AI integrations are reshaping enterprise web development.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80',
      category: 'Web Tech'
    },
    {
      id: 'seo-ranking-factors-guide',
      title: 'Mastering Search Engine Optimization: How to Outrank Big Brands Organically',
      date: 'August 19, 2026',
      author: 'SEO Strategy Lead',
      readTime: '8 min read',
      excerpt: 'A comprehensive blueprint to winning the Google search algorithm using search intent mapping, technical site health, and high-authority backlinks.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=80',
      category: 'SEO Insights'
    },
    {
      id: 'ppc-lead-generation-secrets',
      title: 'How We Reduced Cost Per Lead by 58% Using Smart Google & Meta Ads',
      date: 'August 10, 2026',
      author: 'Performance Marketing Desk',
      readTime: '5 min read',
      excerpt: 'Step inside our PPC playbook covering negative keyword sculpting, ad copywriting heuristics, and conversion-optimized landing page funnels.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80',
      category: 'PPC & Ads'
    },
    {
      id: 'mobile-app-growth-strategies',
      title: 'Mobile App Architecture: Choosing Between React Native and Flutter',
      date: 'July 30, 2026',
      author: 'Mobile Lead Architect',
      readTime: '7 min read',
      excerpt: 'An unbiased comparison of developer velocity, native bridging, UI fidelity, and long-term maintainability for corporate mobile applications.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&auto=format&fit=crop&q=80',
      category: 'App Strategy'
    },
    {
      id: 'ecommerce-conversion-rate-optimization',
      title: '12 Proven E-Commerce UX Tweaks That Double Checkout Conversions',
      date: 'July 15, 2026',
      author: 'E-Commerce Specialist',
      readTime: '6 min read',
      excerpt: 'Tactical CRO strategies covering one-page checkouts, sticky buy buttons, social proof badges, and instant UPI/wallet payment flows.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=700&auto=format&fit=crop&q=80',
      category: 'E-Commerce'
    },
    {
      id: 'social-media-video-reels-strategy',
      title: 'The Power of Short-Form Video: Building High-Trust Brands on Reels',
      date: 'July 04, 2026',
      author: 'Creative Director',
      readTime: '5 min read',
      excerpt: 'How our clients leverage 30-second storytelling, motion graphics, and organic algorithms to capture attention and drive inbound leads.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&auto=format&fit=crop&q=80',
      category: 'Video & Social'
    }
  ];

  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5005/api/blogs?status=Published');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            const mapped = json.data.map((item) => ({
              id: item.slug || item._id,
              title: item.title,
              date: item.createdAt
                ? new Date(item.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })
                : 'Recent',
              author: item.author || 'Web Mok Team',
              readTime: item.readTime || '5 min read',
              excerpt: item.excerpt || '',
              image: item.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80',
              category: item.category || 'Web Tech',
              seoTitle: item.seoTitle,
              seoKeywords: item.seoKeywords,
              seoDescription: item.seoDescription
            }));
            setBlogPosts(mapped);
          }
        }
      } catch (err) {
        console.warn('Backend blogs API unavailable, rendering default posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.seoKeywords && post.seoKeywords.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === 'all' || post.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="wm-blogspage-root">
      {/* Hero */}
      <section className="wm-blogspage-hero">
        <div className="wm-blogspage-container">
          <span className="wm-blogspage-tag">Knowledge & Insights</span>
          <h1 className="wm-blogspage-title">Web Mok Digital Insights</h1>
          <p className="wm-blogspage-desc">
            Actionable strategies, expert analyses, and practical guides on web development, mobile apps, SEO, and paid performance marketing.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="wm-blogspage-controls-sec">
        <div className="wm-blogspage-container wm-controls-row">
          <div className="wm-blogspage-search-box">
            <FaSearch className="wm-search-icon" />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="wm-blogspage-tags">
            <button
              className={'wm-btag-btn ' + (selectedTag === 'all' ? 'active' : '')}
              onClick={() => setSelectedTag('all')}
            >
              All
            </button>
            <button
              className={'wm-btag-btn ' + (selectedTag === 'Web Tech' ? 'active' : '')}
              onClick={() => setSelectedTag('Web Tech')}
            >
              Web Tech
            </button>
            <button
              className={'wm-btag-btn ' + (selectedTag === 'SEO Insights' ? 'active' : '')}
              onClick={() => setSelectedTag('SEO Insights')}
            >
              SEO Insights
            </button>
            <button
              className={'wm-btag-btn ' + (selectedTag === 'PPC & Ads' ? 'active' : '')}
              onClick={() => setSelectedTag('PPC & Ads')}
            >
              PPC & Ads
            </button>
            <button
              className={'wm-btag-btn ' + (selectedTag === 'App Strategy' ? 'active' : '')}
              onClick={() => setSelectedTag('App Strategy')}
            >
              App Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="wm-blogspage-grid-sec">
        <div className="wm-blogspage-container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#00a8cc' }}>
              <FaSpinner className="wm-spinner-icon" style={{ fontSize: '28px' }} />
              <p style={{ marginTop: '12px', color: '#64748b' }}>Loading articles...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              <h3>No articles found matching "{searchTerm}"</h3>
              <p>Try searching for different keywords or select another category above.</p>
            </div>
          ) : (
            <div className="wm-blogspage-grid">
              {filtered.map((blog) => (
                <Link
                  key={blog.id}
                  to={'/' + blog.id}
                  className="wm-blogspage-card"
                  title={'Read ' + blog.title}
                >
                  <div className="wm-bcard-thumb-wrap">
                    <img src={blog.image} alt={blog.title} className="wm-bcard-thumb" />
                    <span className="wm-bcard-tag">{blog.category}</span>
                  </div>
                  <div className="wm-bcard-body">
                    <div className="wm-bcard-meta">
                      <span><FaRegCalendarAlt /> {blog.date}</span>
                      <span>• {blog.readTime}</span>
                    </div>
                    <h3 className="wm-bcard-title">{blog.title}</h3>
                    <p className="wm-bcard-excerpt">{blog.excerpt}</p>
                    <div className="wm-bcard-read-row">
                      <span className="wm-bcard-read-link">
                        Read Article <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
