import React, { Suspense, lazy, useState, useRef, useEffect } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import heroPortrait from '@/assets/ChatGPT Image Sep 14, 2025, 01_48_30 PM.png';
import neonLogo from "@/assets/ChatGPT Image Sep 14, 2025, 12_58_26 AM.png";
import DropdownMenu from '../DropdownMenu';

// --- (NavBar and FallbackBackground components remain the same) ---
const NavBar: React.FC<any> = ({ onMenuClick, isMenuOpen }) => {
  // ... (No changes here)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 rounded-b-[50px] pt-2 backdrop-blur-md bg-black border-b border-white/10 mx-4 md:mx-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-1 lg:px-8">
        <div className="hidden items-center gap-2 md:flex">
          <div className="h-2 w-2 rounded-full bg-[rgb(133,238,0)]"></div>
          <span className="text-[18px] text-white/70">Bangalore, India</span>
        </div>
        <div className="flex items-center">
          <a href="#hero">
            <img
              src={neonLogo}
              alt="Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain cursor-pointer"
            />
          </a>
        </div>
        <button
          onClick={onMenuClick}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-white/90 relative overflow-hidden"
        >
          <div className={`grid grid-cols-2 gap-0.5 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
            <div className={`w-2 h-2 border border-black transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'bg-white'}`} />
            <div className={`w-2 h-2 border border-black transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'bg-white'}`} />
            <div className={`w-2 h-2 border border-black transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'bg-white'}`} />
            <div className={`w-2 h-2 border border-black transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'bg-white'}`} />
          </div>
        </button>
      </div>
    </nav>
  );
};

const FallbackBackground: React.FC = () => (
  // ... (No changes here)
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-lime-300/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-lime-300/10 rounded-full blur-2xl float-animation"></div>
  </div>
);

// NEW: Loading Overlay Component
const LoadingOverlay: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => (
  <div
    className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${
      !isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <img
      src={neonLogo}
      alt="Loading..."
      className="h-24 w-24 md:h-32 md:w-32 object-contain animate-pulse"
    />
  </div>
);


const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  // Your existing visibility logic (great for performance!)
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);
  const heroRef = useRef<HTMLElement>(null);

  // NEW: State to track if the Spline scene is loaded
  const [isSceneLoaded, setIsSceneLoaded] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      {/* NEW: Render the loading overlay */}
      <LoadingOverlay isLoaded={isSceneLoaded} />

      <section ref={heroRef} id='hero' className="relative min-h-screen bg-black text-white overflow-hidden">
        <Suspense fallback={<FallbackBackground />}>
          <div className="absolute top-0 left-0 w-full h-full z-0">
            {isHeroVisible && (
              <Spline 
                scene="https://prod.spline.design/Noj8603bFR7SjxGz/scene.splinecode" 
                // MODIFIED: Add the onLoad event handler
                onLoad={() => setIsSceneLoaded(true)}
              />
            )}
          </div>
        </Suspense>

        <NavBar onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />

        {/* MODIFIED: Wrap content and control its visibility */}
        <div 
          className={`container mx-auto px-6 relative z-10 transition-opacity duration-1000 ${
            isSceneLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* (The rest of your hero section content remains the same) */}
          <div className="grid sm:grid-cols-2 gap-x-12 items-center min-h-screen pt-28 pb-16 lg:pt-20">
            <div className="flex flex-col pt-14 md:pt-24 justify-center lg:order-1">
              <div className="text-left">
                <p className="text-lg ml-0 md:ml-6 font-light">
                  <span className="text-white/70">Hello </span>
                  <span className="text-white">My name </span>
                  <span className="text-white/70">is</span>
                </p>
                <h1 className="font-sulphur text-6xl leading-none mt-4 font-normal md:text-9xl lg:text-[157px] lg:leading-[128px]">
                  <span className="text-[rgb(133,238,0)]">Atheek</span><br />
                  <span>rahman</span>
                </h1>
              </div>
              <div className="hidden lg:flex gap-4 pt-12">
                <a href="#projects" className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-300">
                  View My Works
                </a>
                <a href="#contact" className="px-8 py-3 bg-white text-black rounded-full flex items-center gap-2 hover:bg-[rgb(133,238,0)] transition-colors duration-300">
                  Contact Me
                  <ArrowDown className="w-5 h-5 rotate-[-45deg]" />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center w-full my-10 lg:my-0 lg:order-2">
              <div className="relative w-full max-w-sm">
                <div className="relative w-full aspect-[10/13] rounded-[2rem] overflow-hidden">
                  <img
                    src={heroPortrait}
                    alt="Portrait"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute right-4 bottom-6 space-y-3">
                  <a href="https://github.com/Atheeek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/25 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[rgb(133,238,0)] hover:text-black transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/mahammad-atheek-rahman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/25 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[rgb(133,238,0)] hover:text-black transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/atheekrhmn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/25 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[rgb(133,238,0)] hover:text-black transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:hidden col-span-1 space-y-8 lg:order-3">
              <div className="flex font-poppins items-center gap-2 text-white/50 text-sm">
                <span>Scroll</span>
                <span className="font-[400] text-white">down</span>
                <ArrowDown className="w-4 text-white h-4" />
              </div>
              <div className="space-y-4 w-full">
                <a href="#projects" className="group w-full flex items-center justify-between p-2 pl-6 border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-300">
                  <span className="text-white text-lg">View My Works</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[rgb(133,238,0)] transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black" />
                  </div>
                </a>
                <a href="#contact" className="group w-full flex items-center justify-between p-2 pl-6 bg-white rounded-full hover:bg-[rgb(133,238,0)] transition-colors duration-300">
                  <span className="text-black text-lg font-medium">Contact Me</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex font-poppins absolute bottom-8 left-8 items-center gap-2 text-white/50 text-[16px]">
            <span>Scroll</span>
            <span className="font-[400] text-white">down</span>
            <ArrowDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </section>

      <DropdownMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default HeroSection;