const FooterSection = () => {
const currentTime = new Date().toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Kolkata',
  hour12: false
});


  return (
    <footer id="contact" className="section-padding hero-bg-animation relative overflow-hidden border-t border-white/10">
      <div className="container-padding">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Contact */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:hello@portz.design" 
                className="text-2xl lg:text-3xl font-light text-white hover:text-neon transition-colors duration-300 block"
              >
                atheek163@gmail.com
              </a>
              
              <div className="space-y-3 text-white/60">
                <p>Ready to bring your vision to life?</p>
                <p>Let's create something amazing together.</p>
              </div>

              <button className="bg-neon text-black px-8 py-4 rounded-full hover:bg-neon-soft transition-all duration-300 font-medium mt-6">
                Start a Project
              </button>
            </div>
          </div>

          {/* Middle - Navigation */}
          <div>
            <h4 className="text-white/50 text-sm uppercase tracking-wider mb-6">Menu</h4>
            <nav className="space-y-4">
              {['Hero', 'Services', 'Works', 'Approach', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-white/70 hover:text-neon transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="mt-8">
              <h4 className="text-white/50 text-sm uppercase tracking-wider mb-6">Socials</h4>
             <div className="space-y-4">
  {[
    { name: 'Twitter (X)', url: 'https://x.com/Atheek163' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahammad-atheek-rahman/' },
    { name: 'Instagram', url: 'https://instagram.com/atheekrhmn' },
    { name: 'Github', url: 'https://github.com/Atheeek' }
  ].map((social) => (
    <a 
      key={social.name}
      href={social.url}
      target="_blank"           // opens in new tab
      rel="noopener noreferrer" // security best practice
      className="block text-white/70 hover:text-neon transition-colors duration-300"
    >
      {social.name}
    </a>
  ))}
</div>

            </div>
          </div>

          {/* Right - Local Time & Brand */}
          <div className="lg:text-right">
            <h4 className="text-white/50 text-sm uppercase tracking-wider mb-6">Local Time</h4>
            <div className="text-2xl font-bold text-white mb-2">
              {currentTime} (GMT -7)
            </div>
            <p className="text-white/60 mb-8">Bangalore, India</p>

            {/* Large Brand Name */}
            <div className="mt-16 lg:mt-24">
              <div className="text-6xl lg:text-8xl font-bold text-white/10 leading-none select-none">
                Portz
              </div>
              <div className="text-right mt-4">
                <span className="text-neon text-sm font-medium">™</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-12 mt-12 border-t border-white/10">
          <p className="text-white/50 text-sm">© Atheek 2025</p>
          
          <div className="flex gap-8 mt-4 lg:mt-0">
            <a href="#" className="text-white/50 hover:text-neon transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-neon transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>

          {/* Lovable Badge */}
          <div className="mt-4 lg:mt-0 text-xs text-white/30">
            <span>Built by</span>
            <a href="https://lovable.dev" className="text-neon hover:text-neon-soft transition-colors duration-300 ml-1">
              Atheek
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;