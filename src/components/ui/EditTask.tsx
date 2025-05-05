import { TableDataContext } from '@/context/TableDataContext';
import { Task } from '@/data/tasks';
import { SquarePen } from 'lucide-react';
import { useContext, useState } from 'react';
import { Button } from './button';
import { CancelFormDialog } from './CancelFormDialog';
import { Description } from './Description';
import * as Dialog from './dialog';
import { DueDate } from './DueDate';
import { FormFillAlert } from './FormFillAlert';
import { Status } from './Status';
import * as Table from './table';
import { Title } from './Title';

interface EditTaskProps {
  task: Task;
}

export const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const ctx = useContext(TableDataContext);
  if (!ctx) {
    throw new Error('EditTask must be rendered inside a TableDataProvider');
  }
  const { setTasks } = ctx;

  // control Add Task dialog open state
  const [open, setOpen] = useState(false);
  // control validation alert
  const [showAlert, setShowAlert] = useState(false);

  const [status, setStatus] = useState<Task['status']>(task.status);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = (formData.get('title') as string).trim();
    const description = (formData.get('description') as string).trim();
    const dueDate = (formData.get('dueDate') as string).trim();

    if (!title.trim() || !description.trim() || !dueDate.trim()) {
      setShowAlert(true);
      return;
    }

    const updatedTask: Task = {
      ...task,
      title,
      description,
      dueDate,
      status,
    };

    setTasks((prev) => prev.map((t) => (t.id === task.id ? updatedTask : t)));

    form.reset();
    setOpen(false);
  };

  return (
    <Table.TableCell className="">
      <Dialog.Dialog open={open} onOpenChange={setOpen}>
        <Dialog.DialogTrigger asChild>
          <Button onClick={() => setOpen(true)} variant={'ghost'}>
            <SquarePen className="size-5" />
          </Button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="sm:max-w-[425px]">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle>Edit Task</Dialog.DialogTitle>
            <Dialog.DialogDescription></Dialog.DialogDescription>
          </Dialog.DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <Title value={task.title} />
              <Description value={task.description} />
              <DueDate value={task.dueDate} />
              <Status status={status} setStatus={setStatus} />
            </div>
            <Dialog.DialogFooter>
              <CancelFormDialog />

              <Button
                className="rounded font-medium bg-[var(--color-prime)] hover:bg-[var(--color-hover-prime)]"
                type="submit"
              >
                Edit Task
              </Button>
            </Dialog.DialogFooter>
          </form>
        </Dialog.DialogContent>
      </Dialog.Dialog>

      <FormFillAlert showAlert={showAlert} setShowAlert={setShowAlert} />
    </Table.TableCell>
  );
};
