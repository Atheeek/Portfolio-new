import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/projects';

// Your image imports

// A helper component for your arrow icon
export function ThinLongArrowUpRight({ size = 32, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} aria-hidden="true" >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" >
        <line x1="16" y1="48" x2="48" y2="16" />
        <path d="M48 36 V16 H28" />
      </g>
    </svg>
  );
}

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {

  const componentRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Lenis smooth scrolling setup
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

  // GSAP ScrollTrigger animation for the pinned stacking effect
  // Find this useLayoutEffect hook in your code

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slides = slidesRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: () => `+=${(slides.length - 1) * 1000}`,
          pin: true,
          scrub: 0.5,
          // REMOVE THE ENTIRE 'snap' OBJECT
          /*
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.5,
            ease: 'power2.inOut',
          },
          */
          invalidateOnRefresh: true,
        },
      })
        .from(slides.slice(1), {
          yPercent: 100,
          stagger: 0.5, // REDUCE stagger from 1 to a smaller value
          ease: 'power2.inOut',
        });

      // Precise restoration to the clicked slide if returning
      requestAnimationFrame(() => {
        try {
          if (window.location.hash === '#projects') {
            const savedIndex = sessionStorage.getItem('projectsIndex');
            if (savedIndex && tl.scrollTrigger) {
              const index = parseInt(savedIndex, 10);
              if (!Number.isNaN(index) && slides.length > 1) {
                const st = tl.scrollTrigger;
                const progress = Math.max(0, Math.min(1, index / (slides.length - 1)));
                const targetY = st.start + progress * (st.end - st.start);
                window.scrollTo({ top: targetY, behavior: 'auto' });
                sessionStorage.removeItem('projectsIndex');
              }
            }
          }
        } catch {}
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);


  // Optimized custom cursor effect that works on ALL project links
  useLayoutEffect(() => {
    if (!cursorRef.current || !componentRef.current) return;

    const cursor = cursorRef.current;
    const containers = gsap.utils.toArray<HTMLAnchorElement>('.project-link', componentRef.current);

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseEnter = () => gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });

    containers.forEach(container => {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      containers.forEach(container => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="projects" ref={componentRef} className="relative h-screen bg-black text-white overflow-hidden font-poppins">
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
          className="absolute inset-0 h-full w-full flex items-center justify-center bg-black"
          style={{ willChange: 'transform' }}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="absolute ml-5 top-1/2 -translate-y-1/2 left-8 md:left-16 text-white/50 text-sm hidden md:block"> <p>DATE: {project.date}</p> </div>
            <div className="absolute mr-5 top-1/2 -translate-y-1/2 right-8 md:right-16 text-white/50 text-sm hidden md:block"> <p>{project.company}</p> </div>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 
             w-10 h-10 rounded-full bg-white/10 
             hidden md:flex items-center justify-center 
             hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 
             w-10 h-10 rounded-full bg-white/10 
             hidden md:flex items-center justify-center 
             hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>


            <div className="flex flex-col items-center gap-10 w-full max-w-4xl px-4">
              <p className="text-white/50 text-xs uppercase mt-20 tracking-widest">MY WORK</p>
<h2 className="text-[38px] md:text-[48px] font-[400] font-poppins text-center text-white leading-[37px]">
 
                {project.title}
              </h2>
              <Link
  to={`/projects/${project.slug}`}
  onClick={() => {
    try {
      sessionStorage.setItem('projectsScrollY', String(window.scrollY));
      sessionStorage.setItem('projectsIndex', String(index));
      window.scrollTo(0, 0); // scroll to top
    } catch {}
  }}
  className="project-link w-full max-w-2xl bg-white/[.03] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm"
>

                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              </Link>
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

      {/* Final slide: View more projects */}
      {/* <div
        ref={(el) => (slidesRef.current[projects.length] = el!)}
        className="absolute inset-0 h-full w-full flex items-center justify-center bg-black"
        style={{ willChange: 'transform' }}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-4xl px-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">EXPLORE MORE</p>
          <a
            href="https://github.com/Atheeek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/10 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            View more projects
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default ProjectsSection;