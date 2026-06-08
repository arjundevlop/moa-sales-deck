import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { BackgroundVideo } from "./BackgroundVideo";
import { venues, media } from "@/content/deck";

export function EventsSection() {
  const [idx, setIdx] = useState(0);
  const active = venues[idx];

  return (
    <section id="events" className="relative overflow-hidden">
      <div className="relative min-h-[60svh]">
        <BackgroundVideo src={media.eventsVideo} poster={media.eventsImg} />
        <div className="relative z-10 section-pad pb-0">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
                Event Experiences
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                The stage is always set.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Concerts, launches, conventions, and activations — inside a destination that
                delivers the audience before doors even open.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative section-pad pt-12">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="flex flex-col gap-2">
            {venues.map((v, i) => (
              <button
                key={v.name}
                onClick={() => setIdx(i)}
                className={`group flex items-center justify-between rounded-2xl border px-6 py-5 text-left transition-colors ${
                  i === idx
                    ? "border-gold/60 bg-card"
                    : "border-border bg-transparent hover:bg-card/50"
                }`}
              >
                <div>
                  <p
                    className={`font-display text-xl font-semibold transition-colors ${
                      i === idx ? "text-gold-soft" : ""
                    }`}
                  >
                    {v.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.use}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{v.capacity}</span>
              </button>
            ))}
          </div>

          <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-border">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.name}
                src={active.image}
                alt={active.name}
                loading="lazy"
                width={1600}
                height={1200}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-3xl font-bold">{active.name}</p>
              <p className="mt-1 text-muted-foreground">
                {active.use} · Capacity {active.capacity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
