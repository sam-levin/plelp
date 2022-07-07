import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {};

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <h1>Plelp</h1>
        </Link>

        {Auth.loggedIn() ? (
          <>
            <Link to="/">
              <a>Cities</a>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <p>Log In</p>
            </Link>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
