import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5005/api';

/**
 * Custom hook to dynamically synchronize package page data from MongoDB backend.
 * Falls back immediately to defaultData so there is zero initial delay or flash of unstyled content.
 * When backend data arrives, smoothly updates:
 * - name, tagline, heroTitleHighlight, leadDesc, bodyDesc, image
 * - stats (merging or replacing with backend stats)
 * - plans (updating prices, descriptions, features, popular tags)
 * - faqs (updating questions & answers)
 */
export const usePackageData = (slug, defaultData) => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    fetch(`${API_BASE}/packages/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(json => {
        if (!isMounted || !json.success || !json.data) return;
        const dbData = json.data;

        setData(prev => {
          // Merge plans
          let mergedPlans = prev.plans;
          if (Array.isArray(dbData.plans) && dbData.plans.length > 0) {
            mergedPlans = dbData.plans.map((dbPlan, idx) => {
              const prevPlan = (prev.plans && prev.plans[idx]) || {};
              return {
                ...prevPlan,
                ...dbPlan,
                highlight: dbPlan.popular !== undefined ? dbPlan.popular : prevPlan.highlight
              };
            });
          }

          // Merge stats
          let mergedStats = prev.stats;
          if (Array.isArray(dbData.stats) && dbData.stats.length > 0) {
            mergedStats = dbData.stats.map((dbStat, idx) => {
              const prevStat = (prev.stats && prev.stats[idx]) || {};
              return {
                ...prevStat,
                ...dbStat
              };
            });
          }

          // Merge faqs
          let mergedFaqs = prev.faqs;
          if (Array.isArray(dbData.faqs) && dbData.faqs.length > 0) {
            mergedFaqs = dbData.faqs;
          }

          return {
            ...prev,
            name: dbData.name || prev.name,
            shortName: dbData.shortName || prev.shortName,
            tagline: dbData.tagline || prev.tagline,
            heroTitleHighlight: dbData.heroTitleHighlight || prev.heroTitleHighlight,
            leadDesc: dbData.leadDesc || prev.leadDesc,
            bodyDesc: dbData.bodyDesc || prev.bodyDesc,
            image: dbData.image !== undefined ? dbData.image : prev.image,
            stats: mergedStats,
            plans: mergedPlans,
            faqs: mergedFaqs
          };
        });
      })
      .catch(() => {
        // Silently use defaultData
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return data;
};

export default usePackageData;
