import React from "react";
import "./Story.style.css";
import StoryCard from "../storycard/StoryCard";
const data = [
  {
    name: "Cihan Özmen",
    profile: "https://blog.adgager.com/wp-content/uploads/2017/07/kspsk.jpg",
    story: "https://i.ytimg.com/vi/3-Clvh1WMpE/maxresdefault.jpg",
  },
  {
    name: "Elon Musk",
    profile:
      "http://upload.turkcewiki.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    story:
      "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/11/08/8d7e399e-cb75-4071-abd7-7c4ad020718a/elon-musk-turkiyede",
  },
  {
    name: "Bill Gates",
    profile:
      "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    story:
      "https://i.insider.com/5b02e88b3797e92a008b4f05?width=1100&format=jpeg&auto=webp",
  },
  {
    name: "Jeff Bezoss",
    profile:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
    story:
      "https://blog.ofix.com/wp-content/uploads/2020/08/jeff_bezosun_basari_hikayesi_ofix_blog_1.jpg",
  },
  {
    name: "Mark Zuckerbag",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    story:
      "https://i.internethaber.com/files/2016/7/14/1610625/1610625_0_1468502802KSJYx.jpg",
  },
];

function Story() {
  return (
    <div className="story__container">
      {data.map((person, index) => {
        return (
          <StoryCard
            key={index}
            name={person.name}
            profile={person.profile}
            story={person.story}
          />
        );
      })}
    </div>
  );
}

export default Story;
