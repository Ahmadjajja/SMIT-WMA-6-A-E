import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ Component }) => {
  const { isAuthenticated } = useAuthContext();
  console.log("isAuthenticated : ", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/auth/login"} />;
  }

  return <Component />;
};

export default PrivateRoute;
