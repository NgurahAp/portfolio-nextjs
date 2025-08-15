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
    <section className="relative min-h-screen w-full bg-white">
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-72 pb-20">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between w-full items-end gap-12 lg:gap-0">
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
            <div className="space-y-4 min-w-[200px] ">
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
                    className="group flex items-center justify-between"
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="text-sm text-gray-900 font-light group-hover:text-black transition-colors">
                      {link.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Title and Arrow aligned */}
        <div className="flex justify-between items-end  w-full h-full">
          {/* Left - Main Title with Contact label */}
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-4 mb-4"
            >
              <BsStars className="text-gray-400 text-xs w-4 h-4" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                Contact
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight"
            >
              LET'S TALK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md text-gray-800 font-light leading-relaxed max-w-2xl"
            >
              Ready to bring your ideas to life? I'm always excited to discuss
              new opportunities, collaborate on interesting projects, or just
              have a chat about technology and innovation.
            </motion.p>
          </div>

          {/* Right - Large Arrow Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-end justify-end h-full"
          >
            <ArrowUpRight size={90} className="text-gray-400" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-contact-border border-gray-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left - Status */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-light text-contact-text text-gray-600">
                  Available
                </div>
                <div className="text-xs text-contact-light uppercase text-gray-400 tracking-wide">
                  For Projects
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-contact-text text-gray-600">
                  24h
                </div>
                <div className="text-xs text-contact-light uppercase tracking-wide text-gray-400">
                  Response Time
                </div>
              </div>
            </div>

            {/* Middle - Response indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-700 animate-pulse" />
              <span className="text-xs text-contact-medium font-medium">
                Usually responds within hours
              </span>
            </div>

            {/* Right - Location */}
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Based in
              </div>
              <div className="text-sm text-gray-600">Indonesia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
