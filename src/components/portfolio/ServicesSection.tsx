import heartImage from '@/assets/3d-heart.jpg';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">WHAT YOU GET</p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm a digital products designer and webflow developer that passionate with aesthetic
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Heart Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96">
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border border-gray-200"></div>
              
              {/* Inner Content Circle */}
              <div className="absolute inset-8 rounded-full bg-black overflow-hidden">
                <img 
                  src={heartImage} 
                  alt="Futuristic 3D Heart - Premium Design Services" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-8 w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-12 left-4 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="absolute top-1/3 left-0 w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Right - Services Content */}
          <div className="space-y-8">
            <div className="relative">
              {/* Large Background Circle */}
              <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full border border-gray-200/50 -z-10"></div>
              
              <div className="relative bg-white rounded-full p-8 inline-block mb-6">
                <span className="text-gray-600 text-sm">● You will get</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                All-in-one<br/>
                Services
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Transforming Visions into Visual Excellence:
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-700 font-medium">UI/UX Design & Research</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-700 font-medium">Visual Identity & Branding</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-700 font-medium">Webflow Development</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-700 font-medium">Art Direction</span>
                </div>
              </div>

              <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-neon hover:text-black transition-all duration-300 font-medium">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;