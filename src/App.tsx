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

export default function App() {
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