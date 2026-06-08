import { motion } from "motion/react";
import { BackgroundVideo } from "./BackgroundVideo";
import { media, PROPERTY } from "@/content/deck";
import { useOpportunity } from "@/content/OpportunityContext";
import { opportunities, type OpportunityId } from "@/content/deck";

const actions: { id: OpportunityId; label: string }[] = [
  { id: "retail", label: "Discuss Leasing" },
  { id: "sponsorship", label: "Explore Sponsorship" },
  { id: "events", label: "Plan An Event" },
];

export function ClosingSection() {
  const { setActive } = useOpportunity();

  return (
    <section id="closing" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <BackgroundVideo src={media.heroVideo} poster={media.heroImg} overlay={false} />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 w-full section-pad text-center">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft"
          >
            The Opportunity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(2.8rem,8vw,7rem)] font-extrabold leading-[0.95]"
          >
            Ready to reach <span className="text-gold-gradient">millions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Join the brands, partners, and producers building their next chapter at {PROPERTY.name}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {actions.map((a) => (
              <a
                key={a.id}
                href="mailto:partnerships@moa.example"
                onClick={() => setActive(a.id)}
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.04]"
              >
                {opportunities[a.id].cta}
              </a>
            ))}
          </motion.div>

          <p className="mt-16 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {PROPERTY.name} · {PROPERTY.city}
          </p>
        </div>
      </div>
    </section>
  );
}
