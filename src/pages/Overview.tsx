import { MetricCard } from '../components/MetricCard';
import { users } from '../data/users';
import { Users, LineChart, DollarSign } from 'lucide-react';
import type { User } from '../types/User';

export const Overview = () => {
  const totalUsers = users.length;
  const admins = users.filter((u: User) => u.role === 'Admin').length;
  const revenue = 12950;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📊 Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MetricCard title="Total Users" value={totalUsers} icon={<Users />} />
        <MetricCard title="Admins" value={admins} icon={<LineChart />} />
        <MetricCard title="Monthly Revenue" value={`$${revenue}`} icon={<DollarSign />} />
      </div>
    </div>
  );
}
