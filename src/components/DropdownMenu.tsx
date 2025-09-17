import React, { useCallback } from 'react';
import {
  Home, Briefcase, LayoutGrid, MessageSquare,
  Send, Github, Instagram, Linkedin
} from 'lucide-react';
import { Link } from 'react-scroll';

// Type for the props of a single menu item
interface MenuItemProps {
  icon: React.ElementType;
  text: string;
  to: string; // section id
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text, to, onClick }) => {
  const handleClick = useCallback(() => {
    // Close menu immediately on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // For mobile: close menu immediately and use native scroll
      onClick?.();
      
      // Use native scroll behavior for better mobile performance
      const element = document.getElementById(to);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      return;
    }
    
    // For desktop: use react-scroll with delay
    setTimeout(() => {
      onClick?.();
    }, 150);
  }, [to, onClick]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  if (isMobile) {
    // Use native anchor for mobile
    return (
      <a
        href={`#${to}`}
        onClick={handleClick}
        className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-150 group cursor-pointer touch-manipulation"
      >
        <Icon className="w-5 h-5 text-white/50 group-hover:text-lime-400 transition-colors duration-150" />
        <span>{text}</span>
      </a>
    );
  }

  // Use react-scroll for desktop
  return (
    <Link
      to={to}
      smooth={true}
      duration={400}
      spy={true}
      offset={-80}
      onClick={handleClick}
      className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-150 group cursor-pointer"
      activeClass="text-lime-400 font-semibold"
    >
      <Icon className="w-5 h-5 text-white/50 group-hover:text-lime-400 transition-colors duration-150" />
      <span>{text}</span>
    </Link>
  );
};

// Type for the DropdownMenu's props
interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void; // close menu when clicking a link
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop for mobile - helps with touch events */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[59] md:hidden"
          onClick={onClose}
        />
      )}
      
      <div
        className={`fixed top-28 right-4 md:right-20 w-auto bg-black/80 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 z-[60]
          transition-all duration-150 ease-out
          origin-top-right
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-[-10px] pointer-events-none'
          }`
        }
        style={{
          // Optimize for mobile performance
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        }}
      >
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Menu Section */}
          <div>
            <p className="text-white/40 text-sm mb-4 md:mb-6">Menu</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 md:gap-x-12">
              <MenuItem icon={Home} text="Home" to="hero" onClick={onClose} />
              <MenuItem icon={Briefcase} text="Works" to="projects" onClick={onClose} />
              <MenuItem icon={LayoutGrid} text="Portfolio" to="aboutme" onClick={onClose} />
              <MenuItem icon={LayoutGrid} text="Experience" to="experience" onClick={onClose} />
              <MenuItem icon={MessageSquare} text="Testimonial" to="testimonials" onClick={onClose} />
              <MenuItem icon={Send} text="Contact Form" to="contact" onClick={onClose} />
            </div>
          </div>

          {/* Social Network Section */}
          <div>
            <p className="text-white/40 text-sm mb-4 md:mb-6">Social Network</p>
            <div className="flex items-center gap-3 md:gap-4">
              <a 
                href="https://github.com/Atheeek/City-fix" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-150 touch-manipulation"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.instagram.com/atheekrhmn/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-150 touch-manipulation"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mahammad-atheek-rahman/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-150 touch-manipulation"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;