# Software Engineer Portfolio - Prakash Reddy Pasham

This is a modern, responsive portfolio website built with React 18, TypeScript, Vite, and Tailwind CSS, showcasing the work and experience of Prakash Reddy Pasham, a Software Engineer specializing in backend systems and AI/ML.

## Project Overview

A professional portfolio website featuring:
- **Dynamic Landing Page**: Animated hero section with GSAP and Framer Motion
- **About Section**: Detailed experience, education, and skills showcase
- **Projects Gallery**: Interactive project cards with detailed modal views
- **Technical Blog**: Multi-tag filtering and article preview system
- **Contact Form**: Validated contact form with email validation
- **Dark Mode**: Persistent theme toggle with smooth transitions
- **Responsive Design**: Fully responsive across all device sizes

## Technology Stack

### Core Framework
- **React**: 18.3.1 - Declarative UI library
- **TypeScript**: 5.8.3 - Type-safe JavaScript superset
- **Vite**: 7.0.0 - Next generation frontend build tool
- **Tailwind CSS**: 3.4.17 - Atomic CSS framework

### Animation Libraries
- **Framer Motion**: 11.0.8 - Production-ready animation library
- **GSAP**: 3.13.0 - Professional-grade animation platform

### State Management & Routing
- **React Router DOM**: 6.30.1 - Client-side routing
- **Zustand**: 4.4.7 - Lightweight state management (used for theme persistence)

### UI & Icons
- **Lucide React**: Beautiful, consistent icon library
- **Headless UI**: 1.7.18 - Unstyled UI components

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.tsx     # Navigation with theme toggle
│   └── Footer.tsx     # Footer with social links
├── pages/             # Route-based page components
│   ├── Home.tsx       # Landing page with hero section
│   ├── About.tsx      # Experience, education, and skills
│   ├── Projects.tsx   # Project showcase with modals
│   ├── Blog.tsx       # Technical blog with filtering
│   └── Contact.tsx    # Contact form with validation
├── store/             # Zustand state management
│   └── themeStore.ts  # Dark mode state persistence
├── types/             # TypeScript type definitions
│   └── portfolio.ts   # Portfolio data interfaces
├── data/              # Portfolio content
│   └── portfolioData.ts # Personal info, projects, blog posts
├── assets/            # Static assets
│   └── prakash_reddy_resume.pdf
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Key Features

### 1. Advanced Animations
- **GSAP Timeline Animations**: Hero section title and subtitle with staggered entrance
- **Framer Motion**: Page transitions, hover effects, and scroll-triggered animations
- **Smooth Transitions**: All interactive elements have polished micro-interactions

### 2. Dark Mode
- Persistent theme using Zustand with localStorage
- Smooth color transitions across all components
- System-wide theme application

### 3. Project Showcase
- Interactive project cards with hover effects
- Detailed modal views for each project
- Technology tag display
- External links to GitHub and live demos

### 4. Blog System
- Multi-tag filtering system
- Blog post preview cards
- Full article modal views
- Date formatting and read time display

### 5. Contact Form
- Real-time form validation
- Email format validation
- Required field checking
- Success/error state feedback
- Accessible form labels and error messages

### 6. Responsive Design
- Mobile-first approach
- Breakpoint-based layouts (sm, md, lg)
- Mobile navigation menu
- Touch-friendly interactions

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`
- **Development mode (for local testing)**: `npm run dev`

## Build Configuration

The project uses Vite for building:
- **Build Output**: `dist/` directory
- **Build Assets**: Optimized and chunked automatically
- **Production Build**: Minified JavaScript and CSS
- **Source Maps**: Generated for debugging

## Portfolio Data

Portfolio content is centralized in `src/data/portfolioData.ts`:
- **Personal Information**: Name, title, contact details, profile image
- **Experience**: Work history at Paytm with detailed achievements
- **Education**: Degrees from University at Buffalo and IIT Tirupati
- **Skills**: Categorized technical skills
- **Projects**: 4 major technical projects with descriptions
- **Blog Posts**: 6 technical articles with tags and metadata

## Animation Strategy

### Framer Motion Usage
- Page entrance animations
- Scroll-triggered animations with `whileInView`
- Hover and tap interactions
- Modal animations with AnimatePresence
- Layout animations for filtering

### GSAP Usage
- Complex timeline animations in hero section
- Smooth, production-ready animations
- Staggered element reveals

## Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Responsive design utilities
- Dark mode variants
- Custom scrollbar styles
- Custom utilities for text shadows

### Custom Styles
- Global styles in `index.css`
- Smooth scroll behavior
- Custom scrollbar styling
- Typography optimization

## State Management

### Zustand Store
- **Theme Store**: Manages dark mode state
- **Persistence**: Saves theme preference to localStorage
- **Type-safe**: Full TypeScript support

## Routing

### React Router v6
- **Hash-based routing** for iframe compatibility
- Five main routes: Home, About, Projects, Blog, Contact
- Smooth transitions between pages
- Navigation state tracking for active links

## Form Validation

### Contact Form
- Name: Required field
- Email: Required + format validation
- Subject: Required field
- Message: Required + minimum 10 characters
- Real-time error display
- Success feedback on submission

## Performance Optimizations

- Code splitting through Vite
- Lazy loading for routes (can be implemented)
- Optimized images via CDN
- Minified production builds
- Tree-shaking for unused code

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used throughout
- Polyfills not required for target browsers

## Future Enhancement Ideas

- Backend integration for contact form
- Blog CMS integration
- Project filtering by technology
- Testimonials section
- Resume download functionality
- Analytics integration
- SEO optimization with meta tags

## Important Notes

- **Entry Point**: Never modify `<script type="module" src="/src/main.tsx"></script>` in `index.html`
- **Asset Paths**: Use absolute paths for production (e.g., `/assets/`)
- **Dark Mode**: Theme preference persists across sessions
- **Build Required**: Always run `npm run build` after code changes
- **TypeScript**: Strict mode enabled for type safety

## Portfolio Owner Information

**Prakash Reddy Pasham**
- Email: prakash.reddy9766@gmail.com
- Phone: +1 (716) 390-8830
- Location: Buffalo, NY
- LinkedIn: [prakash-reddy-pasham](https://www.linkedin.com/in/prakash-reddy-pasham)
- GitHub: [prakashreddy975](https://github.com/prakashreddy975)

## License

Personal portfolio website © 2025 Prakash Reddy Pasham. All rights reserved.
