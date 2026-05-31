import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";

import Navbar from "../components/Navbar";

const DashboardLayout = ({
  children,
}) => {
  /*
    Sidebar State
  */

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}

      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Layout */}

      <div className="flex">
        {/* Sidebar */}

        <Sidebar
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content */}

        <main
          className={`
            flex-1
            transition-all
            duration-300
            p-4 md:p-5
            ${
              sidebarOpen
                ? "ml-52"
                : "ml-20"
            }
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;