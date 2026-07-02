import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, useInView } from 'framer-motion';

// CountUp component to animate statistics numbers when scrolled into view
interface CountUpProps {
  value: number;
  duration?: number;
}

const CountUp = ({ value, duration = 1.5 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMilliseconds = duration * 1000;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed > totalMilliseconds) {
        setCount(end);
        return;
      }

      const progress = elapsed / totalMilliseconds;
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

// Premium brand vectors for Tech Badges matching mockups exactly
const getTechIcon = (name: string) => {
  const key = name.toLowerCase().replace(/[\s./-]/g, '');

  if (key === 'java') {
    return (
      <svg className="w-3 h-3 text-[#E44F26]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.6v-2h2v2h-2zm0-3.6V6.4h2V14h-2z" />
      </svg>
    );
  }
  if (key === 'go') {
    return (
      <svg className="w-3 h-3 text-[#00ADD8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    );
  }
  if (key === 'python') {
    return (
      <svg className="w-3 h-3 text-[#FFD43B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-1.6h-2v1.6h-2v-4.1h6v4.1h-2z" />
      </svg>
    );
  }
  if (key === 'typescript') {
    return (
      <svg className="w-3 h-3 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 11.5v7h-2.5v-7H12zm5 1.5v5.5h-2.5V13c0-.8-.6-1.5-1.5-1.5H12v-2h1c1.8 0 4 1 4 3.5z" fill="white" />
      </svg>
    );
  }
  if (key === 'javascript') {
    return (
      <svg className="w-3 h-3 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 16c0 1.5-1 2.5-2.5 2.5S7 17.5 7 16h2.5c0 .5.3.8.8.8s.8-.3.8-.8v-5h2.5v5zm6.5-1.5H16V16c0 .8-.6 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-5.5h2.5v4.5h1.5v-4.5H19v5.5c0 1.5-1 2.5-2.5 2.5z" fill="black" />
      </svg>
    );
  }
  if (key === 'linux') {
    return (
      <svg className="w-3 h-3 text-white/90" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.9h-2v-2h2v2zm1.6-4.8l-.8.9c-.6.7-.8 1.4-.8 2h-2v-.5c0-1.1.4-2.1 1.2-2.9l1.2-1.2c.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .9-.4 1.7-1 2.1z" />
      </svg>
    );
  }
  if (key === 'docker') {
    return (
      <svg className="w-3 h-3 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 8.871h-1.996v1.996h1.996V8.871zm-2.495 0H9.492v1.996h1.996V8.871zm-2.495 0H6.997v1.996h1.996V8.871zm-2.496 0H4.501v1.996h1.996V8.871zm5.2 6.5s-2.02-.15-2.6-.58v-1.16s.58.43 2.6.58zm5.295-8.5h-1.996v1.996h1.996V6.871zm-2.495 0H11.99v1.996h1.996V6.871zm-2.495 0H9.492v1.996h1.996V6.871zm-2.496 0H6.997v1.996h1.996V6.871zm-1.802 8s.5-1.5 2-1.5h14c1 0 1.5.5 1.5 1.5s-1.5 2.5-3 2.5H4.5c-1.5 0-2.5-1-2.5-2.5z" />
      </svg>
    );
  }
  if (key === 'springboot' || key === 'hibernate') {
    return (
      <svg className="w-3 h-3 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8h-3V4c0-1.1-.9-2-2-2s-2 .9-2 2v4H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-5-4c0-.55.45-1 1-1s1 .45 1 1v4h-2V4z" />
      </svg>
    );
  }
  if (key === 'postgresql' || key === 'mysql' || key === 'mongodb' || key === 'redis' || key === 'dynamodb' || key === 'elasticsearch') {
    return (
      <svg className="w-3 h-3 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.9v-2.2c-2.4-.3-4-1.5-4-3.6h2c.1 1.1 1.2 1.8 2.1 1.8s2-.7 2-1.8c0-.9-1.2-1.4-2.5-1.9" />
      </svg>
    );
  }
  if (key === 'react' || key === 'nextjs') {
    return (
      <svg className="w-3 h-3 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    );
  }
  if (key.includes('aws') || key === 's3' || key === 'sqs' || key === 'sns' || key === 'kinesis' || key === 'iam' || key === 'cloudwatch' || key === 'stepfunctions' || key === 'eventbridge') {
    return (
      <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    );
  }

  // Fallback icon for abstract concepts (system design, microservices, concurrency, CI/CD, etc.)
  return (
    <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
};

const TechBadge = ({ name }: { name: string }) => {
  const icon = getTechIcon(name);
  return (
    <motion.span
      whileHover={{
        scale: 1.03,
        y: -1,
        borderColor: 'rgba(255, 107, 53, 0.25)',
        boxShadow: '0 0 10px rgba(255, 107, 53, 0.12)',
        backgroundColor: 'rgba(255, 107, 53, 0.04)',
      }}
      transition={{ duration: 0.15 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-white/[0.03] text-white/75 border border-white/[0.06] hover:text-white cursor-default select-none transition-colors"
    >
      {icon}
      <span>{name}</span>
    </motion.span>
  );
};

interface SaaSTechCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  badges: string[];
  bottomLabel: string;
  bottomIcon: React.ReactNode;
}

const SaaSTechCard = ({ title, icon, description, badges, bottomLabel, bottomIcon }: SaaSTechCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 5 },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6, scale: 1.005 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative flex flex-col justify-between bg-white/[0.02] border border-white/[0.07] backdrop-blur-[20px] -webkit-backdrop-blur-[20px] rounded-[24px] p-6 md:p-8 shadow-xl overflow-hidden hover:border-retro-orange/30 transition-colors duration-300 select-none group w-full min-h-[500px]"
    >
      {/* Dynamic Cursor Highlight overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(255, 107, 53, 0.05), transparent 80%)`,
          }}
        />
      )}

      {/* Header Info */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-3 rounded-2xl bg-white/[0.04] text-white/80 border border-white/[0.06] group-hover:bg-retro-orange/10 group-hover:text-retro-orange transition-colors"
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-white/55 leading-relaxed font-semibold mb-6">
          {description}
        </p>

        {/* Staggered list tags wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {badges.map((badge) => (
            <motion.div key={badge} variants={itemVariants}>
              <TechBadge name={badge} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* High-Fidelity Bottom Focus Bar */}
      <div className="relative z-10 pt-4 border-t border-white/[0.05] mt-auto flex items-center gap-2 text-[10px] md:text-xs">
        <div className="text-retro-orange shrink-0">
          {bottomIcon}
        </div>
        <div className="font-extrabold text-white/80 leading-tight">
          {bottomLabel.split(':')[0]}: 
          <span className="font-medium text-white/50 ml-1">
            {bottomLabel.split(':')[1]}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  // Hardcoded premium tech categories and bottom stats metadata matching design mockup
  const categories = [
    {
      title: 'Systems & Core',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: 'Where the real magic happens. Direct memory access or nothing.',
      badges: [
        'Java',
        'Go',
        'Python',
        'TypeScript',
        'Linux',
        'Docker',
        'Microservices',
        'Event-Driven Design',
        'System Design',
      ],
      bottomLabel: 'Focus: Low-level thinking, high-level impact.',
      bottomIcon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Backend & Data',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      description: 'Handling data efficiently and keeping the server alive.',
      badges: [
        'Spring Boot',
        'Hibernate',
        'Redis',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'DynamoDB',
        'RabbitMQ',
        'Kafka',
        'AWS Lambda',
        'Step Functions',
        'EventBridge',
        'SQS',
        'SNS',
        'Kinesis',
        'Terraform',
        'ElasticSearch',
        'GitLab CI/CD',
        'JUnit / Mockito',
        'REST / GraphQL',
      ],
      bottomLabel: 'Built For Scale: Millions of requests. Zero drama.',
      bottomIcon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4" />
        </svg>
      ),
    },
    {
      title: 'Frontend (The Vibe)',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Making things look good enough to click.',
      badges: [
        'React',
        'TypeScript',
        'Next.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Framer Motion',
      ],
      bottomLabel: 'Clean • Fast • Responsive: Pixel-perfect. Performance-first.',
      bottomIcon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18" />
        </svg>
      ),
    },
  ];

  const stats = [
    {
      value: 5,
      label: 'Programming Languages',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 25,
      label: 'Technologies & Tools',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: 3,
      label: 'Cloud Platforms',
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      value: 10,
      label: 'Production Systems',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      value: 2,
      label: 'Years of Experience',
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="w-full relative py-6"
    >
      {/* Header and Floating Action Label layout */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 relative select-none">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-retro-orange mb-3 uppercase tracking-[0.25em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-retro-orange" />
            What I Work With
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            Skills & Technical <span className="text-retro-orange text-glow">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base text-white/55 font-medium leading-relaxed max-w-xl"
          >
            Technologies, frameworks, and tools I use to build distributed systems at scale.
          </motion.p>
        </div>

        {/* Top-Right Floating Feature Panel */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-5 w-full sm:max-w-[280px] self-start lg:self-center border-white/[0.08] relative overflow-hidden group hover:border-retro-orange/30 transition-colors duration-300"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-retro-orange/[0.02] rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center gap-3.5 relative z-10">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="p-3 rounded-xl bg-retro-orange/10 text-retro-orange border border-retro-orange/20 flex-shrink-0"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.9 2.5 6.5L8 14l3 3 6.5 6.5c1.6 1.5 4 2.5 6.5 2.5 0-2.5-1-4.9-2.5-6.5L14 16" />
                <path d="M9 15l-3 3" />
                <path d="M15 9l3-3" />
              </svg>
            </motion.div>
            <div>
              <h4 className="text-[11px] font-extrabold text-white/95 tracking-wide uppercase mb-0.5">
                Always learning. Always building.
              </h4>
              <div className="flex items-center gap-1 text-[9px] font-bold text-white/45 uppercase tracking-wider">
                <span>Exploring</span>
                <span className="text-retro-orange">•</span>
                <span>Building</span>
                <span className="text-retro-orange">•</span>
                <span>Scaling</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3 Premium SaaS Glass Cards (Expanded Width Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 w-full">
        {categories.map((cat) => (
          <SaaSTechCard
            key={cat.title}
            title={cat.title}
            icon={cat.icon}
            description={cat.description}
            badges={cat.badges}
            bottomLabel={cat.bottomLabel}
            bottomIcon={cat.bottomIcon}
          />
        ))}
      </div>

      {/* Continuous Capsule Statistics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full glass-card py-6 px-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 border-white/[0.06] select-none shadow-2xl items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-retro-orange/[0.01] via-transparent to-retro-purple/[0.01] pointer-events-none" />
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 px-2 md:justify-center relative"
          >
            {/* Staggered Divider lines for desktop view */}
            {i > 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/[0.06]" />
            )}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center shrink-0"
            >
              {stat.icon}
            </motion.div>
            <div className="flex flex-col text-left">
              <div className="text-2xl font-extrabold text-white leading-none mb-1 tracking-tight">
                <CountUp value={stat.value} />+
              </div>
              <div className="text-[9px] font-extrabold text-white/40 uppercase tracking-widest leading-tight max-w-[120px]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
