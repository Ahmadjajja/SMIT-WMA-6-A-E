import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, {useContext} from "react";
import TestingComponent1 from "../src/TestingComponents/TestingComponet1";

import { RemovingMiddleManContext } from "./Context/RemovingMidlleMan";

let backgroundColor = "#ccc";
let color = "green";
function App() {
  let {setStyling} = useContext(RemovingMiddleManContext)

  const addStyingHandler  = () => {
    setStyling({color: color,backgroundColor: backgroundColor});
  }
  const removeStyingHandler  = () => {
    setStyling({color: "",backgroundColor: ""});
  }
  return (
    <>
      <div className="text-center">
        <button className="btn btn-primary my-5 me-2" onClick={addStyingHandler}>Add Styling</button>
        <button className="btn btn-primary my-5" onClick={removeStyingHandler}>Remove Styling</button>
        <TestingComponent1 color={color} backgroundColor={backgroundColor} />
      </div>
    </>
  );
}

export default App;

// Two concept to understand in React
// 1- Babel
//        Convert javascript code version from new to old (Version that can be understandable by the browser)
// 2- Webpack
//        webpack bundles all javascript code into a bundled file. Browser just understand that file
