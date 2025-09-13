import { X, Dribbble, Instagram } from 'lucide-react';
import aboutPortrait from '@/assets/about-portrait.jpg';

const AboutSection = () => {
  return (
    <section className="section-padding hero-bg-animation relative overflow-hidden">
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
                  alt="Alexander Portz - About Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-6">NUMERIC</p>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Making Your World Pain Free for Experience.{' '}
                <span className="text-white/40">Offers more than just</span>
              </h2>

              <div className="space-y-6">
                <p className="text-white/70 text-lg leading-relaxed">
                  I'm a passionate digital designer with over 5 years of experience creating 
                  exceptional user experiences and visual identities. My approach combines 
                  aesthetic excellence with functional design principles.
                </p>

                <p className="text-white/70 text-lg leading-relaxed">
                  Specialized in UI/UX design, visual branding, and art direction for 
                  digital products. I believe great design should not only look beautiful 
                  but also solve real problems and create meaningful connections.
                </p>
              </div>
            </div>

            {/* Skills Stats */}
            <div className="grid grid-cols-2 gap-8 py-8">
              <div>
                <div className="text-3xl font-bold text-neon mb-2">150+</div>
                <p className="text-white/60">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon mb-2">50+</div>
                <p className="text-white/60">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon mb-2">5+</div>
                <p className="text-white/60">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon mb-2">25+</div>
                <p className="text-white/60">Awards Won</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 interactive-hover"
              >
                <X className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 interactive-hover"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 interactive-hover"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <button className="bg-neon text-black px-8 py-4 rounded-full hover:bg-neon-soft transition-all duration-300 font-medium">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;