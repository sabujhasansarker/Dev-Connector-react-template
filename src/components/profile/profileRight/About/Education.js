import React from "react";

import ProfileIntro from "../../profileLeft/ProfileIntro";
import ProfileNav from "../../ProfileNav";
import AboutNav from "./AboutNav";

const Education = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <AboutNav navTitle="Education" />
        <div className="about-right">
          <h1>Education</h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
