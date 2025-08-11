"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  index,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="border-b border-gray-100 last:border-b-0"
    >
      <motion.div
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
        transition={{ duration: 0.2 }}
        className={`flex items-center justify-between w-full py-6 cursor-pointer ${
          isActive ? "bg-gray-50/50" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 rounded-full w-12 h-12 overflow-hidden flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-gray-900 font-medium text-lg">{role}</h3>
            <p className="text-gray-600 text-sm">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-gray-500 text-sm font-light">{period}</div>
          <motion.div
            animate={{
              rotate: isActive ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <FiChevronDown size={18} />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-16">
              <ul className="space-y-3">
                {details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + idx * 0.1,
                    }}
                    className="text-gray-600 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experiences = [
    {
      icon: (
        <img
          src="/thc.webp"
          alt="Taharica"
          className="object-cover w-12 h-12 rounded-full"
        />
      ),
      role: "Web Developer",
      company: "@Taharica (Internship)",
      period: "Dec 2024 — March 2025",
      details: [
        "Developed a Company Profile website using React.js, focusing on responsive design and optimal user experience",
        "Designed and structured key sections to effectively showcase company information",
        "Ensured fast performance and smooth navigation throughout the website",
      ],
    },
    {
      icon: (
        <img
          src="/mknows.jfif"
          alt="PT Menara Indonesia"
          className="object-cover w-12 h-12 rounded-full"
        />
      ),
      role: "Frontend Web Developer",
      company: "@PT Menara Indonesia (Internship)",
      period: "Sept 2024 — Dec 2024",
      details: [
        "Developed a Learning Management System (LMS) using Next.js, focusing on responsive design and seamless user experience",
        "Collaborated with UI/UX and backend teams to implement intuitive interfaces and key features like user authentication and course management",
        "Optimized application performance and responsiveness, ensuring smooth user interactions",
        "Successfully completed the project within the 3-month timeline, meeting both technical and business requirements",
      ],
    },
    {
      icon: (
        <img
          src="/alterra.png"
          alt="Alterra"
          className="object-cover w-12 h-12 rounded-full"
        />
      ),
      role: "Mobile Developer",
      company: "@Alterra (Apprenticeship)",
      period: "Aug 2023 — Dec 2023",
      details: [
        "Developed feature-rich applications using Flutter and Dart",
        "Implemented state management solutions such as Provider, Riverpod, or Bloc for better app efficiency",
        "Integrated RESTful APIs to ensure smooth data flow between frontend and backend",
        "Collaborated with Backend, Frontend Web, and QA teams in an agile environment to develop industry-standard applications",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen w-full bg-white"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="max-w-xl">
            {/* Introduction Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-4 mb-4 py-2"
            >
              <BsStars className="text-gray-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Work History
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
            >
              Experience
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md text-gray-600 font-light leading-relaxed"
            >
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products and gain valuable experience
              in various technologies.
            </motion.p>
          </div>

          {/* Right Column - Experience List */}
          <div className="pt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white border border-gray-100 rounded-lg shadow-sm"
            >
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
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
