const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const dns = require('dns');

try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {}

dotenv.config({ path: path.join(__dirname, '.env') });

const Enquiry = require('./module/Enquiry');
const ContactMessage = require('./module/ContactMessage');

const clearDemo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB Atlas...');

    const deletedEnquiries = await Enquiry.deleteMany({});
    console.log(`Deleted ${deletedEnquiries.deletedCount} demo enquiries.`);

    const deletedContact = await ContactMessage.deleteMany({});
    console.log(`Deleted ${deletedContact.deletedCount} demo contact messages.`);

    console.log('✅ All demo inquiries successfully removed from MongoDB database!');
    process.exit(0);
  } catch (err) {
    console.error('Error clearing demo data:', err);
    process.exit(1);
  }
};

clearDemo();
