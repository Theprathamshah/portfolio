import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import { TechBadge } from '../ui/TechBadge';

export const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-retro-black dark:text-white mb-4 leading-tight tracking-tight select-none"
      >
        Professional Journey
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-retro-gray dark:text-white/50 mb-12 font-medium select-none"
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
            className="glass-card glass-card-hover p-6 md:p-8"
          >

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5 pb-4 border-b border-white/5 select-none">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-retro-black dark:text-white">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-retro-orange/10 text-retro-orange border border-retro-orange/20"
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <p className="text-lg font-bold text-retro-gray/80 dark:text-white/70">
                  {exp.role}
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-retro-gray/50 dark:text-white/40 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-retro-orange/80"></span>
                  <span>{exp.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-retro-orange/80"></span>
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3.5 mb-6">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 text-base text-retro-gray dark:text-white/70 leading-relaxed font-medium"
                >
                  <span className="text-retro-orange mt-1.5 flex-shrink-0 font-extrabold text-sm">→</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            {exp.skills && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 select-none">
                {exp.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} interactive={true} />
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>

    </motion.div>
  );
};
