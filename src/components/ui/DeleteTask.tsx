import { Trash2 } from 'lucide-react';
import { Button } from './button';
import * as Dialog from './dialog';
import * as Table from './table';
import { useContext } from 'react';
import { TableDataContext } from '@/context/TableDataContext';
import { CancelFormDialog } from './CancelFormDialog';

interface DeleteTaskProps {
  taskId: number;
}

export const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId }) => {
  const ctx = useContext(TableDataContext);
  if (!ctx) throw new Error('DeleteTask must be inside TableDataProvider');
  const { setTasks } = ctx;

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  return (
    <Table.TableCell>
      <Dialog.Dialog>
        <Dialog.DialogTrigger asChild>
          <Button variant={'ghost'}>
            <Trash2 className="size-5" />
          </Button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="max-w-[350px] sm:max-w-[350px]">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle className="text-lg font-medium max-w-[26ch]">
              Are you sure you wish to delete this task?
            </Dialog.DialogTitle>
          </Dialog.DialogHeader>
          <Dialog.DialogFooter>
            <CancelFormDialog />

            <Button
              onClick={handleDelete}
              className="rounded font-medium bg-[var(--color-prime)] hover:bg-[var(--color-hover-prime)]"
              type="submit"
            >
              Delete
            </Button>
          </Dialog.DialogFooter>
        </Dialog.DialogContent>
      </Dialog.Dialog>
    </Table.TableCell>
  );
};
