import React from "react";

import ProfileIntro from "../profileLeft/ProfileIntro";
import ProfileNav from "../ProfileNav";

const About = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <h1>About</h1>
      </div>
    </div>
  );
};

export default About;
