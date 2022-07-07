import React, { useState } from "react";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            className="form-control"
            placeholder="Your username"
            name="username"
            type="username"
            id="username"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            className="form-control"
            name="password"
            placeholder="********"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;