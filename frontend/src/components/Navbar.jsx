import { Menu, Moon, Sun } from "lucide-react";

import { useContext } from "react";

import AuthContext from "../context/AuthContext";

import ThemeContext from "../context/ThemeContext";

import NotificationBell from "./NotificationBell";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className="
      h-16
      bg-white
      dark:bg-slate-800
      border-b
      border-slate-200
      dark:border-slate-700
      shadow-sm
      px-5
      flex
      items-center
      justify-between
      sticky
      top-0
      z-50
    "
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        {/* Toggle */}

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="
            p-2
            rounded-lg
            hover:bg-slate-100
            transition-all
          "
        >
          <Menu size={22} />
        </button>

        {/* Logo */}

        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="logo"
            className="w-8 h-8"
          />

          <div>
            <h1 className="text-sm font-bold text-slate-800 dark:text-white">
              Digital File Movement
            </h1>

            <p className="text-xs text-slate-500">Government Portal</p>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <NotificationBell />

        {/* User */}

        <div className="text-right hidden sm:block">
          <h2 className="text-sm font-semibold text-slate-800 dark:text-white">
            {user?.name}
          </h2>

          <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
        </div>

        {/* Avatar */}

        <div
          className="
            w-9 h-9
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-sm
          "
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <button
          onClick={toggleTheme}
          className="
            p-2
            rounded-lg
            hover:bg-slate-100
            dark:hover:bg-slate-700
            transition-all
            cursor-pointer
          "
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Logout */}

        <button
          onClick={logout}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4 py-2
            rounded-lg
            text-sm
            transition-all
            cursor-pointer
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
