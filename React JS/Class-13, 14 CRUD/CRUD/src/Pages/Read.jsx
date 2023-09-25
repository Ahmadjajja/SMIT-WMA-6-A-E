import React, { useContext, useState } from "react";
import { userContext } from "../Context/UserContextProvider";

const Read = () => {
  const { data, setData } = useContext(userContext);
  const [updatedUser, setUpdatedUser] = useState();
  const [userId, setUserId] = useState("");
  const changeHandler = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleDelete = (id) => {
    let filteredData = data.filter((user, index) => {
      return index != id;
    });
    setData(filteredData);
  };
  const editHandler = (i) => {
    setUserId(i);
    let prevUser = data.find((user, i) => i == userId);
    setUpdatedUser(prevUser);
  };
  const updateHandler = () => {};
  return (
    <>
      <table style={{ margin: "0 auto" }}>
        <tr>
          <th className="px-3">Name</th>
          <th className="px-3">Email</th>
          <th className="px-3">Actions</th>
        </tr>
        {data.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => editHandler(i)}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update User
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-center align-items-center flex-column">
              <label htmlFor="name">Enter name: </label>
              <input
                type="text"
                name="name"
                id="name"
                // value={updatedUser.name}
                onChange={changeHandler}
              />
              <label htmlFor="email">Enter email: </label>
              <input
                type="email"
                name="email"
                id="email"
                // value={updatedUser.email}
                onChange={changeHandler}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={updateHandler}
              >
                Update user
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
