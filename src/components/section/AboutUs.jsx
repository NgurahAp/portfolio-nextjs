"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import FlowingMenu from "../ui/FlowingMenu";

export function AboutSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const worksRef = useRef(null);

  // Pisah inView per blok biar timing-nya lebih natural
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
  const worksInView = useInView(worksRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const curveDepth = useTransform(scrollYProgress, [0, 1], [150, 50]);

  const demoItems = [
    {
      link: "#",
      text: "The Aesthetics Skin",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Glams Company Profile",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Attendance Dreamaxtion",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "LMS M-Knows",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      link: "#",
      text: "Bersih Bersama",
      image: "https://picsum.photos/600/400?random=5",
    },
  ];

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
      className="relative bg-neutral-50 dark:bg-neutral-950 pt-32 "
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
        <div ref={contentRef} className="pt-14 pb-20 px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
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
              className="text-3xl md:text-4xl font-light leading-tight text-white dark:text-neutral-900"
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
              className="max-w-2xl mx-auto text-neutral-400 dark:text-neutral-600 text-base md:text-lg leading-relaxed"
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
              className="flex items-center justify-center gap-3 pt-4"
            >
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
            </motion.div>
          </div>
        </div>

        {/* ===== WORKS ===== */}
        <div ref={worksRef} className=" pt-10">
          <div className="text-center mb-12">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={worksInView ? "show" : "hidden"}
              className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4"
            >
              Selected Projects
            </motion.p>

            <motion.h3
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={worksInView ? "show" : "hidden"}
              className="text-xl md:text-2xl font-light leading-relaxed text-white dark:text-neutral-900 max-w-2xl mx-auto"
            >
              A showcase of my{" "}
              <span className="font-medium italic">
                web and mobile development projects
              </span>
              , built with modern technologies and a focus on seamless user
              experience.
            </motion.h3>
          </div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={worksInView ? "show" : "hidden"}
            className="relative h-[400px] overflow-hidden border-y border-neutral-800 dark:border-neutral-300"
          >
            <FlowingMenu
              items={demoItems}
              speed={20}
              textColor="#ffffff"
              bgColor="transparent"
              marqueeBgColor="#ffffff"
              marqueeTextColor="#060010"
              borderColor="#262626"
            />
          </motion.div>
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
