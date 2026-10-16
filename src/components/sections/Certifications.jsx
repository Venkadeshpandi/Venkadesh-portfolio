import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, FileCheck, CheckCircle2 } from 'lucide-react';

const certificatesData = [
  {
    id: 'cert-1',
    number: '01',
    title: 'Become an HVAC PRO — The Ultimate HVAC Guide',
    issuer: 'Udemy — Augmintech Education Pvt. Ltd.',
    year: 'Sept. 2, 2026',
    status: 'Verified Credential',
    description: 'Comprehensive HVAC design training covering Psychometry, duct sizing, AHU selection, equipment selection and sizing, and chilled water systems. 18.5 total hours.',
    skills: ['Psychometry', 'Duct Sizing', 'AHU Selection', 'Chilled Water'],
    credentialId: 'UC-25ddf67d-1a96-40d8-8376-c4b4d3b33503',
    image: `${import.meta.env.BASE_URL}cert 1.jpeg`,
  },
  {
    id: 'cert-2',
    number: '02',
    title: 'HVAC — Complete HAP Course with QA & Design Tricks',
    issuer: 'Udemy — Assem Battikh',
    year: 'Sept. 15, 2026',
    status: 'Verified Credential',
    description: 'Hands-on training in Carrier HAP software for cooling and heating load calculations, Schedules, Spaces. 8.5 total hours.',
    skills: ['Carrier HAP', 'Cooling Load', 'Schedules', 'Spaces'],
    credentialId: 'UC-bbbd00c6-a837-44b3-a2c3-a3d95c14172e',
    image: `${import.meta.env.BASE_URL}cert 2.jpeg`,
  },
  {
    id: 'cert-3',
    number: '03',
    title: 'Revit MEP HVAC — Complete Course',
    issuer: 'Udemy — Ghasem Ariyani & BIM Manager',
    year: 'Sept. 19, 2026',
    status: 'Verified Credential',
    description: 'Complete Revit MEP course covering mechanical duct and piping, 3D modeling,system families, and multi-discipline coordination. 22 total hours.',
    skills: ['Revit MEP', 'BIM Modeling', 'HVAC Systems', 'Duct Routing'],
    credentialId: 'UC-e0b75fb6-2a6a-409c-abb5-269d7cc9e776',
    image: `${import.meta.env.BASE_URL}cert 3.jpeg`,
  },
  {
    id: 'cert-4',
    number: '04',
    title: 'HVAC Design for Data Centres — Real Project Design',
    issuer: 'Udemy — Sajjad Ansari',
    year: 'Oct. 15, 2026',
    status: 'Verified Credential',
    description: 'Specialized HVAC design for data centre environments covering real project design,Air flow management , precision cooling, redundancy strategies, and energy efficiency. 16 total hours.',
    skills: ['Data Centre HVAC', 'Precision Cooling', 'Air flow management', 'Redundancy'],
    credentialId: 'UC-ee8e7248-f6d9-4f6a-92df-35d1506be012',
    image: `${import.meta.env.BASE_URL}cert 4.jpeg`,
  },
  {
    id: 'cert-5',
    number: '05',
    title: 'Mechanical Design — SOLIDWORKS Associate',
    issuer: 'Dassault Systèmes SolidWorks',
    year: 'Aug 9, 2023',
    status: 'Verified Credential',
    description: 'Dassault Systèmes confers the SOLIDWORKS Associate certificate for Mechanical Design. Exam conducted at Coimbatore Cad Solutions Pvt Ltd – EDU. Certified by Manish Kumar, SOLIDWORKS CEO & R&D Vice President.',
    skills: ['SolidWorks', 'Mechanical Design', '3D modeling', 'Assembly Design'],
    credentialId: 'C-XL6VZGC4PA',
    image: `${import.meta.env.BASE_URL}cert 5.png`,
  },
];

const CertificateModal = ({ certificate, onClose }) => {
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = React.useRef(0);
  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    if (!certificate) return;
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
      
      // Always show when near the top
      if (currentY < 40) {
        setHeaderHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 60) {
        // Scrolling down past threshold -> hide
        setHeaderHidden(true);
      } else if (currentY < lastScrollY.current) {
        // Scrolling up -> reveal
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
  }, [onClose, certificate]);

  if (!certificate) return null;

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
          <span>BACK TO CERTIFICATIONS</span>
        </button>

        <button
          onClick={onClose}
          aria-label="Close certificate preview"
          title="Close (Esc)"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 hover:bg-surface border border-border/80 hover:border-accent text-textMain hover:text-accent shadow-lg transition-all duration-300 cursor-pointer group"
        >
          <span className="text-[0.65rem] font-mono tracking-widest uppercase text-textMuted group-hover:text-accent hidden sm:inline">ESC</span>
          <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Dedicated Scrollable Viewport Container */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto w-full h-full"
      >
        <div className="min-h-screen pt-24 sm:pt-28 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto relative">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-xs tracking-[0.2em]">CERTIFICATE {certificate.number}</span>
            <span className="h-3 w-px bg-border"></span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <CheckCircle2 size={13} />
              {certificate.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-textMain mb-4 uppercase font-display">
            {certificate.title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border/50 font-mono text-xs text-textMuted uppercase tracking-wider">
            <div>
              <span className="text-textMuted/60 mr-2">ISSUER:</span>
              <span className="text-textMain font-medium">{certificate.issuer}</span>
            </div>
            <div>
              <span className="text-textMuted/60 mr-2">YEAR:</span>
              <span className="text-textMain font-medium">{certificate.year}</span>
            </div>
            <div>
              <span className="text-textMuted/60 mr-2">ID:</span>
              <span className="text-accent font-medium">{certificate.credentialId}</span>
            </div>
          </div>
        </div>

        {/* Certificate Document Frame / Preview Slot */}
        <div className="mb-10 bg-surface/40 border border-dashed border-border rounded-lg p-4 md:p-6 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[260px] md:min-h-[340px]">
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={`${certificate.title} Certificate`}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="max-w-full max-h-[500px] object-contain rounded shadow-lg border border-border/40 select-none pointer-events-none"
              />
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 shadow-[0_0_20px_rgba(10,232,216,0.15)]">
                  <Award size={32} />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-2">
                  CERTIFICATE ATTACHMENT SLOT
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-textMain mb-3 uppercase max-w-lg">
                  {certificate.title}
                </h3>
                <p className="font-mono text-xs text-textMuted max-w-md tracking-wide mb-6">
                  Official verification record issued by {certificate.issuer}. Ready for scanned document or image link attachment.
                </p>
                <div className="px-4 py-2 border border-border bg-background/60 font-mono text-[0.7rem] text-textMuted uppercase tracking-widest">
                  Credential Reference: {certificate.credentialId}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Description & Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-surface/30 border border-border p-6 rounded-lg">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Curriculum & Scope</h4>
            <p className="text-textMuted text-sm leading-relaxed">{certificate.description}</p>
          </div>

          <div className="bg-surface/30 border border-border p-6 rounded-lg">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Core Skills Verified</h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 border border-border text-[0.7rem] font-mono text-textMain uppercase tracking-wider bg-background/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="certifications" className="py-[75px] md:py-[140px] px-[6%] md:px-[12%] text-textMain relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-24">
        
        {/* Massive Section Number */}
        <div className="block w-full md:w-1/4 relative min-h-[90px] sm:min-h-[120px] md:min-h-[250px] mb-2 md:mb-0">
          <motion.span
            initial={{ filter: 'drop-shadow(0px 0px 0px rgba(10,232,216,0))' }}
            whileInView={{ filter: 'drop-shadow(0px 0px 30px rgba(10,232,216,0.4))' }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-display font-bold text-[5.5rem] sm:text-[7.5rem] md:text-[12rem] leading-none text-background [-webkit-text-stroke:1px_rgba(10,232,216,0.5)] select-none -ml-2 md:-ml-8 absolute top-0 left-2 md:left-0"
          >
            04
          </motion.span>
        </div>

        {/* Section Content */}
        <div className="w-full md:w-3/4 pt-4 md:pt-8">
          <div className="mb-10 md:mb-14">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-textMain tracking-tighter font-bold uppercase mb-6">
              Certifications
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accentSecondary"></div>
            </div>
            <p className="text-textMuted text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans">
              Professional credentials, HVAC design certifications, and specialized MEP software training validating engineering standards.
            </p>
          </div>

          {/* 6 Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveCertificate(cert)}
                className="group relative bg-surface/30 hover:bg-surface/70 border border-border hover:border-accent/60 p-5 sm:p-6 md:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_0_25px_rgba(10,232,216,0.12)]"
              >
                {/* Glow bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase font-medium">
                      CERT // {cert.number}
                    </span>
                    <span className="text-textMuted group-hover:text-accent transition-colors">
                      <Award size={18} strokeWidth={1.5} />
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-display text-xl font-bold text-textMain uppercase tracking-tight group-hover:text-accent transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & Year */}
                  <div className="flex items-center gap-2 mb-4 font-mono text-[0.7rem] text-textMuted uppercase tracking-wider">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span className="text-textLight">{cert.year}</span>
                  </div>

                  {/* Preview / Placeholder Box */}
                  <div className="my-4 border border-dashed border-border/80 group-hover:border-accent/40 bg-background/50 transition-colors overflow-hidden">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={`${cert.title} preview`}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-[110px] object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity select-none pointer-events-none"
                      />
                    ) : (
                      <div className="flex items-center justify-center gap-3 p-4">
                        <FileCheck size={16} className="text-accent/70" />
                        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-textMuted group-hover:text-textMain transition-colors">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 border border-border/60 text-[0.62rem] font-mono text-textMuted uppercase tracking-wider bg-background/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between font-mono text-[0.68rem] tracking-[0.15em] uppercase text-textMuted group-hover:text-accent transition-colors">
                  <span>VIEW CREDENTIAL</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeCertificate && (
            <CertificateModal
              certificate={activeCertificate}
              onClose={() => setActiveCertificate(null)}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Certifications;
