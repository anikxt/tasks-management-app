import React from 'react';
import * as Table from './table';

export const DataTableHeader = () => {
  return (
    <Table.TableHeader className="bg-[var(--color-table)]">
      <Table.TableRow className="border-b border-b-[var(--color-prime)]">
        <Table.TableHead className="text-[var(--color-prime)] p-4">
          SL.No
        </Table.TableHead>
        <Table.TableHead className="text-[var(--color-prime)]">
          Title
        </Table.TableHead>
        <Table.TableHead className="text-[var(--color-prime)]">
          Description
        </Table.TableHead>
        <Table.TableHead className="text-[var(--color-prime)]">
          Due Date
        </Table.TableHead>
        <Table.TableHead className="text-[var(--color-prime)]">
          Status
        </Table.TableHead>
        <Table.TableHead className="text-[var(--color-prime)]">
          Priority
        </Table.TableHead>
        <Table.TableHead className=""></Table.TableHead>
        <Table.TableHead className=""></Table.TableHead>
      </Table.TableRow>
    </Table.TableHeader>
  );
};
