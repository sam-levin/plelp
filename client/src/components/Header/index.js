import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className="navbar temp navbar-expand-lg container navbar-light bg-light">
        <div className="row p-3 ">
        <Link className='col-sm' to="/">
          <h1>Plelp</h1>
        </Link>
        </div>
        {Auth.loggedIn() ? (
          <>
          <div className="row p-2">
            <Link className="p-2" to="/">
              <a>Cities</a>
            </Link>
            <a href="/" onClick={logout}>
              Log out
            </a>
            </div>
          </>
          
        ) : (
          <>
          <div className="row">
            <Link className="col-sm p-2" to="/login">
              <p>Log In</p>
            </Link>
            <Link className="col-sm p-2" to="/signup">
              <p>Sign Up</p>
            </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
