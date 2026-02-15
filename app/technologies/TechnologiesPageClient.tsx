'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Monitor, Server, Smartphone, Cloud } from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';
import { TechIcon } from '../components/ui/tech-icons';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const container = { visible: { transition: { staggerChildren: 0.06 } } };

const stacks = [
  {
    title: 'Frontend',
    icon: Monitor,
    desc: 'Fast, accessible interfaces with modern React and tooling.',
    tech: [
      { name: 'Next.js' as const, detail: 'App Router, SSR, API routes' },
      { name: 'React' as const, detail: 'Components, hooks, state' },
      { name: 'TypeScript' as const, detail: 'Type safety and DX' },
      { name: 'Tailwind' as const, detail: 'Utility-first styling' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    desc: 'Scalable APIs and business logic you can rely on.',
    tech: [
      { name: 'Node.js' as const, detail: 'Fast, event-driven runtime' },
      { name: 'Laravel' as const, detail: 'PHP ecosystem, Eloquent, queues' },
      { name: 'PostgreSQL' as const, detail: 'Reliable data layer' },
      { name: 'REST & GraphQL' as const, detail: 'API design' },
    ],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    desc: 'Native and cross-platform apps that feel at home on every device.',
    tech: [
      { name: 'Flutter' as const, detail: 'Single codebase, native performance' },
      { name: 'React Native' as const, detail: 'React skills on mobile' },
      { name: 'Expo' as const, detail: 'Faster iteration, OTA updates' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Deploy, scale, and monitor with industry-standard tools.',
    tech: [
      { name: 'AWS' as const, detail: 'Compute, storage, serverless' },
      { name: 'Vercel' as const, detail: 'Frontend and edge' },
      { name: 'Docker' as const, detail: 'Containers and CI/CD' },
      { name: 'GitHub Actions' as const, detail: 'Automation and pipelines' },
    ],
  },
];

export function TechnologiesPageClient() {
  return (
    <>
      <Section className="px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Technologies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            Our tech stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400"
          >
            We build with proven, modern technologies—so your product is fast, maintainable, and scalable.
          </motion.p>
        </div>
      </Section>

      <Section className="px-4 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {stacks.map((stack) => (
              <motion.div key={stack.title} variants={fadeUp}>
                <GlassCard hoverGlow className="p-6 md:p-8 h-full">
                  <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 w-14 h-14 flex items-center justify-center mb-5">
                    <stack.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{stack.title}</h2>
                  <p className="mt-2 text-slate-400 text-sm">{stack.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {stack.tech.map((t) => (
                      <li key={t.name} className="flex items-center gap-3">
                        <TechIcon name={t.name} className="[&>svg]:w-5 [&>svg]:h-5 flex-shrink-0 text-indigo-400/90" />
                        <div>
                          <span className="font-medium text-slate-200">{t.name}</span>
                          <span className="text-slate-500 text-sm ml-2">— {t.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="px-4 py-16 md:py-24 bg-slate-900/20 border-y border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-400">We pick the right tools for your product—not the other way around.</p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-indigo-400 font-medium hover:text-indigo-300 transition"
          >
            Discuss your stack →
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
