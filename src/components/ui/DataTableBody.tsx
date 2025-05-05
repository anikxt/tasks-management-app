import { TableDataContext } from '@/context/TableDataContext';
import { useContext } from 'react';
import * as Table from './table';
import { TableEntry } from './TableEntry';

export const DataTableBody = () => {
  const ctx = useContext(TableDataContext);

  if (!ctx) {
    throw new Error(
      'DataTableBody must be rendered inside a TableDataProvider'
    );
  }

  const { tasks } = ctx;

  return (
    <Table.TableBody>
      {tasks.map((task, index) => (
        <TableEntry key={task.id} task={task} index={index} />
      ))}
    </Table.TableBody>
  );
};
