"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/ui/Back";

// ─── Reusable scroll-animated block ───────────────────────────────────────────
function FadeBlock({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0, 1, 1, 0],
  );
  const rawY = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [40, 0, 0, -40]);
  const opacity = useSpring(rawOpacity, { stiffness: 70, damping: 18 });
  const y = useSpring(rawY, { stiffness: 70, damping: 18 });

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const curveDepth = useTransform(scrollYProgress, [0, 1], [150, 50]);

  // ─── Project data ────────────────────────────────────────────────────────────
  const project = {
    title: "The Aesthetics Skin",
    subtitle: "E-Commerce Platform for Skincare Products",
    description:
      "A modern e-commerce platform designed for skincare enthusiasts. Built with a focus on user experience, performance, and scalability. The platform features a clean interface, smooth animations, and seamless checkout process.",
    image:
      "https://res.cloudinary.com/do5hgkrgi/image/upload/v1768555105/The_Aesthetics_jmrhjl.png",
    repoLink: "https://github.com/username/project",
    liveLink: "https://project-demo.com",
    year: "2025",
    role: "Full Stack Developer",
    coreFeatures: [
      "Product catalog with advanced filtering",
      "Shopping cart with real-time updates",
      "Secure payment integration",
      "User authentication & profile management",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe API",
      "JWT Authentication",
    ],
    responsibilities: [
      "Designed and implemented the frontend architecture",
      "Built RESTful APIs for product and user management",
      "Integrated payment gateway with Stripe",
      "Implemented authentication and authorization system",
      "Optimized database queries for better performance",
      "Deployed and maintained the application on cloud infrastructure",
    ],
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <BackButton />

      {/* ── Hero ──────────────────────────────────────────────────────────  ────── */}
      <section ref={heroRef} className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Meta row */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Project Detail
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-neutral-900 dark:text-neutral-100 mb-6"
          >
            {project.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="font-semibold italic">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 mb-10 leading-relaxed max-w-2xl"
          >
            {project.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="flex flex-wrap gap-4"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#CBFF4D] px-7 py-3 text-sm font-semibold text-neutral-900 transition hover:opacity-90"
            >
              <ExternalLink size={15} />
              View Live
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-7 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Github size={15} />
              View Code
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Cover Image ───────────────────────────────────────────────────────── */}
      <FadeBlock className="container mx-auto px-6 pb-48">
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
        </div>
      </FadeBlock>

      {/* ── Dark Band (matching AboutSection style) ────────────────────────────── */}
      <div
        ref={sectionRef}
        className="relative bg-neutral-50 dark:bg-neutral-950"
      >
        <div className="relative bg-neutral-900 dark:bg-neutral-100">
          {/* Curve top */}
          <div className="absolute -top-[100px] left-0 w-full h-[100px]">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <motion.path
                d={useTransform(
                  curveDepth,
                  (v) => `M0,100 Q720,${100 - v} 1440,100 L1440,100 L0,100 Z`,
                )}
                className="fill-neutral-900 dark:fill-neutral-100"
              />
            </svg>
          </div>

          {/* ── Content Grid ──────────────────────────────────────────────────── */}
          <div className="container mx-auto px-6 pt-24 pb-32">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">
              {/* Left 2/3 – Overview, Features, Responsibilities */}
              <div className="md:col-span-2 space-y-20">
                {/* Overview */}
                <FadeBlock>
                  <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">
                    Overview
                  </p>
                  <p className="text-lg font-light leading-relaxed text-neutral-300 dark:text-neutral-600">
                    {project.description}
                  </p>
                </FadeBlock>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-400 to-transparent" />

                {/* Core Features */}
                <FadeBlock>
                  <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-8">
                    Core Features
                  </p>
                  <ul className="space-y-4">
                    {project.coreFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF4D] mt-2 flex-shrink-0" />
                        <span className="text-neutral-300 dark:text-neutral-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </FadeBlock>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-400 to-transparent" />

                {/* Responsibilities */}
                <FadeBlock>
                  <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-8">
                    My Responsibilities
                  </p>
                  <ul className="space-y-4">
                    {project.responsibilities.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF4D] mt-2 flex-shrink-0" />
                        <span className="text-neutral-300 dark:text-neutral-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </FadeBlock>
              </div>

              {/* Right 1/3 – Tech Stack (sticky) */}
              <FadeBlock>
                <div className="sticky top-24 space-y-8">
                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-4 py-1.5 border border-neutral-700 dark:border-neutral-300 text-neutral-300 dark:text-neutral-600 text-xs tracking-wide"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Quick info */}
                  <div className="space-y-4 pt-4 border-t border-neutral-800 dark:border-neutral-300">
                    {[
                      { label: "Year", value: project.year },
                      { label: "Role", value: project.role },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-1">
                          {label}
                        </p>
                        <p className="text-sm text-neutral-300 dark:text-neutral-600">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeBlock>
            </div>
          </div>

          {/* Curve bottom */}
          <div className="absolute -bottom-[100px] left-0 w-full h-[100px]">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <motion.path
                d={useTransform(
                  curveDepth,
                  (v) => `M0,0 Q720,${v} 1440,0 L1440,0 L0,0 Z`,
                )}
                className="fill-neutral-900 dark:fill-neutral-100"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Footer CTA ────────────────────────────────────────────────────────── */}
      <FadeBlock className="container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-12"
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
                Next Step
              </p>
              <h3 className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
                Interested in{" "}
                <span className="font-semibold italic">working together?</span>
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Let's discuss your next project.
              </p>
            </div>

            <Link
              href="/#contact"
              className="rounded-full bg-[#CBFF4D] px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:opacity-90 text-center whitespace-nowrap"
            >
              Get in Touch ↗
            </Link>
          </div>
        </div>
      </FadeBlock>
    </div>
  );
}
