import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import resumePdf from '../assets/Venkadesh Pandi_ATS.pdf';
import './Hero.css';

const Hero = () => {
  return (
    <section className="min-h-[85vh] bg-heroBg flex items-center px-[6%] md:px-[12%] text-textMain overflow-hidden pt-20" id="home">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 mt-12 md:mt-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-[50%] text-left flex flex-col items-start relative z-20">
          
          <div className="flex items-center gap-4 mb-6 sm:mb-8 -ml-0 md:-ml-12">
            <div className="h-px w-8 bg-accent/60"></div>
            <p className="font-mono text-accent/80 text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase">Designing comfort. Engineering performance.</p>
          </div>

          <h1 className="font-display font-bold uppercase text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] leading-[0.88] sm:leading-[0.85] mb-3 md:mb-2 tracking-normal text-[#f4f2eb] drop-shadow-md">
            <span className="block">VENKADESH</span>
            <span className="block">PANDI</span>
          </h1>

          <h2 className="font-display font-normal uppercase text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] text-textLight tracking-wide mb-6 md:mb-8">
            MECHANICAL DESIGN ENGINEER
          </h2>
          
          <div className="text-xs sm:text-sm md:text-base font-mono tracking-[0.1em] uppercase text-textMuted mb-5 md:mb-6">
            Mechanical Design Professional
          </div>
          
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-[0.65rem] md:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase text-textLight mb-8 md:mb-12">
            <span>2+ Years Experience</span>
            <div className="h-3 w-px bg-border"></div>
            <span>Industrial Kitchens</span>
            <div className="h-3 w-px bg-border"></div>
            <span>MEP</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-4 px-7 sm:px-8 py-3.5 sm:py-4 bg-accent/10 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 shadow-[0_0_20px_rgba(10,232,216,0.15)] hover:shadow-[0_0_25px_rgba(10,232,216,0.35)]"
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase font-medium">VIEW CV</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href={resumePdf} 
              download="Venkadesh_Pandi_CV.pdf"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 border border-border/80 hover:border-accent text-textLight hover:text-accent transition-all duration-300"
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase">DOWNLOAD CV</span>
              <span className="text-accent group-hover:translate-y-0.5 transition-transform text-xs">↓</span>
            </a>
          </div>
        </div>
        
        {/* Right Content - 3D HUD Visual */}
        <div className="w-full lg:w-[50%] flex justify-center mt-12 lg:mt-0 relative h-[340px] sm:h-[440px] lg:h-[600px] items-center">
          
          {/* Main 3D Container */}
          <div className="hud-3d-container w-full h-full relative flex items-center justify-center">
            
            {/* Background Orbital Tracks */}
            <div className="hud-radar-bg absolute w-[130%] aspect-square rounded-full flex items-center justify-center pointer-events-none">
                {/* Track 1 (Outer) */}
                <div className="orbital-track track-1">
                  <div className="orbital-node node-1">
                    <div className="node-core"></div>
                  </div>
                </div>
                {/* Track 2 */}
                <div className="orbital-track track-2">
                  <div className="orbital-node node-2">
                    <div className="node-core"></div>
                  </div>
                </div>
                {/* Track 3 */}
                <div className="orbital-track track-3">
                  <div className="orbital-node node-3">
                    <div className="node-core"></div>
                  </div>
                </div>
                {/* Track 4 (Inner) */}
                <div className="orbital-track track-4">
                  <div className="orbital-node node-4">
                    <div className="node-core"></div>
                  </div>
                </div>
            </div>

            {/* Labels floating in 2D space around the 3D object */}
            <div className="hud-label absolute top-[25%] left-0 sm:left-[-5%] flex items-center gap-2">
                <div className="text-right">
                    <div className="font-mono text-xs text-textMain">450 Pa</div>
                    <div className="font-mono text-[10px] text-textMuted uppercase">ESP</div>
                </div>
                <div className="w-8 sm:w-12 h-px bg-accent/50 relative">
                    <div className="absolute right-0 top-[-2px] w-[5px] h-[5px] rounded-full bg-accent"></div>
                </div>
            </div>

            <div className="hud-label absolute bottom-[15%] left-[2%] sm:left-[5%] flex items-center gap-2">
                <div className="font-mono text-[10px] text-textMuted uppercase tracking-widest">AIRFLOW</div>
                <div className="w-10 sm:w-16 h-px bg-accent/50 relative transform origin-left rotate-[-15deg]">
                    <div className="absolute right-0 top-[-2px] w-[5px] h-[5px] rounded-full bg-accent"></div>
                </div>
            </div>

            <div className="hud-label absolute top-[15%] right-0 sm:right-[-10%] flex items-center gap-2">
                <div className="w-10 sm:w-16 h-px bg-[#ffb700]/50 relative transform origin-right rotate-[25deg]">
                    <div className="absolute left-0 top-[-2px] w-[5px] h-[5px] rounded-full bg-[#ffb700]"></div>
                </div>
                <div className="text-left">
                    <div className="font-mono text-xs text-textMain">Ø1250</div>
                    <div className="font-mono text-[10px] text-textMuted uppercase">SUPPLY DUCT</div>
                </div>
            </div>

            <div className="hud-label absolute bottom-[5%] right-[2%] sm:right-[5%] flex flex-col items-end gap-1">
                <div className="flex items-end gap-2">
                    <div className="h-8 sm:h-10 w-px bg-[#ffb700]/50 relative">
                        <div className="absolute left-[-2px] top-0 w-[5px] h-[5px] rounded-full bg-[#ffb700]"></div>
                    </div>
                    <div className="w-6 sm:w-8 h-px bg-[#ffb700]/50"></div>
                </div>
                <div className="text-right mt-1">
                    <div className="font-mono text-xs text-accentSecondary">22 °C</div>
                    <div className="font-mono text-[10px] text-textMuted uppercase">DESIGN TEMP.</div>
                </div>
            </div>

            <div className="hud-label absolute bottom-[15%] right-0 sm:right-[-5%] hidden sm:block">
               <div className="flex flex-col items-center gap-1">
                 <div className="w-8 h-8 relative flex items-center justify-center">
                    <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                        <line x1="50" y1="50" x2="50" y2="10" stroke="#7b8b9a" strokeWidth="2" />
                        <line x1="50" y1="50" x2="90" y2="70" stroke="#7b8b9a" strokeWidth="2" />
                        <line x1="50" y1="50" x2="10" y2="70" stroke="#7b8b9a" strokeWidth="2" />
                        <circle cx="50" cy="50" r="4" fill="#0ae8d8" />
                    </svg>
                    <span className="absolute top-[-5px] text-[8px] font-mono text-textMuted">Z</span>
                    <span className="absolute bottom-1 right-[-5px] text-[8px] font-mono text-textMuted">X</span>
                    <span className="absolute bottom-1 left-[-5px] text-[8px] font-mono text-textMuted">Y</span>
                 </div>
                 <span className="font-mono text-[8px] text-textMuted uppercase mt-2">SCALE 1:50</span>
               </div>
            </div>

            {/* The 3D Rotated Wrapper */}
            <div className="hud-perspective-wrapper relative z-20 w-[95%] sm:w-[90%] max-w-[550px] aspect-[1.2] scale-[0.8] sm:scale-95 lg:scale-100 origin-center">
              
              {/* Glass Card */}
              <div className="hud-glass-card absolute inset-0 rounded-xl p-8 flex flex-col justify-start">
                  <div className="flex flex-col z-20 max-w-[220px]">
                    <span className="font-mono text-textMain text-xl font-bold tracking-wider mb-1">AHU-01</span>
                    <span className="font-mono text-textMuted text-[0.6rem] uppercase tracking-widest mb-6">SUPPLY AIR UNIT</span>
                    
                    <div className="flex flex-col gap-3 font-mono text-[10px]">
                        <div className="flex justify-between pb-1 border-b border-white/5">
                            <span className="text-textMuted tracking-wider">AIR FLOW</span>
                            <span className="text-textMain">12,500 CMH</span>
                        </div>
                        <div className="flex justify-between pb-1 border-b border-white/5">
                            <span className="text-textMuted tracking-wider">ESP</span>
                            <span className="text-textMain">450 Pa</span>
                        </div>
                        <div className="flex justify-between pb-1 border-b border-white/5">
                            <span className="text-textMuted tracking-wider">STATIC PRESSURE</span>
                            <span className="text-textMain">450 Pa</span>
                        </div>
                        <div className="flex justify-between pb-1">
                            <span className="text-textMuted tracking-wider">TEMP. SETPOINT</span>
                            <span className="text-textMain">22 °C</span>
                        </div>
                    </div>
                  </div>
              </div>
              
              {/* AHU Wireframe Image - positioned to stick out */}
              <div className="hud-ahu-image absolute -right-[10%] sm:-right-[20%] -bottom-[5%] w-[110%] sm:w-[120%] h-[110%] sm:h-[120%] pointer-events-none z-30">
                <img 
                  src={`${import.meta.env.BASE_URL}ahu_wireframe.png`} 
                  alt="AHU Schematic Wireframe" 
                  className="w-full h-full object-contain object-right-bottom mix-blend-screen"
                />
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
