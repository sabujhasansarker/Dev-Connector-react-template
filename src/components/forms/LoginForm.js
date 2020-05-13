import React from "react";
import { Link } from "react-router-dom";

import "./Form.css";

const LoginForm = () => {
  return (
    <div className="from-container login">
      <div className=" card">
        <h1 className="text-center">Login</h1>
        <form action="" className="form">
          <div className="form-group ">
            <input type="Email" placeholder="Enter your username or email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group float-right">
            <input type="button" value="Login" className="btn btn-large" />
          </div>
          <br />
          <p className="text">
            If you are not user please <Link to="/register">register !</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
