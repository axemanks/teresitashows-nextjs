// Gallery

import Image from 'next/image'
import React from 'react'

type Props = {}

// need to make the images teh same size to display correctly - diabled for now
// const images= [
//     '/gallery1.jpg',
//     '/gallery2.jpg',
//     '/gallery3.jpg',
//     '/gallery4.jpg',
//     '/gallery5.jpg',
//     '/gallery6.jpg',
//     '/gallery7.jpg',
//     '/gallery8.jpg',
//     '/gallery9.jpg',
//     '/gallery10.jpg',
//     '/gallery11.jpg',
//     '/gallery12.jpg',
// ]

const Gallery = (props: Props) => {
  return (
    <section className='gallery container ' id='gallery'>
        <h1 className='heading1 text-gradient pb-10'>Galeria</h1>
        {/* Gallery of 12 images */}
        <div className='flex flex-row flex-wrap justify-evenly gap-0.5 w-full'>
            {/* map out image- need to make images the same size */}
            {/* {images.map((image, index) => (
                <Image key={index} src={image} alt={`Gallery ${index}`} width={150} height={250} className='gallery-image' />
            ))} */}
            <Image src="/gallery1.jpg" alt="Gallery 1" width={210} height={300} />
            <Image src="/gallery2.jpg" alt="Gallery 2" width={139} height={300} />
            <Image src="/gallery3.jpg" alt="Gallery 3" width={273} height={300} />
            <Image src="/gallery4.jpg" alt="Gallery 4" width={139} height={300} />
            <Image src="/gallery5.jpeg" alt="Gallery 5" width={178} height={300} />
            <Image src="/gallery6.jpeg" alt="Gallery 6" width={139} height={300} />
            <Image src="/gallery7.jpg" alt="Gallery 7" width={162} height={300} />
            <Image src="/gallery8.jpeg" alt="Gallery 8" width={139} height={300} />
            <Image src="/gallery9.jpeg" alt="Gallery 9" width={300} height={300} />
            <Image src="/gallery10.jpg" alt="Gallery 10" width={234} height={300} />
            <Image src="/gallery11.jpg" alt="Gallery 11" width={193} height={300} />
            <Image src="/gallery12.jpg" alt="Gallery 12" width={170} height={300} />
        </div>


    </section>
  )
}

export default Gallery