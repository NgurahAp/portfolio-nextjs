import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-white">
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="max-w-xl pt-12">
            {/* Introduction Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-4 mb-4 py-2"
            >
              <BsStars />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Introduction
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
            >
              Ngurah Arya Pratama
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md text-gray-800 mb-8 font-light leading-relaxed"
            >
              System Information student at Universitas BSI with a passion for
              creating beautiful, functional mobile and web applications that
              solve real problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
                Download CV
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right Column - Status & Tech Stack */}
          <div className="flex flex-col justify-center space-y-12 pt-14">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-right"
            >
              <div className="inline-flex items-center gap-2 py-1 rounded-full mb-1">
                <div className="w-2 h-2 rounded-full bg-gray-700 animate-pulse" />
                <span className="text-xs text-gray-800 font-medium">
                  Currently building
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Innovative software solutions
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-right"
            >
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
                Tech Stack
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Vue / Nuxt.js</div>
                <div className="text-sm text-gray-600">React / Next.js</div>
                <div className="text-sm text-gray-600">Node.js / Express</div>
                <div className="text-sm text-gray-600">Dart / Flutter</div>
                <div className="text-sm text-gray-600">PHP / Laravel</div>
                <div className="text-sm text-gray-600">Go - Lang</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left - Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-light text-gray-900">1+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">BSI</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  University
                </div>
              </div>
            </div>

            {/* Middle - Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Right - Location */}
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Based in
              </div>
              <div className="text-sm text-gray-600">Indonesia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
