import React from 'react';
import * as DropdownMenu from './dropdown-menu';
import { Button } from './button';
import { ListFilter } from 'lucide-react';

export const FilterTasks = () => {
  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button
          className="rounded font-semibold border-[var(--color-prime)] text-[var(--color-prime)] hover:border-[var(--color-hover-prime)] hover:text-[var(--color-hover-prime)]"
          variant="outline"
        >
          <ListFilter className="size-4" />{' '}
          <span className="pt-[1px] pr-1">Filter</span>
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent className="w-56">
        <DropdownMenu.DropdownMenuLabel>
          Filter by Priority
        </DropdownMenu.DropdownMenuLabel>
        <DropdownMenu.DropdownMenuSeparator />
        <DropdownMenu.DropdownMenuCheckboxItem checked={true}>
          High
        </DropdownMenu.DropdownMenuCheckboxItem>
        <DropdownMenu.DropdownMenuCheckboxItem>
          Medium
        </DropdownMenu.DropdownMenuCheckboxItem>
        <DropdownMenu.DropdownMenuCheckboxItem>
          Low
        </DropdownMenu.DropdownMenuCheckboxItem>
        <DropdownMenu.DropdownMenuSeparator />
        <DropdownMenu.DropdownMenuLabel>
          Filter by Status
        </DropdownMenu.DropdownMenuLabel>
        <DropdownMenu.DropdownMenuSeparator />
        <DropdownMenu.DropdownMenuCheckboxItem checked={true}>
          In Progress
        </DropdownMenu.DropdownMenuCheckboxItem>
        <DropdownMenu.DropdownMenuCheckboxItem>
          Completed
        </DropdownMenu.DropdownMenuCheckboxItem>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
};
