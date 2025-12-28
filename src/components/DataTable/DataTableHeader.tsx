import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DataTableHeaderProps {
  sortColumn: 'name' | 'createdAt' | null;
  sortDirection: 'asc' | 'desc';
  onSort: (column: 'name' | 'createdAt') => void;
}

export const DataTableHead = ({
  sortColumn,
  sortDirection,
  onSort,
}: DataTableHeaderProps) => {
  const renderSortIcon = (column: 'name' | 'createdAt') => {
    if (sortColumn !== column) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="ml-2 h-4 w-4" />
    ) : (
      <ArrowDown className="ml-2 h-4 w-4" />
    );
  };

  return (
    <TableHeader className="bg-gray-100">
      <TableRow className="hover:bg-gray-100">
        <TableHead>
          <Button
            variant="ghost"
            onClick={() => onSort('name')}
            className="h-auto p-0 hover:bg-transparent font-semibold"
          >
            Name
            {renderSortIcon('name')}
          </Button>
        </TableHead>
        <TableHead className="font-semibold">Email</TableHead>
        <TableHead className="font-semibold">Status</TableHead>
        <TableHead className="font-semibold">Role</TableHead>
        <TableHead>
          <Button
            variant="ghost"
            onClick={() => onSort('createdAt')}
            className="h-auto p-0 hover:bg-transparent font-semibold"
          >
            Created Date
            {renderSortIcon('createdAt')}
          </Button>
        </TableHead>
        <TableHead className="font-semibold">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};
