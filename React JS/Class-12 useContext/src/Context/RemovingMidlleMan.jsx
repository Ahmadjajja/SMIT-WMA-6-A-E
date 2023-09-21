import React, { createContext, useState } from "react";

export const RemovingMiddleManContext = createContext();


const initialState = {
  color: "",
  backgroundColor: "",
};
const RemovingMidlleManProvider = (props) => {
  const [styling, setStyling] = useState(initialState);

  return (
    <RemovingMiddleManContext.Provider value={{styling, setStyling}}>
        {props.children}
    </RemovingMiddleManContext.Provider>
  );
};

export default RemovingMidlleManProvider;
