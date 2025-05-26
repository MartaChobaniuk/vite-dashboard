import type React from 'react';

interface Props {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
};

export const MetricCard: React.FC<Props> = ({ title, value, icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow flex items-center gap-4">
      {icon && <div className="text-3xl text-blue-500">{icon}</div>}
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};
