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
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">
        Digital File System
      </h1>

      <div className="flex items-center gap-4">
        <span>{user?.name}</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;