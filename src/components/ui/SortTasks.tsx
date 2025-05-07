import React, { useContext, useState } from 'react';
import * as DropdownMenu from './dropdown-menu';
import { Button } from './button';
import { ArrowUpDown } from 'lucide-react';
import { TableDataContext } from '@/context/TableDataContext';

export const SortTasks = () => {
  const ctx = useContext(TableDataContext);
  if (!ctx) throw new Error('SortTasks must be inside TableDataProvider');
  const { masterTasks, setDisplayTasks, displayTasks } = ctx;

  // true = ascending, false = descending
  const [ascending, setAscending] = useState(true);

  const handleSort = (isAsc: boolean) => {
    setAscending(isAsc);

    const sortedTasks = [...displayTasks].sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return isAsc ? dateA - dateB : dateB - dateA;
    });

    setDisplayTasks(sortedTasks);
  };

  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button
          className="rounded font-semibold border-[var(--color-prime)] text-[var(--color-prime)] hover:border-[var(--color-hover-prime)] hover:text-[var(--color-hover-prime)] flex-1"
          variant="outline"
        >
          <ArrowUpDown className="size-4" />
          <span className="pt-[1px] pr-1 hidden sm:flex"> Sort</span>
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent className="w-56">
        <DropdownMenu.DropdownMenuLabel>
          Sort by Due Date
        </DropdownMenu.DropdownMenuLabel>
        <DropdownMenu.DropdownMenuSeparator />

        <DropdownMenu.DropdownMenuRadioGroup
          value={ascending ? 'asc' : 'desc'}
          onValueChange={(val) => handleSort(val === 'asc')}
        >
          <DropdownMenu.DropdownMenuRadioItem value="asc">
            Ascending Order
          </DropdownMenu.DropdownMenuRadioItem>
          <DropdownMenu.DropdownMenuRadioItem value="desc">
            Descending Order
          </DropdownMenu.DropdownMenuRadioItem>
        </DropdownMenu.DropdownMenuRadioGroup>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
};
