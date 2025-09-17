import { useLayoutEffect, useRef } from 'react'; // REMOVED: useState
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// (Image imports and ThinLongArrowUpRight component remain the same)
import cmsImage from '@/assets/cms1.png';
import cognifyImage from '@/assets/cognify.png';
import igadsEcomImage from '@/assets/igads4.png';
import igadsLandingImage from '@/assets/igads5.png';
import schoolImage from '@/assets/school.png';

export function ThinLongArrowUpRight({ size = 32, className = "" }) {
 /* ... same as before ... */
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} aria-hidden="true" > <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" > <line x1="16" y1="48" x2="48" y2="16" /> <path d="M48 36 V16 H28" /> </g> </svg>
  );
}


gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projects = [
    // ... same project data ...
    { id: 1, title: 'Complaint Management System', image: cmsImage, tags: ['React.js', 'TailwindCSS', 'GoogleMap API', 'Node.js', 'mongoDB'], date: '2025', company: 'SmartCity CMS', github: 'https://github.com/Atheeek/City-fix' },
    { id: 2, title: 'Cognify – Child Learning & Screening Platform', image: cognifyImage, tags: ['React.js', 'JWT Webtokens', 'Gamified Learning', 'AI Chatbot', 'Node.js', 'mongoDB', 'express'], date: '2025', company: 'Cognify', github: 'https://github.com/Atheeek/Cognify-project' },
    { id: 3, title: 'IGADS E-commerce Website', image: igadsEcomImage, tags: ['Shopify'], date: '2024', company: 'IGADS', github: 'https://igadsmobile.myshopify.com' },
    { id: 4, title: 'IGADS Landing Page', image: igadsLandingImage, tags: ['Typescript', 'TailwindCSS', '3D Animations', 'framer-motion'], date: '2024', company: 'IGADS', github: 'https://igads.vercel.app' },
    { id: 5, title: 'Modern School Website', image: schoolImage, tags: ['Typescript', 'TailwindCSS', 'Responsive UI'], date: '2023', company: 'School Project', github: 'https://tems-school.vercel.app/' },
  ];

  const componentRef = useRef(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
const cursorContainerRef = useRef<HTMLAnchorElement>(null);
  // Your Lenis and GSAP ScrollTrigger effects are well-structured and remain the same.
  useLayoutEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slides = slidesRef.current;
      gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: () => `+=${(slides.length - 1) * 1000}`,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.5,
            ease: 'power2.inOut',
          },
          invalidateOnRefresh: true,
        },
      })
      .from(slides.slice(1), { // Animate all slides except the first
        yPercent: 100,
        stagger: 1, // Add a stagger for a smoother transition between slides
        ease: 'power2.inOut',
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  // NEW: Optimized Cursor Effect
  useLayoutEffect(() => {
    if (!cursorRef.current || !cursorContainerRef.current) return;

    const cursor = cursorRef.current;
    const container = cursorContainerRef.current;

    // Use GSAP's quickTo for maximum performance. No React re-renders!
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    // Add event listeners to the container
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    // Cleanup function to remove event listeners
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  return (
    <section id="projects" ref={componentRef} className="relative h-screen bg-black text-white overflow-hidden font-poppins">
      {/* The cursor is now always in the DOM, controlled by GSAP */}
      <div
        ref={cursorRef}
        className="fixed top-[-56px] left-[-56px] pointer-events-none z-50 w-28 h-28 rounded-full flex items-center justify-center bg-black/10 backdrop-blur-sm scale-0 opacity-0"
      >
        <ThinLongArrowUpRight size={40} className="text-lime-300" />
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (slidesRef.current[index] = el!)}
          // NEW: Add will-change for smoother animation
          className="absolute inset-0 h-full w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black"
          style={{ willChange: 'transform' }}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            {/* ... side text and buttons ... */}
            <div className="absolute ml-5 top-1/2 -translate-y-1/2 left-8 md:left-16 text-white/50 text-sm hidden md:block"> <p>DATE: {project.date}</p> </div>
            <div className="absolute mr-5 top-1/2 -translate-y-1/2 right-8 md:right-16 text-white/50 text-sm hidden md:block"> <p>{project.company}</p> </div>
            <button className="absolute  top-1/2 -translate-y-1/2 left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"> <ChevronLeft className=" w-5 h-5" /> </button>
            <button className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"> <ChevronRight className="w-5 h-5" /> </button>

            <div className="flex flex-col items-center gap-10 w-full max-w-4xl px-4">
              <p className="text-white/50 text-xs uppercase mt-10 tracking-widest">MY WORK</p>
              <h2 className="text-[38px] md:text-[48px] font-[400] font-poppins text-center text-white">
                {project.title}
              </h2>
              {/* NEW: Attached the ref to the link element */}
              <a
                ref={index === 0 ? cursorContainerRef : null} // Attach ref only to the first project initially
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-2xl bg-white/[.03] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm"
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  {/* NEW: Lazy load images after the first one */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              </a>
              <div className="flex flex-wrap gap-3 justify-center">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
                    {tag}
                  </span>
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