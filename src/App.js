import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://us-central1-react-mukh-boi-project.cloudfunctions.net/api";

const token = localStorage.FBIdToken;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
