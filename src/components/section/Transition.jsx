"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ColorTransitionSection({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Transisi cepet di tengah scroll
  const bgOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative bg-neutral-900">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-neutral-50"
      />
      <div className="relative z-10">
        <div className="h-[100vh]" />
        {children}
      </div>
    </section>
  );
}
