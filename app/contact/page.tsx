import { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — StartUp',
  description: 'Start your project with StartUp. Get in touch for websites, mobile apps, and SaaS. We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact — StartUp',
    description: 'Start your project with StartUp. We typically respond within 24 hours.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
