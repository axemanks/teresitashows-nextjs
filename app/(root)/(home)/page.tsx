import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { Phone, PhoneForwardedIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between nav-padding h-full">
     <div className='mx-auto'>
        <Hero />
        <Services />
        <Gallery />
     </div>
     
    </div>
  )
}