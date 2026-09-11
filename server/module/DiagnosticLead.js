const mongoose = require('mongoose');

const DiagnosticLeadSchema = new mongoose.Schema({
  phoneOrEmail: {
    type: String,
    required: [true, 'Phone number or Email is required'],
    trim: true
  },
  serviceName: {
    type: String,
    default: 'General Service',
    trim: true
  },
  pageUrl: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'archived'],
    default: 'new'
  },
  notes: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DiagnosticLead', DiagnosticLeadSchema);
