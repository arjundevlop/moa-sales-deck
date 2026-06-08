import { Reveal } from "./Reveal";
import { activations, media } from "@/content/deck";

export function ActivationSection() {
  return (
    <section id="activation" className="relative overflow-hidden section-pad">
      <div className="absolute inset-0 -z-10">
        <img
          src={media.attractionsImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
            Brand Activation Opportunities
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Where attention is the medium.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Stage experiences inside a destination engineered for reach, visibility, and engagement
            — far beyond what any media buy can deliver.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {activations.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07} y={32}>
              <article className="group h-full rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-colors hover:border-gold/50 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-medium text-gold-soft">
                    {a.metric}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold transition-colors group-hover:text-gold-soft sm:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
