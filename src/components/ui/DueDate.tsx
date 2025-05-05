import React from 'react';
import { Label, Input } from './index';

interface DueDateProps {
  value?: string;
}

export const DueDate: React.FC<DueDateProps> = ({ value = '' }) => {
  return (
    <div className="grid grid-4 items-center gap-2 py-1">
      <Label htmlFor="dueDate" className="text-right font-medium">
        Choose Due Date
      </Label>
      <Input
        type="date"
        id="dueDate"
        defaultValue={value}
        name="dueDate"
        placeholder="12/09/2024"
        className="col-span-3"
      />
    </div>
  );
};
