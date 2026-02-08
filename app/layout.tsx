import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TUSA México — Find Your Ocean',
  description:
    'Equipo de buceo profesional con tecnología japonesa. Máscaras, aletas, compensadores y reguladores para la exploración del Caribe Mexicano.',
  keywords: 'TUSA, buceo, diving, México, máscaras, aletas, snorkel, equipo de buceo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
