"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Marquee from "react-fast-marquee";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa";

const menuVariants = {
  closed: {
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
  open: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      delay: 0.1,
    },
  },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const nameVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 300,
    },
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contacts = [
    {
      icon: <CiMail className="text-3xl mr-5" />,
      text: "ngurahpratama2002@gmail.com",
      href: "mailto:ngurahpratama2002@gmail.com",
    },
    {
      icon: <FaLinkedinIn className="text-3xl mr-5" />,
      text: "Ngurah Arya Pratama",
      href: "https://linkedin.com/in/ngurah-arya-pratama",
    },
    {
      icon: <FaGithub className="text-3xl mr-5" />,
      text: "NgurahAp",
      href: "https://github.com/NgurahAp",
    },
  ];

  const menuContent = {
    HOME: (
      <div className="flex flex-col justify-center px-10 h-full text-gray-900">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">Introduction.</h2>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Ngurah Arya Pratama
          </h1>
          <h2 className="text-xl text-gray-600 mb-8">
            Fullstack Developer | Mobile Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            System Information student at <span className="font-semibold">Universitas BSI</span> with 
            a passion for creating beautiful, functional mobile and web applications 
            that solve real problems.
          </p>
          
          <div className="flex items-center gap-8 pt-4 border-t border-gray-200">
            <div>
              <div className="text-3xl font-light text-gray-900">1+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Years Exp</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900">10+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Projects</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-600">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    EXPERTISE: (
      <div className="flex flex-col justify-center h-full text-gray-900 px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-gray-500 mb-2">Tech Stack.</h2>
          <p className="text-gray-600">Technologies & Tools I work with</p>
        </motion.div>

        <div className="space-y-4">
          <Marquee direction="right" className="overflow-y-hidden" speed={40}>
            <h1 className="text-4xl font-semibold text-gray-800 mb-1">
              Vue / Nuxt.js &nbsp;•&nbsp; React / Next.js &nbsp;•&nbsp; Node.js / Express &nbsp;•&nbsp; PHP / Laravel &nbsp;•&nbsp; Vue / Nuxt.js &nbsp;•&nbsp; React / Next.js &nbsp;•&nbsp; Node.js / Express &nbsp;•&nbsp; PHP / Laravel &nbsp;•&nbsp;
            </h1>
          </Marquee>
          <Marquee direction="left" className="overflow-y-hidden" speed={50}>
            <h1 className="text-4xl font-semibold text-gray-700 mb-1">
              Dart / Flutter &nbsp;•&nbsp; Go - Lang &nbsp;•&nbsp; PostgreSQL &nbsp;•&nbsp; MongoDB &nbsp;•&nbsp; MySQL &nbsp;•&nbsp; Dart / Flutter &nbsp;•&nbsp; Go - Lang &nbsp;•&nbsp; PostgreSQL &nbsp;•&nbsp; MongoDB &nbsp;•&nbsp; MySQL &nbsp;•&nbsp;
            </h1>
          </Marquee>
          <Marquee direction="right" className="overflow-y-hidden" speed={45}>
            <h1 className="text-4xl font-semibold text-gray-600">
              Firebase &nbsp;•&nbsp; Supabase &nbsp;•&nbsp; Redis &nbsp;•&nbsp; Docker &nbsp;•&nbsp; Git &nbsp;•&nbsp; Tailwind CSS &nbsp;•&nbsp; Firebase &nbsp;•&nbsp; Supabase &nbsp;•&nbsp; Redis &nbsp;•&nbsp; Docker &nbsp;•&nbsp; Git &nbsp;•&nbsp; Tailwind CSS &nbsp;•&nbsp;
            </h1>
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-4 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 italic">
            "Building innovative software solutions with modern technologies"
          </p>
        </motion.div>
      </div>
    ),
    EXPERIENCE: (
      <div className="flex flex-col justify-center px-10 h-full text-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">1+ Years</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Professional Experience</h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Developing full-stack solutions as a software developer, 
            specializing in modern web and mobile technologies
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex justify-center gap-6"
          >
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">Full-time</div>
              <div className="text-sm text-gray-500">2025 - Present</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">Student</div>
              <div className="text-sm text-gray-500">Universitas BSI</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
    PROJECTS: (
      <div className="flex flex-col justify-center px-10 h-full text-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">10+</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Projects Completed</h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Showcasing web and mobile applications focused on seamless user 
            experiences and innovative solutions
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex justify-center gap-6"
          >
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">Web Apps</div>
              <div className="text-sm text-gray-500">Full Stack</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">Mobile Apps</div>
              <div className="text-sm text-gray-500">Cross Platform</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
    CONTACT: (
      <div className="flex flex-col justify-center pl-20 h-full text-gray-900">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center group cursor-pointer py-5">
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                {contact.icon}
              </motion.div>
              <h1 className="text-base">{contact.text}</h1>
              <motion.div
                className="ml-5"
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  },
                }}
              >
                <FaLink className="text-gray-400" />
              </motion.div>
            </motion.a>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-10 py-6 bg-transparent z-99">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-900"></div>

        {/* Hamburger menu */}
        <button
          className="text-gray-900 hover:text-gray-600 cursor-pointer transition-colors"
          onClick={toggleMenu}
        >
          <Menu size={32} />
        </button>

        {/* Animated dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-white p-14 flex flex-col justify-between"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-10 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>

              <div className="flex pt-5 h-full">
                <div className="w-1/4">
                  <ul
                    className="flex flex-col space-y-8 text-xl"
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      onMouseEnter={() => setActiveMenu("HOME")}
                    >
                      <a
                        href="/"
                        className="text-gray-900 text-4xl hover:text-gray-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        HOME
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      onMouseEnter={() => setActiveMenu("EXPERTISE")}
                    >
                      <a
                        href="#expertise"
                        className="text-gray-900 text-4xl hover:text-gray-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        EXPERTISE
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onMouseEnter={() => setActiveMenu("EXPERIENCE")}
                    >
                      <a
                        href="#experience"
                        className="text-gray-900 text-4xl hover:text-gray-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        EXPERIENCE
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      onMouseEnter={() => setActiveMenu("PROJECTS")}
                    >
                      <a
                        href="#projects"
                        className="text-gray-900 text-4xl hover:text-gray-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        PROJECTS
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      onMouseEnter={() => setActiveMenu("CONTACT")}
                    >
                      <a
                        href="#contact"
                        className="text-gray-900 text-4xl hover:text-gray-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        CONTACT
                      </a>
                    </motion.li>
                  </ul>
                </div>

                <motion.div
                  className={`w-3/4 h-full transition-colors duration-300 rounded-xl `}
                >
                  <AnimatePresence mode="wait">
                    {activeMenu && (
                      <motion.div
                        key={activeMenu}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        {menuContent[activeMenu]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Footer */}
              <div>
                <motion.hr
                  className="w-full border-t-2 border-gray-900 my-4"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.h1
                  className="text-gray-900 text-4xl font-semibold"
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {"Ngurah Arya Pratama".split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
