import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { constructMetadata } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata:Metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen font-poppins grainy antialiased'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
