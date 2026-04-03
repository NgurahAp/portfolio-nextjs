import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { usePageTransition } from "./PageTransition";

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "#fff",
  bgColor = "#060010",
  marqueeBgColor = "#fff",
  marqueeTextColor = "#060010",
  borderColor = "#fff",
}) {
  const { navigateWithTransition } = usePageTransition();

  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={idx === 0}
            onNavigate={navigateWithTransition}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
  onNavigate,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);
  const isTouchRef = useRef(false);
  const tappedRef = useRef(false);

  const animationDefaults = { duration: 0.55, ease: "power4.inOut" };

  // Detect touch device
  useEffect(() => {
    isTouchRef.current = window.matchMedia("(hover: none)").matches;
  }, []);

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleClick = (e) => {
    // Mobile: tap-to-preview behaviour
    if (isTouchRef.current) {
      e.preventDefault();
      if (!tappedRef.current) {
        tappedRef.current = true;
        gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);
        gsap
          .timeline({ defaults: animationDefaults })
          .set(marqueeRef.current, { y: "101%" })
          .set(marqueeInnerRef.current, { y: "-101%" })
          .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
        // Auto-dismiss after 2s
        setTimeout(() => {
          gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: "101%" }, 0)
            .to(marqueeInnerRef.current, { y: "-101%" }, 0);
          tappedRef.current = false;
        }, 2000);
      }
      return;
    }

    // Desktop: navigate
    if (onNavigate) {
      onNavigate(link, text);
    }
  };

  // Calculate how many repetitions fill the viewport
  const calculateRepetitions = useCallback(() => {
    if (!marqueeInnerRef.current) return;
    const marqueeContent =
      marqueeInnerRef.current.querySelector(".marquee-part");
    if (!marqueeContent) return;
    const contentWidth = marqueeContent.offsetWidth;
    if (contentWidth === 0) return;
    const viewportWidth = window.innerWidth;
    const needed = Math.ceil(viewportWidth / contentWidth) + 3;
    setRepetitions(Math.max(4, needed));
  }, [text, image]);

  useEffect(() => {
    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [calculateRepetitions]);

  // Setup GSAP marquee scroll
  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent =
        marqueeInnerRef.current.querySelector(".marquee-part");
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) animationRef.current.kill();

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 60);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) animationRef.current.kill();
    };
  }, [text, image, repetitions, speed]);

  // Desktop hover in
  const handleMouseEnter = (ev) => {
    if (isTouchRef.current) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  // Desktop hover out
  const handleMouseLeave = (ev) => {
    if (isTouchRef.current) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <div
      className="flex-1 relative overflow-hidden text-center"
      ref={itemRef}
      style={{ borderTop: isFirst ? "none" : `1px solid ${borderColor}` }}
    >
      {/* Main link */}
      <a
        className="
          flex items-center justify-center h-full w-full
          relative cursor-pointer uppercase no-underline font-normal
          select-none
          text-[clamp(16px,3.5vw,28px)]
          min-h-[clamp(56px,12vw,90px)]
        "
        href={link}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>

      {/* Marquee overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div
          className="h-full flex items-center"
          style={{ width: "max-content" }}
          ref={marqueeInnerRef}
        >
          {[...Array(repetitions)].map((_, idx) => (
            <div
              className="marquee-part flex items-center flex-shrink-0"
              key={idx}
              style={{ color: marqueeTextColor }}
            >
              <span
                className="
                  whitespace-nowrap uppercase font-normal leading-none
                  text-[clamp(16px,3.5vw,28px)]
                  px-[clamp(8px,1.5vw,18px)]
                "
              >
                {text}
              </span>
              <div
                className="rounded-[50px] bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage: `url(${image})`,
                  width: "clamp(80px, 14vw, 200px)",
                  height: "clamp(36px, 6.5vw, 70px)",
                  margin: "0 clamp(8px, 1.5vw, 18px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
