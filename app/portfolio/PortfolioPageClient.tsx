'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const container = { visible: { transition: { staggerChildren: 0.08 } } };

const projects = [
  { slug: 'fintech-dashboard', title: 'FinTech Dashboard', tag: 'SaaS', desc: 'Real-time analytics and reporting platform for a B2B finance startup. Next.js, React, and custom charts.', year: '2025' },
  { slug: 'ecommerce-brand', title: 'E-commerce Brand Store', tag: 'E-commerce', desc: 'High-converting store with custom checkout, subscriptions, and inventory sync. Headless CMS + Laravel.', year: '2025' },
  { slug: 'health-fitness-app', title: 'Health & Fitness App', tag: 'Mobile', desc: 'Cross-platform app with workout plans, progress tracking, and offline sync. Flutter.', year: '2024' },
  { slug: 'startup-mvp', title: 'Startup MVP Platform', tag: 'SaaS', desc: 'End-to-end MVP: auth, billing, dashboard, and core workflows in 10 weeks.', year: '2024' },
  { slug: 'internal-tooling', title: 'Internal Operations Tool', tag: 'Custom', desc: 'Custom dashboard and workflows for a scaling operations team. React + Node API.', year: '2024' },
  { slug: 'marketplace', title: 'Niche Marketplace', tag: 'E-commerce', desc: 'Two-sided marketplace with search, payments, and seller onboarding.', year: '2023' },
];

export function PortfolioPageClient() {
  return (
    <>
      <Section className="px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            Selected work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400"
          >
            SaaS, e-commerce, mobile, and custom platforms we’ve shipped for founders and teams.
          </motion.p>
        </div>
      </Section>

      <Section className="px-4 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <GlassCard hoverGlow className="overflow-hidden h-full flex flex-col group">
                  <div className="aspect-video bg-slate-800/50 flex items-center justify-center">
                    <Sparkles className="w-14 h-14 text-indigo-500/40 group-hover:text-indigo-500/60 transition-colors" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">{project.tag}</span>
                      <span className="text-xs text-slate-500">{project.year}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-white">{project.title}</h2>
                    <p className="mt-2 text-slate-400 text-sm flex-1">{project.desc}</p>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                    >
                      View case study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="px-4 py-16 md:py-24 bg-slate-900/20 border-t border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-400">Have a project in mind?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Start your project
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
