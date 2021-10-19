import React, { useRef, useState } from "react";
import "./InputBox.style.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoIcon from "@mui/icons-material/Photo";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
function InputBox() {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/upload`, data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/posts`, newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inputbox__body">
      <div className="inputbox__top">
        <Avatar
          className="inputbox__icon"
          src={
            user.profilePicture &&
            process.env.REACT_APP_PF + user.profilePicture
          }
        />

        <div className="inputbox__inputContainer">
          <form onSubmit={handleSubmit} style={{ display: "flex", flex: 1 }}>
            <input
              type="text"
              className="inputbox__input"
              placeholder={`What's on yout mind, ${user.username}?`}
              ref={desc}
            />
            <button type="submit">hiddensubmit</button>
          </form>
        </div>
      </div>
      {file && (
        <div className="shareImgContainer">
          <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
          <CancelIcon
            className="shareCancelImg"
            onClick={() => setFile(null)}
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="inputbox__bottom">
        <div className="inputbox__bottomleft">
          <VideocamIcon className="bottomleft_videoIcon" />
          <p>Live Video</p>
        </div>
        <label htmlFor="file" className="inputbox__bottomcenter">
          <PhotoIcon className="bottomcenter_photoIcon" />
          <p>Photo/Video</p>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </label>
        <div className="inputbox__bottomright">
          <AddReactionIcon className="bottomright_activityIcon" />
          <p>Feeling/Activity</p>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
