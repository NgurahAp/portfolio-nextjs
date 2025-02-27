"use client";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeams";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0" />

      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-20 transform skew-y-[45deg]">
        {/* Garis horizontal */}
        <div className="absolute h-[1px] w-full top-[-20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="absolute h-[1px] w-full top-[50%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="absolute h-[1px] w-full top-[110%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="absolute h-[1px] w-full top-[170%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 md:px-12 pt-28 pb-20 flex flex-col md:flex-row items-center">
        {/* Left column - Text content */}
        <motion.div
          className="flex flex-col md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <h2 className="font-mono text-emerald-500 text-sm font-medium tracking-wider mb-2">
              WELCOME TO MY PORTFOLIO
            </h2>
            <div className="h-px w-24 bg-emerald-500 mb-2" />
          </div>

          <h1 className="font-sans text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ngurah Arya <span className="text-emerald-400">Pratama</span>
          </h1>

          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-8 bg-gray-600" />
            <h2 className="font-mono text-sm md:text-base text-gray-400 font-medium">
              Fullstack Developer | Mobile Developer
            </h2>
          </div>

          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mb-8">
            <span className="text-white font-medium">Hi there! </span>
            <span className="inline-block animate-wave origin-bottom-right">
              👋
            </span>{" "}
            My name is Arya, a passionate developer crafting digital experiences
            that matter. As a System Information student at Universitas BSI, I
            blend creativity with technical expertise to build innovative
            solutions for web and mobile platforms.
          </p>

          <p className="text-emerald-400 font-medium mb-8">
            "Building tomorrow's digital solutions with clean code and creative
            thinking."
          </p>

          <div className="flex flex-row gap-4">
            <motion.button
              className="font-mono px-6 py-3 rounded-none bg-emerald-600 text-white text-sm font-medium transition-all hover:bg-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              <span className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </motion.button>

            <motion.button
              className="font-mono px-6 py-3 rounded-none border border-emerald-500/30 text-emerald-400 text-sm font-medium transition-all hover:border-emerald-500 hover:bg-emerald-500/10 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT ME
            </motion.button>
          </div>
        </motion.div>

        {/* Right column - Visual element */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-emerald-500/20 relative flex items-center justify-center">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-500"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-500"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-500"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-500"></div>

              <div className="text-center p-8">
                <div className="text-emerald-500 text-6xl mb-4">01</div>
                <div className="text-white font-bold text-2xl mb-2">
                  Years Experience
                </div>
                <div className="text-gray-400 text-sm">
                  Building beautiful, functional, and scalable applications
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 w-40 h-40 border-2 border-emerald-500/20 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center p-4">
                <div className="text-emerald-500 text-3xl mb-2">10+</div>
                <div className="text-white font-bold text-sm">Projects</div>
                <div className="text-gray-400 text-xs">Completed</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-emerald-500/20 flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <div className="text-center p-4">
                <div className="text-emerald-500 text-3xl mb-2">5+</div>
                <div className="text-white font-bold text-sm">Technologies</div>
                <div className="text-gray-400 text-xs">Mastered</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Social links */}
      <div className="absolute bottom-10 left-10 flex flex-col space-y-4">
        <motion.div
          className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-500 hover:border-emerald-500 hover:text-emerald-500 transition-colors cursor-pointer"
          whileHover={{ scale: 1.2, borderColor: "#10b981", color: "#10b981" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </motion.div>
        <motion.div
          className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-500 hover:border-emerald-500 hover:text-emerald-500 transition-colors cursor-pointer"
          whileHover={{ scale: 1.2, borderColor: "#10b981", color: "#10b981" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </motion.div>
        <motion.div
          className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-500 hover:border-emerald-500 hover:text-emerald-500 transition-colors cursor-pointer"
          whileHover={{ scale: 1.2, borderColor: "#10b981", color: "#10b981" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10">
        <motion.div
          className="text-emerald-500 font-mono text-sm"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL DOWN
          <div className="w-5 h-5 mx-auto mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
