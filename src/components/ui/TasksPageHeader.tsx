import React from 'react';
import { TasksHeader } from './TasksHeader';
import { TaskActions } from './TaskActions';

export const TasksPageHeader = () => {
  return (
    <div className="flex justify-between font-semibold pb-8">
      <TasksHeader />
      <TaskActions />
    </div>
  );
};
