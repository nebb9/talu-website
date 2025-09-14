import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Talu - Bedtime Stories Your Child Will Never Forget',
  description: 'Simply enter your child\'s name and a moment from their day, and Talu turns it into a unique bedtime story.',
  keywords: 'bedtime stories, children, parenting, personalized stories, kids app',
  authors: [{ name: 'Talu' }],
  creator: 'Talu',
  publisher: 'Talu',
  openGraph: {
    title: 'Talu - Bedtime Stories Your Child Will Never Forget',
    description: 'Simply enter your child\'s name and a moment from their day, and Talu turns it into a unique bedtime story.',
    url: 'https://taluapp.com',
    siteName: 'Talu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Talu - Personalized Bedtime Stories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talu - Bedtime Stories Your Child Will Never Forget',
    description: 'Simply enter your child\'s name and a moment from their day, and Talu turns it into a unique bedtime story.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}