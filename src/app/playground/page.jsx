"use client";

import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PlaygroundSection = () => {
  const projects = [
    {
      id: 1,
      title: "Attendance Dreamation",
      description:
        "A web-based application for managing and tracking attendance records",
      techDescription: "Developed using ExpressJS & NuxtJS framework.",
      image: "/Attendance-DMX.png",
      tags: ["Flutter", "Dart", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "LXP M-Knows",
      description:
        "A web-based Learning Management System that facilitates online education",
      techDescription: "Developed using ExpressJS & NextJS framework.",
      image: "/lxp.png",
      tags: ["React", "Next.js", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "BersihBersama",
      description:
        "A platform that allows public to report cases of environmental cleanliness",
      techDescription: "Developed using Laravel framework.",
      image: "/Berber.png",
      tags: ["React", "Next.js", "Tailwind"],
      link: "#",
      github: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="playground" className="relative w-full bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4 py-2"
          >
            <BsStars className="text-gray-400 text-xs" />
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Playground
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
          >
            Recent Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md text-gray-800 font-light leading-relaxed"
          >
            A collection of mobile and web applications I've built, showcasing
            various technologies and problem-solving approaches.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              {/* Top Border Line */}
              <div className="h-[3px] bg-gray-200 rounded-full"></div>

              {/* Project Info - Now Above Image */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500"></div>
                  </div>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.link}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
                    >
                      <FiExternalLink size={14} />
                    </a>
                    <a
                      href={project.github}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
                    >
                      <FiGithub size={14} />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-gray-900 mt-6 ">
                  {project.description}
                </p>
                <p className="text-xs text-gray-400  mb-4">
                  {project.techDescription}
                </p>
              </div>

              {/* Project Image - Now Below Info */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mx-6 mb-6 rounded-lg">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
