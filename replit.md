# Adnan Raza's Personal Portfolio Website

## Overview

This is a personal portfolio website for Adnan Raza, a bioinformatics researcher who specializes in building computationally efficient models of complex biological systems. The website showcases his research work, projects, academic background, and professional vision to target academic audiences, particularly Principal Investigators and Admissions Committees at international universities in fields like Computational Biology, High-Performance Computing, and Applied Machine Learning.

The site is built as a single-page application with a modern, clean design featuring a dark theme optimized for technical content display. It includes interactive elements like a hidden terminal interface and focuses on presenting technical achievements through data visualization and code examples.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a single-page application (SPA) architecture
- **Styling**: Tailwind CSS with a custom dark theme configuration using CSS variables
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui component library
- **Navigation**: Wouter for client-side routing with smooth scrolling between sections
- **State Management**: TanStack React Query for server state and React hooks for local state
- **Build Tool**: Vite for development and production builds with React plugin

### Backend Architecture
- **Server Framework**: Express.js with TypeScript running in ESM mode
- **Development Setup**: Custom Vite integration for SSR during development
- **API Structure**: RESTful endpoints prefixed with `/api` (currently minimal implementation)
- **Storage Layer**: Pluggable storage interface with in-memory implementation for user data
- **Middleware**: Request logging, JSON parsing, and error handling

### Styling and Design System
- **Design Philosophy**: Clean & Technical aesthetic with focus on typography and whitespace
- **Color Scheme**: Dark mode with neutral base colors, blue primary, and purple accent
- **Typography**: Inter font family for general text, JetBrains Mono for code elements
- **Component System**: Consistent design tokens through CSS variables and Tailwind classes
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts

### Interactive Features
- **Easter Egg**: Konami code activation opens a hidden terminal interface
- **Terminal Commands**: Custom command system with help, project info, and contact commands
- **Smooth Navigation**: Scroll-based navigation with active section highlighting
- **Mobile Experience**: Responsive design with collapsible navigation menu

### Content Architecture
- **Sections**: Modular component structure for Hero, Projects, Vision, Experience, Education, and Footer
- **Project Showcase**: Featured projects with inline visualizations and code examples
- **Academic Content**: Structured presentation of education, experience, and research vision
- **Contact Integration**: Multiple contact methods and social media links

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React DOM, TanStack React Query for data fetching
- **UI Framework**: Comprehensive Radix UI component collection via shadcn/ui
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Development**: Vite build tool with TypeScript support and React plugin

### Database and ORM
- **Database**: PostgreSQL configured for production use
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Database Provider**: Neon Database serverless PostgreSQL (@neondatabase/serverless)
- **Session Storage**: PostgreSQL session storage via connect-pg-simple

### Development Tools
- **TypeScript**: Full TypeScript configuration with strict mode enabled
- **Build Pipeline**: ESBuild for server bundling, Vite for client bundling
- **Development Utilities**: TSX for TypeScript execution, custom error overlays
- **Replit Integration**: Replit-specific development enhancements and deployment support

### UI and UX Libraries
- **Icons**: Lucide React icon library
- **Utilities**: Class variance authority for component variants, clsx for class manipulation
- **Date Handling**: date-fns for date formatting and manipulation
- **Carousels**: Embla Carousel for interactive content presentation

### Form and Validation
- **Form Management**: React Hook Form with Hookform resolvers
- **Schema Validation**: Zod for runtime type checking and Drizzle-Zod integration
- **Command Interface**: CMDK for the terminal command palette functionality

### Fonts and Assets
- **Typography**: Google Fonts integration with Inter, JetBrains Mono, and additional typefaces
- **Font Loading**: Optimized font loading through Google Fonts API
- **Static Assets**: Vite-managed asset pipeline with path resolution