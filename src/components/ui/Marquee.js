import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  const techs = [
    { name: "HTML5", icon: "/html.png" },
    { name: "CSS3", icon: "/css.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "Firebase", icon: "/firebase.png" },
    { name: "Flutter", icon: "/flutter.png" },
    { name: "GraphQL", icon: "/graphql.svg" },
    { name: "Mongo DB", icon: "/mongo.png" },
    { name: "NextJS", icon: "/next.png" },
    { name: "Laravel", icon: "/laravel.png" },
    { name: "Python", icon: "/python.svg" },
    { name: "React", icon: "/react.png" },
    { name: "Tailwind", icon: "/tailwind.png" },
    { name: "TypeScript", icon: "/ts.png" },
  ];

  return (
    <div className="relative w-full overflow-hidden border-t border-b border-[#1E2023] py-6 bg-black">
      {/* Gradient overlay left */}
      <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-black to-transparent"></div>

      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {techs.map((tech, index) => (
          <div key={index} className="flex items-center mx-4 gap-1 bg-[#141517] py-1 px-2 rounded-full">
            <div className="h-8 w-8 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="max-h-6 max-w-6"
              />
            </div>
            <span className="text-gray-300 text-sm font-medium opacity-80 pr-1">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Gradient overlay right */}
      <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
