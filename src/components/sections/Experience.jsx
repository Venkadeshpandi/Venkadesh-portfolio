import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: "Design Engineer",
    company: "Lorman Kitchen Equipments Pvt. Ltd., Bengaluru, India",
    date: "Nov 2024 – Jul 2026",
    description: "Designed layouts and mechanical systems for industrial kitchens serving up to 14,000 meal packs per day, covering equipment placement, process flow and HVAC planning.",
    responsibilities: [
      "Designed layouts and mechanical systems for industrial kitchens of up to 14,000 meal packs per day.",
      "Selected and scheduled kitchen equipment, sizing components to suit capacity and available space.",
      "Coordinated HVAC, electrical, drainage and utility requirements with clients,vendors and site engineers.",
      "Prepared BOQs, fabrication drawings, shop drawings and technical submittals for client and contractor review.",
      "Built 3D models and walkthrough animations used for client approvals.",
      "Supported projects from concept layout through to commissioning."
    ]
  },
  {
    role: "Junior Design Engineer",
    company: "Freezeton Technologies and Kovai Kiosk, Coimbatore, India",
    date: "Aug 2023 – Feb 2024",
    description: "Prepared mechanical drawings and component designs for industrial equipment and kiosks.",
    responsibilities: [
      "Prepared mechanical drawings and component designs in SolidWorks and AutoCAD for industrial equipment and kiosks.",
      "Assisted with equipment layout planning and product design across several projects.",
      "Worked from project specifications and manufacturing requirements."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-[75px] md:py-[120px] px-[6%] md:px-[12%] text-textLight">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed grayscale opacity-20"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888081622-15cb3a51f49c?auto=format&fit=crop&w=1600&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-background/95 md:bg-background/95"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row gap-8 md:gap-24">
        {/* Massive Section Number */}
        <div className="block w-full md:w-1/4 relative min-h-[90px] sm:min-h-[120px] md:min-h-[250px] mb-2 md:mb-0">
          <motion.span 
            initial={{ filter: 'drop-shadow(0px 0px 0px rgba(10,232,216,0))' }}
            whileInView={{ filter: 'drop-shadow(0px 0px 30px rgba(10,232,216,0.4))' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-display font-bold text-[5.5rem] sm:text-[7.5rem] md:text-[12rem] leading-none text-background [-webkit-text-stroke:1px_rgba(10,232,216,0.5)] select-none -ml-2 md:-ml-8 absolute top-0 left-2 md:left-0"
          >
            03
          </motion.span>
        </div>

        <div className="w-full md:w-3/4 pt-4 md:pt-8">
          <div className="mb-12 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-textMain tracking-tighter font-bold uppercase mb-6">Experience</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-accentSecondary"></div>
            </div>
          </div>

          <div className="relative border-l border-textMain ml-2 sm:ml-4 md:ml-0">
            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-9 md:pl-12 mb-12 md:mb-16 last:mb-0 group"
              >
                {/* Glowing Timeline Node */}
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-background border border-accent shadow-[0_0_10px_rgba(10,232,216,0.5)] transition-all group-hover:scale-150 group-hover:bg-accent"></div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-textMain tracking-tighter uppercase">{exp.role}</h3>
                      <h4 className="text-textMuted text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">{exp.company}</h4>
                    </div>
                    <span className="text-xs font-mono text-textMuted tracking-[0.2em] mt-2 md:mt-0 px-3 py-1 border border-border w-fit">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-[0.9rem] leading-[1.7] mb-4 text-textMuted">
                    {exp.description}
                  </p>
                  
                  <ul className="list-none m-0 p-0 text-[0.85rem] leading-[1.6]">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="relative pl-4 mb-1 text-textMuted">
                        <span className="absolute left-0 text-textMain">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
