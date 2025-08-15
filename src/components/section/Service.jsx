"use client";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using modern frameworks and libraries.",
      technologies: [
        "React",
        "Vue",
        "Nuxt.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      ),
      title: "Mobile Development",
      description:
        "Creating native and cross-platform mobile applications with smooth user experiences.",
      technologies: ["Flutter", "iOS", "Android"],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Backend Development",
      description:
        "Designing robust server-side architectures and APIs to power your applications.",
      technologies: [
        "Node.js",
        "Laravel",
        "Go",
        "Express",
        "MongoDB",
        "Firebase",
      ],
    },
  ];

  return (
    <section id="services" className="relative min-h-screen w-full bg-white">
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <BsStars className="text-gray-400 text-xs" />
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
            Services
          </span>
        </motion.div>

        {/* Section Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            What I Offer
          </h2>
          <p className="text-md text-gray-800 font-light leading-relaxed">
            Comprehensive development solutions focused on quality and
            performance.
          </p>
        </motion.div>

        {/* Services List - Minimalist Design */}
        <div className="space-y-0 divide-y divide-gray-100">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group py-12 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 h-full">
                {/* Left: Icon and Title */}
                <div className="md:w-1/3 ">
                  <div className="flex items-center gap-4">
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg  text-gray-900">{service.title}</h3>
                  </div>
                </div>

                {/* Right: Description and Technologies */}
                <div className="md:w-2/3 space-y-4">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies - Simplified */}
                  <div className="text-sm text-gray-400 font-light">
                    {service.technologies.join(" · ")}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-16 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-gray-900 font-medium mb-1">
                Ready to start your next project?
              </p>
              <p className="text-sm text-gray-500">
                Let's discuss how we can work together
              </p>
            </div>
            <button className="px-8 py-3 text-gray-900 text-sm font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 rounded-none md:self-start">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
