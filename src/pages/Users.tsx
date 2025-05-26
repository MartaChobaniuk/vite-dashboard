import { useState } from 'react';
import { users as mockUsers } from '../data/users';
import { ArrowUpDown } from 'lucide-react';
import type { User } from '../types/User';

export const Users = () => {
  const [sortedUsers, setSortedUsers] = useState<User[]>(mockUsers);
  const [ascending, setAscending] = useState(true);

  const sortByName = () => {
    const sorted = [...sortedUsers].sort((a, b) =>
      ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortedUsers(sorted);
    setAscending(!ascending);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">👥 Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b text-left cursor-pointer" onClick={sortByName}>
                Name <ArrowUpDown className="inline-block w-4 h-4 ml-1" />
              </th>
              <th className="p-2 border-b text-left">Email</th>
              <th className="p-2 border-b text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-2 border-b">{user.name}</td>
                <td className="p-2 border-b">{user.email}</td>
                <td className="p-2 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
