import React from "react";
import axios from "axios"

function Register() {
  const fn = (e) => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("password2").value
    console.log(name, email, password, confirmPassword)
    axios.post("/users/register", {
      name,
      email,
      password,
      confirmPassword
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">Register</h1>
          <form onSubmit={(e) => fn(e)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                // value="<%= typeof name != 'undefined' ? name : '' %>"
                value="test"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                // value="<%= typeof name != 'undefined' ? name : '' %>"
                value="test@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Create Password"
                // value="<%= typeof name != 'undefined' ? name : '' %>"
                value="yes"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="form-control"
                placeholder="Confirm Password"
                // value="<%= typeof name != 'undefined' ? name : '' %>"
                value="yes"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
          <p className="lead mt-4">
            Have An Account? <a href="/users/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
