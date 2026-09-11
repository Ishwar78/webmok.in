import { useState, useEffect, useCallback } from 'react';

const API_BASE = 'http://localhost:5005/api';

/**
 * Universal price formatter for international pages
 * Supports custom localPrice, custom inrPrice, custom usdPrice, and auto-currency conversion.
 * Completely immune to commas in price strings, preventing NaN.
 */
export const formatInternationalPrice = (plan, currency, pageData = {}) => {
  if (!plan) return '';

  const cleanUsd = Number(String(plan.usdPrice || '').replace(/[^0-9.]/g, '')) || 0;
  const pageCurrency = (pageData.currency || 'USD').toUpperCase();
  const pageCurrencySymbol = pageData.currencySymbol || '$';
  const curr = (currency || pageCurrency).toUpperCase();

  // 1. If viewing in Page's Native Currency (e.g. AED for Dubai, CAD for Canada, GBP for London)
  if (curr === pageCurrency && plan.localPrice) {
    const rawLocal = String(plan.localPrice).trim();
    if (rawLocal.startsWith(pageCurrency) || rawLocal.startsWith(pageCurrencySymbol)) {
      return rawLocal;
    }
    return `${pageCurrencySymbol}${rawLocal}`;
  }

  // 2. INR currency
  if (curr === 'INR') {
    if (plan.inrPrice) {
      const rawInr = String(plan.inrPrice).trim();
      return rawInr.startsWith('₹') ? rawInr : `₹${rawInr}`;
    }
    return `₹${Math.round(cleanUsd * 83).toLocaleString('en-IN')}`;
  }

  // 3. USD currency
  if (curr === 'USD') {
    if (plan.usdPrice) {
      const rawUsd = String(plan.usdPrice).trim();
      return rawUsd.startsWith('$') ? rawUsd : `$${rawUsd}`;
    }
    return '$0';
  }

  // 4. Other currencies conversion rates
  const rates = {
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    AED: { symbol: 'AED ', rate: 3.67 },
    AUD: { symbol: 'A$', rate: 1.52 },
    CAD: { symbol: 'C$', rate: 1.36 },
    SGD: { symbol: 'S$', rate: 1.34 }
  };

  const target = rates[curr] || { symbol: curr + ' ', rate: 1 };
  if (curr === pageCurrency && plan.localPrice) {
    return String(plan.localPrice).startsWith(target.symbol) ? plan.localPrice : `${target.symbol}${plan.localPrice}`;
  }

  const converted = Math.round(cleanUsd * target.rate);
  return `${target.symbol}${converted.toLocaleString()}`;
};

/**
 * Custom hook to dynamically fetch international geo page data from MongoDB
 * with seamless fallback to static bundled data if offline or loading.
 *
 * @param {string} slug - The page slug, e.g. 'dubai-digital-marketing'
 * @param {object} fallbackData - Static fallback object
 */
export const useInternationalPageData = (slug, fallbackData = null) => {
  const [pageData, setPageData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPage = useCallback(async () => {
    if (!slug) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/international-pages/${slug}`);
      if (!res.ok) {
        throw new Error(`Failed to load page data (${res.status})`);
      }
      const data = await res.json();
      const pageDoc = data?.data || data?.page;

      if (data && data.success && pageDoc) {
        // Merge with fallback data if available to prevent any undefined fields
        if (fallbackData) {
          setPageData({
            ...fallbackData,
            ...pageDoc,
            stats: pageDoc.stats?.length ? pageDoc.stats : fallbackData.stats,
            services: pageDoc.services?.length ? pageDoc.services : fallbackData.services,
            plans: pageDoc.plans?.length ? pageDoc.plans : fallbackData.plans,
            testimonials: pageDoc.testimonials?.length ? pageDoc.testimonials : fallbackData.testimonials,
            faqs: pageDoc.faqs?.length ? pageDoc.faqs : fallbackData.faqs,
            marketInsights: pageDoc.marketInsights?.length ? pageDoc.marketInsights : fallbackData.marketInsights,
            processSteps: pageDoc.processSteps?.length ? pageDoc.processSteps : fallbackData.processSteps,
            industries: pageDoc.industries?.length ? pageDoc.industries : fallbackData.industries,
            comparisonPoints: pageDoc.comparisonPoints?.length ? pageDoc.comparisonPoints : fallbackData.comparisonPoints,
            resultsStats: pageDoc.resultsStats?.length ? pageDoc.resultsStats : fallbackData.resultsStats
          });
        } else {
          setPageData(pageDoc);
        }
        setError(null);
      } else {
        if (fallbackData) setPageData(fallbackData);
      }
    } catch (err) {
      // Graceful fallback to static data
      console.warn(`[useInternationalPageData] Using fallback for "${slug}":`, err.message);
      if (fallbackData) {
        setPageData(fallbackData);
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [slug, fallbackData]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  return { pageData, loading, error, refetch: fetchPage };
};

export default useInternationalPageData;
