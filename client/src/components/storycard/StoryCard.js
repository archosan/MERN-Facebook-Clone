import React from "react";
import "./StoryCard.style.css";

function StoryCard({ name, profile, story }) {
  return (
    <div className="storycard_container">
      <img src={story} alt="story_img" className="storycard__image" />
      <img src={profile} alt="profile_pic" className="storycard__profile" />
      <p className="storycard__name">{name}</p>
    </div>
  );
}

export default StoryCard;
