import React from "react";
import Create from "./Create";
import Read from "./Read";
import { Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Create />} />
        <Route path="/read" element={<Read />} />
      </Route>
    </Routes>
  );
};

export default Routing;
