import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from "react";

let nameVar = "Ahmad through regular variable";

const UseState = () => {
  const [name, setName] = useState("Ahmad through use state hook");
  const changeHandler = (event) => setName(event.target.value);
  const changeHandlerVar = (event) => (nameVar = event.target.value);
  return (
    <div>
      <h1>Through use state</h1>
      <h2 style={{ textAlign: "center" }}>User Name : {name}</h2>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          style={{ marginRight: "5px" }}
          onChange={(event) => changeHandler(event)}
        />
        <button>display user name </button>
      </div>
      <h1>Through regular variable</h1>
      <h2 style={{ textAlign: "center" }}>User Name : {nameVar}</h2>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          style={{ marginRight: "5px" }}
          onChange={(e) => changeHandlerVar(e)}
        />
        <button>display user name </button>
      </div>
    </div>
  );
};

export default UseState;
