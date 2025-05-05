import { Task } from '@/data/tasks';
import { PriorityMenu } from './PriorityMenu';
import * as Table from './table';
import { EditTask } from './EditTask';
import { DeleteTask } from './DeleteTask';

interface TableEntryProps {
  task: Task;
  index: number;
}

export const TableEntry: React.FC<TableEntryProps> = ({ task, index }) => {
  return (
    <Table.TableRow
      className={`${index % 2 !== 0 ? 'bg-[var(--color-table)]' : 'bg-white'}`}
      key={task.id}
    >
      <Table.TableCell className="font-medium">{index + 1}</Table.TableCell>
      <Table.TableCell>{task.title}</Table.TableCell>
      <Table.TableCell className="">{task.description}</Table.TableCell>
      <Table.TableCell className="">{task.dueDate}</Table.TableCell>
      <Table.TableCell>
        <div
          className={`flex justify-center p-0.5 text-white border rounded-4xl ${
            task.status === 'Completed'
              ? 'bg-[var(--color-completed)]'
              : 'bg-[var(--color-in-progress)]'
          }`}
        >
          {task.status}
        </div>
      </Table.TableCell>
      <Table.TableCell className="">
        <PriorityMenu taskId={task.id} priority={task.priority} />
      </Table.TableCell>

      <EditTask task={task} />
      <DeleteTask taskId={task.id} />
    </Table.TableRow>
  );
};
