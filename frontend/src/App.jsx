import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import FileDetails from "./pages/FileDetails";

import AdminPanel from "./pages/AdminPanel";

import FileList from "./pages/FileList";

import MyFiles from "./pages/MyFiles";

import PendingFiles from "./pages/PendingFiles";

import Analytics from "./pages/Analytics";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/files"
          element={
            <ProtectedRoute>
              <FileList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-files"
          element={
            <ProtectedRoute>
              <MyFiles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pending-files"
          element={
            <ProtectedRoute>
              <PendingFiles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/files/:id"
          element={
            <ProtectedRoute>
              <FileDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
