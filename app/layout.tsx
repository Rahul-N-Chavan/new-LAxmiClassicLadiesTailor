import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Laxmi Classic Ladies Tailor - Custom Tailoring & Luxury Fashion',
  description: 'Experience the luxury of custom craftsmanship. Premium ladies tailoring, ethnic wear, sarees, lehengas, and bridal wear tailored to perfection.',
  keywords: 'ladies tailor, custom tailoring, ethnic wear, sarees, lehengas, bridal wear, boutique',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-luxury-maroon`}>
        {children}
      </body>
    </html>
  );
}
