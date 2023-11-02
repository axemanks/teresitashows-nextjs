// Gallery

import Image from 'next/image'
import React from 'react'

import gallery1 from '@/public/gallery1.jpg'
import gallery2 from '@/public/gallery2.jpg'
import gallery3 from '@/public/gallery3.jpg'
import gallery4 from '@/public/gallery4.jpg'
import gallery5 from '@/public/gallery5.jpeg'
import gallery6 from '@/public/gallery6.jpeg'
import gallery7 from '@/public/gallery7.jpg'
import gallery8 from '@/public/gallery8.jpeg'
import gallery9 from '@/public/gallery9.jpeg'
import gallery10 from '@/public/gallery10.jpg'
import gallery11 from '@/public/gallery11.jpg'
import gallery12 from '@/public/gallery12.jpg'



import gallery13 from '@/public/gallery13.jpg'
import gallery14 from '@/public/gallery14.jpg'
import gallery15 from '@/public/gallery15.jpg'
import gallery16 from '@/public/gallery16.jpg'
import gallery17 from '@/public/gallery17.jpg'
import gallery18 from '@/public/gallery18.jpg'
import gallery19 from '@/public/gallery19.jpg'
import gallery20 from '@/public/gallery20.jpg'
import gallery21 from '@/public/gallery21.jpg'
import gallery22 from '@/public/gallery22.jpg'
import gallery23 from '@/public/gallery23.jpg'
import gallery24 from '@/public/gallery24.jpg'
import gallery25 from '@/public/gallery25.jpg'
import gallery26 from '@/public/gallery26.jpg'
import gallery27 from '@/public/gallery27.jpg'
import gallery28 from '@/public/gallery28.jpg'
import gallery29 from '@/public/gallery29.jpg'
import gallery30 from '@/public/gallery30.jpg'
import gallery31 from '@/public/gallery31.jpg'
import gallery32 from '@/public/gallery32.jpg'
import gallery33 from '@/public/gallery33.jpg'
import gallery34 from '@/public/gallery34.jpg'

type Props = {}



const images = [gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,gallery21,gallery22,gallery23,gallery24,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30,gallery31,gallery32,gallery33,gallery34]


const Gallery = (props: Props) => {
  return (
    <section className='gallery container ' id='gallery'>
        <h1 className='heading1 text-gradient pb-10'>Galeria</h1>
        {/* Gallery of 12 images */}
        <div className='flex flex-row flex-wrap justify-evenly gap-0.5 w-full'>
            {/* map out image- need to make images the same size */}
            {images.map((image, index) => (
                <Image 
                key={index} 
                src={image} 
                alt={`Gallery ${index}`} 
                className='gallery-image rounded-xl' 
                objectFit='contain'
                sizes='small'
                placeholder='blur'
                
                style={{
                  width: 'auto',
                  maxWidth: '300px',
                  height: 'auto',
                  maxHeight: '300px',
                }}
                                
                />
            ))}
           
            


        </div>


    </section>
  )
}

export default Gallery