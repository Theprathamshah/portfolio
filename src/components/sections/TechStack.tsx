import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { techStack } from '@/data/portfolio';
import { CircuitBoardIcon, ServerIcon, PaletteIcon } from '../ui/Icons';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  'circuit-board': CircuitBoardIcon,
  'server': ServerIcon,
  'palette': PaletteIcon,
};

export const TechStack = () => {
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
        className="text-3xl md:text-4xl font-semibold text-retro-black dark:text-white mb-2"
      >
        Skills & Technical Arsenal
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-retro-gray dark:text-retro-paper/60 mb-12"
      >
        Tools I use to break (and fix) things.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {techStack.map((category, categoryIndex) => {
          const IconComponent = category.icon ? iconMap[category.icon] : null;
          
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="retro-card p-6 md:p-7 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                {IconComponent && (
                  <div className="p-2.5 rounded-lg bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-retro-paper/70 group-hover:bg-retro-orange/10 group-hover:text-retro-orange transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-retro-black dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              {category.description && (
                <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-6 leading-relaxed">
                  {category.description}
                </p>
              )}
              
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-full bg-retro-paper dark:bg-retro-gray/20 text-retro-black dark:text-white/90 border border-retro-black/5 dark:border-retro-gray/30 hover:border-retro-orange/40 hover:bg-retro-orange/5 dark:hover:bg-retro-orange/10 transition-all duration-200 cursor-default"
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <motion.a
          href="#achievements"
          whileHover={{ y: -5 }}
          className="flex flex-col items-center gap-2 text-retro-gray dark:text-retro-paper/60 hover:text-retro-orange transition-colors"
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
