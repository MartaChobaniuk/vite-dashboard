import { useState } from 'react';

export const Settings = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [subscribe, setSubscribe] = useState(false);
  const [username, setUsername] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">⚙️ Settings</h2>
      <form className="space-y-4 max-w-md">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </label>
          <div
            onClick={toggleTheme}
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition
      ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform
        ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribe}
            onChange={() => setSubscribe(!subscribe)}
            className="accent-blue-500"
          />
          <label htmlFor="subscribe" className="text-sm">
            Subscribe to newsletter
          </label>
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="px-3 py-2 border rounded bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>
      </form>
    </div>
  );
}
