import React from 'react';
import { Label, Input } from './index';

interface TitleProps {
  value?: string;
}

export const Title: React.FC<TitleProps> = ({ value = '' }) => {
  return (
    <div className="grid grid-4 items-center gap-2">
      <Label htmlFor="title" className="text-right font-medium">
        Title
      </Label>
      <Input
        id="title"
        name="title"
        defaultValue={value}
        placeholder="Title"
        className="col-span-3"
      />
    </div>
  );
};
