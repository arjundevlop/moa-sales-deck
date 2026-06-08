import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { audienceStats, media } from "@/content/deck";

export function AudienceSection() {
  return (
    <section id="audience" className="relative section-pad">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
              Audience Intelligence
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              The audience is already <span className="text-gold-gradient">here.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Mall of America draws more annual visitors than Disney World, Graceland, and the Grand
              Canyon combined — a high-intent, high-spend crowd that arrives ready to engage.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
            {audienceStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <Counter value={s.value} label={s.label} />
                <p className="mt-2 text-sm text-muted-foreground">{s.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal y={40} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <img
              src={media.retailImg}
              alt="Crowded luxury shopping atrium at Mall of America"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-2xl font-semibold">Built for dwell time</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Average visit lasts hours — not minutes — across retail, dining, and attractions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
