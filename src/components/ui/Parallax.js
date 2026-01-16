"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export const HeroParallax = ({ products }) => {
  // Custom slicing for 4 rows
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const fourthRow = products.slice(12, 16);

  // Ukuran card lebih kecil untuk 4 baris
  const cardWidth = 22 * 16; // 22rem
  const cardSpacing = 5 * 4; // 20px
  const singleCardWithSpacing = cardWidth + cardSpacing;
  const rowWidth = singleCardWithSpacing * firstRow.length;

  const [position1, setPosition1] = useState(-singleCardWithSpacing / 2);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(-singleCardWithSpacing / 2);
  const [position4, setPosition4] = useState(0);

  useEffect(() => {
    const animateRows = () => {
      setPosition1((prev) => (prev - 0.2 < -rowWidth ? 0 : prev - 0.2));
      setPosition2((prev) => (prev + 0.2 > rowWidth ? 0 : prev + 0.2));
      setPosition3((prev) => (prev - 0.2 < -rowWidth ? 0 : prev - 0.2));
      setPosition4((prev) => (prev + 0.2 > rowWidth ? 0 : prev + 0.2));
      requestAnimationFrame(animateRows);
    };

    const animationId = requestAnimationFrame(animateRows);
    return () => cancelAnimationFrame(animationId);
  }, [rowWidth]);

  return (
    <div id="projects" className="min-h-[80vh] lg:h-[80vh] overflow-hidden antialiased relative flex flex-col bg-gray-50">
      {/* White diagonal overlay - hanya tampil di desktop */}
      <div
        className="hidden lg:block absolute inset-0 bg-white z-40 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 55% 0, 42% 100%, 0% 100%)",
          transform: "skew(-8deg, 0deg)",
          transformOrigin: "left center",
          marginLeft: "-5%",
        }}
      />

      {/* Content container - full width di mobile/tablet */}
      <div className="relative z-50 container mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <BsStars className="text-gray-400 text-xs w-4 h-4" />
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
            Portfolio
          </span>
        </motion.div>

        {/* Section Title & Description - full width di mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-full lg:max-w-xl mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            My Development Works
          </h2>
          <p className="text-md text-gray-800 font-light leading-relaxed mb-8 lg:mr-32">
            A showcase of my web and mobile development projects, built with
            modern technologies and a focus on seamless user experience.
          </p>
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href={"/playground"}
              className="inline-block px-8 py-3 text-gray-900 text-sm font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 rounded-none bg-white/90 backdrop-blur-sm"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Parallax Cards Container - hidden di mobile/tablet, tampil di desktop */}
      <div className="hidden lg:block [perspective:1200px] [transform-style:preserve-3d] relative z-30">
        {/* First row */}
        <div
          className="flex flex-row space-x-3 mb-1"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-800px) translateX(${position1}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {firstRow.map((product, index) => (
            <ProductCard product={product} key={`row1-${index}`} />
          ))}
          {firstRow.map((product, index) => (
            <ProductCard product={product} key={`row1-dup-${index}`} />
          ))}
          {firstRow.map((product, index) => (
            <ProductCard product={product} key={`row1-dup2-${index}`} />
          ))}
        </div>

        {/* Second row */}
        <div
          className="flex flex-row-reverse space-x-reverse space-x-3 mb-1"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-800px) translateX(${position2}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {secondRow.map((product, index) => (
            <ProductCard product={product} key={`row2-${index}`} />
          ))}
          {secondRow.map((product, index) => (
            <ProductCard product={product} key={`row2-dup-${index}`} />
          ))}
          {secondRow.map((product, index) => (
            <ProductCard product={product} key={`row2-dup2-${index}`} />
          ))}
        </div>

        {/* Third row */}
        <div
          className="flex flex-row space-x-3 mb-1"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-800px) translateX(${position3}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {thirdRow.map((product, index) => (
            <ProductCard product={product} key={`row3-${index}`} />
          ))}
          {thirdRow.map((product, index) => (
            <ProductCard product={product} key={`row3-dup-${index}`} />
          ))}
          {thirdRow.map((product, index) => (
            <ProductCard product={product} key={`row3-dup2-${index}`} />
          ))}
        </div>

        {/* Fourth row */}
        <div
          className="flex flex-row-reverse space-x-reverse space-x-3"
          style={{
            transform: `rotateX(8deg) rotateZ(20deg) translateY(-800px) translateX(${position4}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {fourthRow.map((product, index) => (
            <ProductCard product={product} key={`row4-${index}`} />
          ))}
          {fourthRow.map((product, index) => (
            <ProductCard product={product} key={`row4-dup-${index}`} />
          ))}
          {fourthRow.map((product, index) => (
            <ProductCard product={product} key={`row4-dup2-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product }) => {
  return (
    // Card lebih kecil: 22rem x 13rem
    <div className="group/product h-[14rem] w-[28rem] relative flex-shrink-0">
      <div className="block h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl border border-gray-200/50">
          {/* Card background */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Image */}
          <div className="relative h-full w-full">
            <div className="h-full w-full relative overflow-hidden rounded-md shadow-lg">
              <Image
                src={product.thumbnail || "/api/placeholder/768/384"}
                fill
                quality={100}
                className="object-cover object-center transition-transform duration-500 group-hover/product:scale-105"
                alt={product.title}
                sizes="28rem"
              />
            </div>
          </div>

          {/* Project title overlay on hover */}
          <div className="absolute bottom-2 left-2 right-2 transform translate-y-2 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-md p-2 shadow-lg border border-gray-200/50">
              <h3 className="text-xs font-medium text-gray-900 truncate">
                {product.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
