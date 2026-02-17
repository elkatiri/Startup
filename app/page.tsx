import { Metadata } from 'next';
import { HomePage } from './home/HomePage';

export const metadata: Metadata = {
  title: 'StartUp — Your partner in digital innovation',
  description: 'We build powerful websites, mobile apps, and SaaS platforms for modern businesses. Premium StartUp  development studio.',
  openGraph: {
    title: 'StartUp — Your partner in digital innovation',
    description: 'We build powerful websites, mobile apps, and SaaS platforms for modern businesses.',
    type: 'website',
  },
};

export default function Home() {
  return <HomePage />;
}
