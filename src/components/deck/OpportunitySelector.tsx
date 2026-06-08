import { motion, AnimatePresence } from "motion/react";
import { Counter } from "./Counter";
import { useOpportunity } from "@/content/OpportunityContext";
import { opportunities, type OpportunityId } from "@/content/deck";

const order: OpportunityId[] = ["retail", "sponsorship", "events"];

export function OpportunitySelector() {
  const { active, setActive, data } = useOpportunity();

  return (
    <section id="selector" className="relative section-pad">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
          Choose Your Opportunity
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
          One destination. Three ways to win.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Select a path and the entire experience adapts to what matters to you.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {order.map((id) => {
            const o = opportunities[id];
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? "text-primary-foreground" : "text-foreground hover:bg-secondary"
                } ${isActive ? "" : "border border-border"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="selector-pill"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{o.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-3xl border border-border bg-card/50 p-8 backdrop-blur sm:p-12"
          >
            <p className="font-display text-2xl font-semibold text-gold-soft sm:text-3xl">
              {data.tagline}
            </p>
            <p className="mt-2 text-muted-foreground">{data.accentNote}</p>

            <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {data.kpis.map((k) => (
                <Counter key={k.label} value={k.value} label={k.label} />
              ))}
            </div>

            <a
              href="#closing"
              className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              {data.cta}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
