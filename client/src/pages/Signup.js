import React, { useState } from "react";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
      <div>
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              className="form-control"
              placeholder="Your username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              className="form-control"
              placeholder="********"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;