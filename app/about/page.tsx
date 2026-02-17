import { Metadata } from 'next';
import { AboutPageClient } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About — StartUp',
  description: 'Our story, vision, and the team behind StartUp. Your partner in digital innovation—we build websites, apps, and SaaS.',
  openGraph: {
    title: 'About — StartUp',
    description: 'Our story, vision, and the team behind StartUp. Your partner in digital innovation.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
