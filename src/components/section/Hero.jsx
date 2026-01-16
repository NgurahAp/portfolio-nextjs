import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      {/* 🔹 Dotted Background */}
      <motion.div
        className="absolute inset-0 z-0
        bg-[radial-gradient(#d1d5db_1px,transparent_1px)]
        bg-[size:20px_20px]"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🔹 Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="max-w-xl pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-4 mb-4 py-2"
            >
              <BsStars className="text-gray-400 text-xs" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                Introduction
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
            >
              Ngurah Arya Pratama
            </motion.h3>

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

          {/* Right Column */}
          <div className="flex flex-col justify-center space-y-12 pt-14">
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
                {[
                  "Vue / Nuxt.js",
                  "React / Next.js",
                  "Node.js / Express",
                  "PHP / Laravel",
                  "Dart / Flutter",
                  "Go - Lang",
                ].map((tech) => (
                  <div key={tech} className="text-sm text-gray-600">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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

            <div className="flex gap-3">
              <FaGithub />
              <FaLinkedin />
              <FaInstagram />
            </div>

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
