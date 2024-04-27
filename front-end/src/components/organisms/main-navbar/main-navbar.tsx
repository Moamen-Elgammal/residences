import React from 'react';
import { Navbar, NavbarBrand, Link } from '@nextui-org/react';

export default function MainNavbar() {
  return (
    <Navbar
      position='sticky'
      maxWidth='full'
      classNames={{
        base: ['px-10'],
      }}
    >
      <Link color='foreground' href='/residences'>
        <NavbarBrand>
          <img
            src='https://img.icons8.com/ios/50/000000/skyscrapers.png'
            height='30'
            alt=''
          />

          <p className='uppercase align-middle pl-[8px]'>Residences</p>
        </NavbarBrand>
      </Link>

      <Link color='foreground' href='/controling'>
        <p className='uppercase align-middle'>Controling</p>
      </Link>
    </Navbar>
  );
}
