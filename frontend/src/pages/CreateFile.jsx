import { useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const CreateFile = () => {
  /*
    Form State
  */

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    department: "",
    category: "",
    priority: "Medium",
  });

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
    Submit Form
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/files", formData);

      toast.success("File request created");

      /*
        Reset Form
      */

      setFormData({
        title: "",
        description: "",
        department: "",
        category: "",
        priority: "Medium",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "File creation failed"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Create File Request
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}

        <input
          type="text"
          name="title"
          placeholder="File Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        {/* Description */}

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        {/* Department */}

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="">Select Department</option>

          <option value="Finance">Finance</option>

          <option value="HR">HR</option>

          <option value="IT">IT</option>
        </select>

        {/* Category */}

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        {/* Priority */}

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="Low">Low</option>

          <option value="Medium">Medium</option>

          <option value="High">High</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Submit File
        </button>
      </form>
    </div>
  );
};

export default CreateFile;