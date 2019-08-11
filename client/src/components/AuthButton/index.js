import React from "react";
import { Link, withRouter } from "react-router-dom";
import Auth from "../../utils/Auth";
//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) =>
  Auth.isAuthenticated ? (
    // <div className="container">
    //   <p>Success! You are Logged In!</p>
    //   <button
    //     className="btn btn-danger"
    //     onClick={() => {
    //       Auth.signout(() => history.push("/"));
    //     }}
    //   >
    //     Sign out
    //   </button>
    // </div>
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
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
          to="/login"
        >
          Login
        </Link>
      </li>
      <li className="navbar-nav">
        <Link
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
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
