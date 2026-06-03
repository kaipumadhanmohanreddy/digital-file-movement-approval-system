import {
  useContext,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ThemeContext from "../context/ThemeContext";

const Settings = () => {
  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <DashboardLayout>
      <div className="max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow border border-slate-200 dark:border-slate-700 p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          Settings
        </h1>

        {/* Theme */}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold dark:text-white">
              Dark Mode
            </h2>

            <p className="text-sm text-slate-500">
              Toggle application
              theme
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-4 py-2
              rounded-lg
            "
          >
            {darkMode
              ? "Disable"
              : "Enable"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;