import { Reveal } from "./Reveal";
import { whyPoints } from "@/content/deck";

export function WhySection() {
  return (
    <section id="why" className="relative section-pad">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
            Why Brands Choose Mall of America
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Not a mall. A market you can&apos;t replicate anywhere else.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {whyPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} y={36}>
              <article
                className={`grid items-stretch gap-8 overflow-hidden rounded-3xl border border-border bg-card/40 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="relative min-h-[260px] [direction:ltr]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 [direction:ltr] sm:p-12">
                  <span className="font-display text-5xl font-extrabold text-gold-gradient">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold">{p.title}</h3>
                  <p className="mt-4 max-w-md text-lg text-muted-foreground">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
