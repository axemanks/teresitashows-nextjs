import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
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

        {/* Links */}
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10 body-text text-gradient_blue-orange font-bold'>
          <li>
            <Link href='#services'>
              <Button variant='ghost'>Servicios</Button>
            </Link>
          </li>
          <li>
            <Link href='#gallery'>
              <Button variant='ghost'>Galeria</Button>
            </Link>
          </li>
          <li>
            <Link href='#contact'>
              <Button variant='ghost'>Contáctanos</Button>
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
