import React from 'react';
import { motion } from 'framer-motion';

const EngineeringProfile = () => {
  return (
    <section id="profile" className="relative py-[75px] md:py-[120px] px-[6%] md:px-[12%] bg-background border-t border-border">
      <div className="max-w-7xl mx-auto w-full relative flex flex-col md:flex-row gap-8 md:gap-24">
        
        {/* Massive Section Number */}
        <div className="block w-full md:w-1/4 relative min-h-[90px] sm:min-h-[120px] md:min-h-[250px] mb-2 md:mb-0">
          <motion.span 
            initial={{ filter: 'drop-shadow(0px 0px 0px rgba(10,232,216,0))' }}
            whileInView={{ filter: 'drop-shadow(0px 0px 30px rgba(10,232,216,0.4))' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-display font-bold text-[5.5rem] sm:text-[7.5rem] md:text-[12rem] leading-none text-background [-webkit-text-stroke:1px_rgba(10,232,216,0.5)] select-none -ml-2 md:-ml-8 absolute top-0 left-2 md:left-0"
          >
            01
          </motion.span>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 flex flex-col justify-center pt-4 md:pt-8">
          <div className="mb-10 md:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-textMain tracking-tighter uppercase mb-6 font-bold">
              Engineering Profile
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accentSecondary"></div>
            </div>
          </div>

          <p className="text-textMuted text-lg leading-relaxed mb-10 max-w-3xl">
            <span className="text-textMain font-medium">Venkadesh Pandi</span> is a dedicated <span className="text-accent font-medium">Mechanical Designer</span> & Mechanical Design Engineer with two years of specialized industry experience in commercial & industrial kitchen engineering, turnkey equipment layout, and mechanical MEP coordination for large-scale facilities serving up to 14,000 meal packs per day. Certified in advanced HVAC design covering heat load calculation, duct sizing, AHU selection, and chilled water systems using Carrier HAP, Revit MEP, SolidWorks, and AutoCAD.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.7rem] text-textMuted tracking-widest uppercase mb-4">Core Competencies</p>
              <ul className="space-y-3">
                {[
                  'Heat Load Calculation',
                  'Airflow Management & Duct Design',
                  'AHU Selection & Chilled Water Systems',
                  'MEP Coordination',
                  'Equipment Selection & Sizing',
                  'Data Centre HVAC (Coursework)'
                ].map((item) => (
                  <li key={item} className="flex items-center text-textMain text-sm uppercase tracking-widest font-medium">
                    <span className="w-4 h-px bg-textMain mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-[0.7rem] text-textMuted tracking-widest uppercase mb-4">Software Tools</p>
              <ul className="space-y-3">
                {[
                  'HAP (Carrier)',
                  'Revit MEP',
                  'AutoCAD 2D/3D',
                  'SolidWorks (Certified)',
                  'McQuay Duct Sizer',
                  'MS Excel / MS Word'
                ].map((item) => (
                  <li key={item} className="flex items-center text-textMain text-sm uppercase tracking-widest font-mono">
                    <span className="w-4 h-px bg-accent mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <a href="#projects" className="group inline-flex items-center justify-center sm:justify-start gap-4 px-8 sm:px-10 py-3.5 sm:py-4 border border-border text-textMain font-mono tracking-[0.2em] uppercase text-xs hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto">
              <span>Explore Work</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringProfile;
