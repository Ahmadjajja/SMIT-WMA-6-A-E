import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to={"/"} class="navbar-brand" href="#">
            CRUD
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to={"home"}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"contact"} class="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"dashboard"} class="nav-link" href="#">
                  Dashbaord
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"auth/login"} class="nav-link" href="#">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"auth/register"} class="nav-link" href="#">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
