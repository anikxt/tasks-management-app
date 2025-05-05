import { TableDataContext } from '@/context/TableDataContext';
import { Task } from '@/data/tasks';
import { Plus } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { CancelFormDialog } from './CancelFormDialog';
import { Description } from './Description';
import * as Dialog from './dialog';
import { DueDate } from './DueDate';
import { FormFillAlert } from './FormFillAlert';
import { Button } from './index';
import { Title } from './Title';

export const AddTask = () => {
  // context
  const ctx = useContext(TableDataContext);
  if (!ctx) {
    throw new Error('AddTask must be rendered inside a TableDataProvider');
  }
  const { setTasks } = ctx;

  // state
  // control Add Task dialog open state
  const [open, setOpen] = useState(false);
  // control validation alert
  const [showAlert, setShowAlert] = useState(false);

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

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status: 'In Progress',
      priority: 'Low',
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    form.reset();
    setOpen(false);
  };

  return (
    <>
      <Dialog.Dialog open={open} onOpenChange={setOpen}>
        <Dialog.DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="rounded font-semibold bg-[var(--color-prime)] hover:bg-[var(--color-hover-prime)]"
          >
            <Plus className="size-5" />
            <span className="pt-[1px] pr-1">Add Task</span>
          </Button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="sm:max-w-[425px]">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle>Add Task</Dialog.DialogTitle>
            <Dialog.DialogDescription>
              Fill out below to create a new task.
            </Dialog.DialogDescription>
          </Dialog.DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <Title />
              <Description />
              <DueDate />
            </div>
            <Dialog.DialogFooter>
              <CancelFormDialog />

              <Button
                className="rounded font-medium bg-[var(--color-prime)] hover:bg-[var(--color-hover-prime)]"
                type="submit"
              >
                Add Task
              </Button>
            </Dialog.DialogFooter>
          </form>
        </Dialog.DialogContent>
      </Dialog.Dialog>

      <FormFillAlert showAlert={showAlert} setShowAlert={setShowAlert} />
    </>
  );
};
