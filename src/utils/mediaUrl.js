export const resolveMediaUrl = (url) => {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }
  if (url.startsWith('/uploads/') || url.startsWith('uploads/')) {
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    return `http://localhost:5005${cleanPath}`;
  }
  return url;
};

export const handleImageError = (e, fallback = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80') => {
  if (e && e.currentTarget) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallback;
  }
};
