import React from 'react';
import { DataTable, DataTableMobile } from '@/components/ui';

export const TaskListPage = () => {
  return (
    <div className="py-2">
      <DataTable />
      <DataTableMobile />
    </div>
  );
};
