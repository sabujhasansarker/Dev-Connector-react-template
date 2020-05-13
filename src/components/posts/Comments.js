import React from "react";
import Replay from "./Replay";

const Comments = () => {
  return (
    <div className="comments">
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Enter your comment" />
        </div>
      </form>
      <div className="comment-body">
        <img
          className="user-head-image"
          src="/uploads/2017-03-20-18-36-07-721.jpg"
          alt=""
        />
        <div className="comment-text">
          <p className="text">
            <b>Sabuj Hasan Sarker</b> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quod, molestiae ipsam! Similique sunt, cumque
            ipsum voluptates quisquam saepe, non amet voluptate porro
            reprehenderit, laudantium eligendi deserunt hic ea natus aliquam!
          </p>
          <p> just Now</p>
        </div>
      </div>
      <div className="replay-section">
        <Replay />
      </div>
    </div>
  );
};

export default Comments;
