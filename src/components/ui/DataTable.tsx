import React from 'react';
import * as Table from './table';

import { DataTableHeader } from './DataTableHeader';
import { DataTableBody } from './DataTableBody';

export const DataTable = () => {
  return (
    <div className="hidden sm:block border border-[var(--color-prime)] rounded-lg overflow-hidden table-fixed overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <Table.Table>
        <DataTableHeader />
        <DataTableBody />
      </Table.Table>
    </div>
  );
};
