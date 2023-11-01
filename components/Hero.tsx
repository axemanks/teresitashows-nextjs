// Hero Section

import Image from 'next/image';
import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id='hero'
      className='container max-w-fit mx-auto flex nav-padding '
    >
      <div className='flex flex-row items-center justify-center space-x-10 flex-wrap '>
        {/* Image */}
        <div className='rounded-xl object-contain overflow-hidden'>
        <Image
          src='/teresita.jpg'
          alt='Teresita'
          width={300}
          height={300}
          className='rounded-xl'
        /></div>
        <div className='flex flex-col justify-between flex-grow gap-20'>
          <h1 className='heading1 text-primary text-gradient_blue-orange pt-5'>Estamos De Fiesta?</h1>
          <p className='paragraph-regular text-primary italic flex-wrap'>
          Sabemos que hoy es un día muy importante para ti,  es por eso que siempre ofrecemos  lo mejor para que tu fiesta sea un éxito!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
