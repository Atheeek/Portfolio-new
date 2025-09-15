import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your map image from its location
import worldMapBg from '@/assets/world-map.png'; // <-- ADJUST THE PATH IF NEEDED

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'JAY COCO CHARLOTTE',
      role: 'Freelancer',
      company: 'italic',
      rating: 5,
      text: 'Working with Portz was a game-changer for our platform. Their UI/UX design expertise transformed our clunky website into a smooth, intuitive experience.',
      avatar: null
    },
    {
      id: 2,
      name: 'SARAH MITCHELL',
      role: 'Product Manager',
      company: 'TechCorp',
      rating: 5,
      text: 'Alexander\'s attention to detail and creative vision exceeded our expectations. The visual identity he created perfectly captured our brand essence.',
      avatar: null
    },
    {
      id: 3,
      name: 'MARCUS JOHNSON',
      role: 'CEO',
      company: 'StartupX',
      rating: 5,
      text: 'Professional, creative, and delivers on time. Alexander helped us launch our product with a stunning interface that users absolutely love.',
      avatar: null
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); 
    return () => clearInterval(interval);
  }, [activeTestimonial]);


  return (
    <section className="bg-black section-padding hero-bg-animation relative overflow-hidden">
      
      {/* 1. Map is now lower on mobile (items-end) and centered on desktop (md:items-center) */}
      <div
        className="absolute inset-0 z-0 opacity-20 flex justify-center items-end md:items-center"
      >
        {/* 2. Map is now bigger on mobile and constrained on desktop (md:max-w-6xl) */}
        <div 
          className="w-full h-full max-w-full max-h-full md:max-w-6xl md:max-h-6xl bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${worldMapBg})` }}
        ></div>
      </div>

      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-[400] font-poppins text-white mb-8">
            What Clients Say
          </h2>
        </div>

        <div className="max-w-4xl font-poppins font-[300] mx-auto relative">
          <div className="relative h-[26rem] overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={activeTestimonial}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) {
                    nextTestimonial();
                  } else if (info.offset.x > 50) {
                    prevTestimonial();
                  }
                }}
              >
                {/* Previous Testimonial (Visible on the left) */}
                <div className="absolute left-0 transform -translate-x-full scale-75 opacity-40">
                    <div className="w-96">
                        <div className="portfolio-card text-center relative p-4">
                        </div>
                    </div>
                </div>

                {/* Main Active Testimonial Card */}
                <div className="w-full max-w-3xl">
                  <div className="portfolio-card text-center relative">
                    <div className="flex justify-center gap-1 mb-8">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="absolute top-6 right-6 text-neon text-sm font-bold italic">
                      {testimonials[activeTestimonial].company}
                    </div>
                    <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-12 font-light max-w-3xl mx-auto">
                      "{testimonials[activeTestimonial].text}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <span className="text-white font-bold text-lg">
                          {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left text-sm">
                        <div className="text-white font-[400] ">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-white/60">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* Next Testimonial (Visible on the right) */}
                 <div className="absolute right-0 transform translate-x-full scale-75 opacity-40">
                    <div className="w-96">
                        <div className="portfolio-card text-center relative p-4">
                        </div>
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* 3. Arrows are now hidden on mobile (hidden) and visible on desktop (md:flex) */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 border border-white/10 rounded-full items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 z-20 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 border border-white/10 rounded-full items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 z-20 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-neon scale-125' 
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

export default TestimonialsSection;