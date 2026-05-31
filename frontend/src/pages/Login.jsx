import { useContext, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

import AuthContext from "../context/AuthContext";

import AuthLayout from "../layouts/AuthLayout";

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
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Login to continue">
      <form onSubmit={handleSubmit}>
        {/* Email */}

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {/* Password */}

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {/* Login Button */}

        <button
          type="submit"
          className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-xl
          font-semibold
          transition-all
          cursor-pointer
          shadow-lg
          mt-2
        "
        >
          Login
        </button>

        {/* Register Link */}

        <p className="text-center text-slate-300 mt-6">
          Don't have an account?
          <Link
            to="/register"
            className="
            text-blue-300
            hover:text-blue-400
            ml-2
            font-medium
          "
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
