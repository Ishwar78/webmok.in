const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true
    },
    slug: {
      type: String,
      required: [true, 'Blog slug is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    category: {
      type: String,
      default: 'Web Tech',
      trim: true
    },
    author: {
      type: String,
      default: 'Web Mok Team',
      trim: true
    },
    readTime: {
      type: String,
      default: '5 min read',
      trim: true
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
      trim: true
    },
    excerpt: {
      type: String,
      default: '',
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Blog content is required']
    },
    seoTitle: {
      type: String,
      default: '',
      trim: true
    },
    seoKeywords: {
      type: String,
      default: '',
      trim: true
    },
    seoDescription: {
      type: String,
      default: '',
      trim: true
    },
    views: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      enum: ['Published', 'Draft'],
      default: 'Published'
    }
  },
  {
    timestamps: true
  }
);

blogSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
});

blogSchema.set('toJSON', { virtuals: true });
blogSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Blog', blogSchema);
