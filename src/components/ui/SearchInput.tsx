import React from 'react';
import { Input } from './input';
import { Search } from 'lucide-react';

export const SearchInput = () => {
  return (
    <div className="pr-16 flex w-[383px]">
      <Input
        className="rounded border-search text-black"
        type="email"
        placeholder="Search"
      />
    </div>
  );
};
