import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import Header from "./Components/Header/Header";
import HeroSection from "./Pages/Landing-page/HeroSection";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;

// Two concept to understand in React
// 1- Babel
//        Convert javascript code version from new to old (Version that can be understandable by the browser)
// 2- Webpack
//        webpack bundles all javascript code into a bundled file. Browser just understand that file
