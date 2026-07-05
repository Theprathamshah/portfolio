import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/portfolio';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16 select-none">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1 rounded-full bg-retro-black/5 dark:bg-white/5 text-[10px] font-bold text-retro-orange border border-retro-black/10 dark:border-white/10 mb-4 uppercase tracking-[0.2em]"
        >
          Featured Work
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-retro-black dark:text-white mb-6 leading-tight tracking-tight"
        >
          Featured <span className="text-retro-orange text-glow">Engineering</span> Projects
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-retro-gray dark:text-white/50 max-w-2xl mx-auto font-medium"
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
