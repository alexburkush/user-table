import { TableCell, TableRow } from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import type { User } from '@/types/user';

interface DataTableRowProps {
  user: User;
}

export const DataTableRow = ({ user }: DataTableRowProps) => {
  const handleView = () => {
    console.log('View user:', user);
  };

  const handleEdit = () => {
    console.log('Edit user:', user);
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            user.status === 'active'
              ? 'bg-green-50 text-green-700'
              : 'bg-gray-50 text-gray-700'
          }`}
        >
          {user.status}
        </span>
      </TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>{user.createdAt}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleView}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
