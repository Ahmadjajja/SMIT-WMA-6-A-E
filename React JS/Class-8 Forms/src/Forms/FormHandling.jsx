import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const changeHandler = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // This above prevents web application from refreshing
    console.log(formData);
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={submitHandler}
      >
        <label htmlFor="name">Enter Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={changeHandler}
          value={formData.name}
        />
        <label htmlFor="name">Enter Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandling;
