import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/** Animates a number/label that ends in a value like "40M+", "5.6M", "#1". */
export function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[0]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);
    const decimals = match[0].includes(".") ? 1 : 0;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(prefix + (target * eased).toFixed(decimals) + suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div
        className="
    font-display
    text-4xl
    font-extrabold
    tracking-tight
    bg-gradient-to-r
    from-yellow-200
    via-yellow-400
    to-yellow-600
    bg-clip-text
    text-transparent
    sm:text-5xl
    lg:text-6xl
  "
      >
        {display}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
        {label}
      </div>
    </div>
  );
}
