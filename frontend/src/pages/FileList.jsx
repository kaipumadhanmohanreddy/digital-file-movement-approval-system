import { useEffect, useState } from "react";

import API from "../api/axios";

import toast from "react-hot-toast";

import { Link } from "react-router-dom";

const FileList = () => {
  const [files, setFiles] = useState([]);

  /*
      Fetch Files
    */

  const fetchFiles = async () => {
    try {
      const res = await API.get("/files");

      setFiles(res.data.files);
    } catch (error) {
      toast.error("Failed to fetch files");
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">File Requests</h1>

      <div className="grid gap-4">
        {files.map((file) => (
          <Link to={`/files/${file._id}`} key={file._id}>
            <h2 className="text-xl font-bold">{file.title}</h2>

            <p>{file.description}</p>

            <div className="mt-3 flex gap-3">
              <span className="bg-blue-100 px-3 py-1 rounded">
                {file.department}
              </span>

              <span className="bg-yellow-100 px-3 py-1 rounded">
                {file.priority}
              </span>

              <span className="bg-green-100 px-3 py-1 rounded">
                {file.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FileList;
