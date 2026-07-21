import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigationData } from '../data';

import InteractiveHoverButton from './portfolio/InteractiveHoverButton';
import HeroSection from './portfolio/HeroSection';
import AboutSection from './portfolio/AboutSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ExperienceSection from './portfolio/ExperienceSection';
import EducationSection from './portfolio/EducationSection';
import ContactSection from './portfolio/ContactSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // set correct nav state on mount (e.g. deep link / refresh mid-page)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const initials = navigationData.brand
    .split(' ')
    .map((w) => w[0])
    .slice(0, 3)
    .join('');

  return (
    <div className="min-h-screen bg-th-page text-th-heading overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-th-page/80 backdrop-blur-xl border-th-line'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto section-padding">
          <div className="flex justify-between items-center py-4">
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <span className="icon-tile h-9 w-9 font-display text-sm font-semibold">
                {initials}
              </span>
              <span className="font-serif text-lg tracking-tight text-th-heading hidden sm:block">
                {navigationData.brand}
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-8">
              {navigationData.menuItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative font-display text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-th-heading ${
                    activeSection === id ? 'text-th-heading' : 'text-th-muted'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-th-heading"
                    />
                  )}
                </button>
              ))}
            </div>

            <InteractiveHoverButton
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex !px-5 !py-2.5 !text-[12px]"
            >
              Get in touch
            </InteractiveHoverButton>
          </div>
        </div>
      </motion.nav>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
