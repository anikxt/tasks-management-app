import { TableDataContext } from '@/context/TableDataContext';
import { useContext, useEffect, useState } from 'react';
import { Input } from './input';

export const SearchInput = () => {
  // context
  const ctx = useContext(TableDataContext);
  if (!ctx) {
    throw new Error('SearchInput must be rendered inside a TableDataProvider');
  }
  const { setTasks, originalTasks } = ctx;

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
      setTasks(originalTasks);
    } else {
      const filteredTasks = originalTasks.filter((task) =>
        task.title.toLowerCase().includes(debounced.toLowerCase())
      );
      setTasks(filteredTasks);
    }
  }, [debounced, originalTasks, setTasks]);

  return (
    <div className="pr-16 flex w-[383px]">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        className="rounded border-search text-black"
        type="email"
        placeholder="Search"
      />
    </div>
  );
};
