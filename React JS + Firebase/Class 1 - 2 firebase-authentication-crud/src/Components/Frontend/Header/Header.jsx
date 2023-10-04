import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";
import { auth } from "../../../Config/firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuthContext();

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.toastify("User signOut Successfully!!", "success");
        setUser({});
        setIsAuthenticated(false);
      })
      .catch((error) => {
        // An error happened.
        window.toastify(error.message, "error");
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"home"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"contact"} className="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"dashboard"} className="nav-link" href="#">
                  Dashbaord
                </Link>
              </li>
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link to={"auth/login"} className="nav-link" href="#">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"auth/register"} className="nav-link" href="#">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <span
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                    onClick={logOutHandler}
                  >
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
