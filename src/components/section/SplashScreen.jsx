"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ children, enabled = true, onComplete }) => {
  const [showSplash, setShowSplash] = useState(enabled);
  const [currentIndex, setCurrentIndex] = useState(0);

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Halo", lang: "Indonesia" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "你好", lang: "Chinese" },
    { text: "Bonjour", lang: "French" },
    { text: "Hola", lang: "Spanish" },
    { text: "Ciao", lang: "Italian" },
    { text: "안녕하세요", lang: "Korean" },
  ];

  useEffect(() => {
    if (!enabled) {
      setShowSplash(false);
      return undefined;
    }

    setShowSplash(true);
    setCurrentIndex(0);

    // Ganti text setiap 300ms
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 300);

    // Auto hide splash screen setelah semua greeting muncul
    const timer = setTimeout(() => {
      onComplete?.();
      setShowSplash(false);
    }, greetings.length * 300 + 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [enabled, onComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-900 overflow-hidden"
          >
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 z-0 bg-[radial-gradient(#262626_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Main Greeting Text */}
            <div className="relative z-10 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-white"
                >
                  {greetings[currentIndex].text}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
            >
              {greetings.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-neutral-700"
                  animate={{
                    backgroundColor:
                      index <= currentIndex ? "#ffffff" : "#404040",
                    scale: index === currentIndex ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - hanya muncul setelah splash screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showSplash ? 0 : 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SplashScreen;
