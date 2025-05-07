import { Priority } from '@/data/tasks';
import { Button } from './button';
import * as DropdownMenu from './dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useContext } from 'react';
import { TableDataContext } from '@/context/TableDataContext';

type PriorityMenuProps = {
  taskId: number;
  priority: Priority;
};

const textSize = 'sm:text-xs md:text-sm';

export const PriorityMenu: React.FC<PriorityMenuProps> = ({
  taskId,
  priority,
}) => {
  const ctx = useContext(TableDataContext);
  if (!ctx) throw new Error('PriorityMenu must be inside TableDataProvider');
  const { setMasterTasks } = ctx;

  const handleSetPriority = (val: Priority) => {
    setMasterTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, priority: val as Priority } : t
      )
    );
  };

  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button className={`flex items-center ${textSize}`} variant="outline">
          {priority} <ChevronDown />
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent className="w-56">
        <DropdownMenu.DropdownMenuRadioGroup
          value={priority}
          onValueChange={(val) => handleSetPriority(val as Priority)}
        >
          <DropdownMenu.DropdownMenuRadioItem value="High">
            High
          </DropdownMenu.DropdownMenuRadioItem>
          <DropdownMenu.DropdownMenuRadioItem value="Medium">
            Medium
          </DropdownMenu.DropdownMenuRadioItem>
          <DropdownMenu.DropdownMenuRadioItem value="Low">
            Low
          </DropdownMenu.DropdownMenuRadioItem>
        </DropdownMenu.DropdownMenuRadioGroup>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
};
