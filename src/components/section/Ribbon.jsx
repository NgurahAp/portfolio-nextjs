import { useEffect, useRef } from "react";
import gsap from "gsap";

const ITEMS = [
  "Custom Web Experiences",
  "Tailored Web Development",
  "Driven By Passion",
  "Innovative Self-Made Creations",
  "Built With Code",
  "Creative Direction",
];

const Star = () => (
  <span
    style={{
      color: "#ccff00",
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      fontSize: "18px",
      flexShrink: 0,
    }}
    aria-hidden="true"
  >
    ✦
  </span>
);

const RIBBON_HEIGHT = 14;
const CROSS_OFFSET = RIBBON_HEIGHT / 2 + 1;

const MarqueeTrack = ({ items, direction = "left", offsetY = 0 }) => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  // Render teks dan bintang sebagai elemen terpisah agar bintang benar-benar di tengah
  const repeated = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    gsap.set(track, { x: direction === "right" ? -totalWidth : 0 });
    tweenRef.current = gsap.to(track, {
      x: direction === "right" ? 0 : -totalWidth,
      duration: 65,
      ease: "none",
      repeat: -1,
    });
    return () => tweenRef.current?.kill();
  }, [direction]);

  const rotation = direction === "left" ? "6deg" : "-6deg";

  return (
    <div
      style={{
        position: "absolute",
        top: `calc(50% + ${offsetY}px)`,
        left: "-50%",
        width: "200%",
        transform: `translateY(-50%) rotate(${rotation})`,
        transformOrigin: "center center",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        paddingTop: "20px",
        paddingBottom: "20px",
        zIndex: 1,
        willChange: "transform",
        boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {repeated.flatMap((text, i) => [
          // Teks item
          <span
            key={`text-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0 32px",
              fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: "500",
              fontSize: "clamp(14px, 1.6vw, 20px)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </span>,
          // Bintang sebagai separator murni — tanpa padding, jarak dari padding teks di kiri & kanan
          <span
            key={`star-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Star />
          </span>,
        ])}
      </div>
    </div>
  );
};

export default function DiagonalMarquee() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "40vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <MarqueeTrack items={ITEMS} direction="left" offsetY={-CROSS_OFFSET} />
      <MarqueeTrack items={ITEMS} direction="right" offsetY={CROSS_OFFSET} />
    </div>
  );
}
