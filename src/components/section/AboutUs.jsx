"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // curveDepth: 100 (dalam/tajam) → 0 (lurus) seiring scroll
  const curveDepth = useTransform(scrollYProgress, [0, 1], [150, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-50 dark:bg-neutral-950 pt-32 "
    >
      {/* Wrapper dark background termasuk SVG */}
      <div className="relative bg-neutral-900 dark:bg-neutral-100 rounded-b-[10px]">
        {/* SVG Kurva Atas — melengkung ke ATAS seperti referensi */}
        {/* Tinggi SVG sama dengan curveDepth max agar tidak ada gap */}
        <div
          className="absolute -top-[100px] left-0 w-full"
          style={{ height: "100px" }}
        >
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <motion.path
              d={useTransform(
                curveDepth,
                // M = mulai kiri bawah
                // Q = quadratic bezier, control point di tengah atas
                // arc melengkung ke atas: control point Y = 0 - depth (naik ke atas)
                // endpoint = kanan bawah
                // L = garis ke pojok kanan-bawah dan kiri-bawah untuk tutup shape
                (v) => `M0,100 Q720,${100 - v} 1440,100 L1440,100 L0,100 Z`,
              )}
              className="fill-neutral-900 dark:fill-neutral-100"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="pt-14 pb-32 px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            {/* Small label */}
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              About Me
            </p>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-white dark:text-neutral-900">
              I'm Arya —{" "}
              <span className="font-semibold italic">
                solving real-world problems through thoughtful software
              </span>{" "}
              and building scalable web and mobile experiences.
            </h2>

            {/* Sub paragraph */}
            <p className="max-w-2xl mx-auto text-neutral-400 dark:text-neutral-600 text-base md:text-lg leading-relaxed">
              I specialize in building modern web & mobile apps using
              technologies like{" "}
              <span className="text-neutral-200 dark:text-neutral-800 font-medium">
                Nuxt.js
              </span>
              ,{" "}
              <span className="text-neutral-200 dark:text-neutral-800 font-medium">
                Nest.js
              </span>
              , and{" "}
              <span className="text-neutral-200 dark:text-neutral-800 font-medium">
                Flutter
              </span>
              . I care deeply about clean code and great user experience.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <a
                href="#works"
                className="rounded-full bg-[#CBFF4D] px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:opacity-90"
              >
                My Works
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-600 px-6 py-3 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800 dark:border-neutral-400 dark:text-neutral-600"
              >
                Contact ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
