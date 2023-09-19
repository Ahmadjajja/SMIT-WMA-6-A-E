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
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      _id:
        data.length > 0
          ? data[data.length - 1]._id + "1"
          : "64f7381750c11asdff577dc069",
    });
    console.log("previous users : ", data);
    console.log("current user : ", user);
    setData([...data, user]);
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
