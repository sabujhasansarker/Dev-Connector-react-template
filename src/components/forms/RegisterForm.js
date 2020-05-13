import React from "react";
import { Link } from "react-router-dom";

import "./Form.css";

const RegisterForm = () => {
  return (
    <div className="from-container register">
      <div className=" card">
        <h1 className="text-center">Register</h1>
        <form action="" className="form">
          <div className="form-group d-flex">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group ">
            <input type="Email" placeholder="Enter your email" />
          </div>
          <div className="form-group d-flex">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Again password" />
          </div>
          <div className="form-group float-right">
            <input type="button" value="Register" className="btn btn-large" />
          </div>
          <br />
          <p className="text">
            If you are not user please <Link to="/login">Login !</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
