import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Post.style.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import likeImage from "../../assets/like.png";
import favoriteImage from "../../assets/thumbs-up.png";
import noavatar from "../../assets/avatar-no-image.png";
import axios from "axios";
import * as timeago from "timeago.js";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState([]);

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${post.userId}`
      );
      setUser(response.data);
    };

    fetchUser();
  }, [post.userId]);

  const likedHandler = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/posts/${currentUser._id}/like`
      );
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerLeft">
          {/* image */}

          <img
            className="inputbox__image"
            src={
              user.profilePicture
                ? process.env.REACT_APP_PF + user.profilePicture
                : noavatar
            }
            alt=""
          />

          <div className="post__headerLeftTitle">
            <h4 className="post_headerLeftName">
              <strong>
                <span>{user.username}</span>
              </strong>
            </h4>
            <span className="post_headerLeftHour">
              {timeago.format(post.createdAt)}
            </span>
          </div>
        </div>
        <div className="post_headerRight">
          {/* three dots icons */}
          <MoreHorizIcon className="post__headerRightIcon" />
        </div>
      </div>
      <div className="post__center">
        {/* thoughts */}
        <p className="post__centerThought">{post?.desc}</p>
        {/* image */}
        <img src={process.env.REACT_APP_PF + post.img} alt="" />
      </div>
      <div className="post__bottom">
        <div className="post__bottomUp">
          <div className="post__bottomUpLikes">
            <img src={likeImage} alt="" className="post__bottomUpLikeImage" />
            <img
              src={favoriteImage}
              alt=""
              className="post__bottomUpHeartImage"
            />
            <span>{like}</span>
          </div>
          <div className="post__bottomUpComments">
            <span>0 Comments</span>
            <span>12 Shares</span>
          </div>
        </div>
        <div className="post__bottomDown">
          <div className="post__bottomDownButtons">
            <div className="post__bottomDownLike" onClick={likedHandler}>
              <ThumbUpOutlinedIcon /> <span>Like</span>
            </div>
            <div className="post__bottomDownComment">
              <ChatBubbleOutlineOutlinedIcon /> <span>Comment</span>
            </div>
            <div className="post__bottomDownShare">
              <ShareOutlinedIcon /> <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
