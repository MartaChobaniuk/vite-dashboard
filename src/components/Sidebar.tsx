import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Sidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'block px-4 py-2 rounded transition-colors',
      'hover:bg-gray-100 dark:hover:bg-gray-700',
      {
        'bg-gray-200 dark:bg-gray-800 font-semibold text-black dark:text-white': isActive,
        'text-gray-700 dark:text-gray-300': !isActive,
      }
    );

  return (
    <aside className="w-48 h-screen border-r border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
      <nav className="space-y-2">
        <NavLink to="/overview" className={navLinkClass}>
          Overview
        </NavLink>
        <NavLink to="/users" className={navLinkClass}>
          Users
        </NavLink>
        <NavLink to="/settings" className={navLinkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};