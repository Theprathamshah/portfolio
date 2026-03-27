import { motion } from 'framer-motion';
import { Project } from '@/types';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full retro-card overflow-hidden border-retro-black/10 dark:border-white/10 hover:border-retro-orange/40 transition-all duration-300 bg-white dark:bg-retro-black shadow-sm hover:shadow-xl"
    >
      {/* Project Image Preview */}
      <div className="relative h-56 overflow-hidden bg-retro-paper dark:bg-retro-gray/20">
        {project.image ? (
          <div className="relative h-full w-full">
            {/* macOS Style Bar for live projects */}
            {project.link && (
              <div className="absolute top-0 left-0 right-0 h-6 bg-retro-paper/80 dark:bg-retro-gray/80 backdrop-blur-sm z-20 flex items-center px-3 gap-1.5 border-b border-retro-black/5 dark:border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <div className="ml-2 px-2 py-0.5 rounded text-[10px] bg-white/50 dark:bg-black/20 text-retro-gray truncate max-w-[150px]">
                  {project.link.replace('https://', '')}
                </div>
              </div>
            )}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-retro-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
               <p className="text-white text-xs font-medium backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
                 {project.link ? 'Live Preview' : 'Technical Case Study'}
               </p>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-retro-orange/5">
            <svg className="w-12 h-12 text-retro-orange/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-retro-black dark:text-white group-hover:text-retro-orange transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-white/70 hover:text-retro-orange hover:bg-retro-orange/10 transition-all border border-transparent hover:border-retro-orange/20"
                aria-label="View Source"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-white/70 hover:text-retro-orange hover:bg-retro-orange/10 transition-all border border-transparent hover:border-retro-orange/20"
                aria-label="Live Demo"
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-sm text-retro-gray dark:text-white/70 mb-6 line-clamp-2">
          {project.description}
        </p>

        {project.impact && (
          <div className="mb-6 p-3 rounded-lg bg-retro-orange/5 border border-retro-orange/10">
            <p className="text-xs font-medium text-retro-orange flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-orange opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-retro-orange"></span>
              </span>
              {project.impact}
            </p>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-retro-paper dark:bg-retro-gray/10 text-retro-gray dark:text-white/50 border border-retro-black/5 dark:border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
