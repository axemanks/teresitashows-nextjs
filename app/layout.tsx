import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { constructMetadata } from '@/lib/utils';

export const metadata:Metadata = constructMetadata()

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
