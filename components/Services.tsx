// Services section

import Image from 'next/image'
import React from 'react'
import { Label } from './ui/label'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className='container w-full mx-auto flex flex-col gap-20 p-10 ' id='services'>
        <h1 className='heading1 text-gradient text-center'>Nuestros Servicios</h1>
        <p className='base-regular text-center text-green-500 text-xl'>Llevamos alegría y el mejor entretenimiento a tu hogar o evento, escoge tu personaje favorito y que empiece la diversión!</p>
        {/* services - gallery */}
        <div className='flex flex-row flex-wrap justify-between gap-0.5 w-full '>
            <div>
                <Image src="/muneca-y-payasito.jpg" height={250} width={250} alt="muneca-y-payasito" id='muneca-y-payasito' />
                <p className='small-bold text-center'>Muneca Y Payasito</p>
            </div>
            <div>
                <Image src="/unicornio.jpg" height={250} width={250} alt="unicornio" id='unicornio' />
                <p className='small-bold text-center'>Unicornio</p>
            </div>
            <div>
                <Image src="/merlina.jpg" height={250} width={250} alt="merlina" id='merlina' />
                <p className='small-bold text-center'>Merlina</p>
            </div>
            <div>
                <Image src="/encanto.jpg" height={250} width={250} alt="encanto" id='encanto' />
                <p className='small-bold text-center'>Encanto</p>
            </div>
            <div>
                <Image src="/frozen.jpg" height={250} width={250} alt="frozen" id='frozen' />
                <p className='small-bold text-center'>Frozen</p>
            </div>


        </div>

    </section>
  )
}

export default Services