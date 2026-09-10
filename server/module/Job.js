const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      trim: true
    },
    department: {
      type: String,
      trim: true,
      default: 'Engineering'
    },
    location: {
      type: String,
      trim: true,
      default: 'New Delhi / Hybrid'
    },
    type: {
      type: String,
      trim: true,
      default: 'Full Time'
    },
    experience: {
      type: String,
      trim: true,
      default: '2 - 4 Years'
    },
    salary: {
      type: String,
      trim: true,
      default: 'Best in Industry'
    },
    description: {
      type: String,
      trim: true
    },
    requirements: {
      type: [String],
      default: []
    },
    isActive: {
      type: Boolean,
      default: true
    },
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
