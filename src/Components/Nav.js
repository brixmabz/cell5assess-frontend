import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navmain extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>Profile Viewer</h4>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <h6>Home</h6>
              </li>
            </Link>
            <Link to="/add" style={{ textDecoration: "none" }}>
              <li>
                <h6>Add New Profile</h6>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navmain;
