import { useContext, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

import AuthContext from "../context/AuthContext";

import InputField from "../components/InputField";

const Login = () => {
  /*
    Form State
  */

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  /*
    Handle Input Change
  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
    Submit Login Form
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
    return toast.error("All fields are required");
  }

    try {
      const res = await API.post("/auth/login", formData);

      /*
        Save User & Token
      */

      login(res.data.user, res.data.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-1"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;