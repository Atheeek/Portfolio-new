import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, Suspense, lazy } from 'react';

// Lazily import the Spline component for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

// This is your original background, now used as a loading fallback
const FallbackBackground = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neon/5 rounded-full blur-3xl"></div>
  </div>
);

const ExperienceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: '01',
      period: 'Apr 2025 – Jul 2025',
      title: 'Full Stack Developer Intern',
      company: 'CDAC, Bangalore',
      description:
        'Built scalable MERN applications with authentication, dashboards, and interactive features. Collaborated in an agile environment to deliver production-ready solutions.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express','mySQL', 'REST APIs']
    },
    {
      id: '02',
      period: 'Oct 2024 – Feb 2025',
      title: 'DevOps Engineer Intern',
      company: 'Rooman Technologies',
      description:
        'Implemented CI/CD pipelines with Jenkins & Docker, automated deployments with NGINX reverse proxy, and optimized infrastructure for real-world applications.',
      tags: ['Docker', 'Jenkins', 'NGINX', 'CI/CD','AWS' , 'Linux','Github actions']
    },
   {
  id: '03',
  period: '2024 – Present',
  title: 'Full Stack Developer (Freelance & Projects)',
  company: 'Independent',
  description:
    'Developed and deployed projects including a Shopify-powered e-commerce website, custom invoice billing software, and modern, high-conversion landing pages for clients.',
  tags: ['Shopify', 'React', 'Tailwind CSS',   'Three.js', 'GSAP']
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
    <section id='experience' className="section-padding bg-black relative overflow-hidden">
      {/* --- 3D BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<FallbackBackground />}>
          {/* <Spline
            // scene="https://prod.spline.design/bsuQI1uutwMwFf5h/scene.splinecode"
            // scene="https://prod.spline.design/V8BCErw6UD7Hhcz3/scene.splinecode"
          /> */}
        </Suspense>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="mb-16">
            <div className="lg:flex items-center justify-between">
                <div className='mb-8 lg:mb-0'>
                    <p className="text-white/50 text-sm uppercase tracking-wider mb-4">EXPERIENCE</p>
                     <button className="group flex items-center justify-between p-2 pl-6 border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-300">
                       <a href="https://www.linkedin.com/in/mahammad-atheek-rahman/"  className="text-white text-lg pr-4">See my LinkedIn</a>
                        {/* <span className="text-white text-lg pr-4">See my LinkedIn</span> */}
                        <div className="w-12 h-12 flex items-center justify-center bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                    </button>
                </div>
                 <h2 className="text-4xl lg:text-6xl font-bold text-white text-left lg:text-right max-w-2xl ml-auto leading-tight">
                    Turning Ideas Into Scalable Solutions. <span className="text-white/40">Practical projects, real-world impact.</span>
                </h2>
            </div>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8"
          >
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-card group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-white/50 text-sm mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-[400] font-poppins text-white group-hover:text-neon transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-white/70  mt-1">{exp.company}</p>
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