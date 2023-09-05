import React, { useState } from "react";
import Data from "../Data/Data";
const Lists = () => {
  console.log(Data);
  const [data, setData] = useState(Data);
  const changeHandler = (id) => {
    const filteredData = data.filter((item) => item._id != id);
    setData(filteredData);
  };
  const addDataHandler = () => {
    setData([
      ...data,
      {
        _id: "64f7381750c11d92577dc063" + `${"1"}`,
        guid: "8bf7d3ae-9727-4653-9963-87d82a3ab38f",
        isActive: true,
        balance: "$3,99.55",
        picture: "http://placehold.it/32x32",
        age: 36,
        eyeColor: "green",
        name: "Cherie Walter",
        gender: "female",
        company: "CAPSCREEN",
      },
    ]);
  };
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        listStyleType: "none",
      }}
    >
      <li style={{ display: "flex" }}>
        <b>Name</b>{" "}
        <button style={{ marginLeft: "20px" }} onClick={addDataHandler}>
          Add Data
        </button>
      </li>
      {data.map((item) => {
        return (
          <div key={item._id} style={{ display: "flex", margin: "20px" }}>
            <li style={{ marginRight: "20px" }}>{item.name}</li>
            <button
              onClick={() => {
                changeHandler(item._id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default Lists;
