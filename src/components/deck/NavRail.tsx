import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PROPERTY } from "@/content/deck";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "audience", label: "Audience" },
  { id: "why", label: "Why MOA" },
  { id: "activation", label: "Activation" },
  { id: "retail", label: "Retail" },
  { id: "events", label: "Events" },
  { id: "explorer", label: "Explore" },
  { id: "closing", label: "Connect" },
];

export function NavRail() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="
    fixed
    inset-x-0
    top-0
    z-50
    border-b
    border-white/10
    bg-black/30
    backdrop-blur-2xl
  "
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <button onClick={() => go("hero")} className="flex items-center gap-3 text-left">
          <div
            className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-[#E5C16B]
    text-[10px]
    font-bold
    tracking-wide
    text-black
  "
          >
            MOA
          </div>
           
          <div>
            <div className="font-display text-sm font-bold tracking-[0.3em] text-white">MOA</div>

            <div className="hidden text-[10px] uppercase tracking-[0.25em] text-white/60 sm:block">
              Sales Experience
            </div>
          </div>
        </button>

        {/* Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`
            relative
            rounded-full
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            transition-all
            duration-300
            cursor-pointer
            ${active === s.id ? "text-white" : "text-white/60 hover:text-white"}
          `}
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="
                absolute
                inset-0
                rounded-full
                bg-white/10
                border
                border-white/15
              "
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              )}

              <span className="relative z-10">{s.label}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => go("closing")}
          className="
        rounded-full
        bg-[#E5C16B]
        px-5
        py-2.5
        text-xs
        font-semibold
        uppercase
        tracking-[0.15em]
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(229,193,107,0.35)]
      "
        >
          Get In Touch
        </button>
      </nav>
    </motion.header>
  );
}
