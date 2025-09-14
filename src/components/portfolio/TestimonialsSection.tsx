import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding hero-bg-animation relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        {/* Dotted world map pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Continental outlines suggestion */}
        <div className="absolute top-1/4 left-1/4 w-64 h-32 border-l-2 border-t-2 border-white/10 rounded-tl-full"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-24 border-r-2 border-b-2 border-white/10 rounded-br-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-32 h-16 border border-white/10 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 text-neon text-2xl font-bold opacity-30">©</div>
      <div className="absolute top-1/2 right-12 text-white/20 text-6xl font-bold">.....</div>

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-[400] font-poppins text-white mb-8">
            What Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card text-center relative">
            {/* Stars Rating */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Company Badge */}
            <div className="absolute top-6 right-6 text-neon text-sm font-bold italic">
              {testimonials[activeTestimonial].company}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-12 font-light max-w-3xl mx-auto">
              "{testimonials[activeTestimonial].text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white font-bold text-lg">
                  {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="text-white font-[400] text-lg">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-white/60">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-neon scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Side Testimonial Snippets */}
        {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="text-white/30 text-sm max-w-xs">
            <p className="mb-2">"Their motion design skills are exceptional. They created a series of animated videos for our marketing campaign that were both eye-catching and informative."</p>
            <div className="text-xs text-white/20">WEB DESIGNER</div>
          </div>
        </div>

        <div className="absolute right-8 top-2/3 hidden xl:block">
          <div className="text-white/30 text-sm max-w-xs text-right">
            <p className="mb-2">"Thanks for the support of Portz, who have been with our business for more than 3 years. Starting from humble journey with many exciting experiences and funny moments. A long journey."</p>
            <div className="text-xs text-white/20">A MANAGER</div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;