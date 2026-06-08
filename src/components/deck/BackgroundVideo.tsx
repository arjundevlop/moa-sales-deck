import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface Props {
  src: string;
  poster: string;
  className?: string;
  overlay?: boolean;
}

/** Lazily mounts and plays a muted background video only while in view. */
export function BackgroundVideo({ src, poster, className, overlay = true }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(wrapRef, { margin: "200px" });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (inView) setLoad(true);
  }, [inView]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !load) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, load]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <img
        src={poster}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      {load && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
      )}
    </div>
  );
}
