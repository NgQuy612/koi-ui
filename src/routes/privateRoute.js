import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {
  const isAuthenticated = !!localStorage.getItem("authToken");
  const userRole = localStorage.getItem("role"); 

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    return <Navigate to={userRole === "ROLE_ADMIN" ? "/admin" : userRole === "ROLE_DELIVER" ? "/deliver" : "/customer"} />;
  }

  return children;
}

export default PrivateRoute;
