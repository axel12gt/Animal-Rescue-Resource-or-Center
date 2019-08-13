import React from "react";

class LoginForm extends React.Component {
  // refs
  form: null;
  usernameElem: null;
  passwordElem: null;

  render() {
    const { onLogin } = this.props;
    return (
      <div>
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">Login</h1>
              {/* <form action="users/login" method="POST"> */}
              <form
                ref={elem => (this.form = elem)}
                onSubmit={e => {
                  e.preventDefault();
                  return onLogin({
                    username: this.usernameElem.value,
                    password: this.passwordElem.value
                  });
                }}
              >
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    ref={input => (this.usernameElem = input)}
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      ref={input => (this.passwordElem = input)}
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-3"
                    >
                      Login
                    </button>
                    <p className="lead mt-4">
                      No Account? <a href="/register">Register</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
