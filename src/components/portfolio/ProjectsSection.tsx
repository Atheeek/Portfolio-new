import { useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Lenis from 'lenis';

import cmsImage from '@/assets/cms1.png';
import cognifyImage from '@/assets/cognify.png';
import igadsEcomImage from '@/assets/igads4.png';
import igadsLandingImage from '@/assets/igads5.png';
import schoolImage from '@/assets/school.png';

gsap.registerPlugin(ScrollTrigger);

// Throttle function for performance
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const ProjectsSection = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Complaint Management System', 
      image: cmsImage, 
      tags: ['React.js', 'TailwindCSS', 'GoogleMap API', 'Node.js', 'mongoDB'], 
      date: '2025', 
      company: 'SmartCity CMS', 
      github: 'https://github.com/Atheeek/City-fix' 
    },
    { 
      id: 2, 
      title: 'Cognify – Child Learning & Screening Platform', 
      image: cognifyImage, 
      tags: ['React.js', 'JWT Webtokens', 'Gamified Learning', 'AI Chatbot', 'Node.js', 'mongoDB', 'express'], 
      date: '2025', 
      company: 'Cognify', 
      github: 'https://github.com/Atheeek/Cognify-project' 
    },
    { 
      id: 3, 
      title: 'IGADS E-commerce Website', 
      image: igadsEcomImage, 
      tags: ['Shopify'], 
      date: '2024', 
      company: 'IGADS', 
      github: 'https://igadsmobile.myshopify.com' 
    },
    { 
      id: 4, 
      title: 'IGADS Landing Page', 
      image: igadsLandingImage, 
      tags: ['Typescript', 'TailwindCSS', '3D Animations', 'framer-motion'], 
      date: '2024', 
      company: 'IGADS', 
      github: 'https://igads.vercel.app' 
    },
    { 
      id: 5, 
      title: 'Modern School Website', 
      image: schoolImage, 
      tags: ['Typescript', 'TailwindCSS', 'Responsive UI'], 
      date: '2023', 
      company: 'School Project', 
      github: 'https://tems-school.vercel.app/' 
    },
  ];

  const componentRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const isAnimatingRef = useRef(false);

  // Detect mobile device
  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttled mouse move for better performance
  const handleMouseMove = useMemo(
    () => throttle((e: React.MouseEvent) => {
      if (!isMobile && !isAnimatingRef.current) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    }, 16), // ~60fps
    [isMobile]
  );

  // Optimized Lenis setup
  useLayoutEffect(() => {
    // Configure ScrollTrigger for mobile optimization
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true,
      limitCallbacks: true
    });

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Mobile optimizations
      touchMultiplier: isMobile ? 1.5 : 2,
      syncTouch: true,
      syncTouchLerp: isMobile ? 0.1 : 0.075,
      wheelMultiplier: isMobile ? 0.8 : 1,
      lerp: isMobile ? 0.08 : 0.1,
      infinite: false,
      gestureOrientation: 'vertical',
      // Prevent overscroll issues on mobile
      prevent: (node) => node.classList.contains('no-scroll')
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      if (!isAnimatingRef.current) {
        ScrollTrigger.update();
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isMobile]);

  // Optimized GSAP animations
  useLayoutEffect(() => {
    if (!componentRef.current || slidesRef.current.length === 0) return;

    let ctx = gsap.context(() => {
      const slides = slidesRef.current;
      
      // Hardware acceleration and performance optimizations
      slides.forEach((slide, i) => {
        if (slide) {
          // Force hardware acceleration
          gsap.set(slide, {
            force3D: true,
            transformOrigin: "50% 50%",
            backfaceVisibility: "hidden",
            perspective: 1000,
            willChange: "transform"
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: () => `+=${(slides.length - 1) * (isMobile ? 800 : 1000)}`,
          pin: true,
          scrub: isMobile ? 1 : 0.5, // Less aggressive scrubbing on mobile
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: isMobile ? 0.3 : 0.5,
            ease: 'power2.inOut',
            delay: isMobile ? 0.05 : 0.1
          },
          invalidateOnRefresh: true,
          onUpdate: () => {
            isAnimatingRef.current = true;
          },
          onScrubComplete: () => {
            isAnimatingRef.current = false;
          }
        },
        onComplete: () => {
          isAnimatingRef.current = false;
        }
      });

      slides.forEach((slide, i) => {
        if (i > 0 && slide) {
          tl.from(slide, { 
            yPercent: 100, 
            ease: 'power2.inOut',
            force3D: true
          });
        }
      });

    }, componentRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Optimized cursor animation
  useLayoutEffect(() => {
    if (!isMobile && cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: cursorPos.x - 48,
        y: cursorPos.y - 48,
        duration: 0.15,
        ease: 'power2.out',
        force3D: true,
        willChange: 'transform'
      });
    }
  }, [cursorPos, isMobile]);

  const handleProjectClick = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section 
      id="projects"
      ref={componentRef}
      className="relative h-screen text-white overflow-hidden font-sans bg-black"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      style={{
        // Mobile optimizations
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'contain',
        touchAction: 'pan-y',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        transform: 'translateZ(0)', // Force hardware acceleration
        willChange: 'scroll-position'
      }}
    >
      {/* Custom cursor - only on desktop */}
      {hovering && !isMobile && (
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-50 w-24 h-24 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <ArrowUpRight className="w-8 h-8 text-lime-400"/>
        </div>
      )}

      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            if (el) slidesRef.current[index] = el;
          }}
          className="absolute inset-0 h-full w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Date and company info - hidden on mobile for cleaner look */}
            <div className="absolute ml-5 top-1/2 -translate-y-1/2 left-8 md:left-16 text-white/50 text-sm hidden lg:block">
              <p>DATE: {project.date}</p>
            </div>
            <div className="absolute mr-5 top-1/2 -translate-y-1/2 right-8 md:right-16 text-white/50 text-sm hidden lg:block">
              <p>{project.company}</p>
            </div>

            {/* Navigation buttons - optimized for mobile */}
            <button 
              className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main content */}
            <div className="flex flex-col items-center gap-6 md:gap-10 w-full max-w-4xl px-4">
              <p className="text-white/50 text-xs uppercase mt-10 tracking-widest">MY WORK</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-center text-white leading-tight px-4">
                {project.title}
              </h2>
              
              {/* Project image with optimizations */}
              <div
                className="w-full max-w-2xl bg-white/[.03] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm overflow-hidden touch-manipulation"
                style={{ 
                  cursor: isMobile ? 'pointer' : 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
                onMouseEnter={() => !isMobile && setHovering(true)}
                onMouseLeave={() => !isMobile && setHovering(false)}
                onClick={() => handleProjectClick(project.github)}
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-300 hover:scale-105"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center px-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-white/80 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-specific project info */}
              <div className="flex justify-between w-full max-w-sm text-white/50 text-sm md:hidden">
                <span>{project.date}</span>
                <span className="text-right truncate ml-4">{project.company}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;