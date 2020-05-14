import React, { useState } from "react";

import "./Profile.css";
import ProfileIntro from "./profileLeft/ProfileIntro";
import ProfileNav from "./ProfileNav";
import Posts from "../posts/Posts";

const Profile = () => {
  const [intro, setIntro] = useState(window.innerWidth < 769 ? false : true);
  return (
    <div className="profile">
      <div
        className={`left ${
          window.innerWidth < 769 ? intro && "intro_open" : ""
        }`}
        style={!intro ? { width: "0px", padding: "0px" } : {}}
      >
        {intro && <ProfileIntro />}
      </div>
      {window.innerWidth < 769 && (
        <h4
          style={intro ? { marginLeft: "0px", marginLeft: "50%" } : {}}
          className="intro_toggle"
          onClick={(e) => setIntro(!intro)}
        >
          {intro ? "<" : ">"}
        </h4>
      )}
      <div
        className="right"
        style={
          window.innerWidth < 769
            ? !intro
              ? { width: "100%", marginLeft: "0px" }
              : {
                  position: "relative",
                  zIndex: "-1",
                  width: "100%",
                  marginLeft: "0px",
                }
            : {}
        }
      >
        <ProfileNav />
        <div className="profile-container">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
