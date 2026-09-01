"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/project";

const selectedProjectSlugs = [
  "the-aesthetics-skin",
  "glams-company-profile",
  "adsvisor",
  "attendance-dreamaxtion",
  "lms-mknows",
];

const selectedProjects = selectedProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

export function AboutSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const worksRef = useRef(null);

  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
  const worksInView = useInView(worksRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const curveDepth = useTransform(scrollYProgress, [0, 1], [150, 50]);

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.25 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-50 dark:bg-neutral-950 pt-24 sm:pt-32"
    >
      <div className="relative bg-neutral-900 dark:bg-neutral-100">
        {/* ===== CURVE TOP ===== */}
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

        {/* ===== CONTENT ===== */}
        <div
          id="about"
          ref={contentRef}
          className="pt-16 pb-24 px-5 sm:pt-20 sm:pb-32 sm:px-6"
        >
          <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "show" : "hidden"}
              className="text-xs tracking-[0.3em] uppercase text-neutral-500"
            >
              About Me
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "show" : "hidden"}
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-white dark:text-neutral-900"
            >
              I'm Arya —{" "}
              <span className="font-semibold italic">
                solving real-world problems through thoughtful software
              </span>{" "}
              and building scalable web and mobile experiences.
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "show" : "hidden"}
              className="max-w-2xl mx-auto text-neutral-400 dark:text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed"
            >
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
              .
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "show" : "hidden"}
              className="flex items-center justify-center gap-2 sm:gap-3 pt-3 sm:pt-4"
            >
              <a
                href="https://drive.google.com/file/d/1hH-etED5Da9NRQG7TrfriRw6AC78T_Tf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#CBFF4D] px-6 py-2.5 text-xs sm:px-8 sm:py-3 sm:text-sm font-semibold text-neutral-900 transition hover:opacity-90"
              >
                Curriculum Vitae ↗
              </a>
              <a
                href="https://wa.me/6285158724409"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-600 px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm font-medium text-neutral-300 transition hover:bg-neutral-800 dark:border-neutral-400 dark:text-neutral-600"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center gap-2 mt-16 sm:mt-28"
          >
            <span className="text-xs text-neutral-500 uppercase tracking-[0.3em]">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-neutral-500"
            >
              <path
                d="M10 4V16M10 16L6 12M10 16L14 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* ===== SEPARATOR ===== */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="h-px bg-gradient-to-r mt-4 from-transparent via-neutral-700 dark:via-neutral-400 to-transparent" />
          </motion.div>
        </div>

        {/* ===== WORKS ===== */}
        <div
          id="works"
          ref={worksRef}
          className="px-5 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 border-b border-neutral-800 pb-10 sm:mb-20 sm:pb-14 md:grid-cols-[1fr_auto] md:items-end dark:border-neutral-300">
              <div>
                <motion.p
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate={worksInView ? "show" : "hidden"}
                  className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500"
                >
                  (03) Selected Works
                </motion.p>

                <motion.h3
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={worksInView ? "show" : "hidden"}
                  className="max-w-3xl text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-7xl dark:text-neutral-900"
                >
                  Digital products made to be{" "}
                  <span className="font-semibold italic">explored.</span>
                </motion.h3>
              </div>

              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={worksInView ? "show" : "hidden"}
                className="flex max-w-xs items-center gap-3 text-sm leading-relaxed text-neutral-400 dark:text-neutral-600"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CBFF4D] text-neutral-950">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
                Click any project to open the full case study.
              </motion.div>
            </div>

            <div className="space-y-20 sm:space-y-28">
              {selectedProjects.map((project, index) => {
                const imageOnRight = index % 2 === 1;

                return (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={`/project/${project.slug}`}
                      aria-label={`View ${project.title} case study`}
                      className="group grid gap-7 rounded-[2rem] outline-none md:grid-cols-12 md:items-center md:gap-12 focus-visible:ring-2 focus-visible:ring-[#CBFF4D] focus-visible:ring-offset-8 focus-visible:ring-offset-neutral-900 dark:focus-visible:ring-offset-neutral-100"
                    >
                      <div
                        className={`relative overflow-hidden rounded-[1.5rem] bg-neutral-800 md:col-span-7 md:rounded-[2rem] ${
                          imageOnRight ? "md:order-2" : ""
                        }`}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.title} project preview`}
                            fill
                            sizes="(min-width: 768px) 58vw, 100vw"
                            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                        </div>

                        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-950 shadow-lg backdrop-blur sm:right-6 sm:top-6 sm:px-5 sm:py-2.5 sm:text-sm">
                          Open project
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>

                        <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur sm:bottom-6 sm:left-6">
                          Case study {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div
                        className={`md:col-span-5 ${
                          imageOnRight ? "md:order-1 md:text-right" : ""
                        }`}
                      >
                        <div
                          className={`mb-5 flex items-center gap-3 ${
                            imageOnRight ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#CBFF4D] dark:text-neutral-700">
                            {project.category}
                          </span>
                          <span className="h-px w-10 bg-neutral-700 dark:bg-neutral-400" />
                          <span className="text-xs text-neutral-500">
                            {project.year}
                          </span>
                        </div>

                        <h4 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl dark:text-neutral-900">
                          {project.title}
                        </h4>
                        <p
                          className={`mt-5 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base dark:text-neutral-600 ${
                            imageOnRight ? "md:ml-auto" : ""
                          }`}
                        >
                          {project.subtitle}
                        </p>

                        <span
                          className={`mt-7 inline-flex items-center gap-2 border-b border-neutral-600 pb-1.5 text-sm font-medium text-neutral-200 transition-colors group-hover:border-[#CBFF4D] group-hover:text-[#CBFF4D] dark:border-neutral-400 dark:text-neutral-700 dark:group-hover:border-neutral-900 dark:group-hover:text-neutral-900 ${
                            imageOnRight ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          View case study
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== CURVE BOTTOM ===== */}
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
    </section>
  );
}
