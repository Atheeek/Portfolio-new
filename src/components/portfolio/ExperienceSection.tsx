import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const ExperienceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: '01',
      period: '2023 - Present',
      title: 'Senior UI/UX Designer',
      company: 'Digital Innovation Lab',
      description: 'Leading design systems and creating exceptional user experiences for enterprise applications.',
      tags: []
    },
    {
      id: '02',
      period: '2022 - 2023',
      title: 'Art Director',
      company: 'Creative Studio Inc',
      description: 'Directing visual identity projects and managing creative teams for global brands.',
      tags: []
    },
    {
      id: '03',
      period: '2020 - 2022',
      title: 'UI Designer',
      company: 'Startup Ventures',
      description: 'Crafting intuitive interfaces and conducting user research for mobile applications.',
      tags: ['Mobile Design', 'Usability Testing']
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-full h-px  bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neon/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-4">EXPERIENCE</p>
              <h2 className="text-4xl lg:text-6xl font-bold text-white text-right max-w-2xl ml-auto leading-tight">
                Making Your World Pain Free for Experience.{' '}
                <span className="text-white/40">offers more than just simple</span>
              </h2>
            </div>
          </div>

          <div className="flex justify-between items-end mt-8">
            {/* Award Badge */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-white/60 mb-1">SINCE 2020</div>
                    <div className="text-white font-bold text-sm">AWARD</div>
                    <div className="text-xs text-white/60">WINNING</div>
                    <div className="text-xs text-white/60">DESIGNER</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin"></div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-white/70 hover:text-neon transition-colors duration-300">
              <span>See my LinkedIn</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8"
          >
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-card group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-white/50 text-sm mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-white/70 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-4xl font-bold text-neon/30 group-hover:text-neon/60 transition-colors duration-300">
                    {exp.id}
                  </div>
                </div>

                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {exp.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {exp.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-neon/10 text-neon text-xs rounded-full border border-neon/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Green Accent Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 justify-end mt-6">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;