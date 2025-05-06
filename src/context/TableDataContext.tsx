'use client';

import { Task, tasks as initialTasks } from '@/data/tasks';
import { createContext, ReactNode, useState } from 'react';

export interface TableDataContextType {
  /** the full list including added/edited items */
  masterTasks: Task[];
  setMasterTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  /** the filtered/sorted/search view */
  displayTasks: Task[];
  setDisplayTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TableDataContext = createContext<TableDataContextType | undefined>(
  undefined
);

export function TableDataProvider({ children }: { children: ReactNode }) {
  const [masterTasks, setMasterTasks] = useState<Task[]>(initialTasks);
  const [displayTasks, setDisplayTasks] = useState<Task[]>(initialTasks);

  return (
    <TableDataContext.Provider
      value={{ masterTasks, setMasterTasks, displayTasks, setDisplayTasks }}
    >
      {children}
    </TableDataContext.Provider>
  );
}
