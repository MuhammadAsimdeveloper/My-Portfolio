import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import SiteNav from '@/components/site-nav';
import ParticleBackground from '@/components/particle-background';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Asim | AI Developer & Product Builder',
  description: 'Explore Muhammad Asim’s animated light-tech portfolio: AI learning, web products, developer tools, and practical automation projects built at IUB in Pakistan.',
  metadataBase: new URL('https://muhammad-asim-ai.netlify.app'),
  openGraph: {
    title: 'Muhammad Asim | AI Developer & Product Builder',
    description: 'AI, web products, developer tools, and practical experiments — built with curiosity in Pakistan.',
    url: 'https://muhammad-asim-ai.netlify.app',
    siteName: 'Muhammad Asim',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Asim | AI Developer & Product Builder',
    description: 'AI, web products, developer tools, and practical experiments.',
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f8fb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><ParticleBackground /><SiteNav />{children}</body></html>;
}