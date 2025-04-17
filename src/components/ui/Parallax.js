"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);

  // State for tracking animation positions
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);

  // Calculate the total width of a row (all cards + spacing)
  const cardWidth = 48 * 16; // 48rem in pixels
  const cardSpacing = 10 * 16; // 10rem spacing in pixels
  const totalRowWidth = (cardWidth + cardSpacing) * 3; // 3 cards per row

  // Animation effect
  useEffect(() => {
    const animateRows = () => {
      // Update positions with looping logic
      setPosition1((prev) => {
        // Move left and loop when needed
        const newPos = prev - 0.5;
        // When moved too far left, reset to create loop effect
        return newPos < -totalRowWidth ? 0 : newPos;
      });

      setPosition2((prev) => {
        // Move right and loop when needed
        const newPos = prev + 0.4;
        // When moved too far right, reset to create loop effect
        return newPos > totalRowWidth ? 0 : newPos;
      });

      setPosition3((prev) => {
        // Move left faster and loop when needed
        const newPos = prev - 0.6;
        // When moved too far left, reset to create loop effect
        return newPos < -totalRowWidth ? 0 : newPos;
      });

      requestAnimationFrame(animateRows);
    };

    const animationId = requestAnimationFrame(animateRows);

    // Cleanup function
    return () => cancelAnimationFrame(animationId);
  }, [totalRowWidth]);

  return (
    <div className="h-[120vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto">
      <Header />

      {/* Static tilted container with fixed perspective and rotation */}
      <div
        className="[perspective:1000px] [transform-style:preserve-3d]"
        style={{
          opacity: 0.2,
        }}
      >
        {/* First row - duplicated for infinite loop */}
        <div
          className="flex flex-row-reverse space-x-reverse space-x-10 mb-5"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position1}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Original products */}
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={`original-1-${product.title}`}
            />
          ))}
          {/* Duplicated products for seamless loop */}
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={`duplicate-1-${product.title}`}
            />
          ))}
          {/* Second duplicate for wider coverage */}
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={`duplicate-1b-${product.title}`}
            />
          ))}
        </div>

        {/* Second row - duplicated for infinite loop */}
        <div
          className="flex flex-row-reverse space-x-reverse mb-5 space-x-10"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position2}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Original products */}
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              key={`original-2-${product.title}`}
            />
          ))}
          {/* Duplicated products for seamless loop */}
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              key={`duplicate-2-${product.title}`}
            />
          ))}
          {/* Second duplicate for wider coverage */}
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              key={`duplicate-2b-${product.title}`}
            />
          ))}
        </div>

        {/* Third row - duplicated for infinite loop */}
        <div
          className="flex flex-row-reverse space-x-reverse space-x-10"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position3}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Original products */}
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              key={`original-3-${product.title}`}
            />
          ))}
          {/* Duplicated products for seamless loop */}
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              key={`duplicate-3-${product.title}`}
            />
          ))}
          {/* Second duplicate for wider coverage */}
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              key={`duplicate-3b-${product.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full z-50 left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        My Development <br /> Works
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        A showcase of my web and mobile development projects, built with modern
        technologies and a focus on seamless user experience.
      </p>
    </div>
  );
};

export const ProductCard = ({ product }) => {
  return (
    <div
      key={product.title}
      className="group/product h-[24rem] w-[48rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block h-full w-full">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          fill
          className="object-cover object-center absolute"
          alt={product.title}
        />
      </Link>
    </div>
  );
};
