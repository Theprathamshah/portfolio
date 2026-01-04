import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../ui/Icons';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections: string[] = ['about', 'experience', 'tech', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        if (!sectionId) continue;
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-50 px-4 py-3
        transition-all duration-300
        ${isScrolled 
          ? 'bg-retro-cream/90 dark:bg-retro-black/90 backdrop-blur-md border-b border-retro-black/5 dark:border-retro-gray/20' 
          : 'bg-transparent'
        }
      `}
      role="navigation"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <motion.a
          href="#about"
          whileHover={{ scale: 1.02 }}
          className="font-semibold text-lg text-retro-black dark:text-white"
        >
          Pratham Shah
        </motion.a>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-retro-orange bg-retro-orange/10 dark:bg-retro-orange/20 dark:text-retro-orange'
                        : 'text-retro-gray dark:text-white/70 hover:text-retro-orange hover:bg-retro-offWhite dark:hover:bg-retro-gray/20'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-lg bg-retro-orange/10 border border-retro-orange/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-retro-gray dark:text-white/70 hover:text-retro-orange hover:bg-retro-paper dark:hover:bg-retro-gray/30 transition-all"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-retro-gray dark:text-white/70 hover:text-retro-orange hover:bg-retro-paper dark:hover:bg-retro-gray/30 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-retro-paper dark:bg-retro-dark border border-retro-black/10 dark:border-retro-gray/20 rounded-lg shadow-xl overflow-hidden"
            >
              <ul className="flex flex-col py-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-retro-orange bg-retro-orange/10 dark:bg-retro-orange/20'
                            : 'text-retro-gray dark:text-white/70 hover:text-retro-orange hover:bg-retro-offWhite dark:hover:bg-retro-gray/20'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
