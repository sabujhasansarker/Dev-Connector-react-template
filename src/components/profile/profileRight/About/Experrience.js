import React from "react";

import ProfileIntro from "../../profileLeft/ProfileIntro";
import ProfileNav from "../../ProfileNav";
import AboutNav from "./AboutNav";

const Experrience = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <AboutNav navTitle="Experrience" />
        <div className="about-right">
          <h1>Experrience</h1>
        </div>
      </div>
    </div>
  );
};

export default Experrience;
