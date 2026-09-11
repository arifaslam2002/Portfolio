import { useEffect, useState } from "react";

const Terminal = ({ title, command, skills, delay }) => {
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    if (skillIndex >= skills.length) return;

    const skill = skills[skillIndex];

    if (currentSkill.length < skill.length) {
      const timer = setTimeout(() => {
        setCurrentSkill(skill.slice(0, currentSkill.length + 1));
      }, 60);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayedSkills((prev) => [...prev, skill]);
      setCurrentSkill("");
      setSkillIndex((prev) => prev + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [currentSkill, skillIndex, skills]);

  return (
    <div
      className="terminal-card opacity-0"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>

        <span className="ml-3 text-white/40 text-sm">
          arif@portfolio:~/{title.toLowerCase()}
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-7">
        <p className="text-white">$ {command}</p>

        {displayedSkills.map((skill, index) => (
          <p
            key={index}
            className="
    text-white/70
    transition-all duration-300
    hover:text-orange-300
    hover:translate-x-2
    hover:font-bold
    cursor-pointer
  "
          >
            &gt; {skill}
          </p>
        ))}

        {skillIndex < skills.length && (
          <p className="text-white/70">
            &gt; {currentSkill}
            <span className="animate-pulse">▋</span>
          </p>
        )}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillSections = [
    {
      title: "Frontend",
      command: "frontend --show",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      command: "backend --show",
      skills: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      command: "database --show",
      skills: ["MongoDB"],
    },
    {
      title: "Tools",
      command: "tools --show",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section className="border-t border-white/10 min-h-screen px-10 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-white/50 text-sm tracking-[5px]">TECHNOLOGIES</p>

          <h2 className="text-6xl font-bold mt-3">My Skills</h2>
        </div>

        {/* Terminals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillSections.map((section, index) => (
            <Terminal
              key={section.title}
              title={section.title}
              command={section.command}
              skills={section.skills}
              delay={index * 300}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
