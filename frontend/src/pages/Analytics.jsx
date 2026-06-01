import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import API from "../api/axios";

const Analytics = () => {
  /*
    State
  */

  const [files, setFiles] =
    useState([]);

  /*
    Fetch Files
  */

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res =
          await API.get("/files");

        setFiles(res.data.files);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFiles();
  }, []);

  /*
    Analytics Calculations
  */

  const totalFiles =
    files.length;

  const approvedFiles =
    files.filter(
      (file) =>
        file.status === "Approved"
    ).length;

  const pendingFiles =
    files.filter(
      (file) =>
        file.status ===
        "Under Review"
    ).length;

  const rejectedFiles =
    files.filter(
      (file) =>
        file.status === "Rejected"
    ).length;

  return (
    <DashboardLayout>
      {/* Header */}

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Analytics Dashboard
        </h1>

        <p className="text-slate-600 dark:text-slate-300 mt-1">
          Government workflow analytics
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow border border-slate-200 dark:border-slate-700">
          <h2 className="text-slate-600 dark:text-slate-300 text-sm">
            Total Files
          </h2>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            {totalFiles}
          </h1>
        </div>

        {/* Approved */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow border border-slate-200 dark:border-slate-700">
          <h2 className="text-slate-600 dark:text-slate-300 text-sm">
            Approved
          </h2>

          <h1 className="text-3xl font-bold text-green-600 mt-2">
            {approvedFiles}
          </h1>
        </div>

        {/* Pending */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow border border-slate-200 dark:border-slate-700">
          <h2 className="text-slate-600 dark:text-slate-300 text-sm">
            Pending
          </h2>

          <h1 className="text-3xl font-bold text-yellow-500 mt-2">
            {pendingFiles}
          </h1>
        </div>

        {/* Rejected */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow border border-slate-200 dark:border-slate-700">
          <h2 className="text-slate-600 dark:text-slate-300 text-sm">
            Rejected
          </h2>

          <h1 className="text-3xl font-bold text-red-500 mt-2">
            {rejectedFiles}
          </h1>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;