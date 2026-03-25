"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { transitionStore } from "@/lib/transitionStore";

// ─────────────────────────────────────────────
// Taruh <TransitionOverlay /> di app/layout.js
// di luar slot {children}
// ─────────────────────────────────────────────
export function TransitionOverlay() {
  const [s, setS] = useState(transitionStore.getState());

  useEffect(() => transitionStore.subscribe(setS), []);

  return (
    <AnimatePresence mode="wait">
      {s.isActive && (
        <motion.div
          key="transition-overlay"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-50 overflow-hidden"
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
            className="relative z-10 text-center px-6 text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900"
          >
            {s.title}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// Pakai hook ini di FlowingMenu
// ─────────────────────────────────────────────
export function usePageTransition() {
  const router = useRouter();
  const busyRef = useRef(false);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const navigateWithTransition = async (href, title) => {
    if (!href || busyRef.current) return;
    busyRef.current = true;

    // 1. Tampilkan overlay — slide naik dari bawah
    transitionStore.setState({ isActive: true, title });

    // 2. Tunggu overlay menutupi layar (animasi 750ms + buffer 150ms)
    await sleep(900);

    // 3. Navigasi di BALIK overlay — halaman lama sudah tersembunyi
    router.push(href);

    // 4. Beri waktu halaman baru render di belakang overlay
    await sleep(400);

    // 5. Sembunyikan overlay — slide naik keluar, reveal halaman baru
    transitionStore.setState({ isActive: false });

    // 6. Tunggu exit animation selesai sebelum bisa trigger lagi
    await sleep(800);
    busyRef.current = false;
  };

  return { navigateWithTransition };
}
