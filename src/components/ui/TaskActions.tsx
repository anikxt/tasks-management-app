import { AddTask } from './AddTask';
import { FilterTasks } from './FilterTasks';
import { SortTasks } from './SortTasks';

export const TaskActions = () => {
  return (
    <div className="flex gap-4 sm:min-w-xs md:min-w-sm lg:min-w-md pr-6 sm:pr-0">
      <AddTask />
      <SortTasks />
      <FilterTasks />
    </div>
  );
};
