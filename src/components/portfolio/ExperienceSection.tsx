import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const component = useRef<HTMLDivElement>(null);
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

  // GSAP Scroll-triggered animation for the cards
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      // Select all cards within the scroll container
      const cards = gsap.utils.toArray(".experience-card");

      // Loop through each card and create a ScrollTrigger animation
      cards.forEach(card => {
        gsap.from(card as HTMLElement, {
          opacity: 0,
          x: 100, // Animate in from the right
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card as HTMLElement,
            scroller: container, // IMPORTANT: The scroller is our horizontal container
            horizontal: true, // IMPORTANT: We are scrolling horizontally
            start: 'left 90%', // Trigger animation when the card's left edge is 90% from the scroller's left edge
            toggleActions: 'play none none none', // Play the animation once and don't reverse
          }
        });
      });

    }, component); // Scope animations to the component
    
    return () => ctx.revert(); // Cleanup GSAP animations on component unmount
  }, []);

  return (
    // Adjusted vertical padding for better spacing
    <section id='experience' ref={component} className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="container-padding relative z-10">
        {/* Section Header (Original content and fonts preserved) */}
        <div className="mb-16">
          <div className="lg:flex items-center justify-between">
              <div className='mb-8 lg:mb-0'>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-4">EXPERIENCE</p>
                  <a href="https://www.linkedin.com/in/mahammad-atheek-rahman/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-between p-2 pl-6 border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-300">
                      <span className="text-white text-lg pr-4">See my LinkedIn</span>
                      <div className="w-12 h-12 flex items-center justify-center bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors duration-300">
                          <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                  </a>
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
                {/* The card content remains exactly the same */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-white/50 text-sm mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-[400] font-poppins text-white group-hover:text-neon transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-white/70 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-4xl font-bold text-neon/30 group-hover:text-neon/60 transition-colors duration-300">
                    {exp.id}
                  </div>
                </div>
                <p className="text-white/60 text-[18px] mb-6 font-poppins leading-relaxed">
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