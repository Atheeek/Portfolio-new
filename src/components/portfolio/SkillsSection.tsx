"use client";

import { useState } from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiDocker,
  SiFirebase,
  SiNextdotjs,
  SiNginx,
  SiJenkins,
  SiTypescript,
  SiOpenai,
  SiRedux,
  SiPostman,
  SiGithubactions,
  SiLinux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 98, icon: <FaReact className="text-sky-400" /> },
    { name: "JavaScript", level: 90, icon: <FaJs className="text-yellow-400" /> },
    { name: "TailwindCSS", level: 90, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", level: 82, icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", level: 78, icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", level: 76, icon: <SiMysql className="text-blue-400" /> },
  ];
  
  const otherSkills = [
    { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-400" /> },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-400" /> },
        { name: "Next.js", level: 92, icon: <SiNextdotjs className="text-white" /> },

    { name: "REST API", icon: <TbApi className="text-orange-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "OpenAI / AI APIs", icon: <SiOpenai className="text-white" /> },
    { name: "Jenkins CI/CD", icon: <SiJenkins className="text-red-500" /> },
    { name: "Nginx", icon: <SiNginx className="text-green-400" /> },
    { name: "AWS (EC2)", icon: <FaAws className="text-orange-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Linux / CLI", icon: <SiLinux className="text-gray-300" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-400" /> },
  ];

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase font-poppins tracking-wider mb-4">
            MASTERED SKILLS
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="border border-white/10 rounded-3xl backdrop-blur-sm p-8 md:p-16 text-center">
            {/* Main Skills */}
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
                  {skill.name}
                  <span className="text-lg md:text-xl font-normal text-white/50 ml-1">
                    {skill.level}%
                  </span>

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

            <p className="block md:hidden text-sm text-white/50 mt-6">
              Tap a skill to view its logo
            </p>

            {/* Other Skills */}
            <div className="mt-16 font-poppins text-center">
              <p className="text-white/60 text-[16px] mb-4">
                <span className="text-gray font-[400]">⚙️</span> With{" "}
                <span className="text-neon font-[400]">Additional Expertise</span>{" "}
                in{" "}
                <span className="text-white font-[400]">
                  DevOps, AI Integrations & Cloud Deployments
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {otherSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      flex items-center gap-2 px-4 py-2 
                      bg-white/5 backdrop-blur-sm border border-white/10 rounded-full 
                      text-white/70 text-sm font-poppins 
                      hover:bg-neon/10 hover:border-neon/20 hover:text-neon 
                      transition-all duration-300
                    "
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
