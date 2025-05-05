import React from 'react';
import { Label, Textarea } from './index';

interface DescriptionProps {
  value?: string;
}

export const Description: React.FC<DescriptionProps> = ({ value = '' }) => {
  return (
    <div className="grid grid-4 items-center gap-2 py-1">
      <Label htmlFor="description" className="text-right font-medium">
        Description
      </Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={value}
        placeholder="Description"
        className="col-span-3"
      />
    </div>
  );
};
