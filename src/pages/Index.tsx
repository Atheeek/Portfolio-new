import HeroSection from '@/components/portfolio/HeroSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import FooterSection from '@/components/portfolio/FooterSection';

const Index = () => {
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