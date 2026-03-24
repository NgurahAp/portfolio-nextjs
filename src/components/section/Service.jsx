"use client";

import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import TextType from "../ui/TextType";

export default function ServicesSection() {
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

  return (
    <section id="services" className="min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <BsStars className="text-gray-400 text-xs" />
          <span className="text-xs text-gray-600 uppercase tracking-wide">
            Services
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <TextType
            text={["What I Offer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
          />
          <p className="text-gray-600 font-light">
            Focused on building scalable, modern, and user-friendly digital
            products.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 relative">
          {/* Vertical Gradient Line */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2
            bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-70"
          />

          {/* Horizontal Gradient Line */}
          <div
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2
            bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"
          />

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-12  transition"
            >
              {/* Module */}
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                {item.module}
              </p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-200 mb-6" />

              {/* Description */}
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                {item.tech.map((tech, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row md:justify-between gap-6"
        >
          <div>
            <p className="text-gray-900 font-medium">
              Interested working together?
            </p>
            <p className="text-sm text-gray-500">
              Let’s build something great.
            </p>
          </div>

          <button className="px-6 py-3 border border-gray-300 text-sm text-gray-800 hover:bg-gray-50 transition">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
