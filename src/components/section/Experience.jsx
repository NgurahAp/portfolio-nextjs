"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

const ExperienceItem = ({ icon, role, company, period, onClick }) => (
  <motion.div
    initial={{ opacity: 0.8 }}
    whileHover={{ opacity: 1, scale: 1.01 }}
    transition={{ duration: 0.2 }}
    className="flex items-center justify-between w-full border-b border-gray-800 py-4 cursor-pointer hover:bg-gray-900/10"
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      <div className="bg-gray-800 rounded-full w-10 h-10 overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-white  font-medium">{role}</h3>
        <p className="text-gray-400 text-xs ">{company}</p>
      </div>
    </div>
    <div className="text-gray-400 text-sm">{period}</div>
  </motion.div>
);

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      icon: (
        <img
          src="/thc.webp"
          alt="OneShield"
          className="object-cover w-10 h-10"
        />
      ),
      role: "Web Developer",
      company: "@Taharica (Internship)",
      period: "Dec 2024 — March 2025",
    },
    {
      icon: (
        <img
          src="/mknows.jfif"
          alt="Design and Code"
          className="object-cover w-10 h-10"
        />
      ),
      role: "Frontend Web Developer",
      company: "@PT Menara Indonesia (Internship)",
      period: "Sept 2024 — Dec 2024",
    },
    {
      icon: (
        <img
          src="/alterra.png"
          alt="Social3"
          className="object-cover w-10 h-10"
        />
      ),
      role: "Mobile Developer",
      company: "@Alterra (Apprenticeship)",
      period: "Aug 2023 — Dec 2023",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-black text-white">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row w-full gap-28">
          {/* Left side */}
          <div className="w-full md:w-1/3 lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-amber-300">
                <BsStars />
              </div>
              <h3 className="text-amber-300 uppercase text-sm font-medium tracking-wider">
                WORK HISTORY
              </h3>
            </div>

            <h2 className="text-5xl font-bold mb-6">Experience</h2>
            <p className="text-gray-400 text-sm">
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </p>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3 lg:w-2/3">
            <div className="space-y-1">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  icon={exp.icon}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
