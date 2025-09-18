"use client";

import { useState } from "react";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 98, icon: <FaReact className="text-sky-400" /> },
    { name: "Javascript", level: 86, icon: <FaJs className="text-yellow-400" /> },
    { name: "TailwindCSS", level: 90, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" /> },
  ];

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="approach" className="section-padding bg-black relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon/10 rounded-full blur-2xl"></div>
      </div>

     <div className="container-padding relative z-10">
  {/* Header */}
  <div className="text-center mb-16">
    <p className="text-white/50 text-sm uppercase font-poppins tracking-wider mb-4">
      MASTERED SKILL
    </p>
  </div>

  {/* Skills */}
  <div className="max-w-6xl mx-auto">
    <div className="border border-white/10 rounded-3xl backdrop-blur-sm p-16 text-center">
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative group cursor-pointer text-4xl md:text-6xl lg:text-8xl font-[500] font-sulphur text-white/70 hover:text-white transition-colors duration-300"
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
            onClick={() =>
              setActiveSkill(activeSkill === skill.name ? null : skill.name)
            }
          >
            {/* Skill Text */}
            {skill.name}
            <span className="text-lg md:text-xl font-normal text-white/50 ml-1">
              {skill.level}%
            </span>

            {/* Overlayed Logo */}
            {activeSkill === skill.name && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    bg-black/90 border border-white/10 px-12 py-4
                    rounded-full shadow-lg
                    transform rotate-[-20deg] flex items-center justify-center
                    opacity-0 scale-90
                    animate-[scaleIn_0.3s_ease-out_forwards]
                  "
                >
                  <div className="text-6xl">{skill.icon}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Hint */}
      <p className="block md:hidden text-sm text-white/50 mt-6">
        Tap a skill to view its logo
      </p>

      {/* Extra Skills */}
      <div className="mt-16 font-poppins text-center">
        <p className="text-white/60 text-[16px] mb-4">
          <span className="text-gray font-[400]">🌐</span> With{" "}
          <span className="text-neon font-[400]">Other Skills</span>{" "}
          related to{" "}
          <span className="text-white font-[400]">Design, Development</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["mySQL", "Rest API", "Express", "Docker", "CI/CD", "Git"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm hover:bg-neon/10 hover:border-neon/20 hover:text-neon font-poppins transition-all duration-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default SkillsSection;
