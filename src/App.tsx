import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Experience } from './components/sections/Experience';
import { Profiles } from './components/sections/Profiles';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-retro-cream dark:bg-retro-black transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        <main className="max-w-4xl mx-auto px-4">
          <Hero />
          <TechStack />
          <div className="section-divider my-12" />
          <Experience />
          <div className="section-divider my-12" />
          <Profiles />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
