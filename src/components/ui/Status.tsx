import { Task } from '@/data/tasks';
import * as Select from './index';
import { Label } from './index';
import { Dispatch, SetStateAction } from 'react';

interface StatusProps {
  status: Task['status'];
  setStatus: Dispatch<SetStateAction<Task['status']>>;
}

export const Status: React.FC<StatusProps> = ({ status, setStatus }) => {
  return (
    <div className="grid grid-4 items-center gap-2 py-1">
      <Label htmlFor="status" className="text-right font-medium">
        Status
      </Label>
      <Select.Select
        value={status}
        onValueChange={(val) => setStatus(val as Task['status'])}
      >
        <Select.SelectTrigger className="w-[180px]">
          <Select.SelectValue placeholder="Select status" />
        </Select.SelectTrigger>
        <Select.SelectContent>
          <Select.SelectGroup>
            <Select.SelectItem value="In Progress">
              In Progress
            </Select.SelectItem>
            <Select.SelectItem value="Completed">Completed</Select.SelectItem>
          </Select.SelectGroup>
        </Select.SelectContent>
      </Select.Select>
    </div>
  );
};
