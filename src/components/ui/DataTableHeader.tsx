import React from 'react';
import * as Table from './table';

const textColor = 'text-[var(--color-prime)]';
const textSize = 'sm:text-xs md:text-sm';

export const DataTableHeader = () => {
  return (
    <Table.TableHeader className="bg-[var(--color-table)]">
      <Table.TableRow className="border-b border-b-[var(--color-prime)]">
        <Table.TableHead className={`${textColor} p-4 ${textSize}`}>
          SL.No
        </Table.TableHead>
        <Table.TableHead className={`${textColor} p-4  ${textSize}`}>
          Title
        </Table.TableHead>
        <Table.TableHead className={`${textColor} p-4  ${textSize}`}>
          Description
        </Table.TableHead>
        <Table.TableHead className={`${textColor} p-4  ${textSize}`}>
          Due Date
        </Table.TableHead>
        <Table.TableHead className={`${textColor} p-4  ${textSize}`}>
          Status
        </Table.TableHead>
        <Table.TableHead className={`${textColor} p-4  ${textSize}`}>
          Priority
        </Table.TableHead>
        <Table.TableHead className="p-4"></Table.TableHead>
        <Table.TableHead className="p-4"></Table.TableHead>
      </Table.TableRow>
    </Table.TableHeader>
  );
};
