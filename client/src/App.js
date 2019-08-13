import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
// import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
import "./App.css"
import HomePage from "./pages/Homepage";

//Now we have all the stuff we need .. let's render some components with the Router
const App = () => (
  <Router>
    <div>
      <Nav className="App-header" />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/public" component={PublicRoute} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/protected" component={ProtectedRoute} />
        </Switch>
      </Container>
    </div>
  </Router>
);

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;
