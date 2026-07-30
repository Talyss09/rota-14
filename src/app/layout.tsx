import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rota14.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: {
    default: 'Rota 14 | Acelere o seu futuro empreendedor',
    template: '%s | Rota 14',
  },
  
  description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',
  
  keywords: [
    'Empreendedorismo',
    'Jovens Empreendedores',
    'Aceleração',
    'Startups',
    'Inovação',
    'Rota 14',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Rota 14 | Acelere o seu futuro empreendedor',
    description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',
    url: siteUrl,
    siteName: 'Rota 14',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Rota 14 - Acelere o seu futuro',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rota 14 | Acelere o seu futuro empreendedor',
    description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="font-sans bg-white text-[#1a2b22] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}