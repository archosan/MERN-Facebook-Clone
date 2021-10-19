import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/authContext";
const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to={"/"} /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to={"/"} /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
