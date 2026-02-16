'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Layers,
  Palette,
  Code2,
  LineChart,
  ArrowRight,
  Sparkles,
  LayoutDashboard,
} from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';
import { TechIcon } from '../components/ui/tech-icons';
import Image from 'next/image';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const container = { visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Fast, scalable websites and web apps.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform iOS & Android.' },
  { icon: Layers, title: 'SaaS Platforms', desc: 'From MVP to scale-ready product.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Clean, conversion-focused interfaces.' },
  { icon: Code2, title: 'API Development', desc: 'RESTful APIs and integrations.' },
  { icon: LineChart, title: 'Maintenance & Scaling', desc: 'Keep your product running smoothly.' },
];

const techLogoNames = ['Next.js', 'React', 'Laravel', 'Node.js', 'Flutter', 'Tailwind', 'AWS'] as const;

const processSteps = [
  { step: 1, title: 'Discovery', body: 'We align on goals, scope, and success metrics.' },
  { step: 2, title: 'Design', body: 'UI/UX and technical architecture come together.' },
  { step: 3, title: 'Development', body: 'Agile builds with modern, proven tech.' },
  { step: 4, title: 'Launch', body: 'Deploy, monitor, and support your product.' },
];

const portfolioItems = [
  { img: '/dashboard.webp', title: 'FinTech Dashboard', tag: 'SaaS', desc: 'Real-time analytics and reporting platform.' },
  { img: '/ecommerce.webp', title: 'E-commerce Brand', tag: 'E-commerce', desc: 'High-converting store with custom checkout.' },
  { img: '/health.webp', title: 'Health & Fitness App', tag: 'Mobile', desc: 'Cross-platform app with sync and offline.' },
];

const testimonials = [
  { quote: 'GhaythApp delivered our product on time and above expectations. True partners.', name: 'Mohamed Ghayth', role: 'Founder, TechFlow', avatar: 'SC' },
  { quote: 'Clean code, clear communication, and a team that actually cares about the outcome.', name: 'Ahmed Alaa', role: 'CTO, ScaleUp', avatar: 'MW' },
  { quote: 'From idea to launch in 12 weeks. They understood our vision from day one.', name: 'Said fathy', role: 'CEO, HealthFirst', avatar: 'ER' },
];

export function HomePage() {
  return (
    <>
      {/* ——— Hero ——— */}
      <Section className="relative overflow-hidden px-4 py-20 md:py-28 lg:py-36">
  <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent" />
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl" />
  
  <div className="relative max-w-5xl mx-auto text-center">
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-indigo-400 font-medium text-sm uppercase tracking-wider mb-4"
    >
      Your partner in digital innovation
    </motion.p>
    
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
    >
      We build powerful{' '}
      <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        websites
      </span>
      {' '}& apps for modern businesses
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
    >
      Websites, mobile apps, and SaaS platforms—built with Next.js, React, Laravel, Flutter, and modern cloud. We turn ideas into products that scale.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition"
      >
        Start your project
        <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        href="/portfolio"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-6 py-3.5 text-base font-medium text-slate-200 hover:bg-slate-700/50 hover:border-slate-500 transition"
      >
        View our work
      </Link>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-4 shadow-2xl shadow-indigo-500/10 max-w-4xl mx-auto overflow-hidden"
    >
      <div className="relative aspect-video bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-xl overflow-hidden group">
        {/* Main Image - Now fills the container */}
        <Image 
          src="/startup.webp" 
          alt="Dashboard Preview - Modern web application interface" 
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
          priority
        />
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      </div>
    </motion.div>
  </div>
</Section>

      {/* ——— Services ——— */}
      <Section className="px-4 py-20 md:py-28" id="services">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              What we build
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Full-stack digital products—from concept to launch and beyond.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}>
                <GlassCard hoverGlow className="p-6 h-full">
                  <div className="rounded-xl bg-indigo-500/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-slate-400 text-sm">{desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/services" className="text-indigo-400 font-medium hover:text-indigo-300 transition">
              Explore all services →
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ——— Technologies ——— */}
      <Section className="px-4 py-16 md:py-20 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8"
          >
            Built with cutting-edge tech
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {techLogoNames.map((name) => (
              <span
                key={name}
                className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <TechIcon name={name} className="[&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-12 md:[&>svg]:h-12" />
                <span className="text-sm font-medium">{name}</span>
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link href="/technologies" className="text-indigo-400 font-medium hover:text-indigo-300 transition text-sm">
              See our full stack →
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ——— Process ——— */}
      <Section className="px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            How we work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-400 text-center text-lg"
          >
            Discovery → Design → Development → Launch
          </motion.p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ step, title, body }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="rounded-2xl bg-indigo-500/20 border border-indigo-500/30 w-12 h-12 flex items-center justify-center text-indigo-400 font-bold text-lg mb-4">
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{body}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-slate-600 to-transparent" style={{ width: 'calc(100% + 1rem)' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ——— Portfolio preview ——— */}
      <Section className="px-4 py-20 md:py-28 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Selected work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-400 text-center text-lg max-w-2xl mx-auto"
          >
            From SaaS to e-commerce and mobile—here’s a taste of what we ship.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {portfolioItems.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <GlassCard hoverGlow className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video bg-slate-800/50 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-indigo-500/40" />
                    <Image src={item.img} alt={item.title} fill className="object-cover object-center" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">{item.tag}</span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-400 text-sm flex-1">{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-6 py-3 font-medium text-slate-200 hover:bg-slate-700/50 transition">
              View full portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ——— Testimonials ——— */}
      <Section className="px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Trusted by founders and teams
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <p className="text-slate-300 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-semibold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-white">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ——— CTA banner ——— */}
      <Section className="px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-indigo-600/90 to-violet-700/90 border border-indigo-500/30 p-10 md:p-16 text-center shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Building the future, one app at a time.
          </h2>
          <p className="mt-4 text-indigo-100 text-lg max-w-xl mx-auto">
            Ready to turn your idea into a product? Let’s talk scope, timeline, and tech.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition"
            >
              Start your project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-medium text-white hover:bg-white/20 transition"
            >
              Explore services
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
