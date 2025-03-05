"use client";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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
        "Building responsive and dynamic web app using modern frameworks and libraries.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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
    <div className="w-full bg-black py-32">
      <div className="container mx-auto px-6 ">
        {/* Section header with the same styling as hero */}
        <div className="flex items-center gap-2 mb-4">
          <div className="text-amber-300">
            <BsStars />
          </div>
          <h3 className="text-amber-300 uppercase text-sm font-medium tracking-wider">
            SERVICES
          </h3>
        </div>

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What I Offer
          </h2>
          <p className="text-gray-400 text-sm">
            Delivering comprehensive development solutions with a focus on
            quality, performance, and user experience.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-transparent border border-[#1E2023] rounded-lg p-6"
            >
              <div className="flex flex-col  h-full">
                <div>
                  {/* Service icon */}
                  <div className="w-12 h-12 rounded-md bg-[#1a1a1a] flex items-center justify-center text-[#ffb84d] mb-6 group-hover:bg-[#ffb84d]/10 transition-colors">
                    {service.icon}
                  </div>

                  {/* Service title */}
                  <h3 className="font-heading  font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Service description */}
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                </div>
                {/* Technologies used */}
                <div className="flex flex-wrap gap-2 items-end ">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
