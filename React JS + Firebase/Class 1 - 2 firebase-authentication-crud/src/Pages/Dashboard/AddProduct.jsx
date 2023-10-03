import React, { useState } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../Config/firebase";
const initialState = { title: "", description: "", price: "" };

export default function AddProduct() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(state);

    let { title, description, price } = state;

    title = title.trim();
    description = description.trim();
    price = Number(price);

    if (title.length < 3) {
      window.toastify(`title ki length km hai`, "error");
      return;
    }
    if (description.length < 10) {
      window.toastify(`description ki length km hai`, "error");
      return;
    }
    if (!price || price < 0) {
      window.toastify(`price km hai`, "error");
      return;
    }
    setIsLoading(true);
    let productId = Math.random().toString(36).slice(2);
    let formData = { title, description, price, productId };

    // Method - 1

    // try {
    //   const docRef = await addDoc(collection(firestore, "products"), formData);
    //   console.log("Document written with ID: ", docRef.id);
    //   window.toastify(`Document written with ID: ${docRef.id}`, "success");
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    //   window.toastify(`Error adding document: ${e.message}`, "error");
    // }

    // Method-2
    // Add a new document in collection "cities"
    try {
      await setDoc(doc(firestore, "products", productId), formData);
      console.log("Document written with ID: ", productId);
      window.toastify(`Document written with ID: ${productId}`, "success");
    } catch (e) {
      console.error("Error adding document: ", e);
      window.toastify(`Error adding document: ${e.message}`, "error");
    }

    setIsLoading(false);
  };

  return (
    <main>
      <div className="py-5 w-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="card p-2 p-md-4 p-lg-5">
                <h2 className="text-center mb-4">Add Product Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <button className="btn btn-outline-success w-50">
                        {!isLoading ? (
                          <span>Add Product</span>
                        ) : (
                          <div className="text-center">
                            <div className="spinner-border text-dark"></div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
