"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({ children, className }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  // Modified beams to have diagonal trajectory (top-left to bottom-right)
  const beams = [
    {
      initialX: -50,
      initialY: -200,
      translateX: 1400,
      translateY: 1400,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
      rotate: -45, // Add rotation to match diagonal direction
    },
    {
      initialX: 200,
      initialY: -150,
      translateX: 1900,
      translateY: 1600,
      duration: 5,
      repeatDelay: 3,
      delay: 4,
      rotate: -45,
    },
    {
      initialX: -100,
      initialY: -80,
      translateX: 1400,
      translateY: 1500,
      duration: 4,
      repeatDelay: 7,
      className: "h-6",
      rotate: -45,
    },
    {
      initialX: 50,
      initialY: -200,
      translateX: 2000,
      translateY: 1700,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
      rotate: -45,
    },
    {
      initialX: 400,
      initialY: -120,
      translateX: 2500,
      translateY: 1800,
      duration: 11,
      repeatDelay: 2,
      className: "h-10",
      rotate: -45,
    },
    {
      initialX: 600,
      initialY: -180,
      translateX: 2900,
      translateY: 1600,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
      rotate: -45,
    },
    {
      initialX: 800,
      initialY: -140,
      translateX: 3000,
      translateY: 1700,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
      rotate: -45,
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-screen  bg-neutral-950  relative  w-full justify-end overflow-hidden",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
      detected: false,
      coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !cycleCollisionDetected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();

          if (beamRect.bottom >= containerRect.top) {
            const relativeX =
              beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = beamRect.bottom - parentRect.top;

            setCollision({
              detected: true,
              coordinates: {
                x: relativeX,
                y: relativeY,
              },
            });
            setCycleCollisionDetected(true);
          }
        }
      };

      const animationInterval = setInterval(checkCollision, 50);

      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 2000);

        setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1);
        }, 2000);
      }
    }, [collision]);

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: beamOptions.initialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          variants={{
            animate: {
              translateY: beamOptions.translateY || "1800px",
              translateX: beamOptions.translateX || "0px",
              rotate: beamOptions.rotate || 0,
            },
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          className={cn(
            // Modified to create a diagonal meteor effect
            "absolute left-0 top-20 m-auto w-px rounded-full bg-gradient-to-br from-green-400 via-green-500 to-transparent",
            beamOptions.className || "h-14"
          )}
          style={{
            transform: `rotate(${beamOptions.rotate || 0}deg)`,
            // Add a tailEffect for meteors
            boxShadow: "0 0 8px 1px rgba(139, 92, 246, 0.5)",
          }}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              className=""
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }) => {
  // Modified to create a diagonal explosion pattern
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    // Modified to create a more diagonal explosion pattern
    directionX: Math.floor(Math.random() * 100 - 30), // More right-biased
    directionY: Math.floor(Math.random() * -70 - 10), // Upward but varied
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm transform rotate-45"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-br from-green-400 to-green-600"
        />
      ))}
    </div>
  );
};
