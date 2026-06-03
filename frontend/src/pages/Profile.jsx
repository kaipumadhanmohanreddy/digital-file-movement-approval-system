import {
  useContext,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import AuthContext from "../context/AuthContext";

const Profile = () => {
  const { user } =
    useContext(AuthContext);

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow border border-slate-200 dark:border-slate-700 p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          Profile
        </h1>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-slate-500">
              Full Name
            </label>

            <h2 className="text-lg font-semibold dark:text-white">
              {user?.name}
            </h2>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Email
            </label>

            <h2 className="text-lg font-semibold dark:text-white">
              {user?.email}
            </h2>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Role
            </label>

            <h2 className="text-lg font-semibold capitalize dark:text-white">
              {user?.role}
            </h2>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;