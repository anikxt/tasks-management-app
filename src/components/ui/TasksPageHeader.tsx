import React from 'react';
import { TasksHeader } from './TasksHeader';
import { TaskActions } from './TaskActions';

export const TasksPageHeader = () => {
  return (
    <div className="flex justify-between items-center font-semibold pb-4 sm:pb-8">
      <TasksHeader />
      <TaskActions />
    </div>
  );
};
