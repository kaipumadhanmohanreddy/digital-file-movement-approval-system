import DashboardLayout from "../layouts/DashboardLayout";

import FileList from "./FileList";

const PendingFiles = () => {
  return (
    <DashboardLayout>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Pending Files
        </h1>

        <p className="text-slate-600 dark:text-slate-300 mt-1">
          Files waiting for approval
        </p>
      </div>

      <FileList filter="pending" />
    </DashboardLayout>
  );
};

export default PendingFiles;