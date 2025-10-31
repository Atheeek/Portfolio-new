import { Linkedin, Github, X } from 'lucide-react';
import aboutPortrait from '@/assets/atheek.png'; // Replace with your actual portrait

const AboutSection = () => {
  return (
    <section id='aboutme' className="section-padding hero-bg-animation relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="text-white/5 font-bold text-[12rem] lg:text-[20rem] leading-none select-none">
          about
        </div>
      </div>

      <div className="container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Portrait */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10">
                <img 
                  src={aboutPortrait} 
                  alt="Atheek Rahman - Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-6">About Me</p>
              
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
  Engineering Scalable & Intelligent Systems.{' '}
  <span className="text-white/40">Full-stack & DevOps.</span>
</h2>


              <div className="space-y-6">
  <p className="text-white/70 text-lg leading-relaxed">
    I’m a Full Stack Developer and DevOps Engineer from Mangalore who loves building products that are as functional as they are visually engaging. I got into coding during college and have been hooked on solving real-world problems and making tech feel more human ever since.
  </p>

  <p className="text-white/70 text-lg leading-relaxed">
    I work with the MERN stack — React, Node.js, MongoDB, and Tailwind CSS — with a strong focus on clean, intuitive frontend design. I’m detail-driven, fast at problem solving, and passionate about automation through Docker and DevOps. My goal is to create scalable, meaningful solutions at the intersection of AI, design, and development.
  </p>
</div>

            </div>

            {/* Skills Stats */}
            <div className="grid grid-cols-2 gap-8 py-8">
              <div>
                <div className="text-3xl font-bold text-neon mb-2">8+</div>
                <p className="text-white/60">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon mb-2">3+</div>
                <p className="text-white/60">Clients / Collaborations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon mb-2">1+</div>
                <p className="text-white/60">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon mb-2">2+</div>
                <p className="text-white/60">Internships / Achievements</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/mahammad-atheek-rahman/" 
                target="_blank"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 interactive-hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Atheeek/" 
                target="_blank"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 interactive-hover"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/Atheek163" 
                target="_blank"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 interactive-hover"
              >
                <X className="w-5 h-5" />
              </a>
            </div>

            {/* Download Resume */}
            <a href="/Atheek_Resume.pdf" download>
              <button className="bg-neon text-black px-8 mt-5 py-4 rounded-full hover:bg-neon-soft transition-all duration-300 font-medium">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
