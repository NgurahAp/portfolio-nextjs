"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  // Custom slicing for rows
  const firstRow = products.slice(0, 10);
  const secondRow = [...products.slice(3), ...products.slice(0, 3)];
  const thirdRow = [...products.slice(6), ...products.slice(0, 6)];

  const cardWidth = 48 * 16;
  const cardSpacing = 10 * 4;
  const singleCardWithSpacing = cardWidth + cardSpacing;
  const rowWidth = singleCardWithSpacing * firstRow.length;

  const [position1, setPosition1] = useState(-singleCardWithSpacing / 2);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(-singleCardWithSpacing / 2);

  useEffect(() => {
    const animateRows = () => {
      setPosition1((prev) => (prev - 0.5 < -rowWidth ? 0 : prev - 0.5));
      setPosition2((prev) => (prev + 0.4 > rowWidth ? 0 : prev + 0.4));
      setPosition3((prev) => (prev - 0.6 < -rowWidth ? 0 : prev - 0.6));
      requestAnimationFrame(animateRows);
    };

    const animationId = requestAnimationFrame(animateRows);
    return () => cancelAnimationFrame(animationId);
  }, [rowWidth]);

  return (
    <div className="h-[100vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto">
      {/* Overlay gelap biar teks lebih kontras */}
      <div
        className="absolute inset-0 bg-black/20 w-[60%] z-40 pointer-events-none"
      ></div>

      {/* Header dengan text shadow */}
      <Header />

      <div className="[perspective:1000px] [transform-style:preserve-3d]">
        {/* First row */}
        <div
          className="flex flex-row space-x-10 mb-2"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position1}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {firstRow.map((product, index) => (
            <ProductCard product={product} key={`row1-${index}`} />
          ))}
          {firstRow.map((product, index) => (
            <ProductCard product={product} key={`row1-dup-${index}`} />
          ))}
        </div>

        {/* Second row */}
        <div
          className="flex flex-row-reverse space-x-reverse space-x-10 mb-5"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position2}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {secondRow.map((product, index) => (
            <ProductCard product={product} key={`row2-${index}`} />
          ))}
          {secondRow.map((product, index) => (
            <ProductCard product={product} key={`row2-dup-${index}`} />
          ))}
        </div>

        {/* Third row */}
        <div
          className="flex flex-row space-x-10"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-700px) translateX(${position3}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {thirdRow.map((product, index) => (
            <ProductCard product={product} key={`row3-${index}`} />
          ))}
          {thirdRow.map((product, index) => (
            <ProductCard product={product} key={`row3-dup-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full z-50 left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
        My Development <br /> Works
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)]">
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
