const mongoose = require('mongoose');

const serviceFaqSchema = new mongoose.Schema(
  {
    q: { type: String, required: true },
    a: { type: String, required: true }
  },
  { _id: false }
);

const serviceSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'Web Development'
    },
    icon: {
      type: String,
      default: 'FaLaptopCode'
    },
    metric: {
      type: String,
      default: 'Top Performance'
    },
    tag: {
      type: String,
      default: 'Digital Solution'
    },
    desc: {
      type: String,
      required: true,
      default: ''
    },
    videoUrl: {
      type: String,
      default: ''
    },
    videoBadge: {
      type: String,
      default: 'Interactive Showcase'
    },
    tags: {
      type: [String],
      default: []
    },
    subFeatures: {
      type: [String],
      default: []
    },
    headline: {
      type: String,
      default: ''
    },
    overview: {
      type: String,
      default: ''
    },
    features: {
      type: [String],
      default: []
    },
    techStack: {
      type: [String],
      default: []
    },
    timeline: {
      type: String,
      default: '2 to 4 Weeks'
    },
    faqs: {
      type: [serviceFaqSchema],
      default: []
    },
    status: {
      type: String,
      enum: ['Active', 'Draft'],
      default: 'Active'
    },
    order: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Service', serviceSchema);
