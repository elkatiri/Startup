'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Target, Heart, Zap, Users, User } from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const founder = {
  name: 'Alex Morgan',
  role: 'Founder & CEO',
  initials: 'AM',
  bio: 'Alex started StartUp to be the development partner he wished he had as a founder—one that ships fast, communicates clearly, and cares about the product as much as the client.',
};

const team = [
  { name: 'Jordan Lee', role: 'CTO & Co-founder', initials: 'JL' },
  { name: 'Sam Rivera', role: 'Head of Product', initials: 'SR' },
  { name: 'Casey Kim', role: 'Head of Design', initials: 'CK' },
];

const timeline = [
  { year: '2022', title: 'Founded', body: 'StartUp started as a small studio focused on helping StartUp s ship their first product.' },
  { year: '2023', title: 'First launches', body: 'We delivered our first SaaS MVPs and mobile apps. Word of mouth brought more founders.' },
  { year: '2024', title: 'Scale', body: 'Grew the team and expanded into e-commerce and custom platforms. Kept the same quality bar.' },
  { year: '2025', title: 'Today', body: 'We\'re a premium development partner for StartUp s and scale-ups—building the future, one app at a time.' },
];

const values = [
  { icon: Target, title: 'Quality', body: 'We build things that last. Clean code, solid architecture, and attention to detail.' },
  { icon: Sparkles, title: 'Innovation', body: 'We use modern tech and best practices so your product stays ahead of the curve.' },
  { icon: Heart, title: 'Transparency', body: 'Clear communication, honest timelines, and no surprises. You\'re always in the loop.' },
  { icon: Zap, title: 'StartUp  mindset', body: 'We move fast, iterate, and treat your success as our success.' },
];

export function AboutPageClient() {
  return (
    <>
      <Section className="px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            Your partner in digital innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400 leading-relaxed"
          >
            We’re a premium tech studio that helps businesses build websites, mobile apps, and SaaS platforms—with one team from idea to launch.
          </motion.p>
        </div>
      </Section>

      {/* Story */}
      <Section className="px-4 py-16 md:py-24 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2"
          >
            <Sparkles className="w-8 h-8 text-indigo-400" />
            Our story
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 prose prose-invert prose-slate max-w-none text-slate-400 leading-relaxed space-y-4"
          >
            <p>
              StartUp was born from a simple observation: too many founders were stuck between expensive agencies and unreliable freelancers. We wanted to be the middle path—a dedicated team that ships like a product company and cares like a partner.
            </p>
            <p>
              We started by building our own products and then opened the studio to help others. Today we work with StartUp s and scale-ups on websites, mobile apps, and SaaS platforms—using Next.js, React, Laravel, Flutter, and modern cloud tools. Our goal hasn’t changed: turn your idea into a product that users love and that you can scale.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <Target className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white">Mission</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">
                To be the development partner that founders trust—building powerful, scalable products with clarity and care.
              </p>
            </GlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <Sparkles className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white">Vision</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">
                A world where every ambitious idea gets built with the same craft and care as the best products in the world.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="px-4 py-16 md:py-24 bg-slate-900/20 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <User className="w-6 h-6 text-indigo-400" />
            Founder
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 mt-8">
              <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-2xl flex-shrink-0">
                {founder.initials}
              </div>
              <div>
                <p className="font-semibold text-white text-lg">{founder.name}</p>
                <p className="text-indigo-400 text-sm">{founder.role}</p>
                <p className="mt-3 text-slate-400 leading-relaxed">{founder.bio}</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Team */}
      <Section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <Users className="w-6 h-6 text-indigo-400" />
            The team
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-semibold">
                    {person.initials}
                  </div>
                  <div>
                    <p className="font-medium text-white">{person.name}</p>
                    <p className="text-sm text-slate-500">{person.role}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="px-4 py-16 md:py-24 bg-slate-900/20">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white"
          >
            Our journey
          </motion.h2>
          <div className="mt-10 space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="text-indigo-400 font-semibold w-12 flex-shrink-0">{item.year}</span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-10"
          >
            What we believe
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="p-6">
                  <v.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">{v.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-400">Ready to build something together?</p>
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
