'use client';

import { DataTable, Navbar, TasksPageHeader } from '@/components/ui';
import { TableDataProvider } from '@/context/TableDataContext';

export default function Home() {
  return (
    <TableDataProvider>
      <div className="flex flex-col container mx-auto px-2 h-screen font-montserrat leading-normal">
        <Navbar />
        <TasksPageHeader />
        <DataTable />
      </div>
    </TableDataProvider>
  );
}
