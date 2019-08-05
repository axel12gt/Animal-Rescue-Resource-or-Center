import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./pages/Test/Test";
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/users/login" component={Login}/>
          <Route exact path="/users/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
