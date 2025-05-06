'use client';

import { Navbar, TaskListPage, TasksPageHeader } from '@/components/ui';

import { MobileOpenProvider } from '@/context/MobileOpenContext';
import { TableDataProvider } from '@/context/TableDataContext';

export default function Home() {
  return (
    <TableDataProvider>
      <MobileOpenProvider>
        <div className="flex flex-col container mx-auto px-2 min-h-screen font-montserrat leading-normal pb-24">
          <div className="sticky top-0 z-50 bg-white shadow-[0_4px_2px_-2px_rgba(0,0,0,0.1)]">
            <Navbar />
            <TasksPageHeader />
          </div>

          <TaskListPage />
        </div>
      </MobileOpenProvider>
    </TableDataProvider>
  );
}
