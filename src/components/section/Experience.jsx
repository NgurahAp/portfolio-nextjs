"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const ExperienceItem = ({
  icon,
  role,
  company,
  period,
  details,
  isActive,
  onClick,
}) => (
  <div className="border-b border-[#1E2023]">
    <motion.div
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center justify-between w-full py-4 cursor-pointer hover:bg-gray-900/10 ${
        isActive ? "bg-gray-900/20" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="bg-gray-800 rounded-full w-10 h-10 overflow-hidden flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-white font-medium">{role}</h3>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-gray-400 text-xs">{period}</div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-gray-400" />
        </motion.div>
      </div>
    </motion.div>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden "
        >
          <ul className="text-gray-400 space-y-2 text-xs list-disc ml-16 mb-4">
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experiences = [
    {
      icon: (
        <img
          src="/thc.webp"
          alt="Taharica"
          className="object-cover w-10 h-10"
        />
      ),
      role: "Web Developer",
      company: "@Taharica (Internship)",
      period: "Dec 2024 — March 2025",
      details: [
        "Developed a Company Profile website using React.js, focusing on responsive design and optimal user experience",
        "Designed and structured key sections to effectively showcase company information.",
        "Ensured fast performance and smooth navigation throughout the website.",
      ],
    },
    {
      icon: (
        <img
          src="/mknows.jfif"
          alt="PT Menara Indonesia"
          className="object-cover w-10 h-10"
        />
      ),
      role: "Frontend Web Developer",
      company: "@PT Menara Indonesia (Internship)",
      period: "Sept 2024 — Dec 2024",
      details: [
        "Developed a Learning Management System (LMS) using Next.js, focusing on responsive design and seamless user experience.",
        "Collaborated with UI/UX and backend teams to implement intuitive interfaces and key features like user authentication and course management.",
        "Optimized application performance and responsiveness, ensuring smooth user interactions.",
        "Successfully complete the project within the 3-month timeline, meeting both technical and business requirements.",
      ],
    },
    {
      icon: (
        <img
          src="/alterra.png"
          alt="Alterra"
          className="object-cover w-10 h-10"
        />
      ),
      role: "Mobile Developer",
      company: "@Alterra (Apprenticeship)",
      period: "Aug 2023 — Dec 2023",
      details: [
        "Developed feature-rich applications using Flutter and Dart.",
        "Implemented state management solutions such as Provider, Riverpod, or Bloc for better app efficiency.",
        "Integrated RESTful APIs to ensure smooth data flow between frontend and backend.",
        "Collaborate with Backend, Frontend Web, and QA teams in an agile environment to develop industry-standard applications.",
      ],
    },
  ];

  return (
    <section className="w-full py-20 pt-44 px-6 md:px-16 lg:px-24 bg-black text-white">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row w-full gap-20">
          {/* Left side */}
          <div className="w-full md:w-1/3 lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-amber-300">
                <BsStars />
              </div>
              <h3 className="text-amber-300 uppercase text-sm font-medium tracking-wider">
                WORK HISTORY
              </h3>
            </div>

            <h2 className="text-5xl font-bold mb-6">Experience</h2>
            <p className="text-gray-400 text-sm">
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </p>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3 lg:w-2/3">
            <div className="space-y-1">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  icon={exp.icon}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  details={exp.details}
                  isActive={activeIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
