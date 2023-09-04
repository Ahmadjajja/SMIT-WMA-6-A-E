import React, { useRef } from "react";

const UnControlledComponent = () => {
  const myRef = useRef(null);
  const displayValue = () => {
    console.log(myRef.current);
  };
  return (
    <div>
      <input type="text" name="name" ref={myRef} />
      <button onClick={displayValue}>Display Value</button>
    </div>
  );
};

export default UnControlledComponent;
