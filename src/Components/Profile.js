import React, { useState, useEffect } from "react";
import Person from "../person.jpg";

function Profile({ match }) {
  useEffect(() => {
    fetchProfile();
  });

  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    const data = await fetch(
      `http://localhost:8080/getProfile/${match.params.id}`
    );
    const profile = await data.json();

    setProfile(profile);
  };

  const handleSuccess = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className="container-profile">
      <div className="container-profile-button">
        <button className="editprofile-button">Edit This Profile</button>
        <button className="save-button">Save</button>
        <button className="cancel-button">Cancel</button>
      </div>
      <div className="profile-cont">
        <img src={Person} alt="John" style={{ right: "0", width: "30%" }} />
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
        <div className="form-info-cont"></div>
      </div>
    </div>
  );
}

export default Profile;
