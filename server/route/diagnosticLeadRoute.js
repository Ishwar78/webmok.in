const express = require('express');
const router = express.Router();
const DiagnosticLead = require('../module/DiagnosticLead');

// GET all diagnostic leads
router.get('/', async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { phoneOrEmail: { $regex: search, $options: 'i' } },
        { serviceName: { $regex: search, $options: 'i' } }
      ];
    }

    const leads = await DiagnosticLead.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: leads.length, data: leads });
  } catch (error) {
    console.error('Error fetching diagnostic leads:', error);
    res.status(500).json({ success: false, message: 'Server error fetching leads', error: error.message });
  }
});

// POST create a new diagnostic lead
router.post('/', async (req, res) => {
  try {
    const { phoneOrEmail, serviceName, pageUrl, notes } = req.body;

    if (!phoneOrEmail || !phoneOrEmail.trim()) {
      return res.status(400).json({ success: false, message: 'Phone number or Email is required' });
    }

    const lead = new DiagnosticLead({
      phoneOrEmail: phoneOrEmail.trim(),
      serviceName: serviceName ? serviceName.trim() : 'General Service',
      pageUrl: pageUrl || '',
      notes: notes || ''
    });

    const saved = await lead.save();
    res.status(201).json({ success: true, message: 'Diagnostic request submitted successfully', data: saved });
  } catch (error) {
    console.error('Error creating diagnostic lead:', error);
    res.status(500).json({ success: false, message: 'Server error saving diagnostic lead', error: error.message });
  }
});

// PUT update lead status or notes
router.put('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body;
    const updateData = {};
    if (status !== undefined) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const updated = await DiagnosticLead.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead updated successfully', data: updated });
  } catch (error) {
    console.error('Error updating diagnostic lead:', error);
    res.status(500).json({ success: false, message: 'Server error updating lead', error: error.message });
  }
});

// DELETE a lead
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await DiagnosticLead.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
    res.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting diagnostic lead:', error);
    res.status(500).json({ success: false, message: 'Server error deleting lead', error: error.message });
  }
});

module.exports = router;
