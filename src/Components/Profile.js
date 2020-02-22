import React, { Component } from "react";
import Person from "../person.jpg";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.state = {
      profile: [],
      profileBackup: [],
      profileID: props.match.params.id,
      showEditForm: false
    };
  }

  onEditClick() {
    this.setState({ showEditForm: !this.state.showEditForm });
  }

  handleSave() {
    if (
      this.state.profile.name !== this.state.profileBackup.name ||
      this.state.profile.bio !== this.state.profileBackup.bio ||
      this.state.profile.bdate !== this.state.profileBackup.bdate
    ) {
      axios({
        url: `http://localhost:8080/updateProfile/${this.state.profileID}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          name: this.state.profile.name,
          bio: this.state.profile.bio,
          bdate: this.state.profile.bdate
        })
      })
        .then(this.handleRedirect)
        .then(error => {
          console.log(error);
        });
    } else {
      this.setState({ showEditForm: !this.state.showEditForm });
    }
  }

  handleRedirect(res) {
    if (res.status === 200) {
      window.location.href = `http://localhost:3000/profile/${this.state.profileID}`;
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/getProfile/${this.state.profileID}`)
      .then(response => {
        this.setState({ profile: response.data });
        this.setState({ profileBackup: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container-profile">
        <div className="container-profile-button">
          {this.state.showEditForm ? (
            <div>
              <button className="save-button" onClick={this.handleSave}>
                Save
              </button>
              <button className="cancel-button" onClick={this.onEditClick}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="editprofile-button" onClick={this.onEditClick}>
              Edit This Profile
            </button>
          )}
        </div>
        <div className="profile-cont">
          <img src={Person} alt="John" style={{ right: "0", width: "30%" }} />
          {this.state.showEditForm ? (
            <div className="edit-profile-cont">
              <input
                type="text"
                placeholder="Edit name..."
                value={this.state.profile.name}
                onChange={ev =>
                  this.setState({
                    profile: {
                      name: ev.target.value,
                      bio: this.state.profile.bio,
                      bdate: this.state.profile.bdate
                    }
                  })
                }
              />
              <input
                type="text"
                placeholder="Edit bio..."
                value={this.state.profile.bio}
                onChange={ev =>
                  this.setState({
                    profile: {
                      name: this.state.profile.name,
                      bio: ev.target.value,
                      bdate: this.state.profile.bdate
                    }
                  })
                }
              />
              <input
                type="text"
                placeholder="Edit birth date..."
                value={this.state.profile.bdate}
                onChange={ev =>
                  this.setState({
                    profile: {
                      name: this.state.profile.name,
                      bio: this.state.profile.bio,
                      bdate: ev.target.value
                    }
                  })
                }
              />
            </div>
          ) : (
            <div className="info-cont">
              <h1>{profile.name}</h1>
              <hr></hr>
              <div className="bio">
                Bio: <b>{profile.bio}</b>
              </div>
              <hr></hr>
              <div>
                Date Of Birth: <b>{profile.bdate}</b>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
