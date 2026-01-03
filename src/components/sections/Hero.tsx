import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../ui/Icons';
import { socialLinks } from '@/data/portfolio';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
};

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-6"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-retro-orange/10 text-retro-orange border border-retro-orange/20">
          Full-Stack Engineer
        </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-retro-black dark:text-white mb-6 leading-tight"
      >
        Hi, I'm{' '}
        <span className="relative inline-block">
          <span className="relative z-10">Pratham Shah</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-2 left-0 right-0 h-3 bg-retro-orange/20 -z-0"
            style={{ transformOrigin: 'left' }}
          />
        </span>
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-2xl md:text-3xl lg:text-4xl font-medium text-retro-gray dark:text-retro-paper/70 mb-10"
      >
        Building scalable systems & crafting elegant solutions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-5 text-lg md:text-xl text-retro-gray dark:text-retro-paper/80 leading-relaxed max-w-3xl"
      >
        <p>
          I'm a backend engineer who loves deconstructing complex problems into clean, efficient code. Over the last <span className="text-retro-orange font-semibold">2+ years</span>,
          I've focused on building the core logic behind distributed systems, ensuring they are both scalable and easy to maintain.
        </p>
        <p>
          I'm a firm believer that great software starts with solving the right problems. Whether I'm working with <span className="font-semibold text-retro-black dark:text-white">Java</span>, <span className="font-semibold text-retro-black dark:text-white">Node.js</span>, or <span className="font-semibold text-retro-black dark:text-white">AWS</span>, my goal is always to slash latency and optimize performance for high-growth <span className="font-semibold text-retro-black dark:text-white">e-commerce</span> and <span className="font-semibold text-retro-black dark:text-white">SaaS</span> platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <p className="text-sm font-medium text-retro-gray dark:text-retro-paper/60 mb-4 uppercase tracking-wide">
          Connect with me
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3.5 rounded-xl bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-retro-paper/70 hover:bg-retro-orange/10 hover:border-retro-orange/30 border border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label={link.name}
              >
                <Icon className="w-5 h-5 transition-colors duration-200 text-current group-hover:text-retro-orange" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex justify-center"
      >
        <motion.a
          href="#experience"
          whileHover={{ y: -5 }}
          className="flex flex-col items-center gap-2 text-retro-gray dark:text-retro-paper/60 hover:text-retro-orange transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
