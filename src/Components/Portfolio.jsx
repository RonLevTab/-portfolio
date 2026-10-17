import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationData } from '../data';

import { SHELL, PillButton } from './portfolio/shared';
import FlowRibbon from './portfolio/FlowRibbon';
import HeroSection from './portfolio/HeroSection';
import AboutSection from './portfolio/AboutSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ExperienceSection from './portfolio/ExperienceSection';
import EducationSection from './portfolio/EducationSection';
import ContactSection from './portfolio/ContactSection';

const SECTION_IDS = navigationData.menuItems.map((m) => m.id);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      const scrollPosition = window.scrollY + 120;
      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          // document-relative: the sections sit inside a positioned wrapper, so offsetTop would not do
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // set correct nav state on mount (e.g. deep link / refresh mid-page)
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // the phone menu closes on Escape or a tap outside, focus back on its button
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!menuRef.current?.contains(e.target) && !menuButtonRef.current?.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const monogram = navigationData.brand[0];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-th-page text-th-heading">
      {/* Navigation: a transparent row at the top of the hero, a glass pill once the page scrolls */}
      <motion.header
        initial={reduced ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className={`${SHELL} pt-3 md:pt-4`}>
          <div className={`nav-bar ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3"
              aria-label={`${navigationData.brand}, back to top`}
            >
              <span className="logo-mark h-9 w-9 text-[17px]">{monogram}</span>
              <span className="hidden font-body text-[16px] font-medium tracking-tight text-th-heading sm:block">
                {navigationData.brand}
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
              {navigationData.menuItems.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  aria-current={activeSection === id ? 'true' : undefined}
                  className={`nav-link ${activeSection === id ? 'is-active' : ''}`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <PillButton size="sm" onClick={() => scrollToSection('contact')} className="hidden sm:inline-flex">
                Get in touch
              </PillButton>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="icon-well h-11 w-11 rounded-full md:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-menu"
                ref={menuRef}
                aria-label="Sections"
                initial={reduced ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="glass-card mt-2 flex flex-col p-2 md:hidden"
              >
                {navigationData.menuItems.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    aria-current={activeSection === id ? 'true' : undefined}
                    className={`flex min-h-[44px] items-center justify-between rounded-2xl px-4 font-body text-[15px] transition ${
                      activeSection === id ? 'bg-th-surface/70 text-th-heading' : 'text-th-body hover:bg-th-surface/50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <PillButton onClick={() => scrollToSection('contact')} className="mt-2 w-full sm:hidden">
                  Get in touch
                </PillButton>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* the moving colour ribbon fills the hero, then snakes behind every section */}
      <main className="relative isolate">
        <FlowRibbon />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}
