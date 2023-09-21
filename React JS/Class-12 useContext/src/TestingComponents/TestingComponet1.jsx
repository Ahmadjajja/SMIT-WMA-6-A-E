import React, {useContext} from "react";
import TestingComponent2 from "./TestingComponent2";
import { RemovingMiddleManContext } from "../Context/RemovingMidlleMan";
const TestingComponet1 = () => {
  const stylingContext = useContext(RemovingMiddleManContext);
  return (
    <div >
      <div style={{color: stylingContext.styling.color, backgroundColor: stylingContext.styling.backgroundColor}}>TestingComponet1</div>
      <hr />
      <TestingComponent2 />
    </ div>
  );
};

export default TestingComponet1;
