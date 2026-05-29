import { useContext } from "react";

import { Navigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";

/*
  Protected Route

  Handles:
  - Authentication
  - Role Authorization
*/

const ProtectedRoute = ({
  children,
  allowedRoles,
}) => {
  const { user, loading } = useContext(AuthContext);

  /*
    Prevent Early Redirect
  */

  if (loading) {
    return <h1>Loading...</h1>;
  }

  /*
    Check Authentication
  */

  if (!user) {
    return <Navigate to="/" />;
  }

  /*
    Role Authorization Check
  */

  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;