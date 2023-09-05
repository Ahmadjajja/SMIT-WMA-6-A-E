import React, { useState } from "react";

const ControlledComponents = () => {
  const [name, setName] = useState("Ahmad");
  const changeHanlder = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => changeHanlder(e)}
      />
      <button>Display Value</button>
      <h1>{name}</h1>
    </div>
  );
};

export default ControlledComponents;
