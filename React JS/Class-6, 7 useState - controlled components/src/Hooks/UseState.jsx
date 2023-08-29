import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from "react";

const UseState = () => {
  const [name, setName] = useState("Ahmad");
  const [userName, setUserName] = useState("");
  let nameVar = "Ahmad through regular variable";
  const changeHandler = (event) => setName(event.target.value);
  const changeHandlerVar = (event) => (nameVar = event.target.value);
  const displayUserName = () => {
    setUserName(name);
  };
  return (
    <div>
      <h1>Through use state</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          style={{ marginRight: "5px" }}
          value={name}
          onChange={(event) => changeHandler(event)}
          placeholder="Enter user name"
        />
        <button onClick={displayUserName}>display user name </button>
        <h1>{userName}</h1>
      </div>

      {/* <h1>Through regular variable</h1>
      <h2 style={{ textAlign: "center" }}>User Name : {nameVar}</h2>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          style={{ marginRight: "5px" }}
          onChange={(e) => changeHandlerVar(e)}
        />
        <button>display user name </button>
      </div> */}
    </div>
  );
};

export default UseState;
