import { Logo } from './Logo';
import { SearchInput } from './SearchInput';

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center pb-2">
      <Logo />
      <SearchInput />
    </div>
  );
};
