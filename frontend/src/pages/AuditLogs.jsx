import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import API from "../api/axios";

const AuditLogs = () => {
  const [logs, setLogs] =
    useState([]);

  useEffect(() => {
    const fetchLogs =
      async () => {
        try {
          const res =
            await API.get(
              "/logs"
            );

          setLogs(
            res.data.logs
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchLogs();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-white">
          Audit Logs
        </h1>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow">
        <table className="w-full">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-3 text-left">
                Action
              </th>

              <th className="p-3 text-left">
                Department
              </th>

              <th className="p-3 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log._id}
                className="border-b dark:border-slate-700"
              >
                <td className="p-3 dark:text-white">
                  {log.action}
                </td>

                <td className="p-3 dark:text-white">
                  {log.department}
                </td>

                <td className="p-3 dark:text-white">
                  {new Date(
                    log.createdAt
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AuditLogs;