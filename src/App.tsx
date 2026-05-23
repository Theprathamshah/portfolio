import { motion } from 'framer-motion';
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
  return (
    <ThemeProvider>
      <div className="relative bg-retro-cream dark:bg-retro-black transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        
        <main 
          id="main-content"
          className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar"
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
            <div className="max-w-4xl mx-auto w-full overflow-y-auto max-h-[65vh] scrollbar-hide py-4 px-2">
              <Contact />
            </div>

            <div className="w-full flex flex-col items-center gap-4 mt-auto">
              <motion.button
                onClick={() => document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 text-retro-gray dark:text-white/40 hover:text-retro-orange transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to top</span>
                <div className="p-2 rounded-full border border-retro-gray/20 dark:border-white/10 group-hover:border-retro-orange/30 group-hover:bg-retro-orange/5 transition-all">
                  <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </motion.button>

              <div className="w-full">
                <Footer />
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
