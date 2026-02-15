'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Layers,
  Rocket,
  Box,
  Check,
  X,
} from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const services = [
  {
    id: 'web',
    title: 'Website Development',
    icon: Globe,
    headline: 'Fast, scalable websites and web apps',
    body: 'From marketing sites to complex web applications. We use Next.js and React for performance and SEO, with clean architecture that scales.',
    benefits: ['Responsive, accessible UI', 'SEO and performance optimized', 'CMS or headless options', 'Analytics and conversion tracking'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    headline: 'Native and cross-platform apps',
    body: 'iOS and Android apps built with Flutter or React Native when it fits—or native when you need maximum performance and platform polish.',
    benefits: ['Single codebase or native', 'Offline and push support', 'App Store & Play Store ready', 'Ongoing maintenance'],
  },
  {
    id: 'saas',
    title: 'SaaS MVP Building',
    icon: Layers,
    headline: 'From idea to launch-ready product',
    body: 'We help startups validate and ship their first version: auth, billing, dashboard, and core workflows—built to scale from day one.',
    benefits: ['Auth, billing, teams', 'Multi-tenant architecture', 'Admin and analytics', 'Iterate with agility'],
  },
  {
    id: 'startup',
    title: 'Startup Launch Packages',
    icon: Rocket,
    headline: 'End-to-end product launch',
    body: 'Discovery, design, development, and launch in one package. Ideal for pre-seed and seed-stage founders who want one trusted partner.',
    benefits: ['Fixed scope and timeline', 'Design + dev in sync', 'Launch and handoff', 'Post-launch support options'],
  },
  {
    id: 'custom',
    title: 'Custom Platforms',
    icon: Box,
    headline: 'Tailored digital solutions',
    body: 'Internal tools, marketplaces, dashboards, or industry-specific platforms. We design and build exactly what your business needs.',
    benefits: ['Custom workflows', 'Integrations and APIs', 'Security and compliance', 'Scalable architecture'],
  },
];

const comparison = [
  { item: 'Dedicated team', us: true, freelancers: false, agencies: true },
  { item: 'Fixed scope & timeline', us: true, freelancers: false, agencies: false },
  { item: 'Modern tech stack', us: true, freelancers: true, agencies: true },
  { item: 'Startup-friendly pricing', us: true, freelancers: true, agencies: false },
  { item: 'Single point of contact', us: true, freelancers: true, agencies: true },
  { item: 'Post-launch support', us: true, freelancers: false, agencies: true },
];

export function ServicesPageClient() {
  return (
    <>
      <Section className="px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            What we build for you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400"
          >
            Websites, mobile apps, SaaS products, and custom platforms—with one team from idea to launch.
          </motion.p>
        </div>
      </Section>

      {services.map((service, i) => (
        <Section
          key={service.id}
          id={service.id}
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
                  <service.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
                <p className="mt-2 text-lg text-indigo-200/90 font-medium">{service.headline}</p>
                <p className="mt-4 text-slate-400 leading-relaxed">{service.body}</p>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <GlassCard className="aspect-video flex items-center justify-center bg-slate-800/50">
                  <service.icon className="w-20 h-20 text-indigo-500/30" />
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Why choose us */}
      <Section className="px-4 py-20 md:py-28 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center"
          >
            Why choose GhaythApp
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-400 text-center"
          >
            Compared to freelancers and traditional agencies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-4 px-6 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-6 text-indigo-400 font-medium">GhaythApp</th>
                    <th className="text-center py-4 px-6 text-slate-400 font-medium">Freelancers</th>
                    <th className="text-center py-4 px-6 text-slate-400 font-medium">Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.item}
                      className={`border-b border-slate-700/30 ${i % 2 === 1 ? 'bg-slate-800/20' : ''}`}
                    >
                      <td className="py-4 px-6 text-slate-200">{row.item}</td>
                      <td className="py-4 px-6 text-center">
                        {row.us ? <Check className="w-5 h-5 text-indigo-400 mx-auto" /> : <X className="w-5 h-5 text-slate-500 mx-auto" />}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.freelancers ? <Check className="w-5 h-5 text-slate-500 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.agencies ? <Check className="w-5 h-5 text-slate-500 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
          <p className="text-slate-400">Ready to start your project?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Get in touch
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
