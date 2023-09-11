import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <ul
        style={{
          LinkstStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link
          to="/login"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Signup
        </Link>
        <Link
          to="/"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Home
        </Link>
      </ul>
    </div>
  );
};

export default Contact;
