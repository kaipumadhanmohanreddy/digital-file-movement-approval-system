import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  /*
    Logout Handler
  */

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg px-8 py-4 flex justify-between items-center">
      {/* Logo */}

      <div>
        <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
          Digital File System
        </h1>
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-5">
        {/* Profile */}

        <div className="text-white text-right">
          <h2 className="font-semibold text-lg">
            {user?.name}
          </h2>

          <p className="text-sm text-gray-200 capitalize">
            {user?.role}
          </p>
        </div>

        {/* Avatar */}

        <div className="w-12 h-12 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-xl shadow-md cursor-pointer">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        {/* Logout Button */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-5 py-2 rounded-lg shadow cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;