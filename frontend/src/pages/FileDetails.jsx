import { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";

import API from "../api/axios";

import AuthContext from "../context/AuthContext";

import ApprovalTimeline from "../components/ApprovalTimeline";

import ApprovalControls from "../components/ApprovalControls";

const FileDetails = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const [file, setFile] = useState(null);

  /*
    Fetch File Details
  */

  const fetchFile = async () => {
    try {
      const res = await API.get(`/files/${id}`);

      setFile(res.data.file);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFile();
  }, []);

  if (!file) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{file.title}</h1>

      <p className="mt-4">{file.description}</p>

      <div className="mt-4 flex gap-3">
        <span className="bg-blue-100 px-3 py-1 rounded">{file.department}</span>

        <span className="bg-green-100 px-3 py-1 rounded">{file.status}</span>
      </div>

      {/* Approval Controls */}

      {(user?.role === "admin" || user?.role === "officer") && (
        <ApprovalControls fileId={file._id} refresh={fetchFile} />
      )}

      {/* Timeline */}

      <ApprovalTimeline history={file.approvalHistory} />
    </div>
  );
};

export default FileDetails;
