import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

const projects: Record<string, { title: string; tag: string; desc: string; year: string; challenge?: string; solution?: string; tech?: string[] }> = {
  'fintech-dashboard': {
    title: 'FinTech Dashboard',
    tag: 'SaaS',
    desc: 'Real-time analytics and reporting platform for a B2B finance startup.',
    year: '2025',
    challenge: 'The client needed a single source of truth for portfolio and risk metrics, with live data and role-based access.',
    solution: 'We built a Next.js dashboard with server components, real-time WebSocket updates, and a design system that scaled to 20+ chart types.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL'],
  },
  'ecommerce-brand': {
    title: 'E-commerce Brand Store',
    tag: 'E-commerce',
    desc: 'High-converting store with custom checkout, subscriptions, and inventory sync.',
    year: '2025',
    challenge: 'Growing D2C brand needed a flexible store that could handle subscriptions and multiple fulfillment flows.',
    solution: 'Headless frontend with Laravel backend for orders, subscriptions, and CMS. Integrated with existing ERP and payment provider.',
    tech: ['Next.js', 'Laravel', 'Stripe', 'Headless CMS'],
  },
  'health-fitness-app': {
    title: 'Health & Fitness App',
    tag: 'Mobile',
    desc: 'Cross-platform app with workout plans, progress tracking, and offline sync.',
    year: '2024',
    challenge: 'Fitness startup wanted one codebase for iOS and Android with offline support for gym use.',
    solution: 'Flutter app with local SQLite sync, custom workout builder, and push notifications. Launched on both stores.',
    tech: ['Flutter', 'Firebase', 'SQLite'],
  },
  'startup-mvp': {
    title: 'Startup MVP Platform',
    tag: 'SaaS',
    desc: 'End-to-end MVP: auth, billing, dashboard, and core workflows in 10 weeks.',
    year: '2024',
    challenge: 'Pre-seed founder needed a shippable product to validate with early customers.',
    solution: 'Fixed-scope build with Next.js, Stripe, and a clear roadmap for post-launch iterations.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
  },
  'internal-tooling': {
    title: 'Internal Operations Tool',
    tag: 'Custom',
    desc: 'Custom dashboard and workflows for a scaling operations team.',
    year: '2024',
    challenge: 'Ops team was drowning in spreadsheets and needed approval flows and reporting.',
    solution: 'React SPA with Node API, role-based access, and export to CSV/Slack. Reduced manual work by ~60%.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  'marketplace': {
    title: 'Niche Marketplace',
    tag: 'E-commerce',
    desc: 'Two-sided marketplace with search, payments, and seller onboarding.',
    year: '2023',
    challenge: 'Marketplace needed trust, search, and payments without reinventing the wheel.',
    solution: 'Laravel backend with Stripe Connect, Elasticsearch for search, and a clean seller onboarding flow.',
    tech: ['Laravel', 'React', 'Stripe Connect', 'Elasticsearch'],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: 'Project — GhaythApp' };
  return {
    title: `${project.title} — GhaythApp Portfolio`,
    description: project.desc,
    openGraph: { title: `${project.title} — GhaythApp`, description: project.desc, type: 'website' },
  };
}

export default async function PortfolioCasePage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-xl overflow-hidden">
          <div className="aspect-video bg-slate-800/50 flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-indigo-500/40" />
          </div>
          <div className="p-6 md:p-8">
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">{project.tag}</span>
            <span className="text-slate-500 text-sm ml-2">{project.year}</span>
            <h1 className="mt-2 text-3xl font-bold text-white">{project.title}</h1>
            <p className="mt-4 text-slate-400 text-lg">{project.desc}</p>
            {project.challenge && (
              <>
                <h2 className="mt-8 text-lg font-semibold text-white">Challenge</h2>
                <p className="mt-2 text-slate-400">{project.challenge}</p>
              </>
            )}
            {project.solution && (
              <>
                <h2 className="mt-6 text-lg font-semibold text-white">Solution</h2>
                <p className="mt-2 text-slate-400">{project.solution}</p>
              </>
            )}
            {project.tech && project.tech.length > 0 && (
              <>
                <h2 className="mt-6 text-lg font-semibold text-white">Tech</h2>
                <p className="mt-2 text-slate-400">{project.tech.join(' · ')}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
