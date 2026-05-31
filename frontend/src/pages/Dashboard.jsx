import Navbar from "../components/Navbar";

import CreateFile from "./CreateFile";

import FileList from "./FileList";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6">
        <CreateFile />

        <FileList />
      </div>
    </div>
  );
};

export default Dashboard;