import React from "react";

import cross from "../../icons/cross.svg";

const Alert = () => {
  return (
    <div className="alert-container">
      <div className=" container d-flex success alert">
        <p>Update user</p>
        <img src={cross} alt="" />
      </div>
    </div>
  );
};

export default Alert;
