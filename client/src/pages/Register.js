import React from "react";
import axios from "axios"

class Register extends React.component {

  componentDidMount(){
    const name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
    const 

  }
    fn = (e) => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value
    console.log(name, email, password, password2)
    // localStorage.setItem("name", name)
    // localStorage.setItem("email", email)
    axios.post("/users/register", {
      name,
      email,
      password,
      password2
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

render(){
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
}

export default Register;
