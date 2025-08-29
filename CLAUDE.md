# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional web development services landing page built with Next.js 15, React 18, TypeScript, and Tailwind CSS. It showcases web development services for potential clients with a modern, responsive design featuring a black/gold/blue color scheme.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build (always test this before deployment)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Component Structure
The application follows a single-page layout with modular sections:

- **Main Layout**: `src/app/page.tsx` imports and renders all sections sequentially
- **Section Components**: Each major page section is a separate component in `src/components/`
  - `HeroSection` - Landing area with background image and contact info
  - `ServicesSection` - 6 service offerings in a grid layout
  - `AboutSection` - Personal background with technology grid and skills
  - `ProcessSection` - 4-step development process with timeline design
  - `PortfolioSection` - Featured projects with modal details
  - `ContactSection` - Contact form and information
  - `BookingCalendar` - Zoho Calendar integration for appointment scheduling
  - `Footer` - Social links and additional info

### Styling System
- **Tailwind CSS**: Primary styling framework with custom configuration
- **Custom Color Palette**: 
  - Primary: `primary-black` (#000000), `primary-dark` (#0a0a0a), `primary-gray` (#111111)
  - Accent: `accent-yellow` (#FFB800), `accent-blue` (#009DFF)
  - Text: `text-white` (#ffffff), `text-gray` (#cccccc)
- **Component Classes**: Defined in `globals.css` for reusable UI patterns (`.btn-accent`, `.tech-icon-item`, etc.)
- **Custom Animations**: Fade-up, slide-in, hero-float, and modal animations
- **Font Awesome**: Loaded via CDN in layout for icons

### Asset Management
- **Images**: Project images stored in `public/` for Next.js optimization
- **Background Image**: `majidbackground.png` used in hero section
- **Project Assets**: Portfolio project images (agrisphere.avif, galerie-maya.avif, la-caviare.avif)

### Key Features
- **Responsive Design**: Mobile-first approach with careful attention to logo stretching prevention
- **SEO Optimization**: Complete metadata, OpenGraph, Twitter cards, and JSON-LD structured data
- **Interactive Elements**: Smooth scrolling navigation, hover effects, project modals
- **Contact Form**: Full backend integration with MailerSend email service and Google Cloud Storage for data persistence
- **Appointment Booking**: Zoho Calendar integration for scheduling consultations with automatic date/time selection and external booking flow

### Backend API
- **Email Service**: Uses MailerSend API for professional email delivery
- **Data Storage**: Contact form submissions saved to Google Cloud Storage in `services-contact/` directory
- **API Route**: `/api/contact` handles form submissions with validation and error handling
- **Environment Variables**: Requires MAILERSEND_API_TOKEN, MAILERSEND_FROM_EMAIL, CONTACT_EMAIL, and GCS_BUCKET_NAME
- **Zoho Integration**: BookingCalendar component uses hardcoded Zoho Calendar API URL for appointment scheduling via external redirect

## Important Notes

- **Build Testing**: Always run `npm run build` before considering changes complete - this project has had CSS compilation issues in the past
- **Image Paths**: Use `/filename.ext` for public assets, not `/src/assets/filename.ext`
- **Tailwind Classes**: Some complex focus states may not work with arbitrary values - use regular CSS when needed
- **Mobile Responsive**: Technology icons use `object-contain` and responsive grids to prevent stretching
- **SEO Ready**: Metadata is configured for seifi.dev domain