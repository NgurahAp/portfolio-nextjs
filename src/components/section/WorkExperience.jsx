"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const experiences = [
  {
    company: "PT Estetindo Global Indonesia",
    role: "Full Stack Developer",
    period: "OCT 2025 – PRESENT",
    description:
      "Led end-to-end development as a solo developer, building a complete clinic e-commerce and booking platform from Figma design implementation to production deployment",
    side: "left",
  },
  {
    company: "Dreamaxtion",
    role: "Full Stack Developer Internship",
    period: "JUN 2025 – SEP 2025",
    description:
      "Built a Next.js-based Learning Management System (LMS) and developed core features such as user authentication, course management, and optimized responsive interfaces.",
    side: "right",
  },
  {
    company: "CV DB Klik",
    role: "Mobile Developer Internship",
    period: "JUN 2025 – AUG 2025",
    description:
      "Developed new features for DB Klik and DB News applications using Flutter. Added new functional features to enhance user experience.",
    side: "left",
  },
  {
    company: "PT Menara Indonesia",
    role: "Front End Developer Internship",
    period: "SEPT 2024 – DEC 2024",
    description:
      "Built a web-based attendance system and developed core features such as attendance tracking, leave/sick requests, and attendance reports.",
    side: "right",
  },
  {
    company: "Alterra Academy",
    role: "Mobile Developer Apprenticeship",
    period: "AUG 2023 – DEC 2023",
    description:
      "Built mobile applications using Flutter and Dart and developed core features such as state management, RESTful API integration, and high-performance user interfaces.",
    side: "left",
  },
];

function TimelineDot({ dotRef, trailDocY }) {
  const [color, setColor] = useState("#E5E5E5");

  useEffect(() => {
    const unsubscribe = trailDocY.on("change", (currentTrailDocY) => {
      if (!dotRef.current) return;

      const rect = dotRef.current.getBoundingClientRect();
      const dotDocY = rect.top + rect.height / 2 + window.scrollY;

      const distance = dotDocY - currentTrailDocY;
      const threshold = 20;

      if (distance < -threshold) {
        setColor("#CBFF4D");
      } else if (distance > threshold) {
        setColor("#E5E5E5");
      } else {
        const t = (distance + threshold) / (threshold * 2);
        const r = Math.round(203 + (229 - 203) * t);
        const g = Math.round(255 + (229 - 255) * t);
        const b = Math.round(77 + (229 - 77) * t);
        setColor(`rgb(${r},${g},${b})`);
      }
    });
    return unsubscribe;
  }, [trailDocY, dotRef]);

  return (
    <div
      ref={dotRef}
      className="w-3 h-3 rounded-full transition-colors duration-75 z-10"
      style={{ backgroundColor: color }}
    />
  );
}

function ExperienceItem({ item, trailDocY }) {
  const ref = useRef(null);
  const dotRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [0, 1, 1, 0],
  );
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [60, 0, 0, -60],
  );

  const opacity = useSpring(rawOpacity, { stiffness: 70, damping: 18 });
  const y = useSpring(rawY, { stiffness: 70, damping: 18 });

  const isLeft = item.side === "left";

  const content = (
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
        {item.period}
      </p>
      <h3 className="text-lg sm:text-xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
        {item.company}
      </h3>
      <p className="text-base sm:text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 italic mb-3">
        {item.role}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
        {item.description}
      </p>
    </div>
  );

  return (
    <div
      ref={ref}
      className="
        relative 
        grid 
        grid-cols-[1fr_auto] 
        md:grid-cols-[1fr_auto_1fr] 
        gap-x-6 md:gap-x-10
        items-start
      "
    >
      {/* MOBILE ONLY */}
      <motion.div
        style={{ opacity, y }}
        className="py-8 md:hidden"
      >
        {content}
      </motion.div>

      {/* DESKTOP LEFT */}
      <motion.div
        style={{ opacity, y }}
        className={`hidden md:block py-12 ${
          isLeft ? "text-right" : ""
        }`}
      >
        {isLeft ? content : <div />}
      </motion.div>

      {/* DOT */}
      <div className="flex items-start justify-center pt-10 md:pt-36">
        <TimelineDot dotRef={dotRef} trailDocY={trailDocY} />
      </div>

      {/* DESKTOP RIGHT */}
      <motion.div
        style={{ opacity, y }}
        className="hidden md:block py-12"
      >
        {!isLeft ? content : <div />}
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const trailDocY = useMotionValue(0);

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const trailHeightPercent = useSpring(
    useTransform(timelineProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 60, damping: 20 },
  );

  useEffect(() => {
    const updateTrailDocY = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const timelineTopDoc = rect.top + window.scrollY;
      const timelineHeight = rect.height;
      const progress = timelineProgress.get();
      trailDocY.set(timelineTopDoc + timelineHeight * progress);
    };

    const unsubscribe = timelineProgress.on("change", updateTrailDocY);
    updateTrailDocY();
    return unsubscribe;
  }, [timelineProgress, trailDocY]);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity = useTransform(
    headerProgress,
    [0, 0.25, 0.6, 1],
    [0, 1, 1, 0],
  );
  const headerY = useTransform(
    headerProgress,
    [0, 0.25, 0.6, 1],
    [32, 0, 0, -32],
  );

  const smoothHeaderOpacity = useSpring(headerOpacity, {
    stiffness: 80,
    damping: 20,
  });
  const smoothHeaderY = useSpring(headerY, { stiffness: 80, damping: 20 });

  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-6">
      <motion.div
        ref={headerRef}
        style={{ opacity: smoothHeaderOpacity, y: smoothHeaderY }}
        className="mx-auto max-w-3xl text-center mb-16 sm:mb-20 space-y-6"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
          Experience
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-neutral-900 dark:text-neutral-100">
          I have worked with some of the most{" "}
          <span className="font-semibold italic">
            innovative industry leaders
          </span>{" "}
          to help build their top-notch products.
        </h2>
      </motion.div>

      <div ref={timelineRef} className="mx-auto max-w-6xl relative">
        {/* TRAIL */}
        <motion.div
          style={{ height: trailHeightPercent }}
          className="
            absolute 
            top-0 
            right-2 
            md:left-1/2 md:-translate-x-1/2 
            w-[2px] md:w-[3px] 
            bg-[#CBFF4D] 
            z-[1]
          "
        />

        {experiences.map((item, index) => (
          <ExperienceItem key={index} item={item} trailDocY={trailDocY} />
        ))}
      </div>
    </section>
  );
}