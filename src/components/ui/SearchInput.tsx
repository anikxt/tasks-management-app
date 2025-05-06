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
  const { masterTasks, setMasterTasks, displayTasks, setDisplayTasks } = ctx;

  const [search, setSearch] = useState('');
  const [debounced, setDebounced] = useState(search);

  // update debounced value after 300ms of no typing
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(search), 300);

    return () => clearTimeout(handler);
  }, [search]);

  // run filter whenever the debounced value changes
  useEffect(() => {
    if (!debounced) {
      setDisplayTasks(masterTasks);
    } else {
      const filteredTasks = masterTasks.filter((task) =>
        task.title.toLowerCase().includes(debounced.toLowerCase())
      );
      setDisplayTasks(filteredTasks);
    }
  }, [debounced, masterTasks]);

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
      <div className="hidden sm:flex sm:min-w-xs md:min-w-sm lg:min-w-md">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border-search text-black"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* sm- sizes */}
      <div className={`${mobileOpen ? 'hidden' : 'flex'} sm:hidden`}>
        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-4 py-6 bg-[var(--color-prime)]"
        >
          <Search className="size-6" />
        </Button>
      </div>

      <div
        className={`${
          mobileOpen ? 'flex gap-3 items-center' : 'hidden'
        } sm:hidden`}
      >
        <Input
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border-search text-black"
          type="text"
          placeholder="Search"
        />
        <Button
          variant={'outline'}
          onClick={() => {
            setMobileOpen(false);
            setSearch('');
          }}
          className="p-2 border border-search"
        >
          <CircleX className="size-6 text-[var(--color-search)]" />
        </Button>
      </div>
    </div>
  );
};
