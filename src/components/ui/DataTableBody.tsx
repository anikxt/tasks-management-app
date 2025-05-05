import { TableDataContext } from '@/context/TableDataContext';
import { useContext } from 'react';
import * as Table from './table';
import { TableEntry } from './TableEntry';
import { NoTaskFound } from './NoTaskFound';

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
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TableEntry key={task.id} task={task} index={index} />
        ))
      ) : (
        <NoTaskFound />
      )}
    </Table.TableBody>
  );
};
