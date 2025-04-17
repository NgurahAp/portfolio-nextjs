"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  // Custom slicing for rows
  // First row: Products from indices 0 to 9
  const firstRow = products.slice(0, 10);

  // Second row: Products from indices 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 (wrapping around)
  const secondRow = [
    ...products.slice(3), // From 3 to end
    ...products.slice(0, 3), // From 0 to 2
  ];

  // Third row: Products from indices 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 (wrapping around)
  const thirdRow = [
    ...products.slice(6), // From 6 to end
    ...products.slice(0, 6), // From 0 to 5
  ];

  // Calculate the total width of a row
  const cardWidth = 48 * 16; // 48rem in pixels
  const cardSpacing = 10 * 4; // space-x-10 is approximately 40px
  const singleCardWithSpacing = cardWidth + cardSpacing;
  const rowWidth = singleCardWithSpacing * firstRow.length; // Width based on number of cards

  // Set initial positions - offset rows 1 and 3 to eliminate the gap
  // For row 1 and 3, start with a negative position (shifted left)
  const [position1, setPosition1] = useState(-singleCardWithSpacing / 2); // Shift left by half a card
  const [position2, setPosition2] = useState(0); // Row 2 is fine as is
  const [position3, setPosition3] = useState(-singleCardWithSpacing / 2); // Slightly different offset for variety

  // Animation effect
  useEffect(() => {
    const animateRows = () => {
      // First row (moving left)
      setPosition1((prev) => {
        const newPos = prev - 0.5;
        // When the entire row has moved left by rowWidth, reset
        return newPos < -rowWidth ? 0 : newPos;
      });

      // Second row (moving right)
      setPosition2((prev) => {
        const newPos = prev + 0.4;
        // When the entire row has moved right by rowWidth, reset
        return newPos > rowWidth ? 0 : newPos;
      });

      // Third row (moving left faster)
      setPosition3((prev) => {
        const newPos = prev - 0.6;
        // When the entire row has moved left by rowWidth, reset
        return newPos < -rowWidth ? 0 : newPos;
      });

      requestAnimationFrame(animateRows);
    };

    const animationId = requestAnimationFrame(animateRows);

    // Cleanup function
    return () => cancelAnimationFrame(animationId);
  }, [rowWidth]);

  return (
    <div className="h-[100vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto">
      <Header />

      {/* Static tilted container with fixed perspective and rotation */}
      <div
        className="[perspective:1000px] [transform-style:preserve-3d]"
        style={{
          opacity: 0.2,
        }}
      >
        {/* First row - moving left */}
        <div
          className="flex flex-row space-x-10 mb-2"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position1}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Products from indices 0-9 */}
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              key={`row1-${product.title}-${index}`}
            />
          ))}
          {/* Duplicate for infinite scrolling */}
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              key={`row1-dup-${product.title}-${index}`}
            />
          ))}
        </div>

        {/* Second row - moving right */}
        <div
          className="flex flex-row-reverse space-x-reverse space-x-10 mb-5"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position2}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Products from indices 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 */}
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              key={`row2-${product.title}-${index}`}
            />
          ))}
          {/* Duplicate for infinite scrolling */}
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              key={`row2-dup-${product.title}-${index}`}
            />
          ))}
        </div>

        {/* Third row - moving left faster */}
        <div
          className="flex flex-row space-x-10"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position3}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Products from indices 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 */}
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              key={`row3-${product.title}-${index}`}
            />
          ))}
          {/* Duplicate for infinite scrolling */}
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              key={`row3-dup-${product.title}-${index}`}
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
    <div className="group/product h-[24rem] w-[48rem] relative flex-shrink-0">
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
