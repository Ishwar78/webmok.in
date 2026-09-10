const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { connectDB } = require('./config/db');
const authRoutes = require('./route/authRoute');
const inquiryRoutes = require('./route/inquiryRoute');
const contactInfoRoutes = require('./route/contactInfoRoute');
const blogRoutes = require('./route/blogRoute');
const outstandingRoutes = require('./route/outstandingRoute');
const heroVideoRoutes = require('./route/heroVideoRoute');
const heroSlideRoutes = require('./route/heroSlideRoute');
const serviceRoutes = require('./route/serviceRoute');
const aboutRoutes = require('./route/aboutRoute');
const portfolioRoutes = require('./route/portfolioRoute');
const jobRoutes = require('./route/jobRoute');
const jobApplicationRoutes = require('./route/jobApplicationRoute');
const packageRoutes = require('./route/packageRoute');
const testimonialRoutes = require('./route/testimonialRoute');
const videoReviewRoutes = require('./route/videoReviewRoute');
const creativeShowcaseRoutes = require('./route/creativeShowcaseRoute');
const videoShowcaseRoutes = require('./route/videoShowcaseRoute');

// Load environment variables from server/.env
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Uploads Folder Statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB and Auto-seed Admin, Contact Info, and Sample Inquiries
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/contact-info', contactInfoRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/outstanding', outstandingRoutes);
app.use('/api/hero-video', heroVideoRoutes);
app.use('/api/hero-slides', heroSlideRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/video-reviews', videoReviewRoutes);
app.use('/api/creative-showcase', creativeShowcaseRoutes);
app.use('/api/video-showcase', videoShowcaseRoutes);

// Root & Health Check Endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Web Mok Backend API is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      authLogin: 'POST /api/auth/login',
      authVerify: 'GET /api/auth/verify',
      inquiriesEnquiry: 'GET, POST, PUT, DELETE /api/inquiries/enquiry',
      inquiriesContact: 'GET, POST, PUT, DELETE /api/inquiries/contact',
      inquiriesStats: 'GET /api/inquiries/stats',
      contactInfo: 'GET, POST /api/contact-info',
      blogs: 'GET, POST, PUT, DELETE /api/blogs'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    database: 'connected',
    service: 'webmok-api'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Web Mok Server listening on port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
});
