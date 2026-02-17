'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Zap,
  BarChart3,
  Plug,
  Shield,
  Smartphone,
  Check,
  X,
} from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

const featureSections = [
  {
    title: 'Automation that scales',
    body: 'Build workflows with a visual editor—no code required. Trigger actions from events, schedules, or external apps. Reduce manual work by 60% and keep everyone in sync.',
    icon: Zap,
    points: ['Drag-and-drop workflow builder', 'Scheduled and event-based triggers', 'Conditional logic and branching', 'Audit logs for every run'],
  },
  {
    title: 'Analytics you can trust',
    body: 'Real-time dashboards and custom reports. Understand usage, performance, and bottlenecks at a glance. Export to CSV or connect to your data stack.',
    icon: BarChart3,
    points: ['Live activity feeds', 'Custom metrics and KPIs', 'Role-based dashboards', 'Scheduled reports'],
  },
  {
    title: 'Integrations everywhere',
    body: 'Connect Slack, Notion, Google Workspace, GitHub, and 50+ tools. Pre-built connectors and a public API for anything else. One workspace, all your tools.',
    icon: Plug,
    points: ['50+ native integrations', 'REST & webhook support', 'OAuth and API keys', 'Sync and real-time options'],
  },
  {
    title: 'Security first',
    body: 'SOC 2 Type II, encryption at rest and in transit, and fine-grained permissions. Your data stays yours. We never train models on your content.',
    icon: Shield,
    points: ['SOC 2 Type II certified', 'SSO and SAML', 'Role-based access control', 'Data residency options'],
  },
  {
    title: 'Mobile access',
    body: 'Full-featured iOS and Android apps. Approve requests, view dashboards, and get push notifications. Work from anywhere without losing context.',
    icon: Smartphone,
    points: ['Native iOS and Android', 'Offline-ready views', 'Biometric lock', 'Push and in-app alerts'],
  },
];

const comparison = [
  { feature: 'Unified workspace', us: true, traditional: false },
  { feature: 'No-code automation', us: true, traditional: false },
  { feature: 'Real-time collaboration', us: true, traditional: true },
  { feature: 'API-first design', us: true, traditional: false },
  { feature: 'Transparent pricing', us: true, traditional: false },
];

export function FeaturesPageClient() {
  return (
    <>
      <Section className="px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Features
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            One platform for modern teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400"
          >
            Automation, analytics, integrations, security, and mobile—built to work together.
          </motion.p>
        </div>
      </Section>

      {featureSections.map((section, i) => (
        <Section
          key={section.title}
          className={`px-4 py-16 md:py-24 ${i % 2 === 1 ? 'bg-slate-900/20' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className={`flex flex-col gap-12 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center`}
            >
              <div className="flex-1">
                <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 w-14 h-14 flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                <p className="mt-4 text-slate-400 text-lg leading-relaxed">{section.body}</p>
                <ul className="mt-6 space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <GlassCard className="aspect-video flex items-center justify-center bg-slate-800/50">
                  <section.icon className="w-20 h-20 text-indigo-500/30" />
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Comparison */}
      <Section className="px-4 py-20 md:py-28 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center"
          >
            StartUp vs traditional tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-400 text-center"
          >
            One platform instead of a patchwork of apps
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-xl overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-6 text-indigo-400 font-medium">StartUp</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-700/30 ${i % 2 === 1 ? 'bg-slate-800/20' : ''}`}>
                    <td className="py-4 px-6 text-slate-200">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.us ? <Check className="w-5 h-5 text-indigo-400 mx-auto" /> : <X className="w-5 h-5 text-slate-500 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.traditional ? <Check className="w-5 h-5 text-slate-500 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </Section>

      <Section className="px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-400">Ready to see it in action?</p>
          <Link
            href="/pricing"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Start free trial
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
