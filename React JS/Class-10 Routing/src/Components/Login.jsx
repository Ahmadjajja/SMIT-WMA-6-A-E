import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          to="/contact"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Login;
