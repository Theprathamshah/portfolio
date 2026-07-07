import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';

const Hero = lazy(() => import('./components/sections/Hero').then(module => ({ default: module.Hero })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Experience = lazy(() => import('./components/sections/Experience').then(module => ({ default: module.Experience })));
const TechStack = lazy(() => import('./components/sections/TechStack').then(module => ({ default: module.TechStack })));
const Profiles = lazy(() => import('./components/sections/Profiles').then(module => ({ default: module.Profiles })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

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
