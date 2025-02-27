import HeroSection from "@/components/section/Hero";
import Marquee from "react-fast-marquee";

export default function Home() {
  const techs = [
    { name: "HTML5", icon: "/css.png" },
    { name: "CSS3", icon: "/css.png" },
    { name: "JavaScript", icon: "/css.png" },
    { name: "Git", icon: "/css.png" },
    { name: "Supabase", icon: "/css.png" },
    { name: "MySQL", icon: "/css.png" },
    { name: "MySQL", icon: "/css.png" },
    { name: "MySQL", icon: "/css.png" },
    { name: "MySQL", icon: "/css.png" },
    { name: "MySQL", icon: "/css.png" },
  ];

  const skills = [
    {
      icon: "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z",
      title: "Mobile Development",
    },
    {
      icon: "m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
      title: "REST API",
    },
    {
      icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
      title: "Web Development",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <HeroSection />

      {/* Tech Stack Marquee - dengan design yang lebih terintegrasi */}
      <div className="relative w-full overflow-hidden py-12 bg-gradient-to-r from-purple-900/5 via-black to-cyan-900/5">
        {/* Gradient overlay kiri */}
        <div className="absolute left-0 top-0 h-full w-[20rem] z-10 bg-gradient-to-r from-black to-transparent"></div>

        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {techs.map((tech, index) => (
            <div key={index} className="flex items-center mx-12">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-3 border border-cyan-500/30">
                <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
              </div>
              <span className="text-gray-300 text-lg font-heading tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Gradient overlay kanan */}
        <div className="absolute right-0 top-0 h-full w-[20rem] z-10 bg-gradient-to-l from-black to-transparent"></div>
      </div>

      {/* Core Competencies Section - dengan design yang terintegrasi dengan Hero */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-cyan-400 text-xl font-medium tracking-wider mb-4">
            WHAT I DO
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Competencies
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delving into the abilities I harness to create effective solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-cyan-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={skill.icon}
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-medium mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-center text-sm">
                Specialized expertise in building robust{" "}
                {skill.title.toLowerCase()} solutions that deliver exceptional
                user experiences.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}