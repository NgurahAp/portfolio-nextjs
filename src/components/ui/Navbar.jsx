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
      <div className="flex flex-col justify-center items-center text-center px-12 h-full text-gray-900 gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.25em] text-gray-400"
        >
          Portfolio · 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-1"
        >
          <h1 className="text-4xl font-light tracking-tight leading-[1.15] text-gray-900">
            Full-Stack <span className="font-semibold italic">Developer</span>
          </h1>
          <h1 className="text-4xl font-light tracking-tight leading-[1.15] text-gray-900">
            &amp; Mobile{" "}
            <span className="font-semibold italic">Developer.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-8 h-px bg-gray-300" />
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Building scalable web &amp; mobile experiences — from product design
            to production-ready code.
          </p>
        </motion.div>
      </div>
    ),
    ABOUT: (
      <div className="flex flex-col justify-center items-center text-center px-10 h-full text-gray-900">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl font-light leading-snug text-gray-900 max-w-md mb-6"
        >
          I'm Arya —{" "}
          <span className="font-semibold italic">
            solving real-world problems through thoughtful software.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-sm text-gray-500 leading-relaxed max-w-sm mb-8"
        >
          Specializing in modern web & mobile apps using{" "}
          <span className="text-gray-800 font-medium">Nuxt.js</span>,{" "}
          <span className="text-gray-800 font-medium">Nest.js</span>, and{" "}
          <span className="text-gray-800 font-medium">Flutter</span>.
        </motion.p>
      </div>
    ),

    WORKS: (
      <div className="flex flex-col justify-center items-center text-center px-10 h-full text-gray-900">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6"
        >
          Selected Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-2xl font-light leading-snug text-gray-900 max-w-sm mb-8"
        >
          Web &amp; mobile{" "}
          <span className="font-semibold italic">projects</span> built with
          modern tech.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="space-y-4"
        >
          {[
            { name: "Glams Corp", type: "Company Profile · Web" },
            { name: "The Aesthetics Skin", type: "Landing Page · Web" },
            { name: "Attendance Dreamaxtion", type: "Dashboard · Mobile" },
            { name: "LMS M-Knows", type: "Learning Platform · Web" },
          ].map((project, i) => (
            <motion.a
              key={project.name}
              href="#works"
              onClick={toggleMenu}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-20 justify-between group border-b border-gray-100 pb-3 hover:border-gray-400 transition-colors"
            >
              <span className="text-sm font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                {project.name}
              </span>
              <span className="text-xs text-gray-400">{project.type}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    ),
    SERVICE: (
      <div className="flex flex-col justify-center h-full text-gray-900 px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-gray-500 mb-2">
            Tech Stack.
          </h2>
          <p className="text-gray-600">Technologies & Tools I work with</p>
        </motion.div>

        <div className="space-y-4">
          <Marquee direction="right" className="overflow-y-hidden" speed={40}>
            <h1 className="text-4xl font-semibold text-gray-800 mb-1">
              Vue / Nuxt.js &nbsp;•&nbsp; React / Next.js &nbsp;•&nbsp; Node.js
              / Express &nbsp;•&nbsp; PHP / Laravel &nbsp;•&nbsp; Vue / Nuxt.js
              &nbsp;•&nbsp; React / Next.js &nbsp;•&nbsp; Node.js / Express
              &nbsp;•&nbsp; PHP / Laravel &nbsp;•&nbsp;
            </h1>
          </Marquee>
          <Marquee direction="left" className="overflow-y-hidden" speed={50}>
            <h1 className="text-4xl font-semibold text-gray-700 mb-1">
              Dart / Flutter &nbsp;•&nbsp; Go - Lang &nbsp;•&nbsp; PostgreSQL
              &nbsp;•&nbsp; MongoDB &nbsp;•&nbsp; MySQL &nbsp;•&nbsp; Dart /
              Flutter &nbsp;•&nbsp; Go - Lang &nbsp;•&nbsp; PostgreSQL
              &nbsp;•&nbsp; MongoDB &nbsp;•&nbsp; MySQL &nbsp;•&nbsp;
            </h1>
          </Marquee>
          <Marquee direction="right" className="overflow-y-hidden" speed={45}>
            <h1 className="text-4xl font-semibold text-gray-600">
              Firebase &nbsp;•&nbsp; Supabase &nbsp;•&nbsp; Redis &nbsp;•&nbsp;
              Docker &nbsp;•&nbsp; Git &nbsp;•&nbsp; Tailwind CSS &nbsp;•&nbsp;
              Firebase &nbsp;•&nbsp; Supabase &nbsp;•&nbsp; Redis &nbsp;•&nbsp;
              Docker &nbsp;•&nbsp; Git &nbsp;•&nbsp; Tailwind CSS &nbsp;•&nbsp;
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
      <div className="flex flex-col justify-center items-center text-center px-10 h-full text-gray-900">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6"
        >
          Experience Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl font-light leading-snug text-gray-900 max-w-lg mb-6"
        >
          A journey of building{" "}
          <span className="font-semibold italic">real-world products</span>{" "}
          across web & mobile platforms.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-sm text-gray-500 leading-relaxed max-w-md mb-10"
        >
          From internships to professional roles — crafting scalable
          applications, solving business problems, and delivering
          production-ready solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="space-y-4 w-full max-w-md"
        >
          {[
            { role: "Full Stack Developer", company: "Estetindo Global" },
            { role: "Full Stack Intern", company: "Dreamaxtion" },
            { role: "Mobile Developer", company: "DB Klik" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-100 pb-3"
            >
              <span className="text-sm text-gray-800">{item.role}</span>
              <span className="text-xs text-gray-400">{item.company}</span>
            </div>
          ))}
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
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Projects Completed
          </h3>
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
              <div className="text-2xl font-semibold text-gray-900">
                Web Apps
              </div>
              <div className="text-sm text-gray-500">Full Stack</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">
                Mobile Apps
              </div>
              <div className="text-sm text-gray-500">Cross Platform</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
    CONTACT: (
      <div className="flex flex-col justify-center pl-20 h-full text-gray-900">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center group cursor-pointer py-5"
          >
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
                  transition: { duration: 0.5, ease: "easeInOut" },
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
        <div className="text-2xl font-semibold text-gray-900"></div>

        <button
          className="text-gray-900 hover:text-gray-600 cursor-pointer transition-colors"
          onClick={toggleMenu}
        >
          <Menu size={32} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-white p-14 flex flex-col justify-between"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-10 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>

              <div className="flex pt-5 h-full">
                {/* ── Menu list ── */}
                <div className="w-1/4 flex flex-col justify-center">
                  <ul
                    className="flex flex-col space-y-5"
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {[
                      { label: "HOME", href: "/", key: "HOME", delay: 0.3 },
                      {
                        label: "ABOUT",
                        href: "#about",
                        key: "ABOUT",
                        delay: 0.35,
                      },
                      {
                        label: "WORKS",
                        href: "#works",
                        key: "WORKS",
                        delay: 0.4,
                      },
                      {
                        label: "EXPERIENCE",
                        href: "#experience",
                        key: "EXPERIENCE",
                        delay: 0.45,
                      },
                      {
                        label: "SERVICE",
                        href: "#service",
                        key: "SERVICE",
                        delay: 0.5,
                      },
                    ].map((item) => (
                      <motion.li
                        key={item.key}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.4 }}
                        onMouseEnter={() => setActiveMenu(item.key)}
                        className="group flex items-center gap-4"
                      >
                        {/* active indicator line */}
                        <span
                          className={`h-px transition-all duration-300 ${
                            activeMenu === item.key
                              ? "w-6 bg-gray-900"
                              : "w-3 bg-gray-300 group-hover:w-5 group-hover:bg-gray-500"
                          }`}
                        />
                        <a
                          href={item.href}
                          onClick={toggleMenu}
                          className={`text-xs font-light tracking-[0.3em] uppercase transition-colors duration-200 ${
                            activeMenu === item.key
                              ? "text-gray-900"
                              : "text-gray-400 group-hover:text-gray-700"
                          }`}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* ── Content panel ── */}
                <motion.div className="w-3/4 h-full rounded-xl">
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

              {/* ── Footer ── */}
              <div>
                <motion.hr
                  className="w-full border-t border-gray-200 my-4"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />
                <div className="flex items-baseline justify-between">
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xs font-light tracking-[0.3em] uppercase text-gray-400"
                  >
                    Ngurah Arya Pratama
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="text-xs font-light tracking-[0.2em] text-gray-300"
                  >
                    Portfolio · 2026
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
