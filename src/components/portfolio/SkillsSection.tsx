const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 98 },
    { name: 'Javascript', level: 86 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 }
  ];

  return (
    <section className="section-padding bg-black  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase font-poppins tracking-wider mb-4">
            MASTERED SKILL
          </p>
        </div>

        {/* Skills Cloud */}
        <div className="max-w-6xl mx-auto">
          
          <div className="border border-white/10 rounded-3xl backdrop-blur-sm  p-16 text-center">
            <div className="flex   flex-wrap justify-center gap-8">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="text-4xl md:text-6xl lg:text-8xl font-[500] font-sulphur text-white/80 hover:text-neon transition-colors duration-300"
                >
                  {skill.name}
                  <span className="text-lg md:text-xl font-normal text-white/50 ml-1">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-16 text-center">
              <p className="text-white/60 text-lg mb-4">
                <span className="text-gray font-bold">🌐</span> With{' '}
                <span className="text-neon font-bold">10+ Other Skills</span>{' '}
                related to <span className="text-white font-bold">Design, Development</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['mySQL', 'Rest API', 'Express', 'Docker', 'CI/CD', 'Git'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm hover:bg-neon/10 hover:border-neon/20 hover:text-neon transition-all duration-300"
                  >
                    {skill}
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
