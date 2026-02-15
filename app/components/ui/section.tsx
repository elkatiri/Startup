'use client';

import { motion } from 'framer-motion';

const defaultReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Optional: wrap content in motion.div with scroll reveal */
  reveal?: boolean;
};

export function Section({ children, className = '', id, reveal }: SectionProps) {
  const content = reveal ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={defaultReveal}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  ) : (
    children
  );

  return (
    <section id={id} className={className}>
      {content}
    </section>
  );
}
