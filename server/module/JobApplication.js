const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    message: {
      type: String,
      trim: true
    },
    jobTitle: {
      type: String,
      trim: true,
      default: 'General Application'
    },
    jobId: {
      type: String,
      trim: true
    },
    cvUrl: {
      type: String,
      trim: true
    },
    cvOriginalName: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'],
      default: 'Pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
