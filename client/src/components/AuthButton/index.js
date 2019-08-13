import React from "react";
import { Link, withRouter } from "react-router-dom";
import Auth from "../../utils/Auth";

const AuthButton = withRouter(({ history }) =>
  Auth.isAuthenticated ? (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          onClick={() => {
            Auth.signout(() => history.push("/"));
          }}
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
          to="/"
        >
          signout
        </Link>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li>
        <Link
          className={
            window.location.pathname === "/login"
              ? "nav-link active"
              : "nav-link"
          }
          to="/login"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          className={
            window.location.pathname === "/register"
              ? "nav-link active"
              : "nav-link"
          }
          to="/register"
        >
          Register
        </Link>
      </li>
    </ul>
  )
);

export default AuthButton;
