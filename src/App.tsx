import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Profiles } from './components/sections/Profiles';
import { Contact } from './components/sections/Contact';

const AboutPage = () => (
  <div className="flex-grow flex flex-col items-center justify-center py-6 w-full max-w-7xl mx-auto">
    <div className="w-full">
      <Hero />
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="flex-grow flex flex-col items-center justify-center py-6 w-full max-w-6xl mx-auto">
    <div className="w-full">
      <Projects />
    </div>
  </div>
);

const ExperiencePage = () => (
  <div className="flex-grow flex flex-col items-center justify-center py-6 w-full max-w-6xl mx-auto">
    <div className="w-full">
      <Experience />
    </div>
  </div>
);

const TechStackPage = () => (
  <div className="flex-grow flex flex-col items-center justify-center py-6 w-full max-w-6xl mx-auto">
    <div className="w-full">
      <TechStack />
    </div>
  </div>
);

const AchievementsPage = () => (
  <div className="flex-grow flex flex-col items-center justify-center py-6 w-full max-w-6xl mx-auto">
    <div className="w-full">
      <Profiles />
    </div>
  </div>
);

const ContactPage = () => (
  <div className="flex-grow flex flex-col items-center justify-center py-6 w-full max-w-6xl mx-auto">
    <div className="w-full">
      <Contact />
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="tech" element={<TechStackPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
