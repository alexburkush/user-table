import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DataTableFiltersProps {
  searchQuery: string;
  statusFilter: 'all' | 'active' | 'inactive';
  roleFilter: 'all' | 'user' | 'admin';
  onSearchChange: (value: string) => void;
  onStatusChange: (value: 'all' | 'active' | 'inactive') => void;
  onRoleChange: (value: 'all' | 'user' | 'admin') => void;
}

export const DataTableFilters = ({
  searchQuery,
  statusFilter,
  roleFilter,
  onSearchChange,
  onStatusChange,
  onRoleChange,
}: DataTableFiltersProps) => {
  return (
    <div className="flex items-center gap-4 pb-4">
      <Input
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-sm"
      />
      <Select value={statusFilter} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <Select value={roleFilter} onValueChange={onRoleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All roles</SelectItem>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
