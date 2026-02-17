'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, HelpCircle } from 'lucide-react';
import { Section } from '../components/ui/section';
import { GlassCard } from '../components/ui/glass-card';

const tiers = [
  {
    name: 'Starter',
    monthly: 29,
    yearly: 24,
    desc: 'For small teams getting started',
    features: ['Up to 5 members', '10 active workflows', '1 GB storage', 'Email support'],
    cta: 'Start free trial',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Pro',
    monthly: 79,
    yearly: 65,
    desc: 'For growing teams',
    features: ['Up to 25 members', 'Unlimited workflows', '10 GB storage', 'Priority support', 'API access', 'Advanced analytics'],
    cta: 'Start free trial',
    href: '/contact',
    popular: true,
  },
  {
    name: 'Team',
    monthly: 149,
    yearly: 119,
    desc: 'For scaling organizations',
    features: ['Up to 100 members', 'Unlimited everything', '50 GB storage', 'Dedicated success manager', 'SSO & SAML', 'Custom integrations'],
    cta: 'Contact sales',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    desc: 'For enterprises',
    features: ['Unlimited members', 'Unlimited storage', 'SLA & compliance', 'On-prem option', 'Custom contracts'],
    cta: 'Contact sales',
    href: '/contact',
    popular: false,
  },
];

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes. You can upgrade or downgrade anytime. Changes apply at the next billing cycle.' },
  { q: 'Is there a free trial?', a: 'Yes. All paid plans include a 14-day free trial. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and invoicing for Team and Enterprise.' },
  { q: 'Do you offer a money-back guarantee?', a: 'Yes. If you\'re not satisfied within the first 30 days, we\'ll refund you in full.' },
];

export function PricingPageClient() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-400"
          >
            Start free. Scale when you&apos;re ready. No hidden fees.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className={`text-sm font-medium ${!yearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              className="relative w-12 h-6 rounded-full bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <motion.span
                className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white"
                animate={{ x: yearly ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? 'text-white' : 'text-slate-500'}`}>Yearly</span>
            <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-400">
              Save 20%
            </span>
          </motion.div>
        </div>
      </Section>

      <Section className="px-4 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <GlassCard
                key={tier.name}
                hoverGlow
                className={`p-6 flex flex-col ${tier.popular ? 'ring-2 ring-indigo-500/50 lg:-mt-2 lg:mb-2' : ''}`}
              >
                {tier.popular && (
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-1 text-slate-400 text-sm">{tier.desc}</p>
                <div className="mt-4">
                  {tier.monthly != null ? (
                    <>
                      <span className="text-3xl font-bold text-white">
                        ${yearly ? tier.yearly : tier.monthly}
                      </span>
                      <span className="text-slate-500 text-sm ml-1">/mo</span>
                      {yearly && <span className="block text-xs text-slate-500">billed yearly</span>}
                    </>
                  ) : (
                    <span className="text-xl font-semibold text-white">Custom</span>
                  )}
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`mt-6 block text-center rounded-xl py-3 font-medium transition ${
                    tier.popular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                      : 'border border-slate-600 text-slate-200 hover:bg-slate-700/50'
                  }`}
                >
                  {tier.cta}
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="px-4 py-20 md:py-28 bg-slate-900/20 border-y border-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-400" />
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <GlassCard
                key={faq.q}
                className="overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 px-5"
                >
                  <span className="font-medium text-slate-200">{faq.q}</span>
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
                      transition={{ duration: 0.2 }}
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

      {/* Money-back guarantee */}
      <Section className="px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-xl p-8 text-center"
        >
          <p className="text-lg font-semibold text-white">30-day money-back guarantee</p>
          <p className="mt-2 text-slate-400 text-sm">
            Try StartUp risk-free. If you&apos;re not satisfied, we&apos;ll refund you—no questions asked.
          </p>
        </motion.div>
      </Section>

      {/* Enterprise CTA */}
      <Section className="px-4 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-indigo-600/20 to-violet-700/20 border border-indigo-500/30 p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white">Need a custom plan?</h2>
          <p className="mt-2 text-slate-400">
            Enterprise pricing, SLAs, and dedicated support. We&apos;ll work with you to find the right fit.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Contact sales
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
