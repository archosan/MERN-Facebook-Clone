import React, { useState } from "react";
import "./TopBar.style.css";
import HeaderIcon from "../headerIcon/HeaderIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import GamepadIcon from "@mui/icons-material/Gamepad";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
function TopBar() {
  const { user } = useContext(AuthContext);
  const [profFile, setProfFile] = useState(null);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
    };

    if (profFile) {
      const data1 = new FormData();
      const profFileName = Date.now() + profFile.name;
      data1.append("name", profFileName);
      data1.append("file", profFile);
      updatedUser.profilePicture = profFileName;

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/upload`, data1);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${user._id}`,
        updatedUser
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="topbar_container">
      <div className="topbarLeft">
        {/* <FacebookOutlinedIcon className="topbarLeft__icon" /> */}
        <img
          src={
            "https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png"
          }
          className="topbarLeft__icon"
          alt="facebook_icon"
        />
        <div className="topbarLeft__searchContainer">
          <SearchIcon className="searchContainer__icon" />
          <input
            placeholder="Search in Facebook"
            className="searchContainer__input"
          />
        </div>
      </div>
      <div className="topbarCenter">
        <HeaderIcon active Icon={HomeOutlinedIcon} />
        <HeaderIcon Icon={OndemandVideoIcon} />
        <HeaderIcon Icon={StorefrontIcon} />
        <HeaderIcon Icon={GroupsIcon} />
        <HeaderIcon Icon={GamepadIcon} />
      </div>
      <form
        onSubmit={handleProfileSubmit}
        encType="multipart/form-data"
        className="topbarRight"
      >
        <label htmlFor="profFile" className="topbarRight__avatarContainer">
          <Avatar
            className="topbarRight__icon"
            src={
              user.profilePicture &&
              process.env.REACT_APP_PF + user.profilePicture
            }
          />
          <input
            type="file"
            id="profFile"
            name="profFile"
            onChange={(e) => setProfFile(e.target.files[0])}
            style={{ display: "none" }}
            onClick={(e) => setProfFile(null)}
          />
          <p className="topbarRight__name">{user.username} </p>
        </label>
        {profFile && (
          <div className="profFileContainer">
            <img
              className="shareProfImg"
              src={URL.createObjectURL(profFile)}
              alt=""
            />
            <div className="profFileContainer__buttonContainer">
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                type="submit"
              >
                <DoneIcon className="shareProfImgDone" />
              </button>
              <CloseIcon
                className="shareProfImgCancel"
                onClick={() => setProfFile(null)}
              />
            </div>
          </div>
        )}
        <div className="topbarRight__icons">
          <div className="topbarRight__iconContainer">
            <AppsIcon className="topbarRight__icon" />
          </div>
          <div className="topbarRight__iconContainer">
            <ChatIcon className="topbarRight__icon" />
          </div>
          <div className="topbarRight__iconContainer">
            <NotificationsIcon className="topbarRight__icon" />
          </div>
          <div className="topbarRight__iconContainer">
            <ArrowDropDownIcon className="topbarRight__icon" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TopBar;
