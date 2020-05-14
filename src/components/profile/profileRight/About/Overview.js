import React from "react";

const Overview = () => {
  return (
    <div className="profile">
      <div className="left">
        <ProfileIntro />
      </div>
      <div className="right">
        <ProfileNav />
        <AboutNav />
      </div>
    </div>
  );
};

export default Overview;
