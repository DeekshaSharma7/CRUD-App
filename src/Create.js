import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; //After successfully adding a user, the component navigates back to the home page ("/")

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users); // used to access the state from the Redux store.

  const dispatch = useDispatch(); // a function used to send actions to the Redux store.
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1]?.id + 1 || 1, name, email })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add new User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Create</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
