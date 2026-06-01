import React from "react";

import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />

      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
