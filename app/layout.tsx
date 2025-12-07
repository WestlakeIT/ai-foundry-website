import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import DotGridBackground from '@/components/ui/DotGridBackground';

export const metadata: Metadata = {
  title: 'Westlake AI Foundry - Your AI Vision. Live in 90 Days.',
  description:
    'We forge ventures and transform enterprises. Your AI vision, live in 90 days while others just consult.',
  openGraph: {
    title: 'Westlake AI Foundry',
    description:
      'Your AI Vision. Live in 90 Days. Venture studio + enterprise AI delivery.',
    type: 'website'
  },
  metadataBase: new URL('https://www.example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark text-text">
        <ParticlesBackground />
        <DotGridBackground />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

