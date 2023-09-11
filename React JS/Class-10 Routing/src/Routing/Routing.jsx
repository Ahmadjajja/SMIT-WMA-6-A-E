import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Error from "../Components/Error";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
