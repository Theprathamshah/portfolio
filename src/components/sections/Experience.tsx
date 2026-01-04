import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';

export const Experience = () => {
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
        Professional Journey
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-retro-gray dark:text-white/70 mb-12"
      >
        My career path and the experiences that shaped me.
      </motion.p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="retro-card p-6 md:p-8 hover:shadow-lg transition-all duration-300"
          >

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5 pb-4 border-b border-retro-black/5 dark:border-white/5">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-retro-black dark:text-white">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-retro-orange/10 text-retro-orange border border-retro-orange/20"
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <p className="text-lg font-medium text-retro-gray dark:text-white/80">
                  {exp.role}
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-retro-gray dark:text-retro-paper/60">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-retro-orange/60"></span>
                  <span>{exp.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-retro-orange/60"></span>
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 text-base text-retro-gray dark:text-white/80 leading-relaxed"
                >
                  <span className="text-retro-orange mt-1.5 flex-shrink-0 font-bold">▸</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            {exp.skills && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-retro-black/5 dark:border-white/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-retro-teal/10 text-retro-teal dark:bg-retro-teal/20 border border-retro-teal/20 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <motion.a
          href="#tech"
          whileHover={{ y: -5 }}
          className="flex flex-col items-center gap-2 text-retro-gray dark:text-white/60 hover:text-retro-orange transition-colors"
        >
          <span className="text-sm">Continue exploring</span>
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
