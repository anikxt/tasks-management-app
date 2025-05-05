import { Trash2 } from 'lucide-react';
import { Button } from './button';
import * as Dialog from './dialog';
import * as Table from './table';

export const DeleteTask = () => {
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
            <Dialog.DialogClose asChild>
              <Button
                type="button"
                className="rounded font-medium border-[var(--color-prime)] text-[var(--color-prime)] hover:border-[var(--color-hover-prime)] hover:text-[var(--color-hover-prime)]"
                variant="outline"
              >
                Cancel
              </Button>
            </Dialog.DialogClose>

            <Button
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
