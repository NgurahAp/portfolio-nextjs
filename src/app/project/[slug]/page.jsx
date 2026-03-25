"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail() {
  // Hardcoded data untuk demo
  const project = {
    title: "The Aesthetics Skin",
    subtitle: "E-Commerce Platform for Skincare Products",
    description:
      "A modern e-commerce platform designed for skincare enthusiasts. Built with a focus on user experience, performance, and scalability. The platform features a clean interface, smooth animations, and seamless checkout process.",
    image: "https://picsum.photos/1200/600?random=1",
    repoLink: "https://github.com/username/project",
    liveLink: "https://project-demo.com",
    year: "2024",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
              {project.year}
            </span>
            <div className="h-px w-12 bg-gray-300" />
            <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
              {project.role}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              <ExternalLink size={16} />
              View Live
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
          </div>
        </motion.div>
      </section>

      {/* Project Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 pb-20"
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* Content Grid */}
      <section className="container mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-12"
          >
            {/* Overview */}
            <div>
              <h2 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-4">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Core Features */}
            <div>
              <h2 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-6">
                Core Features
              </h2>
              <ul className="space-y-3">
                {project.coreFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-6">
                My Responsibilities
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="sticky top-24">
              <h2 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 pb-20"
      >
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Interested in working together?
              </h3>
              <p className="text-gray-600">
                Let's discuss your next project
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
