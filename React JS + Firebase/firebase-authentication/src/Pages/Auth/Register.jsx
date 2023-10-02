import React, { useState } from "react";
const initialState = { email: "", password: "", confirmPassword: "" };

function Register() {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    console.log(state);

    const { email, password, confirmPassword } = state;
    console.log("email : ", email, "password : ", password);

    if (confirmPassword !== password) {
      window.toastify("Password doesn't match", "error");
      return;
    }
  };

  return (
    <main>
      <div className="py-5 w-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="card p-2 p-md-4 p-lg-5">
                <h2 className="text-center mb-4">Register Form</h2>
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
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="ConfirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <button className="btn btn-outline-success w-50">
                        {!isProcessing ? (
                          <span>Register</span>
                        ) : (
                          <div className="spinner spinner-grow spinner-grow-sm"></div>
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

export default Register;
