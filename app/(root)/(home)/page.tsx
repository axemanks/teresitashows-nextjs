import CustomerReviews from '@/sections/CustomerReviews';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import { Phone, PhoneForwardedIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between nav-padding h-full'>
      <div className='mx-auto'>
        <Hero />
        <Services />
        <Gallery />
        <CustomerReviews />
      </div>
    </div>
  );
}
