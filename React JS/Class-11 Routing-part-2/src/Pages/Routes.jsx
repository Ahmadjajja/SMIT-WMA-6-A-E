import React from "react";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";
import LandingPage from "./Landing-page/Index";
import { Routes, Route } from "react-router-dom";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
