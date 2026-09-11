const mongoose = require('mongoose');

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    badge: { type: String, default: '' },
    highlight: { type: Boolean, default: false },
    usdPrice: { type: String, default: '' },
    inrPrice: { type: String, default: '' },
    localPrice: { type: String, default: '' },
    desc: { type: String, default: '' },
    features: { type: [String], default: [] }
  },
  { _id: false }
);

const statSchema = new mongoose.Schema(
  {
    num: { type: String, default: '' },
    label: { type: String, default: '' }
  },
  { _id: false }
);

const serviceSchema = new mongoose.Schema(
  {
    icon: { type: String, default: 'FaSearch' },
    title: { type: String, required: true },
    desc: { type: String, default: '' }
  },
  { _id: false }
);

const comparisonSchema = new mongoose.Schema(
  {
    feature: { type: String, default: '' },
    local: { type: String, default: '' },
    webmok: { type: String, default: '' }
  },
  { _id: false }
);

const resultStatSchema = new mongoose.Schema(
  {
    metric: { type: String, default: '' },
    label: { type: String, default: '' }
  },
  { _id: false }
);

const marketInsightSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    desc: { type: String, default: '' }
  },
  { _id: false }
);

const processStepSchema = new mongoose.Schema(
  {
    num: { type: String, default: '' },
    title: { type: String, default: '' },
    desc: { type: String, default: '' }
  },
  { _id: false }
);

const industrySchema = new mongoose.Schema(
  {
    icon: { type: String, default: 'FaBuilding' },
    name: { type: String, default: '' },
    desc: { type: String, default: '' }
  },
  { _id: false }
);

const testimonialSchema = new mongoose.Schema(
  {
    quote: { type: String, default: '' },
    author: { type: String, default: '' },
    role: { type: String, default: '' },
    company: { type: String, default: '' },
    rating: { type: Number, default: 5 }
  },
  { _id: false }
);

const faqSchema = new mongoose.Schema(
  {
    q: { type: String, required: true },
    a: { type: String, required: true }
  },
  { _id: false }
);

const internationalPageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      default: ''
    },
    region: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: 'USD'
    },
    currencySymbol: {
      type: String,
      default: '$'
    },
    tagline: {
      type: String,
      default: ''
    },
    heroHighlight: {
      type: String,
      default: ''
    },
    heroItalic: {
      type: String,
      default: ''
    },
    leadDesc: {
      type: String,
      default: ''
    },
    bodyDesc: {
      type: String,
      default: ''
    },
    heroImage: {
      type: String,
      default: ''
    },
    stats: {
      type: [statSchema],
      default: []
    },
    services: {
      type: [serviceSchema],
      default: []
    },
    whyHireOutsideTitle: {
      type: String,
      default: ''
    },
    whyHireOutsideSubtitle: {
      type: String,
      default: ''
    },
    whyHireDesc1: {
      type: String,
      default: ''
    },
    whyHireDesc2: {
      type: String,
      default: ''
    },
    comparisonPoints: {
      type: [comparisonSchema],
      default: []
    },
    resultsTitle: {
      type: String,
      default: ''
    },
    resultsSubtitle: {
      type: String,
      default: ''
    },
    resultsStats: {
      type: [resultStatSchema],
      default: []
    },
    resultsImages: {
      type: [String],
      default: []
    },
    marketInsightsTitle: {
      type: String,
      default: ''
    },
    marketInsightsSubtitle: {
      type: String,
      default: ''
    },
    marketInsights: {
      type: [marketInsightSchema],
      default: []
    },
    processSteps: {
      type: [processStepSchema],
      default: []
    },
    industries: {
      type: [industrySchema],
      default: []
    },
    plans: {
      type: [planSchema],
      default: []
    },
    testimonials: {
      type: [testimonialSchema],
      default: []
    },
    faqs: {
      type: [faqSchema],
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

module.exports = mongoose.model('InternationalPage', internationalPageSchema);
