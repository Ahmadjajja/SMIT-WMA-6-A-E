import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
};
const FormHandling = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // Validation part

    if (formData.name.trim() == "" || formData.name.trim().length > 20) {
      setError("Invalid input");
    } else {
      try {
        // We api here
        // throw new Error("something error");

        alert("Data successfully submit!!");
        setFormData(initialState);
      } catch (error) {
        alert(error);
      }
    }
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
        {error != "" && (
          <>
            <div style={{ color: "red" }}>{error}</div>
          </>
        )}
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
