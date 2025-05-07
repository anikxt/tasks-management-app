import Image from 'next/image';
import { useContext } from 'react';
import { MobileOpenContext } from '@/context/MobileOpenContext';

export const Logo = () => {
  const ctx = useContext(MobileOpenContext);
  if (!ctx) {
    throw new Error('Logo must be rendered inside a MobileOpenProvider');
  }
  const { mobileOpen } = ctx;

  return (
    // <img
    //   className={`${
    //     mobileOpen ? 'hidden' : 'flex'
    //   } sm:flex h-[80px] md:h-[100px] w-[160px] md:w-[200px] relative sm:left-[-40]`}
    //   src="https://www.studio137.co.za/images/studio137-logo.png"
    //   alt="Studio 137 Digital Media Solution"
    // />

    <div className={`${mobileOpen ? 'hidden' : 'flex'} sm:flex relative`}>
      {/* wrapper to give Next/Image a CSS-controlled size */}
      <div className="relative h-[80px] md:h-[100px] w-[160px] md:w-[200px]">
        <Image
          src="https://www.studio137.co.za/images/studio137-logo.png"
          alt="Studio 137 Digital Media Solution"
          priority
          fill
          sizes="(max-width: 768px) 200px, (min-width: 640px) 160px, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
};
