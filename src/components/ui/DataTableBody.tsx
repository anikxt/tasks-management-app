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

  const { displayTasks } = ctx;

  return (
    <Table.TableBody>
      {displayTasks.length > 0 ? (
        displayTasks.map((task, index) => (
          <TableEntry key={task.id} task={task} index={index} />
        ))
      ) : (
        <NoTaskFound />
      )}
    </Table.TableBody>
  );
};
