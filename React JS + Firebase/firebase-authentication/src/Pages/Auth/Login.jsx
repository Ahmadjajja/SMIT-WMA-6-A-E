import React, { useState, useEffect } from "react";

const initialState = { email: "", password: "" };

export default function Login() {
  const [state, setState] = useState(initialState);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);

    const { email, password } = state;
    console.log("email : ", email, "password : ", password);
  };

  const handleLogout = () => {};

  const showAuthUser = () => {};

  const handleEmailVerification = () => {};

  return (
    <main>
      <div className="py-5 w-100">
        <div className="container">
          {user.email ? (
            <div className="row">
              <div className="col text-center">
                <h2 className="text-white">User Email: {user.email}</h2>
                <h2 className="text-white">User UID: {user.uid}</h2>
                <h2 className="text-white">
                  User Display Name: {user.displayName}
                </h2>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
                <br />
                <button className="btn btn-info my-3" onClick={showAuthUser}>
                  Show Auth Current User
                </button>
                <br />
                <button
                  className="btn btn-light mt-3"
                  onClick={handleEmailVerification}
                >
                  Send Email Verification
                </button>
                <br />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="card p-2 p-md-4 p-lg-5">
                  <h2 className="text-center mb-4">Login Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        <button className="btn btn-outline-success w-50">
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
