import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, ShieldCheck } from 'lucide-react';

const projectsData = [
  {
    id: 'hyundai',
    number: '01',
    name: 'HYUNDAI MOTOR INDIA',
    type: 'Industrial Kitchen Design',
    scale: '14,000 meal packs/day',
    role: 'Mechanical Design Engineer',
    keyScope: ['Layout', 'Equipment Selection', 'HVAC Planning', 'Electrical Layouts', 'Drainage', 'Commissioning Support'],
    hasCaseStudy: true,
  },
  {
    id: 'lloyds',
    number: '02',
    name: 'LLOYDS METALS & ENERGY',
    type: 'Industrial Kitchen Design',
    scale: '10,000 meal packs/day',
    role: 'Mechanical Design Engineer',
    keyScope: ['Complete Kitchen Layout', 'Execution Planning', 'MEP Coordination'],
    hasCaseStudy: true,
  },
  {
    id: 'tata',
    number: '03',
    name: 'TATA STEEL KALINGANAGAR',
    type: '3D Kitchen Design',
    scale: 'Commercial / Industrial',
    role: 'Mechanical Design Engineer',
    keyScope: ['Full 3D Kitchen Model', 'Client Presentation', '14-Min Walkthrough Animation'],
    hasCaseStudy: true,
  },
  {
    id: 'automotive',
    number: '04',
    name: 'TATA MOTORS / TOYOTA / LG / JABIL',
    type: 'Concept Kitchen Layouts',
    scale: 'Manufacturing Plants',
    role: 'Design Engineer',
    keyScope: ['Concept Kitchen Layouts', 'Equipment Planning'],
    hasCaseStudy: false,
  },
  {
    id: 'machines',
    number: '05',
    name: 'MACHINE DESIGN — ITC & NAGA',
    type: 'Custom Machine Design',
    scale: 'Concept to Fabrication',
    role: 'Mechanical Design Engineer',
    keyScope: ['1-Ton Batch Roaster (ITC)', 'Automated Paratha Machine (NAGA)', 'Fabrication Drawings'],
    hasCaseStudy: false,
  }
];

const PlaceholderImage = ({ text }) => (
  <div className="w-full h-full min-h-[300px] bg-background border border-dashed border-border flex items-center justify-center p-6 text-center group-hover:border-accent/50 transition-colors">
    <p className="text-textMuted font-mono text-sm tracking-wide uppercase">{text}</p>
  </div>
);

const CaseStudyModal = ({ project, onClose }) => {
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = React.useRef(0);
  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = scrollContainerRef.current;
    const handleScroll = () => {
      if (!container) return;
      const currentY = container.scrollTop;
      
      // Always show near top
      if (currentY < 40) {
        setHeaderHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 60) {
        // Scrolling DOWN -> hide
        setHeaderHidden(true);
      } else if (currentY < lastScrollY.current) {
        // Scrolling UP -> reveal
        setHeaderHidden(false);
      }
      lastScrollY.current = currentY;
    };

    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-md flex flex-col overflow-hidden"
    >
      {/* Fixed Header Bar with Exit Controls */}
      <div className={`fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 md:px-12 py-3.5 md:py-4 bg-background/90 backdrop-blur-md border-b border-border/50 flex justify-between items-center transition-transform duration-300 ${headerHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <button 
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-textMuted hover:text-accent transition-colors cursor-pointer group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>BACK TO PROJECTS</span>
        </button>

        <button 
          onClick={onClose}
          aria-label="Close case study"
          title="Close (Esc)"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 hover:bg-surface border border-border/80 hover:border-accent text-textMain hover:text-accent shadow-lg transition-all duration-300 cursor-pointer group"
        >
          <span className="text-[0.65rem] font-mono tracking-widest uppercase text-textMuted group-hover:text-accent hidden sm:inline">ESC</span>
          <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Dedicated Scroll Viewport */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto w-full h-full"
      >
        <div className="min-h-screen pt-24 sm:pt-28 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto relative">

          <div className="mb-10 md:mb-12">
            <p className="text-accent font-mono mb-3 md:mb-4 text-xs sm:text-sm">PROJECT {project.number}</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-textMain mb-6 uppercase">{project.name}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border/50">
              <div>
                <p className="text-xs text-textMuted uppercase tracking-wider mb-1">Scale</p>
                <p className="text-textMain font-medium">{project.scale}</p>
              </div>
              <div>
                <p className="text-xs text-textMuted uppercase tracking-wider mb-1">Role</p>
                <p className="text-textMain font-medium">{project.role}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-textMuted uppercase tracking-wider mb-1">Type</p>
                <p className="text-textMain font-medium">{project.type}</p>
              </div>
            </div>
          </div>

          {/* Dynamic Case Study Content - Hardcoded for Hyundai for now */}
          {project.id === 'hyundai' && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-4 uppercase">Project Overview</h3>
                  <p className="text-textMuted leading-relaxed">
                    A massive industrial kitchen facility designed to output 14,000 meal packs per day. Required robust MEP integration, heavy-duty ventilation, and highly efficient spatial planning.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-4 uppercase">My Contribution</h3>
                  <p className="text-textMuted leading-relaxed">
                    Led the mechanical design and MEP coordination efforts, ensuring HVAC, electrical, and drainage systems aligned perfectly with the equipment layout.
                  </p>
                </div>
              </div>

              {/* Final Engineering Output with Live Facility Walkthrough Video */}
              <div>
                <div className="flex items-center justify-between mb-6 border-l-2 border-accent pl-4 flex-wrap gap-3">
                  <h3 className="text-xl font-bold text-textMain uppercase">Final Engineering Output & On-Site Video Walkthrough</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[0.65rem] tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    OPERATIONAL FACILITY
                  </span>
                </div>

                <div className="bg-surface/30 border border-border rounded-xl p-5 sm:p-6 md:p-8 backdrop-blur-sm">
                  <div className="space-y-8">
                    
                    {/* 16:9 Widescreen Video Showcase */}
                    <div className="w-full rounded-2xl overflow-hidden border border-border/80 shadow-[0_0_35px_rgba(10,232,216,0.12)] bg-background relative group">
                      {/* Video Player Header Bar */}
                      <div className="px-4 py-3 bg-surface/90 border-b border-border/60 flex items-center justify-between font-mono text-[0.65rem] sm:text-xs text-textMuted uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                          <span className="text-textLight font-medium">FACILITY TOUR • HYUNDAI MOTOR INDIA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 font-bold">1080p FULL HD</span>
                          <span className="text-textMuted hidden sm:inline">• 2m 14s</span>
                        </div>
                      </div>

                      {/* Google Drive Video Player - Cloud Streaming with Popout Blocker */}
                      <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
                        {/* Top-Right Overlay Guard: Disables Google Drive Pop-out download button */}
                        <div className="absolute top-0 right-0 w-16 h-14 z-20 pointer-events-auto" title="1080p Full HD Protected Stream" />
                        <iframe
                          src="https://drive.google.com/file/d/1I4rgYpPR5vPW9OD-etXH1gxcXOB5vQIs/preview"
                          className="w-full h-full border-0 select-none"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          title="Hyundai Motor India Facility Tour"
                        />
                      </div>

                      {/* Video Caption Footer - Strictly Non-Downloadable Protected Badge */}
                      <div className="p-3 bg-surface/60 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 font-mono text-[0.68rem] text-textMuted tracking-wider uppercase select-none">
                        <span>Hyundai Motor India • Industrial Kitchen Facility</span>
                        <div className="flex items-center gap-1.5 text-textMuted font-mono text-[0.68rem] tracking-wider uppercase">
                          <ShieldCheck size={13} className="text-accent" />
                          <span>Protected Media • Non-Downloadable</span>
                        </div>
                      </div>
                    </div>

                    {/* Engineering Delivery & Milestone Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="inline-block px-3 py-1 bg-surface/70 border border-border text-accent font-mono text-xs uppercase tracking-widest mb-3">
                          Lorman Kitchen Equipments • Milestone Project
                        </div>
                        <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase text-textMain tracking-tight mb-3">
                          Full-Scale Operational Facility
                        </h4>
                        <p className="text-textMuted text-sm sm:text-base leading-relaxed">
                          Recorded facility walkthrough showcasing the delivered 14,000 meal packs/day industrial kitchen at Hyundai Motor India. This video documents the completed installation of commercial cooking lines, ventilation hoods, drainage systems, and stainless-steel equipment layout.
                        </p>
                      </div>

                      {/* Key Technical Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Capacity</p>
                          <p className="font-display font-semibold text-textMain text-sm uppercase">14,000 Meal Packs / Day</p>
                          <p className="text-textMuted text-xs mt-1">High-throughput manufacturing commissary.</p>
                        </div>

                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Ventilation</p>
                          <p className="font-display font-semibold text-textMain text-sm uppercase">Heavy Exhaust Hoods</p>
                          <p className="text-textMuted text-xs mt-1">Grease extraction & air balancing.</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="flex items-center gap-3 text-xs font-mono text-textMuted">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>Designed, fabricated, installed, and fully commissioned on-site.</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            </div>
          )}

          {/* Dynamic Case Study Content - Lloyds Metals & Energy */}
          {project.id === 'lloyds' && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-4 uppercase">Project Overview</h3>
                  <p className="text-textMuted leading-relaxed">
                    A high-throughput industrial kitchen engineered to prepare and serve 10,000 meal packs per day for the workforce at Lloyds Metals & Energy. Designed from concept to commissioning to adhere to strict sanitary zoning, and streamlined food production workflows.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-4 uppercase">My Contribution</h3>
                  <p className="text-textMuted leading-relaxed">
                    Led the complete facility layout engineering, equipment spatial planning, and on-site MEP coordination—integrating modular walk-in cold rooms, commercial induction cooking suites, stainless preparation stations, exhaust ventilation canopies, and recessed floor drainage networks.
                  </p>
                </div>
              </div>

              {/* Final Engineering Output with Live Facility Walkthrough Video (16:9 Widescreen) */}
              <div>
                <div className="flex items-center justify-between mb-6 border-l-2 border-accent pl-4 flex-wrap gap-3">
                  <h3 className="text-xl font-bold text-textMain uppercase">Final Engineering Output & On-Site Video Walkthrough</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[0.65rem] tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    OPERATIONAL FACILITY
                  </span>
                </div>

                <div className="bg-surface/30 border border-border rounded-xl p-5 sm:p-6 md:p-8 backdrop-blur-sm">
                  <div className="space-y-8">
                    
                    {/* 16:9 Widescreen Video Showcase */}
                    <div className="w-full rounded-2xl overflow-hidden border border-border/80 shadow-[0_0_35px_rgba(10,232,216,0.12)] bg-background relative group">
                      {/* Video Player Header Bar */}
                      <div className="px-4 py-3 bg-surface/90 border-b border-border/60 flex items-center justify-between font-mono text-[0.65rem] sm:text-xs text-textMuted uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                          <span className="text-textLight font-medium">FACILITY TOUR • LLOYDS METALS & ENERGY</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 font-bold">1080p FULL HD</span>
                          <span className="text-textMuted hidden sm:inline">• 1m 59s</span>
                        </div>
                      </div>

                      {/* Google Drive Video Player - Cloud Streaming with Popout Blocker */}
                      <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
                        {/* Top-Right Overlay Guard: Disables Google Drive Pop-out download button */}
                        <div className="absolute top-0 right-0 w-16 h-14 z-20 pointer-events-auto" title="1080p Full HD Protected Stream" />
                        <iframe
                          src="https://drive.google.com/file/d/1OuYZ-iipdnRzmhnA2vPeqKv-Ba4wKJ9w/preview"
                          className="w-full h-full border-0 select-none"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          title="Lloyds Metals & Energy Facility Tour"
                        />
                      </div>

                      {/* Video Caption Footer - Strictly Non-Downloadable Protected Badge */}
                      <div className="p-3 bg-surface/60 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 font-mono text-[0.68rem] text-textMuted tracking-wider uppercase select-none">
                        <span>Lloyds Metals & Energy Limited • Industrial Kitchen Facility</span>
                        <div className="flex items-center gap-1.5 text-textMuted font-mono text-[0.68rem] tracking-wider uppercase">
                          <ShieldCheck size={13} className="text-accent" />
                          <span>Protected Media • Non-Downloadable</span>
                        </div>
                      </div>
                    </div>

                    {/* Engineering Delivery & Milestone Highlights */}
                    <div className="space-y-6">
                      <div>
                        <div className="inline-block px-3 py-1 bg-surface/70 border border-border text-accent font-mono text-xs uppercase tracking-widest mb-3">
                          Lorman Kitchen Equipments • Turnkey Execution
                        </div>
                        <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase text-textMain tracking-tight mb-3">
                          Completed Turnkey Kitchen Installation
                        </h4>
                        <p className="text-textMuted text-sm sm:text-base leading-relaxed">
                          Comprehensive video walkthrough capturing the completed on-site installation at Lloyds Metals & Energy. The recording displays walk-in refrigeration units, heavy stainless preparation tables, commercial induction cooking batteries, integrated floor drainage grating, and industrial ventilation canopies in full operation.
                        </p>
                      </div>

                      {/* Key Technical Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Capacity</p>
                          <p className="font-display font-semibold text-textMain text-sm uppercase">10,000 Meal Packs / Day</p>
                          <p className="text-textMuted text-xs mt-1">High-volume central commissary facility.</p>
                        </div>

                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Cold Chain</p>
                          <p className="font-display font-semibold text-textMain text-sm uppercase">Walk-in Cold Storage</p>
                          <p className="text-textMuted text-xs mt-1">Modular chillers with SS multi-tier storage.</p>
                        </div>

                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Cooking Technology</p>
                          <p className="font-display font-semibold text-textMain text-sm uppercase">Induction Batteries</p>
                          <p className="text-textMuted text-xs mt-1">Flameless energy-efficient commercial cooking.</p>
                        </div>

                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Drainage & MEP</p>
                          <p className="font-display font-semibold text-textMain text-sm uppercase">SS Trench Drainage</p>
                          <p className="text-textMuted text-xs mt-1">Removable grating & integrated grease traps.</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="flex items-center gap-3 text-xs font-mono text-textMuted">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>Delivered, installed, tested, and commissioned on-site with full client sign-off.</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            </div>
          )}

          {/* Dynamic Case Study Content - Tata Steel Kalinganagar */}
          {project.id === 'tata' && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-4 uppercase">Project Overview</h3>
                  <p className="text-textMuted leading-relaxed">
                    A flagship commercial and industrial kitchen facility designed for Tata Steel’s major manufacturing plant in Kalinganagar, Odisha. The project required complete 3D digital visualization and a photorealistic walkthrough to validate spatial layout, equipment clearances, and personnel flow for corporate executive approval.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-4 uppercase">My Contribution</h3>
                  <p className="text-textMuted leading-relaxed">
                    Served as the Mechanical Design Engineer, developing the full-scale 3D digital twin of the commercial kitchen. Modeled all stainless-steel fabrication units, cooking induction equipment, and MEP coordination elements. Produced high-quality render stills and authored an in-depth 14-minute animated walkthrough video used directly for client presentation and final design sign-off.
                  </p>
                </div>
              </div>

              {/* Final Output - Embedded 3D Walkthrough Video */}
              <div>
                <div className="flex items-center justify-between mb-6 border-l-2 border-accent pl-4 flex-wrap gap-3">
                  <h3 className="text-xl font-bold text-textMain uppercase">Final Output & 3D Walkthrough Animation</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[0.65rem] tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    3D DIGITAL WALKTHROUGH
                  </span>
                </div>

                <div className="bg-surface/30 border border-border rounded-xl p-5 sm:p-6 md:p-8 backdrop-blur-sm">
                  <div className="space-y-8">
                    
                    {/* 16:9 Widescreen Video Showcase - Default 1080p Full HD */}
                    <div className="w-full rounded-2xl overflow-hidden border border-border/80 shadow-[0_0_35px_rgba(10,232,216,0.12)] bg-background relative group">
                      {/* Video Player Header Bar */}
                      <div className="px-4 py-3 bg-surface/90 border-b border-border/60 flex items-center justify-between font-mono text-[0.65rem] sm:text-xs text-textMuted uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                          <span className="text-textLight font-medium">3D WALKTHROUGH • TATA STEEL KALINGANAGAR</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 font-bold">1080p FULL HD</span>
                          <span className="text-textMuted hidden sm:inline">• 14m 00s</span>
                        </div>
                      </div>

                      {/* Google Drive Video Player - 1080p Full HD Cloud Streaming with Popout Blocker */}
                      <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
                        {/* Top-Right Overlay Guard: Disables Google Drive Pop-out download button */}
                        <div className="absolute top-0 right-0 w-16 h-14 z-20 pointer-events-auto" title="1080p Full HD Protected Stream" />
                        <iframe
                          src="https://drive.google.com/file/d/1dTq7fVX65Q_IPKheQBRV5PQpE7tD1fKb/preview"
                          className="w-full h-full border-0 select-none"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          title="Tata Steel Kalinganagar 3D Walkthrough Animation"
                        />
                      </div>

                      {/* Video Caption Footer - Strictly Non-Downloadable Protected Badge */}
                      <div className="p-3 bg-surface/60 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 font-mono text-[0.68rem] text-textMuted tracking-wider uppercase select-none">
                        <span>Tata Steel Kalinganagar • 3D Kitchen Digital Twin</span>
                        <div className="flex items-center gap-1.5 text-textMuted font-mono text-[0.68rem] tracking-wider uppercase">
                          <ShieldCheck size={13} className="text-accent" />
                          <span>Protected Media • Non-Downloadable</span>
                        </div>
                      </div>
                    </div>

                    {/* Engineering Delivery & Milestone Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="inline-block px-3 py-1 bg-surface/70 border border-border text-accent font-mono text-xs uppercase tracking-widest mb-3">
                          Tata Steel Kalinganagar • Digital Twin Showcase
                        </div>
                        <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase text-textMain tracking-tight mb-3">
                          Full-Scale 3D Visualization & Walkthrough Animation
                        </h4>
                        <p className="text-textMuted text-sm sm:text-base leading-relaxed">
                          Comprehensive 14-minute 3D walkthrough authoring the entire commercial kitchen architecture at Tata Steel Kalinganagar, Odisha. Features detailed spatial planning, equipment clearances, MEP coordination points, and photorealistic material rendering utilized for executive stakeholder approvals.
                        </p>
                      </div>

                      {/* Key Technical Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Scope</p>
                          <p className="text-textMain font-medium text-sm">Full 3D Digital Twin</p>
                          <p className="text-textMuted text-xs mt-1">Complete facility architecture.</p>
                        </div>
                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Duration</p>
                          <p className="text-textMain font-medium text-sm">14-Minute Tour</p>
                          <p className="text-textMuted text-xs mt-1">Comprehensive animated walkthrough.</p>
                        </div>
                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Role</p>
                          <p className="text-textMain font-medium text-sm">Mechanical Design Engineer</p>
                          <p className="text-textMuted text-xs mt-1">Modeling, animation & presentation.</p>
                        </div>
                        <div className="p-4 bg-background/60 border border-border/70 rounded-lg">
                          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent mb-1">Output</p>
                          <p className="text-textMain font-medium text-sm">Client Approval</p>
                          <p className="text-textMuted text-xs mt-1">Approved for site execution.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-[75px] md:py-[140px] px-[6%] md:px-[12%] text-textMain relative bg-background border-t border-border">
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
            02
          </motion.span>
        </div>

        <div className="w-full md:w-3/4 pt-4 md:pt-8">
          <div className="mb-12 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-textMain tracking-tighter font-bold uppercase mb-6">Featured Projects</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accentSecondary"></div>
            </div>
          </div>

          <div className="flex flex-col">
            {projectsData.map((project, idx) => (
              <div 
                key={project.id}
                className="group border-b border-border py-8 sm:py-10 md:py-12 hover:pl-3 sm:hover:pl-6 transition-all duration-500 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center relative"
                onClick={() => project.hasCaseStudy && setActiveProject(project)}
              >
                <div className="absolute inset-0 bg-textMain/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <div className="w-full md:w-3/5">
                  <p className="text-textMuted font-mono text-[0.65rem] tracking-[0.2em] mb-2 sm:mb-3">PROJECT {project.number}</p>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-textMain uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                  <p className="text-textMuted text-xs sm:text-sm tracking-widest uppercase">{project.type} | {project.scale}</p>
                </div>
                
                <div className="w-full md:w-2/5 mt-6 md:mt-0 flex flex-col md:items-end">
                  <div className="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                    {project.keyScope.slice(0, 2).map((scope, i) => (
                      <span key={i} className="px-3 py-1 border border-border text-[0.65rem] font-mono text-textMuted uppercase tracking-widest bg-surface/50">
                        {scope}
                      </span>
                    ))}
                  </div>
                  {project.hasCaseStudy ? (
                    <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-textMain group-hover:text-accent transition-colors">
                      VIEW CASE STUDY &rarr;
                    </span>
                  ) : (
                    <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-border">
                      UNAVAILABLE
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProject && (
            <CaseStudyModal 
              project={activeProject} 
              onClose={() => setActiveProject(null)} 
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default FeaturedProjects;
