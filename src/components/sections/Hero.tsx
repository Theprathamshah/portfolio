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
    <section id="hero" className="pt-28 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-retro-black dark:text-retro-cream mb-6">
          Full-Stack Software Engineer
        </h1>

        <div className="space-y-4 text-retro-gray dark:text-retro-paper/80 leading-relaxed max-w-3xl">
          <p>
            Hey, I’m a backend engineer who loves deconstructing complex problems into clean, efficient code. Over the last <span className="text-retro-orange font-medium">2+ years</span>,
            I’ve focused on building the core logic behind distributed systems, ensuring they are both scalable and easy to maintain.
          </p>
          <p>
            I’m a firm believer that great software starts with solving the right problems. Whether I'm working with <span className="font-medium text-retro-black dark:text-retro-cream">Java</span>, <span className="font-medium text-retro-black dark:text-retro-cream">Node.js</span>, or <span className="font-medium text-retro-black dark:text-retro-cream">AWS</span>, my goal is always to slash latency and optimize performance for high-growth <span className="font-medium text-retro-black dark:text-retro-cream">e-commerce</span> and <span className="font-medium text-retro-black dark:text-retro-cream">SaaS</span> platforms.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <p className="text-sm text-retro-gray dark:text-retro-paper/60 mb-3">
            Where to find me
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
                  whileHover={{ y: -2 }}
                  className="p-2.5 rounded-lg bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-retro-paper/70 hover:text-retro-orange hover:bg-retro-orange/10 transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
