import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import dashboard from '@/public/dashboard.webp';
import ecommerce from '@/public/ecommerce.webp';
import health from '@/public/health.webp';

const projects: Record<string, {
  title: string;
  tag: string;
  desc: string;
  year: string;
  image: any;
  challenge?: string;
  solution?: string;
  tech?: string[];
}> = {
  'fintech-dashboard': {
    title: 'FinTech Dashboard',
    tag: 'SaaS',
    desc: 'Real-time analytics and reporting platform for a B2B finance StartUp .',
    year: '2025',
    image: dashboard,
    challenge: 'The client needed a single source of truth for portfolio and risk metrics, with live data and role-based access.',
    solution: 'We built a Next.js dashboard with server components, real-time WebSocket updates, and a design system that scaled to 20+ chart types.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL'],
  },
  'ecommerce-brand': {
    title: 'E-commerce Brand Store',
    tag: 'E-commerce',
    desc: 'High-converting store with custom checkout, subscriptions, and inventory sync.',
    year: '2025',
    image: ecommerce,
    challenge: 'Growing D2C brand needed a flexible store that could handle subscriptions and multiple fulfillment flows.',
    solution: 'Headless frontend with Laravel backend for orders, subscriptions, and CMS. Integrated with existing ERP and payment provider.',
    tech: ['Next.js', 'Laravel', 'Stripe', 'Headless CMS'],
  },
  'health-fitness-app': {
    title: 'Health & Fitness App',
    tag: 'Mobile',
    desc: 'Cross-platform app with workout plans, progress tracking, and offline sync.',
    year: '2024',
    image: health,
    challenge: 'Fitness StartUp  wanted one codebase for iOS and Android with offline support for gym use.',
    solution: 'Flutter app with local SQLite sync, custom workout builder, and push notifications. Launched on both stores.',
    tech: ['Flutter', 'Firebase', 'SQLite'],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: 'Project — StartUp' };
  return {
    title: `${project.title} — StartUp Portfolio`,
    description: project.desc,
    openGraph: { title: `${project.title} — StartUp`, description: project.desc, type: 'website' },
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
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <div className="absolute top-3 left-3">
              <span className="text-xs font-medium text-white bg-indigo-500/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {project.tag}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <span className="text-slate-500 text-sm">{project.year}</span>
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