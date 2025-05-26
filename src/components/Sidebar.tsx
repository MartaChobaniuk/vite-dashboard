import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Sidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn('block px-4 py-2 rounded hover:bg-gray-100', {
      'bg-gray-200 font-semibold': isActive,
    });

  return (
    <aside className="w-48 h-screen border-r p-4">
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
