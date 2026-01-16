"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "../ui/SplitText";

const SplashScreen = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Auto hide splash screen setelah 2.5 detik
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <SplitText
              text="Hello You!"
              className="text-2xl font-semibold text-center text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
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
