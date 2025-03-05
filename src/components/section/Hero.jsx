"use client";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeams";
import { BsStars } from "react-icons/bs";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0 opacity-30" />

      {/* Diagonal lines - preserved as requested */}
      <div className="absolute inset-0 opacity-20 transform skew-y-[45deg]">
        <div className="absolute h-[1px] w-full top-[-20%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute h-[1px] w-full top-[50%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute h-[30rem] w-[80%] top-[52%] bg-gradient-to-l from-transparent via-gray-400 to-transparent" />
        <div className="absolute h-[1px] w-full top-[120%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute h-[1px] w-full top-[170%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>

      <main className="relative z-10 container mx-auto px-6 md:px-12 pt-48 pb-20">
        <div className="flex flex-col max-w-5xl">
          {/* Introduction section with subtle animation */}
          <div className="flex items-center gap-2 mb-4">
            <div className="text-amber-300 text-lg">
              <BsStars />
            </div>
            <h3 className="text-amber-300 uppercase text-lg font-medium tracking-wider">
              INTRODUCTION
            </h3>
          </div>

          {/* Name and title section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ngurah Arya <span className="text-white">Pratama</span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-gray-500" />
              <h2 className="font-heading text-lg md:text-xl text-gray-300 font-medium tracking-wide">
                Fullstack Developer | Mobile Developer
              </h2>
            </div>
          </motion.div>

          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              <span className="text-white font-medium">Hi there! </span>
              <span className="inline-block animate-wave origin-bottom-right">
                👋
              </span>{" "}
              My name is Arya, Im a System Information student at Universitas
              BSI with a strong interest in mobile and web application
              development.
            </p>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="font-heading px-8 py-3 rounded-md bg-white text-black font-medium transition-transform hover:scale-105">
              DOWNLOAD CV
            </button>
            <button className="font-heading px-8 py-3 rounded-md border border-gray-600 text-white font-medium transition-all hover:bg-white/5">
              CONTACT ME
            </button>
          </motion.div>
        </div>
      </main>
      <div className="absolute bottom-10 right-10 flex space-x-5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#ffb84d] transition-colors cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#ffb84d] transition-colors cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
