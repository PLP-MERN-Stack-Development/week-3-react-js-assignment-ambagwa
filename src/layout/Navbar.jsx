import { Link } from "react-router-dom";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
          Pro-Hub
        </span>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About
          </Link>
          <button
            onClick={onToggleTheme}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-medium"
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
