import { Metadata } from 'next';
import { ServicesPageClient } from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Services — GhaythApp',
  description: 'Web development, mobile apps, SaaS platforms, UI/UX design, and custom digital solutions. Premium startup development studio.',
  openGraph: {
    title: 'Services — GhaythApp',
    description: 'Web development, mobile apps, SaaS platforms, and custom digital solutions.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
