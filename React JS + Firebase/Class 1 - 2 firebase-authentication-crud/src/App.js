import "./App.scss";
import React, { useEffect, useState } from "react";
import Routes from "../src/Pages/Routes";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../src/Config/global";
import AuthContextProvider from "./Context/AuthContext";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1 className="text-center">Loading...</h1>
        </div>
      ) : (
        <>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </>
  );
}

export default App;
