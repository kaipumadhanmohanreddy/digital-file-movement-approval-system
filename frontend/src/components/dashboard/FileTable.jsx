import { Link } from "react-router-dom";

import StatusBadge from "../ui/StatusBadge";

import Card from "../ui/Card";

const FileTable = ({ files }) => {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="text-left p-3">
                Title
              </th>

              <th className="text-left p-3">
                Department
              </th>

              <th className="text-left p-3">
                Priority
              </th>

              <th className="text-left p-3">
                Status
              </th>

              <th className="text-left p-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {files.map((file) => (
              <tr
                key={file._id}
                className="border-b hover:bg-slate-50 transition-all"
              >
                <td className="p-3 font-medium">
                  {file.title}
                </td>

                <td className="p-3">
                  {file.department}
                </td>

                <td className="p-3">
                  {file.priority}
                </td>

                <td className="p-3">
                  <StatusBadge
                    status={file.status}
                  />
                </td>

                <td className="p-3">
                  <Link
                    to={`/files/${file._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all cursor-pointer"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default FileTable;