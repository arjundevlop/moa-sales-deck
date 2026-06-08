import { createFileRoute } from "@tanstack/react-router";
import { OpportunityProvider } from "@/content/OpportunityContext";
import { NavRail } from "@/components/deck/NavRail";
import { Hero } from "@/components/deck/Hero";
import { KpiStrip } from "@/components/deck/KpiStrip";
import { OpportunitySelector } from "@/components/deck/OpportunitySelector";
import { AudienceSection } from "@/components/deck/AudienceSection";
import { WhySection } from "@/components/deck/WhySection";
import { ActivationSection } from "@/components/deck/ActivationSection";
import { RetailSection } from "@/components/deck/RetailSection";
import { EventsSection } from "@/components/deck/EventsSection";
import { EcosystemExplorer } from "@/components/deck/EcosystemExplorer";
import { ClosingSection } from "@/components/deck/ClosingSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mall of America — Interactive Sales Experience" },
      {
        name: "description",
        content:
          "An immersive, interactive sales deck for Mall of America. Explore leasing, sponsorship, and event opportunities at North America's #1 retail destination.",
      },
      { property: "og:title", content: "Mall of America — Interactive Sales Experience" },
      {
        property: "og:description",
        content:
          "Reach 40M+ annual visitors. Explore retail leasing, brand partnerships, and event hosting at Mall of America.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <OpportunityProvider>
      <NavRail />
      <main>
        <Hero />
        <KpiStrip />
        <OpportunitySelector />
        <AudienceSection />
        <WhySection />
        <ActivationSection />
        <RetailSection />
        <EventsSection />
        <EcosystemExplorer />
        <ClosingSection />
      </main>
    </OpportunityProvider>
  );
}
