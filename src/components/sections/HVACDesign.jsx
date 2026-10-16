import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const workflowSteps = [
  "DESIGN INPUTS",
  "LOAD CALCULATION",
  "AIRFLOW / VENTILATION",
  "SYSTEM SELECTION",
  "EQUIPMENT SELECTION",
  "DUCT / PIPE DESIGN",
  "LAYOUT",
  "COORDINATION",
  "DOCUMENTATION"
];

const evidenceBlocks = [
  { title: "Cooling Load Calculation", type: "CALCULATION", placeholder: "[ADD CALCULATION]" },
  { title: "Airflow Calculation", type: "CALCULATION", placeholder: "[ADD CALCULATION]" },
  { title: "Duct Design", type: "DRAWING", placeholder: "[ADD HVAC DRAWING]" },
  { title: "Pipe Sizing", type: "CALCULATION", placeholder: "[ADD CALCULATION]" },
  { title: "Equipment Selection", type: "SCHEDULE", placeholder: "[ADD SCHEDULE]" },
  { title: "HVAC Layout", type: "CAD OUTPUT", placeholder: "[ADD HVAC LAYOUT]" },
  { title: "CAD Output", type: "CAD OUTPUT", placeholder: "[ADD CAD DRAWING]" },
  { title: "BIM Output", type: "REVIT MODEL", placeholder: "[ADD REVIT MODEL]" }
];

const PlaceholderImage = ({ text }) => (
  <div className="w-full h-full min-h-[200px] bg-background border border-dashed border-border flex items-center justify-center p-4 text-center group-hover:border-accent/50 transition-colors">
    <p className="text-textMuted font-mono text-xs tracking-wide uppercase">{text}</p>
  </div>
);

const HVACDesign = () => {
  return (
    <section id="hvac" className="py-[140px] px-[6%] md:px-[12%] text-textMain relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Massive Section Number */}
        <div className="block w-full md:w-1/4 relative min-h-[140px] md:min-h-[250px] mb-2 md:mb-0">
          <motion.span 
            initial={{ filter: 'drop-shadow(0px 0px 0px rgba(10,232,216,0))' }}
            whileInView={{ filter: 'drop-shadow(0px 0px 30px rgba(10,232,216,0.4))' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-display font-bold text-[8rem] md:text-[12rem] leading-none text-background [-webkit-text-stroke:1px_rgba(10,232,216,0.5)] select-none -ml-4 md:-ml-8 absolute top-0 left-4 md:left-0"
          >
            03
          </motion.span>
        </div>

        <div className="w-full md:w-3/4 pt-8">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-textMain tracking-tighter font-bold uppercase mb-6">HVAC Design</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accentSecondary"></div>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Workflow Diagram */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg font-bold text-textMain mb-12 tracking-[0.2em] uppercase lg:text-left">Design Workflow</h3>
            
            <div className="flex flex-col items-start max-w-[250px]">
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-full border-b border-border py-4 text-left"
                  >
                    <p className="text-[0.7rem] font-bold text-textMain tracking-[0.2em] uppercase font-mono">{step}</p>
                  </motion.div>
                  
                  {idx < workflowSteps.length - 1 && (
                    <div className="h-6 w-px bg-accent/30 my-2 ml-4"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Evidence Blocks */}
          <div className="lg:col-span-8">
            <h3 className="font-display text-lg font-bold text-textMain mb-12 tracking-[0.2em] uppercase lg:text-left">Technical Outputs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {evidenceBlocks.map((block, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 flex flex-col group border border-border bg-surface transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_rgba(10,232,216,0.1)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity clip-path-corner"></div>
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h4 className="font-bold text-xs tracking-widest uppercase transition-colors group-hover:text-accent">{block.title}</h4>
                    <span className="text-[0.6rem] font-mono tracking-wider transition-colors text-textMuted group-hover:text-accentSecondary">
                      {block.type}
                    </span>
                  </div>
                  <p className="text-[0.8rem] font-mono text-textMuted leading-relaxed transition-colors group-hover:text-textMain relative z-10">
                    {block.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACDesign;
