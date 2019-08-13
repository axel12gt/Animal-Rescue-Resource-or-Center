import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Animal Rescue Resource
      </Link>

      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <AuthButton />
      </div>
    </nav>
  );
}

export default Nav;
