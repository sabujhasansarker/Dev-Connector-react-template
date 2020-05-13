import React from "react";

import ProfileForm from "../../forms/ProfileForm";
import ProfileNav from "../ProfileNav";
import ProfileIntro from "../profileLeft/ProfileIntro";

const UpdateInfo = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <ProfileForm />
      </div>
    </div>
  );
};

export default UpdateInfo;
