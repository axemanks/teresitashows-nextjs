// Hero Section

import Image from 'next/image';
import React from 'react';
import cartoonHeart from '@/public/cartoon_heart.png';
import melina from '@/public/melina.png';
import melina2 from '@/public/melina2.png';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id='hero'
      className='container w-full nav-padding flex-wrap bg-ballon bg-cover bg-fixed'
    >
      <div className='flex flex-row items-center justify-center space-x-10 flex-wrap '>
        {/* Image */}
       
        <Image
          src='/teresita.jpg'
          alt='Teresita'
          width={300}
          height={300}
          className='rounded-xl'
        />
       
        
        <div className='flex flex-col justify-between flex-grow gap-10'>
          <h1 className='heading1 text-primary text-gradient_blue-orange pt-5 mx-auto'>Estamos De Fiesta?</h1>
          <p className='paragraph-regular text-primary italic mx-auto flex-wrap'>
          Sabemos que hoy es un día muy importante para ti,  es por eso que siempre ofrecemos  lo mejor para que tu fiesta sea un éxito!
          </p>
        </div>
         <Image
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
        />
      
        </div>
    </section>
  );
};

export default Hero;
