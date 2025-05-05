import React from 'react';
import { TasksHeader } from './TasksHeader';
import { TaskActions } from './TaskActions';

export const TasksPageHeader = () => {
  return (
    <div className="flex justify-between font-semibold pt-8 pb-16 pr-16">
      <TasksHeader />
      <TaskActions />
    </div>
  );
};
