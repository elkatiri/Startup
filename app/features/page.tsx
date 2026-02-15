import { Metadata } from 'next';
import { FeaturesPageClient } from './FeaturesPageClient';

export const metadata: Metadata = {
  title: 'Features — GhaythApp',
  description: 'Automation, analytics, integrations, security, and mobile. Everything you need in one platform.',
  openGraph: {
    title: 'Features — GhaythApp',
    description: 'Automation, analytics, integrations, security, and mobile. One platform for modern teams.',
    type: 'website',
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
