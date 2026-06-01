import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import DashboardCards from "../components/dashboard/DashboardCards";

import DashboardCharts from "../components/dashboard/DashboardCharts";

// import SearchBar from "../components/dashboard/SearchBar";

// import FilterDropdown from "../components/dashboard/FilterDropdown";

import Pagination from "../components/dashboard/Pagination";

import FileTable from "../components/dashboard/FileTable";

import FilterBar from "../components/dashboard/FilterBar";

import API from "../api/axios";

const Dashboard = () => {
  /*
    States
  */

  const [status, setStatus] = useState("");

  const [department, setDepartment] = useState("");

  const [priority, setPriority] = useState("");

  const [files, setFiles] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const filesPerPage = 5;

  /*
    Fetch Files
  */

  const fetchFiles = async () => {
    try {
      const res = await API.get("/files");

      setFiles(res.data.files);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  /*
    Search + Filter Logic
  */

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "" ? true : file.status === status;

    const matchesDepartment =
      department === "" ? true : file.department === department;

    const matchesPriority = priority === "" ? true : file.priority === priority;

    return (
      matchesSearch && matchesStatus && matchesDepartment && matchesPriority
    );
  });

  /*
    Statistics
  */

  const stats = {
    totalFiles: files.length,

    lowPriority: files.filter((f) => f.priority === "Low").length,

    mediumPriority: files.filter((f) => f.priority === "Medium").length,

    highPriority: files.filter((f) => f.priority === "High").length,

    approved: files.filter((f) => f.status === "Approved").length,

    pending: files.filter(
      (f) => f.status === "Submitted" || f.status === "Under Review",
    ).length,

    rejected: files.filter((f) => f.status === "Rejected").length,
  };

  /*
    Pagination
  */

  const indexOfLastFile = currentPage * filesPerPage;

  const indexOfFirstFile = indexOfLastFile - filesPerPage;

  const currentFiles = filteredFiles.slice(indexOfFirstFile, indexOfLastFile);

  const totalPages = Math.ceil(filteredFiles.length / filesPerPage);

  return (
    <DashboardLayout
      className="
      min-h-screen
      bg-slate-100
      dark:bg-slate-900
      text-slate-900
      dark:text-white
      p-5
    "
    >
      {/* Dashboard Heading */}

      <div className="mb-5">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>

        <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">
          Government File Movement & Approval System
        </p>
      </div>

      {/* Statistics */}

      <DashboardCards stats={stats} />

      {/* Charts */}

      <DashboardCharts stats={stats} />

      {/* Enterprise Filter Bar */}

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        department={department}
        setDepartment={setDepartment}
        priority={priority}
        setPriority={setPriority}
      />

      {/* Table */}

      <FileTable files={currentFiles} />

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
