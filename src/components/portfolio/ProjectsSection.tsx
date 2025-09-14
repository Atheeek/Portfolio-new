import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import laptopMockup1 from '@/assets/laptop-mockup.jpg';
import laptopMockup2 from '@/assets/laptop-mockup.jpg';
import laptopMockup3 from '@/assets/laptop-mockup.jpg';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: 'Runes Studio Web Design', image: laptopMockup1, tags: ['UI/UX', 'Visual Identity', 'Art Direction'], date: '3/2025', company: 'EMOTIVE INC' },
    { id: 2, title: 'Digital Banking Platform', image: laptopMockup2, tags: ['UI/UX', 'Mobile Design', 'Fintech'], date: '2/2025', company: 'FINTECH CORP' },
    { id: 3, title: 'E-commerce Experience', image: laptopMockup3, tags: ['Visual Identity', 'Web Design', 'Next.js'], date: '1/2025', company: 'RETAIL BRAND' }
  ];

  const componentRef = useRef(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slides = slidesRef.current;
      
      // Create a single timeline for all slide animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: () => `+=${(slides.length - 1) * 1000}`, // Pin for 1000px of scroll per slide
          pin: true,
          scrub: true, // Smoothly link animation to scroll
          // Optional: Add snap for a cleaner feel
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.3,
            ease: 'power1.inOut',
          },
        }
      });

      // Add animations to the timeline for each slide (except the first one)
      slides.forEach((slide, i) => {
        if (i > 0) {
          tl.from(slide, {
            yPercent: 100, // Animate from bottom
            ease: 'none',
          }, '<'); // '<' makes each animation start at the same time on the timeline
        }
      });
      // By default, the timeline spaces animations out. 
      // We are essentially layering the animations on top of each other.
      // As the timeline progresses (via scrolling), each slide completes its journey from bottom to top.

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="relative h-screen bg-black text-white overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (slidesRef.current[index] = el!)}
          // All slides are now absolutely positioned to stack on top of each other
          className="absolute inset-0 h-full w-full bg-black flex items-center justify-center"
        >
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Metadata */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 text-white/50 text-sm hidden md:block"><p>DATE: {project.date}</p></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 text-white/50 text-sm hidden md:block"><p>{project.company}</p></div>

            {/* Arrows */}
            <button className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
            <button className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><ChevronRight className="w-5 h-5" /></button>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl px-4">
              <p className="text-white/50 text-xs uppercase tracking-widest">MY WORK</p>
              <h2 className="text-3xl md:text-5xl  text-center text-white">{project.title}</h2>
              
              <div className="w-full max-w-2xl bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-6">
                 <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                 </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* NO SPACER DIV NEEDED */}
    </section>
  );
};

export default ProjectsSection;