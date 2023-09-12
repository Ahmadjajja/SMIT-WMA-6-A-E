import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import AllRoutes from "./Pages/Routes";
function App() {
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;

// Two concept to understand in React
// 1- Babel
//        Convert javascript code version from new to old (Version that can be understandable by the browser)
// 2- Webpack
//        webpack bundles all javascript code into a bundled file. Browser just understand that file
