'use client';

import { Task, tasks as initialTasks } from '@/data/tasks';
import { createContext, ReactNode, useState } from 'react';

export interface TableDataContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  originalTasks: Task[];
}

export const TableDataContext = createContext<TableDataContextType | undefined>(
  undefined
);

export function TableDataProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const originalTasks = initialTasks;

  return (
    <TableDataContext.Provider value={{ tasks, setTasks, originalTasks }}>
      {children}
    </TableDataContext.Provider>
  );
}
