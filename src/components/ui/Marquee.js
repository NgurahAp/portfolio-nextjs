import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  const techs = [
    { name: "HTML5", icon: "/html.png" },
    { name: "CSS3", icon: "/css.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "Firebase", icon: "/firebase.png" },
    { name: "API", icon: "/API.png" },
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
    <div className="relative w-full overflow-hidden py-12 border-t border-gray-800">
      {/* Gradient overlay left */}
      <div className="absolute left-0 top-0 h-full w-[15rem] z-10 bg-gradient-to-r from-black to-transparent"></div>

      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {techs.map((tech, index) => (
          <div key={index} className="flex items-center mx-10 gap-5">
            <img src={tech.icon} alt={tech.name} className="h-5 w-5" />
            <span className="text-gray-400 text-base font-heading tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Gradient overlay right */}
      <div className="absolute right-0 top-0 h-full w-[15rem] z-10 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
