import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import PrivateRoute from "../Components/Frontend/PrivateRoute";
import { useAuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
const Index = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <Routes>
      <Route>
        <Route path="/*" element={<Frontend />} />
        <Route
          path="/auth/*"
          element={!isAuthenticated ? <Auth /> : <Navigate to={"/dashboard"} />}
        />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute Component={Dashboard} />}
        />
      </Route>
    </Routes>
  );
};

export default Index;
