import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import SiteNav from '@/components/site-nav';
import ParticleBackground from '@/components/particle-background';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Asim | AI Developer & Product Builder',
  description: 'Muhammad Asim is a BS Artificial Intelligence student at IUB building practical software, web products, developer tools, and automation projects.',
  metadataBase: new URL('https://asim-web-agency.netlify.app'),
  openGraph: { title: 'Muhammad Asim | AI Developer & Product Builder', description: 'AI, web products, developer tools, and practical experiments.', type: 'website' }
};
export const viewport: Viewport = { themeColor: '#08090d', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><ParticleBackground /><SiteNav />{children}</body></html>;
}
