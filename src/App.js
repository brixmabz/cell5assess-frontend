import React, { Component } from "react";
import Navmain from "./Components/Nav.js";
import Footermain from "./Components/Footer.js";
import Body from "./Components/Body.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navmain />
        <div className="container">
          <Body />
        </div>
        <Footermain />
      </div>
    );
  }
}

export default App;
