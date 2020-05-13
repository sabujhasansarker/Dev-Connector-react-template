import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../icons/main-logo.svg";
import usersetting from "../../icons/user-setting.svg";
import logoutimg from "../../icons/logout.svg";

const Navbar = () => {
  const auth = (
    <Fragment>
      <div className="right d-flex">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <input type="text" placeholder="Search" />
      </div>
      <div className="left">
        <ul className="d-flex">
          <li>
            <Link to="/:username" className="d-flex">
              <img
                className="userimage"
                src="/uploads/2017-03-20-18-36-07-721.jpg"
                alt=""
              />
              Sabuj
            </Link>
          </li>
          <li>
            <Link to="setting">
              <img src={usersetting} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="profile">
              <img src={logoutimg} alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
  const gast = (
    <Fragment>
      <div className="right d-flex">
        <img className="gest" src={logo} alt="logo" />
      </div>
      <div className="left">
        <ul className="d-flex">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <header>
      <nav className="container d-flex">{gast}</nav>
    </header>
  );
};

export default Navbar;
