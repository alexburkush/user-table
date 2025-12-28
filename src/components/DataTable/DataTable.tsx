import { useState, useMemo } from 'react';
import { Table, TableBody } from '@/components/ui/table';
import type { User } from '@/types/user';
import { DataTableFilters } from './DataTableFilters';
import { DataTableHead } from './DataTableHeader';
import { DataTableRow } from './DataTableRow';
import { DataTablePagination } from './DataTablePagination';
import { EmptyState } from './EmptyState';

interface DataTableProps {
  data: User[];
}

const PAGE_SIZE = 10;

export const DataTable = ({ data }: DataTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'active' | 'inactive'
  >('all');
  const [roleFilter, setRoleFilter] = useState<'all' | 'user' | 'admin'>('all');
  const [sortColumn, setSortColumn] = useState<'name' | 'createdAt' | null>(
    null
  );
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || user.status === statusFilter;

      const matchesRole = roleFilter === 'all' || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [data, searchQuery, statusFilter, roleFilter]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a, b) => {
      let aValue: string | number = a[sortColumn];
      let bValue: string | number = b[sortColumn];

      if (sortColumn === 'createdAt') {
        aValue = new Date(a.createdAt).getTime();
        bValue = new Date(b.createdAt).getTime();
      } else {
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return sortedData.slice(startIndex, startIndex + PAGE_SIZE);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / PAGE_SIZE);

  const handleSort = (column: 'name' | 'createdAt') => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: 'all' | 'active' | 'inactive') => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleRoleChange = (value: 'all' | 'user' | 'admin') => {
    setRoleFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      <DataTableFilters
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        roleFilter={roleFilter}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
        onRoleChange={handleRoleChange}
      />

      <div className="rounded-md border">
        <Table>
          <DataTableHead
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <TableBody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <EmptyState />
                </td>
              </tr>
            ) : (
              paginatedData.map((user) => (
                <DataTableRow key={user.id} user={user} />
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {sortedData.length > 0 && (
        <DataTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};
