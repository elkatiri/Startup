import { Metadata } from 'next';
import { PortfolioPageClient } from './PortfolioPageClient';

export const metadata: Metadata = {
  title: 'Portfolio — GhaythApp',
  description: 'Selected projects: SaaS, e-commerce, mobile apps. Case studies and product launches by GhaythApp.',
  openGraph: {
    title: 'Portfolio — GhaythApp',
    description: 'Selected projects: SaaS, e-commerce, mobile apps.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
