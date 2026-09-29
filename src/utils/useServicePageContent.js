import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5005/api';

/**
 * useServicePageContent
 * Fetches dynamic content for a specific service page by slug from MongoDB.
 * Seamlessly falls back to default static content if server is offline or loading.
 *
 * @param {string} slug - Unique identifier for the service (e.g. 'seo-services-company')
 * @param {object} defaultData - Optional static defaults
 * @returns {object} { data, loading, heroTitle, ratingScore, ratingCount, overviewTitle, overviewParagraph1, overviewParagraph2, faqs }
 */
export const useServicePageContent = (slug, defaultData = {}) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    // Try to load cached content immediately for instantaneous render
    try {
      const cached = localStorage.getItem(`webmok_service_content_${slug}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          setData((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch (e) {}

    const fetchContent = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/service-pages/${slug}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            if (isMounted) {
              setData(json.data);
              try {
                localStorage.setItem(`webmok_service_content_${slug}`, JSON.stringify(json.data));
              } catch (e) {}
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          console.warn(`[useServicePageContent] Backend offline, using defaults for ${slug}:`, err.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return {
    data,
    loading,
    error,
    heroTitle: data.heroTitle || defaultData.heroTitle || '',
    heroSubtitle: data.heroSubtitle || defaultData.heroSubtitle || '',
    ratingScore: data.heroRatingScore || defaultData.heroRatingScore || '4.9',
    ratingCount: data.heroRatingReviewCount || defaultData.heroRatingReviewCount || '250+ client reviews',
    ratingText: data.heroRatingText || defaultData.heroRatingText || '',
    overviewTitle: data.overviewTitle || defaultData.overviewTitle || '',
    overviewParagraph1: data.overviewParagraph1 || defaultData.overviewParagraph1 || '',
    overviewParagraph2: data.overviewParagraph2 || defaultData.overviewParagraph2 || '',
    features: Array.isArray(data.features) && data.features.length > 0 ? data.features : (defaultData.features || []),
    faqs: Array.isArray(data.faqs) && data.faqs.length > 0 ? data.faqs : (defaultData.faqs || [])
  };
};

export default useServicePageContent;
