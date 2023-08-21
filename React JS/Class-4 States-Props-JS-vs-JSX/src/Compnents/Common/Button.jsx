import React, { useState } from "react";

const Button = (data) => {
  const [color, setColor] = useState(data.color);
  const [origionalColor, setOrigionalColor] = useState(true);

  const colorChanger = () => {
    if (origionalColor == false) {
      setColor(data.color);
      setOrigionalColor(true);
    } else {
      setColor("brown");
      setOrigionalColor(false);
    }
  };
  return (
    <>
      <button
        style={{
          ...button,
          color: color,
          borderColor: color,
          cursor: "pointer",
        }}
        onClick={colorChanger}
      >
        {data.text}
      </button>
    </>
  );
};

export default Button;

const button = {
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "5px",
  border: "1px solid",
  backgroundColor: "white",
};
