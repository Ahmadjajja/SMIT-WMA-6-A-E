import "./App.css";
import React from "react";
import LandingPage from "./pages/LadingPage";
import styles from "../src/App.module.css";
function App() {
  // internal css
  const headingStyle = {
    backgroundColor: "green",
    border: "2px red solid",
    textAlign: "center",
  };
  const heading = styles.headingStyle;

  return (
    <div>
      <h1 className={heading}>Hello</h1>
      <LandingPage />
      <p style={headingStyle}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default App;

// Two concept to understand in React
// 1- Babel
//        Convert javascript code version from new to old (Version that can be understandable by the browser)
// 2- Webpack
//        webpack bundles all javascript code into a bundled file. Browser just understand that file
