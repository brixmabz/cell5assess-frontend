import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Person from "../person.jpg";

function Body() {
  useEffect(() => {
    fetchProfiles();
  }, []);

  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const data = await fetch("http://localhost:8080/getProfiles", {
      mode: "cors"
    });

    const profiles = await data.json();
    setProfiles(profiles);
  };

  return (
    <div className="row">
      <h2 style={{ textAlign: "center" }}>Celebrity Profiles</h2>
      {profiles.map(profile => (
        <div className="column" key={profile.id}>
          <div className="card">
            <img src={Person} alt="John" style={{ right: "0", width: "40%" }} />
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

export default Body;
