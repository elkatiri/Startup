import { Metadata } from 'next';
import { TechnologiesPageClient } from './TechnologiesPageClient';

export const metadata: Metadata = {
  title: 'Technologies — GhaythApp',
  description: 'Our tech stack: Next.js, React, Laravel, Node.js, Flutter, Tailwind, AWS. Frontend, backend, mobile, and cloud.',
  openGraph: {
    title: 'Technologies — GhaythApp',
    description: 'Our tech stack: Next.js, React, Laravel, Node.js, Flutter, and modern cloud.',
    type: 'website',
  },
};

export default function TechnologiesPage() {
  return <TechnologiesPageClient />;
}
