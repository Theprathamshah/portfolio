import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-grid">
      {/* Soft overlay gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/[0.01] via-transparent to-retro-teal/[0.01] dark:from-retro-orange/[0.02] dark:to-retro-teal/[0.02]" />
      
      {/* Left Ambient Glow (Teal) */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] -left-[10%] w-[450px] h-[450px] rounded-full bg-retro-teal/[0.12] dark:bg-retro-teal/[0.09] blur-[120px]"
      />

      {/* Right Ambient Glow (Purple) */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[35%] -right-[10%] w-[550px] h-[550px] rounded-full bg-retro-purple/[0.10] dark:bg-retro-purple/[0.08] blur-[130px]"
      />

      {/* Center/Hero Accent Glow (Orange) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.8, 1, 0.85, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[25%] w-[400px] h-[400px] rounded-full bg-retro-orange/[0.08] dark:bg-retro-orange/[0.06] blur-[110px]"
      />
    </div>
  );
};
