import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Profiles } from './components/sections/Profiles';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-retro-cream dark:bg-retro-black transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        <main className="relative">
          <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto w-full">
              <Hero />
            </div>
          </section>

          <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto w-full">
              <Experience />
            </div>
          </section>

          <section id="tech" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto w-full">
              <TechStack />
            </div>
          </section>

          <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto w-full">
              <Profiles />
            </div>
          </section>

          <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto w-full">
              <Contact />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
