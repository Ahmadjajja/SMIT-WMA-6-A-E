import React, { createContext, useState } from "react";
export const userContext = createContext();
const initialData = [
  {
    _id: "64f7381750c11d92577dc069",
    name: "name1",
    email: "ahmad1@gmail.com",
  },
  {
    _id: "64f7381797d1ade2fb32ddc7",
    name: "name2",
    email: "ahmad2@gmail.com",
  },
  {
    _id: "64f73817a3d70e262fa95c21",
    name: "name3",
    email: "ahmad3@gmail.com",
  },
  {
    _id: "64f738177b5c3c62e5fb7e01",
    name: "name4",
    email: "ahmad4@gmail.com",
  },
];
const UserContextProvider = (props) => {
  const [data, setData] = useState(initialData);
  const [test, setTest] = useState("initialData");
  return (
    <userContext.Provider value={{ data, setData, test }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
