import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { Phone, PhoneForwardedIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between nav-padding h-full">
     {/* Hover Contact */}
     <div className='mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-primary hover:bg-white/50 text-primary mt-10'>
        <div className='mr-2'>
        <PhoneForwardedIcon size={24} />
        </div>
        Contactanos al 469-328-2513
     </div>
     <div className='mx-auto'>
        <Hero />
        <Services />
        <Gallery />
     </div>
     
    </div>
  )
}