import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Teresita Shows!',
  description: 'Built by Keith Scheldt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen font-poppins grainy w-full'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
