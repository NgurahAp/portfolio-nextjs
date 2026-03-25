"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// BsStars component (since we can't import from react-icons)
const BsStars = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16">
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
  </svg>
);

export default function ContactForm() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const contactLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:contact@yourname.com" },
    { label: "GitHub", href: "#" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-neutral-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-16 lg:gap-0 mb-20">
          {/* Left Side - Empty space for balance */}
          <div className="flex-1"></div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 lg:mr-32"
          >
            <div className="space-y-6 min-w-[200px]">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center justify-between gap-4 relative"
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="text-base text-gray-700 font-light group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-gray-400 group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Title and Arrow aligned */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 w-full">
          {/* Left - Main Title with Contact label */}
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-[1.1]"
            >
              LET'S TALK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl"
            >
              Ready to bring your ideas to life? I'm always excited to discuss
              new opportunities, collaborate on interesting projects, or just
              have a chat about technology and innovation.
            </motion.p>
          </div>

          {/* Right - Large Arrow Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-end justify-end"
          >
            <ArrowUpRight
              size={120}
              className="text-gray-300"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left - Status */}
            <div className="flex items-center gap-12">
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">
                  Available
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.3em]">
                  For Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">
                  24h
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.3em]">
                  Response Time
                </div>
              </div>
            </div>

            {/* Middle - Response indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-600 font-medium">
                Usually responds within hours
              </span>
            </div>

            {/* Right - Location */}
            <div className="text-left md:text-right">
              <div className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-2">
                Based in
              </div>
              <div className="text-base text-gray-900 font-medium">
                Indonesia
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
