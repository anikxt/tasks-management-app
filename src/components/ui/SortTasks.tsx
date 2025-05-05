import React from 'react';
import * as DropdownMenu from './dropdown-menu';
import { Button } from './button';
import { ArrowUpDown } from 'lucide-react';

export const SortTasks = () => {
  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button
          className="rounded font-semibold border-[var(--color-prime)] text-[var(--color-prime)] hover:border-[var(--color-hover-prime)] hover:text-[var(--color-hover-prime)]"
          variant="outline"
        >
          <ArrowUpDown className="size-4" />
          <span className="pt-[1px] pr-1"> Sort</span>
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent className="w-56">
        <DropdownMenu.DropdownMenuLabel>
          Sort by Due Date
        </DropdownMenu.DropdownMenuLabel>
        <DropdownMenu.DropdownMenuSeparator />
        <DropdownMenu.DropdownMenuCheckboxItem checked={true}>
          Ascending Order
        </DropdownMenu.DropdownMenuCheckboxItem>
        <DropdownMenu.DropdownMenuCheckboxItem>
          Descending Order
        </DropdownMenu.DropdownMenuCheckboxItem>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
};
