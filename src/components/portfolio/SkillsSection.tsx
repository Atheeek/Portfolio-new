const SkillsSection = () => {
  const skills = [
    { name: 'Figma', level: 98, color: 'neon' },
    { name: 'Webflow', level: 86, color: 'neon' },
    { name: 'Framer', level: 90, color: 'neon' },
    { name: 'Premiere', level: 80, color: 'neon' },
    { name: 'PS', level: 75, color: 'neon' }
  ];

  return (
    <section className="section-padding hero-bg-animation relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-4">MASTERED SKILL</p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="border border-white/10 rounded-3xl backdrop-blur-sm bg-white/5 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {skills.map((skill, index) => (
                <div key={skill.name} className="text-center group">
                  <div className="relative mb-6">
                    <div className="text-6xl lg:text-8xl font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors duration-500">
                      {skill.name}
                    </div>
                    <div className="absolute top-4 right-0 text-neon text-2xl font-bold">
                      {skill.level}%
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                    <div 
                      className="h-2 bg-gradient-to-r from-neon to-neon-soft rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-16 text-center">
              <p className="text-white/60 text-lg mb-4">
                <span className="text-neon font-bold">🌐</span> With{' '}
                <span className="text-neon font-bold">10+ Other Skills</span>{' '}
                related to <span className="text-white font-bold">Design, Development</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['Adobe XD', 'Sketch', 'Principle', 'After Effects', 'Illustrator', 'InDesion', 'Protopie', 'Blender'].map((skill, index) => (
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