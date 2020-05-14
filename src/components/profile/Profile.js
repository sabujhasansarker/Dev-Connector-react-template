import React from "react";

import "./Profile.css";
import ProfileIntro from "./profileLeft/ProfileIntro";
import ProfileNav from "./ProfileNav";
import Posts from "../posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <div className="profile-container">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
