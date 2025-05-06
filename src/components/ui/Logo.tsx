import { MobileOpenContext } from '@/context/MobileOpenContext';
import React, { useContext } from 'react';

export const Logo = () => {
  const ctx = useContext(MobileOpenContext);
  if (!ctx) {
    throw new Error('Logo must be rendered inside a MobileOpenProvider');
  }
  const { mobileOpen, setMobileOpen } = ctx;

  return (
    <img
      className={`${
        mobileOpen ? 'hidden' : 'flex'
      } sm:flex h-[80px] md:h-[100px] w-[160px] md:w-[200px]`}
      src="https://www.studio137.co.za/images/studio137-logo.png"
      alt="Studio 137 Digital Media Solution"
    />
  );
};
