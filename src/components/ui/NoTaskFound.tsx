import * as Table from './table';

export const NoTaskFound = () => {
  return (
    <Table.TableRow>
      <Table.TableCell colSpan={8} className="text-center font-medium py-4">
        No task found
      </Table.TableCell>
    </Table.TableRow>
  );
};
