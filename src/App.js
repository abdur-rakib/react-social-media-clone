import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import JwtDecode from "jwt-decode";

import store from "./redux/store";
import { logoutUser, getUserData } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";
import AuthRoute from "./util/AuthRoute";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://us-central1-react-mukh-boi-project.cloudfunctions.net/api";

const App = () => {
  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = JwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
      window.location.href = "/login";
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUserData());
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        {/* {!authenticated ? <Login /> : <Home />} */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <AuthRoute path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
