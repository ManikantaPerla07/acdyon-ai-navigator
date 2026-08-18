Absolutely. We are at the **final documentation stage** now.


# AcdyOn AI Navigator

A polished frontend concept for an AI-powered career navigation experience.

AcdyOn AI Navigator turns a user's current skills and career direction into a focused progression of practical next steps.

## Live Demo

https://acdyon-ai-navigator.vercel.app

## GitHub

https://github.com/ManikantaPerla07/acdyon-ai-navigator

## Overview

The product experience is designed around a simple idea:

> Your next career move, mapped by AI.

Instead of presenting an overwhelming list of courses or skills, the interface communicates a focused journey from a user's current state to a target direction.

The landing page demonstrates this through an interactive career-path preview, supporting explanatory sections, an illustrative example pathway, and a final conversion CTA.

## Product Flow

1. **Choose a direction**
   - AI Engineer
   - ML Engineer
   - AI Product Engineer

2. **See the recommended path**
   - Target role
   - Readiness percentage
   - Three recommended focus areas

3. **Understand the progression**
   - Current strengths
   - Priority gaps
   - Next focus areas

## Key Features

- Interactive career-role selector
- Dynamic career-path content
- Animated state transitions
- Readiness/progress visualization
- Responsive desktop and mobile layouts
- Illustrative example pathway
- Responsive CTA and in-page navigation
- Programmatic Open Graph image
- SEO metadata and favicon
- Production deployment on Vercel

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   └── page.tsx
│
├── components/
│   ├── ExamplePath.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Navbar.tsx
│   ├── ProblemSection.tsx
│   └── ProductPreview.tsx
│
└── data/
    └── careerPaths.ts
````

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

The production build completes successfully.

## Responsive Validation

The interface was tested at:

* 390 × 844
* 1440 × 900

The page was checked for:

* horizontal overflow
* responsive stacking
* navigation behavior
* interactive career switching
* keyboard navigation
* production rendering

## Important Note

This is a conceptual product experience created for the AcdyOn Technologies frontend challenge.

The career paths and readiness values shown in the interface are illustrative product data and are not presented as real customer outcomes or production AI recommendations.

## Author

Manikanta Perla

````
