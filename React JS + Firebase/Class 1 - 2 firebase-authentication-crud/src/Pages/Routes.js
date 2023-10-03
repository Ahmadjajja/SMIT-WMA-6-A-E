import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
const Index = () => {
  return (
    <Routes>
      <Route>
        <Route path="/*" element={<Frontend />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Index;
