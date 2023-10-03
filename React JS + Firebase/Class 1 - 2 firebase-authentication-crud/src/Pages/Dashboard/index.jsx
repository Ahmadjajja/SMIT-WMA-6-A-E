import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>Page Not page</>} />
      </Routes>
    </>
  );
};

export default index;
