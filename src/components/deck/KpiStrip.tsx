import { AnimatePresence, motion } from "motion/react";
import { Counter } from "./Counter";
import { useOpportunity } from "@/content/OpportunityContext";

export function KpiStrip() {
  const { data } = useOpportunity();
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
          >
            {data.kpis.map((k) => (
              <Counter key={k.label} value={k.value} label={k.label} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
