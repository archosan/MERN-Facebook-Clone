import React, { useState, useEffect } from "react";
import "./Feed.style.css";
import Story from "../story/Story";
import InputBox from "../inputbox/InputBox";
import Post from "../post/Post";
import axios from "axios";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };

    fetchData();
  }, []);

  return (
    <div className="feed__container">
      <div className="feed__body">
        <Story />
        <InputBox />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
