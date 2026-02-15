import { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — GhaythApp',
  description: 'Start your project with GhaythApp. Get in touch for websites, mobile apps, and SaaS. We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact — GhaythApp',
    description: 'Start your project with GhaythApp. We typically respond within 24 hours.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
