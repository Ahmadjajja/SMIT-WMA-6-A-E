import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
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
            textDecoration: "none",
          }}
        >
          Login
        </Link>
        <Link
          to={"/signup"}
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
          to={"/contact"}
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

export default Home;
