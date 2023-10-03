import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

// Components
import Header from "../../Components/Frontend/Header/Header";
import Footer from "../../Components/Frontend/Footer/Footer";
const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<>No Page Found</>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Index;
