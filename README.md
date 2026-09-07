# Web Mok - React Enterprise Website

Complete modern React Single Page Application (SPA) for **Web Mok Pvt. Ltd.** (https://webmok.in/), converted from legacy PHP into modern React 18 with Vite, React Router DOM v6, and React Icons.

---

## 🌟 Key Features & Highlights

1. **Brand Theme & Styling**:
   - Modern IT / Digital agency aesthetic with deep navy (`#0d2f57`), brand blue (`#0b4f8a`), electric cyan (`#00a8cc`), and coral accents (`#ff5e3a`).
   - Typography: **`Montserrat, sans-serif`** throughout all pages and components.
   - Body & Paragraph font-size: `15px` - `17px`.
   - **Isolated CSS Architecture**: Every single component and page has its own dedicated `.css` file.

2. **Navbar & Mega Menu**:
   - Fixed header with subtle shadow on scroll.
   - Web Mok Logo with custom vector ribbon waves and typography.
   - **Interactive Mega Menu** covering 8 service categories:
     - E-Commerce Development
     - App Development
     - Web Development (WordPress, Web Design, Landing Pages, etc.)
     - Digital Marketing (SEO, PPC, Social Media, Content, etc.)
     - Graphic & Video Editing
     - Outstanding Services (Lead Gen, ORM, SMO, etc.)
     - Business Development Consulting
   - **"Call Me 28 Seconds"**: Interactive callback modal with instant 28-second countdown timer simulation.
   - **"Enquiry Now"**: Full quotation inquiry modal with service selection and validation.
   - Mobile-responsive sliding drawer with collapsible accordions.

3. **Home Page**:
   - **Hero Section**: Catchy headlines, floating ROI pills, trust badges.
   - **Outstanding Reviews Section**: Exact match to Screenshot 4 (Google 4.9 / 1,925 reviews, Facebook 4.8 / 106 votes, Justdial 4.9 / 78 votes).
   - **Services Showcase**: 6 core service cards with hover interactions and direct links.
   - **Why Choose Us Section**: Value propositions, 10+ years experience badge.
   - **5-Step Work Flow Blueprint**: Discovery, Strategy, Design/Dev, Testing, Launch.
   - **Interactive "Outstanding" Section**: Exact match to Screenshot 5:
     - 6 dynamic tabs (Real-Time Analytics, PPC, Online Marketing, Email Marketing, Social Marketing, Digital Marketing).
     - Dynamic content switching on click with checklist items ("Super Responsive", "High Security", "Optimal Choice").
     - 4 Counter Cards: 950+ Completed Projects, 850+ Happy Clients, 550+ Multi Services, 750+ Winning Awards.
   - **Portfolio Showcase**: Filterable cards (All, Web, App, E-Commerce, SEO) with case study links.
   - **Dual-Column Contact & Lead Form**: Direct contact info on left, quote form on right.
   - **Latest Blogs Section**: Top articles with tags, excerpts, dates, and read more links.

4. **All Service & Detail Pages**:
   - Dedicated service directory (`/services`) with category filters.
   - Dynamic service detail engine (`/services/:serviceSlug`) providing in-depth deliverables, tech stacks, and FAQs.

5. **Complete Footer Pages**:
   - About Us (`/about-us`)
   - Portfolio Listing (`/portfolio`) & Project Detail (`/portfolio/:projectId`)
   - Blog Listing (`/blogs`) & Article Detail (`/blogs/:blogId`)
   - Contact Us (`/contact-us`)
   - Testimonials (`/testimonials`)
   - Refund Policy (`/refund-policy`)
   - Terms & Conditions (`/terms-and-conditions`)
   - Privacy Policy (`/privacy-policy`)
   - Careers (`/career`)
   - Offers & Discounts (`/offers`)
   - Hire SEO Expert (`/hire-seo-expert`)
   - Payment Portal (`/payment`) - UPI, NetBanking, Cards, and International Wire
   - HTML Site Map (`/site-map`)

6. **Admin Portal**:
   - Admin Login (`/admin/login`): Clean authentication interface. Demo login: `admininfo@webmok.in` / `Admin@info1234`.
   - Admin Dashboard (`/admin/dashboard`):
     - Quick KPI summary cards.
     - Manage Services (add, view, delete).
     - Manage Blogs (publish, view, delete).
     - Client Inquiries / Lead Management.
     - Portfolio Case Studies tracker.
   - Admin Sidebar with dedicated buttons.

---

## 🚀 How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Production artifacts are generated in the `dist/` directory.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```
