import { ChevronLeft, ChevronRight } from 'lucide-react';
import laptopMockup from '@/assets/laptop-mockup.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Runes Studio Web Design',
      image: laptopMockup,
      tags: ['UI/UX', 'Visual Identity', 'Art Direction'],
      date: '3/2025',
      company: 'EMOTIVE INC'
    },
    {
      id: 2,
      title: 'Digital Banking Platform',
      image: laptopMockup,
      tags: ['UI/UX', 'Mobile Design'],
      date: '2/2025',
      company: 'FINTECH CORP'
    },
    {
      id: 3,
      title: 'E-commerce Experience',
      image: laptopMockup,
      tags: ['Visual Identity', 'Web Design'],
      date: '1/2025',
      company: 'RETAIL BRAND'
    }
  ];

  return (
    <section className="section-padding hero-bg-animation relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-neon/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-4">MY WORK</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Featured Projects
          </h2>
        </div>

        {/* Projects Showcase */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`mb-32 ${index % 2 === 0 ? '' : 'lg:ml-24'}`}
            >
              {/* Project Meta */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-left">
                  <p className="text-white/50 text-sm">DATE: {project.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-sm">{project.company}</p>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
                {project.title}
              </h3>

              {/* Project Image */}
              <div className="relative group">
                <div className="bg-gradient-to-b from-white/10 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-white/10 glow-neon group-hover:scale-105 transition-all duration-500">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Portfolio Project`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <button className="bg-neon text-black px-6 py-3 rounded-full font-medium transform scale-90 group-hover:scale-100 transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>

              {/* Project Tags */}
              <div className="flex gap-3 justify-center mt-8 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm hover:bg-neon/10 hover:border-neon/20 hover:text-neon transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-16">
          <button className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 group">
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-neon rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>

          <button className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 group">
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-black/80 backdrop-blur-sm border border-neon/20 rounded-lg p-4 text-center">
            <div className="text-neon font-bold text-lg">Alexander</div>
            <div className="text-neon font-bold text-lg">Portz</div>
            <div className="text-white/50 text-xs mt-1">NEW TEMPLATES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;