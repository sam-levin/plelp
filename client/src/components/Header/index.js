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
            <Link to="/">Cities</Link>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;