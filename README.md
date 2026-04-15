# Tesla Website v2

A modern, high-performance electric vehicle showcase website built with Next.js 15, featuring advanced animations, real-time car configuration, and comprehensive SEO optimization.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (motion/react)
- **State Management**: Redux Toolkit
- **Database**: PostgreSQL with Prisma ORM
- **Media Hosting**: Cloudinary
- **Fonts**: Custom fonts (Termina, Satoshi)

## 📋 Table of Contents

- [System Architecture](#system-architecture)
- [Design Decisions](#design-decisions)
- [Best Practices](#best-practices)
- [SEO Optimization](#seo-optimization)
- [Performance Optimization](#performance-optimization)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)

## 🏗️ System Architecture

### **App Router Architecture**

- Utilizes Next.js 15 App Router for improved performance and developer experience
- Server Components by default for optimal performance
- Client Components (`"use client"`) only where interactivity is needed
- Automatic code splitting and lazy loading

### **Hybrid Rendering Strategy**

- **Static Generation (SSG)**: Car detail pages, configure pages
- **Server-Side Rendering (SSR)**: Dynamic car listings with filters
- **Client-Side Rendering (CSR)**: Interactive components (filters, configurator)
- **Incremental Static Regeneration (ISR)**: Product pages with `revalidate`

### **State Management**

- **Redux Toolkit** for global state (filters, car data, pagination)
- **React Hooks** for local component state
- Centralized store in `/src/store` with feature-based slices
- Async thunks for API calls with proper loading/error states

## 🎯 Design Decisions

### **1. Component Architecture**

#### **Separation of Concerns**

- **UI Components** (`/components/ui`): Reusable, presentational components (Navbar, Footer)
- **Section Components** (`/components/sections`): Page-specific sections (HeroSection, MissionSection)
- **Feature Components** (`/components/cars`): Domain-specific components (CarCard, FilterPanel)

#### **Server vs Client Components**

```typescript
// Server Component (default) - for static content
export default function CarDetailPage() { ... }

// Client Component - for interactivity
"use client";
export default function FilterPanel() { ... }
```

### **2. Database Design**

#### **Prisma ORM Benefits**

- Type-safe database queries
- Automatic migrations
- Relation management
- Query optimization

#### **Schema Design Principles**

- **Normalization**: Separate tables for Cars, Variants, Colors, Images
- **Cascading Deletes**: Maintain referential integrity
- **Indexes**: Unique constraints on slugs for fast lookups
- **Timestamps**: Track creation dates for all entities

### **3. API Design**

#### **RESTful Endpoints**

```
GET  /api/cars              - List cars with filters
GET  /api/cars/:id          - Get single car
POST /api/contact           - Submit contact form
```

#### **Rate Limiting**

- In-memory rate limiter for contact form
- 3 requests per minute per IP
- Prevents spam and abuse

#### **Error Handling**

- Consistent error responses
- Proper HTTP status codes
- User-friendly error messages

### **4. Performance Optimization**

#### **Video Optimization**

- `preload="auto"` for hero video to start loading immediately
- Cloudinary transformations (`q_auto`, `f_auto`) for optimal quality/size ratio
- Responsive video sizing for different viewports

#### **Image Optimization**

- Next.js Image component for automatic optimization
- Lazy loading for off-screen images
- Proper aspect ratios to prevent layout shift

#### **Code Splitting**

- Automatic route-based code splitting
- Dynamic imports for heavy components
- Minimal initial bundle size

### **5. Animation Strategy**

#### **Framer Motion Implementation**

- **Scroll-based animations**: Hero section video expansion
- **Entrance animations**: Fade-in, slide-up effects
- **Performance**: GPU-accelerated transforms
- **Accessibility**: Respects `prefers-reduced-motion`

```typescript
// Scroll-triggered animation
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"],
});

const videoWidth = useTransform(scrollYProgress, [0.2, 0.6], ["50%", "100%"]);
```

## 🔍 SEO Optimization

### **Metadata Strategy**

#### **1. Page-Level Metadata**

Every page has comprehensive metadata:

- **Title**: Descriptive, keyword-rich titles
- **Description**: Compelling meta descriptions (150-160 characters)
- **Keywords**: Relevant search terms
- **Canonical URLs**: Prevent duplicate content issues

#### **2. Open Graph & Twitter Cards**

```typescript
openGraph: {
  title: "Tesla Model S - Electric Luxury Sedan",
  description: "Experience the future of driving...",
  images: [car.images[0].url],
  type: "article",
}
```

#### **3. Dynamic Metadata**

- Car detail pages generate metadata from database
- Includes car name, variants, and specifications
- Automatic image selection from car gallery

### **Sitemap Generation**

#### **Automatic Sitemap** (`/sitemap.xml`)

```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Dynamically generates URLs for:
  // - Homepage (priority: 1.0)
  // - Cars listing (priority: 0.9)
  // - Individual car pages (priority: 0.8)
  // - Configure pages (priority: 0.7)
  // - Contact page (priority: 0.6)
}
```

### **Robots.txt** (`/robots.txt`)

- Allows all search engines
- Blocks `/api/` and `/private/` routes
- References sitemap location

### **Structured Data** (Future Enhancement)

- Product schema for car listings
- Organization schema for company info
- BreadcrumbList for navigation

## ⚡ Performance Optimization

### **Core Web Vitals**

#### **Largest Contentful Paint (LCP)**

- Hero video optimized with Cloudinary
- Critical CSS inlined
- Preload key resources

#### **First Input Delay (FID)**

- Minimal JavaScript on initial load
- Code splitting and lazy loading
- Efficient event handlers

#### **Cumulative Layout Shift (CLS)**

- Fixed dimensions for images and videos
- Skeleton loaders for dynamic content
- Reserved space for ads/embeds

### **Loading Strategies**

#### **Progressive Enhancement**

1. HTML structure loads first
2. Critical CSS applied immediately
3. JavaScript enhances interactivity
4. Non-critical resources lazy-loaded

#### **Resource Hints**

```html
<link rel="preload" as="video" href="hero-video.mp4" />
<link rel="dns-prefetch" href="https://res.cloudinary.com" />
```

## 🗄️ Database Schema

### **Core Models**

#### **Car**

```prisma
model Car {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  tagline     String
  basePrice   Float
  description String
  topSpeed    Int
  zeroToSixty Float
  range       Int
  variants    Variant[]
  colors      Color[]
  images      CarImage[]
}
```

#### **Variant**

- Different performance tiers (Standard, Long Range, Plaid)
- Price variations
- Performance specifications

#### **Color**

- Available paint options
- Hex codes for preview
- Associated images

#### **Contact**

- Form submissions stored in database
- Rate limiting prevents spam
- Source tracking (homepage vs contact page)

### **Relationships**

- One-to-Many: Car → Variants, Colors, Images
- Many-to-One: BuildConfig → Car, Variant, Color
- Cascade deletes maintain data integrity

## 🚀 Getting Started

### **Prerequisites**

```bash
Node.js 18+
PostgreSQL database
npm/yarn/pnpm
```

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/tojo-joseph/tesla-website-v2.git
cd tesla-website-v2
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
# .env
DATABASE_URL="postgresql://user:password@localhost:5432/tesla_db"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

4. **Run database migrations**

```bash
npx prisma generate
npx prisma db push
```

5. **Seed the database** (optional)

```bash
npx prisma db seed
```

6. **Start development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
tesla-website-v2/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   └── images/                # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── cars/             # Car listing & details
│   │   ├── configure/        # Car configurator
│   │   ├── contact-us/       # Contact page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── sitemap.ts        # Dynamic sitemap
│   │   └── robots.ts         # Robots.txt
│   ├── components/
│   │   ├── cars/             # Car-specific components
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Reusable UI components
│   ├── lib/
│   │   ├── data/             # Data fetching utilities
│   │   └── prisma.ts         # Prisma client
│   └── store/                # Redux store
│       ├── carSlice.ts
│       ├── filterSlice.ts
│       └── index.ts
└── README.md
```

## 🔌 API Routes

### **GET /api/cars**

Fetch cars with filtering and pagination

**Query Parameters:**

- `search`: Search by car name
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 12)

**Response:**

```json
{
  "cars": [...],
  "total": 24,
  "page": 1,
  "totalPages": 2
}
```

### **POST /api/contact**

Submit contact form

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "serviceNeeded": "Vehicle Purchase Inquiry",
  "message": "I'm interested in...",
  "source": "contact-page"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Thank you for contacting us!",
  "id": "clx..."
}
```

## 🎨 Design System

### **Color Palette**

- **Primary**: `#0EA5E9` (Electric Blue)
- **Background**: `#0A0A0A` (Midnight Black)
- **Text**: `#FFFFFF` (White)
- **Light Gray**: `#A3A3A3`
- **Dark Gray**: `#1F1F1F`

### **Typography**

- **Headings**: Termina (Bold, Uppercase)
- **Body**: Satoshi (Regular, Medium)
- **Tracking**: Wide letter-spacing for headings

### **Spacing Scale**

- Base: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96

## 🔒 Security Best Practices

1. **Environment Variables**: Sensitive data in `.env` files
2. **Rate Limiting**: Prevent API abuse
3. **Input Validation**: Server-side validation for all forms
4. **SQL Injection Prevention**: Prisma parameterized queries
5. **CORS**: Configured for production domain
6. **CSP Headers**: Content Security Policy (future enhancement)

## 🧪 Testing Strategy (Future Enhancement)

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: API route testing
- **E2E Tests**: Playwright for critical user flows
- **Visual Regression**: Chromatic for UI consistency

## 📈 Analytics & Monitoring (Future Enhancement)

- **Google Analytics 4**: User behavior tracking
- **Vercel Analytics**: Performance monitoring
- **Sentry**: Error tracking and reporting
- **Lighthouse CI**: Automated performance audits

## 🚢 Deployment

### **Vercel (Recommended)**

```bash
npm run build
vercel --prod
```

### **Environment Variables**

Set in Vercel dashboard:

- `DATABASE_URL`
- `NEXT_PUBLIC_API_URL`

## 📝 License

This project is created by **Tojo Joseph** for educational and portfolio purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For inquiries, please use the contact form on the website or reach out via the Tesla contact page.
