import React from "react";

import ProfileIntro from "../../profileLeft/ProfileIntro";
import ProfileNav from "../../ProfileNav";
import AboutNav from "./AboutNav";

const Github = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <AboutNav navTitle="Github" />
        <div className="about-right">
          <h1>Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Github;
