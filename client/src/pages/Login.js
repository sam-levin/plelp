import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            className="form-control"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
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
