import React from "react";
import "./OnlineUser.style.css";
function OnlineUser({ user }) {
  return (
    <div className="onlineUser__container">
      <div className="onlineUser__left">
        <img
          src={user.profilePicture}
          alt=""
          className="onlineUser__profilePic"
        />
        <span className="onlineUser__status"></span>
      </div>
      <span className="onlineUser__name">{user.username}</span>
    </div>
  );
}

export default OnlineUser;
