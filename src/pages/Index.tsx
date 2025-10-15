import HeroSection from '@/components/portfolio/HeroSection';
import { useEffect } from 'react';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import FooterSection from '@/components/portfolio/FooterSection';

const Index = () => {
  useEffect(() => {
    const hashIsProjects = window.location.hash === '#projects';
    const savedY = sessionStorage.getItem('projectsScrollY');
    const savedIndex = sessionStorage.getItem('projectsIndex');

    if (savedY) {
      const y = parseInt(savedY, 10);
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: y, behavior: 'auto' });
      }
      sessionStorage.removeItem('projectsScrollY');
      return;
    }

    if (hashIsProjects) {
      // If we have an index of the slide, attempt to estimate scroll position for that slide
      const index = savedIndex ? parseInt(savedIndex, 10) : 0;
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        // Our ScrollTrigger timeline pins and advances roughly one viewport per slide
        const targetY = sectionTop + index * window.innerHeight;
        window.scrollTo({ top: targetY, behavior: 'auto' });
      } else {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};

export default Index;