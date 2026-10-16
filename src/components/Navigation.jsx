import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import resumePdf from '../assets/Venkadesh Pandi_ATS.pdf';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      // Hide on scroll down, show on scroll up
      if (currentY < 50) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#profile' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 px-[5%] sm:px-[6%] md:px-[12%] transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        {/* Left: Logo/Name */}
        <a href="#home" className="flex items-center gap-3 sm:gap-4 group transition-transform hover:opacity-80">
          <div className="font-display font-medium text-xl sm:text-2xl text-textMain tracking-wide">
            VK
          </div>
          <div className="h-5 w-px bg-border/60"></div>
          <span className="font-mono text-textMuted tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[0.6rem] sm:text-[0.65rem]">VENKADESH PANDI</span>
        </a>

        {/* Right: Desktop Navigation + Action */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {/* Nav Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex flex-col items-center gap-1.5 min-w-[70px]"
              >
                <span className="text-[0.65rem] font-mono tracking-[0.15em] uppercase text-textMuted group-hover:text-textMain transition-colors duration-300">
                  {link.name}
                </span>
                {/* Active Indicator */}
                <div className="flex items-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-[1px] bg-accent/30 flex-1"></div>
                  <div className="w-1 h-1 bg-accent rounded-full mx-1.5 shadow-[0_0_5px_rgba(10,232,216,0.8)]"></div>
                  <div className="h-[1px] bg-accent/30 flex-1"></div>
                </div>
              </a>
            ))}
          </div>

          {/* CV Actions: View and Download */}
          <div className="flex items-center gap-2 ml-2">
            <a 
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[0.65rem] font-mono tracking-[0.15em] uppercase text-textMuted border border-accent/20 hover:border-accent hover:text-accent px-4 py-2.5 transition-all duration-300"
              title="View CV in browser"
            >
              <span>VIEW CV</span>
              <span className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">↗</span>
            </a>
            <a 
              href={resumePdf}
              download="Venkadesh_Pandi_CV.pdf"
              className="group flex items-center gap-2 text-[0.65rem] font-mono tracking-[0.15em] uppercase bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-background px-4 py-2.5 transition-all duration-300 shadow-sm"
              title="Download CV PDF"
            >
              <span>DOWNLOAD</span>
              <span className="group-hover:translate-y-0.5 transition-transform text-xs">↓</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-textMain p-2 -mr-2 focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-xl md:hidden"
          >
            <div className="flex flex-col py-6 px-[6%] gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center py-2 text-[0.8rem] font-mono tracking-[0.15em] uppercase text-textMuted hover:text-textMain transition-colors"
                >
                  <span className="w-4 h-px bg-accent/50 mr-4"></span>
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a 
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 text-[0.7rem] font-mono tracking-[0.15em] uppercase text-textMuted border border-accent/20 hover:border-accent hover:text-accent px-6 py-3 transition-all duration-300 w-full"
                >
                  <span>VIEW CV</span>
                  <span className="text-accent text-xs">↗</span>
                </a>
                <a 
                  href={resumePdf}
                  download="Venkadesh_Pandi_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 text-[0.7rem] font-mono tracking-[0.15em] uppercase bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-background px-6 py-3 transition-all duration-300 w-full"
                >
                  <span>DOWNLOAD CV</span>
                  <span className="text-accent text-xs">↓</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
