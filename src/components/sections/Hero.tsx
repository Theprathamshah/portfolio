import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../ui/Icons';
import { socialLinks, resumeUrl } from '@/data/portfolio';

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
        className="mb-6 flex items-center gap-3"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-retro-orange/10 text-retro-orange border border-retro-orange/20">
          Full-Stack Engineer
        </span>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
            Available for new opportunities
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-retro-black dark:text-white mb-4 leading-tight flex flex-wrap items-center gap-x-4"
      >
        <span>Hi, I'm</span>
        <span className="text-retro-orange text-glow relative inline-block">
          Pratham Shah
        </span>
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
          className="inline-block origin-[70%_70%]"
        >
          👋
        </motion.span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-retro-gray dark:text-white/80 mb-6 leading-tight"
      >
        I Build <span className="text-retro-orange">Scalable</span> Systems & Elegant Code
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="text-xl md:text-2xl font-medium text-retro-gray/80 dark:text-white/60 mb-10"
      >
        Focused on high-performance backend architectures.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-5 text-lg md:text-xl text-retro-gray dark:text-white/80 leading-relaxed max-w-3xl"
      >
        <p>
          I'm a <span className="text-retro-black dark:text-white font-bold">backend-heavy full-stack engineer</span> who loves deconstructing complex problems into clean, highly efficient code.
        </p>
        <p>
          Currently architecting <span className="text-retro-orange font-semibold">distributed systems</span> and high-volume data pipelines, 
          leveraging <span className="font-semibold text-retro-black dark:text-white">Java</span>, <span className="font-semibold text-retro-black dark:text-white">AWS</span>, and <span className="font-semibold text-retro-black dark:text-white">Go</span> to process millions of records with near-zero latency.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-wrap items-center gap-6"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl bg-retro-orange text-white font-bold hover:bg-retro-rust transition-all duration-200 shadow-lg shadow-retro-orange/20 flex items-center gap-2 group"
        >
          View My Work
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
        
        <motion.a
          href={resumeUrl}
          target='_blank'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl bg-retro-paper dark:bg-retro-gray/30 text-retro-black dark:text-white font-bold border border-retro-black/10 dark:border-white/10 hover:border-retro-orange/40 transition-all duration-200"
        >
          Read Resume
        </motion.a>

        <div className="flex items-center gap-3 ml-0 sm:ml-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-retro-gray dark:text-white/40 hover:text-retro-orange dark:hover:text-retro-orange transition-colors"
                aria-label={link.name}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

    </motion.div>
  );
};
