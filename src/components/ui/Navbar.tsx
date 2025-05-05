import { Logo } from './Logo';
import { SearchInput } from './SearchInput';

export const Navbar = () => {
  return (
    <div className="flex justify-between pt-16 pb-8">
      <Logo />
      <SearchInput />
    </div>
  );
};
