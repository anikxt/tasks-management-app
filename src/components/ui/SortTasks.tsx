import { TableDataContext } from '@/context/TableDataContext';
import { ArrowUpDown } from 'lucide-react';
import { useContext } from 'react';
import { Button } from './button';
import * as DropdownMenu from './dropdown-menu';

export const SortTasks = () => {
  const ctx = useContext(TableDataContext);
  if (!ctx) throw new Error('SortTasks must be inside TableDataProvider');
  const { sortOrder, setSortOrder } = ctx;

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
          value={sortOrder}
          onValueChange={(val) =>
            setSortOrder((prev) =>
              prev === val ? undefined : (val as 'asc' | 'desc')
            )
          }
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
