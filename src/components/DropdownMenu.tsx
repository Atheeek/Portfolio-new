import React from 'react';
import {
  Home, Briefcase, LayoutGrid, Award, BarChart2, MessageSquare,
  BadgeDollarSign, HelpCircle, Send, Github, Instagram, Dribbble,
  Linkedin
} from 'lucide-react';

// Type for the props of a single menu item
interface MenuItemProps {
  icon: React.ElementType;
  text: string;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text, href = "#" }) => (
  <a href={href} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group">
    <Icon className="w-5 h-5 text-white/50 group-hover:text-lime-400 transition-colors" />
    <span>{text}</span>
  </a>
);

// Type for the DropdownMenu's props
interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void; // Keep onClose in case you want to close it by clicking outside
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      // --- KEY CHANGES ARE HERE ---
      className={`fixed top-28 right-4 md:right-20 w-auto bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 z-[60]
        transition-all duration-300 ease-in-out transform-gpu
        origin-top-right // Animate from the top-right corner
        ${isOpen 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 pointer-events-none' // Fade and scale out
        }`
      }
    >
      <div className="flex flex-col gap-10">
        {/* Menu Section */}
        <div>
          <p className="text-white/40 text-sm mb-6">Menu</p>
          <div className="grid grid-cols-2 gap-y-4 gap-x-12">
  <MenuItem icon={Home} text="Home" href="#home" />
  <MenuItem icon={Briefcase} text="Works" href="#projects" />
  <MenuItem icon={LayoutGrid} text="Portfolio" href="#portfolio" />
  {/* <MenuItem icon={BarChart2} text="Numeric" href="#numeric" /> */}
  {/* <MenuItem icon={HelpCircle} text="FAQs" href="#faqs" /> */}
  <MenuItem icon={LayoutGrid} text="Experience" href="#experience" />
  {/* <MenuItem icon={Briefcase} text="What You Get" href="#what-you-get" /> */}
  {/* <MenuItem icon={Award} text="Awards" href="#awards" /> */}
  <MenuItem icon={MessageSquare} text="Testimonial" href="#testimonials" />
  {/* <MenuItem icon={BadgeDollarSign} text="Pricing" href="#pricing" /> */}
  <MenuItem icon={Send} text="Contact Form" href="#contact" />
</div>

        </div>

        {/* Social Network Section */}
        <div>
          <p className="text-white/40 text-sm mb-6">Social Network</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Atheeek/City-fix" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/atheekrhmn/" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mahammad-atheek-rahman/" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;