import React from "react";
import ReadProducts from "./ReadProducts";
import AddProduct from "./AddProduct";
const Home = () => {
  return (
    <div id="CRUD">
      <AddProduct />
      <ReadProducts />
    </div>
  );
};

export default Home;
