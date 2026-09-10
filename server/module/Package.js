const mongoose = require('mongoose');

const packagePlanSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    badge: { type: String, default: '' },
    inrPrice: { type: String, default: '' },
    usdPrice: { type: String, default: '' },
    period: { type: String, default: '/ month' },
    desc: { type: String, default: '' },
    features: { type: [String], default: [] },
    popular: { type: Boolean, default: false }
  },
  { _id: false }
);

const packageStatSchema = new mongoose.Schema(
  {
    num: { type: String, default: '' },
    label: { type: String, default: '' }
  },
  { _id: false }
);

const packageFaqSchema = new mongoose.Schema(
  {
    q: { type: String, required: true },
    a: { type: String, required: true }
  },
  { _id: false }
);

const packageSchema = new mongoose.Schema(
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
    shortName: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: 'SEO'
    },
    tagline: {
      type: String,
      default: ''
    },
    heroTitleHighlight: {
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
    image: {
      type: String,
      default: ''
    },
    stats: {
      type: [packageStatSchema],
      default: []
    },
    plans: {
      type: [packagePlanSchema],
      default: []
    },
    faqs: {
      type: [packageFaqSchema],
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

module.exports = mongoose.model('Package', packageSchema);
