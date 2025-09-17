import React from 'react';
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
  const handleClick = () => {
    // Add a small delay before closing to allow scroll to start
    setTimeout(() => {
      onClick?.();
    }, 100);
  };

  return (
    <Link
      to={to}
      smooth={true}
      duration={500} // Reduced from 700ms for faster scrolling
      spy={true}
      offset={-80}
      onClick={handleClick}
      className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-200 group cursor-pointer will-change-transform"
      activeClass="text-neon font-semibold"
    >
      <Icon className="w-5 h-5 text-white/50 group-hover:text-lime-400 transition-colors duration-200" />
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
    <div
      className={`fixed top-28 right-4 md:right-20 w-auto bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 z-[60]
        transition-all duration-200 ease-out transform-gpu will-change-transform
        origin-top-right
        ${isOpen 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 pointer-events-none'
        }`
      }
    >
      <div className="flex flex-col gap-10">
        {/* Menu Section */}
        <div>
          <p className="text-white/40 text-sm mb-6">Menu</p>
          <div className="grid grid-cols-2 gap-y-4 gap-x-12">
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
          <p className="text-white/40 text-sm mb-6">Social Network</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Atheeek/City-fix" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/atheekrhmn/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mahammad-atheek-rahman/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;