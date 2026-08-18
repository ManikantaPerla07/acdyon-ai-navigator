# Design & Engineering Decisions

## 1. Product direction

I treated the brief as a product-design problem rather than a page-building exercise.

The core experience is an AI career navigator that helps a user move from their current skills toward a target career direction. The landing page therefore prioritizes the interactive product preview instead of relying only on marketing copy.

## 2. Above-the-fold priority

The hero was designed around one clear message:

**Your next career move, mapped by AI.**

The product preview sits beside the message so the evaluator can understand the concept immediately without needing to read the entire page.

## 3. Interaction choice

The primary interaction is the career selector inside the product preview.

Changing the selected role updates:

- target role
- supporting description
- recommended focus areas
- readiness percentage
- progress visualization

This gives the interface a meaningful state change instead of decorative animation.

## 4. Visual direction

I used a restrained editorial/product aesthetic:

- warm off-white background
- black typography
- muted gray hierarchy
- restrained indigo accents
- rounded product surfaces
- soft shadows and ambient lighting

The goal was to make the interface feel like a premium AI product rather than a generic dashboard.

## 5. Motion

Motion is intentionally limited.

Framer Motion is used for:

- career-path state transitions
- progress changes
- subtle section reveals

The goal is to make state changes understandable without turning the page into an animation showcase.

## 6. Responsive behavior

The layout was designed and tested at the required 390px and 1440px widths.

On mobile, multi-column sections collapse into readable vertical flows while preserving the same product hierarchy.

## 7. Content honesty

The experience explicitly labels the example career pathway as an **illustrative example**.

The project does not present fabricated testimonials, customer results, or claims of real-world AI accuracy.

## 8. Engineering decisions

The implementation uses:

- Next.js App Router
- TypeScript
- reusable React components
- data-driven career path configuration
- programmatic Open Graph generation
- semantic sections and keyboard-accessible controls
- Vercel for production deployment

The UI was intentionally kept as a focused frontend concept rather than introducing unnecessary backend infrastructure.

## 9. Trade-offs

I prioritized depth in the central interaction and product presentation over adding many disconnected features.

A more complete production system would eventually require real user-profile input, backend persistence, authentication, recommendation logic, and a production AI pipeline. Those are intentionally outside the scope of this frontend challenge.