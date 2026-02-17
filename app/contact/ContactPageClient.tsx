'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, ChevronDown, Send } from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const contactFaqs = [
  { q: 'What\'s your typical response time?', a: 'We aim to reply to all inquiries within 24 hours on business days. For urgent project kickoffs we can often respond same day.' },
  { q: 'Do you offer free consultations?', a: 'Yes. We offer a short intro call to understand your project, scope, and timeline—no commitment required.' },
  { q: 'What happens after I send a message?', a: 'We\'ll read your brief and get back with initial thoughts, a few questions, and next steps (e.g. a discovery call or proposal).' },
];

export function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400"
          >
            Have a project in mind or want to discuss your idea? We&apos;re here to help.
          </motion.p>
        </div>
      </Section>

      <Section className="px-4 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-medium text-white">Thanks for reaching out.</p>
                  <p className="mt-2 text-slate-400 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      placeholder="Company (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white hover:bg-indigo-400 transition"
                  >
                    Send message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-6"
          >
            <GlassCard className="p-6">
              <Mail className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white">Email</h3>
              <a href="mailto:support@StartUp.com" className="mt-1 text-slate-400 hover:text-indigo-400 transition text-sm block">
                support@StartUp.com
              </a>
            </GlassCard>
            <GlassCard className="p-6">
              <Clock className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white">Response time</h3>
              <p className="mt-1 text-slate-400 text-sm">
                We typically reply within 24 hours on business days.
              </p>
              <span className="inline-block mt-2 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                Usually &lt; 24h
              </span>
            </GlassCard>
            <GlassCard className="p-6">
              <MapPin className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white">HQ</h3>
              <p className="mt-1 text-slate-400 text-sm">
                Remote-first. We work with teams worldwide.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="px-4 py-16 md:py-24 bg-slate-900/20 border-y border-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Common questions</h2>
          <div className="space-y-3">
            {contactFaqs.map((faq, i) => (
              <GlassCard key={faq.q} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 px-5"
                >
                  <span className="font-medium text-slate-200 text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-700/50"
                    >
                      <p className="py-4 px-5 text-slate-400 text-sm">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-indigo-600/20 to-violet-700/20 border border-indigo-500/30 p-8 text-center"
        >
          <p className="text-lg font-semibold text-white">Ready to start your project?</p>
          <p className="mt-2 text-slate-400 text-sm">Tell us your idea and we&apos;ll get back with next steps.</p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Explore services
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
