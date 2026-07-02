import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Profiles } from './components/sections/Profiles';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { ScrollIndicator } from './components/ui/ScrollIndicator';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        setShowScrollTop(mainContent.scrollTop > 400);
      }
    };

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <ThemeProvider>
      <div className="relative bg-retro-cream dark:bg-retro-black transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        
        <main 
          id="main-content"
          className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar"
        >
          {/* Hero / About Section */}
          <section id="about" className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 relative shrink-0">
            <div className="max-w-6xl mx-auto w-full">
              <Hero />
            </div>
            <ScrollIndicator targetId="projects" className="absolute bottom-10" />
          </section>

          {/* Results-First: Projects Section */}
          <section id="projects" className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 bg-retro-paper/10 dark:bg-retro-gray/5 relative shrink-0">
            <div className="max-w-6xl mx-auto w-full overflow-y-auto max-h-[80vh] scrollbar-hide py-10 px-4">
              <Projects />
            </div>
            <ScrollIndicator targetId="experience" className="absolute bottom-10" />
          </section>

          {/* Professional Context: Experience Section */}
          <section id="experience" className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 relative shrink-0">
            <div className="max-w-4xl mx-auto w-full overflow-y-auto max-h-[80vh] scrollbar-hide py-10 px-4">
              <Experience />
            </div>
            <ScrollIndicator targetId="tech" className="absolute bottom-10" />
          </section>

          {/* Technical Skills: Tech Stack Section */}
          <section id="tech" className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 bg-retro-paper/10 dark:bg-retro-gray/5 relative shrink-0">
            <div className="max-w-4xl mx-auto w-full overflow-y-auto max-h-[80vh] scrollbar-hide py-10 px-4">
              <TechStack />
            </div>
            <ScrollIndicator targetId="achievements" className="absolute bottom-10" />
          </section>

          {/* Validation: Achievements/Profiles Section */}
          <section id="achievements" className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 relative shrink-0">
            <div className="max-w-6xl mx-auto w-full overflow-y-auto max-h-[80vh] scrollbar-hide py-10 px-4">
              <Profiles />
            </div>
            <ScrollIndicator targetId="contact" className="absolute bottom-10" />
          </section>

          {/* Conversion: Contact Section */}
          <section id="contact" className="h-screen w-full snap-start flex flex-col items-center justify-between px-4 py-8 bg-retro-paper/20 dark:bg-retro-gray/10 relative shrink-0">
            <div className="max-w-4xl mx-auto w-full overflow-y-auto max-h-[78vh] scrollbar-hide py-4 px-2">
              <Contact />
            </div>

            <div className="w-full mt-auto">
              <Footer />
            </div>
          </section>
        </main>

        {/* Floating Back to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-retro-paper/85 dark:bg-retro-dark/85 backdrop-blur-md border border-retro-black/10 dark:border-white/10 shadow-lg text-retro-gray dark:text-white/60 hover:text-retro-orange hover:border-retro-orange/30 transition-all duration-200 group cursor-pointer"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.6} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
