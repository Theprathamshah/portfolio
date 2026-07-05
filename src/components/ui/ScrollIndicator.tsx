import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ScrollIndicatorProps {
  to: string;
  label?: string;
  className?: string;
}

const MotionLink = motion(Link);

export const ScrollIndicator = ({ to, label = "Continue Exploring", className = "" }: ScrollIndicatorProps) => {
  return (
    <div className={`mt-12 flex justify-center ${className}`}>
      <MotionLink
        to={to}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ y: 5 }}
        className="flex flex-col items-center gap-3 text-retro-gray dark:text-white/40 hover:text-retro-orange transition-colors group cursor-pointer"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] group-hover:text-retro-orange transition-colors">
          {label}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-retro-gray/20 dark:border-white/10 group-hover:border-retro-orange/30 group-hover:bg-retro-orange/5 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </MotionLink>
    </div>
  );
};
