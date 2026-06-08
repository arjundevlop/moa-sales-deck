import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { media } from "@/content/deck";

interface District {
  id: string;
  name: string;
  blurb: string;
  stat: string;
  statLabel: string;
  image: string;
  x: number;
  y: number;
}

const districts: District[] = [
  {
    id: "luxury",
    name: "The Luxury Wing",
    blurb: "Flagship boutiques and a curated high-end clientele with serious spend.",
    stat: "$10B",
    statLabel: "Regional spend power",
    image: media.luxuryImg,
    x: 22,
    y: 30,
  },
  {
    id: "retail",
    name: "Core Retail",
    blurb: "520+ brands across four levels — the engine of daily foot traffic.",
    stat: "520+",
    statLabel: "Retail brands",
    image: media.retailImg,
    x: 50,
    y: 58,
  },
  {
    id: "attractions",
    name: "Entertainment District",
    blurb: "Indoor theme park and attractions that turn visits into all-day stays.",
    stat: "30K+",
    statLabel: "Daily footfall",
    image: media.attractionsImg,
    x: 76,
    y: 38,
  },
  {
    id: "dining",
    name: "Dining & Lifestyle",
    blurb: "Chef-driven dining and nightlife that extends dwell time into the evening.",
    stat: "60+",
    statLabel: "Food concepts",
    image: media.diningImg,
    x: 35,
    y: 78,
  },
  {
    id: "events",
    name: "Live Event Venues",
    blurb: "Concerts, launches, and conventions on a 400+ event annual calendar.",
    stat: "400+",
    statLabel: "Events per year",
    image: media.eventsImg,
    x: 68,
    y: 72,
  },
];

export function EcosystemExplorer() {
  const [activeId, setActiveId] = useState("retail");
  const active = districts.find((d) => d.id === activeId)!;

  return (
    <section id="explorer" className="relative section-pad">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
            Signature Experience · Explore The Ecosystem
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            One destination, five revenue districts.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tap any district to see how the property compounds attention into commercial
            opportunity.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Interactive map */}
          <Reveal y={40} className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-border bg-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  width={1600}
                  height={1200}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 0.45, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-background/80" />

              {districts.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveId(d.id)}
                    aria-label={d.name}
                    style={{ left: `${d.x}%`, top: `${d.y}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="relative flex items-center justify-center">
                      {isActive && (
                        <motion.span
                          layoutId="map-glow"
                          className="absolute h-12 w-12 rounded-full bg-gold/30 blur-md"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span
                        className={`relative h-4 w-4 rounded-full border-2 transition-all ${
                          isActive
                            ? "border-gold bg-gold"
                            : "border-foreground/60 bg-background/60 group-hover:border-gold"
                        }`}
                      />
                      {isActive && (
                        <span className="absolute h-8 w-8 animate-ping rounded-full border border-gold/50" />
                      )}
                    </span>
                    <span
                      className={`absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-wider transition-opacity ${
                        isActive
                          ? "text-gold-soft opacity-100"
                          : "text-foreground/70 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {d.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Detail panel */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.45 }}
                className="flex h-full flex-col justify-center rounded-3xl border border-border bg-card/50 p-8 backdrop-blur sm:p-10"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  District
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{active.name}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{active.blurb}</p>
                <div className="mt-8 border-t border-border pt-6">
                  <div className="font-display text-5xl font-extrabold text-gold-gradient">
                    {active.stat}
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {active.statLabel}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex flex-wrap gap-2">
              {districts.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                    d.id === activeId
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
