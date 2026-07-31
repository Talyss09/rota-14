import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://rota-14.vercel.app';
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: 'Rota 14 | Acelere o seu futuro empreendedor',
  description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Rota 14 | Acelere o seu futuro empreendedor',
    description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',
    url: baseUrl,
    siteName: 'Rota 14',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Rota 14 Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rota 14 | Acelere o seu futuro empreendedor',
    description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans bg-white text-[#1a2b22] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}