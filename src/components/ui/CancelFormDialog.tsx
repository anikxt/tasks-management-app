import * as Dialog from './dialog';
import { Button } from './index';

export const CancelFormDialog = () => {
  return (
    <Dialog.DialogClose asChild>
      <Button
        type="button"
        className="rounded font-medium border-[var(--color-prime)] text-[var(--color-prime)] hover:border-[var(--color-hover-prime)] hover:text-[var(--color-hover-prime)]"
        variant="outline"
      >
        Cancel
      </Button>
    </Dialog.DialogClose>
  );
};
