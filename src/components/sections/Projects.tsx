import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/portfolio';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1.5 rounded-full bg-retro-paper dark:bg-retro-gray/30 text-[10px] font-bold text-retro-black dark:text-white/80 border border-retro-black/10 dark:border-white/10 mb-4 uppercase tracking-[0.2em]"
        >
          PROJECTS
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-retro-black dark:text-white mb-6"
        >
          Featured <span className="text-retro-orange">Engineering</span> Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-retro-gray dark:text-white/70 max-w-2xl mx-auto"
        >
          Real-world problems solved with scalable code, event-driven architectures, and high-performance engineering.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
