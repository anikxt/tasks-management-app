import { Task } from '@/data/tasks';
import { PriorityMenu } from './PriorityMenu';
import * as Table from './table';
import { EditTask } from './EditTask';
import { DeleteTask } from './DeleteTask';

interface TableEntryProps {
  task: Task;
  index: number;
}

const textSize = 'sm:text-xs md:text-sm';

export const TableEntry: React.FC<TableEntryProps> = ({ task, index }) => {
  return (
    <Table.TableRow
      className={`${index % 2 !== 0 ? 'bg-[var(--color-table)]' : 'bg-white'}`}
      key={task.id}
    >
      <Table.TableCell className="font-medium">
        <div
          className={`flex justify-center items-center align-middle min-w-6 ${textSize}`}
        >
          {index + 1}
        </div>
      </Table.TableCell>
      <Table.TableCell
        className={`p-4 min-w-4 break-words whitespace-normal ${textSize}`}
      >
        {task.title}
      </Table.TableCell>
      <Table.TableCell className="flex">
        <div
          className={`p-4 min-w-16 break-words whitespace-normal ${textSize}`}
        >
          {task.description}
        </div>
      </Table.TableCell>
      <Table.TableCell className={`p-4 max-w-48 ${textSize}`}>
        {task.dueDate}
      </Table.TableCell>
      <Table.TableCell>
        <div
          className={`flex justify-center text-white border rounded-4xl ${
            task.status === 'Completed'
              ? 'bg-[var(--color-completed)]'
              : 'bg-[var(--color-in-progress)]'
          } ${textSize} p-1 md:px-2 lg:p-1 text-xs`}
        >
          {task.status}
        </div>
      </Table.TableCell>
      <Table.TableCell className={`p-4 md:max-w-32 ${textSize}`}>
        <PriorityMenu taskId={task.id} priority={task.priority} />
      </Table.TableCell>

      <Table.TableCell className="p-0 md:p-2">
        <EditTask task={task} />
      </Table.TableCell>

      <Table.TableCell className="p-0 md:p-2">
        <DeleteTask taskId={task.id} />
      </Table.TableCell>
    </Table.TableRow>
  );
};
