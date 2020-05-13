import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">Timeline</Link>
        </li>
        <li>
          <Link to="/profile/about">About</Link>
        </li>
        <li>
          <Link to="/profile/update-profile">Update Info</Link>
        </li>
        <li>
          <Link to="/profile/active-log">Active Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
