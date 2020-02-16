import React, { Component } from "react";
import Navmain from "./Components/Nav.js";
import Footermain from "./Components/Footer.js";
import Body from "./Components/Body.js";
import Addprofile from "./Components/Addprofile.js";
import Profile from "./Components/Profile.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navmain />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Body} />
              <Route path="/add" component={Addprofile} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </div>
          <Footermain />
        </div>
      </Router>
    );
  }
}

export default App;
