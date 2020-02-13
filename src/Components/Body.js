import React, { Component } from "react";
import Person from "../person.jpg";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <h2 style={{ textAlign: "center" }}>Celebrity Profiles</h2>
        <div className="column">
          <div className="card">
            <img src={Person} alt="John" style={{ right: "0", width: "30%" }} />
            <div className="info">
              <h5>Brixzel Mabala</h5>
              <div className="button-cont">
                <button>View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
