import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';
import { socialLinks, resumeUrl } from '@/data/portfolio';
import { SystemArchitecture } from '../ui/SystemArchitecture';

// Custom SVG Icons for Tech Stack Tags
const JavaIcon = () => (
  <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <path d="M6 1v3" />
    <path d="M10 1v3" />
    <path d="M14 1v3" />
  </svg>
);

const GoIcon = () => (
  <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-4v4h4" />
    <path d="M12 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
    <path d="M2 6h8" />
    <path d="M2 10h6" />
    <path d="M2 14h4" />
  </svg>
);

const AWSIcon = () => (
  <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19A5.5 5.5 0 0 0 18 8h-1.26A8 8 0 1 0 3 16.3" />
    <path d="M6 21c3-1 7-1 10 0" />
    <path d="M14 19l2 2-2 2" />
  </svg>
);

const DockerIcon = () => (
  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 14c-1.5 0-3-1.5-3-3V9c0-1.5-1-3-3-3H6C4 6 3 7.5 3 9v3c0 2 1.5 3.5 3 3.5h10c1.5 0 3-1 4-2.5" />
    <path d="M7 6v-3h3v3" />
    <path d="M11 6v-3h3v3" />
    <path d="M7 3h3" />
    <path d="M11 3h3" />
  </svg>
);

const KafkaIcon = () => (
  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="18" r="3" />
    <circle cx="19" cy="18" r="3" />
    <path d="M10 7.5L6.5 15.5" />
    <path d="M14 7.5L17.5 15.5" />
    <path d="M8 18h8" />
  </svg>
);

const PostgresIcon = () => (
  <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-2.239 10-5s-4.477-5-10-5-10 2.239-10 5 4.477 5 10 5z" />
    <path d="M22 12c0 2.761-4.477 5-10 5S2 14.761 2 12" />
    <path d="M22 7c0 2.761-4.477 5-10 5S2 9.761 2 7" />
  </svg>
);

const MailIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const techTags = [
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'Go', icon: <GoIcon /> },
  { name: 'AWS', icon: <AWSIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Kafka', icon: <KafkaIcon /> },
  { name: 'PostgreSQL', icon: <PostgresIcon /> },
];

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col gap-12 lg:gap-16 py-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left Bio Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* Header Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-retro-orange/10 text-retro-orange border border-retro-orange/20 select-none">
              Distributed Systems Engineer
            </span>
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 dark:text-emerald-400">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Premium SaaS Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-2 mb-6"
          >
            <span className="text-sm font-bold text-retro-orange uppercase tracking-[0.25em]">
              Hi, I'm Pratham Shah
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Build <span className="text-retro-orange text-glow">Scalable</span> Distributed Systems
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white/50 leading-tight">
              Elegant Backend Architecture
            </h2>
          </motion.div>

          {/* Bio Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base text-white/60 leading-relaxed mb-8 max-w-xl font-medium"
          >
            Backend-focused engineer passionate about designing distributed systems and high-performance architectures. 
            I love turning complex problems into simple, efficient and reliable solutions.
          </motion.p>

          {/* Call-to-Actions & Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-retro-orange to-retro-rust text-white font-bold hover:shadow-[0_0_20px_rgba(255,107,53,0.45)] transition-all duration-300 flex items-center gap-2 group text-sm"
            >
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 hover:border-white/20 transition-all duration-300 text-sm"
            >
              Read Resume
            </motion.a>

            <div className="flex items-center gap-3 ml-2">
              <motion.a
                href={socialLinks.find(s => s.name.toLowerCase() === 'github')?.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full border border-white/10 hover:border-retro-orange/40 text-white/40 hover:text-retro-orange transition-all duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4.5 h-4.5" />
              </motion.a>

              <motion.a
                href={socialLinks.find(s => s.name.toLowerCase() === 'linkedin')?.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full border border-white/10 hover:border-retro-orange/40 text-white/40 hover:text-retro-orange transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4.5 h-4.5" />
              </motion.a>

              <motion.a
                href="mailto:itspratham2911@gmail.com"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full border border-white/10 hover:border-retro-orange/40 text-white/40 hover:text-retro-orange transition-all duration-300"
                aria-label="Email"
              >
                <MailIcon className="w-4.5 h-4.5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Infrastructure Diagram Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-7 w-full flex items-center justify-center"
        >
          <SystemArchitecture />
        </motion.div>
      </div>

      {/* About Me Section at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full glass-card p-8 md:p-10 mt-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-retro-orange">
              About Me
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Backend engineer with a passion for <span className="text-retro-orange text-glow">scale</span>.
            </h3>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            <p className="text-base text-white/60 leading-relaxed max-w-2xl font-medium">
              I specialize in designing and building distributed systems that
              handle millions of requests with low latency and high reliability.
            </p>
            
            {/* Tech tag list using glassmorphic pills */}
            <div className="flex flex-wrap gap-2.5">
              {techTags.map((tag) => (
                <div
                  key={tag.name}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold shadow-sm hover:border-retro-orange/30 hover:bg-white/10 transition-all select-none"
                >
                  {tag.icon}
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
