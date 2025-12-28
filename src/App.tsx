import { DataTable } from '@/components/DataTable/DataTable';
import usersData from '@/data/users.json';
import type { User } from '@/types/user';
import { Users as UsersIcon } from 'lucide-react';

const App = () => {
  const users = usersData as User[];

  return (
    <div className="max-w-[1400px] mx-auto min-h-screen px-4 py-8 flex flex-col">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-5 w-5" />
          <h1 className="text-2xl font-medium">User Table</h1>
        </div>
      </header>
      <DataTable data={users} />
      <footer className="mt-auto pt-8 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()}. Alexander Burkush. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
