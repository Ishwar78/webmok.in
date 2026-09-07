const express = require('express');
const router = express.Router();
const Blog = require('../module/Blog');

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// GET /api/blogs
router.get('/', async (req, res) => {
  try {
    const { search, category, status } = req.query;
    const query = {};

    if (status) {
      query.status = status;
    }

    if (category && category !== 'all') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { seoKeywords: { $regex: search, $options: 'i' } }
      ];
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: err.message
    });
  }
});

// GET /api/blogs/:identifier
router.get('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let blog;

    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(identifier);
    }

    if (!blog) {
      blog = await Blog.findOne({ slug: identifier });
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Increment view count
    blog.views = (blog.views || 0) + 1;
    await blog.save();

    res.json({
      success: true,
      data: blog
    });
  } catch (err) {
    console.error('Error fetching blog:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog post',
      error: err.message
    });
  }
});

// POST /api/blogs
router.post('/', async (req, res) => {
  try {
    const {
      title,
      slug: customSlug,
      category,
      author,
      readTime,
      image,
      excerpt,
      content,
      seoTitle,
      seoKeywords,
      seoDescription,
      status
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }

    let finalSlug = customSlug ? generateSlug(customSlug) : generateSlug(title);
    if (!finalSlug) finalSlug = 'post-' + Date.now();

    const existingSlug = await Blog.findOne({ slug: finalSlug });
    if (existingSlug) {
      finalSlug = finalSlug + '-' + Date.now().toString().slice(-4);
    }

    const newBlog = new Blog({
      title: title.trim(),
      slug: finalSlug,
      category: category || 'Web Tech',
      author: author || 'Web Mok Team',
      readTime: readTime || '5 min read',
      image: image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
      excerpt: excerpt || '',
      content: content,
      seoTitle: seoTitle || title,
      seoKeywords: seoKeywords || '',
      seoDescription: seoDescription || excerpt || '',
      status: status || 'Published'
    });

    const savedBlog = await newBlog.save();
    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: savedBlog
    });
  } catch (err) {
    console.error('Error creating blog:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to create blog post',
      error: err.message
    });
  }
});

// PUT /api/blogs/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      slug,
      category,
      author,
      readTime,
      image,
      excerpt,
      content,
      seoTitle,
      seoKeywords,
      seoDescription,
      status
    } = req.body;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    if (title) blog.title = title.trim();
    if (slug) {
      const genSlug = generateSlug(slug);
      const conflict = await Blog.findOne({ slug: genSlug, _id: { $ne: id } });
      if (!conflict) {
        blog.slug = genSlug;
      }
    }
    if (category !== undefined) blog.category = category;
    if (author !== undefined) blog.author = author;
    if (readTime !== undefined) blog.readTime = readTime;
    if (image !== undefined) blog.image = image;
    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (content !== undefined) blog.content = content;
    if (seoTitle !== undefined) blog.seoTitle = seoTitle;
    if (seoKeywords !== undefined) blog.seoKeywords = seoKeywords;
    if (seoDescription !== undefined) blog.seoDescription = seoDescription;
    if (status !== undefined) blog.status = status;

    const updatedBlog = await blog.save();
    res.json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedBlog
    });
  } catch (err) {
    console.error('Error updating blog:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to update blog post',
      error: err.message
    });
  }
});

// DELETE /api/blogs/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      message: 'Blog post deleted successfully',
      data: deletedBlog
    });
  } catch (err) {
    console.error('Error deleting blog:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog post',
      error: err.message
    });
  }
});

module.exports = router;
