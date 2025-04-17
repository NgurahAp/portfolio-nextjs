"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);

  return (
    <div className="h-[120vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto">
      <Header />

      {/* Static tilted container with fixed perspective and rotation */}
      <div
        className="[perspective:1000px] [transform-style:preserve-3d]"
        style={{
          opacity: 0.2, // Keep the initial opacity from your original code
        }}
      >
        <div
          className="flex flex-row-reverse space-x-reverse space-x-10 mb-5"
          style={{
            transform: "rotateX(8deg) rotateZ(20deg) translateY(-700px)",
          }}
        >
          {firstRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div
          className="flex flex-row-reverse space-x-reverse mb-5 space-x-10"
          style={{
            transform: "rotateX(8deg) rotateZ(20deg) translateY(-700px)",
          }}
        >
          {secondRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div
          className="flex flex-row-reverse space-x-reverse space-x-10"
          style={{
            transform: "rotateX(8deg) rotateZ(20deg) translateY(-700px)",
          }}
        >
          {thirdRow.map((product) => (
            <ProductCard product={product} key={product.title} />
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
          src={product.thumbnail}
          fill
          className="object-cover object-center absolute"
          alt={product.title}
        />
      </Link>
    </div>
  );
};
