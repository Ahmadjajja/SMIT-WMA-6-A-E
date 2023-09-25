import { userContext } from "../Context/UserContextProvider";
import "../Styles/HeroSection.css";
import React, { useState, useContext } from "react";
const initialUser = {
  name: "",
  email: "",
  _id: "",
};
export default function Create() {
  let { data, setData, test } = useContext(userContext);
  const [user, setUser] = useState(initialUser);
  const [count, setCount] = useState(0);
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      _id: Math.random().toString(36).slice(2),
    });

    console.log("previous users : ", data);
    console.log("current user : ", user);
    setData([...data, user]);
    setUser(initialUser);
  };
  return (
    <>
      <form
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center flex-column"
        onSubmit={submitHandler}
      >
        <label htmlFor="name">Enter name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={changeHandler}
        />
        <label htmlFor="email">Enter email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={changeHandler}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add user
        </button>
      </form>
    </>
  );
}
