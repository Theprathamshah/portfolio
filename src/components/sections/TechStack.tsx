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
        className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight tracking-tight select-none"
      >
        Skills & Technical Arsenal
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-white/50 mb-12 font-medium select-none"
      >
        Tools I use to build distributed backends at scale.
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
              className="glass-card glass-card-hover p-6 md:p-7 rounded-xl group"
            >
              <div className="flex items-center gap-3 mb-5 select-none">
                {IconComponent && (
                  <div className="p-2.5 rounded-lg bg-white/5 text-white/50 group-hover:bg-retro-orange/10 group-hover:text-retro-orange border border-white/5 transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}
                <h3 className="text-xl font-extrabold text-white">
                  {category.title}
                </h3>
              </div>
              
              {category.description && (
                <p className="text-sm text-white/60 mb-6 leading-relaxed font-medium">
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
                    className="inline-flex items-center px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider rounded-full bg-white/5 text-white/70 border border-white/5 hover:border-retro-orange/30 hover:bg-white/10 transition-all duration-200 cursor-default select-none"
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </motion.div>
  );
};
