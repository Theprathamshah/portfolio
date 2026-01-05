import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../ui/Icons';
import { socialLinks } from '@/data/portfolio';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
};

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-retro-black dark:text-white mb-4"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-retro-gray dark:text-white/70 mb-12"
      >
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="retro-card p-6 md:p-8 retro-card-hover"
        >
          <h3 className="text-xl font-bold text-retro-black dark:text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-retro-gray dark:text-white/70 mb-6 leading-relaxed">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          <div className="space-y-3">
            <motion.a
              href="mailto:itspratham2911@gmail.com"
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-3 text-retro-gray dark:text-white/70 hover:text-retro-orange transition-colors group"
            >
              <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30 group-hover:bg-retro-orange/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">itspratham2911@gmail.com</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pratham-shah-7924871b9/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-3 text-retro-gray dark:text-white/70 hover:text-retro-orange transition-colors group"
            >
              <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30 group-hover:bg-retro-orange/10 transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn Profile</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="retro-card p-6 md:p-8 retro-card-hover"
        >
          <h3 className="text-xl font-bold text-retro-black dark:text-white mb-4">
            Social Links
          </h3>
          <p className="text-retro-gray dark:text-white/70 mb-6 leading-relaxed">
            Connect with me on these platforms to see my latest work and updates.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-white/70 hover:bg-retro-orange/10 hover:text-retro-orange border border-transparent hover:border-retro-orange/30 transition-all duration-200"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

