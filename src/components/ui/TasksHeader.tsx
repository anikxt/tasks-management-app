import { MobileOpenContext } from '@/context/MobileOpenContext';
import React, { useContext } from 'react';

export const TasksHeader = () => {
  const ctx = useContext(MobileOpenContext);
  if (!ctx) {
    throw new Error('TasksHeader must be rendered inside a MobileOpenProvider');
  }
  const { mobileOpen } = ctx;

  return (
    <div
      className={`${mobileOpen ? 'pl-0' : 'pl-6'} font-black text-2xl sm:pl-0`}
    >
      Tasks
    </div>
  );
};
