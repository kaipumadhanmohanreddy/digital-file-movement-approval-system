import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import API from "../api/axios";

import toast from "react-hot-toast";

const AdminPanel = () => {
  /*
    States
  */

  const [users, setUsers] =
    useState([]);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "officer",
    });

  /*
    Fetch Users
  */

  const fetchUsers = async () => {
    try {
      const res =
        await API.get("/users");

      setUsers(res.data.users);
    } catch (error) {
      toast.error(
        "Failed to fetch users"
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /*
    Handle Change
  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /*
    Create Officer
  */

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await API.post(
        "/users/create-officer",
        formData
      );

      toast.success(
        "Officer created successfully"
      );

      fetchUsers();

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "officer",
      });
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Creation failed"
      );
    }
  };

  return (
    <DashboardLayout>
      {/* Heading */}

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Admin Panel
        </h1>

        <p className="text-slate-600 mt-1">
          Manage officers and users
        </p>
      </div>

      {/* Create Officer Form */}

      <div className="bg-white p-5 rounded-2xl shadow border border-slate-200 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Create Officer
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={handleChange}
            className="border rounded-lg px-4 py-3"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3"
          >
            <option value="officer">
              Officer
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          <button
            type="submit"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-lg
              transition-all
              cursor-pointer
            "
          >
            Create User
          </button>
        </form>
      </div>

      {/* Users Table */}

      <div className="bg-white rounded-2xl shadow border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b"
              >
                <td className="p-3">
                  {user.name}
                </td>

                <td className="p-3">
                  {user.email}
                </td>

                <td className="p-3 capitalize">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AdminPanel;