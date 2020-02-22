import React, { Component } from "react";
import { Link } from "react-router-dom";
import Person from "../person.jpg";
import axios from "axios";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/getProfiles")
      .then(response => {
        this.setState({ profiles: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { profiles } = this.state;
    return (
      <div className="row">
        <h2 style={{ textAlign: "center" }}>Celebrity Profiles</h2>
        {profiles.map(profile => (
          <div className="column" key={profile.id}>
            <div className="card">
              <img
                src={Person}
                alt="John"
                style={{ right: "0", width: "40%" }}
              />
              <div className="info">
                <h5>{profile.name}</h5>
                <div className="button-cont">
                  <Link
                    to={`/profile/${profile.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button>View Profile</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Body;
