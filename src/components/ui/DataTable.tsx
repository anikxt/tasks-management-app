import React from 'react';
import * as Table from './table';

import { DataTableHeader } from './DataTableHeader';
import { DataTableBody } from './DataTableBody';

export const DataTable = () => {
  return (
    <div className="border border-[var(--color-prime)] rounded-lg overflow-hidden">
      <Table.Table>
        <DataTableHeader />
        <DataTableBody />
      </Table.Table>
    </div>
  );
};
