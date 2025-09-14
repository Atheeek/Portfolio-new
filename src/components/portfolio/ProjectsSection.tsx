import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Lenis from 'lenis'; // 1. Import Lenis

import cmsImage from '@/assets/cms.png';
import cognifyImage from '@/assets/cognify.png';
import igadsEcomImage from '@/assets/igadsstore.png';
import igadsLandingImage from '@/assets/igaads.png';
import schoolImage from '@/assets/school.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: 'Complaint Management System', image: cmsImage, tags: ['React.js', 'TailwindCSS', 'GoogleMap API', 'Node.js','mongoDB'], date: '2025', company: 'SmartCity CMS', github: 'https://github.com/yourusername/complaint-management-system' },
    { id: 2, title: 'Cognify – Child Learning & Screening Platform', image: cognifyImage, tags: ['React.js', 'JWT Webtokens', 'Gamified Learning', 'AI Chatbot', 'Node.js','mongoDB', 'express'], date: '2025', company: 'Cognify', github: 'https://github.com/yourusername/cognify' },
    { id: 3, title: 'IGADS E-commerce Website', image: igadsEcomImage, tags: ['Shopify'], date: '2024', company: 'IGADS', github: 'https://github.com/yourusername/igads-ecommerce' },
    { id: 4, title: 'IGADS Landing Page', image: igadsLandingImage, tags: ['Typescript', 'TailwindCSS', '3D Animations', 'framer-motion'], date: '2024', company: 'IGADS', github: 'https://github.com/yourusername/igads-landing' },
    { id: 5, title: 'Modern School Website', image: schoolImage, tags: ['Typescript', 'TailwindCSS', 'Responsive UI'], date: '2023', company: 'School Project', github: 'https://github.com/yourusername/school-website' },
  ];

  const componentRef = useRef(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // 2. Add this useLayoutEffect to set up Lenis
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Cleanup on unmount
    return () => {
      lenis.destroy();
    }
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slides = slidesRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: () => `+=${(slides.length - 1) * 1000}`,
          pin: true,
          // 3. Tweak scrub for a smoother "catch-up" effect
          scrub: 1, 
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.3,
            ease: 'power1.inOut',
          },
        }
      });
      slides.forEach((slide, i) => {
        if (i > 0) {
          tl.from(slide, { yPercent: 100, ease: 'none' });
        }
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: cursorPos.x - 48,
        y: cursorPos.y - 48,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  }, [cursorPos]);

  return (
    <section ref={componentRef} className="relative h-screen text-white overflow-hidden font-poppins bg-black" onMouseMove={handleMouseMove}>
      {hovering && (
        <div ref={cursorRef} className="fixed pointer-events-none z-50 w-24 h-24 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <ArrowUpRight className="w-8 h-8 text-white" />
        </div>
      )}
      {projects.map((project) => (
        <div key={project.id} ref={(el) => (slidesRef.current[project.id - 1] = el!)} className="absolute inset-0 h-full w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black">
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 text-white/50 text-sm hidden md:block"><p>DATE: {project.date}</p></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 text-white/50 text-sm hidden md:block"><p>{project.company}</p></div>
            <button className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
            <button className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><ChevronRight className="w-5 h-5" /></button>
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl px-4">
              <p className="text-white/50 text-xs uppercase tracking-widest">MY WORK</p>
              <h2 className="text-3xl md:text-4xl font-[400] font-poppins  text-center text-white">{project.title}</h2>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full max-w-3xl bg-white/[.03] rounded-3xl border border-white/10 p-2 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm cursor-none" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                <div className="aspect-video w-full overflow-hidden rounded-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              </a>
              <div className="flex flex-wrap gap-3 justify-center">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;