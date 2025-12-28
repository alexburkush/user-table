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
    <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 pb-4">
      <Input
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full sm:max-w-sm"
      />
      <div className="flex w-full sm:w-auto items-center gap-x-4 gap-y-2 flex-wrap sm:flex-nowrap">
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Select value={roleFilter} onValueChange={onRoleChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All roles</SelectItem>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
