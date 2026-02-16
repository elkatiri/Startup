'use client';

import { motion } from 'framer-motion';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
};

export function GlassCard({ children, className = '', hoverGlow }: GlassCardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl border backdrop-blur-xl
        bg-[color:var(--surface)] border-[color:var(--border)]
        ${hoverGlow ? 'hover:border-indigo-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.35)]' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hoverGlow ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
