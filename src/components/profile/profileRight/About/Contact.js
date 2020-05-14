import React from "react";

import ProfileIntro from "../../profileLeft/ProfileIntro";
import ProfileNav from "../../ProfileNav";
import AboutNav from "./AboutNav";

const Contact = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <AboutNav navTitle="Contact and basic info" />
        <div className="about-right">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
