# Design & Engineering Decisions

## Track choice

I chose **Part 2 — The Premium Home Page** rather than Part 1.

The first DECISIONS.md question asks about an ingestion strategy, which is specific to the Part 1 scraper track. I therefore did not implement or claim an ingestion pipeline. For Part 2, I made the equivalent architectural choice of building a data-driven interactive product experience rather than a static marketing mock.

## 1. Why this implementation approach over the obvious alternative?

I chose **Next.js + React + TypeScript** with a reusable, data-driven component structure instead of building a static HTML/CSS page.

The obvious alternative was a static mock containing fixed screenshots and text. I rejected that because the brief explicitly asks for a product that is shown rather than merely described, and a meaningful interaction earns additional signal.

The career selector therefore reads from a shared career-path data structure. Changing the selected role updates the target role, description, recommended focus areas, readiness percentage and progress visualization.

## 2. One trade-off made under the time limit

I intentionally kept the product as a **frontend concept** rather than implementing authentication, persistent user profiles, a backend recommendation service, or real AI inference.

This allowed me to spend the available time on the parts the challenge directly evaluates: product presentation, interaction quality, responsiveness, motion restraint, accessibility and production deployment.

With a real week, I would add a real onboarding flow, persisted user profiles, an API-backed recommendation service, explainable recommendation logic, analytics and more comprehensive automated testing.

## 3. AI tools used and what I personally verified

I used AI assistance during implementation for component scaffolding, copy exploration, debugging, responsive-layout iteration and production troubleshooting.

I personally verified and changed the generated work throughout the process. Examples include fixing the Next.js root-layout configuration, TypeScript/path-alias issues, responsive behavior, Open Graph generation, the deprecated Edge Runtime configuration, anchor navigation, production metadata and deployment configuration.

I also verified the finished product through:

- `npm run build`
- 390 × 844 responsive testing
- 1440 × 900 responsive testing
- keyboard navigation
- interactive career-role switching
- in-page CTA/navigation behavior
- browser console checks
- live Vercel testing

The final experience is intentionally labelled as a **conceptual product** and the pathway/readiness values are presented as illustrative rather than real customer outcomes.