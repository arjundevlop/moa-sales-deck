# Mall of America — Interactive Sales Experience

A premium, browser-based interactive **sales enablement experience** for Mall of America.

Built to help close retail leasing, brand partnership, and event-hosting deals — usable during a live screen-shared presentation or as a standalone experience a prospect can explore independently.

## ✦ Highlights

* **Opportunity-aware narrative** — a single selector (Retail / Sponsorship / Events) dynamically updates headlines, KPIs, messaging, and CTAs throughout the experience.
* **Video-first storytelling** — cinematic background videos with lazy loading and poster-image fallbacks.
* **Interactive ecosystem explorer** — an explorable map highlighting key revenue-driving districts within the property.
* **Non-linear navigation** — sticky navigation with active-section tracking allows users to control their own journey.
* **Motion-driven experience** — animated KPIs, scroll reveals, and smooth transitions built with Motion.
* **Premium visual language** — dark luxury theme, gold accents, editorial typography, and immersive media.

## Tech Stack

* React 19
* TypeScript
* Vite
* Tailwind CSS v4
* Motion (Framer Motion)
* Context API for global opportunity state management

## Architecture

```text
src/
  content/
    deck.ts                  # Centralized content and configuration
    OpportunityContext.tsx   # Shared opportunity state

  components/deck/
    NavRail
    Hero
    KpiStrip
    OpportunitySelector
    AudienceSection
    WhySection
    ActivationSection
    RetailSection
    EventsSection
    EcosystemExplorer
    ClosingSection

  components/shared/
    Reveal
    Counter
    BackgroundVideo

  App.tsx                    # Main page composition
  main.tsx                   # Application entry point
```

The architecture is designed to be extensible. New opportunity types, content sections, or media assets can be added with minimal changes by extending the centralized content configuration.

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Performance Considerations

* Background videos are lazy-loaded and only play when visible.
* Poster images provide fast visual loading before video playback.
* Images use optimized sizing and lazy loading where appropriate.
* Component structure is designed to minimize unnecessary re-renders.
* Media assets were compressed to improve loading performance.

## Design Decisions

* Prioritized storytelling over traditional slide-based presentation.
* Built a single-page immersive experience suitable for both guided demos and self-exploration.
* Created dynamic content switching to demonstrate how a single platform can serve multiple business objectives.
* Focused on premium branding and smooth interactions to reflect a high-end commercial destination.

## AI Usage

AI tools were used to assist with:

* Content ideation and copy refinement
* UI/UX brainstorming
* Component implementation assistance
* Code review and optimization suggestions
* Placeholder media generation

All architecture, integration decisions, customization, debugging, optimization, and final implementation were reviewed and adapted manually.

## Assets

Imagery and short cinematic clips are placeholder assets used for demonstration purposes. Official brand assets can be substituted by replacing files within the project assets directory.

## Future Improvements

Given additional time, the following enhancements would be explored:

* CMS-driven content management
* Analytics and engagement tracking
* Personalized visitor journeys
* Additional accessibility enhancements
* Further media optimization and streaming strategies
* Interactive data visualizations for audience and performance metrics
