'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Layers,
  Box,
  Check,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import mobileService from '@/public/mobileService.webp';
import webService from '@/public/webService.webp';
import saasService from '@/public/saasService.webp';
import customService from '@/public/customService.webp';
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
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'web': return webService;
      case 'mobile': return mobileService;
      case 'saas': return saasService;
      case 'custom': return customService;
      default: return webService;
    }
  };

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
                <GlassCard
                  className="aspect-video overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 relative"
                  onClick={() => setExpandedImage(service.id)}
                >
                  <Image
                    src={getServiceImage(service.id)}
                    alt={service.title}
                    fill
                    className="object-contain p-6 md:p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getServiceImage(expandedImage)}
                alt="Expanded view"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
