import { Logo } from './Logo';
import { SearchInput } from './SearchInput';

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-16 pb-2">
      <Logo />
      <SearchInput />
    </div>
  );
};
