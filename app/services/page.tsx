import { Metadata } from 'next';
import { ServicesPageClient } from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Services — StartUp',
  description: 'Web development, mobile apps, SaaS platforms, UI/UX design, and custom digital solutions. Premium StartUp  development studio.',
  openGraph: {
    title: 'Services — StartUp',
    description: 'Web development, mobile apps, SaaS platforms, and custom digital solutions.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
