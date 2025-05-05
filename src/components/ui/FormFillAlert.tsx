import * as AlertDialog from './alert-dialog';

interface FormFillAlertProps {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormFillAlert: React.FC<FormFillAlertProps> = ({
  showAlert,
  setShowAlert,
}) => {
  return (
    <AlertDialog.AlertDialog open={showAlert} onOpenChange={setShowAlert}>
      <AlertDialog.AlertDialogContent>
        <AlertDialog.AlertDialogHeader>
          <AlertDialog.AlertDialogTitle>
            Missing Fields
          </AlertDialog.AlertDialogTitle>
          <AlertDialog.AlertDialogDescription>
            Please fill out all fields before submitting the task.
          </AlertDialog.AlertDialogDescription>
        </AlertDialog.AlertDialogHeader>
        <AlertDialog.AlertDialogFooter>
          <AlertDialog.AlertDialogCancel>OK</AlertDialog.AlertDialogCancel>
        </AlertDialog.AlertDialogFooter>
      </AlertDialog.AlertDialogContent>
    </AlertDialog.AlertDialog>
  );
};
