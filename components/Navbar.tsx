import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { PhoneForwardedIcon } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-primary/20 py-7 drop-shadow-xl bg-primary-foreground h-[100px]'>
      <div className='flex-between mx-auto w-full max-w-sceen-2xl px-6 xs:px-8 sm:px-16'>
        {/* Home */}
        <Link href='/'>
          <p className='text-blue-500 text-gradient_blue-orange font-bold text-2xl'>
            Teresita Shows
          </p>
        </Link>
        {/* Hover Contact */}
     <div className='mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-primary hover:bg-white/50 text-primary'>
        <div className='mr-2'>
        <PhoneForwardedIcon size={24} />
        </div>
        <span>469-328-2513</span>
     </div>
        {/* Links */}
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10 body-text text-gradient_blue-orange font-bold'>
            
            <li>
              <Link href="#services">
                <Button variant="ghost">Servicios</Button>
                </Link>
            </li>
            <li>
              <Link href="#gallery">
                <Button variant="ghost">Galeria</Button>
              </Link>
            </li>
        </ul>

        {/* Hamburger Menu on small devices*/}
        <Image
          src='/hamburger-menu.svg'
          alt='hamburger menu'
          width={30}
          height={30}
          className='block sm:hidden'
        />
      </div>
    </nav>
  );
};

export default Navbar;
