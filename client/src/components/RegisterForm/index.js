import React from "react";

class RegisterForm extends React.Component {
  // refs
  form: null;
  usernameElem: null;
  passwordElem: null;

  render() {
    const { onRegister } = this.props;
    console.log(`Register form props are: ${JSON.stringify(this.props)}`);

    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">Register</h1>{" "}
            {/* <form onSubmit={(e) => fn(e)}> */}
            <form
              ref={elem => (this.form = elem)}
              onSubmit={e => {
                e.preventDefault();
                return onRegister({
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
                  id="userName"
                  name="username"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
				  type="password"
				  ref={input => (this.passwordElem = input)}
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Create Password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <p className="lead mt-4">
              Have An Account? <a href="./login">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
