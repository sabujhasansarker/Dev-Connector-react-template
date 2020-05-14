import React from "react";

import ProfileIntro from "../../profileLeft/ProfileIntro";
import ProfileNav from "../../ProfileNav";
import AboutNav from "./AboutNav";
import Overview from "./Overview";

const About = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <AboutNav navTitle="OverView" />
        <Overview />
      </div>
    </div>
  );
};

export default About;
