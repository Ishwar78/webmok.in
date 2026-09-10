const mongoose = require('mongoose');

const videoReviewSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, 'Student/Client name is required'],
      trim: true
    },
    course: {
      type: String,
      default: 'Advanced Digital Marketing with AI',
      trim: true
    },
    videoUrl: {
      type: String,
      required: [true, 'Video URL or file path is required'],
      trim: true
    },
    batch: {
      type: String,
      default: '2025-26 Batch',
      trim: true
    },
    tag: {
      type: String,
      default: 'WEB MOK - STORY',
      trim: true
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5
    },
    order: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('VideoReview', videoReviewSchema);
