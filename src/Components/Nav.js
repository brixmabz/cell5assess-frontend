import React, { Component } from "react";

// import {Nav, Navbar, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';

class Navmain extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h4>Profile Viewer</h4>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <hr></hr>
            <li>
              <a href="add">Add New Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navmain;
