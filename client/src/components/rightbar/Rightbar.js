import React from "react";
import "./Rightbar.style.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OnlineUser from "../onlineUser/OnlineUser";
import { Users } from "../../dummyData";
function Rightbar() {
  return (
    <div className="rightbar__container">
      <div className="rightbar__header">
        <h3 className="rightbar__headerTitle">Contacts</h3>
        <div className="rightbar__headerRight">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      {Users.map((user) => (
        <OnlineUser key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Rightbar;
