import { Metadata } from 'next';
import { PricingPageClient } from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — GhaythApp',
  description: 'Simple, transparent pricing. Start free, scale when you\'re ready. Monthly or yearly billing.',
  openGraph: {
    title: 'Pricing — GhaythApp',
    description: 'Simple, transparent pricing. Start free, scale when you\'re ready.',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
