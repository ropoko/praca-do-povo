import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cidadão',
  description: `
    Plataforma de engajamento cívico que conecta cidadãos,
    facilita a participação democrática e promove a transparência
    na gestão pública. Participe, acompanhe e contribua para uma
    sociedade mais justa e democrática.
  `.trim(),
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'mask-icon',
      url: '/mask-icon.svg',
      type: 'image/svg+xml',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
