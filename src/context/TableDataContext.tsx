'use client';

import { Priority, Status, Task, tasks as initialTasks } from '@/data/tasks';
import { createContext, ReactNode, useMemo, useState } from 'react';

export interface TableDataContextType {
  /** the full list including added/edited items */
  masterTasks: Task[];
  setMasterTasks: React.Dispatch<React.SetStateAction<Task[]>>;

  /** search query context */
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  // filter state: undefined = no filter
  /** priority filter context */
  priorityFilter?: Priority | undefined;
  setPriorityFilter: React.Dispatch<React.SetStateAction<Priority | undefined>>;

  /** status filter context */
  statusFilter?: Status | undefined;
  setStatusFilter: React.Dispatch<React.SetStateAction<Status | undefined>>;

  /** sort direction context */
  sortOrder: 'asc' | 'desc' | undefined;
  setSortOrder: React.Dispatch<
    React.SetStateAction<'asc' | 'desc' | undefined>
  >;

  /** display tasks context */
  displayTasks: Task[];
}

export const TableDataContext = createContext<TableDataContextType | undefined>(
  undefined
);

export function TableDataProvider({ children }: { children: ReactNode }) {
  const [masterTasks, setMasterTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState<string>('');
  const [priorityFilter, setPriorityFilter] = useState<Priority | undefined>(
    undefined
  );
  const [statusFilter, setStatusFilter] = useState<Status | undefined>(
    undefined
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | undefined>(
    undefined
  );

  // derive displayTasks by chaining all filters
  const displayTasks = useMemo(() => {
    const query = search.trim().toLowerCase();

    return masterTasks
      .filter((task) =>
        query ? task.title.toLowerCase().includes(query) : true
      )
      .filter((task) =>
        priorityFilter ? task.priority === priorityFilter : true
      )
      .filter((task) => (statusFilter ? task.status === statusFilter : true))
      .sort((a, b) => {
        if (!sortOrder) {
          return (
            masterTasks.findIndex((t) => t.id === a.id) -
            masterTasks.findIndex((t) => t.id === b.id)
          );
        }
        const dateA = new Date(a.dueDate).getTime();
        const dateB = new Date(b.dueDate).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [masterTasks, search, priorityFilter, statusFilter, sortOrder]);

  return (
    <TableDataContext.Provider
      value={{
        masterTasks,
        setMasterTasks,
        search,
        setSearch,
        priorityFilter,
        setPriorityFilter,
        statusFilter,
        setStatusFilter,
        sortOrder,
        setSortOrder,
        displayTasks,
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}
