import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EngineeringProfile from './components/sections/EngineeringProfile';
import FeaturedProjects from './components/sections/FeaturedProjects';
// import HVACDesign from './components/sections/HVACDesign';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

// These components will be refactored in later phases
// import Skills from './components/sections/Skills'; 
// import Education from './components/sections/Education';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-background text-textMain w-full overflow-x-hidden selection:bg-primary selection:text-background font-sans">
        
        <Navigation />

        {/* Content Layers */}
        <main className="relative w-full pt-16">
          <Hero />
          <EngineeringProfile />
          <FeaturedProjects />
          {/* <HVACDesign /> */}
          <Experience />
          <Certifications />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
