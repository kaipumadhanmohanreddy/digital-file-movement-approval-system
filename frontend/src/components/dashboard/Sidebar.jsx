import { Link } from "react-router-dom";

const Sidebar = ({
  sidebarOpen,
}) => {
  const menuItems = [
    "Dashboard",
    "My Files",
    "Pending",
    "Analytics",
  ];

  return (
    <aside
      className={`
        fixed
        left-0
        top-16
        h-[calc(100vh-64px)]
        bg-slate-900
        text-white
        transition-all
        duration-300
        z-40
        ${
          sidebarOpen
            ? "w-52"
            : "w-20"
        }
      `}
    >
      {/* Navigation */}

      <nav className="mt-5 px-3 flex flex-col gap-2">
        {menuItems.map(
          (item, index) => (
            <Link
              key={index}
              to="/dashboard"
              className="
                px-4 py-2
                rounded-lg
                hover:bg-slate-800
                transition-all
                text-sm
                font-medium
              "
            >
              {sidebarOpen
                ? item
                : item.charAt(0)}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;