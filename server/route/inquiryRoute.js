const express = require('express');
const router = express.Router();
const Enquiry = require('../module/Enquiry');
const ContactMessage = require('../module/ContactMessage');

// ==========================================
// 1. ENQUIRY NOW LEADS ROUTES (/api/inquiries/enquiry)
// ==========================================

// GET all enquiries (sorted newest first)
router.get('/enquiry', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error.message);
    res.status(500).json({ success: false, message: 'Server error fetching enquiries' });
  }
});

// POST new enquiry (from modal, 28-sec callback, or hero forms)
router.post('/enquiry', async (req, res) => {
  try {
    const { name, phone, email, service, budget, timeline, source, notes } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and Phone number are required.' });
    }

    const newEnquiry = new Enquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      service: service || 'Website Development & Design Services',
      budget: budget || 'Flexible',
      timeline: timeline || 'Standard / 2-3 Weeks',
      source: source || 'Website Enquiry Form',
      notes: notes || '',
      status: 'New'
    });

    const saved = await newEnquiry.save();
    console.log(`📥 New Enquiry saved in MongoDB from ${saved.name} (${saved.phone})`);
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted and saved successfully!',
      data: saved
    });
  } catch (error) {
    console.error('Error saving enquiry:', error.message);
    res.status(500).json({ success: false, message: 'Server error saving enquiry' });
  }
});

// PUT update enquiry status or notes
router.put('/enquiry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const updateFields = {};
    if (status) updateFields.status = status;
    if (notes !== undefined) updateFields.notes = notes;

    const updated = await Enquiry.findByIdAndUpdate(id, updateFields, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    res.json({ success: true, message: 'Enquiry updated successfully', data: updated });
  } catch (error) {
    console.error('Error updating enquiry:', error.message);
    res.status(500).json({ success: false, message: 'Server error updating enquiry' });
  }
});

// DELETE enquiry
router.delete('/enquiry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Enquiry.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    res.json({ success: true, message: 'Enquiry deleted successfully from database' });
  } catch (error) {
    console.error('Error deleting enquiry:', error.message);
    res.status(500).json({ success: false, message: 'Server error deleting enquiry' });
  }
});

// ==========================================
// 2. CONTACT FORM INQUIRIES ROUTES (/api/inquiries/contact)
// ==========================================

// GET all contact messages (sorted newest first)
router.get('/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error.message);
    res.status(500).json({ success: false, message: 'Server error fetching contact messages' });
  }
});

// POST new contact form message (from Contact Us page or Home brief)
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    const newMessage = new ContactMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject ? subject.trim() : 'Project Inquiry',
      message: message.trim(),
      status: 'New'
    });

    const saved = await newMessage.save();
    console.log(`✉️ New Contact Message saved in MongoDB from ${saved.name} (${saved.email})`);
    res.status(201).json({
      success: true,
      message: 'Your message has been received and saved successfully!',
      data: saved
    });
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    res.status(500).json({ success: false, message: 'Server error saving contact message' });
  }
});

// PUT update contact message status
router.put('/contact/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await ContactMessage.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Contact message not found' });
    }

    res.json({ success: true, message: 'Contact message status updated', data: updated });
  } catch (error) {
    console.error('Error updating contact message:', error.message);
    res.status(500).json({ success: false, message: 'Server error updating contact message' });
  }
});

// DELETE contact message
router.delete('/contact/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ContactMessage.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Contact message not found' });
    }
    res.json({ success: true, message: 'Contact message deleted successfully from database' });
  } catch (error) {
    console.error('Error deleting contact message:', error.message);
    res.status(500).json({ success: false, message: 'Server error deleting contact message' });
  }
});

// GET stats summary
router.get('/stats', async (req, res) => {
  try {
    const enquiryCount = await Enquiry.countDocuments();
    const contactCount = await ContactMessage.countDocuments();
    res.json({
      success: true,
      enquiryCount,
      contactCount,
      total: enquiryCount + contactCount
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching inquiry stats' });
  }
});

module.exports = router;
