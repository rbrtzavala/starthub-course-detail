# StartHub Academy – Course Detail Page (Next.js)

[Live Demo](https://rbrtzavalastarhub.netlify.app/)

This project demonstrates a high-performance, SEO-optimized Course Detail page built with Next.js App Router.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Key Features

### Server-Side Rendering (SSR)
- Course data is fetched server-side using the App Router
- Pages render fully without client-side JavaScript

### Dynamic Metadata
- Title, meta description, Open Graph, and Twitter metadata are generated dynamically using `generateMetadata`
- Metadata is derived from course data to ensure SEO accuracy

### Structured Data (JSON-LD)
- Implements Schema.org `Course` markup
- Server-rendered JSON-LD allows Google to interpret the page as a rich result

### Performance
- No client-side JavaScript required for core functionality
- System fonts only (no external font loading)
- Semantic HTML for fast rendering and accessibility
- Lighthouse scores: 90+ for Performance and 100 for SEO

## Project Structure

- `app/courses/[slug]/page.tsx` – Server-rendered course page
- `components/CourseDetail.tsx` – Semantic course layout + JSON-LD
- `lib/mockCourses.ts` – Mock data source

## Notes
- Mock data simulates a real data-fetching layer
- App Router chosen to align with modern Next.js best practices
