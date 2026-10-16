import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import SiteNav from '@/components/site-nav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Asim | AI Developer & Builder',
  description: 'Muhammad Asim is a BS Artificial Intelligence student at IUB, building web products, developer tools, and practical AI projects.',
  metadataBase: new URL('https://asim-web-agency.netlify.app'),
  openGraph: { title: 'Muhammad Asim | AI Developer & Builder', description: 'Web products, developer tools, and practical AI experiments.', type: 'website' }
};
export const viewport: Viewport = { themeColor: '#f4f2ec', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><SiteNav />{children}</body></html>;
}
