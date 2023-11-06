import { DoorClosed, Phone } from 'lucide-react';
import React from 'react';
import { copyrightSign } from '../public/icons';
import { teresita } from '@/public/images';
import Image from 'next/image';
import { footerLinks, socialMedia } from '@/constants';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="container bg-blue-500 pt-10">
      <div className="flex justify-center items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          
          
            <Image 
            src={teresita} 
            alt="logo" 
            width={200} 
            height={200} />
          
          </div>
          <div>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Sabemos que hoy es un día muy importante para ti, es por eso que siempre ofrecemos lo mejor para que tu fiesta sea un éxito!</p>
          {/* Social Media icons */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div 
              key={icon.alt}
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Link href={icon.link}>
                <Image src={icon.src} alt={icon.alt} height={24} width={24} />
                </Link>
              </div>
            ))}

          </div>
        </div>
        {/* links */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray "
                  key={link.name}
                  >
                    <p >{link.name}</p>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-center gap-2 font-montserrat">
          <Image src={copyrightSign} alt="Copyright" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All Rights Reserved</p>
          <p className="font-montserrat">Terms & Condidtions</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
