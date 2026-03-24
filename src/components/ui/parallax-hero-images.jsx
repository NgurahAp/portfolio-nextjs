"use client";
import React, { useEffect, useMemo, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const positionStyles = {
  "top-left": { top: "5%", left: "8%" },
  "top-center": { top: "3%", left: "42%" },
  "top-right": { top: "7%", right: "6%" },
  "mid-left": { top: "42%", left: "1%" },
  "mid-right": { top: "38%", right: "2%" },
  "bottom-left": { top: "72%", left: "10%" },
  "bottom-center": { top: "75%", left: "40%" },
  "bottom-right": { top: "70%", right: "8%" },
};

const positionOrder = [
  "top-left",
  "top-right",
  "mid-left",
  "mid-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
];

const rotations = [-8, 6, -4, 10, 5, -7, -3, 2];

const depthValuesByVariant = {
  default: [0.3, 0.35, 0.9, 0.85, 0.4, 0.45, 0.25, 0.2],
  "edge-focus": [0.85, 0.9, 0.3, 0.35, 0.8, 0.85, 0.4, 0.45],
};

const SPRING_CONFIG = { damping: 25, stiffness: 120 };

export const ParallaxHeroImages = ({
  images = [],
  className,
  imageClassName,
  variant = "default",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, SPRING_CONFIG);
  const smoothMouseY = useSpring(mouseY, SPRING_CONFIG);

  const positions = useMemo(() => {
    const limitedImages = images.slice(0, 8);
    const depthValues = depthValuesByVariant[variant];

    return limitedImages.map((src, index) => ({
      src,
      position: positionOrder[index],
      depth: depthValues[index],
      delay: index * 0.12,
      rotation: rotations[index],
    }));
  }, [images, variant]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {positions.map((pos, index) => (
        <ParallaxImage
          key={`${pos.src}-${index}`}
          src={pos.src}
          position={pos.position}
          depth={pos.depth}
          delay={pos.delay}
          rotation={pos.rotation}
          imageClassName={imageClassName}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
    </div>
  );
};

const ParallaxImage = memo(function ParallaxImage({
  src,
  position,
  depth,
  delay,
  rotation,
  imageClassName,
  smoothMouseX,
  smoothMouseY,
}) {
  const maxOffset = 40;

  const translateX = useTransform(
    smoothMouseX,
    [-1, 1],
    [-maxOffset * depth, maxOffset * depth],
  );

  const translateY = useTransform(
    smoothMouseY,
    [-1, 1],
    [-maxOffset * depth, maxOffset * depth],
  );

  const posStyle = positionStyles[position];

  return (
    <motion.div
      className="absolute"
      style={{
        top: posStyle.top,
        left: posStyle.left,
        right: posStyle.right,
        x: translateX,
        y: translateY,
        rotate: rotation,
        zIndex: Math.round(depth * 10),
        scale: 1 + depth * 0.08, // ✨ depth effect biar lebih hidup
      }}
      initial={{ opacity: 0, filter: "blur(16px)", scale: 0.85 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className={cn(
          // 🔥 WIDTH DIPANJANGIN, HEIGHT TETAP
          "h-[60px] w-[120px] rounded-xl object-cover object-center shadow-md ring-1 ring-black/10 sm:h-[90px] sm:w-[180px] md:h-[120px] md:w-[240px] dark:ring-white/10",
          imageClassName,
        )}
      />
    </motion.div>
  );
});
