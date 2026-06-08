# Mall of America — Interactive Sales Experience

A premium, browser-based interactive **sales enablement experience** for Mall of America.
Built to help close retail leasing, brand partnership, and event-hosting deals — usable on a
live screen-shared call or as a standalone link a prospect can explore alone.

## ✦ Highlights

- **Opportunity-aware narrative** — a single selector (Retail / Sponsorship / Events) rewrites
  headlines, KPIs, and CTAs across the entire deck.
- **Video-first storytelling** — lazy-loaded, in-view background video with poster fallbacks.
- **Signature interaction** — an explorable "Ecosystem Map" of the property's five revenue districts.
- **Non-linear navigation** — sticky nav with scroll-spy; the viewer controls the journey.
- **Cinematic motion** — scroll-reveals, layered crossfades, and animated metrics via Motion.
- **Dark luxury design system** — gold accents, editorial typography, asymmetric layouts.

## Tech Stack

- TanStack Start (React 19 + TypeScript)
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Motion (Framer Motion) for animation

## Architecture

```
src/
  content/
    deck.ts                  # Centralized typed content config (single source of truth)
    OpportunityContext.tsx   # Opportunity mode state shared across sections
  components/deck/           # Feature components
    NavRail · Hero · KpiStrip · OpportunitySelector
    AudienceSection · WhySection · ActivationSection · RetailSection
    EventsSection · EcosystemExplorer · ClosingSection
    Reveal · Counter · BackgroundVideo   # reusable primitives
  routes/index.tsx           # Page composition
```

Adding a new section or opportunity is additive: extend `deck.ts` and drop in a component —
no rewrites required (Phase 2 expandability).

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal.

## Performance

- Background videos mount and play only while in view, with image posters as LCP fallbacks.
- Images use explicit `width`/`height` and `loading="lazy"` (except the hero).
- Route components are code-split by TanStack Start automatically.

## Assets

Imagery and short cinematic clips are AI-generated stand-ins supplementing publicly available
references for the property. Replace files in `src/assets/` and the video URLs in
`src/content/deck.ts` with official media as needed.
