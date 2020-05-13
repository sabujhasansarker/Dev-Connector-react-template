import React from "react";

import "./Profile.css";
import ProfileIntro from "./profileLeft/ProfileIntro";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Profile;
