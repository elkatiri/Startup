import { Metadata } from 'next';
import { HomePage } from './home/HomePage';

export const metadata: Metadata = {
  title: 'GhaythApp — Your partner in digital innovation',
  description: 'We build powerful websites, mobile apps, and SaaS platforms for modern businesses. Premium startup development studio.',
  openGraph: {
    title: 'GhaythApp — Your partner in digital innovation',
    description: 'We build powerful websites, mobile apps, and SaaS platforms for modern businesses.',
    type: 'website',
  },
};

export default function Home() {
  return <HomePage />;
}
