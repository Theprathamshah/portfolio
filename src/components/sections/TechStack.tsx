import { motion } from 'framer-motion';
import { techStack } from '@/data/portfolio';

export const TechStack = () => {
  return (
    <section id="tech" className="py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-retro-black dark:text-retro-cream mb-2">
          Skills
        </h2>
        <p className="text-retro-gray dark:text-retro-paper/60 mb-8">
          Technologies I've worked with and continue to learn.
        </p>

        <div className="space-y-8">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-mono text-retro-orange mb-3">
                {'< '}{category.title}{' />'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.03 }}
                    className="skill-tag"
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
