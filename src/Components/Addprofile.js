import React, { Component } from "react";
import axios from "axios";

class Addprofile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { name: "", bio: "", bdate: "" };
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      url: "http://localhost:8080/addProfile",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        name: this.state.name,
        bio: this.state.bio,
        bdate: this.state.bdate
      })
    }).then(this.handleRedirect);
  }

  handleRedirect(res) {
    if (res.status === 200) {
      window.location.href = "http://localhost:3000/";
    }
  }

  render() {
    return (
      <div>
        <h2 style={{ marginLeft: "25%" }}>Add a new celebrity</h2>
        <div className="add">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              placeholder="Enter complete name..."
              id="name"
              type="text"
              value={this.state.name}
              onChange={ev => this.setState({ name: ev.target.value })}
            />
            <br />
            <label htmlFor="bio">Bio</label>
            <textarea
              placeholder="Actor/actress..."
              id="bio"
              value={this.state.bio}
              onChange={ev => this.setState({ bio: ev.target.value })}
            ></textarea>
            <br />
            <label htmlFor="bdate">Birth Date</label>
            <input
              placeholder="MM-DD-YY"
              id="bdate"
              type="text"
              value={this.state.bdate}
              onChange={ev => this.setState({ bdate: ev.target.value })}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Addprofile;
