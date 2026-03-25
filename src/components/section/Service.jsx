"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    module: "Expertise 01",
    title: "Frontend",
    description:
      "Building responsive interfaces with strong focus on clarity, hierarchy, and smooth interaction.",
    tech: ["React", "Vue", "Nuxt.js", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    module: "Expertise 02",
    title: "Backend",
    description:
      "Designing scalable APIs, services, and database architecture for modern applications.",
    tech: ["Nest.js", "Express", "Go", "Laravel", "PostgreSQL", "REST API"],
  },
  {
    module: "Expertise 03",
    title: "Mobile",
    description:
      "Developing cross-platform mobile apps with smooth performance and great user experience.",
    tech: ["Flutter", "Android", "iOS"],
  },
  {
    module: "Expertise 04",
    title: "DevOps",
    description:
      "Handling deployment, CI/CD, and infrastructure to ensure stable and reliable systems.",
    tech: ["Docker", "Jenkins", "Linux", "Git", "CI/CD"],
  },
];

function ServiceCard({ item, index }) {
  const ref = useRef(null);

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
    [40, 0, 0, -40],
  );
  const opacity = useSpring(rawOpacity, { stiffness: 70, damping: 18 });
  const y = useSpring(rawY, { stiffness: 70, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="p-8 md:p-12 border border-neutral-200 dark:border-neutral-800"
    >
      <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">
        {item.module}
      </p>

      <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        {item.title}
      </h3>

      <div className="w-12 h-[1px] bg-neutral-300 dark:bg-neutral-700 mb-6" />

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500 dark:text-neutral-500">
        {item.tech.map((tech, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-400 rounded-full" />
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);

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
    <section id="services" className="relative py-32 px-6">
      <motion.div
        ref={headerRef}
        style={{ opacity: smoothHeaderOpacity, y: smoothHeaderY }}
        className="mx-auto max-w-3xl text-center mb-20 space-y-6"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-light leading-tight text-neutral-900 dark:text-neutral-100">
          Focused on building{" "}
          <span className="font-semibold italic">
            scalable, modern, and user-friendly
          </span>{" "}
          digital products.
        </h2>
      </motion.div>

      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-0">
        {services.map((item, index) => (
          <ServiceCard key={index} item={item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row md:justify-between md:items-center gap-6"
      >
        <div>
          <p className="text-neutral-900 dark:text-neutral-100 font-medium">
            Interested working together?
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Let's build something great.
          </p>
        </div>

        <a
          href="#contact"
          className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
