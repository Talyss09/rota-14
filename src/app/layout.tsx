import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://www.rota14.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: 'Rota 14 | Acelere o seu futuro empreendedor',
  description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Rota 14 | Acelere o seu futuro empreendedor',
    description: 'Acelerando o futuro de jovens empreendedores através de conexões, mentoria e ecossistema de inovação.',
    siteName: 'Rota 14',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Rota 14 Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-sans bg-white text-[#1a2b22] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}