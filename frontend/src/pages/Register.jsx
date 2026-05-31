import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

import InputField from "../components/InputField";

import AuthLayout from "../layouts/AuthLayout";

const Register = () => {
  /*
    Form State
  */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  /*
    Handle Input Changes
  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
    Form Submission
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      return toast.error(
        "Password must contain uppercase, lowercase, number and special character",
      );
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("All fields are required");
    }

    /*
      Password Match Validation
    */

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      await API.post("/auth/register", formData);

      toast.success("Registration Successful");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Register for government portal"
    >
      <form onSubmit={handleSubmit}>
        {/* Name */}

        <InputField
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter full name"
        />

        {/* Email */}

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        {/* Password */}

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create password"
        />

        {/* Confirm Password */}

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
        />

        {/* Register Button */}

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
          Create Account
        </button>

        {/* Login Link */}

        <p className="text-center text-slate-300 mt-6">
          Already have an account?
          <Link
            to="/"
            className="
            text-blue-300
            hover:text-blue-400
            ml-2
            font-medium
          "
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
