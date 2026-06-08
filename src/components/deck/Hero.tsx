import { motion, AnimatePresence } from "motion/react";
import { BackgroundVideo } from "./BackgroundVideo";
import { media, PROPERTY } from "@/content/deck";
import { useOpportunity } from "@/content/OpportunityContext";

export function Hero() {
  const { data } = useOpportunity();

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <BackgroundVideo src={media.heroVideo} poster={media.heroImg} />

      <div className="relative z-10 w-full section-pad pb-16">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-soft">
              {PROPERTY.name} · {PROPERTY.city}
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
                {data.heroEyebrow}
              </p>
              <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.6rem,7vw,6.5rem)] font-extrabold leading-[0.95]">
                {data.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                {data.heroLede}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#closing"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              {data.cta}
            </a>
            <a
              href="#audience"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-secondary"
            >
              Explore The Opportunity
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
