import { Reveal } from "./Reveal";
import { retailCategories, media } from "@/content/deck";

export function RetailSection() {
  return (
    <section id="retail" className="relative section-pad">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal y={40} className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
            <img
              src={media.luxuryImg}
              alt="Luxury flagship wing"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
              Retail Growth Platform
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              The fastest way to scale a brand.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Category demand, traffic advantage, and brand adjacency converge into a launchpad
              where new concepts hit national scale on day one.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {retailCategories.map((c, i) => (
              <Reveal key={c.cat} delay={i * 0.06}>
                <div className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="font-display text-xl font-semibold">{c.cat}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-soft">
                    {c.demand}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
