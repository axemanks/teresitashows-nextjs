import { DoorClosed, Phone } from 'lucide-react';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className='nav-padding flex flex-col flex-between justify-center content h-[150px]'>
        <h1 className='heading1 text-gradient_blue-purple text-center'>
          Otros Servicios
        </h1>
        <ul className='paragraph-semibold text-gradient px-10'>
          <li>
            <p>Fiestas de Cumpleaños</p>
          </li>
          <li>
            <p>Despedidas de Solteros</p>
          </li>
          <li>
            <p>Baby Shower</p>
          </li>
          <li>
            <p>Revelación de género</p>
          </li>
          <li>
            <p>y mucho más</p>
            </li>
        </ul>
        
        <Phone width={24} height={24} className='text-primary' />
        <p className='paragraph-regular text-center text-primary pt-5'>Contactanos al 469-328-2513</p>
        
      </div>
    </footer>
  );
};

export default Footer;
