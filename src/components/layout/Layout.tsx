import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { Navbar } from './Navbar';
import { Footer } from '../sections/Footer';

export const Layout = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-retro-cream dark:bg-retro-black transition-colors duration-300 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4 relative z-10 w-full flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
  );
};
