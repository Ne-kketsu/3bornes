# Galerie des Trois Bornes - Project Documentation

## 🎯 Project Overview

A modern, sleek website for **Galerie des Trois Bornes**, an art gallery and event space located in Paris. The design is inspired by Apple's minimalist aesthetic, featuring glassmorphism effects, smooth animations, and a responsive layout.

## 🎨 Design Philosophy

### Apple-Inspired Design

- **Minimalism**: Clean, uncluttered interface with focus on content
- **Typography**: Large, bold headlines with clear hierarchy
- **Spacing**: Generous whitespace for breathing room
- **Animations**: Smooth, purposeful transitions

### Glassmorphism UI

- **Backdrop Blur**: Frosted glass effect using `backdrop-blur-xl`
- **Transparency**: Semi-transparent backgrounds with `bg-white/10`
- **Borders**: Subtle white borders with `border-white/20`
- **Depth**: Layered elements create visual depth

## 📱 Features

### 1. Hero Section

- Full-screen introduction with gradient background
- Animated background elements (pulsing orbs)
- Call-to-action buttons with glass effect
- Scroll indicator for better UX

### 2. Navigation

- Fixed glassmorphism navbar
- Changes opacity on scroll
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### 3. Gallery

- Grid layout (3 columns on desktop, responsive)
- Hover effects with image zoom
- Modal view for enlarged images
- Staggered animations on load

### 4. Services Section

- 4 service cards with icons
- Feature highlights (capacity, surface, etc.)
- Call-to-action for booking
- Glass card design

### 5. Contact Section

- Contact form with validation
- Google Maps integration
- Contact information display
- Social media links

### 6. Footer

- Three-column layout
- Quick links navigation
- Contact information
- Credits and copyright

## 🛠️ Technical Stack

### Core Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Pre-built accessible components

### Dependencies

```json
{
  "next": "^14.2.15",
  "react": "^18.3.1",
  "framer-motion": "^11.11.7",
  "lucide-react": "^0.454.0",
  "class-variance-authority": "^0.7.0",
  "tailwind-merge": "^2.5.4"
}
```

## 📂 Project Structure

```
gallery-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main page composition
│   │   └── globals.css         # Global styles and utilities
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.tsx      # Button component with variants
│   │   │   └── card.tsx        # Card components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Gallery.tsx         # Image gallery
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Contact.tsx         # Contact form and info
│   │   └── Footer.tsx          # Footer section
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Color Palette

### Primary Colors

- **Background**: Black (`#000000`)
- **Text**: White with varying opacity
- **Accents**: Purple to Pink to Red gradient

### Glassmorphism

```css
/* Glass Light */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Glass Dark */
.glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## ✨ Custom Animations

### Fade In

```css
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

### Slide Up

```css
@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### Scale In

```css
@keyframes scaleIn {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd gallery-app

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints

```
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
```

## 🎯 Key Components Explained

### Button Component

Variants: `default`, `glass`, `outline`, `ghost`
Sizes: `sm`, `default`, `lg`, `icon`

```tsx
<Button variant="glass" size="lg">
  Click me
</Button>
```

### Card Component

Subcomponents: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

```tsx
<Card className="glass-dark">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

## 🔧 Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-color",
      // Add more colors
    }
  }
}
```

### Adding New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add navigation link in `Navbar.tsx`

### Modifying Animations

Edit `tailwind.config.ts` keyframes and animations sections.

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Purging**: Tailwind removes unused CSS
- **Font Optimization**: Next.js font optimization
- **Lazy Loading**: Images and components load on demand

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

### TypeScript Errors

```bash
# Regenerate type definitions
npm run build
```

## 📝 Content Management

### Updating Gallery Images

Edit `src/components/Gallery.tsx`:

```typescript
const images = [
  { url: "your-image-url", alt: "description" },
  // Add more images
];
```

### Updating Services

Edit `src/components/Services.tsx`:

```typescript
const services = [
  {
    icon: YourIcon,
    title: "Service Name",
    description: "Description",
    details: "Details",
  },
];
```

## 🔒 Security Considerations

- Form validation on both client and server
- Environment variables for sensitive data
- HTTPS required for production
- Rate limiting for contact form submissions

## 📈 Future Enhancements

- [ ] CMS integration (Sanity, Contentful)
- [ ] Booking system integration
- [ ] Multi-language support (i18n)
- [ ] Blog section
- [ ] Event calendar
- [ ] Admin dashboard
- [ ] Analytics integration

## 👥 Credits

- **Design Inspiration**: Apple.com
- **Original Website**: galeriedestroisbornes.com
- **Developed by**: ExagoraStudio
- **Supervised by**: Rodrigue Grego

## 📄 License

© 2024 Galerie des Trois Bornes. All rights reserved.

---

For questions or support, contact: gregoconcept@gmail.com
