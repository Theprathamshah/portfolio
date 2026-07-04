import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium high-fidelity SVGs for the AWS and systems icons
const ClientIcon = () => (
  <svg className="w-5 h-5 text-retro-black/80 dark:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const APIGatewayIcon = () => (
  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <path d="M6 6h.01M18 6h.01M6 18h.01M18 18h.01" />
  </svg>
);

const LambdaIcon = () => (
  <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h5L14.5 16.5M14.5 16.5L19 20M14.5 16.5L8 12.5" />
  </svg>
);

const RedisIcon = () => (
  <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14c0 2 8 2 8 2s8 0 8-2M4 9c0 2 8 2 8 2s8 0 8-2" />
    <ellipse cx="12" cy="5" rx="8" ry="3" />
  </svg>
);

const SQSIcon = () => (
  <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h6M12 9v6" />
  </svg>
);

const KafkaIcon = () => (
  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M7 7l3.5 3.5M17 7l-3.5 3.5M7 17l3.5-3.5M17 17l-3.5-3.5" />
  </svg>
);

const PostgresIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

const S3Icon = () => (
  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const MonitoringIcon = () => (
  <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
  </svg>
);

const CloudWatchIcon = () => (
  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

interface NodeProps {
  id: string;
  name: string;
  subText: string;
  left: string;
  top: string;
  hoverShadowClass: string;
  icon: React.ReactNode;
  active: boolean;
  onHover: (id: string | null) => void;
  floatDelay: number;
}

const Node = ({
  id,
  name,
  subText,
  left,
  top,
  hoverShadowClass,
  icon,
  active,
  onHover,
  floatDelay,
}: NodeProps) => (
  <motion.div
    style={{ left, top }}
    className="absolute w-[15%] max-w-[110px] aspect-[1.15] z-10"
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: floatDelay,
    }}
    whileHover={{ y: -7 }}
  >
    <div
      className={`w-full h-full glass-card flex flex-col items-center justify-center p-2 text-center cursor-pointer transition-all duration-300 relative select-none ${
        active 
          ? `border-retro-orange/60 scale-[1.03] shadow-lg ${hoverShadowClass}`
          : 'hover:border-retro-orange/30 shadow-md'
      }`}
    >
      <div className="p-1 rounded-lg bg-retro-black/5 dark:bg-white/5 mb-1 border border-retro-black/5 dark:border-white/5">
        {icon}
      </div>
      <div className="text-[9px] md:text-[10px] font-extrabold text-retro-black dark:text-white leading-tight">
        {name}
      </div>
      <div className="text-[7px] md:text-[8px] text-retro-gray/50 dark:text-white/40 leading-none mt-0.5 font-medium truncate w-full">
        {subText}
      </div>
    </div>
  </motion.div>
);

export const SystemArchitecture = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Nodes database (10 nodes as requested, distributed horizontally to avoid congestion)
  const nodes = [
    {
      id: 'client',
      name: 'Client',
      subText: 'Web / App',
      left: '4%',
      top: '38%',
      hoverShadowClass: 'shadow-white/5',
      icon: <ClientIcon />,
      floatDelay: 0,
      details: 'Client: Initiates HTTP request or WebSocket streams representing user actions.',
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      subText: 'APIGW / Auth',
      left: '22%',
      top: '38%',
      hoverShadowClass: 'shadow-purple-500/10',
      icon: <APIGatewayIcon />,
      floatDelay: 0.5,
      details: 'API Gateway: Route forwarding, rate limiting, and JWT authentication.',
    },
    {
      id: 'lambda',
      name: 'AWS Lambda',
      subText: 'Go/Java Services',
      left: '40%',
      top: '38%',
      hoverShadowClass: 'shadow-orange-500/10',
      icon: <LambdaIcon />,
      floatDelay: 1,
      details: 'AWS Lambda: Executes serverless compute logic containing microservice handlers.',
    },
    {
      id: 'redis',
      name: 'Redis',
      subText: 'ElastiCache',
      left: '40%',
      top: '68%',
      hoverShadowClass: 'shadow-red-500/10',
      icon: <RedisIcon />,
      floatDelay: 1.5,
      details: 'Redis Cache: Stores session tokens and query results to provide <1ms read latency.',
    },
    {
      id: 'sqs',
      name: 'Amazon SQS',
      subText: 'Buffer Queue',
      left: '58%',
      top: '12%',
      hoverShadowClass: 'shadow-pink-500/10',
      icon: <SQSIcon />,
      floatDelay: 2,
      details: 'Amazon SQS: Buffers events asynchronously to isolate downstream DB traffic spikes.',
    },
    {
      id: 'kafka',
      name: 'Kafka',
      subText: 'Event Stream',
      left: '58%',
      top: '42%',
      hoverShadowClass: 'shadow-purple-500/10',
      icon: <KafkaIcon />,
      floatDelay: 2.5,
      details: 'Apache Kafka: Handles high-volume event ingestion and real-time stream processing.',
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      subText: 'RDS Database',
      left: '76%',
      top: '12%',
      hoverShadowClass: 'shadow-blue-500/10',
      icon: <PostgresIcon />,
      floatDelay: 3,
      details: 'PostgreSQL (RDS): Primary relational storage for transactional user data.',
    },
    {
      id: 's3',
      name: 'Amazon S3',
      subText: 'Object Lake',
      left: '76%',
      top: '42%',
      hoverShadowClass: 'shadow-emerald-500/10',
      icon: <S3Icon />,
      floatDelay: 3.5,
      details: 'Amazon S3: Infinite-capacity storage bucket hosting media uploads and data logs.',
    },
    {
      id: 'monitoring',
      name: 'Monitoring',
      subText: 'Grafana Stats',
      left: '58%',
      top: '72%',
      hoverShadowClass: 'shadow-teal-500/10',
      icon: <MonitoringIcon />,
      floatDelay: 4,
      details: 'Grafana & Prometheus: Observability dashboards rendering latency metrics.',
    },
    {
      id: 'cloudwatch',
      name: 'CloudWatch',
      subText: 'AWS Metrics',
      left: '76%',
      top: '72%',
      hoverShadowClass: 'shadow-orange-500/10',
      icon: <CloudWatchIcon />,
      floatDelay: 4.5,
      details: 'Amazon CloudWatch: Native logs analyzer aggregating system errors and warnings.',
    },
  ];

  return (
    <div className="w-full relative bg-white dark:bg-retro-black border border-retro-black/[0.08] dark:border-white/[0.08] rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-6 flex flex-col justify-between aspect-[1.5] min-h-[380px] md:min-h-[420px] select-none z-10">
      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -16;
          }
        }
        .flowing-line {
          stroke-dasharray: 4, 8;
          animation: flow 1.8s linear infinite;
        }
      `}</style>

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-retro-black/5 dark:border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-retro-orange/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-retro-orange animate-ping" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-retro-black dark:text-white uppercase tracking-wider">
            Distributed System Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-bold text-emerald-400">
            All Systems Operational
          </span>
        </div>
      </div>

      {/* SVG Canvas Flow lines */}
      <div className="flex-1 relative w-full h-full min-h-[250px] md:min-h-[300px] mt-4">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* 1. Client -> API Gateway */}
          <path d="M 11.5 45.5 L 22 45.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 11.5 45.5 L 22 45.5" stroke="#ff6b35" strokeWidth="1.5" fill="none" className="flowing-line" />

          {/* 2. API Gateway -> AWS Lambda */}
          <path d="M 29.5 45.5 L 40 45.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 29.5 45.5 L 40 45.5" stroke="#ff6b35" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '0.4s' }} />

          {/* 3. AWS Lambda -> Redis (Cache) */}
          <path d="M 47.5 50.5 L 47.5 68" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 47.5 50.5 L 47.5 68" stroke="#ef4444" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '0.2s' }} />

          {/* 4. AWS Lambda -> SQS (async branch) */}
          <path d="M 47.5 45.5 C 50.5 45.5, 52 19.5, 58 19.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 47.5 45.5 C 50.5 45.5, 52 19.5, 58 19.5" stroke="#ec4899" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '0.6s' }} />

          {/* 5. AWS Lambda -> Kafka (streaming branch) */}
          <path d="M 47.5 45.5 C 50.5 45.5, 52 49.5, 58 49.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 47.5 45.5 C 50.5 45.5, 52 49.5, 58 49.5" stroke="#a78bfa" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '0.8s' }} />

          {/* 6. SQS -> PostgreSQL */}
          <path d="M 65.5 19.5 L 76 19.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 65.5 19.5 L 76 19.5" stroke="#3b82f6" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '1.2s' }} />

          {/* 7. Kafka -> S3 */}
          <path d="M 65.5 49.5 L 76 49.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 65.5 49.5 L 76 49.5" stroke="#10b981" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '1.4s' }} />

          {/* 8. Redis -> Monitoring */}
          <path d="M 47.5 75.5 C 50.5 75.5, 52 79.5, 58 79.5" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 47.5 75.5 C 50.5 75.5, 52 79.5, 58 79.5" stroke="#14b8a6" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '1.6s' }} />

          {/* 9. PostgreSQL -> CloudWatch */}
          <path d="M 83.5 19.5 C 83.5 25, 83.5 70, 83.5 72" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 83.5 19.5 C 83.5 25, 83.5 70, 83.5 72" stroke="#f97316" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '1s' }} />

          {/* 10. S3 -> CloudWatch */}
          <path d="M 83.5 49.5 L 83.5 72" stroke="currentColor" className="text-retro-black/[0.08] dark:text-white/[0.03]" strokeWidth="1.5" fill="none" />
          <path d="M 83.5 49.5 L 83.5 72" stroke="#f97316" strokeWidth="1.5" fill="none" className="flowing-line" style={{ animationDelay: '0.5s' }} />
        </svg>

        {/* Nodes Grid */}
        {nodes.map((node) => (
          <Node
            key={node.id}
            id={node.id}
            name={node.name}
            subText={node.subText}
            left={node.left}
            top={node.top}
            hoverShadowClass={node.hoverShadowClass}
            icon={node.icon}
            active={activeNode === node.id}
            onHover={setActiveNode}
            floatDelay={node.floatDelay}
          />
        ))}
      </div>

      {/* Docs tooltip block */}
      <div className="h-[48px] border-t border-retro-black/5 dark:border-white/5 pt-3 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.p
              key={activeNode}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-[10px] md:text-xs text-retro-gray dark:text-white/80 text-center font-medium max-w-[90%]"
            >
              {nodes.find((n) => n.id === activeNode)?.details}
            </motion.p>
          ) : (
            <motion.p
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="text-[10px] md:text-xs text-retro-gray/50 dark:text-white/30 text-center select-none"
            >
              Hover over any node to inspect system flow logs.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
