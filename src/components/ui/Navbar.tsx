import { useState } from 'react';
import { Logo } from './Logo';
import { SearchInput } from './SearchInput';

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex justify-between items-center pt-16 pb-8">
      <Logo />
      <SearchInput />
    </div>
  );
};
