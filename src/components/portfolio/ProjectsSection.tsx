import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import cmsImage from '@/assets/cms1.png';
import cognifyImage from '@/assets/cognify.png';
import igadsEcomImage from '@/assets/igads4.png';
import igadsLandingImage from '@/assets/igads5.png';
import schoolImage from '@/assets/school.png';

export function ThinLongArrowUpRight({ size = 32, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="16" y1="48" x2="48" y2="16" />
        <path d="M48 36 V16 H28" />
      </g>
    </svg>
  );
}

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: 'Complaint Management System', image: cmsImage, tags: ['React.js', 'TailwindCSS', 'GoogleMap API', 'Node.js', 'mongoDB'], date: '2025', company: 'SmartCity CMS', github: 'https://github.com/Atheeek/City-fix' },
    { id: 2, title: 'Cognify – Child Learning & Screening Platform', image: cognifyImage, tags: ['React.js', 'JWT Webtokens', 'Gamified Learning', 'AI Chatbot', 'Node.js', 'mongoDB', 'express'], date: '2025', company: 'Cognify', github: 'https://github.com/Atheeek/Cognify-project' },
    { id: 3, title: 'IGADS E-commerce Website', image: igadsEcomImage, tags: ['Shopify'], date: '2024', company: 'IGADS', github: 'https://igadsmobile.myshopify.com' },
    { id: 4, title: 'IGADS Landing Page', image: igadsLandingImage, tags: ['Typescript', 'TailwindCSS', '3D Animations', 'framer-motion'], date: '2024', company: 'IGADS', github: 'https://igads.vercel.app' },
    { id: 5, title: 'Modern School Website', image: schoolImage, tags: ['Typescript', 'TailwindCSS', 'Responsive UI'], date: '2023', company: 'School Project', github: 'https://tems-school.vercel.app/' },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cursorRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const nextProject = () => {
    if (isTransitioning) return;
    if (currentProject < projects.length - 1) {
      setIsTransitioning(true);
      setCurrentProject(currentProject + 1);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const prevProject = () => {
    if (isTransitioning) return;
    if (currentProject > 0) {
      setIsTransitioning(true);
      setCurrentProject(currentProject - 1);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;
    const threshold = 50;

    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
  };

  // Wheel handler for desktop
  const handleWheel = (e) => {
    e.preventDefault();
    if (isTransitioning) return;

    const deltaY = e.deltaY;
    const threshold = 5;

    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
  };

  useLayoutEffect(() => {
    if (cursorRef.current) {
      const cursor = cursorRef.current;
      cursor.style.transform = `translate(${cursorPos.x - 56}px, ${cursorPos.y - 56}px)`;
    }
  }, [cursorPos]);

  const project = projects[currentProject];

  return (
    <section 
      id="projects"
      className="relative h-screen w-full text-white overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-x' }}
    >
      {/* Custom cursor for desktop */}
      {hovering && (
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-50 w-28 h-28 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300 hidden md:flex"
        >
          <ThinLongArrowUpRight size={40} className="text-lime-300" />
        </div>
      )}

      {/* Project slide */}
      <div 
        className={`absolute inset-0 h-full w-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-black transition-all duration-600 ease-out ${
          isTransitioning ? 'opacity-90 scale-105' : 'opacity-100 scale-100'
        }`}
        key={project.id}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Date - Desktop only */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-16 text-white/50 text-sm hidden md:block">
            <p>DATE: {project.date}</p>
          </div>

          {/* Company - Desktop only */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-16 text-white/50 text-sm hidden md:block">
            <p>{project.company}</p>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevProject}
            disabled={currentProject === 0}
            className={`absolute top-1/2 -translate-y-1/2 left-2 md:left-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
              currentProject === 0 
                ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextProject}
            disabled={currentProject === projects.length - 1}
            className={`absolute top-1/2 -translate-y-1/2 right-2 md:right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
              currentProject === projects.length - 1 
                ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main content */}
          <div className="flex flex-col items-center gap-6 md:gap-10 w-full max-w-4xl px-4 py-8">
            {/* Label */}
            <p className="text-white/50 text-xs uppercase tracking-widest">MY WORK</p>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-normal text-center text-white leading-tight">
              {project.title}
            </h2>

            {/* Project image */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-2xl bg-white/[.03] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_120px_rgba(255,255,255,0.12)] hover:border-white/20 group overflow-hidden"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{ cursor: 'none' }}
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </a>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-3xl">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Mobile info */}
            <div className="flex justify-between w-full max-w-sm text-white/50 text-xs md:hidden">
              <p>DATE: {project.date}</p>
              <p>{project.company}</p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentProject(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-white w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;