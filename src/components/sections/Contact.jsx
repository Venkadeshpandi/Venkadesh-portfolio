import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import resumePdf from '../../assets/Venkadesh Pandi_ATS.pdf';

const Contact = () => {
  return (
    <section id="contact" className="py-[75px] md:py-[140px] px-[6%] md:px-[12%] relative bg-background text-textMain border-t border-border">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-24">
        
        {/* Massive Section Number */}
        <div className="block w-full md:w-1/4 relative min-h-[90px] sm:min-h-[120px] md:min-h-[250px] mb-2 md:mb-0">
          <motion.span 
            initial={{ filter: 'drop-shadow(0px 0px 0px rgba(10,232,216,0))' }}
            whileInView={{ filter: 'drop-shadow(0px 0px 30px rgba(10,232,216,0.4))' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-display font-bold text-[5.5rem] sm:text-[7.5rem] md:text-[12rem] leading-none text-background [-webkit-text-stroke:1px_rgba(10,232,216,0.5)] select-none -ml-2 md:-ml-8 absolute top-0 left-2 md:left-0"
          >
            05
          </motion.span>
        </div>

        <div className="w-full md:w-3/4 pt-4 md:pt-8">
          <div className="mb-12 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-textMain tracking-tighter font-bold uppercase mb-6">Contact</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accentSecondary"></div>
            </div>
          </div>
          
          <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-light text-textMain mb-8 md:mb-12 tracking-tighter uppercase leading-relaxed">
            OPEN TO HVAC / MEP / MECHANICAL DESIGN OPPORTUNITIES
          </h3>
          
          <p className="text-textMuted mb-12 max-w-2xl leading-relaxed">
            Open to relocation to Europe. Seeking HVAC Design Engineer opportunities to contribute to design-office workflows, MEP coordination, and large-scale engineering projects.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10 md:mb-16">
            
            <div className="flex flex-col items-start border-l border-border pl-5 md:pl-6">
              <div className="text-textMain mb-3 md:mb-4">
                <Mail size={22} strokeWidth={1} />
              </div>
              <p className="text-[0.65rem] text-textMuted uppercase tracking-[0.2em] mb-2">Email</p>
              <a href="mailto:venkadeshpandis@gmail.com" className="text-textMain text-xs sm:text-sm tracking-wider sm:tracking-widest hover:text-textMuted transition-colors font-medium break-all sm:break-normal">
                venkadeshpandis@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-start border-l border-border pl-5 md:pl-6">
              <div className="text-textMain mb-3 md:mb-4">
                <Phone size={22} strokeWidth={1} />
              </div>
              <p className="text-[0.65rem] text-textMuted uppercase tracking-[0.2em] mb-2">Phone</p>
              <a href="tel:+919944722607" className="text-textMain text-xs sm:text-sm tracking-wider sm:tracking-widest hover:text-textMuted transition-colors font-medium">
                +91 99447 22607
              </a>
            </div>

            <div className="flex flex-col items-start border-l border-border pl-5 md:pl-6">
              <div className="text-textMain mb-3 md:mb-4">
                <MapPin size={22} strokeWidth={1} />
              </div>
              <p className="text-[0.65rem] text-textMuted uppercase tracking-[0.2em] mb-2">Location</p>
              <p className="text-textMain text-xs sm:text-sm tracking-wider sm:tracking-widest font-medium">Coimbatore, India</p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
            <a 
              href="mailto:venkadeshpandis@gmail.com" 
              className="inline-block text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-accent/10 border border-accent text-accent font-mono tracking-[0.2em] uppercase text-xs transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-[0_0_20px_rgba(10,232,216,0.3)]"
            >
              GET IN TOUCH
            </a>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-center px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-textMain font-mono tracking-[0.2em] uppercase text-xs transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <span>VIEW CV</span>
              <span className="text-accent text-xs">↗</span>
            </a>
            <a 
              href={resumePdf} 
              download="Venkadesh_Pandi_CV.pdf"
              className="inline-flex items-center justify-center gap-2 text-center px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-textMain font-mono tracking-[0.2em] uppercase text-xs transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <span>DOWNLOAD CV</span>
              <span className="text-accent text-xs">↓</span>
            </a>
          </div>

          {/* Site Footer & SEO Credit Bar */}
          <div className="mt-20 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMuted">
            <p>
              © {new Date().getFullYear()} <span className="text-textLight font-medium">Venkadesh Pandi</span> (Venkdesh Pandi). All rights reserved.
            </p>
            <p className="text-[0.68rem] tracking-wider uppercase">
              Mechanical Designer • Industrial Kitchens & HVAC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
