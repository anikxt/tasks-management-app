import React, { useContext, useEffect, useState } from 'react';
import * as DropdownMenu from './dropdown-menu';
import { Button } from './button';
import { ListFilter } from 'lucide-react';
import { TableDataContext } from '@/context/TableDataContext';
import { Priority, Status } from '@/data/tasks';

export const FilterTasks = () => {
  // context
  const ctx = useContext(TableDataContext);
  if (!ctx) {
    throw new Error('FilterTask must be rendered inside a TableDataProvider');
  }
  const { masterTasks, setDisplayTasks } = ctx;

  // filter state: undefined = no filter
  const [priorityFilter, setPriorityFilter] = useState<Priority | undefined>(
    undefined
  );

  const [statusFilter, setStatusFilter] = useState<Status | undefined>(
    undefined
  );

  // when filters change, recompute tasks
  useEffect(() => {
    let filteredTasks = masterTasks;

    if (priorityFilter) {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority === priorityFilter
      );
    }

    if (statusFilter) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === statusFilter
      );
    }

    setDisplayTasks(filteredTasks);
  }, [masterTasks, priorityFilter, statusFilter, setDisplayTasks]);

  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button
          className="rounded font-semibold border-[var(--color-prime)] text-[var(--color-prime)] hover:border-[var(--color-hover-prime)] hover:text-[var(--color-hover-prime)] flex-1"
          variant="outline"
        >
          <ListFilter className="size-4" />
          <span className="pt-[1px] pr-1 hidden sm:flex">Filter</span>
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent className="w-56">
        <DropdownMenu.DropdownMenuLabel>
          Filter by Priority
        </DropdownMenu.DropdownMenuLabel>
        <DropdownMenu.DropdownMenuSeparator />

        <DropdownMenu.DropdownMenuRadioGroup
          value={priorityFilter}
          onValueChange={(val) =>
            setPriorityFilter((prev) =>
              prev === val ? undefined : (val as Priority)
            )
          }
        >
          <DropdownMenu.DropdownMenuRadioItem value="High">
            High
          </DropdownMenu.DropdownMenuRadioItem>
          <DropdownMenu.DropdownMenuRadioItem value="Medium">
            Medium
          </DropdownMenu.DropdownMenuRadioItem>
          <DropdownMenu.DropdownMenuRadioItem value="Low">
            Low
          </DropdownMenu.DropdownMenuRadioItem>
        </DropdownMenu.DropdownMenuRadioGroup>

        <DropdownMenu.DropdownMenuSeparator />

        <DropdownMenu.DropdownMenuLabel>
          Filter by Status
        </DropdownMenu.DropdownMenuLabel>
        <DropdownMenu.DropdownMenuSeparator />

        <DropdownMenu.DropdownMenuRadioGroup
          value={statusFilter}
          onValueChange={(val) =>
            setStatusFilter((prev) =>
              prev === val ? undefined : (val as Status)
            )
          }
        >
          <DropdownMenu.DropdownMenuRadioItem value="Completed">
            Completed
          </DropdownMenu.DropdownMenuRadioItem>
          <DropdownMenu.DropdownMenuRadioItem value="In Progress">
            In Progress
          </DropdownMenu.DropdownMenuRadioItem>
        </DropdownMenu.DropdownMenuRadioGroup>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
};
