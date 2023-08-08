import "./App.css";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("Hello");
  console.log(state);

  console.log("Hello");
  const displayGreeting = () => alert("Hello");
  return (
    <>
      <h1>Heading 1 {2 + 3}</h1>
      <h2 onClick={displayGreeting} style={{ cursor: "pointer" }}>
        Heading 2
      </h2>
    </>
  );
}

export default App;

// Two concept to understand in React
// 1- Babel
//        Convert javascript code version from new to old (Version that can be understandable by the browser)
// 2- Webpack
//        webpack bundles all javascript code into a bundled file. Browser just understand that file
