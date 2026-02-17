'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Layers, Box, Check, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import mobileService from '@/public/health.webp';
import webService from '@/public/dashboard.webp';
import saasService from '@/public/ecommerce.webp';
import customService from '@/public/custom.webp';

import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const services = [
  {
    id: 'web',
    title: 'Website Development',
    icon: Globe,
    headline: 'Fast, scalable websites and web apps',
    body: 'From marketing sites to complex web applications built with modern stacks.',
    benefits: [
      'Responsive UI',
      'SEO optimized',
      'Headless CMS ready',
      'Analytics ready',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    headline: 'Native and cross-platform apps',
    body: 'High-performance mobile apps using Flutter or React Native.',
    benefits: [
      'Single codebase',
      'Push notifications',
      'Offline support',
      'Store deployment',
    ],
  },
  {
    id: 'saas',
    title: 'SaaS MVP Building',
    icon: Layers,
    headline: 'From idea to launch-ready product',
    body: 'We help StartUp s validate and ship fast.',
    benefits: [
      'Auth & billing',
      'Multi-tenant',
      'Admin dashboard',
      'Analytics',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Platforms',
    icon: Box,
    headline: 'Tailored digital solutions',
    body: 'Custom dashboards, tools, and internal systems.',
    benefits: [
      'Custom workflows',
      'API integrations',
      'Secure architecture',
      'Scalable infra',
    ],
  },
];

export function ServicesPageClient() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const getImage = (id: string) => {
    switch (id) {
      case 'web': return webService;
      case 'mobile': return mobileService;
      case 'saas': return saasService;
      default: return customService;
    }
  };

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* HERO */}
      <Section className="px-4 pt-20 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-400 text-sm uppercase tracking-wider">
            Services
          </p>
          <h1 className="mt-3 text-5xl font-bold text-white">
            What we build for you
          </h1>
          <p className="mt-4 text-slate-400">
            Websites, mobile apps, SaaS products, and custom platforms.
          </p>
        </div>
      </Section>

      {/* SERVICES */}
      {services.map((service, i) => (
        <Section
          key={service.id}
          className={`px-4 py-20 ${i % 2 ? 'bg-slate-900/30' : ''}`}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">

            {/* TEXT */}
            <div className="flex-1">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <service.icon className="text-indigo-400 w-6 h-6" />
              </div>

              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <p className="text-indigo-300 mt-2">{service.headline}</p>
              <p className="text-slate-400 mt-4">{service.body}</p>

              <ul className="mt-6 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-slate-300">
                    <Check className="text-indigo-400 w-5 h-5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div
              className="flex-1 cursor-pointer"
              onClick={() => setExpandedImage(service.id)}
            >
              <GlassCard className="aspect-video overflow-hidden relative group">
                <Image
                  src={getImage(service.id)}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width:768px) 100vw, 50vw"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
              </GlassCard>
            </div>

          </div>
        </Section>
      ))}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-6"
            onClick={() => setExpandedImage(null)}
          >
            {/* close button */}
            <button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full"
              onClick={() => setExpandedImage(null)}
            >
              <X className="text-white w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getImage(expandedImage)}
                alt="Preview"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <Section className="px-4 py-20 text-center">
        <p className="text-slate-400">Ready to build something amazing?</p>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-indigo-500 hover:bg-indigo-400 px-6 py-3 rounded-xl font-semibold text-white"
        >
          Get in touch
        </Link>
      </Section>
    </>
  );
}
