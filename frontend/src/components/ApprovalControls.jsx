import { useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const ApprovalControls = ({ fileId, refresh }) => {
  const [remarks, setRemarks] = useState("");

  /*
    Approve Handler
  */

  const handleApprove = async () => {
    try {
      await API.put(
        `/approval/approve/${fileId}`,
        {
          remarks,
        }
      );

      toast.success("File Approved");

      refresh();
    } catch (error) {
      toast.error("Approval Failed");
    }
  };

  /*
    Reject Handler
  */

  const handleReject = async () => {
    try {
      await API.put(
        `/approval/reject/${fileId}`,
        {
          remarks,
        }
      );

      toast.success("File Rejected");

      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="mt-6 bg-white p-5 rounded shadow">
      <textarea
        placeholder="Enter remarks"
        value={remarks}
        onChange={(e) =>
          setRemarks(e.target.value)
        }
        className="w-full border p-3 rounded mb-4"
      />

      <div className="flex gap-4">
        <button
          onClick={handleApprove}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Approve
        </button>

        <button
          onClick={handleReject}
          className="bg-red-600 text-white px-5 py-2 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApprovalControls;