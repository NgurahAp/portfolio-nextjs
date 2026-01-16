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
    <div id="expertise" className="relative w-full overflow-hidden py-12 bg-white border-y border-gray-100">
      {/* Subtle gradient overlay left */}
      <div className="absolute left-0 top-0 h-full w-36 z-10 bg-gradient-to-r from-white to-transparent"></div>

      <Marquee speed={25} gradient={false}>
        {techs.map((tech, index) => (
          <div key={index} className="flex items-center mx-8 group">
            <div className="h-4 w-4 flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
              <img
                src={tech.icon}
                alt={tech.name}
                className="max-h-5 max-w-5 grayscale"
              />
            </div>
            <span className="text-gray-400 text-xs font-light ml-2 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Subtle gradient overlay right */}
      <div className="absolute right-0 top-0 h-full w-36 z-10 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}
