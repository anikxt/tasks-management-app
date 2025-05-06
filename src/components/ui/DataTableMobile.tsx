import { TableDataContext } from '@/context/TableDataContext';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from './button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Status } from './Status';
import { PriorityMenu } from './PriorityMenu';
import { EditTask } from './EditTask';
import { DeleteTask } from './DeleteTask';
import { Task } from '@/data/tasks';

export const DataTableMobile = () => {
  const ctx = useContext(TableDataContext);

  if (!ctx) {
    throw new Error(
      'DataTableMobile must be rendered inside a TableDataProvider'
    );
  }

  const { tasks } = ctx;

  const [isHidden, setIsHidden] = useState<boolean[]>([]);

  useEffect(() => {
    setIsHidden(new Array(tasks.length).fill(true));
  }, [tasks]);

  const handleToggleVisibility = (index: number) => {
    setIsHidden((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="sm:hidden border-2 border-[var(--color-prime)] rounded-lg overflow-hidden">
      {tasks.map((task, index) => (
        <div key={task.id}>
          <div
            className={`${
              index % 2 !== 0 ? 'bg-[var(--color-table)]' : 'bg-white'
            } flex justify-between p-6`}
          >
            {/* first two key div  */}
            <div className="flex flex-col gap-4">
              <div className="flex">
                <div className="min-w-32 text-[var(--color-prime)]">SL.No</div>
                <div>{index + 1}</div>
              </div>

              <div className="flex">
                <div className="min-w-32 text-[var(--color-prime)]">Title</div>
                <div>{task.title}</div>
              </div>

              {!isHidden[index] && (
                <>
                  <div className="flex">
                    <div className="min-w-32 text-[var(--color-prime)]">
                      Description
                    </div>
                    <div>{task.description}</div>
                  </div>
                  <div className="flex">
                    <div className="min-w-32 text-[var(--color-prime)]">
                      Due Date
                    </div>
                    <div>{task.dueDate}</div>
                  </div>
                  <div className="flex">
                    <div className="min-w-32 text-[var(--color-prime)]">
                      Status
                    </div>
                    <div
                      className={`flex justify-center text-white border rounded-4xl ${
                        task.status === 'Completed'
                          ? 'bg-[var(--color-completed)]'
                          : 'bg-[var(--color-in-progress)]'
                      } px-4 py-1 text-xs`}
                    >
                      {task.status}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="min-w-32 text-[var(--color-prime)]">
                      Priority
                    </div>

                    <div className="flex w-full justify-between ">
                      <PriorityMenu taskId={task.id} priority={task.priority} />
                      <div className="flex">
                        <EditTask task={task} />
                        <DeleteTask taskId={task.id} />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* down arrow div */}
            <Button
              onClick={() => handleToggleVisibility(index)}
              className={`border-none ${
                index % 2 !== 0 ? 'bg-[var(--color-table)]' : 'bg-white'
              } variant={'outline'}`}
            >
              <ChevronDown
                className={`size-5 text-black transform transition-transform duration-500 ease-in-out ${
                  isHidden[index] ? 'rotate-0' : 'rotate-180'
                }`}
              />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
