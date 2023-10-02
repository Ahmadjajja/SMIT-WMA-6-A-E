import "./App.scss";
import Routes from "../src/Pages/Routes";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../src/Config/global";
function App() {
  return (
    <>
      <Routes />
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
  );
}

export default App;
