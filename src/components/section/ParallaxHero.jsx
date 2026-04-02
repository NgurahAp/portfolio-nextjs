"use client";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";

const images = [
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1768562387/home_ed9vul.png",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1768562844/lxp-landing_zbzsdf.jpg",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1768562977/review_uw3au8.png",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1768563951/Attendances_ix67rs.png",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1774386847/Apply_On_Boarding_zpah4s.png",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1773548857/hero_lrb8wu.png",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1773548855/Screenshot_2026-03-14_000408_rpwxkp.png",
  "https://res.cloudinary.com/do5hgkrgi/image/upload/v1768563884/bersihbersama_ds4xyb.jpg",
];

export function ParallaxHeroImagesDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <ParallaxHeroImages images={images} />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 text-center">
        {/* Greeting badge */}
        {/* Greeting */}
        <p className="text-base font-medium text-neutral-600 dark:text-neutral-300">
          Hey — Arya here 👋
        </p>

        {/* Main headline */}
        <h1 className="text-5xl font-light tracking-tight text-neutral-800 drop-shadow-[0_0_24px_rgba(255,255,255,0.9)] md:text-7xl dark:text-neutral-100 dark:drop-shadow-[0_0_24px_rgba(0,0,0,0.9)]">
          Full-Stack <span className="font-semibold italic">Developer</span>
          <br />
          &amp; Mobile <span className="font-semibold italic">Developer.</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-sm text-sm leading-relaxed text-neutral-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
          Building scalable web & mobile experiences — from product design to
          production-ready code.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href="#works"
            className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View Works ↗
          </a>
          <a
            href="#about"
            className="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}
