import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';

export const Experience = () => {
  return (
    <section id="experience" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-retro-black dark:text-retro-cream mb-8">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-retro-black dark:text-retro-cream flex items-center gap-2">
                    {exp.company}
                    {exp.current && (
                      <span className="text-xs font-normal px-2 py-0.5 rounded bg-retro-orange/10 text-retro-orange">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="text-retro-gray dark:text-retro-paper/70">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-retro-gray dark:text-retro-paper/60 mb-4">
                <div>
                  <span className="text-retro-black/50 dark:text-retro-paper/40">Type: </span>
                  <span>{exp.type}</span>
                </div>
                <div>
                  <span className="text-retro-black/50 dark:text-retro-paper/40">Period: </span>
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-retro-gray dark:text-retro-paper/70"
                  >
                    <span className="text-retro-orange mt-1 flex-shrink-0">-</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Skills used */}
              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded bg-retro-teal/10 text-retro-teal dark:bg-retro-teal/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
