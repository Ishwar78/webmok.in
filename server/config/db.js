const mongoose = require('mongoose');
const Admin = require('../module/Admin');
const ContactInfo = require('../module/ContactInfo');
const Blog = require('../module/Blog');
const Outstanding = require('../module/Outstanding');
const bcrypt = require('bcryptjs');
const dns = require('dns');

// Set reliable public DNS servers to resolve MongoDB Atlas SRV records on Windows
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {
  // fallback to system default if restricted
}

const defaultContactDetails = {
  phonePrimary: '8684031003',
  phoneSecondary: '+91 98765 43210',
  emailPrimary: 'info@webmok.in',
  emailSupport: 'support@webmok.in',
  address: '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',
  workingHours: 'Monday - Saturday: 9:30 AM to 7:00 PM (Sunday Closed)',
  whatsapp: '8684031003',
  isDefault: true
};

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URL;
    if (!mongoUri) {
      throw new Error('MONGODB_URL is not defined in .env file!');
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);

    // Auto-seed or verify admin credentials in database
    await seedDefaultAdmin();

    // Auto-seed contact info if none exists in database
    await seedDefaultContactInfo();

    // Auto-seed initial rich blogs if collection is empty
    await seedDefaultBlogs();

    // Auto-seed Outstanding tabs if collection is empty
    await seedDefaultOutstanding();
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

const seedDefaultAdmin = async () => {
  try {
    const adminEmail = 'admininfo@webmok.in';
    const adminPasswordPlain = 'Admin@info1234';

    let existingAdmin = await Admin.findOne({ email: adminEmail.toLowerCase() });

    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(adminPasswordPlain, salt);

      const newAdmin = new Admin({
        name: 'Web Mok Main Admin',
        email: adminEmail.toLowerCase(),
        password: hashedPassword,
        role: 'superadmin',
        isActive: true
      });

      await newAdmin.save();
      console.log(`🎉 Admin credentials successfully created & saved in MongoDB database!`);
      console.log(`   Email: ${adminEmail}`);
      console.log(`   Password: ${adminPasswordPlain}`);
    } else {
      const isMatch = await bcrypt.compare(adminPasswordPlain, existingAdmin.password);
      if (!isMatch) {
        const salt = await bcrypt.genSalt(10);
        existingAdmin.password = await bcrypt.hash(adminPasswordPlain, salt);
        existingAdmin.isActive = true;
        await existingAdmin.save();
        console.log(`🔄 Admin password updated in MongoDB database to: ${adminPasswordPlain}`);
      } else {
        console.log(`✅ Admin credentials verified in MongoDB database for: ${adminEmail}`);
      }
    }
  } catch (err) {
    console.error(`⚠️ Error verifying/seeding admin in MongoDB: ${err.message}`);
  }
};

const seedDefaultContactInfo = async () => {
  try {
    const count = await ContactInfo.countDocuments();
    if (count === 0) {
      const info = new ContactInfo(defaultContactDetails);
      await info.save();
      console.log('✅ Default Contact Info successfully seeded in MongoDB database!');
    } else {
      console.log('✅ Contact Info already exists in MongoDB database.');
    }
  } catch (err) {
    console.error(`⚠️ Error seeding Contact Info in MongoDB: ${err.message}`);
  }
};

const seedDefaultBlogs = async () => {
  try {
    const count = await Blog.countDocuments();
    if (count === 0) {
      const initialBlogs = [
        {
          title: 'Top Web Development Trends in 2026: Why Modern Frameworks Matter',
          slug: 'future-of-web-development-2026',
          category: 'Web Tech',
          author: 'Web Mok Tech Desk',
          readTime: '6 min read',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
          excerpt: 'Discover how modern server components, headless architectures, micro-interactions, and AI integrations are reshaping enterprise web development.',
          content: '<h2>The Web Development Landscape in 2026</h2><p>The web development landscape in 2026 is moving faster than ever. As businesses demand sub-second load times, instant interactive feedback, and frictionless cross-device experiences, traditional monolithic architectures are rapidly giving way to modern component-driven paradigms.</p><h3>1. Rise of Server Components and Zero-Bundle Hydration</h3><p>Modern React frameworks allow engineering teams to execute compute-intensive rendering on high-speed edge servers, delivering pure lightweight HTML and CSS directly to client devices. This dramatically shrinks initial bundle payloads and ensures instant Core Web Vitals satisfaction.</p><h3>2. Headless Commerce & Decoupled Backends</h3><p>Enterprises are no longer constrained by legacy all-in-one CMS systems. By separating the customer-facing frontend from inventory and payment backends via GraphQL and REST APIs, businesses achieve unmatched layout freedom and rapid A/B testing capability.</p><h3>3. AI-Assisted Personalization & Conversational Interfaces</h3><p>Modern web apps are no longer static digital brochures. From intelligent on-site search to dynamic pricing calculators and conversational quotation bots, modern web experiences adapt in real-time to each visitor’s specific intent.</p><blockquote>At Web Mok Pvt. Ltd., our engineering methodology is anchored in these modern standards. We ensure every web platform we deliver is built for enterprise longevity, bank-grade security, and measurable ROI.</blockquote>',
          seoTitle: 'Top Web Development Trends in 2026 | Web Mok Pvt Ltd',
          seoKeywords: 'web development 2026, react development, server components, web development company delhi',
          seoDescription: 'Explore the top web development trends in 2026 including server components, headless commerce, and AI integrations with Web Mok.',
          views: 3420,
          status: 'Published'
        },
        {
          title: 'Mastering Search Engine Optimization: How to Outrank Big Brands Organically',
          slug: 'seo-ranking-factors-guide',
          category: 'SEO Insights',
          author: 'SEO Strategy Lead',
          readTime: '8 min read',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
          excerpt: 'A comprehensive blueprint to winning the Google search algorithm using search intent mapping, technical site health, and high-authority backlinks.',
          content: '<h2>Winning Against Big Brands in Organic Search</h2><p>Competing against established enterprise giants in Google organic search results can feel daunting. However, Google’s latest search algorithms place unprecedented value on topical authority, genuine user experience signals, and specific user intent satisfaction.</p><h3>1. Topical Authority Over Random Keywords</h3><p>Rather than chasing disconnected high-volume search queries, modern winning SEO strategies build comprehensive topic clusters. By publishing pillar articles supported by interlinked sub-topic guides, you establish demonstrable subject-matter credibility.</p><h3>2. Technical Excellence & Core Web Vitals</h3><p>Google explicitly prioritizes websites that load quickly and remain visually stable. Ensuring high Largest Contentful Paint (LCP) and minimal Interaction to Next Paint (INP) scores is now non-negotiable for competitive rank positions.</p><h3>3. High-Quality Digital PR & Earned Backlinks</h3><p>Algorithmic link spam filters are stricter than ever. Sustainable organic dominance requires earned citations from industry associations, authoritative media outlets, and verified customer testimonials.</p>',
          seoTitle: 'Mastering Search Engine Optimization Guide 2026 | Web Mok',
          seoKeywords: 'seo ranking factors, search engine optimization guide, seo company delhi rohtak, white hat seo',
          seoDescription: 'Master Google search ranking factors and outrank large competitors with Web Mok expert SEO strategies.',
          views: 4890,
          status: 'Published'
        },
        {
          title: 'How We Reduced Cost Per Lead by 58% Using Smart Google & Meta Ads',
          slug: 'ppc-lead-generation-secrets',
          category: 'PPC & Ads',
          author: 'Performance Marketing Desk',
          readTime: '5 min read',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
          excerpt: 'Step inside our PPC playbook covering negative keyword sculpting, ad copywriting heuristics, and conversion-optimized landing page funnels.',
          content: '<h2>Slashing Cost-Per-Acquisition with Smart PPC Strategy</h2><p>Paid search and performance social media campaigns are the fastest vehicles for predictable revenue. However, without meticulous conversion funnel architecture and rigorous negative keyword pruning, ad budgets bleed unnecessarily.</p><h3>1. Granular Keyword Intent & Negative Matching</h3><p>We eliminate non-converting informational searches before spending a single rupee. By constantly sculpting negative keyword libraries, every ad rupee bids exclusively on high-purchase-intent prospects.</p><h3>2. High-Converting Fast Landing Page Funnels</h3><p>Never send paid traffic to a generic homepage. Our tailored landing pages load under 0.8 seconds and feature frictionless 1-step consultation triggers.</p>',
          seoTitle: 'Reduce Cost Per Lead by 58% with Smart PPC | Web Mok',
          seoKeywords: 'ppc lead generation, google ads management delhi, lower cost per lead, roas optimization',
          seoDescription: 'Learn how Web Mok reduced cost per lead by 58% using precision Google and Meta ad management.',
          views: 2710,
          status: 'Published'
        },
        {
          title: 'Mobile App Architecture: Choosing Between React Native and Flutter',
          slug: 'mobile-app-growth-strategies',
          category: 'App Strategy',
          author: 'Mobile Lead Architect',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
          excerpt: 'An unbiased comparison of developer velocity, native bridging, UI fidelity, and long-term maintainability for corporate mobile applications.',
          content: '<h2>Cross-Platform Mobile Development in 2026</h2><p>Building separate native codebases in Swift and Kotlin is costly and slows time-to-market. Both React Native and Flutter have evolved into robust enterprise-ready solutions with 60fps performance.</p><h3>React Native Advantages</h3><p>Leverages existing JavaScript/TypeScript teams, seamless code sharing with React web applications, and direct native UI widget rendering.</p><h3>Flutter Advantages</h3><p>Consistent Skia rendering engine across Android and iOS with zero platform-specific UI discrepancies.</p>',
          seoTitle: 'React Native vs Flutter Architecture Guide 2026 | Web Mok',
          seoKeywords: 'react native vs flutter, mobile app development delhi, cross platform mobile apps',
          seoDescription: 'Comprehensive technical comparison between React Native and Flutter for mobile app development.',
          views: 1980,
          status: 'Published'
        },
        {
          title: '12 Proven E-Commerce UX Tweaks That Double Checkout Conversions',
          slug: 'ecommerce-conversion-rate-optimization',
          category: 'E-Commerce',
          author: 'E-Commerce Specialist',
          readTime: '6 min read',
          image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=80',
          excerpt: 'Tactical CRO strategies covering one-page checkouts, sticky buy buttons, social proof badges, and instant UPI/wallet payment flows.',
          content: '<h2>Maximizing Online Store Conversions</h2><p>Acquiring store visitors is expensive. Improving your conversion rate from 1.5% to 3.0% instantly doubles your gross profit without increasing ad spend.</p><h3>1. Sticky Mobile Buy & UPI Triggers</h3><p>Over 82% of Indian e-commerce orders are placed on mobile devices. Having an omnipresent sticky Buy Now CTA accelerates impulsive purchases.</p><h3>2. Transparent Shipping & Delivery Timelines</h3><p>Hidden delivery costs at the final step are the #1 reason for cart abandonment. Disclose clear delivery dates upfront.</p>',
          seoTitle: '12 E-Commerce UX Tweaks to Double Conversions | Web Mok',
          seoKeywords: 'ecommerce conversion rate optimization, ecommerce web development, shopify development delhi',
          seoDescription: '12 actionable e-commerce UX tactics to double store sales and reduce cart abandonment.',
          views: 3120,
          status: 'Published'
        },
        {
          title: 'The Power of Short-Form Video: Building High-Trust Brands on Reels',
          slug: 'social-media-video-reels-strategy',
          category: 'Video & Social',
          author: 'Creative Director',
          readTime: '5 min read',
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80',
          excerpt: 'How our clients leverage 30-second storytelling, motion graphics, and organic algorithms to capture attention and drive inbound leads.',
          content: '<h2>Winning Social Attention with Short-Form Video</h2><p>Attention spans are shorter than ever. High-converting brands no longer post static images alone; they publish engaging 15-30 second reels that educate, entertain, and inspire action.</p><h3>1. Hook in the First 3 Seconds</h3><p>The first 3 seconds determine whether a user continues watching or swipes past. Use bold visual text hooks and clear value propositions.</p><h3>2. Direct Call to Action</h3><p>Guide the viewer clearly to DM for quotations or visit the link in bio.</p>',
          seoTitle: 'Short-Form Video & Reels Strategy for Business Growth | Web Mok',
          seoKeywords: 'social media marketing delhi, reels marketing, video marketing company rohtak delhi',
          seoDescription: 'Leverage Instagram reels and short-form video to build high-trust brands and generate qualified leads.',
          views: 2450,
          status: 'Published'
        }
      ];
      await Blog.insertMany(initialBlogs);
      console.log('✅ 6 initial rich blogs successfully seeded in MongoDB database!');
    } else {
      console.log(`✅ Blogs already exist in MongoDB database (count: ${count}).`);
    }
  } catch (err) {
    console.error(`⚠️ Error seeding Blogs in MongoDB: ${err.message}`);
  }
};

const seedDefaultOutstanding = async () => {
  try {
    const count = await Outstanding.countDocuments();
    if (count === 0) {
      const defaultTabs = [
        {
          tabKey: 'analytics',
          tabNumber: '01',
          tabTitle: 'Real-Time Analytics',
          icon: 'FaChartLine',
          heading: 'Real-Time Analytics & BI',
          description: 'WebMok Pvt Ltd and team perform in-depth analysis on your business real-time status. We architect data dashboards and conversion analytics that eliminate ad waste and maximize customer lifetime value.',
          points: [
            {
              title: 'Super Responsive',
              text: 'Enthusiastic senior engineering team ready to accelerate your business goals with cutting-edge views and rapid technical execution.'
            },
            {
              title: 'High Security',
              text: 'We guarantee 100% data security, SSL encryption, and strict protection for your proprietary brand content across all digital channels.'
            },
            {
              title: 'Optimal Choice',
              text: 'Services engineered by WebMok consistently achieve the highest industry benchmarks for consumer satisfaction and sustained ROI.'
            }
          ],
          mediaType: 'graph',
          mediaUrl: '',
          mediaBadgeText: 'Active Growth Module',
          order: 1
        },
        {
          tabKey: 'ppc',
          tabNumber: '02',
          tabTitle: 'Pay-Per-Click',
          icon: 'FaBullhorn',
          heading: 'High-Intent Pay-Per-Click (PPC)',
          description: 'Supercharge your inbound pipeline with precision-engineered Google Search Ads, Performance Max, and remarketing funnels designed for maximum ROAS and minimized acquisition costs.',
          points: [
            {
              title: 'Targeted High-Intent Buyers',
              text: 'Capture prospects actively searching for your high-ticket offerings with exact keyword sculpting and negative match strategies.'
            },
            {
              title: 'A/B Tested High-Converting Copy',
              text: 'Compelling ad creatives, continuous conversion rate optimization, and dedicated frictionless landing page flows.'
            },
            {
              title: 'Transparent Budget Tracking',
              text: 'Real-time daily budget telemetry with verified cost-per-acquisition reporting and zero hidden markups.'
            }
          ],
          mediaType: 'graph',
          mediaUrl: '',
          mediaBadgeText: 'PPC Conversion Engine',
          order: 2
        },
        {
          tabKey: 'online',
          tabNumber: '03',
          tabTitle: 'Online Marketing',
          icon: 'FaLaptopCode',
          heading: 'Omnichannel Online Marketing',
          description: 'Comprehensive 360-degree digital roadmaps to position your brand as the definitive authority in your niche, outpace rivals, and establish perpetual lead funnels.',
          points: [
            {
              title: 'Data-Driven Positioning',
              text: 'Competitor gap analysis and custom brand messaging that directly speaks to high-value decision makers.'
            },
            {
              title: 'Unified Brand Cohesion',
              text: 'Synchronized visual presence across search engines, social platforms, email flows, and publisher networks.'
            },
            {
              title: 'Compounding Market Share',
              text: 'Continuous multi-channel visibility that builds long-term organic equity and sustainable revenue expansion.'
            }
          ],
          mediaType: 'graph',
          mediaUrl: '',
          mediaBadgeText: '360° Omnichannel Hub',
          order: 3
        },
        {
          tabKey: 'email',
          tabNumber: '04',
          tabTitle: 'Email Marketing',
          icon: 'FaEnvelope',
          heading: 'Email Marketing & Automation',
          description: 'Turn cold prospects into repeat, high-paying clients through behavioral email automation, hyper-personalized retention sequences, and conversion-focused newsletters.',
          points: [
            {
              title: 'Smart Segmentation Triggers',
              text: 'Dynamic audience segmentation based on buyer lifecycle stage, interaction history, and transactional intent.'
            },
            {
              title: 'High Inbox Deliverability',
              text: 'DKIM, SPF, and DMARC technical setup ensuring your communications land straight in the primary inbox.'
            },
            {
              title: 'Automated Recovery Funnels',
              text: 'Recover lost transactions and nurture inquiries into closed contracts on complete autopilot.'
            }
          ],
          mediaType: 'graph',
          mediaUrl: '',
          mediaBadgeText: 'Lifecycle Automation',
          order: 4
        },
        {
          tabKey: 'social',
          tabNumber: '05',
          tabTitle: 'Social Marketing',
          icon: 'FaUsers',
          heading: 'Viral Social Media Marketing',
          description: 'Build a passionate, loyal community around your brand with thumb-stopping social creative campaigns across Instagram, LinkedIn, YouTube, and Facebook.',
          points: [
            {
              title: 'High-Engagement Motion Assets',
              text: 'Captivating reels, carousel posts, infographics, and interactive storytelling engineered for virality.'
            },
            {
              title: 'Brand Reputation & Sentiment',
              text: 'Proactive community management, brand voice consistency, and positive sentiment cultivation.'
            },
            {
              title: 'Influencer & UGC Amplification',
              text: 'Partner with industry voices to establish immediate social proof and generate organic word of mouth.'
            }
          ],
          mediaType: 'graph',
          mediaUrl: '',
          mediaBadgeText: 'Social Virality Matrix',
          order: 5
        },
        {
          tabKey: 'digital',
          tabNumber: '06',
          tabTitle: 'Digital Marketing',
          icon: 'FaRocket',
          heading: 'Full Digital Transformation',
          description: 'Seamlessly blend modern React engineering, cloud microservices, high-ROI paid traffic, and organic SEO into a unified digital powerhouse that scales your enterprise.',
          points: [
            {
              title: 'Modern 2026 Tech Stack',
              text: 'Modern React architectures, ultrafast edge cloud deployments, headless CMS, and sub-second load times.'
            },
            {
              title: '360° Conversion Rate Optimization',
              text: 'Heatmap behavioral analysis, frictionless UX paths, and frictionless one-click lead capture flows.'
            },
            {
              title: 'Infinite Scalability',
              text: 'Cloud systems engineered to effortlessly handle hundreds of thousands of concurrent visitors without latency.'
            }
          ],
          mediaType: 'graph',
          mediaUrl: '',
          mediaBadgeText: 'Enterprise Scale Engine',
          order: 6
        }
      ];
      await Outstanding.insertMany(defaultTabs);
      console.log('✅ 6 initial Outstanding tabs successfully seeded in MongoDB database!');
    } else {
      console.log(`✅ Outstanding tabs already exist in MongoDB database (count: ${count}).`);
    }
  } catch (err) {
    console.error(`⚠️ Error seeding Outstanding tabs in MongoDB: ${err.message}`);
  }
};

module.exports = { connectDB, seedDefaultAdmin, seedDefaultContactInfo, seedDefaultBlogs, seedDefaultOutstanding };

