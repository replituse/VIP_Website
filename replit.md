# VIP Networks Corporate Website

## Overview

A multi-page, animated corporate website for VIP Networks, an IT & Infrastructure solutions company. The application features a modern, futuristic dark blue theme with smooth animations, a contact form with database persistence, and comprehensive service showcases for CCTV, fire safety, biometrics, and networking solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ES modules
- **Build Tool**: esbuild for server bundling, Vite for client
- **API Design**: RESTful endpoints defined in shared route contracts

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Migrations**: Drizzle Kit for database schema management

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and data
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared types and contracts
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Decisions

**Shared Route Contracts**: API routes are defined in `shared/routes.ts` with Zod schemas for input/output validation. This ensures type safety between frontend and backend, reducing runtime errors.

**Component Library**: Uses shadcn/ui components which are copied into the codebase rather than installed as dependencies. This allows full customization while maintaining consistency.

**Theme System**: Dark futuristic theme using CSS custom properties in HSL format, enabling easy color adjustments and potential theme switching.

**Database Abstraction**: Storage layer pattern in `server/storage.ts` abstracts database operations, making it easier to test or swap implementations.

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions

### UI Libraries
- **Radix UI**: Headless UI primitives for accessible components
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Recharts**: Chart components (if needed for analytics)

### Development Tools
- **Vite**: Development server with HMR
- **Drizzle Kit**: Database migration and schema push
- **TSX**: TypeScript execution for development

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string