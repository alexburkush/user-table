import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

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
      <div className="relative flex-1 w-full sm:max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
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
