import { AddTask } from './AddTask';
import { FilterTasks } from './FilterTasks';
import { SortTasks } from './SortTasks';

export const TaskActions = () => {
  return (
    <div className="flex gap-4">
      <AddTask />
      <SortTasks />
      <FilterTasks />
    </div>
  );
};
