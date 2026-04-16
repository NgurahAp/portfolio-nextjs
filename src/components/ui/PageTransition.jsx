"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { transitionStore } from "@/lib/transitionStore";

const normalizePath = (value) => {
  if (!value) return "/";
  const [path] = value.split(/[?#]/);
  if (!path) return "/";
  return path !== "/" ? path.replace(/\/+$/, "") || "/" : "/";
};

// di luar slot {children}
export function TransitionOverlay() {
    const router = useRouter();
  const pathname = usePathname();
  const [s, setS] = useState(transitionStore.getState());

  useEffect(() => transitionStore.subscribe(setS), []);

  useEffect(() => {
    if (s.phase !== "navigating" || !s.pendingHref) return;

    if (normalizePath(pathname) === normalizePath(s.pendingHref)) {
      transitionStore.setState({
        isActive: false,
        phase: "exiting",
      });
    }
  }, [pathname, s.phase, s.pendingHref]);

  const handleAnimationComplete = () => {
    if (s.phase === "entering" && s.pendingHref) {
      transitionStore.setState({ phase: "navigating" });
      router.push(s.pendingHref);
      return;
    }

    if (s.phase === "exiting") {
      transitionStore.setState({
        phase: "idle",
        title: "",
        pendingHref: null,
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {s.isActive && (
        <motion.div
          key="transition-overlay"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={handleAnimationComplete}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-neutral-50"
        >
          {/* Dot grid background */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(#3f3f3f_1px,transparent_1px)] bg-[size:28px_28px]"
            animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Project title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="relative z-10 px-6 text-center text-4xl font-bold text-neutral-900 md:text-6xl lg:text-7xl"
          >
            {s.title}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Pakai hook ini di FlowingMenu
export function usePageTransition() {
  const navigateWithTransition = (href, title) => {
    const current = transitionStore.getState();
    if (!href || current.isActive) return;

    transitionStore.setState({
      isActive: true,
      title,
      pendingHref: href,
      phase: "entering",
    });
  };

  return { navigateWithTransition };
}
