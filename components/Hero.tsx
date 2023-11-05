// Hero Section

import Image from 'next/image';
import React from 'react';
import cartoonHeart from '@/public/cartoon_heart.png';
import melina from '@/public/melina.png';
import melina2 from '@/public/melina2.png';
import teresita from '@/public/teresita.jpg';
import { PhoneForwardedIcon } from 'lucide-react';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id='hero'
      className='container w-full h-screen sm:nav-padding flex flex-wrap '
    >

       {/* Hover Contact */}
     <div className='mx-auto flex w-full items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-5  shadow-md backdrop-blur transition-all hover:border-primary hover:bg-white/50 text-primary'>
        <div className='mr-2'>
        <PhoneForwardedIcon size={24} />
        </div>
        <span>469-328-2513</span>
     </div>

      {/* bg-video */}
      <div className=''>
      <video 
      src="dancing.mp4" 
      typeof='video/mp4'
      playsInline
      autoPlay 
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -10,
        top: 100,
        left: 0,        
      }}
      />
      </div>
      <div className='flex flex-row items-center justify-center space-x-10 flex-wrap '>
        {/* Image */}       
        {/* <div className='hidden'>
        <Image
          src={teresita}
          alt='Teresita'
          width={300}
          height={300}
          quality={100}
          className='rounded-xl'
          placeholder='blur'
          aria-label='Teresita'
        /></div> */}
       
        
        <div className='flex flex-col justify-between flex-grow gap-10'>
          <h1 className='heading1 text-gradient_blue-orange pt-0 mx-auto text-center'>Estamos De Fiesta!</h1>
          <p className='mt-60 heading3 text-center text-primary italic mx-auto flex-wrap'>
          Sabemos que hoy es un día muy importante para ti,  es por eso que siempre ofrecemos  lo mejor para que tu fiesta sea un éxito!
          </p>
        </div>
         {/* Image */}       
        <div className='hidden'>
        <Image
          src={teresita}
          alt='Teresita'
          width={300}
          height={300}
          quality={100}
          className='rounded-xl'
          placeholder='blur'
          aria-label='Teresita'
        /></div>
      
        </div>
    </section>
  );
};

export default Hero;
