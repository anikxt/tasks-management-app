import { TableDataContext } from '@/context/TableDataContext';
import { useContext, useEffect, useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { CircleX, Search } from 'lucide-react';
import { MobileOpenContext } from '@/context/MobileOpenContext';

export const SearchInput = () => {
  // context
  const ctx = useContext(TableDataContext);
  if (!ctx) {
    throw new Error('SearchInput must be rendered inside a TableDataProvider');
  }

  const {
    search,
    setSearch,
    setPriorityFilter,
    setStatusFilter,
    setSortOrder,
  } = ctx;

  // local search input value
  const [inputValue, setInputValue] = useState(search);

  // update debounced value after 300ms of no typing
  useEffect(() => {
    // reset filters and sort order when search input is changed
    setPriorityFilter(undefined);
    setStatusFilter(undefined);
    setSortOrder(undefined);

    const timer = setTimeout(() => {
      setSearch(inputValue.trim());
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  // mobileOpen context
  const mobilectx = useContext(MobileOpenContext);
  if (!mobilectx) {
    throw new Error('Logo must be rendered inside a MobileOpenProvider');
  }
  const { mobileOpen, setMobileOpen } = mobilectx;

  // Whenever we hit ≥640px, close any mobile‐only UI
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 640px)');

    const handleResize = () => {
      if (mql.matches && mobileOpen) {
        setMobileOpen(false);
      }
    };

    mql.addEventListener('change', handleResize);
    return () => mql.removeEventListener('change', handleResize);
  }, [mobileOpen, setMobileOpen]);

  return (
    <div
      className={`relative pr-6 sm:pr-0 ${
        mobileOpen ? 'flex-1' : 'flex-0'
      } sm:flex-0`}
    >
      {/* sm+ sizes */}
      <div className="hidden sm:flex sm:min-w-xs md:min-w-sm lg:min-w-md relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-search"
          size={20}
        />
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded border-search text-black pl-10 w-full"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* sm- sizes */}
      <div className={`${mobileOpen ? 'hidden' : 'flex'} sm:hidden`}>
        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-4 py-6 bg-prime"
        >
          <Search className="size-6" />
        </Button>
      </div>

      <div
        className={`${
          mobileOpen ? 'flex gap-3 items-center' : 'hidden'
        } sm:hidden relative w-full py-4 sm:py-0`}
      >
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-search"
          size={20}
        />
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded border-search text-black pl-10 w-full"
          type="text"
          placeholder="Search"
        />
        <Button
          variant={'outline'}
          onClick={() => {
            setInputValue('');
            setSearch('');
            setMobileOpen(false);
          }}
          className="p-2 border border-search"
        >
          <CircleX className="size-6 text-search" />
        </Button>
      </div>
    </div>
  );
};
