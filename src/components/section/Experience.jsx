"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { BsStars } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

// Animated background component with floating particles
const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      initialX: Math.random() * 100 + "%",
      initialY: Math.random() * 100 + "%",
      initialOpacity: 0.1 + Math.random() * 0.3,
      animateX: [
        Math.random() * 100 + "%",
        Math.random() * 100 + "%",
        Math.random() * 100 + "%",
      ],
      animateY: [
        Math.random() * 100 + "%",
        Math.random() * 100 + "%",
        Math.random() * 100 + "%",
      ],
      duration: 15 + Math.random() * 20,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-300/20"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: particle.initialOpacity,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: particle.duration,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Animated text that reveals character by character
const AnimatedText = ({ text, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-1">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        damping: 15,
      }}
      className="border-b border-[#1E2023] relative"
    >
      <motion.div
        initial={{ opacity: 0.8 }}
        whileHover={{
          opacity: 1,
          scale: 1.01,
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.05)",
        }}
        transition={{ duration: 0.2 }}
        className={`flex items-center justify-between w-full py-4 cursor-pointer ${
          isActive ? "bg-gray-900/20" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <motion.div
            className="bg-gray-800 rounded-full w-10 h-10 overflow-hidden flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {icon}
          </motion.div>
          <div>
            <motion.h3
              className="text-white font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {role}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {company}
            </motion.p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <motion.div
            className="text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            {period}
          </motion.div>
          <motion.div
            animate={{
              rotate: isActive ? 180 : 0,
              color: isActive ? "#FCD34D" : "#9CA3AF",
            }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="text-current" />
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
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.2,
                },
              },
            }}
            className="overflow-hidden relative"
          >
            {/* Animated highlight line */}
            <motion.div
              className="absolute left-5 top-0 bottom-4 w-0.5 bg-gradient-to-b from-amber-300/80 via-amber-300/40 to-transparent"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            <ul className="text-gray-400 space-y-2 text-xs list-disc ml-16 mb-4 relative">
              {details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + idx * 0.08,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
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
    <section
      ref={sectionRef}
      className="w-full py-20 pt-44 px-6 md:px-16 lg:px-24 bg-black text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <AnimatedBackground />

      <div className="max-w-full mx-auto relative z-10">
        <div className="flex flex-col md:flex-row w-full gap-20">
          {/* Left side */}
          <div className="w-full md:w-1/3 lg:w-1/3">
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-amber-300"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <BsStars />
              </motion.div>
              <motion.h3
                className="text-amber-300 uppercase text-sm font-medium tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                WORK HISTORY
              </motion.h3>
            </motion.div>

            <AnimatedText
              text="Experience"
              className="text-5xl font-bold mb-6"
            />

            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </motion.p>

            {/* Decorative element */}
            <motion.div
              className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,191,36,0.1) 0%, rgba(251,191,36,0) 70%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3 lg:w-2/3 relative">
            {/* Decorative line */}
            <motion.div
              className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-300/20 to-transparent hidden md:block"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            />

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
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
