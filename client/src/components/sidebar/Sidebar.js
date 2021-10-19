import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Sidebar.style.css";
import SidebarIcon from "../sidebarIcon/SidebarIcon";
import friendsLogo from "../../assets/friends.png";
import groupsLogo from "../../assets/groups.png";
import pagesLogo from "../../assets/pages.png";
import marketplaceLogo from "../../assets/marketplace.png";
import watchLogo from "../../assets/videos.png";
import memoriesLogo from "../../assets/memories.png";
import recordedLogo from "../../assets/recorded.png";
import eventsLogo from "../../assets/events.png";
import jobsLogo from "../../assets/joobs.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sidebar__container">
      <SidebarIcon
        src={process.env.REACT_APP_PF + user.profilePicture}
        name={user.username}
      />
      <SidebarIcon src={friendsLogo} name="Friends" />
      <SidebarIcon src={groupsLogo} name="Groups" />
      <SidebarIcon src={recordedLogo} name="Saved" />
      <SidebarIcon src={pagesLogo} name="Pages" />
      <SidebarIcon src={marketplaceLogo} name="Marketplace" />
      <SidebarIcon src={watchLogo} name="Watch" />
      <SidebarIcon src={memoriesLogo} name="Memories" />
      <SidebarIcon src={eventsLogo} name="Events" />
      <SidebarIcon src={jobsLogo} name="Jobs" />
      <SidebarIcon Icon={KeyboardArrowDownIcon} name="See More" />
    </div>
  );
}

export default Sidebar;
