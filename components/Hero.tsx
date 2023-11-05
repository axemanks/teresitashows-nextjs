// Hero Section

import Image from 'next/image';
import React from 'react';
import cartoonHeart from '@/public/cartoon_heart.png';
import melina from '@/public/melina.png';
import melina2 from '@/public/melina2.png';
import teresita from '@/public/teresita.jpg';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id='hero'
      className='container w-full h-screen sm:nav-padding  flex-wrap '
    >
      <div className=''>
      <video 
      src="dancing.mov" 
      autoPlay 
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -10,
        top: 0,
        left: 0,        
      }}
      />
      </div>
      <div className='flex flex-row items-center justify-center space-x-10 flex-wrap '>
        {/* Image */}       
        {/* <div className='sm:hidden '>
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
          <h1 className='heading1 mt-60 text-gradient_blue-orange pt-5 mx-auto'>Estamos De Fiesta!</h1>
          <p className='heading3 text-center text-primary italic mx-auto flex-wrap'>
          Sabemos que hoy es un día muy importante para ti,  es por eso que siempre ofrecemos  lo mejor para que tu fiesta sea un éxito!
          </p>
        </div>
         {/* <Image
        src={melina}
        alt='cartoon heart'
        width={300}
        className='rounded-xl'
        />
        <Image
        src={melina2}
        alt='melina2'
        width={300}
        className='rounded-xl'
        /> */}
      
        </div>
    </section>
  );
};

export default Hero;
