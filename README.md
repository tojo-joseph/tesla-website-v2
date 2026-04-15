# Tesla Website V2

A modern, full-stack Tesla car website built with Next.js, featuring interactive car browsing, detailed product pages, and a comprehensive build-and-price configurator.

## 🚀 Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - UI library with hooks
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Redux Toolkit** - State management

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Database ORM
- **PostgreSQL (Neon)** - Relational database

### Testing

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

## 📋 Features

### Landing Page

- Eye-catching hero section with video background
- Tesla branding and theming
- Performance and sustainability sections
- Responsive navigation bar
- Contact form with email integration

### Product Listing Page

- Server-side data fetching from API
- Responsive grid layout with car cards
- Real-time search functionality
- Price range filtering with sliders
- Server-side pagination
- Redux state management for filters

### Car Details Page

- Dynamic routing with slug-based URLs
- Comprehensive car information display
- Interactive color selector with image switching
- Variant and configuration options
- Real-time price calculation
- "Build and Price" button to configurator

### Configuration Page

- 3-step configuration flow (Variant → Color → Review)
- Real-time price updates
- Redux state persistence
- Email integration for orders
- Test drive scheduling

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd tesla-website-v2
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

```env
DATABASE_URL="your-postgresql-connection-string"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🧪 Testing

### Install Testing Dependencies

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest @playwright/test
```

### Run Unit Tests

```bash
npm test
```

### Run E2E Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run E2E tests
npm run test:e2e

# Run E2E tests in UI mode
npm run test:e2e:ui
```

### Test Coverage

```bash
npm run test:coverage
```

## 📁 Project Structure

```
tesla-website-v2/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── cars/         # Cars API endpoint
│   │   ├── cars/             # Car listing and detail pages
│   │   ├── configure/        # Build and Price configurator
│   │   └── contact-us/       # Contact page
│   ├── components/            # React components
│   │   ├── cars/             # Car-related components
│   │   ├── sections/         # Page sections
│   │   └── ui/               # UI components
│   ├── lib/                   # Utility functions
│   │   ├── data/             # Data fetching functions
│   │   └── prisma.ts         # Prisma client
│   └── store/                 # Redux store
├── prisma/                    # Database schema and migrations
├── e2e/                       # E2E tests
└── public/                    # Static assets
```

## 🗄️ Database Schema

### Car Model

- Basic information (name, slug, description, price)
- Performance specs (top speed, 0-60, range)
- Relationships with variants, colors, and images

### Variant Model

- Different trim levels (Long Range, Plaid, etc.)
- Pricing and specifications
- Performance metrics

### Color Model

- Color name and hex code
- Associated images for each color
- Car relationships

### CarImage Model

- Image URLs (Cloudinary)
- Primary image flag
- Alt text for accessibility

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run db:seed` - Seed database with sample data
- `npx prisma studio` - Open Prisma Studio (database GUI)

## 🎨 Design Features

- Custom Tesla fonts (Termina, Satoshi)
- Electric blue (#0EA5E9) accent color
- Dark theme with Tesla branding
- Smooth animations and transitions
- Responsive design for all devices
- Accessible UI components

## 🔌 API Endpoints

### GET /api/cars

Fetch paginated car listings with filtering

**Query Parameters:**

- `search` - Search by name or tagline
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 9)

**Response:**

```json
{
  "data": [...],
  "total": 10,
  "page": 1,
  "totalPages": 2
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```env
DATABASE_URL="production-postgresql-url"
NEXT_PUBLIC_API_URL="https://your-domain.com"
```

## 📝 Testing Strategy

### Unit Tests

- Component rendering
- Props validation
- User interactions
- State management

### Integration Tests

- API route testing
- Database queries
- Data transformation
- Error handling

### E2E Tests

- User flows (browse → detail → configure → order)
- Search and filtering
- Color selection
- Form submissions
- Navigation

## 🤝 Contributing

This is a student project for educational purposes.

## 📄 License

This project is for educational purposes only.
