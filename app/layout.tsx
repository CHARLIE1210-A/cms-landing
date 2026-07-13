import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';

import './globals.css';

// ── Font definitions ───────────────────────────────────────────────────────

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  weight:   ['400', '500', '600', '700'],
  display:  'swap',
  preload:  true,
});

const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair',
  weight:   ['700', '800'],
  style:    ['normal', 'italic'],
  display:  'swap',
  preload:  true,
});

const geistMono = GeistMono;

// ── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://paintcms.in'),

  title: {
    default:  'PaintCMS — Contractor Management for Painting Businesses',
    template: '%s | PaintCMS',
  },

  description:
    'Run every site. Pay every worker. Know every rupee. ' +
    'The complete management system for painting contractors — ' +
    'attendance, wages, advances, and project profit tracking. No more jugaad — just results.',

  keywords: [
    'painting contractor software',
    'worker attendance tracking India',
    'painting business management',
    'contractor payroll app',
    'site management software',
    'rupee tracking painters',
  ],

  authors:  [{ name: 'PaintCMS Team' }],
  creator:  'PaintCMS',
  publisher:'PaintCMS',

  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://paintcms.in',
    siteName:    'PaintCMS',
    title:       'PaintCMS — Contractor Management for Painting Businesses',
    description: 'Run every site. Pay every worker. Know every rupee. No more jugaad — just results.',
    images: [{
      url:    '/og-image.png',
      width:   1200,
      height:  630,
      alt:    'PaintCMS Dashboard Preview',
    }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'PaintCMS — Contractor Management for Painting Businesses',
    description: 'Run every site. Pay every worker. Know every rupee.',
    images:      ['/og-image.png'],
  },

  icons: {
    icon:   [
      { url: '/favicon.ico' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor:    '#ffffff',
  colorScheme:   'light',
  width:         'device-width',
  initialScale:   1,
  maximumScale:   5,
};

// ── Root layout ────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
