"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ColorTransitionSection({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.35],
    ["#171717", "#fafafa"], // neutral-900 → neutral-50
  );

  return (
    <section ref={ref} className="relative">
      <motion.div style={{ backgroundColor }} className="absolute inset-0" />
      <div className="relative z-10">
        <div className="h-[100vh]" />
        {children}
      </div>
    </section>
  );
}
