'use client';

import { DataTable, Navbar, TasksPageHeader } from '@/components/ui';
import { MobileOpenProvider } from '@/context/MobileOpenContext';
import { TableDataProvider } from '@/context/TableDataContext';

export default function Home() {
  return (
    <TableDataProvider>
      <MobileOpenProvider>
        <div className="flex flex-col container mx-auto px-2 h-screen font-montserrat leading-normal">
          <Navbar />
          <TasksPageHeader />
          <DataTable />
        </div>
      </MobileOpenProvider>
    </TableDataProvider>
  );
}
