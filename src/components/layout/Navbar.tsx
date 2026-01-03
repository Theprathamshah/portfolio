import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon } from '../ui/Icons';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Achievements', href: '#achievements' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections: string[] = ['about', 'experience', 'tech', 'achievements'];
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
          ? 'bg-retro-cream/80 dark:bg-retro-black/80 backdrop-blur-md border-b border-retro-black/5 dark:border-white/5' 
          : 'bg-transparent'
        }
      `}
      role="navigation"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <motion.a
          href="#about"
          whileHover={{ scale: 1.02 }}
          className="font-semibold text-lg text-retro-black dark:text-retro-cream"
        >
          Pratham Shah
        </motion.a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-retro-orange bg-retro-orange/10'
                        : 'text-retro-gray dark:text-retro-paper/70 hover:text-retro-orange hover:bg-retro-paper dark:hover:bg-retro-gray/30'
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

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-retro-gray dark:text-retro-paper/70 hover:text-retro-orange hover:bg-retro-paper dark:hover:bg-retro-gray/30 transition-all"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
