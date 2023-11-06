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
      className='container  h-screen mb-32'
    >
      {/* Hover Contact */}
      <div className='mx-auto h-16 sm:w-1/4 w-full flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-5  shadow-md backdrop-blur transition-all hover:border-primary hover:bg-white/50 text-primary'>
        <div className='mr-2 hidden lg:block'>
          <PhoneForwardedIcon size={24} />
        </div>
        Contáctanos al
        <span>469-328-2513</span>
      </div>
    {/* Container for text and video */}
      <div className='container flex flex-col w-full h-full items-center justify-between flex-wrap sm:pb-20 pb-10'>        
          
            <h1 className='heading1 text-gradient_blue-orange pt-5 mx-auto text-center'>
              Estamos De Fiesta!
            </h1>
            
          
          
            <video
              src='dancing.mp4'
              typeof='video/mp4'
              playsInline
              autoPlay
              loop
              muted
              className=''
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: -1,
                top: 120,
                left: 0,
              }}
            />


              
            <p className=' heading3 text-center text-primary italic mx-auto flex-wrap '>
              Sabemos que hoy es un día muy importante para ti, es por eso que
              siempre ofrecemos lo mejor para que tu fiesta sea un éxito!
            </p>
          
        </div>
      
    </section>
  );
};

export default Hero;
