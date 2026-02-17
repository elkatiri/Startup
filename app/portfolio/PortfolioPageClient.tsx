'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';
import Image from 'next/image';
import dashboard from '@/public/dashboard.webp';
import ecommerce from '@/public/ecommerce.webp';
import health from '@/public/health.webp';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const container = { visible: { transition: { staggerChildren: 0.08 } } };

const projects = [
  {
    slug: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    tag: 'SaaS',
    desc: 'Real-time analytics and reporting platform for a B2B finance StartUp . Next.js, React, and custom charts.',
    year: '2025',
    image: dashboard,
  },
  {
    slug: 'ecommerce-brand',
    title: 'E-commerce Brand Store',
    tag: 'E-commerce',
    desc: 'High-converting store with custom checkout, subscriptions, and inventory sync. Headless CMS + Laravel.',
    year: '2025',
    image: ecommerce,
  },
  {
    slug: 'health-fitness-app',
    title: 'Health & Fitness App',
    tag: 'Mobile',
    desc: 'Cross-platform app with workout plans, progress tracking, and offline sync. Flutter.',
    year: '2024',
    image: health,
  },
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
            SaaS, e-commerce, mobile, and custom platforms we've shipped for founders and teams.
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
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Tag badge overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-medium text-white bg-indigo-500/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
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